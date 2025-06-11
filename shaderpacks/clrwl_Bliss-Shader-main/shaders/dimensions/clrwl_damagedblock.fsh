#include "/lib/settings.glsl"

// #if defined END_SHADER || defined NETHER_SHADER
// 	#undef IS_LPV_ENABLED
// #endif

#include "/lib/res_params.glsl"

flat varying float exposure;

uniform sampler2D tex;
uniform sampler2D noisetex;
uniform sampler2D colortex4;

uniform float frameTimeCounter;
#include "/lib/Shadow_Params.glsl"

uniform vec2 texelSize;

uniform ivec2 eyeBrightnessSmooth;
uniform float rainStrength;

#ifndef OVERWORLD_SHADER
	uniform float nightVision;
#endif

#include "/lib/util.glsl"

vec3 toLinear(vec3 sRGB){
	return sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);
}

// #define diagonal3(m) vec3((m)[0].x, (m)[1].y, m[2].z)

//Mie phase function
float phaseg(float x, float g){
    float gg = g * g;
    return (gg * -0.25 + 0.25) * pow(-2.0 * (g * x) + (gg + 1.0), -1.5) / 3.14;
}

//encoding by jodie
float encodeVec2(vec2 a){
    const vec2 constant1 = vec2( 1., 256.) / 65535.;
    vec2 temp = floor( a * 255. );
	return temp.x*constant1.x+temp.y*constant1.y;
}
float encodeVec2(float x,float y){
    return encodeVec2(vec2(x,y));
}

uniform vec3 eyePosition;

//////////////////////////////VOID MAIN//////////////////////////////
//////////////////////////////VOID MAIN//////////////////////////////
//////////////////////////////VOID MAIN//////////////////////////////
//////////////////////////////VOID MAIN//////////////////////////////
//////////////////////////////VOID MAIN//////////////////////////////

/* RENDERTARGETS:11 */

void main() {
	vec4 Albedo = texture2D(tex, _flw_crumblingTexCoord);
	
	Albedo.rgb = toLinear(Albedo.rgb);

	if(dot(Albedo.rgb, vec3(0.33333)) < 1.0/255.0 || Albedo.a < 0.01 ) { discard; return; }
	
	gl_FragData[0] = vec4(encodeVec2(vec2(0.5)), encodeVec2(Albedo.rg), encodeVec2(vec2(Albedo.b,0.02)), 1.0);
}
