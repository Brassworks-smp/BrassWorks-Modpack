/* 
BSL Shaders v10 Series by Capt Tatsu 
https://capttatsu.com 
*/

/*
const int clrwl_shadowOpaque0Target = 0;
*/

//Settings//
#include "/lib/settings.glsl"

//Fragment Shader///////////////////////////////////////////////////////////////////////////////////
#ifdef FSH

//Varyings//
#ifdef WATER_CAUSTICS
varying vec3 worldPos;
#endif

//Uniforms//
#ifdef WATER_CAUSTICS
uniform int worldTime;

uniform float frameTimeCounter;

uniform sampler2D noisetex;
#endif

//Common Variables//
#ifdef WATER_CAUSTICS
#ifdef WORLD_TIME_ANIMATION
float time = float(worldTime) * 0.05 * ANIMATION_SPEED;
#else
float time = frameTimeCounter * ANIMATION_SPEED;
#endif

//Common Functions//
float GetWaterHeightMap(vec3 worldPos, vec2 offset) {
    float noise = 0.0, noiseA = 0.0, noiseB = 0.0;
    
    vec2 wind = vec2(time) * 0.5 * WATER_SPEED;

	worldPos.xz -= worldPos.y * 0.2;

	#if WATER_NORMALS_INTERNAL == 1
	offset /= 256.0;
	noiseA = texture2D(noisetex, (worldPos.xz - wind) / 256.0 + offset).g;
	noiseB = texture2D(noisetex, (worldPos.xz + wind) / 48.0 + offset).g;
	#elif WATER_NORMALS_INTERNAL == 2
	offset /= 256.0;
	noiseA = texture2D(noisetex, (worldPos.xz - wind) / 256.0 + offset).r;
	noiseB = texture2D(noisetex, (worldPos.xz + wind) / 96.0 + offset).r;
	noiseA *= noiseA; noiseB *= noiseB;
	#endif
	
	#if WATER_NORMALS_INTERNAL > 0
	noise = mix(noiseA, noiseB, WATER_DETAIL);
	#endif

    return noise * WATER_CAUSTICS_STRENGTH;
}
#endif

//Includes//
#ifdef WATER_SHADOW_COLOR
#include "/lib/color/waterColor.glsl"
#endif

//Program//
void main() {
	flw_sampleColor = texture(flw_diffuseTex, flw_vertexTexCoord);
	flw_fragColor = flw_vertexColor * flw_sampleColor;
	flw_fragOverlay = flw_vertexOverlay;
	flw_fragLight = flw_vertexLight;

	flw_materialFragment();

    float premult = 0.0;
	if (flw_fragColor.a < 0.01) discard;

    #ifdef SHADOW_COLOR
	flw_fragColor.rgb = mix(vec3(1.0), flw_fragColor.rgb, 1.0 - pow(1.0 - flw_fragColor.a, 1.5));
	flw_fragColor.rgb *= 1.0 - pow(flw_fragColor.a, 96.0);
	#endif

	#ifdef WATER_CAUSTICS
	flw_fragColor.rgb *= 0.25;
	#endif

	gl_FragData[0] = flw_fragColor;
}

#endif

//Vertex Shader/////////////////////////////////////////////////////////////////////////////////////
#ifdef VSH

#extension GL_ARB_shader_image_load_store : enable

//Varyings//
#ifdef WATER_CAUSTICS
varying vec3 worldPos;
#endif

//Uniforms//
uniform int renderStage;
uniform int worldTime;

uniform float frameTimeCounter;

uniform vec3 cameraPosition;
uniform vec3 cameraPositionFract;

uniform mat4 gbufferModelView, gbufferModelViewInverse;
uniform mat4 shadowProjection, shadowProjectionInverse;
uniform mat4 shadowModelView, shadowModelViewInverse;

#ifdef MULTICOLORED_BLOCKLIGHT
writeonly uniform uimage3D voxelimg;
#endif

//Attributes//

//Common Variables//
#ifdef WORLD_TIME_ANIMATION
float time = float(worldTime) * 0.05 * ANIMATION_SPEED;
#else
float time = frameTimeCounter * ANIMATION_SPEED;
#endif

//Includes//
#include "/lib/vertex/waving.glsl"

#ifdef WORLD_CURVATURE
#include "/lib/vertex/worldCurvature.glsl"
#endif

#ifdef MULTICOLORED_BLOCKLIGHT
#include "/lib/util/voxelMapHelper.glsl"
#include "/lib/util/voxelMap.glsl"
#endif

//Program//
void main() {
	vec4 position = shadowModelViewInverse * shadowProjectionInverse * ftransform();

	#ifdef WATER_CAUSTICS
	worldPos = position.xyz + cameraPosition.xyz;
	#endif

	#ifdef WORLD_CURVATURE
	position.y -= WorldCurvature(position.xz);
	#endif
	
	gl_Position = shadowProjection * shadowModelView * position;

	float dist = sqrt(gl_Position.x * gl_Position.x + gl_Position.y * gl_Position.y);
	float distortFactor = dist * shadowMapBias + (1.0 - shadowMapBias);
	
	gl_Position.xy *= 1.0 / distortFactor;
	gl_Position.z = gl_Position.z * 0.2;
}

#endif