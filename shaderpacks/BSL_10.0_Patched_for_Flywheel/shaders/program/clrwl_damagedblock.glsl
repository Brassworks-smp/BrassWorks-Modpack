/* 
BSL Shaders v10 Series by Capt Tatsu 
https://capttatsu.com 
*/ 

//Settings//
#include "/lib/settings.glsl"

//Fragment Shader///////////////////////////////////////////////////////////////////////////////////
#ifdef FSH

//Varyings//

//Uniforms//
uniform sampler2D texture;

//Program//
void main() {
	//Texture
	vec4 albedo = texture(_flw_crumblingTex, _flw_crumblingTexCoord) * flw_vertexColor;

	#if ALPHA_BLEND == 1
	albedo.rgb = pow(albedo.rgb,vec3(2.2)) * 2.25;
	#endif
	
	#ifdef WHITE_WORLD
	albedo.a = 0.0;
	#endif
	
    /* DRAWBUFFERS:0 */
	gl_FragData[0] = albedo;
}

#endif

//Vertex Shader/////////////////////////////////////////////////////////////////////////////////////
#ifdef VSH

//Varyings//

//Uniforms//
#ifdef TAA
uniform int frameCounter;

uniform float viewWidth;
uniform float viewHeight;
#include "/lib/util/jitter.glsl"
#endif

#ifdef WORLD_CURVATURE
uniform mat4 gbufferModelView;
uniform mat4 gbufferModelViewInverse;
#endif

//Includes//
#ifdef WORLD_CURVATURE
#include "/lib/vertex/worldCurvature.glsl"
#endif

//Program//
void main() {
	#ifdef WORLD_CURVATURE
	vec4 position = flw_vertexPos - flw_cameraPos;
	position.y -= WorldCurvature(position.xz);
	gl_Position = flw_viewProjection * position;
	#else
	gl_Position = ftransform();
	#endif
	
	#ifdef TAA
	gl_Position.xy = TAAJitter(gl_Position.xy, gl_Position.w);
	#endif
}

#endif
