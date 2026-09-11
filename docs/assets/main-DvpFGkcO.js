const tr={ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yg=0,qu=1,jg=2,eo=1,Kg=2,qr=3,Ri=0,jt=1,Qe=2,li=0,ys=1,Ba=2,Yu=3,ju=4,Zg=5,ms=100,$g=101,Jg=102,Qg=103,e0=104,t0=200,n0=201,i0=202,s0=203,yc=204,Mc=205,r0=206,o0=207,a0=208,l0=209,c0=210,h0=211,u0=212,d0=213,f0=214,Sc=0,bc=1,Tc=2,ar=3,wc=4,Ec=5,Ac=6,Cc=7,Bh=0,p0=1,m0=2,ci=0,Up=1,Op=2,Bp=3,kh=4,kp=5,zp=6,Hp=7,Ku="attached",g0="detached",Vp=300,ws=301,lr=302,dl=303,fl=304,tl=306,Pi=1e3,Xn=1001,ka=1002,Ut=1003,Gp=1004,Yr=1005,Tt=1006,Ca=1007,ri=1008,Mn=1009,Wp=1010,Xp=1011,po=1012,zh=1013,hi=1014,Nn=1015,wn=1016,Hh=1017,Vh=1018,mo=1020,qp=35902,Yp=35899,jp=1021,Kp=1022,Fn=1023,Di=1026,_s=1027,Gh=1028,Wh=1029,cr=1030,Xh=1031,qh=1033,Ra=33776,Pa=33777,Da=33778,La=33779,Rc=35840,Pc=35841,Dc=35842,Lc=35843,Ic=36196,Nc=37492,Fc=37496,Uc=37488,Oc=37489,Bc=37490,kc=37491,zc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,jc=37816,Kc=37817,Zc=37818,$c=37819,Jc=37820,Qc=37821,eh=36492,th=36494,nh=36495,ih=36283,sh=36284,rh=36285,oh=36286,go=2300,_o=2301,pl=2302,Zu=2303,$u=2400,Ju=2401,Qu=2402,_0=2500,v0=0,Zp=1,ah=2,x0=3200,za=3201,Yh=0,y0=1,Gi="",vt="srgb",ln="srgb-linear",Ha="linear",it="srgb",Ls=7680,ed=519,M0=512,S0=513,b0=514,jh=515,T0=516,w0=517,Kh=518,E0=519,lh=35044,td="300 es",oi=2e3,vo=2001;function A0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function C0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function R0(){const s=xo("canvas");return s.style.display="block",s}const nd={};function Va(...s){const e="THREE."+s.shift();console.log(e,...s)}function $p(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Te(...s){s=$p(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pe(...s){s=$p(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ga(...s){const e=s.join(" ");e in nd||(nd[e]=!0,Te(...s))}function P0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const D0={[Sc]:bc,[Tc]:Ac,[wc]:Cc,[ar]:Ec,[bc]:Sc,[Ac]:Tc,[Cc]:wc,[Ec]:ar};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let id=1234567;const to=Math.PI/180,hr=180/Math.PI;function Bn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ze(s,e,t){return Math.max(e,Math.min(t,s))}function Zh(s,e){return(s%e+e)%e}function L0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function I0(s,e,t){return s!==e?(t-s)/(e-s):0}function no(s,e,t){return(1-t)*s+t*e}function N0(s,e,t,n){return no(s,e,1-Math.exp(-t*n))}function F0(s,e=1){return e-Math.abs(Zh(s,e*2)-e)}function U0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function O0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function B0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function k0(s,e){return s+Math.random()*(e-s)}function z0(s){return s*(.5-Math.random())}function H0(s){s!==void 0&&(id=s);let e=id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(s){return s*to}function G0(s){return s*hr}function W0(s){return(s&s-1)===0&&s!==0}function X0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function q0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Y0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),f=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*f,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*f,a*c);break;case"ZYZ":s.set(l*f,l*p,a*h,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:to,RAD2DEG:hr,generateUUID:Bn,clamp:ze,euclideanModulo:Zh,mapLinear:L0,inverseLerp:I0,lerp:no,damp:N0,pingpong:F0,smoothstep:U0,smootherstep:O0,randInt:B0,randFloat:k0,randFloatSpread:z0,seededRandom:H0,degToRad:V0,radToDeg:G0,isPowerOfTwo:W0,ceilPowerOfTwo:X0,floorPowerOfTwo:q0,setQuaternionFromProperEuler:Y0,normalize:st,denormalize:Gn};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],f=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*g;m<0&&(d=-d,p=-p,f=-f,g=-g,m=-m);let _=1-a;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);_=Math.sin(_*x)/M,a=Math.sin(a*x)/M,l=l*_+d*a,c=c*_+p*a,h=h*_+f*a,u=u*_+g*a}else{l=l*_+d*a,c=c*_+p*a,h=h*_+f*a,u=u*_+g*a;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-a*p,e[t+2]=c*f+h*p+a*d-l*u,e[t+3]=h*f-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new P,sd=new jn;class ke{constructor(e,t,n,i,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=i[0],m=i[3],_=i[6],x=i[1],M=i[4],v=i[7],T=i[2],w=i[5],C=i[8];return r[0]=o*g+a*x+l*T,r[3]=o*m+a*M+l*w,r[6]=o*_+a*v+l*C,r[1]=c*g+h*x+u*T,r[4]=c*m+h*M+u*w,r[7]=c*_+h*v+u*C,r[2]=d*g+p*x+f*T,r[5]=d*m+p*M+f*w,r[8]=d*_+p*v+f*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/f;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new ke,rd=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const s={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(i.r=nr(i.r),i.g=nr(i.g),i.b=nr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Ha:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ln]:{primaries:e,whitePoint:n,transfer:Ha,toXYZ:rd,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:rd,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}const Ye=j0();function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Is;class K0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=xo("canvas")),Is.width=e.width,Is.height=e.height;const i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z0=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_l(i[o].image)):r.push(_l(i[o]))}else r=_l(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?K0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let $0=0;const vl=new P;class kt extends Cs{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Xn,i=Xn,r=Tt,o=ri,a=Fn,l=Mn,c=kt.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Bn(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Vp;kt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(p+1)/2,T=(_+1)/2,w=(h+d)/4,C=(u+g)/4,y=(f+m)/4;return M>v&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=w/n,r=C/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=y/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=y/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-f)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J0 extends Cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new kt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends J0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jp extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q0 extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(e,t,n,i,r,o,a,l,c,h,u,d,p,f,g,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,p,f,g,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,p,f,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,f=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-f,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,f=a*h,g=a*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,f=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,p=o*c,f=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(n,vn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(n,vn)),Ui.normalize(),Ho.crossVectors(vn,Ui),i[0]=Ui.x,i[4]=Ho.x,i[8]=vn.x,i[1]=Ui.y,i[5]=Ho.y,i[9]=vn.y,i[2]=Ui.z,i[6]=Ho.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],_=n[14],x=n[3],M=n[7],v=n[11],T=n[15],w=i[0],C=i[4],y=i[8],b=i[12],U=i[1],A=i[5],D=i[9],I=i[13],H=i[2],z=i[6],N=i[10],F=i[14],Z=i[3],J=i[7],ce=i[11],fe=i[15];return r[0]=o*w+a*U+l*H+c*Z,r[4]=o*C+a*A+l*z+c*J,r[8]=o*y+a*D+l*N+c*ce,r[12]=o*b+a*I+l*F+c*fe,r[1]=h*w+u*U+d*H+p*Z,r[5]=h*C+u*A+d*z+p*J,r[9]=h*y+u*D+d*N+p*ce,r[13]=h*b+u*I+d*F+p*fe,r[2]=f*w+g*U+m*H+_*Z,r[6]=f*C+g*A+m*z+_*J,r[10]=f*y+g*D+m*N+_*ce,r[14]=f*b+g*I+m*F+_*fe,r[3]=x*w+M*U+v*H+T*Z,r[7]=x*C+M*A+v*z+T*J,r[11]=x*y+M*D+v*N+T*ce,r[15]=x*b+M*I+v*F+T*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],g=e[7],m=e[11],_=e[15],x=l*p-c*d,M=a*p-c*u,v=a*d-l*u,T=o*p-c*h,w=o*d-l*h,C=o*u-a*h;return t*(g*x-m*M+_*v)-n*(f*x-m*T+_*w)+i*(f*M-g*T+_*C)-r*(f*v-g*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],_=e[15],x=t*a-n*o,M=t*l-i*o,v=t*c-r*o,T=n*l-i*a,w=n*c-r*a,C=i*c-r*l,y=h*g-u*f,b=h*m-d*f,U=h*_-p*f,A=u*m-d*g,D=u*_-p*g,I=d*_-p*m,H=x*I-M*D+v*A+T*U-w*b+C*y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return e[0]=(a*I-l*D+c*A)*z,e[1]=(i*D-n*I-r*A)*z,e[2]=(g*C-m*w+_*T)*z,e[3]=(d*w-u*C-p*T)*z,e[4]=(l*U-o*I-c*b)*z,e[5]=(t*I-i*U+r*b)*z,e[6]=(m*v-f*C-_*M)*z,e[7]=(h*C-d*v+p*M)*z,e[8]=(o*D-a*U+c*y)*z,e[9]=(n*U-t*D-r*y)*z,e[10]=(f*w-g*v+_*x)*z,e[11]=(u*v-h*w-p*x)*z,e[12]=(a*b-o*A-l*y)*z,e[13]=(t*A-n*b+i*y)*z,e[14]=(g*M-f*T-m*x)*z,e[15]=(h*T-u*M+d*x)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,g=o*h,m=o*u,_=a*u,x=l*c,M=l*h,v=l*u,T=n.x,w=n.y,C=n.z;return i[0]=(1-(g+_))*T,i[1]=(p+v)*T,i[2]=(f-M)*T,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(d+_))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(f+M)*C,i[9]=(m-x)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ns.set(i[0],i[1],i[2]).length();const a=Ns.set(i[4],i[5],i[6]).length(),l=Ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),zn.copy(this);const c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=oi,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i);let f,g;if(l)f=r/(o-r),g=o*r/(o-r);else if(a===oi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=oi,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i);let f,g;if(l)f=1/(o-r),g=o/(o-r);else if(a===oi)f=-2/(o-r),g=-(o+r)/(o-r);else if(a===vo)f=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new P,zn=new Ue,e_=new P(0,0,0),t_=new P(1,1,1),Ui=new P,Ho=new P,vn=new P,ad=new Ue,ld=new jn;class Kn{constructor(e=0,t=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ad,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const cd=new P,Fs=new jn,_i=new Ue,Vo=new P,Dr=new P,i_=new P,s_=new jn,hd=new P(1,0,0),ud=new P(0,1,0),dd=new P(0,0,1),fd={type:"added"},r_={type:"removed"},Us={type:"childadded",child:null},xl={type:"childremoved",child:null};class _t extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new P,t=new Kn,n=new jn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ke}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vo.copy(e):Vo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Dr,Vo,this.up):_i.lookAt(Vo,Dr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(_i),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fd),Us.child=e,this.dispatchEvent(Us),Us.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fd),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ot extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o_={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Ml(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class j{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Zh(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ml(o,r,e+1/3),this.g=Ml(o,r,e),this.b=Ml(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ye.workingToColorSpace(Jt.copy(this),e),Math.round(ze(Jt.r*255,0,255))*65536+Math.round(ze(Jt.g*255,0,255))*256+Math.round(ze(Jt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,r=Jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=vt){Ye.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Go);const n=no(Oi.h,Go.h,t),i=no(Oi.s,Go.s,t),r=no(Oi.l,Go.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new j;j.NAMES=Qp;class Qh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(e),this.density=t}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class em extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new P,vi=new P,Sl=new P,xi=new P,Os=new P,Bs=new P,pd=new P,bl=new P,Tl=new P,wl=new P,El=new gt,Al=new gt,Cl=new gt;class Wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Hn.subVectors(i,t),vi.subVectors(n,t),Sl.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(vi),l=Hn.dot(Sl),c=vi.dot(vi),h=vi.dot(Sl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return El.setScalar(0),Al.setScalar(0),Cl.setScalar(0),El.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,n),Cl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(El,r.x),o.addScaledVector(Al,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),vi.subVectors(e,t),Hn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Os.subVectors(i,n),Bs.subVectors(r,n),bl.subVectors(e,n);const l=Os.dot(bl),c=Bs.dot(bl);if(l<=0&&c<=0)return t.copy(n);Tl.subVectors(e,i);const h=Os.dot(Tl),u=Bs.dot(Tl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Os,o);wl.subVectors(e,r);const p=Os.dot(wl),f=Bs.dot(wl);if(f>=0&&p<=f)return t.copy(r);const g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Bs,a);const m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return pd.subVectors(r,i),a=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(pd,a);const _=1/(m+g+d);return o=g*_,a=d*_,t.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Xo.subVectors(this.max,Lr),ks.subVectors(e.a,Lr),zs.subVectors(e.b,Lr),Hs.subVectors(e.c,Lr),Bi.subVectors(zs,ks),ki.subVectors(Hs,zs),is.subVectors(ks,Hs);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-is.z,is.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,is.z,0,-is.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-is.y,is.x,0];return!Rl(t,ks,zs,Hs,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,ks,zs,Hs,Xo))?!1:(qo.crossVectors(Bi,ki),t=[qo.x,qo.y,qo.z],Rl(t,ks,zs,Hs,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,Wo=new Zn,ks=new P,zs=new P,Hs=new P,Bi=new P,ki=new P,is=new P,Lr=new P,Xo=new P,qo=new P,ss=new P;function Rl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ss.fromArray(s,r);const a=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const It=new P,Yo=new te;let a_=0;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}}class tm extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nm extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const l_=new Zn,Ir=new P,Pl=new P;class di{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):l_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Pl)),this.expandByPoint(Ir.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let c_=0;const Pn=new Ue,Dl=new _t,Vs=new P,xn=new Zn,Nr=new Zn,Wt=new P;class At extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?nm:tm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(xn.min,Nr.min),xn.expandByPoint(Wt),Wt.addVectors(xn.max,Nr.max),xn.expandByPoint(Wt)):(xn.expandByPoint(Nr.min),xn.expandByPoint(Nr.max))}xn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),Wt.add(Vs)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new P,l[y]=new P;const c=new P,h=new P,u=new P,d=new te,p=new te,f=new te,g=new P,m=new P;function _(y,b,U){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,U),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,b),f.fromBufferAttribute(r,U),h.sub(c),u.sub(c),p.sub(d),f.sub(d);const A=1/(p.x*f.y-f.x*p.y);isFinite(A)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(A),a[y].add(g),a[b].add(g),a[U].add(g),l[y].add(m),l[b].add(m),l[U].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,b=x.length;y<b;++y){const U=x[y],A=U.start,D=U.count;for(let I=A,H=A+D;I<H;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new P,v=new P,T=new P,w=new P;function C(y){T.fromBufferAttribute(i,y),w.copy(T);const b=a[y];M.copy(b),M.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);const A=v.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,A)}for(let y=0,b=x.length;y<b;++y){const U=x[y],A=U.start,D=U.count;for(let I=A,H=A+D;I<H;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let _=0;_<h;_++)d[f++]=c[p++]}return new Xt(d,h,u)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class h_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class eu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let u_=0;class Yn extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=ys,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=Mc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ed&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new P,Ll=new P,jo=new P,zi=new P,Il=new P,Ko=new P,Nl=new P;class wr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ll.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jo),a=zi.dot(this.direction),l=-zi.dot(jo),c=zi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ll).addScaledVector(jo,d),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,r){Il.subVectors(t,e),Ko.subVectors(n,e),Nl.crossVectors(Il,Ko);let o=this.direction.dot(Nl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Ko.crossVectors(zi,Ko));if(l<0)return null;const c=a*this.direction.dot(Il.cross(zi));if(c<0||l+c>o)return null;const h=-a*zi.dot(Nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const md=new Ue,rs=new wr,Zo=new di,gd=new P,$o=new P,Jo=new P,Qo=new P,Fl=new P,ea=new P,_d=new P,ta=new P;class Ne extends _t{constructor(e=new At,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Fl.fromBufferAttribute(u,e),o?ea.addScaledVector(Fl,h):ea.addScaledVector(Fl.sub(t),h))}t.add(ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Zo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Zo,gd)===null||rs.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),rs.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,g=d.length;f<g;f++){const m=d[f],_=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,T=M;v<T;v+=3){const w=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);i=na(this,_,e,n,c,h,u,w,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const f=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=f,_=g;m<_;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);i=na(this,o,e,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,g=d.length;f<g;f++){const m=d[f],_=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,T=M;v<T;v+=3){const w=v,C=v+1,y=v+2;i=na(this,_,e,n,c,h,u,w,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=f,_=g;m<_;m+=3){const x=m,M=m+1,v=m+2;i=na(this,o,e,n,c,h,u,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function d_(s,e,t,n,i,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ri,a),l===null)return null;ta.copy(a),ta.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:s}}function na(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,$o),s.getVertexPosition(l,Jo),s.getVertexPosition(c,Qo);const h=d_(s,e,t,n,$o,Jo,Qo,_d);if(h){const u=new P;Wn.getBarycoord(_d,$o,Jo,Qo,u),i&&(h.uv=Wn.getInterpolatedAttribute(i,a,l,c,u,new te)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,u,new te)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Wn.getNormal($o,Jo,Qo,d.normal),h.face=d,h.barycoord=u}return h}const vd=new P,xd=new gt,yd=new gt,f_=new P,Md=new Ue,ia=new P,Ul=new di,Sd=new Ue,Ol=new wr;class p_ extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ku,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingSphere.expandByPoint(ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ul.copy(this.boundingSphere),Ul.applyMatrix4(i),e.ray.intersectsSphere(Ul)!==!1&&(Sd.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===g0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,e),yd.fromBufferAttribute(i.attributes.skinWeight,e),vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=yd.getComponent(r);if(o!==0){const a=xd.getComponent(r);Md.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(f_.copy(vd).applyMatrix4(Md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class im extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tu extends kt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ut,h=Ut,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new Ue,m_=new Ue;class nu{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:m_;bd.multiplyMatrices(a,t[r]),bd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tu(t,e,e,Fn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Te("Skeleton: No bone found with UUID:",r),o=new im),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ch extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new Ue,Td=new Ue,sa=[],wd=new Zn,g_=new Ue,Fr=new Ne,Ur=new di;class sm extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,g_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),wd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(wd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ur.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),Td.multiplyMatrices(n,Gs),Fr.matrixWorld=Td,Fr.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){const l=sa[o];l.instanceId=r,l.object=this,t.push(l)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tu(new Float32Array(i*this.count),i,this.count,Gh,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bl=new P,__=new P,v_=new ke;class wi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bl.subVectors(n,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v_.getNormalMatrix(e),i=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new di,x_=new te(.5,.5),ra=new P;class nl{constructor(e=new wi,t=new wi,n=new wi,i=new wi,r=new wi,o=new wi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],g=r[9],m=r[10],_=r[11],x=r[12],M=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-o,p-h,_-f,T-x).normalize(),i[1].setComponents(c+o,p+h,_+f,T+x).normalize(),i[2].setComponents(c+a,p+u,_+g,T+M).normalize(),i[3].setComponents(c-a,p-u,_-g,T-M).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,p-d,_-m,T-v).normalize();else if(i[4].setComponents(c-l,p-d,_-m,T-v).normalize(),t===oi)i[5].setComponents(c+l,p+d,_+m,T+v).normalize();else if(t===vo)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=x_.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ra.x=i.normal.x>0?e.max.x:e.min.x,ra.y=i.normal.y>0?e.max.y:e.min.y,ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rm extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new P,Xa=new P,Ed=new Ue,Or=new wr,oa=new di,kl=new P,Ad=new P;class iu extends _t{constructor(e=new At,t=new rm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wa.fromBufferAttribute(t,i-1),Xa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new ct(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Ed.copy(i).invert(),Or.copy(e.ray).applyMatrix4(Ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=p,m=f-1;g<m;g+=c){const _=h.getX(g),x=h.getX(g+1),M=aa(this,e,Or,l,_,x,g);M&&t.push(M)}if(this.isLineLoop){const g=h.getX(f-1),m=h.getX(p),_=aa(this,e,Or,l,g,m,f-1);_&&t.push(_)}}else{const p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=p,m=f-1;g<m;g+=c){const _=aa(this,e,Or,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=aa(this,e,Or,l,f-1,p,f-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function aa(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Wa.fromBufferAttribute(a,i),Xa.fromBufferAttribute(a,r),t.distanceSqToSegment(Wa,Xa,kl,Ad)>n)return;kl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(kl);if(!(c<e.near||c>e.far))return{distance:c,point:Ad.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Cd=new P,Rd=new P;class y_ extends iu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cd.fromBufferAttribute(t,i),Rd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cd.distanceTo(Rd);e.setAttribute("lineDistance",new ct(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M_ extends iu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class il extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pd=new Ue,hh=new wr,la=new di,ca=new P;class su extends _t{constructor(e=new At,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Pd.copy(i).invert(),hh.copy(e.ray).applyMatrix4(Pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=d,g=p;f<g;f++){const m=c.getX(f);ca.fromBufferAttribute(u,m),Dd(ca,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,g=p;f<g;f++)ca.fromBufferAttribute(u,f),Dd(ca,f,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dd(s,e,t,n,i,r,o){const a=hh.distanceSqToPoint(s);if(a<t){const l=new P;hh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class om extends kt{constructor(e=[],t=ws,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class io extends kt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends kt{constructor(e,t,n=hi,i,r,o,a=Ut,l=Ut,c,h=Di,u=1){if(h!==Di&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class S_ extends yo{constructor(e,t=hi,n=ws,i,r,o=Ut,a=Ut,l,c=Di){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class am extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qn extends At{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;f("z","y","x",-1,-1,n,t,e,o,r,0),f("z","y","x",1,-1,n,t,-e,o,r,1),f("x","z","y",1,1,e,n,t,i,o,2),f("x","z","y",1,-1,e,n,-t,i,o,3),f("x","y","z",1,-1,e,t,n,i,r,4),f("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function f(g,m,_,x,M,v,T,w,C,y,b){const U=v/C,A=T/y,D=v/2,I=T/2,H=w/2,z=C+1,N=y+1;let F=0,Z=0;const J=new P;for(let ce=0;ce<N;ce++){const fe=ce*A-I;for(let se=0;se<z;se++){const Fe=se*U-D;J[g]=Fe*x,J[m]=fe*M,J[_]=H,c.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[_]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(se/C),u.push(1-ce/y),F+=1}}for(let ce=0;ce<y;ce++)for(let fe=0;fe<C;fe++){const se=d+fe+z*ce,Fe=d+fe+z*(ce+1),Ke=d+(fe+1)+z*(ce+1),Ze=d+(fe+1)+z*ce;l.push(se,Fe,Ze),l.push(Fe,Ke,Ze),Z+=6}a.addGroup(p,Z,b),p+=Z,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mo extends At{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let f=0;const g=[],m=n/2;let _=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function x(){const v=new P,T=new P;let w=0;const C=(t-e)/n;for(let y=0;y<=r;y++){const b=[],U=y/r,A=U*(t-e)+e;for(let D=0;D<=i;D++){const I=D/i,H=I*l+a,z=Math.sin(H),N=Math.cos(H);T.x=A*z,T.y=-U*n+m,T.z=A*N,u.push(T.x,T.y,T.z),v.set(z,C,N).normalize(),d.push(v.x,v.y,v.z),p.push(I,1-U),b.push(f++)}g.push(b)}for(let y=0;y<i;y++)for(let b=0;b<r;b++){const U=g[b][y],A=g[b+1][y],D=g[b+1][y+1],I=g[b][y+1];(e>0||b!==0)&&(h.push(U,A,I),w+=3),(t>0||b!==r-1)&&(h.push(A,D,I),w+=3)}c.addGroup(_,w,0),_+=w}function M(v){const T=f,w=new te,C=new P;let y=0;const b=v===!0?e:t,U=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*U,0),d.push(0,U,0),p.push(.5,.5),f++;const A=f;for(let D=0;D<=i;D++){const H=D/i*l+a,z=Math.cos(H),N=Math.sin(H);C.x=b*N,C.y=m*U,C.z=b*z,u.push(C.x,C.y,C.z),d.push(0,U,0),w.x=z*.5+.5,w.y=N*.5*U+.5,p.push(w.x,w.y),f++}for(let D=0;D<i;D++){const I=T+D,H=A+D;v===!0?h.push(H,H+1,I):h.push(H+1,H,I),y+=3}c.addGroup(_,y,v===!0?1:2),_+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new te:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],r=[],o=[],a=new P,l=new Ue;for(let p=0;p<=e;p++){const f=p/e;i[p]=this.getTangentAt(f,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(ze(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(ze(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ru extends fi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class b_ extends ru{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ou(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ha=new P,zl=new ou,Hl=new ou,Vl=new ou;class T_ extends fi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ha.subVectors(i[0],i[1]).add(i[0]),c=ha);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ha.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,g,m),Hl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,g,m),Vl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,g,m)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(zl.calc(l),Hl.calc(l),Vl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ld(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function w_(s,e){const t=1-s;return t*t*e}function E_(s,e){return 2*(1-s)*s*e}function A_(s,e){return s*s*e}function so(s,e,t,n){return w_(s,e)+E_(s,t)+A_(s,n)}function C_(s,e){const t=1-s;return t*t*t*e}function R_(s,e){const t=1-s;return 3*t*t*s*e}function P_(s,e){return 3*(1-s)*s*s*e}function D_(s,e){return s*s*s*e}function ro(s,e,t,n,i){return C_(s,e)+R_(s,t)+P_(s,n)+D_(s,i)}class lm extends fi{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,i.x,r.x,o.x,a.x),ro(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L_ extends fi{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,i.x,r.x,o.x,a.x),ro(e,i.y,r.y,o.y,a.y),ro(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cm extends fi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends fi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hm extends fi{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(so(e,i.x,r.x,o.x),so(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends fi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(so(e,i.x,r.x,o.x),so(e,i.y,r.y,o.y),so(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class um extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ld(a,l.x,c.x,h.x,u.x),Ld(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}var Id=Object.freeze({__proto__:null,ArcCurve:b_,CatmullRomCurve3:T_,CubicBezierCurve:lm,CubicBezierCurve3:L_,EllipseCurve:ru,LineCurve:cm,LineCurve3:I_,QuadraticBezierCurve:hm,QuadraticBezierCurve3:N_,SplineCurve:um});class F_ extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Id[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Id[i.type]().fromJSON(i))}return this}}class Nd extends F_{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new cm(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new hm(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new lm(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new um(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new ru(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class au extends Nd{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Nd().fromJSON(i))}return this}}function U_(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=dm(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=H_(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<i;d+=t){const p=s[d],f=s[d+1];p<a&&(a=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return So(r,o,t,a,l,c,0),o}function dm(s,e,t,n,i){let r;if(i===J_(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Fd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Fd(o/n|0,s[o],s[o+1],r);return r&&ur(r,r.next)&&(To(r),r=r.next),r}function Es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ur(t,t.next)||St(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function So(s,e,t,n,i,r,o){if(!s)return;!o&&r&&q_(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?B_(s,n,i,r):O_(s)){e.push(l.i,s.i,c.i),To(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=k_(Es(s),e),So(s,e,t,n,i,r,2)):o===2&&z_(s,e,t,n,i,r):So(Es(s),e,t,n,i,r,1);break}}}function O_(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),p=Math.max(a,l,c);let f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&jr(i,a,r,l,o,c,f.x,f.y)&&St(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function B_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=Math.min(a,l,c),f=Math.min(h,u,d),g=Math.max(a,l,c),m=Math.max(h,u,d),_=uh(p,f,e,t,n),x=uh(g,m,e,t,n);let M=s.prevZ,v=s.nextZ;for(;M&&M.z>=_&&v&&v.z<=x;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&jr(a,h,l,u,c,d,M.x,M.y)&&St(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==i&&v!==o&&jr(a,h,l,u,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=_;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=m&&M!==i&&M!==o&&jr(a,h,l,u,c,d,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==i&&v!==o&&jr(a,h,l,u,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function k_(s,e){let t=s;do{const n=t.prev,i=t.next.next;!ur(n,i)&&pm(n,t,t.next,i)&&bo(n,i)&&bo(i,n)&&(e.push(n.i,t.i,i.i),To(t),To(t.next),t=s=i),t=t.next}while(t!==s);return Es(t)}function z_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let l=mm(o,a);o=Es(o,o.next),l=Es(l,l.next),So(o,e,t,n,i,r,0),So(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function H_(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=dm(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(j_(c))}i.sort(V_);for(let r=0;r<i.length;r++)t=G_(i[r],t);return t}function V_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function G_(s,e){const t=W_(s,e);if(!t)return e;const n=mm(t,s);return Es(n,n.next),Es(t,t.next)}function W_(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(ur(s,t))return t;do{if(ur(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&fm(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);bo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&X_(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function X_(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function q_(s,e,t,n){let i=s;do i.z===0&&(i.z=uh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Y_(i)}function Y_(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function uh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function j_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fm(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function jr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&fm(s,e,t,n,i,r,o,a)}function K_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Z_(s,e)&&(bo(s,e)&&bo(e,s)&&$_(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||ur(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ur(s,e){return s.x===e.x&&s.y===e.y}function pm(s,e,t,n){const i=da(St(s,e,t)),r=da(St(s,e,n)),o=da(St(t,n,s)),a=da(St(t,n,e));return!!(i!==r&&o!==a||i===0&&ua(s,t,e)||r===0&&ua(s,n,e)||o===0&&ua(t,s,n)||a===0&&ua(t,e,n))}function ua(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function da(s){return s>0?1:s<0?-1:0}function Z_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function bo(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function $_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mm(s,e){const t=dh(s.i,s.x,s.y),n=dh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fd(s,e,t,n){const i=dh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function To(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function J_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Q_{static triangulate(e,t,n=2){return U_(e,t,n)}}class oo{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return oo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ud(e),Od(n,e);let o=e.length;t.forEach(Ud);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Od(n,t[l]);const a=Q_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ud(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Od(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class En extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],f=[],g=[],m=[];for(let _=0;_<h;_++){const x=_*d-o;for(let M=0;M<c;M++){const v=M*u-r;f.push(v,-x,0),g.push(0,0,1),m.push(M/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const M=x+c*_,v=x+c*(_+1),T=x+1+c*(_+1),w=x+1+c*_;p.push(M,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.widthSegments,e.heightSegments)}}class lu extends At{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,p=new P,f=new te;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const _=r+m/n*o;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let _=0;_<n;_++){const x=_+m,M=x,v=x+n+1,T=x+n+2,w=x+1;a.push(M,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Io extends At{constructor(e=new au([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ct(i,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let p=d.shape;const f=d.holes;oo.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){const x=f[m];oo.isClockWise(x)===!0&&(f[m]=x.reverse())}const g=oo.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){const x=f[m];p=p.concat(x)}for(let m=0,_=p.length;m<_;m++){const x=p[m];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,_=g.length;m<_;m++){const x=g[m],M=x[0]+u,v=x[1]+u,T=x[2]+u;n.push(M,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ev(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Io(n,e.curveSegments)}}function ev(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class dr extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],f=[],g=[],m=[];for(let _=0;_<=n;_++){const x=[],M=_/n;let v=0;_===0&&o===0?v=.5/t:_===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+M*a),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+v,1-M),x.push(c++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const M=h[_][x+1],v=h[_][x],T=h[_+1][x],w=h[_+1][x+1];(_!==0||o>0)&&p.push(M,v,w),(_!==n-1||l<Math.PI)&&p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function fr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=fr(s[t]);for(const i in n)e[i]=n[i]}return e}function tv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const qa={clone:fr,merge:sn};var nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sv extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qt extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends Qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rv extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Bh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wo extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ov extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fa(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function av(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function _m(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Er{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lv extends Er{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$u,endingEnd:$u}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ju:r=e,a=2*t-n;break;case Qu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ju:o=e,l=2*n-t;break;case Qu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,_=-d*m+2*d*g-d*f,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,M=(-1-p)*m+(1.5+p)*g+.5*f,v=p*m-p*g;for(let T=0;T!==a;++T)r[T]=_*o[h+T]+x*o[c+T]+M*o[l+T]+v*o[u+T];return r}}class cv extends Er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class hv extends Er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class uv extends Er{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const g=(n-t)/(i-t),m=1-g;for(let _=0;_!==a;++_)r[_]=o[c+_]*m+o[l+_]*g;return r}const p=a*2,f=e-1;for(let g=0;g!==a;++g){const m=o[c+g],_=o[l+g],x=f*p+g*2,M=d[x],v=d[x+1],T=e*p+g*2,w=u[T],C=u[T+1];let y=(n-t)/(i-t),b,U,A,D,I;for(let H=0;H<8;H++){b=y*y,U=b*y,A=1-y,D=A*A,I=D*A;const N=I*t+3*D*y*M+3*A*b*w+U*i-n;if(Math.abs(N)<1e-10)break;const F=3*D*(M-t)+6*A*y*(w-M)+3*b*(i-w);if(Math.abs(F)<1e-10)break;y=y-N/F,y=Math.max(0,Math.min(1,y))}r[g]=I*m+3*D*y*v+3*A*b*C+U*_}return r}}class $n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new uv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Zu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Pe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&C0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){const g=t[u+f];if(g!==t[d+f]||g!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=_o;class Ar extends $n{constructor(e,t,n){super(e,t,n)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=go;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class vm extends $n{constructor(e,t,n,i){super(e,t,n,i)}}vm.prototype.ValueTypeName="color";class pr extends $n{constructor(e,t,n,i){super(e,t,n,i)}}pr.prototype.ValueTypeName="number";class dv extends Er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class mr extends $n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dv(this.times,this.values,this.getValueSize(),e)}}mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends $n{constructor(e,t,n){super(e,t,n)}}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=go;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends $n{constructor(e,t,n,i){super(e,t,n,i)}}gr.prototype.ValueTypeName="vector";class fv{constructor(e="",t=-1,n=[],i=_0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(mv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push($n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=av(l);l=Bd(l,1,h),c=Bd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Te("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,f,g){if(p.length!==0){const m=[],_=[];_m(p,m,_,f),m.length!==0&&g.push(new u(d,m,_))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let f;for(f=0;f<d.length;f++)if(d[f].morphTargets)for(let g=0;g<d[f].morphTargets.length;g++)p[d[f].morphTargets[g]]=-1;for(const g in p){const m=[],_=[];for(let x=0;x!==d[f].morphTargets.length;++x){const M=d[f];m.push(M.time),_.push(M.morphTarget===g?1:0)}i.push(new pr(".morphTargetInfluence["+g+"]",m,_))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(gr,p+".position",d,"pos",i),n(mr,p+".quaternion",d,"rot",i),n(gr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function pv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return gr;case"color":return vm;case"quaternion":return mr;case"bool":case"boolean":return Ar;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function mv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pv(s.type);if(s.times===void 0){const t=[],n=[];_m(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(kd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!kd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function kd(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class xm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gv=new xm;class Rr{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class _v extends Error{constructor(e,t){super(e),this.response=t}}class ym extends Rr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ai.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Si[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0;let g=0;const m=new ReadableStream({start(_){x();function x(){u.read().then(({done:M,value:v})=>{if(M)_.close();else{g+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let w=0,C=h.length;w<C;w++){const y=h[w];y.onProgress&&y.onProgress(T)}_.enqueue(v),x()}},M=>{_.error(M)})}}});return new Response(m)}else throw new _v(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(f=>p.decode(f))}}}).then(c=>{Ai.add(`file:${e}`,c);const h=Si[e];delete Si[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Si[e];if(h===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ws=new WeakMap;class vv extends Rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ws.get(o);u===void 0&&(u=[],Ws.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=xo("img");function l(){h(),t&&t(this);const u=Ws.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Ws.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ai.remove(`image:${e}`);const d=Ws.get(this)||[];for(let p=0;p<d.length;p++){const f=d[p];f.onError&&f.onError(u)}Ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class sl extends Rr{constructor(e){super(e)}load(e,t,n,i){const r=new kt,o=new vv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class No extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new j(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class xv extends No{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gl=new Ue,zd=new P,Hd=new P;class cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),Hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hd),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pa=new P,ma=new jn,Qn=new P;class Mm extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pa,ma,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(pa,ma,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new P,Vd=new te,Gd=new te;class rn extends Mm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Gd),t.subVectors(Gd,Vd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yv extends cu{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mv extends No{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Sv extends cu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class hu extends No{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Fo extends Mm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bv extends cu{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ya extends No{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new bv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Tv extends No{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ao{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wl=new WeakMap;class wv extends Rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Wl.has(o)===!0)i&&i(Wl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Wl.set(l,c),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xs=-90,qs=1;class Ev extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(Xs,qs,e,t);i.layers=this.layers,this.add(i);const r=new rn(Xs,qs,e,t);r.layers=this.layers,this.add(r);const o=new rn(Xs,qs,e,t);o.layers=this.layers,this.add(o);const a=new rn(Xs,qs,e,t);a.layers=this.layers,this.add(a);const l=new rn(Xs,qs,e,t);l.layers=this.layers,this.add(l);const c=new rn(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Av extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Rv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Rv(){this._document.hidden===!1&&this.reset()}const uu="\\[\\]\\.:\\/",Pv=new RegExp("["+uu+"]","g"),du="[^"+uu+"]",Dv="[^"+uu.replace("\\.","")+"]",Lv=/((?:WC+[\/:])*)/.source.replace("WC",du),Iv=/(WCOD+)?/.source.replace("WCOD",Dv),Nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),Uv=new RegExp("^"+Lv+Iv+Nv+Fv+"$"),Ov=["material","materials","bones","map"];class Bv{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pv,"")}static parseTrackName(e){const t=Uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Bv;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Wd=new Ue;class kv{constructor(e,t,n=0,i=1/0){this.ray=new wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Jh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wd),this}intersectObject(e,t=!0,n=[]){return fh(e,this,n,t),n.sort(Xd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)fh(e[i],this,n,t);return n.sort(Xd),n}}function Xd(s,e){return s.distance-e.distance}function fh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)fh(r[o],e,t,!0)}}class qd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zv extends Cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yd(s,e,t,n){const i=Hv(n);switch(t){case jp:return s*e;case Gh:return s*e/i.components*i.byteLength;case Wh:return s*e/i.components*i.byteLength;case cr:return s*e*2/i.components*i.byteLength;case Xh:return s*e*2/i.components*i.byteLength;case Kp:return s*e*3/i.components*i.byteLength;case Fn:return s*e*4/i.components*i.byteLength;case qh:return s*e*4/i.components*i.byteLength;case Ra:case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Da:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Lc:return Math.max(s,16)*Math.max(e,8)/4;case Rc:case Dc:return Math.max(s,8)*Math.max(e,8)/2;case Ic:case Nc:case Uc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Bc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ih:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rh:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hv(s){switch(s){case Mn:case Wp:return{byteLength:1,components:1};case po:case Xp:case wn:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case hi:case zh:case Nn:return{byteLength:4,components:1};case qp:case Yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Sm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vv(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){const f=u[d],g=u[p];g.start<=f.start+f.count+1?f.count=Math.max(f.count,g.start+g.count-f.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){const g=u[p];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Oy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ky=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Gv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:jv,aomap_fragment:Kv,aomap_pars_fragment:Zv,batching_pars_vertex:$v,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:sx,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:hx,color_vertex:ux,common:dx,cube_uv_reflection_fragment:fx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:_x,emissivemap_pars_fragment:vx,colorspace_fragment:xx,colorspace_pars_fragment:yx,envmap_fragment:Mx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:bx,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Fx,envmap_vertex:wx,fog_vertex:Ex,fog_pars_vertex:Ax,fog_fragment:Cx,fog_pars_fragment:Rx,gradientmap_pars_fragment:Px,lightmap_pars_fragment:Dx,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Nx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Ox,lights_phong_fragment:Bx,lights_phong_pars_fragment:kx,lights_physical_fragment:zx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:Xx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:jx,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:$x,map_particle_pars_fragment:Jx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:sy,morphtarget_vertex:ry,normal_fragment_begin:oy,normal_fragment_maps:ay,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:hy,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:_y,premultiplied_alpha_fragment:vy,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:My,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:wy,shadowmap_vertex:Ey,shadowmask_pars_fragment:Ay,skinbase_vertex:Cy,skinning_pars_vertex:Ry,skinning_vertex:Py,skinnormal_vertex:Dy,specularmap_fragment:Ly,specularmap_pars_fragment:Iy,tonemapping_fragment:Ny,tonemapping_pars_fragment:Fy,transmission_fragment:Uy,transmission_pars_fragment:Oy,uv_pars_fragment:By,uv_pars_vertex:ky,uv_vertex:zy,worldpos_vertex:Hy,background_vert:Vy,background_frag:Gy,backgroundCube_vert:Wy,backgroundCube_frag:Xy,cube_vert:qy,cube_frag:Yy,depth_vert:jy,depth_frag:Ky,distance_vert:Zy,distance_frag:$y,equirect_vert:Jy,equirect_frag:Qy,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:rM,meshmatcap_vert:oM,meshmatcap_frag:aM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:hM,meshphong_frag:uM,meshphysical_vert:dM,meshphysical_frag:fM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:vM,shadow_frag:xM,sprite_vert:yM,sprite_frag:MM},he={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ii={basic:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:sn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:sn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new j(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:sn([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:sn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:sn([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:sn([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:sn([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:sn([he.lights,he.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ga={r:0,b:0,g:0},as=new Kn,SM=new Ue;function bM(s,e,t,n,i,r){const o=new j(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function p(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const v=x.backgroundBlurriness>0;M=e.get(M,v)}return M}function f(x){let M=!1;const v=p(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,M){const v=p(M);v&&(v.isCubeTexture||v.mapping===tl)?(c===void 0&&(c=new Ne(new qn(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:fr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),as.copy(M.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(as)),c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==it,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ne(new En(2,2),new Bt({name:"BackgroundMaterial",uniforms:fr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(ga,gm(s)),t.buffers.color.setClear(ga.r,ga.g,ga.b,M,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:f,addToRenderList:g,dispose:_}}function TM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(A,D,I,H,z){let N=!1;const F=u(A,H,I,D);r!==F&&(r=F,c(r.object)),N=p(A,H,I,z),N&&f(A,H,I,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(A,D,I,H),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(A){return s.bindVertexArray(A)}function h(A){return s.deleteVertexArray(A)}function u(A,D,I,H){const z=H.wireframe===!0;let N=n[D.id];N===void 0&&(N={},n[D.id]=N);const F=A.isInstancedMesh===!0?A.id:0;let Z=N[F];Z===void 0&&(Z={},N[F]=Z);let J=Z[I.id];J===void 0&&(J={},Z[I.id]=J);let ce=J[z];return ce===void 0&&(ce=d(l()),J[z]=ce),ce}function d(A){const D=[],I=[],H=[];for(let z=0;z<t;z++)D[z]=0,I[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:H,object:A,attributes:{},index:null}}function p(A,D,I,H){const z=r.attributes,N=D.attributes;let F=0;const Z=I.getAttributes();for(const J in Z)if(Z[J].location>=0){const fe=z[J];let se=N[J];if(se===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),fe===void 0||fe.attribute!==se||se&&fe.data!==se.data)return!0;F++}return r.attributesNum!==F||r.index!==H}function f(A,D,I,H){const z={},N=D.attributes;let F=0;const Z=I.getAttributes();for(const J in Z)if(Z[J].location>=0){let fe=N[J];fe===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor));const se={};se.attribute=fe,fe&&fe.data&&(se.data=fe.data),z[J]=se,F++}r.attributes=z,r.attributesNum=F,r.index=H}function g(){const A=r.newAttributes;for(let D=0,I=A.length;D<I;D++)A[D]=0}function m(A){_(A,0)}function _(A,D){const I=r.newAttributes,H=r.enabledAttributes,z=r.attributeDivisors;I[A]=1,H[A]===0&&(s.enableVertexAttribArray(A),H[A]=1),z[A]!==D&&(s.vertexAttribDivisor(A,D),z[A]=D)}function x(){const A=r.newAttributes,D=r.enabledAttributes;for(let I=0,H=D.length;I<H;I++)D[I]!==A[I]&&(s.disableVertexAttribArray(I),D[I]=0)}function M(A,D,I,H,z,N,F){F===!0?s.vertexAttribIPointer(A,D,I,z,N):s.vertexAttribPointer(A,D,I,H,z,N)}function v(A,D,I,H){g();const z=H.attributes,N=I.getAttributes(),F=D.defaultAttributeValues;for(const Z in N){const J=N[Z];if(J.location>=0){let ce=z[Z];if(ce===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const fe=ce.normalized,se=ce.itemSize,Fe=e.get(ce);if(Fe===void 0)continue;const Ke=Fe.buffer,Ze=Fe.type,K=Fe.bytesPerElement,re=Ze===s.INT||Ze===s.UNSIGNED_INT||ce.gpuType===zh;if(ce.isInterleavedBufferAttribute){const le=ce.data,Be=le.stride,Re=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)_(J.location+Le,le.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<J.locationSize;Le++)m(J.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let Le=0;Le<J.locationSize;Le++)M(J.location+Le,se/J.locationSize,Ze,fe,Be*K,(Re+se/J.locationSize*Le)*K,re)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)_(J.location+le,ce.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<J.locationSize;le++)m(J.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let le=0;le<J.locationSize;le++)M(J.location+le,se/J.locationSize,Ze,fe,se*K,se/J.locationSize*le*K,re)}}else if(F!==void 0){const fe=F[Z];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(J.location,fe);break;case 3:s.vertexAttrib3fv(J.location,fe);break;case 4:s.vertexAttrib4fv(J.location,fe);break;default:s.vertexAttrib1fv(J.location,fe)}}}}x()}function T(){b();for(const A in n){const D=n[A];for(const I in D){const H=D[I];for(const z in H){const N=H[z];for(const F in N)h(N[F].object),delete N[F];delete H[z]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;const D=n[A.id];for(const I in D){const H=D[I];for(const z in H){const N=H[z];for(const F in N)h(N[F].object),delete N[F];delete H[z]}}delete n[A.id]}function C(A){for(const D in n){const I=n[D];for(const H in I){const z=I[H];if(z[A.id]===void 0)continue;const N=z[A.id];for(const F in N)h(N[F].object),delete N[F];delete z[A.id]}}}function y(A){for(const D in n){const I=n[D],H=A.isInstancedMesh===!0?A.id:0,z=I[H];if(z!==void 0){for(const N in z){const F=z[N];for(const Z in F)h(F[Z].object),delete F[Z];delete z[N]}delete I[H],Object.keys(I).length===0&&delete n[D]}}}function b(){U(),o=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function wM(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let f=0;f<u;f++)p+=h[f];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],h[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g]*d[g];t.update(f,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Fn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!y)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:T,samples:w}}function AM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new wi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const f=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,_=s.get(u);if(!i||f===null||f.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,M=x*4;let v=_.clippingState||null;l.value=v,v=h(f,d,M,p);for(let T=0;T!==M;++T)v[T]=t[T];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,f){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,f!==!0||m===null){const _=p+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let M=0,v=p;M!==g;++M,v+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const Xi=4,jd=[.125,.215,.35,.446,.526,.582],gs=20,CM=256,Br=new Fo,Kd=new j;let Xl=null,ql=0,Yl=0,jl=!1;const RM=new P;class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=RM}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=jl,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:wn,format:Fn,colorSpace:ln,depthBuffer:!1},i=Zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PM(r)),this._blurMaterial=LM(r,e,t),this._ggxMaterial=DM(r,e,t)}return i}_compileMaterial(e){const t=new Ne(new At,e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,i,r){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Kd),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new qn,new an({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let _=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,_=!0):(m.color.copy(Kd),_=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const T=this._cubeSize;Ys(i,v*T,M>2?T:0,T,T),u.setRenderTarget(i),_&&u.render(g,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:f}=this,g=this._sizeLods[n],m=3*g*(n>f-Xi?n-f+Xi:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=f-t,Ys(r,m,_,3*g,2*g),i.setRenderTarget(r),i.render(a,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=f-n,Ys(e,m,_,3*g,2*g),i.setRenderTarget(e),i.render(a,Br)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gs-1),g=r/f,m=isFinite(r)?1+Math.floor(h*g):gs;m>gs&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const _=[];let x=0;for(let C=0;C<gs;++C){const y=C/g,b=Math.exp(-y*y/2);_.push(b),C===0?x+=b:C<m&&(x+=2*b)}for(let C=0;C<_.length;C++)_[C]=_[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=f,d.mipInt.value=M-n;const v=this._sizeLods[i],T=3*v*(i>M-Xi?i-M+Xi:0),w=4*(this._cubeSize-v);Ys(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(u,Br)}}function PM(s){const e=[],t=[],n=[];let i=s;const r=s-Xi+1+jd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Xi?l=jd[o-s+Xi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,f=6,g=3,m=2,_=1,x=new Float32Array(g*f*p),M=new Float32Array(m*f*p),v=new Float32Array(_*f*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,y=w>2?0:-1,b=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];x.set(b,g*f*w),M.set(d,m*f*w);const U=[w,w,w,w,w,w];v.set(U,_*f*w)}const T=new At;T.setAttribute("position",new Xt(x,g)),T.setAttribute("uv",new Xt(M,m)),T.setAttribute("faceIndex",new Xt(v,_)),n.push(new Ne(T,null)),i>Xi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Zd(s,e,t){const n=new un(s,e,t);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function DM(s,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function LM(s,e,t){const n=new Float32Array(gs),i=new P(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function $d(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Jd(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bm extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new om(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:li});r.uniforms.tEquirect.value=t;const o=new Ne(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Tt),new Ev(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function IM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===dl||p===fl)if(e.has(d)){const f=e.get(d).texture;return a(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const g=new bm(f.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,f=p===dl||p===fl,g=p===ws||p===lr;if(f||g){let m=t.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new ph(s)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return f&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new ph(s)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,p){return p===dl?d.mapping=ws:p===fl&&(d.mapping=lr),d}function l(d){let p=0;const f=6;for(let g=0;g<f;g++)d[g]!==void 0&&p++;return p===f}function c(d){const p=d.target;p.removeEventListener("dispose",c);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function NM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ga("WebGLRenderer: "+n+" extension not supported."),i}}}function FM(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,f=u.attributes.position;let g=0;if(f===void 0)return;if(p!==null){const x=p.array;g=p.version;for(let M=0,v=x.length;M<v;M+=3){const T=x[M+0],w=x[M+1],C=x[M+2];d.push(T,w,w,C,C,T)}}else{const x=f.array;g=f.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const T=M+0,w=M+1,C=M+2;d.push(T,w,w,C,C,T)}}const m=new(f.count>=65535?nm:tm)(d,1);m.version=g;const _=r.get(u);_&&e.remove(_),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function UM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,f){f!==0&&(s.drawElementsInstanced(n,p,r,d*o,f),t.update(p,n,f))}function h(d,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let m=0;for(let _=0;_<f;_++)m+=p[_];t.update(m,n,1)}function u(d,p,f,g){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d.length;_++)c(d[_]/o,p[_],g[_]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,f);let _=0;for(let x=0;x<f;x++)_+=p[x]*g[x];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function OM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Pe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function BM(s,e,t){const n=new WeakMap,i=new gt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let U=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",U)};var p=U;d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*u),y=new Jp(C,T,w,u);y.type=Nn,y.needsUpdate=!0;const b=v*4;for(let A=0;A<u;A++){const D=_[A],I=x[A],H=M[A],z=T*w*4*A;for(let N=0;N<D.count;N++){const F=N*b;f===!0&&(i.fromBufferAttribute(D,N),C[z+F+0]=i.x,C[z+F+1]=i.y,C[z+F+2]=i.z,C[z+F+3]=0),g===!0&&(i.fromBufferAttribute(I,N),C[z+F+4]=i.x,C[z+F+5]=i.y,C[z+F+6]=i.z,C[z+F+7]=0),m===!0&&(i.fromBufferAttribute(H,N),C[z+F+8]=i.x,C[z+F+9]=i.y,C[z+F+10]=i.z,C[z+F+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:y,size:new te(T,w)},n.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function kM(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const zM={[Up]:"LINEAR_TONE_MAPPING",[Op]:"REINHARD_TONE_MAPPING",[Bp]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[zp]:"AGX_TONE_MAPPING",[Hp]:"NEUTRAL_TONE_MAPPING",[kp]:"CUSTOM_TONE_MAPPING"};function HM(s,e,t,n,i){const r=new un(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new un(e,t,{type:wn,depthBuffer:!1,stencilBuffer:!1}),a=new At;a.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ct([0,2,0,0,2,0],2));const l=new sv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ne(a,l),h=new Fo(-1,1,1,-1,0,1);let u=null,d=null,p=!1,f,g=null,m=[],_=!1;this.setSize=function(x,M){r.setSize(x,M),o.setSize(x,M);for(let v=0;v<m.length;v++){const T=m[v];T.setSize&&T.setSize(x,M)}},this.setEffects=function(x){m=x,_=m.length>0&&m[0].isRenderPass===!0;const M=r.width,v=r.height;for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(M,v)}},this.begin=function(x,M){if(p||x.toneMapping===ci&&m.length===0)return!1;if(g=M,M!==null){const v=M.width,T=M.height;(r.width!==v||r.height!==T)&&this.setSize(v,T)}return _===!1&&x.setRenderTarget(r),f=x.toneMapping,x.toneMapping=ci,!0},this.hasRenderPass=function(){return _},this.end=function(x,M){x.toneMapping=f,p=!0;let v=r,T=o;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(x,T,v,M),C.needsSwap!==!1)){const y=v;v=T,T=y}}if(u!==x.outputColorSpace||d!==x.toneMapping){u=x.outputColorSpace,d=x.toneMapping,l.defines={},Ye.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const w=zM[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(g),x.render(c,h),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Tm=new kt,mh=new yo(1,1),wm=new Jp,Em=new Q0,Am=new om,Qd=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function Pr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Qd[i];if(r===void 0&&(r=new Float32Array(i),Qd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ol(s,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function VM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function qM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;sf.set(n),s.uniformMatrix2fv(this.addr,!1,sf),Ht(t,n)}}function YM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;nf.set(n),s.uniformMatrix3fv(this.addr,!1,nf),Ht(t,n)}}function jM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;tf.set(n),s.uniformMatrix4fv(this.addr,!1,tf),Ht(t,n)}}function KM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function eS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function tS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function nS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function iS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?Kh:jh,r=mh):r=Tm,t.setTexture2D(e||r,i)}function sS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Em,i)}function rS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Am,i)}function oS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wm,i)}function aS(s){switch(s){case 5126:return VM;case 35664:return GM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return YM;case 35676:return jM;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return $M;case 35669:case 35673:return JM;case 5125:return QM;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}function lS(s,e){s.uniform1fv(this.addr,e)}function cS(s,e){const t=Pr(e,this.size,2);s.uniform2fv(this.addr,t)}function hS(s,e){const t=Pr(e,this.size,3);s.uniform3fv(this.addr,t)}function uS(s,e){const t=Pr(e,this.size,4);s.uniform4fv(this.addr,t)}function dS(s,e){const t=Pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fS(s,e){const t=Pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pS(s,e){const t=Pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mS(s,e){s.uniform1iv(this.addr,e)}function gS(s,e){s.uniform2iv(this.addr,e)}function _S(s,e){s.uniform3iv(this.addr,e)}function vS(s,e){s.uniform4iv(this.addr,e)}function xS(s,e){s.uniform1uiv(this.addr,e)}function yS(s,e){s.uniform2uiv(this.addr,e)}function MS(s,e){s.uniform3uiv(this.addr,e)}function SS(s,e){s.uniform4uiv(this.addr,e)}function bS(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=mh:o=Tm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function TS(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Em,r[o])}function wS(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Am,r[o])}function ES(s,e,t){const n=this.cache,i=e.length,r=ol(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wm,r[o])}function AS(s){switch(s){case 5126:return lS;case 35664:return cS;case 35665:return hS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return vS;case 5125:return xS;case 36294:return yS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return ES}}class CS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aS(t.type)}}class RS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AS(t.type)}}class PS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function rf(s,e){s.seq.push(e),s.map[e.id]=e}function DS(s,e,t){const n=s.name,i=n.length;for(Kl.lastIndex=0;;){const r=Kl.exec(n),o=Kl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rf(t,c===void 0?new CS(a,s,e):new RS(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new PS(a),rf(t,u)),t=u}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);DS(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function of(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const LS=37297;let IS=0;function NS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const af=new ke;function FS(s){Ye._getMatrix(af,Ye.workingColorSpace,s);const e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Ha:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+NS(s.getShaderSource(e),a)}else return r}function US(s,e){const t=FS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OS={[Up]:"Linear",[Op]:"Reinhard",[Bp]:"Cineon",[kh]:"ACESFilmic",[zp]:"AgX",[Hp]:"Neutral",[kp]:"Custom"};function BS(s,e){const t=OS[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new P;function kS(){Ye.getLuminanceCoefficients(_a);const s=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function HS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Kr(s){return s!==""}function cf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(s){return s.replace(GS,XS)}const WS=new Map;function XS(s,e){let t=He[e];if(t===void 0){const n=WS.get(e);if(n!==void 0)t=He[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const qS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(s){return s.replace(qS,YS)}function YS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function df(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jS={[eo]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function KS(s){return jS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZS={[ws]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};function $S(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ZS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const JS={[lr]:"ENVMAP_MODE_REFRACTION"};function QS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":JS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eb={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[p0]:"ENVMAP_BLENDING_MIX",[m0]:"ENVMAP_BLENDING_ADD"};function tb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eb[s.combine]||"ENVMAP_BLENDING_NONE"}function nb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ib(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KS(t),c=$S(t),h=QS(t),u=tb(t),d=nb(t),p=zS(t),f=HS(r),g=i.createProgram();let m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Kr).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Kr).join(`
`),_.length>0&&(_+=`
`)):(m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),_=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?He.tonemapping_pars_fragment:"",t.toneMapping!==ci?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),kS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=gh(o),o=cf(o,t),o=hf(o,t),a=gh(a),a=cf(a,t),a=hf(a,t),o=uf(o),a=uf(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+m+o,v=x+_+a,T=of(i,i.VERTEX_SHADER,M),w=of(i,i.FRAGMENT_SHADER,v);i.attachShader(g,T),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(A){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",I=i.getShaderInfoLog(T)||"",H=i.getShaderInfoLog(w)||"",z=D.trim(),N=I.trim(),F=H.trim();let Z=!0,J=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,w);else{const ce=lf(i,T,"vertex"),fe=lf(i,w,"fragment");Pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+ce+`
`+fe)}else z!==""?Te("WebGLProgram: Program Info Log:",z):(N===""||F==="")&&(J=!1);J&&(A.diagnostics={runnable:Z,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:_}})}i.deleteShader(T),i.deleteShader(w),y=new Ia(i,g),b=VS(i,g)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,LS)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let sb=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ob(e),t.set(e,n)),n}}class ob{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function ab(s,e,t,n,i,r){const o=new Jh,a=new rb,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,b,U,A,D){const I=A.fog,H=D.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||z,N),Z=F&&F.mapping===tl?F.image.height:null,J=p[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Te("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=ce!==void 0?ce.length:0;let se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let Fe,Ke,Ze,K;if(J){const nt=ii[J];Fe=nt.vertexShader,Ke=nt.fragmentShader}else Fe=y.vertexShader,Ke=y.fragmentShader,a.update(y),Ze=a.getVertexShaderID(y),K=a.getFragmentShaderID(y);const re=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,Le=!!y.map,Vt=!!y.matcap,$e=!!F,tt=!!y.aoMap,ht=!!y.lightMap,Ve=!!y.bumpMap,Ct=!!y.normalMap,L=!!y.displacementMap,Lt=!!y.emissiveMap,et=!!y.metalnessMap,pt=!!y.roughnessMap,Se=y.anisotropy>0,R=y.clearcoat>0,S=y.dispersion>0,B=y.iridescence>0,Y=y.sheen>0,$=y.transmission>0,q=Se&&!!y.anisotropyMap,_e=R&&!!y.clearcoatMap,oe=R&&!!y.clearcoatNormalMap,Ce=R&&!!y.clearcoatRoughnessMap,De=B&&!!y.iridescenceMap,Q=B&&!!y.iridescenceThicknessMap,ne=Y&&!!y.sheenColorMap,ve=Y&&!!y.sheenRoughnessMap,ye=!!y.specularMap,pe=!!y.specularColorMap,Ge=!!y.specularIntensityMap,O=$&&!!y.transmissionMap,ae=$&&!!y.thicknessMap,ie=!!y.gradientMap,ge=!!y.alphaMap,ee=y.alphaTest>0,X=!!y.alphaHash,xe=!!y.extensions;let Ie=ci;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const mt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:Ke,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ln,alphaToCoverage:!!y.alphaToCoverage,map:Le,matcap:Vt,envMap:$e,envMapMode:$e&&F.mapping,envMapCubeUVHeight:Z,aoMap:tt,lightMap:ht,bumpMap:Ve,normalMap:Ct,displacementMap:L,emissiveMap:Lt,normalMapObjectSpace:Ct&&y.normalMapType===y0,normalMapTangentSpace:Ct&&y.normalMapType===Yh,metalnessMap:et,roughnessMap:pt,anisotropy:Se,anisotropyMap:q,clearcoat:R,clearcoatMap:_e,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ce,dispersion:S,iridescence:B,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ne,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:pe,specularIntensityMap:Ge,transmission:$,transmissionMap:O,thicknessMap:ae,gradientMap:ie,opaque:y.transparent===!1&&y.blending===ys&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:X,combine:y.combine,mapUv:Le&&f(y.map.channel),aoMapUv:tt&&f(y.aoMap.channel),lightMapUv:ht&&f(y.lightMap.channel),bumpMapUv:Ve&&f(y.bumpMap.channel),normalMapUv:Ct&&f(y.normalMap.channel),displacementMapUv:L&&f(y.displacementMap.channel),emissiveMapUv:Lt&&f(y.emissiveMap.channel),metalnessMapUv:et&&f(y.metalnessMap.channel),roughnessMapUv:pt&&f(y.roughnessMap.channel),anisotropyMapUv:q&&f(y.anisotropyMap.channel),clearcoatMapUv:_e&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&f(y.sheenRoughnessMap.channel),specularMapUv:ye&&f(y.specularMap.channel),specularColorMapUv:pe&&f(y.specularColorMap.channel),specularIntensityMapUv:Ge&&f(y.specularIntensityMap.channel),transmissionMapUv:O&&f(y.transmissionMap.channel),thicknessMapUv:ae&&f(y.thicknessMap.channel),alphaMapUv:ge&&f(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ct||Se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Le||ge),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&Ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Le&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:Lt&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)b.push(U),b.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(_(b,y),x(b,y),b.push(s.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const b=p[y.type];let U;if(b){const A=ii[b];U=qa.clone(A.uniforms)}else U=y.uniforms;return U}function v(y,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new ib(s,b,y,i),c.push(U),h.set(b,U)),U}function T(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function C(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function lb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function cb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ff(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,f,g,m,_){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:f,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},s[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=f,x.materialVariant=o(d),x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=m,x.group=_),e++,x}function l(d,p,f,g,m,_){const x=a(d,p,f,g,m,_);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):t.push(x)}function c(d,p,f,g,m,_){const x=a(d,p,f,g,m,_);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,p){t.length>1&&t.sort(d||cb),n.length>1&&n.sort(p||ff),i.length>1&&i.sort(p||ff)}function u(){for(let d=e,p=s.length;d<p;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function hb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new pf,s.set(n,[o])):i>=r.length?(o=new pf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ub(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new j};break;case"SpotLight":t={position:new P,direction:new P,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function db(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fb=0;function pb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mb(s){const e=new ub,t=db(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new Ue,o=new Ue;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,f=0,g=0,m=0,_=0,x=0,M=0,v=0,T=0,w=0,C=0;c.sort(pb);for(let b=0,U=c.length;b<U;b++){const A=c[b],D=A.color,I=A.intensity,H=A.distance;let z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===cr?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=D.r*I,u+=D.g*I,d+=D.b*I;else if(A.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(A.sh.coefficients[N],I);C++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const F=A.shadow,Z=t.get(A);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=A.shadow.matrix,x++}n.directional[p]=N,p++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(D).multiplyScalar(I),N.distance=H,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,n.spot[g]=N;const F=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,F.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[g]=F.matrix,A.castShadow){const Z=t.get(A);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=z,v++}g++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(D).multiplyScalar(I),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const F=A.shadow,Z=t.get(A);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,Z.shadowCameraNear=F.camera.near,Z.shadowCameraFar=F.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=z,n.pointShadowMatrix[f]=A.shadow.matrix,M++}n.point[f]=N,f++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(I),N.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[_]=N,_++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==p||y.pointLength!==f||y.spotLength!==g||y.rectAreaLength!==m||y.hemiLength!==_||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==v||y.numSpotMaps!==T||y.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=f,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,y.directionalLength=p,y.pointLength=f,y.spotLength=g,y.rectAreaLength=m,y.hemiLength=_,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=v,y.numSpotMaps=T,y.numLightProbes=C,n.version=fb++)}function l(c,h){let u=0,d=0,p=0,f=0,g=0;const m=h.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const M=c[_];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=n.rectArea[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),f++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function mf(s){const e=new mb(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new mf(s),e.set(i,[a])):r>=o.length?(a=new mf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],yb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],gf=new Ue,kr=new P,Zl=new P;function Mb(s,e,t){let n=new nl;const i=new te,r=new te,o=new gt,a=new wo,l=new ov,c={},h=t.maxTextureSize,u={[Ri]:jt,[jt]:Ri,[Qe]:Qe},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:_b,fragmentShader:vb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new At;f.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let _=this.type;this.render=function(w,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Kg&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eo);const b=s.getRenderTarget(),U=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),D=s.state;D.setBlending(li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=_!==this.type;I&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(z=>z.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,z=w.length;H<z;H++){const N=w[H],F=N.shadow;if(F===void 0){Te("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Z=F.getFrameExtents();i.multiply(Z),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,F.mapSize.y=r.y));const J=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=J,F.map===null||I===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qr){if(N.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new un(i.x,i.y,{format:cr,type:wn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new yo(i.x,i.y,Nn),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ut,F.map.depthTexture.magFilter=Ut}else N.isPointLight?(F.map=new bm(i.x),F.map.depthTexture=new S_(i.x,hi)):(F.map=new un(i.x,i.y),F.map.depthTexture=new yo(i.x,i.y,hi)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Di,this.type===eo?(F.map.depthTexture.compareFunction=J?Kh:jh,F.map.depthTexture.minFilter=Tt,F.map.depthTexture.magFilter=Tt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ut,F.map.depthTexture.magFilter=Ut);F.camera.updateProjectionMatrix()}const ce=F.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ce;fe++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,fe),s.clear();else{fe===0&&(s.setRenderTarget(F.map),s.clear());const se=F.getViewport(fe);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),D.viewport(o)}if(N.isPointLight){const se=F.camera,Fe=F.matrix,Ke=N.distance||se.far;Ke!==se.far&&(se.far=Ke,se.updateProjectionMatrix()),kr.setFromMatrixPosition(N.matrixWorld),se.position.copy(kr),Zl.copy(se.position),Zl.add(xb[fe]),se.up.copy(yb[fe]),se.lookAt(Zl),se.updateMatrixWorld(),Fe.makeTranslation(-kr.x,-kr.y,-kr.z),gf.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(gf,se.coordinateSystem,se.reversedDepth)}else F.updateMatrices(N);n=F.getFrustum(),v(C,y,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===qr&&x(F,y),F.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(b,U,A)};function x(w,C){const y=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new un(i.x,i.y,{format:cr,type:wn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,y,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,y,p,g,null)}function M(w,C,y,b){let U=null;const A=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)U=A;else if(U=y.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=U.uuid,I=C.uuid;let H=c[D];H===void 0&&(H={},c[D]=H);let z=H[I];z===void 0&&(z=U.clone(),H[I]=z,C.addEventListener("dispose",T)),U=z}if(U.visible=C.visible,U.wireframe=C.wireframe,b===qr?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:u[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const D=s.properties.get(U);D.light=y}return U}function v(w,C,y,b,U){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===qr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const I=e.update(w),H=w.material;if(Array.isArray(H)){const z=I.groups;for(let N=0,F=z.length;N<F;N++){const Z=z[N],J=H[Z.materialIndex];if(J&&J.visible){const ce=M(w,J,b,U);w.onBeforeShadow(s,w,C,y,I,ce,Z),s.renderBufferDirect(y,null,I,ce,w,Z),w.onAfterShadow(s,w,C,y,I,ce,Z)}}}else if(H.visible){const z=M(w,H,b,U);w.onBeforeShadow(s,w,C,y,I,z,null),s.renderBufferDirect(y,null,I,z,w,null),w.onAfterShadow(s,w,C,y,I,z,null)}}const D=w.children;for(let I=0,H=D.length;I<H;I++)v(D[I],C,y,b,U)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const b=c[y],U=w.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function Sb(s,e){function t(){let O=!1;const ae=new gt;let ie=null;const ge=new gt(0,0,0,0);return{setMask:function(ee){ie!==ee&&!O&&(s.colorMask(ee,ee,ee,ee),ie=ee)},setLocked:function(ee){O=ee},setClear:function(ee,X,xe,Ie,mt){mt===!0&&(ee*=Ie,X*=Ie,xe*=Ie),ae.set(ee,X,xe,Ie),ge.equals(ae)===!1&&(s.clearColor(ee,X,xe,Ie),ge.copy(ae))},reset:function(){O=!1,ie=null,ge.set(-1,0,0,0)}}}function n(){let O=!1,ae=!1,ie=null,ge=null,ee=null;return{setReversed:function(X){if(ae!==X){const xe=e.get("EXT_clip_control");X?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ae=X;const Ie=ee;ee=null,this.setClear(Ie)}},getReversed:function(){return ae},setTest:function(X){X?re(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(X){ie!==X&&!O&&(s.depthMask(X),ie=X)},setFunc:function(X){if(ae&&(X=D0[X]),ge!==X){switch(X){case Sc:s.depthFunc(s.NEVER);break;case bc:s.depthFunc(s.ALWAYS);break;case Tc:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case wc:s.depthFunc(s.EQUAL);break;case Ec:s.depthFunc(s.GEQUAL);break;case Ac:s.depthFunc(s.GREATER);break;case Cc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=X}},setLocked:function(X){O=X},setClear:function(X){ee!==X&&(ee=X,ae&&(X=1-X),s.clearDepth(X))},reset:function(){O=!1,ie=null,ge=null,ee=null,ae=!1}}}function i(){let O=!1,ae=null,ie=null,ge=null,ee=null,X=null,xe=null,Ie=null,mt=null;return{setTest:function(nt){O||(nt?re(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!O&&(s.stencilMask(nt),ae=nt)},setFunc:function(nt,mi,gi){(ie!==nt||ge!==mi||ee!==gi)&&(s.stencilFunc(nt,mi,gi),ie=nt,ge=mi,ee=gi)},setOp:function(nt,mi,gi){(X!==nt||xe!==mi||Ie!==gi)&&(s.stencilOp(nt,mi,gi),X=nt,xe=mi,Ie=gi)},setLocked:function(nt){O=nt},setClear:function(nt){mt!==nt&&(s.clearStencil(nt),mt=nt)},reset:function(){O=!1,ae=null,ie=null,ge=null,ee=null,X=null,xe=null,Ie=null,mt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],f=null,g=!1,m=null,_=null,x=null,M=null,v=null,T=null,w=null,C=new j(0,0,0),y=0,b=!1,U=null,A=null,D=null,I=null,H=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Z)[1]),N=F>=1):Z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),N=F>=2);let J=null,ce={};const fe=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Fe=new gt().fromArray(fe),Ke=new gt().fromArray(se);function Ze(O,ae,ie,ge){const ee=new Uint8Array(4),X=s.createTexture();s.bindTexture(O,X),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ie;xe++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(ae+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return X}const K={};K[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(s.DEPTH_TEST),o.setFunc(ar),Ve(!1),Ct(qu),re(s.CULL_FACE),tt(li);function re(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function le(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Be(O,ae){return u[O]!==ae?(s.bindFramebuffer(O,ae),u[O]=ae,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ae),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(O,ae){let ie=p,ge=!1;if(O){ie=d.get(ae),ie===void 0&&(ie=[],d.set(ae,ie));const ee=O.textures;if(ie.length!==ee.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let X=0,xe=ee.length;X<xe;X++)ie[X]=s.COLOR_ATTACHMENT0+X;ie.length=ee.length,ge=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ie)}function Le(O){return f!==O?(s.useProgram(O),f=O,!0):!1}const Vt={[ms]:s.FUNC_ADD,[$g]:s.FUNC_SUBTRACT,[Jg]:s.FUNC_REVERSE_SUBTRACT};Vt[Qg]=s.MIN,Vt[e0]=s.MAX;const $e={[t0]:s.ZERO,[n0]:s.ONE,[i0]:s.SRC_COLOR,[yc]:s.SRC_ALPHA,[c0]:s.SRC_ALPHA_SATURATE,[a0]:s.DST_COLOR,[r0]:s.DST_ALPHA,[s0]:s.ONE_MINUS_SRC_COLOR,[Mc]:s.ONE_MINUS_SRC_ALPHA,[l0]:s.ONE_MINUS_DST_COLOR,[o0]:s.ONE_MINUS_DST_ALPHA,[h0]:s.CONSTANT_COLOR,[u0]:s.ONE_MINUS_CONSTANT_COLOR,[d0]:s.CONSTANT_ALPHA,[f0]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(O,ae,ie,ge,ee,X,xe,Ie,mt,nt){if(O===li){g===!0&&(le(s.BLEND),g=!1);return}if(g===!1&&(re(s.BLEND),g=!0),O!==Zg){if(O!==m||nt!==b){if((_!==ms||v!==ms)&&(s.blendEquation(s.FUNC_ADD),_=ms,v=ms),nt)switch(O){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ba:s.blendFunc(s.ONE,s.ONE);break;case Yu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ju:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pe("WebGLState: Invalid blending: ",O);break}else switch(O){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ba:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yu:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",O);break}x=null,M=null,T=null,w=null,C.set(0,0,0),y=0,m=O,b=nt}return}ee=ee||ae,X=X||ie,xe=xe||ge,(ae!==_||ee!==v)&&(s.blendEquationSeparate(Vt[ae],Vt[ee]),_=ae,v=ee),(ie!==x||ge!==M||X!==T||xe!==w)&&(s.blendFuncSeparate($e[ie],$e[ge],$e[X],$e[xe]),x=ie,M=ge,T=X,w=xe),(Ie.equals(C)===!1||mt!==y)&&(s.blendColor(Ie.r,Ie.g,Ie.b,mt),C.copy(Ie),y=mt),m=O,b=!1}function ht(O,ae){O.side===Qe?le(s.CULL_FACE):re(s.CULL_FACE);let ie=O.side===jt;ae&&(ie=!ie),Ve(ie),O.blending===ys&&O.transparent===!1?tt(li):tt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(O){U!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),U=O)}function Ct(O){O!==Yg?(re(s.CULL_FACE),O!==A&&(O===qu?s.cullFace(s.BACK):O===jg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),A=O}function L(O){O!==D&&(N&&s.lineWidth(O),D=O)}function Lt(O,ae,ie){O?(re(s.POLYGON_OFFSET_FILL),(I!==ae||H!==ie)&&(I=ae,H=ie,o.getReversed()&&(ae=-ae),s.polygonOffset(ae,ie))):le(s.POLYGON_OFFSET_FILL)}function et(O){O?re(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function pt(O){O===void 0&&(O=s.TEXTURE0+z-1),J!==O&&(s.activeTexture(O),J=O)}function Se(O,ae,ie){ie===void 0&&(J===null?ie=s.TEXTURE0+z-1:ie=J);let ge=ce[ie];ge===void 0&&(ge={type:void 0,texture:void 0},ce[ie]=ge),(ge.type!==O||ge.texture!==ae)&&(J!==ie&&(s.activeTexture(ie),J=ie),s.bindTexture(O,ae||K[O]),ge.type=O,ge.texture=ae)}function R(){const O=ce[J];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function Y(){try{s.texSubImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function $(){try{s.texSubImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function oe(){try{s.texStorage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function Ce(){try{s.texStorage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function De(){try{s.texImage2D(...arguments)}catch(O){Pe("WebGLState:",O)}}function Q(){try{s.texImage3D(...arguments)}catch(O){Pe("WebGLState:",O)}}function ne(O){Fe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Fe.copy(O))}function ve(O){Ke.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Ke.copy(O))}function ye(O,ae){let ie=c.get(ae);ie===void 0&&(ie=new WeakMap,c.set(ae,ie));let ge=ie.get(O);ge===void 0&&(ge=s.getUniformBlockIndex(ae,O.name),ie.set(O,ge))}function pe(O,ae){const ge=c.get(ae).get(O);l.get(ae)!==ge&&(s.uniformBlockBinding(ae,ge,O.__bindingPointIndex),l.set(ae,ge))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,ce={},u={},d=new WeakMap,p=[],f=null,g=!1,m=null,_=null,x=null,M=null,v=null,T=null,w=null,C=new j(0,0,0),y=0,b=!1,U=null,A=null,D=null,I=null,H=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:le,bindFramebuffer:Be,drawBuffers:Re,useProgram:Le,setBlending:tt,setMaterial:ht,setFlipSided:Ve,setCullFace:Ct,setLineWidth:L,setPolygonOffset:Lt,setScissorTest:et,activeTexture:pt,bindTexture:Se,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:De,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:oe,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:_e,scissor:ne,viewport:ve,reset:Ge}}function bb(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return p?new OffscreenCanvas(R,S):xo("canvas")}function g(R,S,B){let Y=1;const $=Se(R);if(($.width>B||$.height>B)&&(Y=B/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Y*$.width),_e=Math.floor(Y*$.height);u===void 0&&(u=f(q,_e));const oe=S?f(q,_e):u;return oe.width=q,oe.height=_e,oe.getContext("2d").drawImage(R,0,0,q,_e),Te("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+_e+")."),oe}else return"data"in R&&Te("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function _(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,B,Y,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),S===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),S===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),S===s.RGBA){const _e=$?Ha:Ye.getTransfer(Y);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=_e===it?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,S){let B;return R?S===null||S===hi||S===mo?B=s.DEPTH24_STENCIL8:S===Nn?B=s.DEPTH32F_STENCIL8:S===po&&(B=s.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===mo?B=s.DEPTH_COMPONENT24:S===Nn?B=s.DEPTH_COMPONENT32F:S===po&&(B=s.DEPTH_COMPONENT16),B}function T(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),y(S),S.isVideoTexture&&h.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),U(S)}function y(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,Y=d.get(B);if(Y){const $=Y[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(R),Object.keys(Y).length===0&&d.delete(B)}n.remove(R)}function b(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const B=R.source,Y=d.get(B);delete Y[S.__cacheKey],o.memory.textures--}function U(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let $=0;$<S.__webglFramebuffer[Y].length;$++)s.deleteFramebuffer(S.__webglFramebuffer[Y][$]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,$=B.length;Y<$;Y++){const q=n.get(B[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(R)}let A=0;function D(){A=0}function I(){const R=A;return R>=i.maxTextures&&Te("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),A+=1,R}function H(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const B=n.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,R,S);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function N(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,S);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function F(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function Z(R,S){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){re(B,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const J={[Pi]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[ka]:s.MIRRORED_REPEAT},ce={[Ut]:s.NEAREST,[Gp]:s.NEAREST_MIPMAP_NEAREST,[Yr]:s.NEAREST_MIPMAP_LINEAR,[Tt]:s.LINEAR,[Ca]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},fe={[M0]:s.NEVER,[E0]:s.ALWAYS,[S0]:s.LESS,[jh]:s.LEQUAL,[b0]:s.EQUAL,[Kh]:s.GEQUAL,[T0]:s.GREATER,[w0]:s.NOTEQUAL};function se(R,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tt||S.magFilter===Ca||S.magFilter===Yr||S.magFilter===ri||S.minFilter===Tt||S.minFilter===Ca||S.minFilter===Yr||S.minFilter===ri)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,J[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,J[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,J[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ce[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==Yr&&S.minFilter!==ri||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const Y=S.source;let $=d.get(Y);$===void 0&&($={},d.set(Y,$));const q=H(S);if(q!==R.__cacheKey){$[q]===void 0&&($[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[q].usedTimes++;const _e=$[R.__cacheKey];_e!==void 0&&($[R.__cacheKey].usedTimes--,_e.usedTimes===0&&b(S)),R.__cacheKey=q,R.__webglTexture=$[q].texture}return B}function Ke(R,S,B){return Math.floor(Math.floor(R/B)/S)}function Ze(R,S,B,Y){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,Y,S.data);else{q.sort((Q,ne)=>Q.start-ne.start);let _e=0;for(let Q=1;Q<q.length;Q++){const ne=q[_e],ve=q[Q],ye=ne.start+ne.count,pe=Ke(ve.start,S.width,4),Ge=Ke(ne.start,S.width,4);ve.start<=ye+1&&pe===Ge&&Ke(ve.start+ve.count-1,S.width,4)===pe?ne.count=Math.max(ne.count,ve.start+ve.count-ne.start):(++_e,q[_e]=ve)}q.length=_e+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),De=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Q=0,ne=q.length;Q<ne;Q++){const ve=q[Q],ye=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Ge=ye%S.width,O=Math.floor(ye/S.width),ae=pe,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,Ge,O,ae,ie,B,Y,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function K(R,S,B){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const $=Fe(R,S),q=S.source;t.bindTexture(Y,R.__webglTexture,s.TEXTURE0+B);const _e=n.get(q);if(q.version!==_e.__version||$===!0){t.activeTexture(s.TEXTURE0+B);const oe=Ye.getPrimaries(Ye.workingColorSpace),Ce=S.colorSpace===Gi?null:Ye.getPrimaries(S.colorSpace),De=S.colorSpace===Gi||oe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Q=g(S.image,!1,i.maxTextureSize);Q=pt(S,Q);const ne=r.convert(S.format,S.colorSpace),ve=r.convert(S.type);let ye=M(S.internalFormat,ne,ve,S.colorSpace,S.isVideoTexture);se(Y,S);let pe;const Ge=S.mipmaps,O=S.isVideoTexture!==!0,ae=_e.__version===void 0||$===!0,ie=q.dataReady,ge=T(S,Q);if(S.isDepthTexture)ye=v(S.format===_s,S.type),ae&&(O?t.texStorage2D(s.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,ne,ve,null));else if(S.isDataTexture)if(Ge.length>0){O&&ae&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Ge[0].width,Ge[0].height);for(let ee=0,X=Ge.length;ee<X;ee++)pe=Ge[ee],O?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,pe.width,pe.height,ne,ve,pe.data):t.texImage2D(s.TEXTURE_2D,ee,ye,pe.width,pe.height,0,ne,ve,pe.data);S.generateMipmaps=!1}else O?(ae&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Q.width,Q.height),ie&&Ze(S,Q,ne,ve)):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,ne,ve,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ye,Ge[0].width,Ge[0].height,Q.depth);for(let ee=0,X=Ge.length;ee<X;ee++)if(pe=Ge[ee],S.format!==Fn)if(ne!==null)if(O){if(ie)if(S.layerUpdates.size>0){const xe=Yd(pe.width,pe.height,S.format,S.type);for(const Ie of S.layerUpdates){const mt=pe.data.subarray(Ie*xe/pe.data.BYTES_PER_ELEMENT,(Ie+1)*xe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ie,pe.width,pe.height,1,ne,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,Q.depth,ne,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,Q.depth,ne,ve,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,Q.depth,0,ne,ve,pe.data)}else{O&&ae&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Ge[0].width,Ge[0].height);for(let ee=0,X=Ge.length;ee<X;ee++)pe=Ge[ee],S.format!==Fn?ne!==null?O?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,pe.width,pe.height,ne,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ye,pe.width,pe.height,0,pe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,pe.width,pe.height,ne,ve,pe.data):t.texImage2D(s.TEXTURE_2D,ee,ye,pe.width,pe.height,0,ne,ve,pe.data)}else if(S.isDataArrayTexture)if(O){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ye,Q.width,Q.height,Q.depth),ie)if(S.layerUpdates.size>0){const ee=Yd(Q.width,Q.height,S.format,S.type);for(const X of S.layerUpdates){const xe=Q.data.subarray(X*ee/Q.data.BYTES_PER_ELEMENT,(X+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,ne,ve,xe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ne,ve,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ne,ve,Q.data);else if(S.isData3DTexture)O?(ae&&t.texStorage3D(s.TEXTURE_3D,ge,ye,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ne,ve,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ne,ve,Q.data);else if(S.isFramebufferTexture){if(ae)if(O)t.texStorage2D(s.TEXTURE_2D,ge,ye,Q.width,Q.height);else{let ee=Q.width,X=Q.height;for(let xe=0;xe<ge;xe++)t.texImage2D(s.TEXTURE_2D,xe,ye,ee,X,0,ne,ve,null),ee>>=1,X>>=1}}else if(Ge.length>0){if(O&&ae){const ee=Se(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,ye,ee.width,ee.height)}for(let ee=0,X=Ge.length;ee<X;ee++)pe=Ge[ee],O?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ne,ve,pe):t.texImage2D(s.TEXTURE_2D,ee,ye,ne,ve,pe);S.generateMipmaps=!1}else if(O){if(ae){const ee=Se(Q);t.texStorage2D(s.TEXTURE_2D,ge,ye,ee.width,ee.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,ve,Q)}else t.texImage2D(s.TEXTURE_2D,0,ye,ne,ve,Q);m(S)&&_(Y),_e.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function re(R,S,B){if(S.image.length!==6)return;const Y=Fe(R,S),$=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+B);const q=n.get($);if($.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+B);const _e=Ye.getPrimaries(Ye.workingColorSpace),oe=S.colorSpace===Gi?null:Ye.getPrimaries(S.colorSpace),Ce=S.colorSpace===Gi||_e===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let X=0;X<6;X++)!De&&!Q?ne[X]=g(S.image[X],!0,i.maxCubemapSize):ne[X]=Q?S.image[X].image:S.image[X],ne[X]=pt(S,ne[X]);const ve=ne[0],ye=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),Ge=M(S.internalFormat,ye,pe,S.colorSpace),O=S.isVideoTexture!==!0,ae=q.__version===void 0||Y===!0,ie=$.dataReady;let ge=T(S,ve);se(s.TEXTURE_CUBE_MAP,S);let ee;if(De){O&&ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,ve.width,ve.height);for(let X=0;X<6;X++){ee=ne[X].mipmaps;for(let xe=0;xe<ee.length;xe++){const Ie=ee[xe];S.format!==Fn?ye!==null?O?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Ie.width,Ie.height,ye,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ge,Ie.width,Ie.height,0,Ie.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Ie.width,Ie.height,ye,pe,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ge,Ie.width,Ie.height,0,ye,pe,Ie.data)}}}else{if(ee=S.mipmaps,O&&ae){ee.length>0&&ge++;const X=Se(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,X.width,X.height)}for(let X=0;X<6;X++)if(Q){O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ne[X].width,ne[X].height,ye,pe,ne[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ge,ne[X].width,ne[X].height,0,ye,pe,ne[X].data);for(let xe=0;xe<ee.length;xe++){const mt=ee[xe].image[X].image;O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,mt.width,mt.height,ye,pe,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ge,mt.width,mt.height,0,ye,pe,mt.data)}}else{O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye,pe,ne[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ge,ye,pe,ne[X]);for(let xe=0;xe<ee.length;xe++){const Ie=ee[xe];O?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ye,pe,Ie.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ge,ye,pe,Ie.image[X])}}}m(S)&&_(s.TEXTURE_CUBE_MAP),q.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function le(R,S,B,Y,$,q){const _e=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),Ce=M(B.internalFormat,_e,oe,B.colorSpace),De=n.get(S),Q=n.get(B);if(Q.__renderTarget=S,!De.__hasExternalTextures){const ne=Math.max(1,S.width>>q),ve=Math.max(1,S.height>>q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,q,Ce,ne,ve,S.depth,0,_e,oe,null):t.texImage2D($,q,Ce,ne,ve,0,_e,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Lt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,$,Q.__webglTexture,0,L(S)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,$,Q.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const Y=S.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,q=v(S.stencilBuffer,$),_e=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Lt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(S),q,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(S),q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,R)}else{const Y=S.textures;for(let $=0;$<Y.length;$++){const q=Y[$],_e=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Ce=M(q.internalFormat,_e,oe,q.colorSpace);Lt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(S),Ce,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(S),Ce,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(R,S,B){const Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),se(s.TEXTURE_CUBE_MAP,S.depthTexture);const De=r.convert(S.depthTexture.format),Q=r.convert(S.depthTexture.type);let ne;S.depthTexture.format===Di?ne=s.DEPTH_COMPONENT24:S.depthTexture.format===_s&&(ne=s.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ne,S.width,S.height,0,De,Q,null)}}else z(S.depthTexture,0);const q=$.__webglTexture,_e=L(S),oe=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Ce=S.depthTexture.format===_s?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Di)Lt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,oe,q,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,oe,q,0);else if(S.depthTexture.format===_s)Lt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,oe,q,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,oe,q,0);else throw new Error("Unknown depthTexture format")}function Le(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let Y=0;Y<6;Y++)Re(S.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Re(S.__webglFramebuffer[0],R,0):Re(S.__webglFramebuffer,R,0)}else if(B){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),Be(S.__webglDepthbuffer[Y],R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Be(S.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,S,B){const Y=n.get(R);S!==void 0&&le(Y.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Le(R)}function $e(R){const S=R.texture,B=n.get(R),Y=n.get(S);R.addEventListener("dispose",C);const $=R.textures,q=R.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)B.__webglFramebuffer[oe][Ce]=s.createFramebuffer()}else B.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)B.__webglFramebuffer[oe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(_e)for(let oe=0,Ce=$.length;oe<Ce;oe++){const De=n.get($[oe]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Lt(R)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const Ce=$[oe];B.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const De=r.convert(Ce.format,Ce.colorSpace),Q=r.convert(Ce.type),ne=M(Ce.internalFormat,De,Q,Ce.colorSpace,R.isXRRenderTarget===!0),ve=L(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,ne,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),se(s.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)le(B.__webglFramebuffer[oe][Ce],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce);else le(B.__webglFramebuffer[oe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,Ce=$.length;oe<Ce;oe++){const De=$[oe],Q=n.get(De);let ne=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,Q.__webglTexture),se(ne,De),le(B.__webglFramebuffer,R,De,s.COLOR_ATTACHMENT0+oe,ne,0),m(De)&&_(ne)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),se(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)le(B.__webglFramebuffer[Ce],R,S,s.COLOR_ATTACHMENT0,oe,Ce);else le(B.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,oe,0);m(S)&&_(oe),t.unbindTexture()}R.depthBuffer&&Le(R)}function tt(R){const S=R.textures;for(let B=0,Y=S.length;B<Y;B++){const $=S[B];if(m($)){const q=x(R),_e=n.get($).__webglTexture;t.bindTexture(q,_e),_(q),t.unbindTexture()}}}const ht=[],Ve=[];function Ct(R){if(R.samples>0){if(Lt(R)===!1){const S=R.textures,B=R.width,Y=R.height;let $=s.COLOR_BUFFER_BIT;const q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(R),oe=S.length>1;if(oe)for(let De=0;De<S.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let De=0;De<S.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[De]);const Q=n.get(S[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,$,s.NEAREST),l===!0&&(ht.length=0,Ve.length=0,ht.push(s.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(q),Ve.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let De=0;De<S.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,_e.__webglColorRenderbuffer[De]);const Q=n.get(S[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function L(R){return Math.min(i.maxSamples,R.samples)}function Lt(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function pt(R,S){const B=R.colorSpace,Y=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ln&&B!==Gi&&(Ye.getTransfer(B)===it?(Y!==Fn||$!==Mn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",B)),S}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=Z,this.rebindTextures=Vt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tb(s,e){function t(n,i=Gi){let r;const o=Ye.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wp)return s.BYTE;if(n===Xp)return s.SHORT;if(n===po)return s.UNSIGNED_SHORT;if(n===zh)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===wn)return s.HALF_FLOAT;if(n===jp)return s.ALPHA;if(n===Kp)return s.RGB;if(n===Fn)return s.RGBA;if(n===Di)return s.DEPTH_COMPONENT;if(n===_s)return s.DEPTH_STENCIL;if(n===Gh)return s.RED;if(n===Wh)return s.RED_INTEGER;if(n===cr)return s.RG;if(n===Xh)return s.RG_INTEGER;if(n===qh)return s.RGBA_INTEGER;if(n===Ra||n===Pa||n===Da||n===La)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Pc||n===Dc||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Nc||n===Fc||n===Uc||n===Oc||n===Bc||n===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Nc)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return r.COMPRESSED_R11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bc)return r.COMPRESSED_RG11_EAC;if(n===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===jc||n===Kc||n===Zc||n===$c||n===Jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eh||n===th||n===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eh)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===sh||n===rh||n===oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new am(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:wb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cb extends Cs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null;const g=typeof XRWebGLBinding<"u",m=new Ab,_={},x=t.getContextAttributes();let M=null,v=null;const T=[],w=[],C=new te;let y=null;const b=new rn;b.viewport=new gt;const U=new rn;U.viewport=new gt;const A=[b,U],D=new Av;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=T[K];return re===void 0&&(re=new yl,T[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=T[K];return re===void 0&&(re=new yl,T[K]=re),re.getGripSpace()},this.getHand=function(K){let re=T[K];return re===void 0&&(re=new yl,T[K]=re),re.getHandSpace()};function z(K){const re=w.indexOf(K.inputSource);if(re===-1)return;const le=T[re];le!==void 0&&(le.update(K.inputSource,K.frame,c||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let K=0;K<T.length;K++){const re=w[K];re!==null&&(w[K]=null,T[K].disconnect(re))}I=null,H=null,m.reset();for(const K in _)delete _[K];e.setRenderTarget(M),p=null,d=null,u=null,i=null,v=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Be=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?_s:Di,Be=x.stencil?mo:hi);const Le={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new un(d.textureWidth,d.textureHeight,{format:Fn,type:Mn,depthTexture:new yo(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new un(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(K){for(let re=0;re<K.removed.length;re++){const le=K.removed[re],Be=w.indexOf(le);Be>=0&&(w[Be]=null,T[Be].disconnect(le))}for(let re=0;re<K.added.length;re++){const le=K.added[re];let Be=w.indexOf(le);if(Be===-1){for(let Le=0;Le<T.length;Le++)if(Le>=w.length){w.push(le),Be=Le;break}else if(w[Le]===null){w[Le]=le,Be=Le;break}if(Be===-1)break}const Re=T[Be];Re&&Re.connect(le)}}const Z=new P,J=new P;function ce(K,re,le){Z.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(le.matrixWorld);const Be=Z.distanceTo(J),Re=re.projectionMatrix.elements,Le=le.projectionMatrix.elements,Vt=Re[14]/(Re[10]-1),$e=Re[14]/(Re[10]+1),tt=(Re[9]+1)/Re[5],ht=(Re[9]-1)/Re[5],Ve=(Re[8]-1)/Re[0],Ct=(Le[8]+1)/Le[0],L=Vt*Ve,Lt=Vt*Ct,et=Be/(-Ve+Ct),pt=et*-Ve;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Re[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Se=Vt+et,R=$e+et,S=L-pt,B=Lt+(Be-pt),Y=tt*$e/R*Se,$=ht*$e/R*Se;K.projectionMatrix.makePerspective(S,B,Y,$,Se,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let re=K.near,le=K.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(le=m.depthFar)),D.near=U.near=b.near=re,D.far=U.far=b.far=le,(I!==D.near||H!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,H=D.far),D.layers.mask=K.layers.mask|6,b.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;const Be=K.parent,Re=D.cameras;fe(D,Be);for(let Le=0;Le<Re.length;Le++)fe(Re[Le],Be);Re.length===2?ce(D,b,U):D.projectionMatrix.copy(b.projectionMatrix),se(K,D,Be)};function se(K,re,le){le===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=hr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return _[K]};let Fe=null;function Ke(K,re){if(h=re.getViewerPose(c||o),f=re,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Be=!1;le.length!==D.cameras.length&&(D.cameras.length=0,Be=!0);for(let $e=0;$e<le.length;$e++){const tt=le[$e];let ht=null;if(p!==null)ht=p.getViewport(tt);else{const Ct=u.getViewSubImage(d,tt);ht=Ct.viewport,$e===0&&(e.setRenderTargetTextures(v,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(v))}let Ve=A[$e];Ve===void 0&&(Ve=new rn,Ve.layers.enable($e),Ve.viewport=new gt,A[$e]=Ve),Ve.matrix.fromArray(tt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(tt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ht.x,ht.y,ht.width,ht.height),$e===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Be===!0&&D.cameras.push(Ve)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const $e=u.getDepthInformation(le[0]);$e&&$e.isValid&&$e.texture&&m.init($e,i.renderState)}if(Re&&Re.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<le.length;$e++){const tt=le[$e].camera;if(tt){let ht=_[tt];ht||(ht=new am,_[tt]=ht);const Ve=u.getCameraImage(tt);ht.sourceTexture=Ve}}}}for(let le=0;le<T.length;le++){const Be=w[le],Re=T[le];Be!==null&&Re!==void 0&&Re.update(Be,re,c||o)}Fe&&Fe(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),f=null}const Ze=new Sm;Ze.setAnimationLoop(Ke),this.setAnimationLoop=function(K){Fe=K},this.dispose=function(){}}}const ls=new Kn,Rb=new Ue;function Pb(s,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,gm(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,x,M,v){_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),u(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),d(m,_),_.isMeshPhysicalMaterial&&p(m,_,v)):_.isMeshMatcapMaterial?(r(m,_),f(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),g(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,x,M):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===jt&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===jt&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const x=e.get(_),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(ls)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,x,M){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*x,m.scale.value=M*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function u(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,x){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jt&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const x=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Db(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(f(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const w=e.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const M=u();x.__bindingPointIndex=M;const v=s.createBuffer(),T=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=i[x.id],v=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,C=v.length;w<C;w++){const y=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,U=y.length;b<U;b++){const A=y[b];if(p(A,w,b,T)===!0){const D=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let z=0;z<I.length;z++){const N=I[z],F=g(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,D+H,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,M,v,T){const w=x.value,C=M+"_"+v;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const y=T[C];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return T[C]=w,!0}else if(y.equals(w)===!1)return y.copy(w),!0}return!1}function f(x){const M=x.uniforms;let v=0;const T=16;for(let C=0,y=M.length;C<y;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let U=0,A=b.length;U<A;U++){const D=b[U],I=Array.isArray(D.value)?D.value:[D.value];for(let H=0,z=I.length;H<z;H++){const N=I[H],F=g(N),Z=v%T,J=Z%F.boundary,ce=Z+J;v+=J,ce!==0&&T-ce<F.storage&&(v+=T-ce),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=F.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Te("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}const Lb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function Ib(){return ei===null&&(ei=new tu(Lb,16,16,cr,wn),ei.name="DFG_LUT",ei.minFilter=Tt,ei.magFilter=Tt,ei.wrapS=Xn,ei.wrapT=Xn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class Nb{constructor(e={}){const{canvas:t=R0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Mn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=p,m=new Set([qh,Xh,Wh]),_=new Set([Mn,hi,po,mo,Hh,Vh]),x=new Uint32Array(4),M=new Int32Array(4);let v=null,T=null;const w=[],C=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let U=!1;this._outputColorSpace=vt;let A=0,D=0,I=null,H=-1,z=null;const N=new gt,F=new gt;let Z=null;const J=new j(0);let ce=0,fe=t.width,se=t.height,Fe=1,Ke=null,Ze=null;const K=new gt(0,0,fe,se),re=new gt(0,0,fe,se);let le=!1;const Be=new nl;let Re=!1,Le=!1;const Vt=new Ue,$e=new P,tt=new gt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ct(){return I===null?Fe:1}let L=n;function Lt(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r183"),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",mt,!1),L===null){const k="webgl2";if(L=Lt(k,E),L===null)throw Lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}let et,pt,Se,R,S,B,Y,$,q,_e,oe,Ce,De,Q,ne,ve,ye,pe,Ge,O,ae,ie,ge;function ee(){et=new NM(L),et.init(),ae=new Tb(L,et),pt=new EM(L,et,e,ae),Se=new Sb(L,et),pt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),R=new OM(L),S=new lb,B=new bb(L,et,Se,S,pt,ae,R),Y=new IM(b),$=new Vv(L),ie=new TM(L,$),q=new FM(L,$,R,ie),_e=new kM(L,q,$,ie,R),pe=new BM(L,pt,B),ne=new AM(S),oe=new ab(b,Y,et,pt,ie,ne),Ce=new Pb(b,S),De=new hb,Q=new gb(et),ye=new bM(b,Y,Se,_e,f,l),ve=new Mb(b,_e,pt),ge=new Db(L,R,pt,Se),Ge=new wM(L,et,R),O=new UM(L,et,R),R.programs=oe.programs,b.capabilities=pt,b.extensions=et,b.properties=S,b.renderLists=De,b.shadowMap=ve,b.state=Se,b.info=R}ee(),g!==Mn&&(y=new HM(g,t.width,t.height,i,r));const X=new Cb(b,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){E!==void 0&&(Fe=E,this.setSize(fe,se,!1))},this.getSize=function(E){return E.set(fe,se)},this.setSize=function(E,k,W=!0){if(X.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=E,se=k,t.width=Math.floor(E*Fe),t.height=Math.floor(k*Fe),W===!0&&(t.style.width=E+"px",t.style.height=k+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(fe*Fe,se*Fe).floor()},this.setDrawingBufferSize=function(E,k,W){fe=E,se=k,Fe=W,t.width=Math.floor(E*W),t.height=Math.floor(k*W),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(g===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,k,W,G){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,k,W,G),Se.viewport(N.copy(K).multiplyScalar(Fe).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,k,W,G){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,k,W,G),Se.scissor(F.copy(re).multiplyScalar(Fe).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){Se.setScissorTest(le=E)},this.setOpaqueSort=function(E){Ke=E},this.setTransparentSort=function(E){Ze=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,W=!0){let G=0;if(E){let V=!1;if(I!==null){const ue=I.texture.format;V=m.has(ue)}if(V){const ue=I.texture.type,me=_.has(ue),de=ye.getClearColor(),Me=ye.getClearAlpha(),we=de.r,Oe=de.g,We=de.b;me?(x[0]=we,x[1]=Oe,x[2]=We,x[3]=Me,L.clearBufferuiv(L.COLOR,0,x)):(M[0]=we,M[1]=Oe,M[2]=We,M[3]=Me,L.clearBufferiv(L.COLOR,0,M))}else G|=L.COLOR_BUFFER_BIT}k&&(G|=L.DEPTH_BUFFER_BIT),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),ye.dispose(),De.dispose(),Q.dispose(),S.dispose(),Y.dispose(),_e.dispose(),ie.dispose(),ge.dispose(),oe.dispose(),X.dispose(),X.removeEventListener("sessionstart",Bu),X.removeEventListener("sessionend",ku),ts.stop()};function xe(E){E.preventDefault(),Va("WebGLRenderer: Context Lost."),U=!0}function Ie(){Va("WebGLRenderer: Context Restored."),U=!1;const E=R.autoReset,k=ve.enabled,W=ve.autoUpdate,G=ve.needsUpdate,V=ve.type;ee(),R.autoReset=E,ve.enabled=k,ve.autoUpdate=W,ve.needsUpdate=G,ve.type=V}function mt(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const k=E.target;k.removeEventListener("dispose",nt),mi(k)}function mi(E){gi(E),S.remove(E)}function gi(E){const k=S.get(E).programs;k!==void 0&&(k.forEach(function(W){oe.releaseProgram(W)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,W,G,V,ue){k===null&&(k=ht);const me=V.isMesh&&V.matrixWorld.determinant()<0,de=Hg(E,k,W,G,V);Se.setMaterial(G,me);let Me=W.index,we=1;if(G.wireframe===!0){if(Me=q.getWireframeAttribute(W),Me===void 0)return;we=2}const Oe=W.drawRange,We=W.attributes.position;let Ee=Oe.start*we,ot=(Oe.start+Oe.count)*we;ue!==null&&(Ee=Math.max(Ee,ue.start*we),ot=Math.min(ot,(ue.start+ue.count)*we)),Me!==null?(Ee=Math.max(Ee,0),ot=Math.min(ot,Me.count)):We!=null&&(Ee=Math.max(Ee,0),ot=Math.min(ot,We.count));const Rt=ot-Ee;if(Rt<0||Rt===1/0)return;ie.setup(V,G,de,W,Me);let wt,at=Ge;if(Me!==null&&(wt=$.get(Me),at=O,at.setIndex(wt)),V.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*Ct()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(V.isLine){let Zt=G.linewidth;Zt===void 0&&(Zt=1),Se.setLineWidth(Zt*Ct()),V.isLineSegments?at.setMode(L.LINES):V.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else V.isPoints?at.setMode(L.POINTS):V.isSprite&&at.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Zt=V._multiDrawStarts,be=V._multiDrawCounts,_n=V._multiDrawCount,Je=Me?$.get(Me).bytesPerElement:1,kn=S.get(G).currentProgram.getUniforms();for(let Jn=0;Jn<_n;Jn++)kn.setValue(L,"_gl_DrawID",Jn),at.render(Zt[Jn]/Je,be[Jn])}else if(V.isInstancedMesh)at.renderInstances(Ee,Rt,V.count);else if(W.isInstancedBufferGeometry){const Zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Zt);at.renderInstances(Ee,Rt,be)}else at.render(Ee,Rt)};function Ou(E,k,W){E.transparent===!0&&E.side===Qe&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,zo(E,k,W),E.side=Ri,E.needsUpdate=!0,zo(E,k,W),E.side=Qe):zo(E,k,W)}this.compile=function(E,k,W=null){W===null&&(W=E),T=Q.get(W),T.init(k),C.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const de=ue[me];Ou(de,W,V),G.add(de)}else Ou(ue,W,V),G.add(ue)}),T=C.pop(),G},this.compileAsync=function(E,k,W=null){const G=this.compile(E,k,W);return new Promise(V=>{function ue(){if(G.forEach(function(me){S.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){V(E);return}setTimeout(ue,10)}et.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let hl=null;function zg(E){hl&&hl(E)}function Bu(){ts.stop()}function ku(){ts.start()}const ts=new Sm;ts.setAnimationLoop(zg),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(E){hl=E,X.setAnimationLoop(E),E===null?ts.stop():ts.start()},X.addEventListener("sessionstart",Bu),X.addEventListener("sessionend",ku),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,G=y!==null&&(I===null||W)&&y.begin(b,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(k),k=X.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,k,I),T=Q.get(E,C.length),T.init(k),C.push(T),Vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Be.setFromProjectionMatrix(Vt,oi,k.reversedDepth),Le=this.localClippingEnabled,Re=ne.init(this.clippingPlanes,Le),v=De.get(E,w.length),v.init(),w.push(v),X.enabled===!0&&X.isPresenting===!0){const me=b.xr.getDepthSensingMesh();me!==null&&ul(me,k,-1/0,b.sortObjects)}ul(E,k,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Ke,Ze),Ve=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ve&&ye.addToRenderList(v,E),this.info.render.frame++,Re===!0&&ne.beginShadows();const V=T.state.shadowsArray;if(ve.render(V,E,k),Re===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&y.hasRenderPass())===!1){const me=v.opaque,de=v.transmissive;if(T.setupLights(),k.isArrayCamera){const Me=k.cameras;if(de.length>0)for(let we=0,Oe=Me.length;we<Oe;we++){const We=Me[we];Hu(me,de,E,We)}Ve&&ye.render(E);for(let we=0,Oe=Me.length;we<Oe;we++){const We=Me[we];zu(v,E,We,We.viewport)}}else de.length>0&&Hu(me,de,E,k),Ve&&ye.render(E),zu(v,E,k)}I!==null&&D===0&&(B.updateMultisampleRenderTarget(I),B.updateRenderTargetMipmap(I)),G&&y.end(b),E.isScene===!0&&E.onAfterRender(b,E,k),ie.resetDefaultState(),H=-1,z=null,C.pop(),C.length>0?(T=C[C.length-1],Re===!0&&ne.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function ul(E,k,W,G){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){G&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Vt);const me=_e.update(E),de=E.material;de.visible&&v.push(E,me,de,W,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const me=_e.update(E),de=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),tt.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),tt.copy(me.boundingSphere.center)),tt.applyMatrix4(E.matrixWorld).applyMatrix4(Vt)),Array.isArray(de)){const Me=me.groups;for(let we=0,Oe=Me.length;we<Oe;we++){const We=Me[we],Ee=de[We.materialIndex];Ee&&Ee.visible&&v.push(E,me,Ee,W,tt.z,We)}}else de.visible&&v.push(E,me,de,W,tt.z,null)}}const ue=E.children;for(let me=0,de=ue.length;me<de;me++)ul(ue[me],k,W,G)}function zu(E,k,W,G){const{opaque:V,transmissive:ue,transparent:me}=E;T.setupLightsView(W),Re===!0&&ne.setGlobalState(b.clippingPlanes,W),G&&Se.viewport(N.copy(G)),V.length>0&&ko(V,k,W),ue.length>0&&ko(ue,k,W),me.length>0&&ko(me,k,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Hu(E,k,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ee=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new un(1,1,{generateMipmaps:!0,type:Ee?wn:Mn,minFilter:ri,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ue=T.state.transmissionRenderTarget[G.id],me=G.viewport||N;ue.setSize(me.z*b.transmissionResolutionScale,me.w*b.transmissionResolutionScale);const de=b.getRenderTarget(),Me=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(ue),b.getClearColor(J),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&ye.render(W);const Oe=b.toneMapping;b.toneMapping=ci;const We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Re===!0&&ne.setGlobalState(b.clippingPlanes,G),ko(E,W,G),B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ot=0,Rt=k.length;ot<Rt;ot++){const wt=k[ot],{object:at,geometry:Zt,material:be,group:_n}=wt;if(be.side===Qe&&at.layers.test(G.layers)){const Je=be.side;be.side=jt,be.needsUpdate=!0,Vu(at,W,G,Zt,be,_n),be.side=Je,be.needsUpdate=!0,Ee=!0}}Ee===!0&&(B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue))}b.setRenderTarget(de,Me,we),b.setClearColor(J,ce),We!==void 0&&(G.viewport=We),b.toneMapping=Oe}function ko(E,k,W){const G=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ue=E.length;V<ue;V++){const me=E[V],{object:de,geometry:Me,group:we}=me;let Oe=me.material;Oe.allowOverride===!0&&G!==null&&(Oe=G),de.layers.test(W.layers)&&Vu(de,k,W,Me,Oe,we)}}function Vu(E,k,W,G,V,ue){E.onBeforeRender(b,k,W,G,V,ue),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,k,W,G,E,ue),V.transparent===!0&&V.side===Qe&&V.forceSinglePass===!1?(V.side=jt,V.needsUpdate=!0,b.renderBufferDirect(W,k,G,V,E,ue),V.side=Ri,V.needsUpdate=!0,b.renderBufferDirect(W,k,G,V,E,ue),V.side=Qe):b.renderBufferDirect(W,k,G,V,E,ue),E.onAfterRender(b,k,W,G,V,ue)}function zo(E,k,W){k.isScene!==!0&&(k=ht);const G=S.get(E),V=T.state.lights,ue=T.state.shadowsArray,me=V.state.version,de=oe.getParameters(E,V.state,ue,k,W),Me=oe.getProgramCacheKey(de);let we=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,G.fog=k.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=Y.get(E.envMap||G.environment,Oe),G.envMapRotation=G.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",nt),we=new Map,G.programs=we);let We=we.get(Me);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===me)return Wu(E,de),We}else de.uniforms=oe.getUniforms(E),E.onBeforeCompile(de,b),We=oe.acquireProgram(de,Me),we.set(Me,We),G.uniforms=de.uniforms;const Ee=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Wu(E,de),G.needsLights=Gg(E),G.lightsStateVersion=me,G.needsLights&&(Ee.ambientLightColor.value=V.state.ambient,Ee.lightProbe.value=V.state.probe,Ee.directionalLights.value=V.state.directional,Ee.directionalLightShadows.value=V.state.directionalShadow,Ee.spotLights.value=V.state.spot,Ee.spotLightShadows.value=V.state.spotShadow,Ee.rectAreaLights.value=V.state.rectArea,Ee.ltc_1.value=V.state.rectAreaLTC1,Ee.ltc_2.value=V.state.rectAreaLTC2,Ee.pointLights.value=V.state.point,Ee.pointLightShadows.value=V.state.pointShadow,Ee.hemisphereLights.value=V.state.hemi,Ee.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ee.spotLightMatrix.value=V.state.spotLightMatrix,Ee.spotLightMap.value=V.state.spotLightMap,Ee.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function Gu(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ia.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Wu(E,k){const W=S.get(E);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Hg(E,k,W,G,V){k.isScene!==!0&&(k=ht),B.resetTextureUnits();const ue=k.fog,me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?k.environment:null,de=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ln,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=Y.get(G.envMap||me,Me),Oe=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let wt=ci;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=b.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Zt=at!==void 0?at.length:0,be=S.get(G),_n=T.state.lights;if(Re===!0&&(Le===!0||E!==z)){const Gt=E===z&&G.id===H;ne.setState(G,E,Gt)}let Je=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==_n.state.version||be.outputColorSpace!==de||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==we||G.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==We||be.morphTargets!==Ee||be.morphNormals!==ot||be.morphColors!==Rt||be.toneMapping!==wt||be.morphTargetsCount!==Zt)&&(Je=!0):(Je=!0,be.__version=G.version);let kn=be.currentProgram;Je===!0&&(kn=zo(G,k,V));let Jn=!1,ns=!1,Ps=!1;const ut=kn.getUniforms(),Yt=be.uniforms;if(Se.useProgram(kn.program)&&(Jn=!0,ns=!0,Ps=!0),G.id!==H&&(H=G.id,ns=!0),Jn||z!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",E.projectionMatrix),ut.setValue(L,"viewMatrix",E.matrixWorldInverse);const Fi=ut.map.cameraPosition;Fi!==void 0&&Fi.setValue(L,$e.setFromMatrixPosition(E.matrixWorld)),pt.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,ns=!0,Ps=!0)}if(be.needsLights&&(_n.state.directionalShadowMap.length>0&&ut.setValue(L,"directionalShadowMap",_n.state.directionalShadowMap,B),_n.state.spotShadowMap.length>0&&ut.setValue(L,"spotShadowMap",_n.state.spotShadowMap,B),_n.state.pointShadowMap.length>0&&ut.setValue(L,"pointShadowMap",_n.state.pointShadowMap,B)),V.isSkinnedMesh){ut.setOptional(L,V,"bindMatrix"),ut.setOptional(L,V,"bindMatrixInverse");const Gt=V.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ut.setValue(L,"boneTexture",Gt.boneTexture,B))}V.isBatchedMesh&&(ut.setOptional(L,V,"batchingTexture"),ut.setValue(L,"batchingTexture",V._matricesTexture,B),ut.setOptional(L,V,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",V._indirectTexture,B),ut.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",V._colorsTexture,B));const Ni=W.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&pe.update(V,W,kn),(ns||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,ut.setValue(L,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&k.environment!==null&&(Yt.envMapIntensity.value=k.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=Ib()),ns&&(ut.setValue(L,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&Vg(Yt,Ps),ue&&G.fog===!0&&Ce.refreshFogUniforms(Yt,ue),Ce.refreshMaterialUniforms(Yt,G,Fe,se,T.state.transmissionRenderTarget[E.id]),Ia.upload(L,Gu(be),Yt,B)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ia.upload(L,Gu(be),Yt,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(L,"center",V.center),ut.setValue(L,"modelViewMatrix",V.modelViewMatrix),ut.setValue(L,"normalMatrix",V.normalMatrix),ut.setValue(L,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Gt=G.uniformsGroups;for(let Fi=0,Ds=Gt.length;Fi<Ds;Fi++){const Xu=Gt[Fi];ge.update(Xu,kn),ge.bind(Xu,kn)}}return kn}function Vg(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Gg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,k,W){const G=S.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=k,S.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const W=S.get(E);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Wg=L.createFramebuffer();this.setRenderTarget=function(E,k=0,W=0){I=E,A=k,D=W;let G=null,V=!1,ue=!1;if(E){const de=S.get(E);if(de.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(L.FRAMEBUFFER,de.__webglFramebuffer),N.copy(E.viewport),F.copy(E.scissor),Z=E.scissorTest,Se.viewport(N),Se.scissor(F),Se.setScissorTest(Z),H=-1;return}else if(de.__webglFramebuffer===void 0)B.setupRenderTarget(E);else if(de.__hasExternalTextures)B.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(de.__boundDepthTexture!==Oe){if(Oe!==null&&S.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const we=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[k])?G=we[k][W]:G=we[k],V=!0):E.samples>0&&B.useMultisampledRTT(E)===!1?G=S.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[W]:G=we,N.copy(E.viewport),F.copy(E.scissor),Z=E.scissorTest}else N.copy(K).multiplyScalar(Fe).floor(),F.copy(re).multiplyScalar(Fe).floor(),Z=le;if(W!==0&&(G=Wg),Se.bindFramebuffer(L.FRAMEBUFFER,G)&&Se.drawBuffers(E,G),Se.viewport(N),Se.scissor(F),Se.setScissorTest(Z),V){const de=S.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,de.__webglTexture,W)}else if(ue){const de=k;for(let Me=0;Me<E.textures.length;Me++){const we=S.get(E.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,we.__webglTexture,W,de)}}else if(E!==null&&W!==0){const de=S.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(E,k,W,G,V,ue,me,de=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Se.bindFramebuffer(L.FRAMEBUFFER,Me);try{const we=E.textures[de],Oe=we.format,We=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),!pt.textureFormatReadable(Oe)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(We)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-G&&W>=0&&W<=E.height-V&&L.readPixels(k,W,G,V,ae.convert(Oe),ae.convert(We),ue)}finally{const we=I!==null?S.get(I).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,k,W,G,V,ue,me,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(k>=0&&k<=E.width-G&&W>=0&&W<=E.height-V){Se.bindFramebuffer(L.FRAMEBUFFER,Me);const we=E.textures[de],Oe=we.format,We=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),!pt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(k,W,G,V,ae.convert(Oe),ae.convert(We),0);const ot=I!==null?S.get(I).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,ot);const Rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await P0(L,Rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Ee),L.deleteSync(Rt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,W=0){const G=Math.pow(2,-W),V=Math.floor(E.image.width*G),ue=Math.floor(E.image.height*G),me=k!==null?k.x:0,de=k!==null?k.y:0;B.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,me,de,V,ue),Se.unbindTexture()};const Xg=L.createFramebuffer(),qg=L.createFramebuffer();this.copyTextureToTexture=function(E,k,W=null,G=null,V=0,ue=0){let me,de,Me,we,Oe,We,Ee,ot,Rt;const wt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(W!==null)me=W.max.x-W.min.x,de=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Oe=W.min.y,We=W.isBox3?W.min.z:0;else{const Yt=Math.pow(2,-V);me=Math.floor(wt.width*Yt),de=Math.floor(wt.height*Yt),E.isDataArrayTexture?Me=wt.depth:E.isData3DTexture?Me=Math.floor(wt.depth*Yt):Me=1,we=0,Oe=0,We=0}G!==null?(Ee=G.x,ot=G.y,Rt=G.z):(Ee=0,ot=0,Rt=0);const at=ae.convert(k.format),Zt=ae.convert(k.type);let be;k.isData3DTexture?(B.setTexture3D(k,0),be=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(B.setTexture2DArray(k,0),be=L.TEXTURE_2D_ARRAY):(B.setTexture2D(k,0),be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const _n=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kn=L.getParameter(L.UNPACK_SKIP_PIXELS),Jn=L.getParameter(L.UNPACK_SKIP_ROWS),ns=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We);const Ps=E.isDataArrayTexture||E.isData3DTexture,ut=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Yt=S.get(E),Ni=S.get(k),Gt=S.get(Yt.__renderTarget),Fi=S.get(Ni.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ds=0;Ds<Me;Ds++)Ps&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(E).__webglTexture,V,We+Ds),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(k).__webglTexture,ue,Rt+Ds)),L.blitFramebuffer(we,Oe,me,de,Ee,ot,me,de,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||S.has(E)){const Yt=S.get(E),Ni=S.get(k);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Xg),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,qg);for(let Gt=0;Gt<Me;Gt++)Ps?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,V,We+Gt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,V),ut?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ni.__webglTexture,ue,Rt+Gt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ni.__webglTexture,ue),V!==0?L.blitFramebuffer(we,Oe,me,de,Ee,ot,me,de,L.COLOR_BUFFER_BIT,L.NEAREST):ut?L.copyTexSubImage3D(be,ue,Ee,ot,Rt+Gt,we,Oe,me,de):L.copyTexSubImage2D(be,ue,Ee,ot,we,Oe,me,de);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(be,ue,Ee,ot,Rt,me,de,Me,at,Zt,wt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(be,ue,Ee,ot,Rt,me,de,Me,at,wt.data):L.texSubImage3D(be,ue,Ee,ot,Rt,me,de,Me,at,Zt,wt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Ee,ot,me,de,at,Zt,wt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Ee,ot,wt.width,wt.height,at,wt.data):L.texSubImage2D(L.TEXTURE_2D,ue,Ee,ot,me,de,at,Zt,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,_n),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ns),ue===0&&k.generateMipmaps&&L.generateMipmap(be),Se.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&B.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?B.setTextureCube(E,0):E.isData3DTexture?B.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?B.setTexture2DArray(E,0):B.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){A=0,D=0,I=null,Se.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const _f={type:"change"},fu={type:"start"},Cm={type:"end"},va=new wr,vf=new wi,Fb=Math.cos(70*qe.DEG2RAD),Ft=new P,cn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$l=1e-6;class Ub extends zv{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new jn,this._lastTargetPosition=new P,this._quat=new jn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qd,this._sphericalDelta=new qd,this._scale=1,this._panOffset=new P,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new P,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bb.bind(this),this._onPointerDown=Ob.bind(this),this._onPointerUp=kb.bind(this),this._onContextMenu=qb.bind(this),this._onMouseWheel=Vb.bind(this),this._onKeyDown=Gb.bind(this),this._onTouchStart=Wb.bind(this),this._onTouchMove=Xb.bind(this),this._onMouseDown=zb.bind(this),this._onMouseMove=Hb.bind(this),this._interceptControlDown=Yb.bind(this),this._interceptControlUp=jb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_f),this.update(),this.state=lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(va.origin.copy(this.object.position),va.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(va.direction))<Fb?this.object.lookAt(this.target):(vf.setFromNormalAndCoplanarPoint(this.object.up,this.target),va.intersectPlane(vf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$l||this._lastTargetPosition.distanceToSquared(this.target)>$l?(this.dispatchEvent(_f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ft.copy(i).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ob(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Bb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cm),this.state=lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=lt.DOLLY;break;case tr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=lt.ROTATE}break;case tr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(fu)}function Hb(s){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Vb(s){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(s.preventDefault(),this.dispatchEvent(fu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cm))}function Gb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Wb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=lt.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=lt.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(fu)}function Xb(s){switch(this._trackPointer(s),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=lt.NONE}}function qb(s){this.enabled!==!1&&s.preventDefault()}function Yb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pu(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new At;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=xf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let g=0;g<o[h].length;++g)p.push(o[h][g][d]);const f=xf(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function xf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Xt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){const g=h.getComponent(d,f);a.setComponent(d+u,f,g)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function yf(s,e){if(e===v0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ah||e===Zp){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ah)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Kb(s){const e=new Map,t=new Map,n=s.clone();return Rm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Rm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Rm(s.children[n],e.children[n],t)}class mu extends Rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eT(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new uT(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Mf(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mf(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new fT(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ao.extractUrlBase(e);o=ao.resolveURL(c,this.path)}else o=ao.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ym(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pm){try{o[Xe.KHR_BINARY_GLTF]=new pT(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new AT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:o[u]=new Jb;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[u]=new mT(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[u]=new gT;break;case Xe.KHR_MESH_QUANTIZATION:o[u]=new _T;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Zb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Dt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $b{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new j(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ln);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ya(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hu(h),c.distance=u;break;case"spot":c=new Mv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Jb{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){const i=[];e.color=new j(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class Qb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class eT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(r,r)}return Promise.all(i)}}class tT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class nT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class iT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new j(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class sT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class rT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new j().setRGB(r[0],r[1],r[2],ln),Promise.all(i)}}class oT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class aT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new j().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}}class lT{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class cT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?pi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class hT{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uT{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class dT{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Mf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class fT{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const f of u){const g=new Ue,m=new P,_=new jn,x=new P(1,1,1),M=new sm(f.geometry,f.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,g.compose(m,_,x));for(const v in l)if(v==="_COLOR_0"){const T=l[v];M.instanceColor=new ch(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&f.geometry.setAttribute(v,l[v]);_t.prototype.copy.call(M,f),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Pm="glTF",zr=12,Sf={JSON:1313821514,BIN:5130562};class pT{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zr,r=new DataView(e,zr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Sf.JSON){const c=new Uint8Array(e,zr+o,a);this.content=n.decode(c)}else if(l===Sf.BIN){const c=zr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=_h[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=_h[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=ir[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const f in p.attributes){const g=p.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}u(p)},a,c,ln,d)})})}}class gT{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _T{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Dm extends Er{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,f=e*c,g=f-c,m=-2*p+3*d,_=p-d,x=1-m,M=_-d+u;for(let v=0;v!==a;v++){const T=o[g+v+a],w=o[g+v+l]*h,C=o[f+v+a],y=o[f+v]*h;r[v]=x*T+M*w+m*C+_*y}return r}}const vT=new jn;class xT extends Dm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vT.fromArray(r).normalize().toArray(r),r}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bf={9728:Ut,9729:Tt,9984:Gp,9985:Ca,9986:Yr,9987:ri},Tf={33071:Xn,33648:ka,10497:Pi},Jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yT={CUBICSPLINE:void 0,LINEAR:_o,STEP:go},Ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),s.DefaultMaterial}function cs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ST(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function bT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TT(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ec(t.attributes):e=s.indices+":"+ec(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ec(s.targets[n]);return e}function ec(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ET=new Ue;class AT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new sl(this.options.manager):this.textureLoader=new wv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ym(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return cs(r,a,i),ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ao.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Jl[i.type],a=ir[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Jl[i.type],c=ir[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0;let g,m;if(p&&p!==u){const _=Math.floor(d/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let M=t.cache.get(x);M||(g=new c(a,_*p,i.count*p/h),M=new h_(g,p/h),t.cache.add(x,M)),m=new eu(M,l,d%p/h,f)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new Xt(g,l,f);if(i.sparse!==void 0){const _=Jl.SCALAR,x=ir[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new x(o[1],M,i.sparse.count*_),w=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,y=T.length;C<y;C++){const b=T[C];if(m.setX(b,w[C*l]),l>=2&&m.setY(b,w[C*l+1]),l>=3&&m.setZ(b,w[C*l+2]),l>=4&&m.setW(b,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=bf[d.magFilter]||Tt,h.minFilter=bf[d.minFilter]||ri,h.wrapS=Tf[d.wrapS]||Pi,h.wrapT=Tf[d.wrapT]||Pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Tt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(g){const m=new kt(g);m.needsUpdate=!0,d(m)}),t.load(ao.resolveURL(u,r.path),f,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ti(u,o),u.userData.mimeType=o.mimeType||wT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new il,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rm,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new j(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ln),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qe);const h=r.alphaMode||Ql.OPAQUE;if(h===Ql.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ql.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==an){const u=r.emissiveFactor;a.emissive=new j().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&o!==an&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&cs(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return wf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=TT(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=wf(new At,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?MT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){const g=h[p],m=o[p];let _;const x=c[p];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new p_(g,x):new Ne(g,x),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?_.geometry=yf(_.geometry,Zp):m.mode===Ln.TRIANGLE_FAN&&(_.geometry=yf(_.geometry,ah));else if(m.mode===Ln.LINES)_=new y_(g,x);else if(m.mode===Ln.LINE_STRIP)_=new iu(g,x);else if(m.mode===Ln.LINE_LOOP)_=new M_(g,x);else if(m.mode===Ln.POINTS)_=new su(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&bT(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),ti(_,r),m.extensions&&cs(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&cs(i,u[0],r),u[0];const d=new Ot;r.extensions&&cs(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(qe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ue;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nu(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],f=i.samplers[p.sampler],g=p.target,m=g.node,_=i.parameters!==void 0?i.parameters[f.input]:f.input,x=i.parameters!==void 0?i.parameters[f.output]:f.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",x)),c.push(f),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],f=u[2],g=u[3],m=u[4],_=[];for(let M=0,v=d.length;M<v;M++){const T=d[M],w=p[M],C=f[M],y=g[M],b=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const U=n._createAnimationTracks(T,w,C,y,b);if(U)for(let A=0;A<U.length;A++)_.push(U[A])}const x=new fv(r,void 0,_);return ti(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,ET)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){const p=h.userData.pivot,f=u[0];h.pivot=new P().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],f.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new im:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ti(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){const u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ot;n.name&&(r.name=i.createUniqueName(n.name)),ti(r,n),n.extensions&&cs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(Kb(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Yn||d instanceof kt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Vi[r.path]===Vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Vi[r.path]){case Vi.weights:c=pr;break;case Vi.rotation:c=mr;break;case Vi.translation:case Vi.scale:c=gr;break;default:n.itemSize===1?c=pr:c=gr;break}const h=i.interpolation!==void 0?yT[i.interpolation]:_o,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const f=new c(l[d]+"."+Vi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),o.push(f)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof mr?xT:Dm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function CT(s,e,t){const n=e.attributes,i=new Zn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const h=vh(ir[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){const g=vh(ir[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new di;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function wf(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=_h[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ye.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),ti(s,e),CT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ST(s,e.targets,t):s})}const Na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Uo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RT=new Fo(-1,1,1,-1,0,1);class PT extends At{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const DT=new PT;class Lm{constructor(e){this._mesh=new Ne(DT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,RT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class LT extends Uo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qa.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ef extends Uo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class IT extends Uo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class NT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new LT(Na),this.copyPass.material.blending=li,this.timer=new Cv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ef!==void 0&&(o instanceof Ef?n=!0:o instanceof IT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class FT extends Uo{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new j}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const UT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _r extends Uo{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new j(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new un(r,o,{type:wn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new un(r,o,{type:wn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=UT;this.highPassUniforms=qa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qa.clone(Na.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,premultipliedAlpha:!0,blending:Ba,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new j,this._oldClearAlpha=1,this._basic=new an,this._fsQuad=new Lm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=_r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}_r.BlurDirectionX=new te(1,0);_r.BlurDirectionY=new te(0,1);class OT extends em{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new qn;e.deleteAttribute("uv");const t=new Qt({side:jt}),n=new Qt,i=new hu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new sm(e,n,6),a=new _t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Ne(e,js(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ne(e,js(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Ne(e,js(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ne(e,js(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new Ne(e,js(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new Ne(e,js(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function js(s){return new rv({color:0,emissive:16777215,emissiveIntensity:s})}function Ti(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Im(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vr={duration:.5,overwrite:!1,delay:0},gu,Kt,xt,Un=1e8,ft=1/Un,xh=Math.PI*2,BT=xh/4,kT=0,Nm=Math.sqrt,zT=Math.cos,HT=Math.sin,qt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Li=function(e){return typeof e=="number"},_u=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},dn=function(e){return e!==!1},vu=function(){return typeof window<"u"},xa=function(e){return Et(e)||qt(e)},Fm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,VT=/random\([^)]+\)/g,GT=/,\s*/g,Af=/(?:-?\.?\d|\.)+/gi,Um=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Om=/[+-]=-?[.\d]+/,WT=/[^,'"\[\]\s]+/gi,XT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,ni,yh,xu,Cn={},ja={},Bm,km=function(e){return(ja=xr(e,Cn))&&gn},yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Eo=function(e,t){return!t&&console.warn(e)},zm=function(e,t){return e&&(Cn[e]=t)&&ja&&(ja[e]=t)||Cn},Ao=function(){return 0},qT={suppressEvents:!0,isStart:!0,kill:!1},Fa={suppressEvents:!0,kill:!1},YT={suppressEvents:!0},Mu={},Ki=[],Mh={},Hm,yn={},nc={},Cf=30,Ua=[],Su="",bu=function(e){var t=e[0],n,i;if(ui(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ua.length;i--&&!Ua[i].targetTest(t););n=Ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ug(e[i],n)))||e.splice(i,1);return e},Ms=function(e){return e._gsap||bu(On(e))[0]._gsap},Vm=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():_u(n)&&e.getAttribute&&e.getAttribute(t)||n},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},sr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ka=function(){var e=Ki.length,t=Ki.slice(0),n,i;for(Mh={},Ki.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Tu=function(e){return!!(e._initted||e._startAt||e.add)},Gm=function(e,t,n,i){Ki.length&&!Kt&&Ka(),e.render(t,n,!!(Kt&&t<0&&Tu(e))),Ki.length&&!Kt&&Ka()},Wm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(WT).length<2?t:qt(e)?e.trim():e},Xm=function(e){return e},Rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},KT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xr=function(e,t){for(var n in t)e[n]=t[n];return e},Rf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Za=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},lo=function(e){var t=e.parent||Mt,n=e.keyframes?KT(tn(e.keyframes)):Rn;if(dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ZT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qm=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},al=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$T=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sh=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(Fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},JT=function s(e){return!e||e._ts&&s(e.parent)},Pf=function(e){return e._repeat?yr(e._tTime,e=e.duration()+e._rDelay)*e:0},yr=function(e,t){var n=Math.floor(e=yt(e/t));return e&&n===e?n-1:n},$a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ll=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},cl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ll(e),n._dirty||Ss(n,e)),e},Ym=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=$a(e.rawTime(),t),(!t._dur||Oo(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),Ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},si=function(e,t,n,i){return t.parent&&$i(t),t._start=yt((Li(n)?n:n||e!==Mt?Dn(e,n,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qm(e,t,"_first","_last",e._sort?"_start":0),bh(t)||(e._recent=t),i||Ym(e,t),e._ts<0&&cl(e,e._tTime),e},jm=function(e,t){return(Cn.ScrollTrigger||yu("scrollTrigger",t))&&Cn.ScrollTrigger.create(t,e)},Km=function(e,t,n,i,r){if(Eu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hm!==Sn.frame)return Ki.push(e),e._lazy=[r,i],1},QT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},bh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ew=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&QT(e)&&!(!e._initted&&bh(e))||(e._ts<0||e._dp._ts<0)&&!bh(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Oo(0,e._tDur,t),h=yr(l,a),e._yoyo&&h&1&&(o=1-o),h!==yr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Kt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Km(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Sh(e,t,n,!0),e._onUpdate&&!n&&bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$i(e,1),!n&&!Kt&&(bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Mr=function(e,t,n,i){var r=e._repeat,o=yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:yt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&cl(e,e._tTime=e._tDur*a),e.parent&&ll(e),n||Ss(e.parent,e),e},Df=function(e){return e instanceof on?Ss(e):Mr(e,e._dur)},nw={_start:0,endTime:Ao,totalDuration:Ao},Dn=function s(e,t,n){var i=e.labels,r=e._recent||nw,o=e.duration()>=Un?r.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},co=function(e,t,n){var i=Li(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Nt(t[0],o,t[r+1])},es=function(e,t){return e||e===0?t(e):t},Oo=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!qt(e)||!(t=XT.exec(e))?"":t[1]},iw=function(e,t,n){return es(n,function(i){return Oo(e,t,i)})},Th=[].slice,Zm=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ni},sw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return qt(i)&&!t||Zm(i,1)?(r=n).push.apply(r,On(i)):n.push(i)})||n},On=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):qt(e)&&!n&&(yh||!Sr())?Th.call((t||xu).querySelectorAll(e),0):tn(e)?sw(e,n):Zm(e)?Th.call(e,0):e?[e]:[]},wh=function(e){return e=On(e)[0]||Eo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return On(t,n.querySelectorAll?n:n===e?Eo("Invalid scope")||xu.createElement("div"):e)}},$m=function(e){return e.sort(function(){return .5-Math.random()})},Jm=function(e){if(Et(e))return e;var t=ui(e)?e:{each:e},n=bs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return qt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,p,f){var g=(f||t).length,m=o[g],_,x,M,v,T,w,C,y,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Un])[1],!b){for(C=-Un;C<(C=f[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=o[g]=[],_=l?Math.min(b,g)*h-.5:i%b,x=b===Un?0:l?g*u/b-.5:i/b|0,C=0,y=Un,w=0;w<g;w++)M=w%b-_,v=x-(w/b|0),m[w]=T=c?Math.abs(c==="y"?v:M):Nm(M*M+v*v),T>C&&(C=T),T<y&&(y=T);i==="random"&&$m(m),m.max=C-y,m.min=y,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=en(t.amount||t.each)||0,n=n&&g<0?lg(n):n}return g=(m[d]-m.min)/m.max||0,yt(m.b+(n?n(g):g)*m.v)+m.u}},Eh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Li(n)?0:en(n))}},Qm=function(e,t){var n=tn(e),i,r;return!n&&ui(e)&&(i=n=e.radius||Un,e.values?(e=On(e.values),(r=!Li(e[0]))&&(i*=i)):e=Eh(e.increment)),es(t,n?Et(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Un,h=0,u=e.length,d,p;u--;)r?(d=e[u].x-a,p=e[u].y-l,d=d*d+p*p):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,r||h===o||Li(o)?h:h+en(o)}:Eh(e))},eg=function(e,t,n,i){return es(tn(e)?!t:n===!0?!!(n=0):!i,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},rw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},ow=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},aw=function(e,t,n){return ng(e,t,0,1,n)},tg=function(e,t,n){return es(n,function(i){return e[~~t(i)]})},lw=function s(e,t,n){var i=t-e;return tn(e)?tg(e,s(0,e.length),t):es(n,function(r){return(i+(r-e)%i)%i+e})},cw=function s(e,t,n){var i=t-e,r=i*2;return tn(e)?tg(e,s(0,e.length-1),t):es(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Co=function(e){return e.replace(VT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(GT);return eg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ng=function(e,t,n,i,r){var o=t-e,a=i-n;return es(r,function(l){return n+((l-e)/o*a||0)})},hw=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=qt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(f){f*=u;var g=Math.min(d,~~f);return h[g](f-g)},n=t}else i||(e=xr(tn(e)?[]:{},e));if(!h){for(l in t)wu.call(a,e,l,"get",t[l]);r=function(f){return Ru(f,a)||(o?e.p:e)}}}return es(n,r)},Lf=function(e,t,n){var i=e.labels,r=Un,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},bn=function(e,t,n){var i=e.vars,r=i[t],o=xt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ki.length&&Ka(),a&&(xt=a),h=l?r.apply(c,l):r.call(c),xt=o,h},Zr=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&bn(e,"onInterrupt"),e},er,ig=[],sg=function(e){if(e)if(e=!e.name&&e.default||e,vu()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ao,render:Ru,add:wu,kill:Ew,modifier:ww,rawVars:0},o={targetTest:0,get:0,getSetter:Cu,aliases:{},register:0};if(Sr(),e!==i){if(yn[t])return;Rn(i,Rn(Za(e,r),o)),xr(i.prototype,xr(r,Za(e,o))),yn[i.prop=t]=i,e.targetTest&&(Ua.push(i),Mu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}zm(t,i),e.register&&e.register(gn,i,pn)}else ig.push(e)},dt=255,$r={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},ic=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},rg=function(e,t,n){var i=e?Li(e)?[e>>16,e>>8&dt,e&dt]:0:$r.black,r,o,a,l,c,h,u,d,p,f;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$r[e])i=$r[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&dt,i&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(i=f=e.match(Af),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=ic(l+1/3,r,o),i[1]=ic(l,r,o),i[2]=ic(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Um),n&&i.length<4&&(i[3]=1),i}else i=e.match(Af)||$r.transparent;i=i.map(Number)}return t&&!f&&(r=i[0]/dt,o=i[1]/dt,a=i[2]/dt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===r?(o-a)/p+(o<a?6:0):u===o?(a-r)/p+2:(r-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},og=function(e){var t=[],n=[],i=-1;return e.split(Zi).forEach(function(r){var o=r.match(Qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},If=function(e,t,n){var i="",r=(e+i).match(Zi),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=rg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=og(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Zi,"1").split(Qs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Zi),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Zi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $r)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),uw=/hsl[a]?\(/,ag=function(e){var t=e.join(" "),n;if(Zi.lastIndex=0,Zi.test(t))return n=uw.test(t),e[1]=If(e[1],n),e[0]=If(e[0],n,og(e[1])),!0},Ro,Sn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,p,f=function g(m){var _=s()-i,x=m===!0,M,v,T,w;if((_>e||_<0)&&(n+=_-t),i+=_,T=i-n,M=T-o,(M>0||x)&&(w=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=M+(M>=r?4:r-M),v=1),x||(l=c(g)),v)for(p=0;p<a.length;p++)a[p](T,d,w,m)};return u={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Bm&&(!yh&&vu()&&(ni=yh=window,xu=ni.document||{},Cn.gsap=gn,(ni.gsapVersions||(ni.gsapVersions=[])).push(gn.version),km(ja||ni.GreenSockGlobals||!ni.gsap&&ni||{}),ig.forEach(sg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Ro=1,f(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ro=0,c=Ao},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,_,x){var M=_?function(v,T,w,C){m(v,T,w,C),u.remove(M)}:m;return u.remove(m),a[x?"unshift":"push"](M),Sr(),M},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},u})(),Sr=function(){return!Ro&&Sn.wake()},je={},dw=/^[\d.\-M][\d.\-,\s]/,fw=/["']/g,pw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(fw,"").trim():+c,i=l.substr(a+1).trim();return t},mw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gw=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[pw(t[1])]:mw(e).split(",").map(Wm)):je._CE&&dw.test(e)?je._CE("",e):n},lg=function(e){return function(t){return 1-e(1-t)}},cg=function s(e,t){for(var n=e._first,i;n;)n instanceof on?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},bs=function(e,t){return e&&(Et(e)?e:je[e]||gw(e))||t},Rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return fn(e,function(a){je[a]=Cn[a]=r,je[o=a.toLowerCase()]=n;for(var l in r)je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[a+"."+l]=r[l]}),r},hg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/xh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*HT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:hg(a);return r=xh/r,l.config=function(c,h){return s(e,c,h)},l},rc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:hg(n);return i.config=function(r){return s(e,r)},i};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Rs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Rs("Elastic",sc("in"),sc("out"),sc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Rs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Rs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Rs("Circ",function(s){return-(Nm(1-s*s)-1)});Rs("Sine",function(s){return s===1?1:-zT(s*BT)+1});Rs("Back",rc("in"),rc("out"),rc());je.SteppedEase=je.steps=Cn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-ft;return function(a){return((i*Oo(0,o,a)|0)+r)*n}}};vr.ease=je["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Su+=s+","+s+"Params,"});var ug=function(e,t){this.id=kT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vm,this.set=t?t.getSetter:Cu},Po=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Mr(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Ro||Sn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Sr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(cl(this,n),!r._dp||r.parent||Ym(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?yr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?$a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(Oo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ll(this),$T(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=yt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&si(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$a(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=YT);var i=Kt;return Kt=n,Tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Df(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Df(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Dn(this,n),dn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,dn(i)),this._dur||(this._zTime=-ft),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ft)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Et(n)?n:Xm,l=function(){var h=i.then;i.then=null,r&&r(),Et(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Zr(this)},s})();Rn(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var on=(function(s){Im(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),Mt&&si(n.parent||Mt,Ti(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&jm(Ti(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return co(0,arguments,this),this},t.from=function(i,r,o){return co(1,arguments,this),this},t.fromTo=function(i,r,o,a){return co(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,lo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Nt(i,r,Dn(this,o),1),this},t.call=function(i,r,o){return si(this,Nt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Nt(i,o,Dn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,lo(o).immediateRender=dn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,lo(a).immediateRender=dn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:yt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,f,g,m,_,x,M,v,T,w,C;if(this!==Mt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,M=this._ts,_=!M,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=yt(h%m),h===l?(g=this._repeat,d=c):(T=yt(h/m),g=~~T,g&&g===T&&(d=c,g--),d>c&&(d=c)),T=yr(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(d=c-d,C=1),g!==T&&!this._lock){var y=w&&T&1,b=y===(w&&g&1);if(g<T&&(y=!y),a=y?0:h%c?c:h,this._lock=1,this.render(a||(C?0:yt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;cg(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=tw(this,yt(a),yt(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(bn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(f=p._next,(p._act||d>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,o),d!==this._time||!this._ts&&!_){x=0,f&&(h+=this._zTime=-ft);break}}p=f}else{p=this._last;for(var U=i<0?i:d;p;){if(f=p._prev,(p._act||U<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(U-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(U-p._start)*p._ts,r,o||Kt&&Tu(p)),d!==this._time||!this._ts&&!_){x=0,f&&(h+=this._zTime=U?-ft:ft);break}}p=f}}if(x&&!r&&(this.pause(),x.render(d>=a?0:-ft)._zTime=d>=a?1:-1,this._ts))return this._start=v,ll(this),this.render(i,r,o);this._onUpdate&&!r&&bn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(bn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Li(r)||(r=Dn(this,r,i)),!(i instanceof Po)){if(tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(qt(i))return this.addLabel(i,r);if(Et(i))i=Nt.delayedCall(0,i);else return this}return this!==i?si(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Nt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(i.parent===this&&al(this,i),i===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(Sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Dn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Nt.delayedCall(0,r||Ao,o);return a.data="isPause",this._hasPause=1,si(this,a,Dn(this,i))},t.removePause=function(i){var r=this._first;for(i=Dn(this,i);r;)r._start===i&&r.data==="isPause"&&$i(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)qi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=On(i),l=this._first,c=Li(r),h;l;)l instanceof Nt?jT(l._targets,a)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Dn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,f=Nt.to(o,Rn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ft,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());f._dur!==m&&Mr(f,m,0,1).render(f._time,!0,!0),p=1}h&&h.apply(f,u||[])}},r));return d?f.render(0):f},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Rn({startAt:{time:Dn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lf(this,Dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lf(this,Dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=yt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Ss(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ss(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Un,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,si(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=yt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Mr(o,o===Mt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Mt._ts&&(Gm(Mt,$a(i,Mt)),Hm=Sn.frame),Sn.frame>=Cf){Cf+=An.autoSleep||120;var r=Mt._first;if((!r||!r._ts)&&An.autoSleep&&Sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Sn.sleep()}}},e})(Po);Rn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var _w=function(e,t,n,i,r,o,a){var l=new pn(this._pt,e,t,0,1,_g,null,r),c=0,h=0,u,d,p,f,g,m,_,x;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Co(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(tc)||[];u=tc.exec(i);)f=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),f!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:f.charAt(1)==="="?sr(m,f)-m:parseFloat(f)-m,m:p&&p<4?Math.round:0},c=tc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Om.test(i)||_)&&(l.e=0),this._pt=l,l},wu=function(e,t,n,i,r,o,a,l,c,h){Et(i)&&(i=i(r||0,e,o));var u=e[t],d=n!=="get"?n:Et(u)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=Et(u)?c?Sw:mg:Au,f;if(qt(i)&&(~i.indexOf("random(")&&(i=Co(i)),i.charAt(1)==="="&&(f=sr(d,i)+(en(d)||0),(f||f===0)&&(i=f))),!h||d!==i||Ah)return!isNaN(d*i)&&i!==""?(f=new pn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?Tw:gg,0,p),c&&(f.fp=c),a&&f.modifier(a,this,e),this._pt=f):(!u&&!(t in e)&&yu(t,i),_w.call(this,e,t,d,i,p,l||An.stringFilter,c))},vw=function(e,t,n,i,r){if(Et(e)&&(e=ho(e,r,t,n,i)),!ui(e)||e.style&&e.nodeType||tn(e)||Fm(e))return qt(e)?ho(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ho(e[a],r,t,n,i);return o},dg=function(e,t,n,i,r,o){var a,l,c,h;if(yn[e]&&(a=new yn[e]).init(r,a.rawVars?t[e]:vw(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new pn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==er))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},qi,Ah,Eu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,f=e._dur,g=e._startAt,m=e._targets,_=e.parent,x=_&&_.data==="nested"?_.vars.targets:m,M=e._overwrite==="auto"&&!gu,v=e.timeline,T,w,C,y,b,U,A,D,I,H,z,N,F;if(v&&(!d||!r)&&(r="none"),e._ease=bs(r,vr.ease),e._yEase=u?lg(bs(u===!0?r:u,vr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(D=m[0]?Ms(m[0]).harness:0,N=D&&i[D.prop],T=Za(i,Mu),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!p?g.render(-1,!0):g.revert(h&&f?Fa:qT),g._lazy=0),o){if($i(e._startAt=Nt.set(m,Rn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&dn(l),startAt:null,delay:0,onUpdate:c&&function(){return bn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!p)&&e._startAt.revert(Fa),a&&f&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&f&&!g){if(t&&(a=!1),C=Rn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&dn(l),immediateRender:a,stagger:0,parent:_},T),N&&(C[D.prop]=N),$i(e._startAt=Nt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(Fa):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=f&&dn(l)||l&&!f,w=0;w<m.length;w++){if(b=m[w],A=b._gsap||bu(m)[w]._gsap,e._ptLookup[w]=H={},Mh[A.id]&&Ki.length&&Ka(),z=x===m?w:x.indexOf(b),D&&(I=new D).init(b,N||T,e,z,x)!==!1&&(e._pt=y=new pn(e._pt,b,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Z){H[Z]=y}),I.priority&&(U=1)),!D||N)for(C in T)yn[C]&&(I=dg(C,T,e,z,b,x))?I.priority&&(U=1):H[C]=y=wu.call(e,b,C,"get",T[C],z,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),M&&e._pt&&(qi=e,Mt.killTweensOf(b,H,e.globalTime(t)),F=!e.parent,qi=0),e._pt&&l&&(Mh[A.id]=1)}U&&vg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,d&&t<=0&&v.render(Un,!0,!0)},xw=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ah=1,e.vars[t]="+=0",Eu(e,a),Ah=0,l?Eo(t+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Pt(n)+en(u.e)),u.b&&(u.b=h.s+en(u.b))},yw=function(e,t){var n=e[0]?Ms(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=xr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Mw=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(tn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ho=function(e,t,n,i,r){return Et(e)?e.call(t,n,i,r):qt(e)&&~e.indexOf("random(")?Co(e):e},fg=Su+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pg={};fn(fg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return pg[s]=1});var Nt=(function(s){Im(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:lo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,f=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,x=i.parent||Mt,M=(tn(n)||Fm(n)?Li(n[0]):"length"in i)?[n]:On(n),v,T,w,C,y,b,U,A;if(a._targets=M.length?bu(M):Eo("GSAP target "+n+" not found. https://gsap.com",!An.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,f||d||xa(c)||xa(h)){if(i=a.vars,v=a.timeline=new on({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:M}),v.kill(),v.parent=v._dp=Ti(a),v._start=0,d||xa(c)||xa(h)){if(C=M.length,U=d&&Jm(d),ui(d))for(y in d)~fg.indexOf(y)&&(A||(A={}),A[y]=d[y]);for(T=0;T<C;T++)w=Za(i,pg),w.stagger=0,_&&(w.yoyoEase=_),A&&xr(w,A),b=M[T],w.duration=+ho(c,Ti(a),T,b,M),w.delay=(+ho(h,Ti(a),T,b,M)||0)-a._delay,!d&&C===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),v.to(b,w,U?U(T,b,M):0),v._ease=je.none;v.duration()?c=h=0:a.timeline=0}else if(f){lo(Rn(v.vars.defaults,{ease:"none"})),v._ease=bs(f.ease||i.ease||"none");var D=0,I,H,z;if(tn(f))f.forEach(function(N){return v.to(M,N,">")}),v.duration();else{w={};for(y in f)y==="ease"||y==="easeEach"||Mw(y,f[y],w,f.easeEach);for(y in w)for(I=w[y].sort(function(N,F){return N.t-F.t}),D=0,T=0;T<I.length;T++)H=I[T],z={ease:H.e,duration:(H.t-(T?I[T-1].t:0))/100*c},z[y]=H.v,v.to(M,z,D),D+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return p===!0&&!gu&&(qi=Ti(a),Mt.killTweensOf(M),qi=0),si(x,Ti(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!f&&a._start===yt(x._time)&&dn(u)&&JT(Ti(a))&&x.data!=="nested")&&(a._tTime=-ft,a.render(Math.max(0,-h)||0)),m&&jm(Ti(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ft&&!h?l:i<ft?0:i,d,p,f,g,m,_,x,M,v;if(!c)ew(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=yt(u%g),u===l?(f=this._repeat,d=c):(m=yt(u/g),f=~~m,f&&f===m?(d=c,f--):d>c&&(d=c)),_=this._yoyo&&f&1,_&&(v=this._yEase,d=c-d),m=yr(this._tTime,g),d===a&&!o&&this._initted&&f===m)return this._tTime=u,this;f!==m&&(M&&this._yEase&&cg(M,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(yt(g*f),!0).invalidate()._lock=0))}if(!this._initted){if(Km(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&f!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&u&&!r&&!m&&(bn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Sh(this,i,r,o),bn(this,"onUpdate")),this._repeat&&f!==m&&this.vars.onRepeat&&!r&&this.parent&&bn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Sh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!r&&!(h&&!a)&&(u||a||_)&&(bn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Ro||Sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Eu(this,c),h=this._ease(c/this._dur),xw(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(cl(this,0),this.parent||qm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,qi&&qi.vars.overwrite!==!0)._first||Zr(this),this.parent&&o!==this.timeline.totalDuration()&&Mr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?On(i):a,c=this._ptLookup,h=this._pt,u,d,p,f,g,m,_;if((!r||r==="all")&&ZT(a,l))return r==="all"&&(this._pt=0),Zr(this);for(u=this._op=this._op||[],r!=="all"&&(qt(r)&&(g={},fn(r,function(x){return g[x]=1}),r=g),r=yw(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],r==="all"?(u[_]=r,f=d,p={}):(p=u[_]=u[_]||{},f=r);for(g in f)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&al(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Zr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return co(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return co(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Mt.killTweensOf(i,r,o)},e})(Po);Rn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(s){Nt[s]=function(){var e=new on,t=Th.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Au=function(e,t,n){return e[t]=n},mg=function(e,t,n){return e[t](n)},Sw=function(e,t,n,i){return e[t](i.fp,n)},bw=function(e,t,n){return e.setAttribute(t,n)},Cu=function(e,t){return Et(e[t])?mg:_u(e[t])&&e.setAttribute?bw:Au},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Tw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_g=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ru=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ww=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Ew=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?al(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Aw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},vg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},pn=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||gg,this.d=l||this,this.set=c||Au,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Aw,this.m=n,this.mt=r,this.tween=i},s})();fn(Su+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Mu[s]=1});Cn.TweenMax=Cn.TweenLite=Nt;Cn.TimelineLite=Cn.TimelineMax=on;Mt=new on({sortChildren:!1,defaults:vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=ag;var Ts=[],Oa={},Cw=[],Nf=0,Rw=0,oc=function(e){return(Oa[e]||Cw).map(function(t){return t()})},Ch=function(){var e=Date.now(),t=[];e-Nf>2&&(oc("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ni.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),oc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nf=e,oc("matchMedia"))},xg=(function(){function s(t,n){this.selector=n&&wh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Rw++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Et(n)&&(r=i,i=n,n=Et);var o=this,a=function(){var c=xt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=wh(r)),xt=o,u=i.apply(o,arguments),Et(u)&&o._r.push(u),xt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Et?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ts.length;o--;)Ts[o].id===this.id&&Ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),Pw=(function(){function s(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ui(n)||(n={matches:n});var o=new xg(0,r||this.scope),a=o.conditions={},l,c,h;xt&&!o.selector&&(o.selector=xt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ni.matchMedia(n[c]),l&&(Ts.indexOf(o)<0&&Ts.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ch):l.addEventListener("change",Ch)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return sg(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=On(e)[0]);var r=Ms(e||{}).get,o=n?Xm:Wm;return n==="native"&&(n=""),e&&(t?o((yn[t]&&yn[t].get||r)(e,t,n,i)):function(a,l,c){return o((yn[a]&&yn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=On(e),e.length>1){var i=e.map(function(h){return gn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=yn[t],a=Ms(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;er._pt=0,u.init(e,n?h+n:h,er,0,[e]),u.render(1,u),er._pt&&Ru(1,er)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=gn.to(e,Rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bs(e.ease,vr.ease)),Rf(vr,e||{})},config:function(e){return Rf(An,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!yn[a]&&!Cn[a]&&Eo(t+" effect requires "+a+" plugin.")}),nc[t]=function(a,l,c){return n(On(a),Rn(l||{},r),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(nc[t](a,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=bs(t)},parseEase:function(e,t){return arguments.length?bs(e,t):je},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,r;for(n.smoothChildTiming=dn(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,i=Mt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&si(n,i,i._start-i._delay),i=r;return si(Mt,n,0),n},context:function(e,t){return e?new xg(e,t):xt},matchMedia:function(e){return new Pw(e)},matchMediaRefresh:function(){return Ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ch()},addEventListener:function(e,t){var n=Oa[e]||(Oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:lw,wrapYoyo:cw,distribute:Jm,random:eg,snap:Qm,normalize:aw,getUnit:en,clamp:iw,splitColor:rg,toArray:On,selector:wh,mapRange:ng,pipe:rw,unitize:ow,interpolate:hw,shuffle:$m},install:km,effects:nc,ticker:Sn,updateRoot:on.updateRoot,plugins:yn,globalTimeline:Mt,core:{PropTween:pn,globals:zm,Tween:Nt,Timeline:on,Animation:Po,getCache:Ms,_removeLinkedListItem:al,reverting:function(){return Kt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return gu=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ja[s]=Nt[s]});Sn.add(on.updateRoot);er=Ja.to({},{duration:0});var Dw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Lw=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Dw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},ac=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(qt(r)&&(l={},fn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Lw(a,r)}}}},gn=Ja.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ac("roundProps",Eh),ac("modifiers"),ac("snap",Qm))||Ja;Nt.version=on.version=gn.version="3.14.2";Bm=1;vu()&&Sr();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;var Ff,Yi,rr,Pu,vs,Uf,Du,Iw=function(){return typeof window<"u"},Ii={},fs=180/Math.PI,or=Math.PI/180,Ks=Math.atan2,Of=1e8,Lu=/([A-Z])/g,Nw=/(left|right|width|margin|padding|x)/i,Fw=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ow=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},yg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zw=function(e,t,n){return e.style[t]=n},Hw=function(e,t,n){return e.style.setProperty(t,n)},Vw=function(e,t,n){return e._gsap[t]=n},Gw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ww=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Xw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},bt="transform",mn=bt+"Origin",qw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Ii&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[e]=o.x?o[e]:Ei(i,e),e===mn&&(this.tfm.zOrigin=o.zOrigin);else return ai.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,t,"")),e=bt}(r||t)&&this.props.push(e,t,r[e])},Sg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Yw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Du(),(!r||!r.isStart)&&!n[bt]&&(Sg(n),i.zOrigin&&n[mn]&&(n[mn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},bg=function(e,t){var n={target:e,props:[],revert:Yw,save:qw};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Tg,Ph=function(e,t){var n=Yi.createElementNS?Yi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yi.createElement(e);return n&&n.style?n:Yi.createElement(e)},Tn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,br(t)||t,1)||""},Bf="O,Moz,ms,Ms,Webkit".split(","),br=function(e,t,n){var i=t||vs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Bf[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Bf[o]:"")+e},Dh=function(){Iw()&&window.document&&(Ff=window,Yi=Ff.document,rr=Yi.documentElement,vs=Ph("div")||{style:{}},Ph("div"),bt=br(bt),mn=bt+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tg=!!br("perspective"),Du=gn.core.reverting,Pu=1)},kf=function(e){var t=e.ownerSVGElement,n=Ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),rr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),rr.removeChild(n),r},zf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wg=function(e){var t,n;try{t=e.getBBox()}catch{t=kf(e),n=1}return t&&(t.width||t.height)||n||(t=kf(e)),t&&!t.width&&!t.x&&!t.y?{x:+zf(e,["x","cx","x1"])||0,y:+zf(e,["y","cy","y1"])||0,width:0,height:0}:t},Eg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wg(e))},Ji=function(e,t){if(t){var n=e.style,i;t in Ii&&t!==mn&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(t)}},ji=function(e,t,n,i,r,o){var a=new pn(e._pt,t,n,0,1,o?Mg:yg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Hf={deg:1,rad:1,turn:1},jw={grid:1,flex:1},Qi=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=vs.style,l=Nw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",f,g,m,_;if(i===o||!r||Hf[i]||Hf[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),_=e.getCTM&&Eg(e),(p||o==="%")&&(Ii[t]||~t.indexOf("adius")))return f=_?e.getBBox()[l?"width":"height"]:e[h],Pt(p?r/f*u:r/100*f);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Yi||!g.appendChild)&&(g=Yi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Sn.time&&!m.uncache)return Pt(r/m.width*u);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,f=e[h],x?e.style[t]=x:Ji(e,t)}else(p||o==="%")&&!jw[Tn(g,"display")]&&(a.position=Tn(e,"position")),g===e&&(a.position="static"),g.appendChild(vs),f=vs[h],g.removeChild(vs),a.position="absolute";return l&&p&&(m=Ms(g),m.time=Sn.time,m.width=g[h]),Pt(d?f*r/u:f&&r?u/f*r:0)},Ei=function(e,t,n,i){var r;return Pu||Dh(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ii[t]&&t!=="transform"?(r=Lo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:el(Tn(e,mn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Qa[t]&&Qa[t](e,t,n)||Tn(e,t)||Vm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Qi(e,t,r,n)+n:r},Kw=function(e,t,n,i){if(!n||n==="none"){var r=br(t,e,1),o=r&&Tn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Tn(e,"borderTopColor"))}var a=new pn(this._pt,e.style,t,0,1,_g),l=0,c=0,h,u,d,p,f,g,m,_,x,M,v,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Tn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Tn(e,t)||i,g?e.style[t]=g:Ji(e,t)),h=[n,i],ag(h),n=h[0],i=h[1],d=n.match(Qs)||[],T=i.match(Qs)||[],T.length){for(;u=Qs.exec(i);)m=u[0],x=i.substring(l,u.index),f?f=(f+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(f=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=sr(p,m)+v),_=parseFloat(m),M=m.substr((_+"").length),l=Qs.lastIndex-M.length,M||(M=M||An.units[t]||v,l===i.length&&(i+=M,a.e+=M)),v!==M&&(p=Qi(e,t,g,M)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:_-p,m:f&&f<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Mg:yg;return Om.test(i)&&(a.e=0),this._pt=a,a},Vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vf[n]||n,t[1]=Vf[i]||i,t.join(" ")},$w=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ii[a]&&(l=1,a=a==="transformOrigin"?mn:bt),Ji(n,a);l&&(Ji(n,bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Lo(n,1),o.uncache=1,Sg(i)))}},Qa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new pn(e._pt,t,n,0,0,$w);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Do=[1,0,0,1,0,0],Ag={},Cg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gf=function(e){var t=Tn(e,bt);return Cg(t)?Do:t.substr(7).match(Um).map(Pt)},Iu=function(e,t){var n=e._gsap||Ms(e),i=e.style,r=Gf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Do:r):(r===Do&&!e.offsetParent&&e!==rr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,rr.appendChild(e)),r=Gf(e),l?i.display=l:Ji(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):rr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Lh=function(e,t,n,i,r,o){var a=e._gsap,l=r||Iu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=l[0],f=l[1],g=l[2],m=l[3],_=l[4],x=l[5],M=t.split(" "),v=parseFloat(M[0])||0,T=parseFloat(M[1])||0,w,C,y,b;n?l!==Do&&(C=p*m-f*g)&&(y=v*(m/C)+T*(-g/C)+(g*x-m*_)/C,b=v*(-f/C)+T*(p/C)-(p*x-f*_)/C,v=y,T=b):(w=wg(e),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),T=w.y+(~(M[1]||M[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(_=v-c,x=T-h,a.xOffset=u+(_*p+x*g)-_,a.yOffset=d+(_*f+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[mn]="0px 0px",o&&(ji(o,a,"xOrigin",c,v),ji(o,a,"yOrigin",h,T),ji(o,a,"xOffset",u,a.xOffset),ji(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},Lo=function(e,t){var n=e._gsap||new ug(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Tn(e,mn)||"0",h,u,d,p,f,g,m,_,x,M,v,T,w,C,y,b,U,A,D,I,H,z,N,F,Z,J,ce,fe,se,Fe,Ke,Ze;return h=u=d=g=m=_=x=M=v=0,p=f=1,n.svg=!!(e.getCTM&&Eg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),C=Iu(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Lh(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,C)),T=n.xOrigin||0,w=n.yOrigin||0,C!==Do&&(A=C[0],D=C[1],I=C[2],H=C[3],h=z=C[4],u=N=C[5],C.length===6?(p=Math.sqrt(A*A+D*D),f=Math.sqrt(H*H+I*I),g=A||D?Ks(D,A)*fs:0,x=I||H?Ks(I,H)*fs+g:0,x&&(f*=Math.abs(Math.cos(x*or))),n.svg&&(h-=T-(T*A+w*I),u-=w-(T*D+w*H))):(Ze=C[6],Fe=C[7],ce=C[8],fe=C[9],se=C[10],Ke=C[11],h=C[12],u=C[13],d=C[14],y=Ks(Ze,se),m=y*fs,y&&(b=Math.cos(-y),U=Math.sin(-y),F=z*b+ce*U,Z=N*b+fe*U,J=Ze*b+se*U,ce=z*-U+ce*b,fe=N*-U+fe*b,se=Ze*-U+se*b,Ke=Fe*-U+Ke*b,z=F,N=Z,Ze=J),y=Ks(-I,se),_=y*fs,y&&(b=Math.cos(-y),U=Math.sin(-y),F=A*b-ce*U,Z=D*b-fe*U,J=I*b-se*U,Ke=H*U+Ke*b,A=F,D=Z,I=J),y=Ks(D,A),g=y*fs,y&&(b=Math.cos(y),U=Math.sin(y),F=A*b+D*U,Z=z*b+N*U,D=D*b-A*U,N=N*b-z*U,A=F,z=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),p=Pt(Math.sqrt(A*A+D*D+I*I)),f=Pt(Math.sqrt(N*N+Ze*Ze)),y=Ks(z,N),x=Math.abs(y)>2e-4?y*fs:0,v=Ke?1/(Ke<0?-Ke:Ke):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Cg(Tn(e,bt)),F&&e.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(f*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Pt(p),n.scaleY=Pt(f),n.rotation=Pt(g)+a,n.rotationX=Pt(m)+a,n.rotationY=Pt(_)+a,n.skewX=x+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[mn]=el(c)),n.xOffset=n.yOffset=0,n.force3D=An.force3D,n.renderTransform=n.svg?Qw:Tg?Rg:Jw,n.uncache=0,n},el=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,n){var i=en(t);return Pt(parseFloat(t)+parseFloat(Qi(e,"x",n+"px",i)))+i},Jw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rg(e,t)},hs="0deg",Hr="0px",us=") ",Rg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,f=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,x=n.target,M=n.zOrigin,v="",T=_==="auto"&&e&&e!==1||_===!0;if(M&&(u!==hs||h!==hs)){var w=parseFloat(h)*or,C=Math.sin(w),y=Math.cos(w),b;w=parseFloat(u)*or,b=Math.cos(w),o=lc(x,o,C*b*-M),a=lc(x,a,-Math.sin(w)*-M),l=lc(x,l,y*b*-M+M)}m!==Hr&&(v+="perspective("+m+us),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(T||o!==Hr||a!==Hr||l!==Hr)&&(v+=l!==Hr||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+us),c!==hs&&(v+="rotate("+c+us),h!==hs&&(v+="rotateY("+h+us),u!==hs&&(v+="rotateX("+u+us),(d!==hs||p!==hs)&&(v+="skew("+d+", "+p+us),(f!==1||g!==1)&&(v+="scale("+f+", "+g+us),x.style[bt]=v||"translate(0, 0)"},Qw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,f=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,x=n.forceCSS,M=parseFloat(o),v=parseFloat(a),T,w,C,y,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=or,c*=or,T=Math.cos(l)*u,w=Math.sin(l)*u,C=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(h*=or,b=Math.tan(c-h),b=Math.sqrt(1+b*b),C*=b,y*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),T*=b,w*=b)),T=Pt(T),w=Pt(w),C=Pt(C),y=Pt(y)):(T=u,y=d,w=C=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Qi(p,"x",o,"px"),v=Qi(p,"y",a,"px")),(f||g||m||_)&&(M=Pt(M+f-(f*T+g*C)+m),v=Pt(v+g-(f*w+g*y)+_)),(i||r)&&(b=p.getBBox(),M=Pt(M+i/100*b.width),v=Pt(v+r/100*b.height)),b="matrix("+T+","+w+","+C+","+y+","+M+","+v+")",p.setAttribute("transform",b),x&&(p.style[bt]=b)},e1=function(e,t,n,i,r){var o=360,a=qt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?fs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Of)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Of)%o-~~(c/o)*o)),e._pt=d=new pn(e._pt,t,n,i,c,Uw),d.e=h,d.u="deg",e._props.push(n),d},Wf=function(e,t){for(var n in t)e[n]=t[n];return e},t1=function(e,t,n){var i=Wf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,p,f;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[bt]=t,a=Lo(n,1),Ji(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],o[bt]=t,a=Lo(n,1),o[bt]=c);for(l in Ii)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(p=en(c),f=en(h),u=p!==f?Qi(n,l,c,f):parseFloat(c),d=parseFloat(h),e._pt=new pn(e._pt,a,l,u,d-u,Rh),e._pt.u=f||0,e._props.push(l));Wf(a,i)};fn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Qa[e>1?"border"+s:s]=function(a,l,c,h,u){var d,p;if(arguments.length<4)return d=o.map(function(f){return Ei(a,f,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(f,g){return p[f]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,u)}});var Pg={name:"css",register:Dh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,p,f,g,m,_,x,M,v,T,w,C,y,b;Pu||Dh(),this.styles=this.styles||bg(e),y=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(yn[g]&&dg(g,t,n,i,e,r)))){if(p=typeof h,f=Qa[g],p==="function"&&(h=h.call(n,i,e,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Co(h)),f)f(this,e,g,h,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Zi.lastIndex=0,Zi.test(c)||(m=en(c),_=en(h),_?m!==_&&(c=Qi(e,g,c,_)+_):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),y.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],qt(c)&&~c.indexOf("random(")&&(c=Co(c)),en(c+"")||c==="auto"||(c+=An.units[g]||en(Ei(e,g))||""),(c+"").charAt(1)==="="&&(c=Ei(e,g))):c=Ei(e,g),d=parseFloat(c),x=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in ai&&(g==="autoAlpha"&&(d===1&&Ei(e,"visibility")==="hidden"&&u&&(d=0),y.push("visibility",0,a.visibility),ji(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Ii,M){if(this.styles.save(g),b=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=Tn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=h,h=Tn(e,"perspective"),U?e.style.perspective=U:Ji(e,"perspective")}u=parseFloat(h)}if(v||(T=e._gsap,T.renderTransform&&!t.parseTransform||Lo(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new pn(this._pt,a,bt,0,1,T.renderTransform,T,0,-1),v.dep=1),g==="scale")this._pt=new pn(this._pt,T,"scaleY",T.scaleY,(x?sr(T.scaleY,x+u):u)-T.scaleY||0,Rh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){y.push(mn,0,a[mn]),h=Zw(h),T.svg?Lh(e,h,0,w,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==T.zOrigin&&ji(this,T,"zOrigin",T.zOrigin,_),ji(this,a,g,el(c),el(h)));continue}else if(g==="svgOrigin"){Lh(e,h,1,w,0,this);continue}else if(g in Ag){e1(this,T,g,d,x?sr(d,x+h):h);continue}else if(g==="smoothOrigin"){ji(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){t1(this,h,e);continue}}else g in a||(g=br(g)||g);if(M||(u||u===0)&&(d||d===0)&&!Fw.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),_=en(h)||(g in An.units?An.units[g]:m),m!==_&&(d=Qi(e,g,c,_)),this._pt=new pn(this._pt,M?T:a,g,d,(x?sr(d,x+u):u)-d,!M&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?kw:Rh),this._pt.u=_||0,M&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=Bw):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Ow);else if(g in a)Kw.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,i,r);else if(g!=="parseTransform"){yu(g,h);continue}M||(g in a?y.push(g,0,a[g]):typeof e[g]=="function"?y.push(g,2,e[g]()):y.push(g,1,c||e[g])),o.push(g)}}C&&vg(this)},render:function(e,t){if(t.tween._time||!Du())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Ii&&t!==mn&&(e._gsap.x||Ei(e,"x"))?n&&Uf===n?t==="scale"?Gw:Vw:(Uf=n||{})&&(t==="scale"?Ww:Xw):e.style&&!_u(e.style[t])?zw:~t.indexOf("-")?Hw:Cu(e,t)},core:{_removeProperty:Ji,_getMatrix:Iu}};gn.utils.checkPrefix=br;gn.core.getStyleSaver=bg;(function(s,e,t,n){var i=fn(s+","+e+","+t,function(r){Ii[r]=1});fn(e,function(r){An.units[r]="deg",Ag[r]=1}),ai[i[13]]=s+","+e,fn(n,function(r){var o=r.split(":");ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){An.units[s]="px"});gn.registerPlugin(Pg);var Ae=gn.registerPlugin(Pg)||gn;Ae.core.Tween;function In(s){if(!s)return"";if(/^(?:[a-z]+:)?\/\//i.test(s)||s.startsWith("data:"))return s;const e="./",t=s.replace(/^\/+/,"");return`${e.endsWith("/")?e:`${e}/`}${t}`}let ya=null;async function n1(){if(ya)return ya;try{const s=await fetch(In("portfolio/manifest.json"),{cache:"no-cache"});if(!s.ok)throw new Error(`manifest.json ${s.status}`);const e=await s.json(),t=(e.paintings||[]).filter(n=>n.aspect>0&&n.file);return ya={...e,paintings:t},ya}catch(s){return console.error("Could not load portfolio manifest — run `npm run portfolio`.",s),{paintings:[]}}}const i1=.28,s1=new qn(1,1,1),Dg=new En(1,1),Nu=new Qt({color:13280613,roughness:.28,metalness:.85,envMapIntensity:1.4,shadowSide:Qe}),Xf=new j(13280613),qf=new j(1576965),Yf=new j(14476782),jf=new j(922650),Kf=new j(3290946),Zf=new j(329224),$f=new j(1184792),Jf=new j(131588),Qf=new j(12086322),ep=new j(1837826),tp=new j(13206082),np=new j(2363139);function r1(s,e=null){const t=(s%(Math.PI*2)+Math.PI*2)%(Math.PI*2),n=Math.PI/2,i=r=>{if(r)if(t>=0&&t<n){const o=t/n;if(o<.4){const a=o/.4;r.color.lerpColors(Qf,tp,a),r.emissive.lerpColors(ep,np,a)}else{const a=(o-.4)/.6;r.color.lerpColors(tp,Xf,a),r.emissive.lerpColors(np,qf,a)}r.roughness=qe.lerp(.32,.26,o),r.metalness=qe.lerp(.8,.88,o)}else if(t>=n&&t<Math.PI){const o=(t-n)/n;if(o<.65){const a=o/.65;r.color.lerpColors(Xf,Yf,a),r.emissive.lerpColors(qf,jf,a)}else{const a=(o-.65)/.35;r.color.lerpColors(Yf,Kf,a),r.emissive.lerpColors(jf,Zf,a)}r.roughness=qe.lerp(.26,.32,o),r.metalness=qe.lerp(.88,.82,o)}else if(t>=Math.PI&&t<Math.PI*1.5){const o=(t-Math.PI)/n;r.color.lerpColors(Kf,$f,o),r.emissive.lerpColors(Zf,Jf,o),r.roughness=qe.lerp(.32,.38,o),r.metalness=qe.lerp(.82,.75,o)}else{const o=(t-Math.PI*1.5)/n;r.color.lerpColors($f,Qf,o),r.emissive.lerpColors(Jf,ep,o),r.roughness=qe.lerp(.38,.32,o),r.metalness=qe.lerp(.75,.8,o)}};i(Nu),e&&i(e)}function Lg(s){const e=s.aspect||(s.width&&s.height?s.width/s.height:1),n=(s.heightIn||16)*i1;return{width:n*e,height:n}}function o1(s,e,t=.12,n=.08,i=.05){const r=s/2,o=e/2,a=r+t,l=o+t,c=n,h=-i,u=[-r,-o,0],d=[r,-o,0],p=[r,o,0],f=[-r,o,0],g=[-a,-l,c],m=[a,-l,c],_=[a,l,c],x=[-a,l,c],M=[-a,-l,h],v=[a,-l,h],T=[a,l,h],w=[-a,l,h],C=[],y=(A,D,I)=>{C.push(...A,...D,...I)},b=(A,D,I,H)=>{y(A,D,I),y(A,I,H)};b(g,m,d,u),b(f,p,_,x),b(d,m,_,p),b(g,u,f,x),b(g,M,v,m),b(x,_,T,w),b(m,v,T,_),b(x,w,M,g),b(M,w,T,v);const U=new At;return U.setAttribute("position",new ct(C,3)),U.computeVertexNormals(),U}function a1(s,e){const{width:t,height:n}=Lg(e),i=Math.min(.18,Math.max(.1,t*.045)),r=i*.75,a=.16+n/2,l=o1(t,n,i,r,.06),c=new Ne(l,Nu);c.position.set(0,a,0),c.castShadow=!0,c.receiveShadow=!0,c.name="Frame",s.add(c);const h=new an({color:1710618,toneMapped:!1,side:Qe}),u=new Ne(Dg,h);return u.scale.set(t,n,1),u.position.set(0,a,.002),u.castShadow=!0,u.name="Painting",s.add(u),{panel:u,panelMaterial:h,width:t,height:n,centreY:a}}const xs={THUMB:0,MID:1,FULL:2};function l1(s){const e=s.image;if(!e||!e.width||!e.height)return 0;const t=e.width*e.height*4;return s.generateMipmaps?t*1.3333:t}const c1=typeof navigator<"u"&&(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||typeof window<"u"&&window.innerWidth<768),ip=(c1?24:64)*1024*1024,Ig=new sl;let Vr=null;function Ng(){return Vr!==null?Promise.resolve(Vr):new Promise(s=>{const e=new Image;e.onload=()=>{Vr=e.width>0&&e.height>0,s(Vr)},e.onerror=()=>{Vr=!1,s(!1)},e.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="})}function Fg(s,e){const t=e?`portfolio/${s}?v=${e}`:`portfolio/${s}`;return In(t)}const Tr=new Set;let As=0;function h1(s){s._lastSeen=performance.now()}function u1(s){if(!s._texture)return;As-=s._bytes||0,Tr.delete(s),s._texture.dispose(),s._texture=null,s._bytes=0,s._tier=xs.THUMB;const e=s.panelMaterial;e&&s._thumbTexture&&(e.map=s._thumbTexture,e.needsUpdate=!0)}function d1(s){if(As<=ip)return;const e=[...Tr].filter(t=>t!==s).sort((t,n)=>(t._lastSeen||0)-(n._lastSeen||0));for(const t of e){if(As<=ip)break;u1(t)}}async function sp(s){if(s._thumbRequested)return;s._thumbRequested=!0;const e=await Ng(),t=Fg(e&&s.data.thumb?s.data.thumb:s.data.thumbJpg||s.data.thumb||s.data.file,s.data.v);Ig.load(t,n=>{n.colorSpace=vt,n.minFilter=Tt,n.magFilter=Tt,n.generateMipmaps=!1;const i=s.panelMaterial;if(!i){n.dispose();return}s._thumbTexture=n,s._texture||(i.map=n,s._lit===void 0&&i.color.set(16777215),i.needsUpdate=!0,s._tier=xs.THUMB)},void 0,()=>{})}const f1=3;let cc=0;const Wi=[];function Ih(){for(;cc<f1&&Wi.length>0;){const s=Wi.shift();if((s.door._tier||0)>=s.tier){s.door._pending=0;continue}cc++,p1(s,()=>{cc--,s.onLoaded&&s.onLoaded(s.door),Ih()})}}async function p1(s,e){const{door:t,tier:n}=s,i=await Ng(),r=t.data;let o;n===xs.FULL?o=i&&r.webp?r.webp:r.file:o=(i?r.mid:r.midJpg||r.mid)||(i&&r.webp?r.webp:r.file);const a=Fg(o,r.v);Ig.load(a,l=>{const c=t.panelMaterial;if(t._pending=0,!c||(t._tier||0)>=n){l.dispose(),e();return}l.colorSpace=vt,l.anisotropy=4,l.generateMipmaps=!0,l.minFilter=ri,t._texture&&(As-=t._bytes||0,Tr.delete(t),t._texture.dispose()),c.map=l,t._lit===void 0&&c.color.set(16777215),c.needsUpdate=!0,t._texture=l,t._tier=n,t._bytes=l1(l),t._lastSeen=performance.now(),Tr.add(t),As+=t._bytes,d1(s.urgent?t:null),e()},void 0,()=>{t._pending=0,console.warn("Painting failed to load:",a),e()})}function Ma(s,e,{urgent:t=!1,onLoaded:n=null}={}){if(s._lastSeen=performance.now(),(s._tier||0)>=e){n&&n(s);return}if(s._pending>=e){if(t){const r=Wi.findIndex(o=>o.door===s);r>0&&Wi.unshift(Wi.splice(r,1)[0]),Ih()}return}s._pending=e;const i={door:s,tier:e,urgent:t,onLoaded:n};t?Wi.unshift(i):Wi.push(i),Ih()}function m1(s){s._texture&&(As-=s._bytes||0,Tr.delete(s),s._texture.dispose(),s._texture=null),s._thumbTexture&&(s._thumbTexture.dispose(),s._thumbTexture=null),s._bytes=0,s._tier=0,s._pending=0,s._thumbRequested=!1}function g1(){Wi.length=0,Tr.clear(),As=0}function rp(s,e,t){const n=t.fov*Math.PI/180,i=e/2/Math.tan(n/2),r=s/2/(Math.tan(n/2)*t.aspect);return Math.max(i,r)*1.25}const _1=15,Ug=8;function v1(s){if(s<=0)return[2];const e=[2,3];let t=5;for(;t<s;){const n=e[e.length-1]+e[e.length-2];e.push(n),t+=n}return e}function x1(s){const e=Og(s),t=Math.max(1,e.length);return Array.from({length:t},(n,i)=>_1+i*Ug)}function Og(s){if(s<=0)return[];const e=v1(s),t=[];let n=s;for(let i=0;i<e.length;i++){const r=Math.min(n,e[i]);if(r<=0)break;t.push(r),n-=r}return t}function y1(s){const e=s.filter(n=>Number.isFinite(n.rank)),t=s.filter(n=>!Number.isFinite(n.rank));return e.sort((n,i)=>n.rank-i.rank),t.sort((n,i)=>(i.year||0)-(n.year||0)),[...e,...t]}function M1(s){const e=Og(s.length),t=x1(s.length),n=[],i=[];let r=0;return t.forEach((o,a)=>{const l=e[a],c=s.slice(r,r+l);if(r+=l,!c.length)return;const h=c.map(g=>Lg(g).width),u=h.map(g=>Math.asin(Math.min(g/(2*o),.999))),d=Math.PI*2/l;let p=0,f=-1/0;if(a===0)p=Math.PI/2;else for(let m=0;m<720;m++){const _=m/720*d;let x=1/0;for(let M=0;M<l;M++){const v=(_+M*d)%(Math.PI*2),T=u[M];for(const w of i){let C=Math.abs(v-w.center);C>Math.PI&&(C=Math.PI*2-C);const y=C-(T+w.halfAngle),b=Math.pow(.7,a-w.ring-1),U=y*b;U<x&&(x=U)}}x>f&&(f=x,p=_)}c.forEach((g,m)=>{const _=(p+m*d)%(Math.PI*2);i.push({center:_,halfAngle:u[m],ring:a}),n.push({painting:g,ring:a,radius:o,angle:_,width:h[m],x:Math.sin(_)*o,z:Math.cos(_)*o})})}),n}function Fu(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}new P(0,1,0);new P(1,1,1);new j;const uo={uWindTime:{value:0},uWindStrength:{value:0},uWindScale:{value:.075}},fo={uSunViewDir:{value:new P(0,1,0)},uShadeAmount:{value:1},uBacksideShade:{value:.15}},Sa={uForestActive:{value:0}};function S1(s,e=0){uo.uWindTime.value=s,uo.uWindStrength.value=e}const op=new P;function b1(s,e,t=1){op.copy(s).normalize().transformDirection(e.matrixWorldInverse),fo.uSunViewDir.value.copy(op),fo.uShadeAmount.value=qe.clamp(t,0,1)}function Nh(s){s.uniforms.uSunViewDir=fo.uSunViewDir,s.uniforms.uShadeAmount=fo.uShadeAmount,s.uniforms.uBacksideShade=fo.uBacksideShade,s.vertexShader=`varying vec3 vFoliageNormal;
`+s.vertexShader.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
         // View-space and instancing-aware, straight out of the stock chunk.
         vFoliageNormal = transformedNormal;`),s.fragmentShader=`
        uniform vec3 uSunViewDir;
        uniform float uShadeAmount;
        uniform float uBacksideShade;
        varying vec3 vFoliageNormal;
    
`+s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
         float sunFacing = dot(normalize(vFoliageNormal), normalize(uSunViewDir));
         // Two separate things, and they pull in opposite directions: the
         // *transition* wants to be gentle, and the *ends* want to be far apart.
         // Widened band plus a second smoothing pass gives a long, soft ramp
         // with no visible edge across a canopy of flat quads, while the shaded
         // end sits far darker than before -- so the tree has a clearly lit side
         // and a clearly dark side without a seam between them.
         float lit = smoothstep(-0.60, 0.55, sunFacing);
         lit = lit * lit * (3.0 - 2.0 * lit);
         // Shadow on foliage is skylit, so it is cooler than the key light as
         // well as darker. Tinting it rather than only dimming it is what makes
         // the contrast read as light and shade instead of as exposure.
         vec3 shadeFactor = mix(uBacksideShade * vec3(0.84, 0.93, 1.16), vec3(1.0), lit);
         gl_FragColor.rgb *= mix(vec3(1.0), shadeFactor, uShadeAmount);`)}const $s={banyan:{speedMult:.32,waveAmp:.36,branchAmp:.18,branchFreq:.18,flutterAmp:.035,flutterMult:.4,treeHeight:22},peepal:{speedMult:.42,waveAmp:.4,branchAmp:.22,branchFreq:.22,flutterAmp:.06,flutterMult:.65,treeHeight:20},mango:{speedMult:.85,waveAmp:.6,branchAmp:.3,branchFreq:.3,flutterAmp:.085,flutterMult:.9,treeHeight:16},neem:{speedMult:.38,waveAmp:.24,branchAmp:.08,branchFreq:.18,flutterAmp:.035,flutterMult:.45,treeHeight:16},rose:{speedMult:.5,waveAmp:.02,branchAmp:.01,branchFreq:.2,flutterAmp:.018,flutterMult:.7,treeHeight:1.65},default:{speedMult:.85,waveAmp:.5,branchAmp:.25,branchFreq:.3,flutterAmp:.07,flutterMult:.9,treeHeight:16}};function Fh(s,e={}){const t={...$s.default,...e};s.uniforms.uWindTime=uo.uWindTime,s.uniforms.uWindStrength=uo.uWindStrength,s.uniforms.uWindScale=uo.uWindScale,s.vertexShader=`
        uniform float uWindTime;
        uniform float uWindStrength;
        uniform float uWindScale;
    `+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`
        #include <begin_vertex>

        #ifdef USE_BATCHING
            vec4 wPos = modelMatrix * batchingMatrix * vec4(position, 1.0);
        #elif defined( USE_INSTANCING )
            vec4 wPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #else
            vec4 wPos = modelMatrix * vec4(position, 1.0);
        #endif

        // World-space wind calculations
        // 1. Spatial rolling wind wave across the forest (horizontal XZ)
        vec2 windDir = vec2(0.707, 0.707);
        float wavePhase = dot(wPos.xz, windDir) * uWindScale - uWindTime * ${(1.5*t.speedMult).toFixed(4)};
        float wave = sin(wavePhase) * 0.72 + sin(wavePhase * 2.15 + 1.1) * 0.28;

        // 2. Branch-level differential sway (different limbs moving out of phase)
        float brPhase1 = dot(wPos.xyz, vec3(${t.branchFreq.toFixed(4)}, ${(t.branchFreq*1.22).toFixed(4)}, ${(t.branchFreq*.88).toFixed(4)})) - uWindTime * ${(1.75*t.speedMult).toFixed(4)};
        float brWave1 = sin(brPhase1) * 0.65 + sin(brPhase1 * 1.95 + 0.8) * 0.35;

        float brPhase2 = dot(wPos.xyz, vec3(${(-t.branchFreq*.92).toFixed(4)}, ${(t.branchFreq*.75).toFixed(4)}, ${(t.branchFreq*1.15).toFixed(4)})) - uWindTime * ${(1.25*t.speedMult).toFixed(4)};
        float brWave2 = sin(brPhase2);

        // 3. High-frequency leaf shimmer / flutter (smooth across small triangle spans, no tearing)
        float fltPhase = uWindTime * ${(5*t.flutterMult*Math.sqrt(t.speedMult)).toFixed(4)} + dot(wPos.xyz, vec3(0.65, 0.95, 0.80));
        float flutter = sin(fltPhase) * 0.65 + sin(fltPhase * 2.3 + 1.5) * 0.35;

        // 4. Height compliance: lower branches sway gently, upper crown sways fully
        float heightAboveBase = max(0.0, wPos.y - modelMatrix[3].y);
        float normHeight = clamp(heightAboveBase / ${t.treeHeight.toFixed(2)}, 0.0, 1.0);
        float compliance = mix(0.55, 1.0, normHeight);

        float str = uWindStrength * compliance;
        vec3 disp = vec3(0.0);

        // Horizontal sway along wind direction
        disp.x += (wave * ${(t.waveAmp*.82).toFixed(4)} + brWave1 * ${(t.branchAmp*.72).toFixed(4)} + flutter * ${t.flutterAmp.toFixed(4)}) * str;
        disp.z += (wave * ${(t.waveAmp*.62).toFixed(4)} + brWave2 * ${(t.branchAmp*.68).toFixed(4)} + flutter * ${(t.flutterAmp*.82).toFixed(4)}) * str;

        // Natural organic branch dipping during gusts
        disp.y += (-abs(wave) * ${(t.waveAmp*.14).toFixed(4)} + brWave1 * ${(t.branchAmp*.28).toFixed(4)}) * str;

        wPos.xyz += disp;
        `),s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`
        vec4 mvPosition = viewMatrix * wPos;
        gl_Position = projectionMatrix * mvPosition;
        `),s.vertexShader.includes("#include <worldpos_vertex>")&&(s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`
            #if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
                vec4 worldPosition = wPos;
            #endif
            `))}function Uh(s,e="default"){const t=s&&s.material;if(!t||!s.geometry)return;let n,i="default";if(typeof e=="string"?(i=e,n=$s[e]||$s.default):typeof e=="number"?n={...$s.default,flutterMult:e}:e&&typeof e=="object"?n={...$s.default,...e}:n=$s.default,t._foliageSpeciesKey=i,t._windConfig=n,!t._hasWindShader){t._hasWindShader=!0,t.customProgramCacheKey=()=>`foliage_wind_${i}`;const r=t.onBeforeCompile;t.onBeforeCompile=(o,a)=>{r&&r(o,a),Fh(o,n)},t.needsUpdate=!0}if(s.customDepthMaterial&&!s.customDepthMaterial._hasWindShader){s.customDepthMaterial._hasWindShader=!0,s.customDepthMaterial.customProgramCacheKey=()=>`foliage_depth_wind_${i}`;const r=s.customDepthMaterial.onBeforeCompile;s.customDepthMaterial.onBeforeCompile=(o,a)=>{r&&r(o,a),Fh(o,n)},s.customDepthMaterial.needsUpdate=!0}}function Bo(s=1.6){const e=[],t=s,n=s*1.15;for(let r=0;r<3;r++){const o=new En(t,n,2,2),a=o.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l),h=Math.cos(c/(t*.5)*Math.PI*.5)*.18*s;a.setZ(l,h)}o.computeVertexNormals(),o.rotateY(r/3*Math.PI),o.translate(0,n*.48,0),e.push(o)}const i=pu(e,!1);return e.forEach(r=>r.dispose()),i}function T1(){const s=[];for(let n=0;n<2;n++){const i=new En(1.4,1.4,2,2);i.rotateX(-Math.PI*.5),i.rotateY(n/2*Math.PI*.5),i.translate(0,.1,0),s.push(i)}const t=pu(s,!1);return s.forEach(n=>n.dispose()),t}function w1(){const s=[],n=new au;n.moveTo(-.022,0),n.quadraticCurveTo(-.022*.2,.15*.55,.022*.25,.15*1.05),n.quadraticCurveTo(.022*.15,.15*.5,.022,0);for(let r=0;r<6;r++){const o=new Io(n,3),a=o.attributes.position,l=.8+Math.random()*.4,c=.18+Math.random()*.28,h=r/6*Math.PI*2+Math.random()*.35;for(let u=0;u<a.count;u++){const d=a.getY(u);a.setZ(u,Math.pow(d/.15,1.5)*.05)}o.computeVertexNormals(),o.scale(l,l,l),o.rotateX(c),o.rotateY(h),s.push(o)}const i=pu(s,!1);return s.forEach(r=>r.dispose()),i}function Bg(s){const e=new au;return e.moveTo(0,0),e.bezierCurveTo(s*.65,s*.12,s*.88,s*.44,s*.76,s*.78),e.bezierCurveTo(s*.62,s*1.05,s*.26,s*1.2,0,s*1.22),e.bezierCurveTo(-s*.26,s*1.2,-s*.62,s*1.05,-s*.76,s*.78),e.bezierCurveTo(-s*.88,s*.44,-s*.65,s*.12,0,0),e}function E1(s,e){const t=new Io(Bg(s),6),n=t.attributes.position;for(let i=0;i<n.count;i++){const r=n.getX(i),o=n.getY(i),a=qe.clamp(o/(s*1.22),0,1.1),l=e*(r*r)/(s*s)*(.35+a)*s,c=-e*.54*a*a*s,h=Math.sin(r/s*6.5)*.015*s*a;n.setZ(i,l+c+h)}return t.computeVertexNormals(),t}function A1(s,e,t=5){const n=new Io(s,t),i=n.attributes.position;let r=1/0,o=-1/0,a=0;for(let h=0;h<i.count;h++)r=Math.min(r,i.getY(h)),o=Math.max(o,i.getY(h)),a=Math.max(a,Math.abs(i.getX(h)));const l=Math.max(1e-6,o-r),c=Math.max(1e-6,a);for(let h=0;h<i.count;h++){const u=i.getX(h),d=i.getY(h),p=u/c,f=(d-r)/l;i.setZ(h,e*l*(p*p*.45+Math.pow(f,1.6)*.32))}return n.translate(0,-r,0),n.computeVertexNormals(),n}const C1=Bo(1.65),R1=Bo(1.75),P1=Bo(1.55),D1=Bo(1.45),L1=Bo(1.5),I1=T1(),N1=A1(Bg(.18),.28,4),F1=w1(),kg=new Set([C1,R1,P1,D1,L1,I1,N1,F1]);function Gr(s,e){const t=Math.hypot(s,e),n=qe.smoothstep(t,1.5,12),i=Math.sin(s*.045+.5)*Math.cos(e*.04+.8)*.65,r=Math.sin(s*.095-e*.08)*.35,o=Math.cos(s*.18+e*.15)*.18,a=Math.sin(s*.38)*Math.cos(e*.35)*.08;return(i+r+o+a)*n}const ap={mango:{trunkHeight:6.2,trunkBaseRadius:.95,trunkTopRadius:.54,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:46,splitSpreadDeg:36,lengthFalloff:.78,radiusFalloff:.66,limbLength:3.2,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.25,leafColor:2246686,leafColorVariance:.12,leafRoughness:.4,flushColor:10176044,flushRatio:.18,flutterMult:.85,swayAmplitude:.04,swayFreqMult:.85},banyan:{trunkHeight:6.8,trunkBaseRadius:1.15,trunkTopRadius:.58,buttressFlutes:5,buttressReach:.68,propRoots:4,limbCount:5,branchLevels:3,firstSpreadDeg:44,splitSpreadDeg:35,lengthFalloff:.78,radiusFalloff:.65,limbLength:3.4,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.3,leafColor:3036709,leafColorVariance:.12,leafRoughness:.46,flutterMult:.4,swayAmplitude:.035,swayFreqMult:.35},peepal:{trunkHeight:7.2,trunkBaseRadius:.85,trunkTopRadius:.4,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:38,splitSpreadDeg:32,lengthFalloff:.76,radiusFalloff:.63,limbLength:3,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.2,leafColor:6591548,leafColorVariance:.15,leafRoughness:.42,flutterMult:.65,swayAmplitude:.045,swayFreqMult:.45},neem:{trunkHeight:7,trunkBaseRadius:.76,trunkTopRadius:.36,buttressFlutes:3,buttressReach:.38,propRoots:0,limbCount:4,branchLevels:3,firstSpreadDeg:36,splitSpreadDeg:30,lengthFalloff:.76,radiusFalloff:.64,limbLength:2.8,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.15,leafColor:4025895,leafColorVariance:.13,leafRoughness:.65,flutterMult:.45,swayAmplitude:.03,swayFreqMult:.4},gulmohar:{trunkHeight:6.4,trunkBaseRadius:.82,trunkTopRadius:.44,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:48,splitSpreadDeg:38,lengthFalloff:.8,radiusFalloff:.65,limbLength:3.2,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.25,leafColor:3828775,leafColorVariance:.12,leafRoughness:.52,hasBlossoms:!0,blossomColor:14235678,blossomCountPerTwig:3,flutterMult:1.1,swayAmplitude:.07,swayFreqMult:1.1}},ps=new Map;let Jr=null,lp=!1,cp=!1;const hc=[];function Uu(s){if(s){if(cp)return s(),Promise.resolve();hc.push(s)}if(lp)return Promise.resolve();lp=!0;const e=new mu,n=[{key:"banyan",url:In("models/chinese_banyan_ficus_microcarpa.glb"),targetHeight:22,groundSink:.12},{key:"peepal",url:In("models/bodhi_tree.glb"),targetHeight:20,groundSink:2.15},{key:"mango",url:In("models/mango_tree_2_v2.glb"),targetHeight:16,groundSink:.08},{key:"neem",url:In("models/neem_tree_v2.glb"),targetHeight:16,groundSink:2.15},{key:"rose",url:In("models/red_rose_1k.glb"),targetHeight:1.65,groundSink:.07}].map(i=>new Promise(r=>{e.load(i.url,o=>{const a=o.scene;a.name=`GLB_${i.key}`;const l=new Zn().setFromObject(a),c=l.getCenter(new P),h=l.getSize(new P),u=i.targetSpan?i.targetSpan/Math.max(Math.min(h.x,h.z),.001):i.targetHeight/Math.max(h.y,.001),d=(i.groundSink||0)/u;a.position.set(-c.x,-l.min.y-d,-c.z);const p=new Ot;p.name=`GLB_Wrapper_${i.key}`,p.add(a),p.scale.setScalar(u),i.flattenY&&(p.scale.y=u*i.flattenY),a.traverse(f=>{if(f.isMesh)if(f.castShadow=!0,f.receiveShadow=!0,f.geometry&&kg.add(f.geometry),i.key==="rose"){if(f.castShadow=!0,f.receiveShadow=!0,f.material){if(f.material.side=Qe,f.material.shadowSide=Qe,f.material.roughness=.68,f.material.metalness=0,f.material.emissive=new j(0),f.material.emissiveIntensity=0,f.material.map&&(f.material.map.colorSpace=vt,f.material.alphaTest=.35,f.material.transparent=!1,f.material.depthWrite=!0,f.customDepthMaterial=new wo({depthPacking:za,map:f.material.map,alphaTest:.35}),f.customDepthMaterial.side=Qe),!f.material._hasSunShading){f.material._hasSunShading=!0;const g=f.material.onBeforeCompile;f.material.onBeforeCompile=(m,_)=>{g&&g(m,_),Nh(m)}}f.material.needsUpdate=!0}Uh(f,"rose")}else{i.key==="neem"?(f.material.side=Qe,f.material.shadowSide=Qe,f.material.roughness!==void 0&&(f.material.roughness=Math.max(f.material.roughness,.65))):f.material.roughness!==void 0&&(f.material.roughness=Math.max(f.material.roughness,.7));const g=f.material.name==="Material.001"||f.material.name==="Material.004"||f.material.name==="Material.002"||f.material.name==="Material.003"||f.material.name==="Bodhi_front_2_Mat"||f.material.alphaTest>0||f.material.transparent||f.material.name&&/leaf|leaves|foliage|branch|vine|bodhi|front|001|002|003|004/i.test(f.material.name)||f.name&&/leaf|leaves|branch|vine|bodhi|front/i.test(f.name);g&&f.material.map?(f.receiveShadow=!0,f.material.alphaTest=.35,f.material.transparent=!1,f.material.depthWrite=!0,f.material.needsUpdate=!0,f.customDepthMaterial=new wo({depthPacking:za,map:f.material.map,alphaTest:.35}),f.customDepthMaterial.side=Qe):f.receiveShadow=!0;const m=`${f.name||""} ${f.material.name||""}`,_=/trunk|bark|wood|log|stem|branch/i.test(m),x=/leaf|leaves|foliage|twig|frond|canopy|vine|blossom|flower|bright|dark|front/i.test(m);if(g&&x&&!_&&Uh(f,i.key),f.material.side===Qe&&!f.material._hasSunShading){f.material._hasSunShading=!0;const M=f.material.onBeforeCompile;f.material.onBeforeCompile=(v,T)=>{M&&M(v,T),Nh(v)},f.material.needsUpdate=!0}}}),i.key==="rose"?Jr=p:ps.set(i.key,p),r()},void 0,o=>{console.warn(`Failed to load ${i.url}:`,o),r()})}));return Promise.all(n).then(()=>{cp=!0;const i=[...hc];hc.length=0,i.forEach(r=>{try{r()}catch(o){console.error(o)}})})}Uu();const hp=new WeakMap;function U1(s){let e=hp.get(s);return e||(e=new wo({depthPacking:za,map:s.map,alphaTest:.35}),e.side=Qe,s._windConfig&&(e._hasWindShader=!0,e.onBeforeCompile=t=>{Fh(t,s._windConfig)}),hp.set(s,e),e)}function O1(s,{seed:e=1,scale:t=1}={}){const n=new Ot;n.name=`Tree_${s}`;let i=s;i==="gulmohar"&&(i="peepal");const r=Fu(e),o=ps.get(i)||ps.get("mango")||ps.get("banyan"),a=h=>{const u=.94+r()*.12;s==="banyan"?(h.scale.x*=u*t*1.28,h.scale.y*=u*t*1.3,h.scale.z*=u*t*1.28):s==="peepal"?(h.scale.x*=u*t*1.24,h.scale.y*=u*t*1.3,h.scale.z*=u*t*1.24):s==="mango"?(h.scale.x*=u*t*1.12,h.scale.y*=u*t*1.15,h.scale.z*=u*t*1.12):s==="neem"?h.scale.multiplyScalar(u*t*1.05):h.scale.multiplyScalar(u*t),h.rotation.y=r()*Math.PI*2},l=h=>{h.traverse(u=>{if(u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material)){u.material.side=Qe,u.material.shadowSide=Qe;const d=u.material.map&&(u.material.alphaTest>0||u.material.transparent||u.material.name&&/leaf|leaves|foliage|branch|vine|bodhi|front|001|004/i.test(u.material.name)||u.name&&/leaf|leaves|branch|vine|bodhi|front/i.test(u.name));u.receiveShadow=!0,d&&u.material.map&&!u.customDepthMaterial&&(u.material.alphaTest=.35,u.material.transparent=!1,u.material.depthWrite=!0,u.customDepthMaterial=U1(u.material))}})};if(o){const h=o.clone(!0);a(h),l(h),n.add(h),n.userData.swayGroup=h}else{const h=new Ot;n.add(h),n.userData.swayGroup=h,Uu(()=>{const u=ps.get(i)||ps.get("mango")||ps.get("banyan");if(u){const d=u.clone(!0);a(d),l(d),h.add(d)}})}const c=ap[s]||ap.mango;return n.userData.swayAmplitude=c.swayAmplitude,n.userData.swayFreqMult=c.swayFreqMult,n.userData.species=s,n.userData.seed=e,n}function B1(s=5e3){const e=new Ot;return e.name="ForestGrass",{grass:e,shrubs:[]}}let uc=null;function k1(){if(uc)return uc;const s=new sl().load(In("textures/forest_floor.jpg"));return s.wrapS=Pi,s.wrapT=Pi,s.colorSpace=vt,s.anisotropy=8,uc=s,s}const z1=1/23.0938;function H1(s=4242,{dedicatedShadowLight:e=!0}={}){const t=Fu(s),n=new Ot;n.name="RoseCenterpiece";const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d"),o=r.createRadialGradient(128,128,0,128,128,128);o.addColorStop(0,"rgba(6, 4, 3, 0.72)"),o.addColorStop(.35,"rgba(8, 6, 4, 0.52)"),o.addColorStop(.65,"rgba(10, 8, 5, 0.24)"),o.addColorStop(.88,"rgba(12, 10, 6, 0.07)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),r.fillStyle=o,r.fillRect(0,0,256,256);const a=r.createRadialGradient(128,128,0,128,128,52);a.addColorStop(0,"rgba(3, 2, 2, 0.88)"),a.addColorStop(.6,"rgba(5, 4, 3, 0.55)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),r.fillStyle=a,r.fillRect(0,0,256,256);const l=new io(i);l.colorSpace=vt;const c=new Ne(new En(3.4,3.4),new an({map:l,transparent:!0,opacity:.92,depthWrite:!1,toneMapped:!1}));c.name="RoseContactShadow",c.rotation.x=-Math.PI/2,c.position.set(0,.015,0),c.renderOrder=3,n.add(c);const h=E1(.15,.11),u=new Qt({color:11015202,roughness:.68,metalness:0,side:Qe,shadowSide:Qe,emissive:0,emissiveIntensity:0});for(let M=0;M<9;M++){const v=new Ne(h,u),T=.2+t()*.55,w=t()*Math.PI*2;v.position.set(Math.cos(w)*T,.018,Math.sin(w)*T),v.rotation.x=Math.PI*.48+(t()-.5)*.2,v.rotation.y=t()*Math.PI*2,v.rotation.z=(t()-.5)*.3,v.scale.setScalar(.72+t()*.38),v.castShadow=!0,v.receiveShadow=!0,n.add(v)}const d=new Ot;d.name="RedRoseGLBPivot",d.position.set(0,0,0),n.add(d);let p=null;if(e){p=new Ya(16773832,1.8),p.name="RoseCenterpieceShadowLight",p.castShadow=!0,p.shadow.mapSize.set(1024,1024),p.shadow.camera.near=.5,p.shadow.camera.far=28;const M=1.7;p.shadow.camera.left=-M,p.shadow.camera.right=M,p.shadow.camera.top=M,p.shadow.camera.bottom=-M,p.shadow.camera.updateProjectionMatrix(),p.shadow.bias=-3e-4,p.shadow.normalBias=.003,p.shadow.radius=1.2,p.position.set(6,12,6),p.target=d,n.add(p)}n.userData.shadowLight=p;const f=M=>{M.traverse(v=>{if(v.isMesh){if(v.castShadow=!0,v.receiveShadow=!0,v.material){if(v.material.shadowSide=Qe,v.material.side=Qe,v.material.roughness=.7,v.material.metalness=0,v.material.emissive=new j(0),v.material.emissiveIntensity=0,v.material.map&&(v.material.map.colorSpace=vt,v.material.alphaTest=.35,v.material.transparent=!1,v.material.depthWrite=!0,v.customDepthMaterial=new wo({depthPacking:za,map:v.material.map,alphaTest:.35}),v.customDepthMaterial.side=Qe),!v.material._hasSunShading){v.material._hasSunShading=!0;const T=v.material.onBeforeCompile;v.material.onBeforeCompile=(w,C)=>{T&&T(w,C),Nh(w)}}v.material.needsUpdate=!0}Uh(v,"rose")}})};if(Jr){const M=Jr.clone(!0);f(M),d.add(M)}else Uu(()=>{if(Jr){const M=Jr.clone(!0);f(M),d.add(M)}});const g=36,m=new At,_=new Float32Array(g*3);for(let M=0;M<g;M++){const v=.3+t()*1.5,T=t()*Math.PI*2,w=.5+t()*2.8;_[M*3]=Math.cos(T)*v+.15,_[M*3+1]=w,_[M*3+2]=Math.sin(T)*v}m.setAttribute("position",new Xt(_,3));const x=new su(m,new il({color:13938487,size:.02,transparent:!0,opacity:.25,depthWrite:!1}));return n.add(x),n.userData.swayGroup=d,n.userData.swayAmplitude=.002,n.userData.swayFreqMult=.4,n.userData.motes=x,n}function V1(s=1){const e=Fu(80),t={banyan:12.65,peepal:7.15,mango:8.15,neem:6.55},n=10.2,i=68,r=[],o=e()*Math.PI*2,a=i-14,l=1.05;r.push({species:"banyan",x:Math.sin(o)*a,z:Math.cos(o)*a,angle:e()*Math.PI*2,seed:701,scale:l,rReq:t.banyan*l});const c=o+Math.PI+(e()-.5)*.35,h=i-14,u=1.05;r.push({species:"banyan",x:Math.sin(c)*h,z:Math.cos(c)*h,angle:e()*Math.PI*2,seed:702,scale:u,rReq:t.banyan*u});const d=[];for(let p=0;p<Math.round(10*s);p++)d.push("peepal");for(let p=0;p<Math.round(21*s);p++)d.push("mango");for(let p=0;p<Math.round(17*s);p++)d.push("neem");for(let p=d.length-1;p>0;p--){const f=Math.floor(e()*(p+1));[d[p],d[f]]=[d[f],d[p]]}for(let p=0;p<d.length;p++){const f=d[p];let g=null,m=-1;for(let _=0;_<5e3;_++){const x=e(),M=n+Math.sqrt(x)*(i-n),v=e()*Math.PI*2,T=Math.sin(v)*M,w=Math.cos(v)*M,C=.92+e()*.16,y=t[f]*C;let b=!0,U=999;for(const A of r){const D=Math.hypot(T-A.x,w-A.z),I=y+A.rReq+.25;if(D<I){b=!1;break}D<U&&(U=D)}if(b&&(U>m&&(m=U,g={species:f,x:T,z:w,angle:e()*Math.PI*2,seed:710+p*47,scale:C,rReq:y}),U>y+4)){g={species:f,x:T,z:w,angle:e()*Math.PI*2,seed:710+p*47,scale:C,rReq:y};break}}g&&r.push(g)}return r}function up(s=!1){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createRadialGradient(256,256,0,256,256,256);return s?(n.addColorStop(0,"rgba(0, 0, 0, 0.96)"),n.addColorStop(.35,"rgba(0, 0, 0, 0.78)"),n.addColorStop(.65,"rgba(0, 0, 0, 0.38)"),n.addColorStop(.85,"rgba(0, 0, 0, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)")):(n.addColorStop(0,"rgba(0, 0, 0, 0.65)"),n.addColorStop(.28,"rgba(0, 0, 0, 0.42)"),n.addColorStop(.58,"rgba(0, 0, 0, 0.20)"),n.addColorStop(.82,"rgba(0, 0, 0, 0.05)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)")),t.fillStyle=n,t.fillRect(0,0,512,512),new io(e)}function G1(s){const e=new Ot;e.name="CenterSculpture";const t=new En(6.2,6.2),n=new an({map:up(!1),transparent:!0,opacity:.95,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),i=new Ne(t,n);i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=1,e.add(i);const r=new En(3.6,3.6),o=new an({map:up(!0),transparent:!0,opacity:.98,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new Ne(r,o);a.rotation.x=-Math.PI/2,a.position.y=.004,a.renderOrder=2,e.add(a);const l=new Mo(1.8,2.1,3.8,16);l.translate(0,1.9,0);const c=new an({visible:!1}),h=new Ne(l,c);h.name="SculptureHitbox",e.add(h);const u=new hu(16105608,.65,4,2);return u.position.set(0,1.7,0),e.add(u),new mu(s).load(In("models/center_sculpture.glb"),p=>{const f=p.scene;f.name="SculptureScannedModel";const g=new P;let m=-1/0,_=1/0;f.traverse(A=>{if(A.isMesh&&A.geometry){const D=A.geometry.attributes.position,I=new P;for(let H=0;H<D.count;H++)I.fromBufferAttribute(D,H),I.y>m&&(m=I.y,g.copy(I)),I.y<_&&(_=I.y)}});const x=3.6,M=m-_,v=x/(M||1);f.position.x=-g.x*v,f.position.z=-g.z*v,f.position.y=-_*v-.085,f.scale.setScalar(v),f.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0,A.material&&(A.material.roughness=.52,A.material.metalness=.04,A.material.envMapIntensity=.75,A.material.onBeforeCompile=D=>{D.vertexShader=`
                                varying vec3 vGroundWorldPos;
                            
`+D.vertexShader,D.vertexShader=D.vertexShader.replace("#include <worldpos_vertex>",`
                                #include <worldpos_vertex>
                                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                                `),D.fragmentShader=`
                                varying vec3 vGroundWorldPos;
                            
`+D.fragmentShader,D.fragmentShader=D.fragmentShader.replace("#include <dithering_fragment>",`
                                #include <dithering_fragment>
                                float groundH = max(0.0, vGroundWorldPos.y);
                                float baseAO = smoothstep(0.0, 0.45, groundH);
                                gl_FragColor.rgb *= mix(0.42, 1.0, baseAO);
                                `)}))}),e.add(f),e.userData.scannedModel=f;const T=m*v+f.position.y,w=720,C=new Mo(.016,.016,w,12,1e3,!0);C.translate(0,w/2,0);const y={uTime:{value:0},uMotion:{value:0},uDrag:{value:new te(0,0)},uWind:{value:new te(0,0)}},b=new Qt({color:14162972,emissive:10031120,emissiveIntensity:1.3,roughness:.88,metalness:.02});b.onBeforeCompile=A=>{A.uniforms.uTime=y.uTime,A.uniforms.uMotion=y.uMotion,A.uniforms.uDrag=y.uDrag,A.uniforms.uWind=y.uWind,A.vertexShader=`
                    uniform float uTime;
                    uniform float uMotion;
                    uniform vec2 uDrag;
                    uniform vec2 uWind;
                    varying float vFresnel;
                
`+A.vertexShader,A.vertexShader=A.vertexShader.replace("#include <begin_vertex>",`
                    #include <begin_vertex>
                    float h = max(0.0, transformed.y);

                    // A real fiber is never a perfectly uniform rod. This is a fixed,
                    // per-height irregularity (two mismatched sine frequencies, not
                    // animated) rather than true noise -- cheap, and non-repeating over
                    // a length this long.
                    float radius0 = length(position.xz);
                    vec2 radialDir = radius0 > 0.0001 ? position.xz / radius0 : vec2(0.0);
                    float radiusNoise = 1.0 + 0.22 * sin(h * 2.7 + 11.3) * sin(h * 0.9 + 3.1);

                    // Guarantee a minimum on-screen width. At 0.016 world units radius,
                    // the tube's projected width falls below a pixel well before the
                    // thread is actually far away, and standard rasterization doesn't
                    // reliably draw sub-pixel geometry every frame -- it flickers in and
                    // out, which is what "disappears in parts" actually was. True
                    // delicate thinness still holds up close; this only compensates once
                    // perspective would otherwise erase it.
                    vec3 worldPosApprox = (modelMatrix * vec4(transformed, 1.0)).xyz;
                    float camDist = distance(cameraPosition, worldPosApprox);
                    float minRadiusScale = max(1.0, camDist / 55.0);

                    transformed.x = radialDir.x * radius0 * radiusNoise * minRadiusScale;
                    transformed.z = radialDir.y * radius0 * radiusNoise * minRadiusScale;

                    // Smooth progressive root easement
                    float anchor = smoothstep(0.0, 1.8, h);

                    // Gentle, smooth upward traveling harmonics with relaxed speeds
                    float travel1 = uTime * 0.95 - h * 0.22;  // Soft rhythmic primary wave
                    float travel2 = uTime * 1.45 - h * 0.38;  // Gentle counter-phase wave
                    float travel3 = uTime * 0.55 - h * 0.10;  // Broad sweeping spatial wave

                    // Smooth reduced-amplitude alternating bends
                    float bendX = sin(travel1) * 0.28 - sin(travel2) * 0.16 + cos(travel3) * 0.20;
                    float bendZ = cos(travel1 + 1.2) * 0.28 + cos(travel2 - 0.9) * 0.16 + sin(travel3 + 2.1) * 0.20;

                    // Smooth trailing drag response
                    float whipLag = sin(uTime * 1.5 - h * 0.16) * 0.20 + cos(uTime * 0.9 - h * 0.08) * 0.12;
                    vec2 dynamicDrag = uDrag * (0.55 + whipLag * 0.30);

                    // Combine all 3D curved forces: scaled strictly by uMotion so default is 100% straight up
                    float waveStrength = uMotion * 0.52;
                    float dx = anchor * (bendX * waveStrength + dynamicDrag.x * (0.5 + uMotion * 0.3));
                    float dz = anchor * (bendZ * waveStrength + dynamicDrag.y * (0.5 + uMotion * 0.3));

                    // A thread never sits perfectly still, even with the camera at rest --
                    // a faint always-on flutter, independent of uMotion/uDrag, so it never
                    // reads as a rigid rod between camera moves.
                    float flutter = anchor * 0.035;
                    dx += sin(uTime * 2.6 + h * 0.6) * flutter;
                    dz += cos(uTime * 2.1 + h * 0.5 + 1.7) * flutter;

                    // Soft atmospheric expansion higher up
                    float heightGain = 1.0 + smoothstep(3.0, 45.0, h) * 1.15;
                    transformed.x += dx * heightGain;
                    transformed.z += dz * heightGain;

                    // How edge-on is this surface to the viewer right now? Feeds the
                    // fragment shader's grazing-angle red boost (see below).
                    vec3 worldNormalForFresnel = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
                    vec3 worldPosForFresnel = (modelMatrix * vec4(transformed, 1.0)).xyz;
                    vec3 viewDirForFresnel = normalize(cameraPosition - worldPosForFresnel);
                    vFresnel = pow(1.0 - clamp(abs(dot(viewDirForFresnel, worldNormalForFresnel)), 0.0, 1.0), 2.2);
                    `),A.fragmentShader=`
                    varying float vFresnel;
                
`+A.fragmentShader,A.fragmentShader=A.fragmentShader.replace("#include <dithering_fragment>",`
                    #include <dithering_fragment>
                    // Grazing viewing angle -- looking along the thread's length, through
                    // more of its cross-section rather than square at its side -- reads as
                    // a richer, more saturated red, the way a shard of red glass darkens
                    // toward its own colour when you look through more of its thickness.
                    // This runs after tonemapping (dithering_fragment is the last
                    // chunk), so values are already clamped to [0,1] display range --
                    // 1.0 red is already fully saturated here, pushing higher would be
                    // a dead value.
                    vec3 threadRed = vec3(1.0, 0.10, 0.07);
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, threadRed, vFresnel * 0.88);
                    `)};const U=new Ne(C,b);U.position.set(0,T,0),U.name="SculptureRedThread",U.frustumCulled=!1,e.add(U),e.userData.threadUniforms=y},void 0,p=>{console.error("Error loading center_sculpture.glb:",p)}),e.userData={isSculpture:!0,hitbox:h},e}const Oh=43.6532*(Math.PI/180),W1=12.5*(Math.PI/180),X1=9.95/24*Math.PI*2,q1=new P(-.198,.456,.8677).normalize(),Y1=new P(-.8734,-.4838,.0549).normalize(),j1=new P(.4448,-.7469,.4941).normalize();function dp(s,e,t){const n=Math.sin(s)*Math.sin(e)+Math.cos(s)*Math.cos(e)*Math.cos(t),i=Math.asin(Math.max(-1,Math.min(1,n))),r=Math.cos(i);if(Math.abs(r)<1e-5)return{alt:i,az:0};const o=(Math.sin(e)-Math.sin(s)*Math.sin(i))/(Math.cos(s)*r),a=-Math.cos(e)*Math.sin(t)/r;let l=Math.atan2(a,Math.max(-1,Math.min(1,o)));l<0&&(l+=Math.PI*2);let c=(l+Math.PI)%(Math.PI*2);return{alt:i,az:c}}function fp(s,e,t=1600){const n=Math.cos(s),i=t*n*Math.sin(e),r=t*Math.sin(s),o=-t*n*Math.cos(e);return new P(i,r,o)}function K1(s,e=1600){const t=s-Math.PI/2,n=dp(Oh,W1,t),i=fp(n.alt,n.az,e),r=t+Math.PI,o=-11*(Math.PI/180),a=dp(Oh,o,r),l=fp(a.alt,a.az,e);return{sunPos:i,sunAlt:n.alt,sunAz:n.az,moonPos:l,moonAlt:a.alt,moonAz:a.az}}function Z1(s=1800,e=!1){const t=new Ot;t.name="TorontoSkySystem";const n=new dr(s*.98,e?24:32,e?16:24),i=new Bt({uniforms:{uZenithColor:{value:new j(1721972)},uHorizonColor:{value:new j(5011622)},uHorizonOpposite:{value:new j(5011622)},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new j(16774616)},uNightFactor:{value:0}},vertexShader:`
            varying vec3 vWorldPos;
            void main() {
                vWorldPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 uZenithColor;
            uniform vec3 uHorizonColor;
            uniform vec3 uHorizonOpposite;
            uniform vec3 uSunDir;
            uniform vec3 uSunColor;
            uniform float uNightFactor;
            varying vec3 vWorldPos;

            void main() {
                vec3 dir = normalize(vWorldPos);
                float h = max(0.0, dir.y);

                float horizonBand = pow(1.0 - h, 2.8);

                // A sunset is not orange all the way round. The warm band sits in
                // the sun's quarter of the sky and falls off to a cool, dusty
                // counter-glow behind the viewer -- ringing the whole horizon in
                // the same orange is the single thing that makes a procedural sky
                // read as fake. Compare compass bearings only, so the split holds
                // however high the sun is.
                vec2 dirAz = normalize(vec2(dir.x, dir.z) + vec2(1e-6));
                vec2 sunAz = normalize(vec2(uSunDir.x, uSunDir.z) + vec2(1e-6));
                float towardSun = smoothstep(-0.55, 0.95, dot(dirAz, sunAz));
                vec3 horizonMix = mix(uHorizonOpposite, uHorizonColor, towardSun);

                vec3 baseSky = mix(uZenithColor, horizonMix, horizonBand);

                float sunDot = max(0.0, dot(dir, uSunDir));
                // Two terms, not one: a wide Mie-ish scatter that swells around a
                // low sun and gives the sunset its body, and a tight corona for
                // the disc itself. The tight term alone reads as a sticker on a
                // flat gradient.
                float scatter = pow(sunDot, 5.0) * 0.30 * (1.0 - uNightFactor);
                float corona  = pow(sunDot, 256.0) * 0.35 * (1.0 - uNightFactor);

                // Scatter concentrates near the horizon, where the light path
                // through atmosphere is longest.
                scatter *= mix(0.35, 1.0, horizonBand);

                vec3 col = baseSky + uSunColor * (corona + scatter);

                // Deep royal midnight sky with subtle atmospheric horizon airglow
                vec3 nightZenith = vec3(0.008, 0.015, 0.035);
                vec3 nightHorizon = vec3(0.018, 0.036, 0.062);
                vec3 nightSky = mix(nightZenith, nightHorizon, horizonBand);
                col = mix(col, nightSky, uNightFactor);

                gl_FragColor = vec4(col, 1.0);
            }
        `,side:jt,depthWrite:!1,fog:!1}),r=new Ne(n,i);r.renderOrder=-200,t.add(r);const o=new Ot;o.name="TorontoCelestialGroup";const l=new sl().load(In("textures/milkyway.jpg"));l.wrapS=Pi,l.wrapT=Xn,l.minFilter=Tt,l.magFilter=Tt,l.generateMipmaps=!1;const c=new dr(s*.95,e?32:48,e?24:36),h=new Bt({uniforms:{uMwTex:{value:l},uNightFactor:{value:0},uGalacticPole:{value:q1},uGalacticCenter:{value:Y1},uGalactic90:{value:j1}},vertexShader:`
            varying vec3 vWorldDir;
            varying vec3 vLocalPos;
            void main() {
                vLocalPos = position;
                vWorldDir = normalize((modelMatrix * vec4(position, 1.0)).xyz);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform sampler2D uMwTex;
            uniform float uNightFactor;
            uniform vec3 uGalacticPole;
            uniform vec3 uGalacticCenter;
            uniform vec3 uGalactic90;
            varying vec3 vWorldDir;
            varying vec3 vLocalPos;

            void main() {
                if (uNightFactor <= 0.001) discard;
                vec3 dir = normalize(vLocalPos);

                // Convert celestial sphere direction directly to Galactic Coordinates (b, l)
                float sinB = dot(dir, uGalacticPole);
                float b = asin(clamp(sinB, -1.0, 1.0));

                float xL = dot(dir, uGalacticCenter);
                float yL = dot(dir, uGalactic90);
                float l = atan(yL, xL);

                // Sample ESO 360-degree all-sky panorama
                vec2 uv = vec2((l + 3.14159265) / (2.0 * 3.14159265), (b + 1.5707963) / 3.14159265);
                vec4 tex = texture2D(uMwTex, uv);

                float altFade = smoothstep(-0.16, -0.01, normalize(vWorldDir).y);
                float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));

                // Dynamic Astrophotography Color Grading:
                // - Luminous sapphire blue & cyan along the spiral arms and star clouds
                // - Warm golden amber and ivory in the Sagittarius galactic core
                // - Hydrogen-alpha magenta/pink nebular knots
                float coreZone = exp(-pow(l * 1.5, 2.0)) * exp(-pow(b * 3.8, 2.0));
                float hAlphaZone = pow(max(0.0, sin(l * 5.5 + b * 8.5)), 2.0) * exp(-pow(b * 2.6, 2.0));

                vec3 armColor = vec3(0.42, 0.72, 1.15);     // Electric sapphire/cyan arms
                vec3 coreColor = vec3(1.15, 0.88, 0.60);    // Warm golden-ivory core
                vec3 hAlphaColor = vec3(1.10, 0.45, 0.75);  // H-Alpha magenta/pink

                vec3 coloredGlow = mix(armColor, coreColor, clamp(coreZone * 1.4, 0.0, 1.0));
                coloredGlow = mix(coloredGlow, hAlphaColor, hAlphaZone * 0.32);

                vec3 finalCol = tex.rgb * coloredGlow * 1.50;
                float alpha = smoothstep(0.018, 0.65, lum) * uNightFactor * altFade * 0.95;

                if (alpha <= 0.001) discard;
                gl_FragColor = vec4(finalCol * alpha, alpha);
            }
        `,side:jt,transparent:!0,blending:Ba,depthWrite:!1,fog:!1}),u=new Ne(c,h);return u.renderOrder=-160,o.add(u),t.add(o),{skyRoot:t,skyDomeMat:i,mwMat:h,celestialGroup:o,update(d,p,f=1600){const g=K1(d,f),m=g.sunAlt,_=Math.max(0,Math.sin(m)),x=Math.max(0,Math.sin(g.moonAlt)),M=qe.clamp((-m+.08)/.2,0,1),v=qe.smoothstep(m,-.12,.08);i.uniforms.uSunDir.value.copy(g.sunPos).normalize(),i.uniforms.uNightFactor.value=M,h.uniforms.uNightFactor.value=M;const T=d-Math.PI/2+X1;return o.rotation.order="ZXY",o.rotation.x=Math.PI/2-Oh,o.rotation.y=-T,{cel:g,sunAlt:m,sH:_,mH:x,sunW:v,nightFactor:M}}}}const pp=new nl,mp=new Ue,dc=new P,gp=new P,_p=new P,Zs=new P,fc=new P,Wr=new P,ba=new j,Xr=new j,bi=new P,pc=new P,hn=new P,$1=8,J1=2.6,vp=95,Q1=4.3,eE=11,xp=3,yp=.6,tE=6,Mp=new j(1721972),Sp=new j(5011622),nE=new j(2762055),iE=new j(14718591),sE=new j(1841196),rE=new j(13127711),mc=new j,gc=new j,bp=new j(5603499),oE=new j(4868722),aE=new j(4012640),_c=new j,Ta=new j,lE=new j(0),Tp=new j(0);new j(10667164);new j(924434);new j;const wp=new j(16776680),cE=new j(16747060),Ep=new j(16773832),hE=new j(15233578),uE=new j(15374976),Ap=new j(15134197),dE=new j(12767970),Cp=new j(13162728),fE=new j(11584986),pE=new j(14739698),mE=new j(3491165),gE=new j(16577236),_E=new j(1053983),vE=new j(2367256),xE=.34,yE=new j(658698),ME=new j(2303510),SE=new j(6841438),bE=new j(2107444),TE=new j(660516),wE=new j(3289140),EE=new j(15262936),AE=new j(8220512),CE=new j(1317414),RE=new j(12100744),wa=.025,PE=Math.PI/2,DE=2.2,Rp=new P,vc={default:-.8,portfolio:-.8,forest:-.28},Pp=s=>({default:s.rock,portfolio:s.sculpture,forest:s.roseCenterpiece}),xc=["default","portfolio","forest"];function Qr(s){return xc[(xc.indexOf(s)+1)%xc.length]}const LE={default:"Doors",portfolio:"Paintings",forest:"Forest"};function Ea(s){return LE[Qr(s)]}const Dp=130,IE=15,NE=3,Lp=720,Ip=60,Np=.2,Aa=.25,Fp=.22,ds={scene:{fog:{color:"#273444"},camera:{fov:50}},doors:[{id:"portfolio",label:"PORTFOLIO",type:"rustic_wood",modelPath:null,position:[-10,0,-6],rotation:[0,.4,0],destinationUrl:"",animation:"creakOpen",color:16755336,particles:"leaves"},{id:"blog",label:"BLOG",type:"scifi_portal",modelPath:null,position:[-5,0,-9],rotation:[0,.2,0],destinationUrl:"/blog",animation:"slideUp",color:8965375,particles:"tech"},{id:"projects",label:"PROJECTS",type:"iron_gate",modelPath:null,position:[0,0,-10],rotation:[0,0,0],destinationUrl:"https://waveism.duar.one",animation:"swingBoth",color:16772778,particles:"sparks"},{id:"contact",label:"CONTACT",type:"stone_arch",modelPath:null,position:[5,0,-9],rotation:[0,-.2,0],destinationUrl:"/about/",animation:"dissolveField",color:13404415,particles:"runes"},{id:"about",label:"ABOUT",type:"shoji_screen",modelPath:null,position:[10,0,-6],rotation:[0,-.4,0],destinationUrl:"/about/",animation:"slideRight",color:16746666,particles:"petals"}]};class FE{constructor(){this.container=document.getElementById("app"),console.log("DuarApp initializing..."),this.scene=new em,this.doors=[],this.raycaster=new kv,this.mouse=new te,this.time=0,this.daySpeed=.08,this.motionPaused=!0,this.isTraveling=!1,this.isFlying=!1,this.activeDoor=null,this._orbitRadius=null,this.hoveredDoor=null,this.elapsed=0,this.viewMode="portfolio",this._switching=!1,this.particleSystems=[],this.dragPlane=new wi(new P(0,1,0),0),this.loadingManager=new xm,this.setupLoadingManager(),this._bindReticle(),this._bindPaintingPopup(),this.init(),setTimeout(()=>this.revealScene(),2500)}_bindReticle(){const e=document.getElementById("reticle");if(!e)return;["pointerdown","pointerup"].forEach(n=>e.addEventListener(n,i=>i.stopPropagation())),e.addEventListener("click",n=>{n.stopPropagation(),this.viewMode!=="portfolio"&&this._refuseEntry()});const t=document.querySelector(".reticle-back");t&&t.addEventListener("click",n=>{n.stopPropagation(),this.isTraveling||this.resetScene()})}_bindPaintingPopup(){const e=document.getElementById("painting-popup"),t=document.getElementById("painting-title-btn"),n=document.getElementById("painting-popup-card");!e||!t||(t.addEventListener("click",i=>{i.stopPropagation(),e.classList.toggle("open")}),n&&["pointerdown","pointerup","click"].forEach(i=>{n.addEventListener(i,r=>r.stopPropagation())}),window.addEventListener("click",i=>{e.classList.contains("open")&&!e.contains(i.target)&&e.classList.remove("open")}))}_flashReticleLabel(e){const t=document.querySelector("#reticle .reticle-label");t&&(this._reticleLabelDefault||(this._reticleLabelDefault=t.textContent),t.textContent=e,clearTimeout(this._reticleLabelTimeout),this._reticleLabelTimeout=setTimeout(()=>{t.textContent=this._reticleLabelDefault,t.classList.remove("refuse")},1600))}_refuseEntry(e="Coming soon"){const t=document.getElementById("reticle"),n=t?.querySelector(".reticle-label");this._flashReticleLabel(e),!(!t||!n)&&(t.classList.remove("refuse"),n.classList.remove("refuse"),t.offsetWidth,t.classList.add("refuse"),n.classList.add("refuse"),setTimeout(()=>t.classList.remove("refuse"),500))}_showReticle(){const e=document.getElementById("reticle");if(!e)return;const t=this.viewMode==="portfolio"||this.viewMode==="forest";if(e.classList.toggle("art-mode",t),t){const i=e.querySelector(".reticle-title");i&&(i.textContent="")}e.classList.add("visible");const n=document.querySelector(".reticle-back");if(n&&(n.classList.toggle("art",t),n.classList.add("visible")),Ae.fromTo(e,{opacity:0,scale:.85},{opacity:1,scale:1,duration:.4,ease:"power2.out",overwrite:!0}),t&&this.activeDoor){const i=document.getElementById("painting-popup"),r=i?.querySelector(".popup-title-text"),o=i?.querySelector(".popup-card-meta"),a=i?.querySelector(".popup-card-desc");if(i&&r){if(this.activeDoor.data){const l=this.activeDoor.data;r.textContent=l.title||"Untitled";const c=[];l.year&&c.push(`${l.year}`),l.widthIn&&l.heightIn&&c.push(`${l.widthIn}×${l.heightIn} in`),l.medium&&c.push(l.medium),o&&(o.textContent=c.join("  ·  ")),a&&(a.textContent=l.description||"")}else(this.activeDoor.isTree||this.activeDoor.isRose||this.activeDoor.isFlora)&&(r.textContent=this.activeDoor.title||this.activeDoor.name||"Botanical Flora",o&&(o.textContent=this.activeDoor.meta||""),a&&(a.textContent=this.activeDoor.description||""));i.classList.remove("open"),i.classList.add("visible")}}}_hideReticle(){const e=document.getElementById("reticle");if(!e)return;document.querySelector(".reticle-back")?.classList.remove("visible","art");const t=document.getElementById("painting-popup");t&&t.classList.remove("visible","open"),Ae.to(e,{opacity:0,scale:.85,duration:.3,ease:"power2.in",overwrite:!0,onComplete:()=>e.classList.remove("visible","art-mode")})}dismissIntro(){this._introDismissed||(this._introDismissed=!0,["intro-title","intro-hint"].forEach(e=>{const t=document.getElementById(e);t&&(t.style.animation="none",Ae.to(t,{opacity:0,y:-20,duration:1.2,ease:"power2.out",onComplete:()=>{t.style.display="none"}}))}))}updateLabels(){if(!this.doors.length)return;const e=new P,t=window.innerWidth/2,n=window.innerHeight/2;this.doors.forEach(i=>{const r=i.labelEl;if(!r)return;if(!(i===this.hoveredDoor&&!this.activeDoor&&!this.isTraveling)){r.style.opacity!=="0"&&(r.style.opacity="0");return}const a=i.isPainting?i.centreY+(i.height||4)/2+.3:3.7;if(e.set(i.group.position.x,i.group.position.y+a,i.group.position.z).project(this.camera),e.z>1){r.style.opacity="0";return}r.style.left=e.x*t+t+"px",r.style.top=-e.y*n+n+"px",r.style.opacity="1"})}setupLoadingManager(){this.loadingManager.onLoad=()=>this.revealScene(),this.loadingManager.onError=()=>this.revealScene()}revealScene(){this._revealed=!0,this._maybeStartIntro();const e=document.getElementById("loading");e&&Ae.to(e,{opacity:0,duration:1.5,ease:"power2.out",onComplete:()=>{e.style.display="none"}}),this.viewMode==="portfolio"?(this.sculpture&&(this.sculpture.visible=!0),this.rock&&(this.rock.visible=!1),this.roseCenterpiece&&(this.roseCenterpiece.visible=!1)):this.viewMode==="forest"?(this.roseCenterpiece&&(this.roseCenterpiece.visible=!0),this.rock&&(this.rock.visible=!1),this.sculpture&&(this.sculpture.visible=!1)):(this.rock&&(this.rock.visible=!0),this.sculpture&&(this.sculpture.visible=!1),this.roseCenterpiece&&(this.roseCenterpiece.visible=!1))}init(){this.camera=new rn(ds.scene.camera.fov,window.innerWidth/window.innerHeight,.1,6e3),this.camera.fov=this._fovForAspect(window.innerWidth/window.innerHeight),this.camera.updateProjectionMatrix(),this.camera.position.set(0,3,28.5),this.camera.lookAt(0,1.6,0);const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.innerWidth<768;this.isMobile=e;const t=e&&(window.innerWidth<=390||navigator.deviceMemory!==void 0&&navigator.deviceMemory<=4);this.isSmallPhone=t,this.isTouch=e||window.matchMedia("(pointer: coarse)").matches,this.quality={pixelRatioCap:t?1:e?1.5:2,shadowMapSize:t?512:e?1024:3072,treeCountScale:t?.5:1,secondaryShadowLights:!t},this.renderer=new Nb({antialias:!e,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality.pixelRatioCap)),this.renderer.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),this._rafId&&cancelAnimationFrame(this._rafId),console.warn("WebGL context lost — pausing render loop.")}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{window.location.reload()}),this.renderer.toneMapping=kh,this.renderer.toneMappingExposure=1.08,this.renderer.outputColorSpace=vt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=eo,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.container.appendChild(this.renderer.domElement),this.renderer.setClearColor(0,1);try{const g=new ph(this.renderer);g.compileEquirectangularShader();const m=new OT;this.scene.environment=g.fromScene(m).texture,this.scene.environmentIntensity=.13,m.dispose(),g.dispose()}catch(g){console.warn("Environment map initialization bypassed:",g)}this.composer=new NT(this.renderer),this.composer.addPass(new FT(this.scene,this.camera));const n=e?new te(Math.floor(window.innerWidth/4),Math.floor(window.innerHeight/4)):new te(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2));this.bloomPass=new _r(n,.08,.3,.98),this._bloomDefaults={strength:.08,threshold:.98},this.composer.addPass(this.bloomPass),this.controls=new Ub(this.camera,this.renderer.domElement),this.controls.target.set(0,1.6,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=.5,this.controls.maxDistance=100,this.controls.maxPolarAngle=Math.PI*.54,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=-.8,this.scene.fog=new Qh(ds.scene.fog.color,.002),this.scene.background=new j(ds.scene.fog.color),this.setupLighting(),this.setupEnvironment(),this.viewMode==="portfolio"?(this.buildPortfolioDoors(),this.bloomPass.threshold=.98,this.bloomPass.strength=.08):this.setupDoors(),this.setupDustMotes(),window.addEventListener("resize",()=>this.onResize(),{passive:!0}),window.addEventListener("wheel",()=>this.dismissIntro(),{passive:!0}),["gesturestart","gesturechange","gestureend"].forEach(g=>window.addEventListener(g,m=>m.preventDefault(),{passive:!1}));let i=0;window.addEventListener("touchend",g=>{const m=performance.now();m-i<300&&g.preventDefault(),i=m},{passive:!1}),window.addEventListener("contextmenu",g=>{this.draggedDoor&&g.preventDefault()}),this.walkEnabled=!1,this._walkKeys={forward:!1,back:!1,left:!1,right:!1,boost:!1};const r={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"boost",ShiftRight:"boost"},o=g=>g&&(g.tagName==="INPUT"||g.tagName==="TEXTAREA"||g.isContentEditable);this._jumpVelocity=0,this._jumpRequested=!1,window.addEventListener("keydown",g=>{if(g.code==="Space"&&this.walkEnabled&&!g.repeat&&!o(g.target)){g.preventDefault(),this._jumpRequested=!0,this.dismissIntro();return}const m=r[g.code];!m||o(g.target)||g.metaKey||g.ctrlKey||g.altKey||(this._walkKeys[m]=!0,this.walkEnabled&&(g.preventDefault(),this.dismissIntro()))}),window.addEventListener("keyup",g=>{const m=r[g.code];m&&(this._walkKeys[m]=!1)}),window.addEventListener("blur",()=>{for(const g in this._walkKeys)this._walkKeys[g]=!1}),this._padKeys={forward:!1,back:!1,left:!1,right:!1},this._setupWalkPad(),this._updateWalkUI();let a=0,l=0,c=0;this._isPointerDown=!1,this._pointerSpeed=0;let h=0,u=0,d=0;window.addEventListener("pointerdown",g=>{this.dismissIntro(),a=g.clientX,l=g.clientY,c=performance.now(),this._isPointerDown=!0,h=g.clientX,u=g.clientY,d=c,this._pointerSpeed=0,this.onMouseMove(g),(g.button===1||g.button===2||g.shiftKey)&&this.handlePointerDown(g)}),window.addEventListener("pointermove",g=>{if(this._isPointerDown){const m=performance.now(),_=Math.max(1,m-d),x=Math.hypot(g.clientX-h,g.clientY-u);this._pointerSpeed=x/_*1e3,h=g.clientX,u=g.clientY,d=m}this.onMouseMove(g),this.draggedDoor&&this.handleDoorDrag(g)}),window.addEventListener("pointerup",g=>{if(this._isPointerDown=!1,this._pointerSpeed=0,g.pointerType==="touch"&&(this.hoveredDoor=null),this.draggedDoor){this.draggedDoor=null,this.controls.enabled=!0;return}const m=Math.hypot(g.clientX-a,g.clientY-l),_=performance.now()-c;m<8&&_<350&&this.onClick(g)}),window.addEventListener("pointercancel",()=>{this._isPointerDown=!1,this._pointerSpeed=0}),this.createTimeControls(),this._startClock();const p=new Date,f=p.getHours()+p.getMinutes()/60;this.sunAngle=(f-6)/24*Math.PI*2,this.daySpeed=wa,setTimeout(()=>this.dismissIntro(),14e3);try{this.renderer.compile(this.scene,this.camera)}catch{}this._lastFrame=performance.now(),this.animate()}createTimeControls(){if(!document.getElementById("compact-ui-css")){const _=document.createElement("style");_.id="compact-ui-css",_.innerHTML=`
                /* Glass in the iOS sense: a capsule that refracts the scene behind it
                   rather than a translucent grey panel. The look comes from four things
                   layered - a vertical gradient so the top catches more light than the
                   bottom, a heavy blur with the saturation pushed past 1 so colour
                   bleeds through instead of going milky, a hairline border, and a bright
                   inset line along the top edge standing in for a specular highlight. */
                .glass-bar-wrapper {
                    pointer-events: auto;
                    background: linear-gradient(180deg,
                                rgba(255, 255, 255, 0.15) 0%,
                                rgba(255, 255, 255, 0.07) 45%,
                                rgba(255, 255, 255, 0.05) 100%);
                    backdrop-filter: blur(28px) saturate(200%) brightness(1.06);
                    -webkit-backdrop-filter: blur(28px) saturate(200%) brightness(1.06);
                    padding: 5px 11px;
                    border-radius: 999px;
                    border: 0.5px solid rgba(255, 255, 255, 0.22);
                    box-shadow:
                        0 14px 44px rgba(0, 0, 0, 0.42),
                        0 2px 10px rgba(0, 0, 0, 0.22),
                        inset 0 1px 0 rgba(255, 255, 255, 0.34),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.06);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .chrome-slider {
                    -webkit-appearance: none;
                    width: 120px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.18);
                    outline: none;
                    border: none;
                }
                .chrome-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 22px;
                    height: 12px;
                    border-radius: 2px;
                    background: #fff;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.35);
                    transition: transform 0.1s ease;
                }
                .chrome-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
                .glass-btn {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.68);
                    border: 0.5px solid rgba(255, 255, 255, 0.10);
                    border-radius: 999px;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.15s ease;
                    padding: 0;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-touch-callout: none;
                    position: relative;
                }
                .glass-btn svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.3; stroke-linecap: round; stroke-linejoin: round; }
                .glass-btn:hover {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.30);
                    color: #ffffff;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
                }
                .glass-btn:active {
                    background: rgba(255, 255, 255, 0.24);
                    border-color: rgba(255, 255, 255, 0.42);
                    transform: scale(0.92);
                }
                .glass-btn:focus-visible {
                    outline: 2px solid rgba(255, 255, 255, 0.75);
                    outline-offset: 2px;
                }
                /* A toggle that is on (walk mode): lit, not just hovered. */
                .glass-btn.is-on {
                    background: rgba(255, 255, 255, 0.18);
                    border-color: rgba(255, 255, 255, 0.38);
                    color: #ffffff;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
                }
                .glass-btn.day-btn {
                    color: #ffd677;
                    background: rgba(255, 214, 119, 0.06);
                    border-color: rgba(255, 214, 119, 0.2);
                }
                .glass-btn.day-btn:hover {
                    color: #fff2b2;
                    background: rgba(255, 214, 119, 0.16);
                    border-color: rgba(255, 214, 119, 0.45);
                    box-shadow: 0 0 10px rgba(255, 214, 119, 0.25);
                }
                .glass-btn.day-btn:active {
                    background: rgba(255, 214, 119, 0.25);
                    border-color: rgba(255, 214, 119, 0.6);
                }
                .glass-btn.night-btn {
                    color: #99d2ff;
                    background: rgba(153, 210, 255, 0.06);
                    border-color: rgba(153, 210, 255, 0.2);
                }
                .glass-btn.night-btn:hover {
                    color: #d0ebff;
                    background: rgba(153, 210, 255, 0.16);
                    border-color: rgba(153, 210, 255, 0.45);
                    box-shadow: 0 0 10px rgba(153, 210, 255, 0.25);
                }
                .glass-btn.night-btn:active {
                    background: rgba(153, 210, 255, 0.25);
                    border-color: rgba(153, 210, 255, 0.6);
                }
                .btn-tip {
                    position: absolute;
                    bottom: calc(100% + 12px);
                    left: 50%;
                    transform: translateX(-50%) translateY(4px);
                    padding: 4px 10px;
                    border-radius: 8px;
                    background: rgba(16, 20, 28, 0.65);
                    backdrop-filter: blur(12px) saturate(160%);
                    -webkit-backdrop-filter: blur(12px) saturate(160%);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    color: rgba(255, 255, 255, 0.9);
                    font-family: 'Outfit', sans-serif;
                    font-size: 10px;
                    font-weight: 400;
                    letter-spacing: 0.12rem;
                    white-space: nowrap;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.18s ease, transform 0.18s ease;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
                }
                .glass-btn:hover .btn-tip,
                .glass-btn .btn-tip.tip-visible,
                .slider-wrapper:hover .btn-tip,
                .slider-wrapper .btn-tip.tip-visible { opacity: 1; transform: translateX(-50%) translateY(0); }
                .slider-wrapper { position: relative; display: inline-flex; align-items: center; }
                .slider-wrapper .btn-tip { left: 50%; transform: translateX(-50%) translateY(4px); }
                .ui-hidden { opacity: 0; transform: translateY(12px); pointer-events: none; }
                
                @media (max-width: 480px) {
                    .chrome-slider { width: 85px; }
                    .glass-bar-wrapper { gap: 5px; padding: 4px 8px; }
                    .glass-btn { width: 28px; height: 28px; }
                }
            `,document.head.appendChild(_)}const e=document.createElement("div");this.uiContainer=e,e.style.cssText="position:absolute; bottom:calc(45px + env(safe-area-inset-bottom)); width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);";const t=document.createElement("div");t.className="glass-bar-wrapper",t.onmouseenter=()=>this.resetUIHideTimer();const n={home:'<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>',random:'<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>',day:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>',spiral:'<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a7.2 7.2 0 0 0-7.2-7.2 7.2 7.2 0 0 0-7.2 7.2c0 3.09 2.51 5.6 5.6 5.6s5.6-2.51 5.6-5.6a4 4 0 0 0-4-4c-1.33 0-2.4 1.07-2.4 2.4s1.07 2.4 2.4 2.4"/></svg>',night:'<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',pause:'<svg viewBox="0 0 24 24"><rect x="7" y="5" width="3.6" height="14" rx="1.2"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.2"/></svg>',play:'<svg viewBox="0 0 24 24"><path d="M8 5.4L18.4 12 8 18.6Z"/></svg>',art:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',duar:'<svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16h14zM9 5h6v14H9V5zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',forest:'<svg viewBox="0 0 24 24"><path d="M12 2 5 13h4l-5 8h20l-5-8h4z"/><path d="M12 23v-4"/></svg>',walk:'<svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16M9.5 6.5 12 4l2.5 2.5M9.5 17.5 12 20l2.5-2.5M6.5 9.5 4 12l2.5 2.5M17.5 9.5 20 12l-2.5 2.5"/></svg>',instagram:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'},i=(_,x,M="")=>{const v=document.createElement("button");if(v.className="glass-btn",v.innerHTML=_,M){v.setAttribute("aria-label",M);const T=document.createElement("span");T.className="btn-tip",T.textContent=M,v.appendChild(T);let w;v.addEventListener("touchstart",()=>{T.classList.add("tip-visible"),clearTimeout(w),w=setTimeout(()=>T.classList.remove("tip-visible"),1400)},{passive:!0})}return v.onclick=T=>{T.stopPropagation(),x(),this.resetUIHideTimer()},v.addEventListener("touchstart",T=>T.stopPropagation()),v},r=i(n.home,()=>this.resetScene(!0),"Home"),o=i(n.random,()=>{if(this.doors.length===0||this.isTraveling)return;const _=this.doors[Math.floor(Math.random()*this.doors.length)];_.isPainting?this.focusPainting(_):_.isOpen||this.toggleDoor(_)},"Discover");this.randBtn=o,o.style.display=this.viewMode==="forest"?"none":"inline-flex";const a=i(n.day,()=>{},"Day");a.classList.add("day-btn");const l=i(n.spiral,()=>{},"Time Warp · Hold to cycle");l.classList.add("spiral-btn");const c=i(n.night,()=>{},"Night");c.classList.add("night-btn");const h=i(n.pause,()=>{},"Pause motion · Hold to go wuuuuu");this.motionBtn=h,this.rotateBtn=h,h.style.color="#fff",this._motionIcons={pause:n.pause,play:n.play};const u=200,d=(_,x,M)=>{let v,T=0,w=!1;const C=b=>{b.stopPropagation(),v&&clearInterval(v),this.resetUIHideTimer(),T=performance.now(),w=!1,v=setInterval(()=>{const U=performance.now()-T;this.resetUIHideTimer(),U>u&&(w=!0,x(U))},50)},y=b=>{v&&(clearInterval(v),v=null),T&&performance.now()-T>u&&(w=!0),!w&&M&&b.type!=="pointerleave"?(M(),this.resetUIHideTimer()):w&&((_===l||_===a||_===c)&&(this.daySpeed=0),_===h&&(this.controls.autoRotateSpeed=-.8,this.daySpeed=wa))};_.addEventListener("pointerdown",C),_.addEventListener("pointerup",y),_.addEventListener("pointerleave",y),_.addEventListener("pointerenter",()=>this.resetUIHideTimer())};d(h,()=>{this.motionPaused&&this.setMotionPaused(!1),this.controls.autoRotateSpeed=Math.max(-5e3,Math.min(-.5,this.controls.autoRotateSpeed*1.05)),this.daySpeed<.02&&(this.daySpeed=.02),this.daySpeed=Math.min(.65,this.daySpeed*1.08)},()=>{this._motionPausedByForest=!1,this.setMotionPaused(!this.motionPaused)}),d(l,_=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.02&&(this.daySpeed=.02),this.daySpeed=Math.min(.65,this.daySpeed*1.08)},()=>{this.sunAngle=(this.sunAngle+Math.PI/12)%(Math.PI*2),this.daySpeed=0}),d(a,_=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.01&&(this.daySpeed=.01),this.daySpeed=Math.min(.2,this.daySpeed*1.1)},()=>{this.sunAngle=Math.PI/2,this.daySpeed=0}),d(c,_=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.01&&(this.daySpeed=.01),this.daySpeed=Math.min(.2,this.daySpeed*1.1)},()=>{this.sunAngle=3*Math.PI/2,this.daySpeed=0});const p=_=>({default:n.duar,portfolio:n.art,forest:n.forest})[Qr(_)],f=i(p(this.viewMode),async()=>{await this.switchView(Qr(this.viewMode))},Ea(this.viewMode));this.dockModeBtn=f,this.updateDockModeBtn=()=>{const _=Ea(this.viewMode);f.innerHTML=p(this.viewMode),f.setAttribute("aria-label",_);const x=document.createElement("span");x.className="btn-tip",x.textContent=_,f.appendChild(x)};const g=i(n.instagram,()=>{window.open("https://instagram.com/vaveism","_blank","noopener,noreferrer")},"@vaveism");this.instaBtn=g,g.style.display=this.viewMode==="portfolio"?"inline-flex":"none";const m=i(n.walk,()=>this.setWalkEnabled(!this.walkEnabled),this.isTouch?"Walk":"Walk · WASD");m.setAttribute("aria-pressed","false"),this.walkBtn=m,t.append(r,h,m,o,a,l,c,f,g),e.appendChild(t),document.body.appendChild(e),this.uiVisible=!0,this.resetUIHideTimer()}_updateWindEnvelope(e){if(this._windGate===void 0&&(this._windGate=1,this._windGateTarget=1,this._windHold=30+Math.random()*30),this._windHold-=e,this._windHold<=0){const r=this._windGateTarget>.5;this._windGateTarget=r?0:1,this._windHold=r?10+Math.random()*12:45+Math.random()*60}const t=1-Math.exp(-e/4);this._windGate+=(this._windGateTarget-this._windGate)*t;const n=this.time,i=.62+Math.sin(n*.23)*.2+Math.sin(n*.61+1.7)*.12+Math.sin(n*1.13+4.2)*.06;this._windAmbient=xE*this._windGate*Math.max(0,i)}updatePaintingLight(e){if(!this.doors.length)return;gp.copy(e.cel.sunPos).normalize(),_p.copy(e.cel.moonPos).normalize();const t=e.sH,n=e.mH*(1-e.sunW),i=qe.clamp(t*3,0,1),r=qe.clamp(n*3,0,1),o=.4+.16*t;for(const a of this.doors){if(!a.isPainting||!a.panelMaterial||(Zs.subVectors(this.camera.position,a.group.position),Zs.y=0,Zs.lengthSq()<1e-6))continue;Zs.normalize();const l=Math.max(0,Zs.dot(gp)),c=Math.max(0,Zs.dot(_p));let h=o+.5*i*l+.14*r*c;a===this.activeDoor&&(h=qe.lerp(h,1,.85)),h=qe.clamp(h,.34,1),a._lit=a._lit===void 0?h:qe.lerp(a._lit,h,.12),a.panelMaterial.color.setScalar(a._lit)}}_maybeStartIntro(){this._introStarted||!this._doorsReady||!this._revealed||this.viewMode!=="portfolio"||this.activeDoor||(this._introStarted=!0,this._playIntroDescent())}_playIntroDescent(){const e=this._introOverview||this.getDefaultOverview(),t=this._priorMaxDistance??this.controls.maxDistance;Ae.killTweensOf(this.camera.position),Ae.killTweensOf(this.controls);const n=Ae.timeline({onComplete:()=>{this.controls.maxDistance=t}});n.to(this.camera.position,{y:e.camPos.y,duration:IE,delay:1.6,ease:"sine.inOut"});const i=1.6;n.call(()=>{this.setMotionPaused(!1,{rotation:!1}),this.controls.autoRotate=!0},null,i),n.fromTo(this.controls,{autoRotateSpeed:0},{autoRotateSpeed:-.8,duration:NE,ease:"sine.inOut"},i)}setMotionPaused(e,{rotation:t=!0}={}){this.motionPaused=!!e,t&&(this.controls.autoRotate=!this.motionPaused,this.motionPaused||(this.controls.autoRotateSpeed=vc[this.viewMode]??-.8)),!this.motionPaused&&this.daySpeed===0&&(this.daySpeed=wa);const n=this.motionBtn;if(n&&this._motionIcons){const i=(this.motionPaused?"Play motion":"Pause motion")+" · Hold to go wuuuuu";n.innerHTML=this.motionPaused?this._motionIcons.play:this._motionIcons.pause,n.setAttribute("aria-label",i),n.setAttribute("aria-pressed",String(this.motionPaused));const r=document.createElement("span");r.className="btn-tip",r.textContent=i,n.appendChild(r),n.style.color=this.motionPaused?"rgba(255,255,255,0.35)":"#fff"}this.resetUIHideTimer()}resetUIHideTimer(){this.uiHideTimeout&&clearTimeout(this.uiHideTimeout),this.uiHideTimeout=setTimeout(()=>this.setUIVisibility(!1),5e3)}setUIVisibility(e){this.uiContainer&&(e?(this.uiContainer.classList.remove("ui-hidden"),this.uiVisible=!0,this.resetUIHideTimer()):(this.uiContainer.classList.add("ui-hidden"),this.uiVisible=!1),this.viewToggle?.classList.toggle("ui-hidden",!e))}createViewToggle(){const e=document.createElement("button");e.id="view-toggle",e.className="ui-hidden",this.viewToggle=e,(()=>{const n=Ea(this.viewMode);e.textContent=n,e.setAttribute("aria-label",`Switch to ${n.toLowerCase()}`)})(),e.addEventListener("click",async n=>{n.stopPropagation(),!this._switching&&(e.disabled=!0,await this.switchView(Qr(this.viewMode)),e.disabled=!1,this.resetUIHideTimer())}),e.addEventListener("pointerdown",n=>n.stopPropagation()),document.body.appendChild(e)}handlePointerDown(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);if(t.length>0){const n=t.find(i=>{let r=i.object;for(;r;){if(this.doors.some(o=>o.group===r))return!0;r=r.parent}return!1});if(n){let i=n.object;for(;i;){const r=this.doors.find(o=>o.group===i);if(r){this.draggedDoor=r,this.controls.enabled=!1;return}i=i.parent}}}}handleDoorDrag(e){if(!this.draggedDoor)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=new P;this.raycaster.ray.intersectPlane(this.dragPlane,t),t&&this.draggedDoor.group.position.set(t.x,t.y,t.z)}onClick(e){if(!(this.isTraveling||this.isFlying))try{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);console.log("Click hits:",t.length,t.map(i=>i.object.type));let n=!1;if(t.length>0){const i=o=>{const a=Pp(this)[this.viewMode];if(!a)return!1;let l=o;for(;l;){if(l===a)return!0;l=l.parent}return!1},r=t.find(o=>{if(i(o.object))return!0;let a=o.object;for(;a;){if(this.doors.some(l=>l.group===a))return!0;a=a.parent}return!1});if(r){if(n=!0,i(r.object)){this._switching||(this.activeDoor&&this._hideReticle(),this.switchView(Qr(this.viewMode),{keepCamera:!0}));return}let o=r.object,a=null;for(;o&&(a=this.doors.find(l=>l.group===o),!a);)o=o.parent;if(a)if(this.activeDoor&&this.activeDoor!==a&&this._hideReticle(),a.isTree){if(!a.isGrass&&!a.isShrub)if(this.activeDoor===a&&!this.isTraveling){const l=document.getElementById("painting-popup");l&&l.classList.toggle("open")}else this.focusFlora(a)}else if(a.isPainting)if(this.activeDoor===a&&!this.isTraveling){const l=document.getElementById("painting-popup");l&&l.classList.toggle("open")}else this.focusPainting(a);else a.isOpen?this._refuseEntry():this.toggleDoor(a)}}if(!n){const i=document.getElementById("painting-popup");i&&i.classList.contains("open")?i.classList.remove("open"):this.activeDoor&&(this.activeDoor.isTree||this.activeDoor.isRose||this.activeDoor.isFlora||this.activeDoor.isPainting||this.activeDoor.isOpen)?this.resetScene():this.setUIVisibility(!this.uiVisible)}}catch(t){console.error("Error in onClick:",t)}}travelThroughPortal(e){if(this.isTraveling)return;this.isTraveling=!0,this.activeDoor=null,this._hideReticle();const t=e.data.destinationUrl;if(console.log("travelThroughPortal to:",t),!t){this.isTraveling=!1;return}this.controls.enabled=!1,this.controls.autoRotate=!1,this.uiContainer&&(this.setUIVisibility(!1),this.uiContainer.style.display="none");const n=new P;e.portalHitbox.getWorldPosition(n);const i=new P().subVectors(n,this.camera.position).normalize(),r=n.clone().add(i.multiplyScalar(3)),o=Ae.timeline();o.to(this.camera.position,{x:r.x,y:n.y,z:r.z,duration:1.8,ease:"power3.in"},0),o.to(this.controls.target,{x:n.x+i.x*10,y:n.y,z:n.z+i.z*10,duration:1.5,ease:"power2.inOut"},0),o.to(this.camera,{fov:130,duration:1.8,ease:"power3.in",onUpdate:()=>this.camera.updateProjectionMatrix()},0);const a=document.getElementById("controls-legend");a&&o.to(a,{opacity:0,y:-10,duration:.5,ease:"power2.out"},0);const l=document.createElement("div");l.style.cssText=`
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #000;
            opacity: 0;
            z-index: 99999;
            pointer-events: none;
        `,document.body.appendChild(l),o.to(l,{opacity:1,duration:1,ease:"power2.inOut"},.8),o.call(()=>{t.startsWith("mailto:")?(window.location.href=t,setTimeout(()=>{l.style.opacity="0",setTimeout(()=>{document.body.removeChild(l),this.isTraveling=!1,this.controls.enabled=!0,this.uiContainer&&(this.uiContainer.style.display="flex",this.setUIVisibility(!0)),this.resetScene()},500)},2e3)):window.location.href=t})}createPortalMaterial(e){return new Bt({uniforms:{uTime:{value:0},uOpacity:{value:0},uHover:{value:0},uColor:{value:new j(e||16777215)}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uTime;
                uniform float uOpacity;
                uniform float uHover;
                uniform vec3 uColor;
                varying vec2 vUv;
                
                void main() {
                    vec2 uv = vUv - 0.5;
                    uv.y *= 0.43;
                    
                    float dist = length(uv);
                    float angle = atan(uv.y, uv.x);
                    
                    // Wave and spiral patterns for organic smoke-like vortex movements
                    float wave = sin(dist * 50.0 - uTime * 4.0 + sin(uTime * 0.5 + dist * 10.0) * 0.6) * 0.5 + 0.5;
                    float spiral = sin(angle * 4.0 - dist * 25.0 + uTime * 2.0) * 0.5 + 0.5;
                    
                    float intensity = mix(wave, spiral, 0.4);
                    
                    // Vignetted rectangular frame edges
                    float edgeX = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
                    float edgeY = smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
                    float rectEdge = edgeX * edgeY;
                    
                    // Dark obsidian swirling void
                    // Shifting translucent alpha patterns
                    float baseAlpha = mix(0.94, 0.65, intensity);
                    float finalAlpha = baseAlpha * rectEdge * uOpacity * (1.0 + uHover * 0.15);
                    
                    // Dark obsidian interior with a colored rim glow hugging the frame edge.
                    // rimGlow peaks in the transition band (rectEdge ~0.5) and is 0 at center/outside.
                    float rimGlow = (1.0 - rectEdge) * rectEdge * 4.0;
                    rimGlow *= (1.0 + uHover * 0.7);
                    vec3 finalColor = uColor * rimGlow * (0.55 + 0.45 * intensity);

                    finalAlpha = clamp(finalAlpha + rimGlow * 0.35 * uOpacity, 0.0, 1.0);
                    gl_FragColor = vec4(finalColor, finalAlpha);
                }
            `,transparent:!0,depthWrite:!1,blending:ys,side:Qe})}_rebuildHoverTargets(){if(this._hoverTargets=[],this._hoverOwner=new Map,this.viewMode==="forest"){for(const t of this.doors)t.isTree&&!t.isGrass&&!t.isShrub&&t.group&&t.group.traverse(n=>{n.isMesh&&(this._hoverTargets.push(n),this._hoverOwner.set(n,t))});if(this.roseCenterpiece){const t=this.roseDoor||{group:this.roseCenterpiece,isRose:!0,isFlora:!0,title:"Duar 3.0",name:"Duar 3.0",meta:"Floribunda Roses · Living Centerpiece",description:"A flourishing sacred bush of velvety ruby red roses resting peacefully at the sanctuary center."};this.roseCenterpiece.traverse(n=>{n.isMesh&&n.name!=="ContactShadow"&&(this._hoverTargets.push(n),this._hoverOwner.set(n,t))})}return}for(const t of this.doors){const n=t.portalHitbox;n&&(this._hoverTargets.push(n),this._hoverOwner.set(n,t))}const e=this.viewMode==="portfolio"?this.sculpture:this.rock;e&&e.traverse(t=>{t.isMesh&&(this._hoverTargets.push(t),this._hoverOwner.set(t,null))})}checkHover(){if(!this.raycaster||!this.scene||!this.camera)return;this._hoverTargets||this._rebuildHoverTargets(),this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this._hoverTargets,!1);let t=!1,n=null;if(e.length>0){const r=this._hoverOwner.get(e[0].object);t=!0,n=r||null}const i=t?"pointer":"crosshair";this._cursor!==i&&(this._cursor=i,document.body.style.cursor=i),this.hoveredDoor=n,this.doors.forEach(r=>{if(r.portalMaterial){const o=r===n&&r.isOpen?1:0;Ae.to(r.portalMaterial.uniforms.uHover,{value:o,duration:.4,ease:"power2.out"})}})}toggleDoor(e){if(!e.isAnimating){if(this.dismissIntro(),e.isAnimating=!0,e.isOpen=!e.isOpen,e.isOpen){const t=document.querySelector("#reticle .reticle-title");t&&(t.textContent=e.name||""),Ae.fromTo(this.bloomPass,{strength:2},{strength:1.2,duration:1.6,ease:"power2.out",overwrite:!0});const n=new P;e.group.getWorldPosition(n),n.y=1.78;const i=new P().subVectors(this.camera.position,n).setY(0).normalize();i.lengthSq()<1e-4&&i.set(0,0,1);const r=this.camera.fov/2*(Math.PI/180),a=.8/(window.innerWidth/window.innerHeight*Math.tan(r)),l=Math.max(.3,Math.min(6,a)),c=n.clone().add(i.multiplyScalar(l));c.y=1.78,this.activeDoor=e,this.flyTo(c,n,1.9,()=>{this.controls.target.copy(n),this.controls.autoRotate=!this.motionPaused,this.controls.autoRotateSpeed=-.25,this.activeDoor===e&&this._showReticle()}),this.ringMat&&Ae.to(this.ringMat,{opacity:0,duration:1.5,ease:"power2.inOut"}),e.portalMaterial&&Ae.to(e.portalMaterial.uniforms.uOpacity,{value:.75,duration:1.5,delay:.5,ease:"power2.out"})}else{this.activeDoor=null,this._hideReticle(),this.setUIVisibility(!0);const t=new P;e.group.getWorldPosition(t),t.y=1.78;const n=new P().subVectors(this.camera.position,t).setY(0).normalize();n.lengthSq()<1e-4&&n.set(0,0,1);const i=t.clone().addScaledVector(n,8);i.y=2.8,this.flyTo(i,new P(t.x,1.78,t.z),1.8,()=>{this.controls.autoRotate=!this.motionPaused,this.controls.autoRotateSpeed=-.6}),Ae.to(this.camera,{fov:this._fovForAspect(this.camera.aspect),duration:1.8,ease:"power2.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()}),this.ringMat&&Ae.to(this.ringMat,{opacity:.9,duration:2,delay:.5,ease:"power2.inOut"}),e.portalMaterial&&Ae.to(e.portalMaterial.uniforms.uOpacity,{value:0,duration:1,ease:"power2.inOut"})}Ae.to(e.hinge.rotation,{y:e.isOpen?-Math.PI/2:0,duration:2,delay:e.isOpen?.5:0,ease:"power2.inOut",onComplete:()=>{e.isAnimating=!1}})}}_pulseShadowUpdates(e,t=175){this._shadowPulseTween&&this._shadowPulseTween.kill();let n=-1/0;this._shadowPulseTween=Ae.to({},{duration:e,onUpdate:()=>{const i=performance.now();i-n>=t&&(n=i,this.renderer.shadowMap.needsUpdate=!0)},onComplete:()=>{this.renderer.shadowMap.needsUpdate=!0,this._shadowPulseTween=null}})}flyTo(e,t,n=1.9,i=null){this.isFlying=!0,this.controls.enabled=!1,this.controls.autoRotate=!1,this.controls.enableDamping=!1,Ae.killTweensOf(this.camera.position),Ae.killTweensOf(this.controls.target);const r=this.camera.position.clone();let o=Math.max(r.y,e.y);if(this.viewMode==="forest")for(let l=1;l<8;l++){const c=l/8,h=r.x*(1-c)+e.x*c,u=r.z*(1-c)+e.z*c,d=Gr(h,u);d+1.2>o&&(o=d+1.2)}o>Math.max(r.y,e.y)+.15?(Ae.to(this.camera.position,{x:e.x,z:e.z,duration:n,ease:"power2.inOut",overwrite:!0}),Ae.to(this.camera.position,{y:o,duration:n*.45,ease:"sine.out",onComplete:()=>{Ae.to(this.camera.position,{y:e.y,duration:n*.55,ease:"sine.inOut"})}})):Ae.to(this.camera.position,{x:e.x,y:e.y,z:e.z,duration:n,ease:"power2.inOut",overwrite:!0}),Ae.to(this.controls.target,{x:t.x,y:t.y,z:t.z,duration:n,ease:"power2.inOut",overwrite:!0,onComplete:()=>{this.controls.target.copy(t),this.controls.enabled=!0,this.controls.enableDamping=!0,this.isFlying=!1,i&&i()}})}getDefaultOverview(){const e=window.innerWidth/Math.max(1,window.innerHeight),t=qe.clamp((4/3-e)/(4/3-.46),0,1),n=1.6,i=3,r=1,o=new P(0,n,0);let a=new P(0,i,28.5*r);if(this.viewMode==="portfolio"&&this.doors.length>0){const l=this.doors.find(c=>c.data?.id==="Flowers Unnamed")||this.doors.find(c=>c.isPainting);if(l){const c=new P;l.group.getWorldPosition(c);const h=Math.atan2(c.x,c.z);let u=Math.max(28,(l.radius||15)+13)*r,d=i,p=n;if(t>.01){const g=rp(l.width,l.height,this.camera)*1.25,m=l.centreY||2;u=qe.lerp(u,(l.radius||15)+g,t),p=qe.lerp(n,m,t),d=qe.lerp(i,Math.min(1.6,m*.55),t)}o.set(0,p,0),a=new P(Math.sin(h)*u,d,Math.cos(h)*u)}}return{camPos:a,target:o}}_releaseFocus(){this.closeAllDoors(),this._occludedTrees&&this._occludedTrees.size>0&&(this._occludedTrees.forEach(e=>{if(e.group){e.group.visible=!0;const t=e.scale||1;Ae.killTweensOf(e.group.scale),Ae.to(e.group.scale,{x:t,y:t,z:t,duration:.5,ease:"power2.out"})}}),this._occludedTrees.clear()),this.activeDoor=null,this.daySpeed=wa,this._hideReticle(),this.setUIVisibility(!0)}resetScene(e=!1){const t=!e&&this.viewMode==="portfolio"&&this.activeDoor?.isPainting?this.activeDoor:null,n=!e&&this.viewMode==="forest"&&(this.activeDoor?.isTree||this.activeDoor?.isRose||this.activeDoor?.isFlora)?this.activeDoor:null;this._releaseFocus();let i=new P(0,1.6,0),r;if(t){const o=new P;t.group.getWorldPosition(o);const a=Math.atan2(o.x,o.z),l=t.radius||15,c=Math.max(28,l+13),h=2.8+Math.min(l*.04,3.2);r=new P(Math.sin(a)*c,h,Math.cos(a)*c)}else if(n){const o=Math.atan2(this.camera.position.x,this.camera.position.z),a=28.5,l=3.2;r=new P(Math.sin(o)*a,l,Math.cos(o)*a),i=new P(0,1.6,0)}else{const o=this.getDefaultOverview();r=o.camPos,i=o.target}this.flyTo(r,i,1.8,()=>{this.controls.autoRotate=!this.motionPaused,this.motionPaused||(this.controls.autoRotateSpeed=vc[this.viewMode]??-.8)}),this.ringMat&&Ae.to(this.ringMat,{opacity:.9,duration:4,ease:"power2.inOut"}),Ae.to(this.camera,{fov:this._fovForAspect(this.camera.aspect),duration:1.8,ease:"power2.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()})}closeAllDoors(){this.doors.forEach(e=>{e.isOpen&&(e.isOpen=!1,e.isAnimating=!0,Ae.to(e.hinge.rotation,{y:0,duration:1.5,ease:"power2.inOut",onComplete:()=>{e.isAnimating=!1}}))})}setupLighting(){const e=new Tv(16774634,.007);this.scene.add(e),this.hemiLight=new xv(16774104,2235414,.28),this.scene.add(this.hemiLight);const t=this.quality.shadowMapSize;this.sunDist=1600,this.sunLight=new Ya(16773832,3.3),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=650;const n=85;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.bias=-1e-4,this.sunLight.shadow.normalBias=.018,this.sunLight.shadow.radius=.9,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const i=this.generateSunTexture();this.sunMesh=new Ne(new dr(44,32,32),new Qt({map:i,emissiveMap:i,emissive:16770167,emissiveIntensity:2.2,roughness:.85,fog:!1,transparent:!0})),this.sunMesh.renderOrder=-180,this.scene.add(this.sunMesh),this.moonLight=new Ya(13162728,1.4),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.set(t,t),this.moonLight.shadow.camera.near=10,this.moonLight.shadow.camera.far=650,this.moonLight.shadow.camera.left=-n,this.moonLight.shadow.camera.right=n,this.moonLight.shadow.camera.top=n,this.moonLight.shadow.camera.bottom=-n,this.moonLight.shadow.camera.updateProjectionMatrix(),this.moonLight.shadow.bias=-1e-4,this.moonLight.shadow.normalBias=.018,this.moonLight.shadow.radius=1.2,this.scene.add(this.moonLight),this.scene.add(this.moonLight.target);const r=this.generateMoonTexture();this.moonMesh=new Ne(new dr(30,32,32),new Qt({map:r,emissiveMap:r,emissive:14739698,emissiveIntensity:1.1,roughness:.92,metalness:0,fog:!1,transparent:!0})),this.moonMesh.renderOrder=-180,this.scene.add(this.moonMesh)}generateSunTexture(){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#fffbeb"),n.addColorStop(.4,"#ffe67c"),n.addColorStop(1,"#ffb833"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let i=0;i<300;i++)t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.15})`,t.beginPath(),t.arc(Math.random()*1024,Math.random()*512,Math.random()*25,0,Math.PI*2),t.fill();return new io(e)}generateMoonTexture(){const e=document.createElement("canvas"),t=1024,n=512;e.width=t,e.height=n;const i=e.getContext("2d"),r=i.createLinearGradient(0,0,0,n);r.addColorStop(0,"#e8edf3"),r.addColorStop(.5,"#dbe2ea"),r.addColorStop(1,"#caced4"),i.fillStyle=r,i.fillRect(0,0,t,n);const o=i.getImageData(0,0,t,n),a=o.data;let l=12345;const c=()=>(l=l*16807%2147483647,(l-1)/2147483646);for(let f=0;f<n;f++)for(let g=0;g<t;g++){const m=(f*t+g)*4,_=(c()-.5)*18;a[m]=Math.max(0,Math.min(255,a[m]+_)),a[m+1]=Math.max(0,Math.min(255,a[m+1]+_)),a[m+2]=Math.max(0,Math.min(255,a[m+2]+_+2))}i.putImageData(o,0,0),[{x:.36*t,y:.32*n,rx:110,ry:75,col:"rgba(80, 92, 106, 0.58)"},{x:.44*t,y:.3*n,rx:85,ry:65,col:"rgba(74, 86, 98, 0.62)"},{x:.58*t,y:.35*n,rx:70,ry:58,col:"rgba(76, 88, 102, 0.60)"},{x:.62*t,y:.46*n,rx:80,ry:60,col:"rgba(72, 84, 96, 0.62)"},{x:.76*t,y:.38*n,rx:42,ry:34,col:"rgba(68, 78, 90, 0.65)"},{x:.68*t,y:.56*n,rx:65,ry:50,col:"rgba(78, 88, 100, 0.55)"},{x:.59*t,y:.62*n,rx:45,ry:36,col:"rgba(82, 92, 104, 0.52)"},{x:.42*t,y:.62*n,rx:70,ry:52,col:"rgba(80, 90, 102, 0.56)"},{x:.32*t,y:.6*n,rx:45,ry:38,col:"rgba(78, 88, 100, 0.54)"},{x:.48*t,y:.18*n,rx:140,ry:24,col:"rgba(84, 95, 108, 0.50)"}].forEach(f=>{i.save(),i.filter="blur(12px)",i.fillStyle=f.col,i.beginPath(),i.ellipse(f.x,f.y,f.rx,f.ry,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(64, 74, 86, 0.42)",i.beginPath(),i.ellipse(f.x+(c()-.5)*20,f.y+(c()-.5)*15,f.rx*.65,f.ry*.65,.2,0,Math.PI*2),i.fill(),i.restore()});const u=.47*t,d=.78*n;i.save(),i.strokeStyle="rgba(255, 255, 255, 0.28)",i.lineWidth=1.6,i.filter="blur(2px)";for(let f=0;f<24;f++){const g=f/24*Math.PI*2+c()*.15,m=90+c()*180;i.beginPath(),i.moveTo(u,d),i.lineTo(u+Math.cos(g)*m,d+Math.sin(g)*m),i.stroke()}i.fillStyle="rgba(255, 255, 255, 0.85)",i.filter="blur(3px)",i.beginPath(),i.arc(u,d,14,0,Math.PI*2),i.fill(),i.restore(),[{x:.41*t,y:.41*n,r:10,rays:14,len:75},{x:.32*t,y:.43*n,r:6,rays:10,len:45},{x:.28*t,y:.33*n,r:5,rays:8,len:35}].forEach(f=>{i.save(),i.strokeStyle="rgba(255, 255, 255, 0.22)",i.lineWidth=1.2,i.filter="blur(1.5px)";for(let g=0;g<f.rays;g++){const m=g/f.rays*Math.PI*2+c()*.2;i.beginPath(),i.moveTo(f.x,f.y),i.lineTo(f.x+Math.cos(m)*f.len,f.y+Math.sin(m)*f.len),i.stroke()}i.fillStyle="rgba(255, 255, 255, 0.90)",i.beginPath(),i.arc(f.x,f.y,f.r,0,Math.PI*2),i.fill(),i.restore()});for(let f=0;f<180;f++){const g=c()*t,m=c()*n,_=2+c()*6;i.save(),i.fillStyle="rgba(70, 80, 92, 0.35)",i.beginPath(),i.arc(g,m,_,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255, 255, 255, 0.45)",i.lineWidth=.8,i.beginPath(),i.arc(g-.5,m-.5,_,-Math.PI*.75,Math.PI*.25),i.stroke(),i.restore()}return new io(e)}setupEnvironment(){const e=new lu(.001,150,96,64);this.groundMat=new Qt({color:6841438,roughness:1,metalness:0,envMapIntensity:0,side:Qe,transparent:!0,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.groundMat.onBeforeCompile=n=>{n.uniforms.uForestActive=Sa.uForestActive,n.vertexShader=`
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
                #include <begin_vertex>
                float rDist = length(position.xy);

                // Uneven organic forest terrain topography (matches getForestElevation).
                // uForestActive gates this, and ONLY this now: it is what makes
                // the ground undulate to meet the trees, which getForestElevation
                // places on the same surface. The outward emergence ripple that
                // used to ride on it has been removed.
                float worldZ = -position.y;
                float clearingFactor = smoothstep(1.5, 12.0, rDist);
                float hill1 = sin(position.x * 0.045 + 0.5) * cos(worldZ * 0.040 + 0.8) * 0.65;
                float hill2 = sin(position.x * 0.095 - worldZ * 0.08) * 0.35;
                float hill3 = cos(position.x * 0.18 + worldZ * 0.15) * 0.18;
                float micro = sin(position.x * 0.38) * cos(worldZ * 0.35) * 0.08;
                float terrainHeight = (hill1 + hill2 + hill3 + micro) * clearingFactor * uForestActive;

                transformed.z += terrainHeight;
                `),n.vertexShader=n.vertexShader.replace("#include <worldpos_vertex>",`
                #include <worldpos_vertex>
                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                `),n.fragmentShader=`
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;

                // Fast organic 2D procedural noise for natural terrain texturing
                float groundHash(vec2 p) {
                    vec2 q = fract(p * vec2(123.34, 456.21));
                    q += dot(q, q + 45.32);
                    return fract(q.x * q.y);
                }

                float groundNoise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(
                        mix(groundHash(i + vec2(0.0, 0.0)), groundHash(i + vec2(1.0, 0.0)), u.x),
                        mix(groundHash(i + vec2(0.0, 1.0)), groundHash(i + vec2(1.0, 1.0)), u.x),
                        u.y
                    );
                }

                float groundFbm(vec2 p) {
                    float v = groundNoise(p) * 0.55;
                    p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.02 + vec2(3.1, 7.4);
                    v += groundNoise(p) * 0.30;
                    p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.05 + vec2(1.7, 4.3);
                    v += groundNoise(p) * 0.15;
                    return v;
                }
            
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
                #ifdef USE_MAP
                    vec2 baseUV = vGroundWorldPos.xz * ${z1.toFixed(6)};

                    // Three non-periodic sample coordinates at irrational rotation angles and scales
                    vec2 uv1 = baseUV;
                    vec2 uv2 = mat2(0.7071, -0.7071, 0.7071, 0.7071) * (baseUV * 1.37) + vec2(12.34, 56.78);
                    vec2 uv3 = mat2(0.8660, 0.5000, -0.5000, 0.8660) * (baseUV * 0.618) + vec2(91.23, 34.56);

                    // Organic blend masks derived from multi-octave continuous noise
                    float n1 = groundFbm(vGroundWorldPos.xz * 0.055);
                    float n2 = groundFbm(vGroundWorldPos.xz * 0.028 + vec2(15.7, 82.3));

                    // Smooth 3-way partition weights with zero repeating grid lines
                    float w1 = smoothstep(0.20, 0.75, n1);
                    float w2 = smoothstep(0.25, 0.80, n2) * (1.0 - w1 * 0.7);
                    float w3 = max(0.001, 1.0 - (w1 + w2));
                    float totalW = w1 + w2 + w3;
                    w1 /= totalW; w2 /= totalW; w3 /= totalW;

                    vec4 col1 = texture2D(map, uv1);
                    vec4 col2 = texture2D(map, uv2);
                    vec4 col3 = texture2D(map, uv3);

                    vec4 floorColor = col1 * w1 + col2 * w2 + col3 * w3;

                    // Subtle ecological color modulation across the terrain:
                    // Damp rich soil pockets, warm dry foliage patches, mossy undertones
                    float bioPatch = groundFbm(vGroundWorldPos.xz * 0.012 + vec2(43.1, 19.5));
                    vec3 dampHumus = vec3(0.88, 0.85, 0.80);
                    vec3 mossGreen = vec3(1.02, 1.09, 0.93);
                    vec3 dryLeaves = vec3(1.07, 1.02, 0.92);

                    vec3 biomeTint = mix(dampHumus, mix(mossGreen, dryLeaves, smoothstep(0.40, 0.70, bioPatch)), smoothstep(0.25, 0.55, bioPatch));
                    floorColor.rgb *= biomeTint;

                    diffuseColor *= floorColor;
                #endif
                `),n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`
                #include <dithering_fragment>
                float r = length(vGroundWorldPos.xz);

                // Forest floor: soft horizon fog dissolve.
                if (uForestActive > 0.01) {
                    // Infinite horizon blend.
                    //
                    // Mixing to fogColor alone cannot hide the rim: fogColor is a
                    // single colour, while the sky's horizon is now warm toward
                    // the sun and cool away from it, so on the anti-sun side the
                    // matched edge met an unmatched sky and drew a line. Fading
                    // alpha instead lets the actual sky through, which matches by
                    // construction from every bearing. The colour mix is kept as
                    // a first stage so the dissolve starts before the fade does.
                    #ifdef USE_FOG
                    float edgeFog = smoothstep(70.0, 140.0, r);
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, edgeFog);
                    #endif
                    float edgeAlpha = 1.0 - smoothstep(105.0, 149.5, r);
                    gl_FragColor.a *= edgeAlpha;
                    if (gl_FragColor.a <= 0.002) discard;
                } else {
                    // Natural planetary horizon illusion for gallery modes: solid ground for all paintings (r <= 112m), softly fades at perimeter
                    float edgeFade = 1.0 - smoothstep(112.0, 150.0, r);
                    gl_FragColor.a *= edgeFade;
                    if (gl_FragColor.a <= 0.002) discard;
                }
                `)};const t=new Ne(e,this.groundMat);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t),this.groundMesh=t,this.createSacredGeometry(),this.createCentralRock(),this.skySystem=Z1(1800,this.isMobile),this.scene.add(this.skySystem.skyRoot)}_toGurmukhi(e){const t=["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"];return String(e).replace(/[0-9]/g,n=>t[+n])}_randomDoorName(){return"duar-"+this._toGurmukhi(1+Math.floor(Math.random()*9))}_startClock(){const e=document.getElementById("clock"),t=document.getElementById("clock-time"),n=document.getElementById("clock-tz");if(n)try{n.textContent=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}if(e&&t){const a=()=>{e.classList.add("tz-visible"),clearTimeout(this._tzHideTimeout),this._tzHideTimeout=setTimeout(()=>e.classList.remove("tz-visible"),5e3)};t.addEventListener("mouseenter",a),t.addEventListener("touchstart",l=>{l.stopPropagation(),a()},{passive:!0}),t.addEventListener("click",l=>l.stopPropagation())}if(!t)return;const i=a=>String(a).padStart(2,"0"),r=a=>String(a).padStart(3,"0"),o=()=>{const a=new Date,l=`${i(a.getHours())} : ${i(a.getMinutes())} : ${i(a.getSeconds())} : ${r(a.getMilliseconds())}`;t.textContent=this._toGurmukhi(l)};o(),this._clockInterval=setInterval(o,40)}clearDoors(){this._occludedTrees&&this._occludedTrees.clear(),this.activeDoor=null,this.hoveredDoor=null,this._hideReticle(),this.doors.forEach(e=>{if(e.labelEl?.remove(),m1(e),e.isTree&&e.species){e.group.traverse(t=>{t.isInstancedMesh&&t.dispose()}),this.scene.remove(e.group);return}e.group.traverse(t=>{if(!t.isMesh)return;const n=t.geometry===s1||t.geometry===Dg||kg.has(t.geometry);t.geometry&&!n&&t.geometry.dispose(),t.material&&t.material!==Nu&&(t.material.map&&!e.isPainting&&t.material.map.dispose(),t.material.dispose())}),this.scene.remove(e.group)}),this.doors=[],this._hoverTargets=null,this._hoverOwner=null,g1()}_showCenterpiece(e){e&&(Ae.killTweensOf(e.scale),e.visible=!0,e===this.roseCenterpiece?(e.scale.set(.001,.001,.001),Ae.to(e.scale,{y:1,duration:2.2,ease:"power2.out",delay:.1}),Ae.to(e.scale,{x:1,z:1,duration:1.9,ease:"back.out(1.2)",delay:.4})):(e.scale.setScalar(.001),Ae.to(e.scale,{x:1,y:1,z:1,duration:.8,ease:"back.out(1.3)",delay:.2})))}_hideCenterpiece(e){!e||!e.visible||(Ae.killTweensOf(e.scale),Ae.to(e.scale,{x:.001,y:.001,z:.001,duration:.4,ease:"power2.in",onComplete:()=>{e.visible=!1}}))}async switchView(e,{keepCamera:t=!1}={}){if(this._switching||e===this.viewMode)return;this._switching=!0;const n=this.viewMode;if(this.viewMode=e,this._minDistanceFloor=t?this.camera.position.distanceTo(this.controls.target):null,n==="forest"&&e!=="forest"&&(Ae.killTweensOf(this,"sunAngle"),this._motionPausedByForest&&(this._motionPausedByForest=!1,this.setMotionPaused(!1))),this.instaBtn&&(this.instaBtn.style.display=e==="portfolio"?"inline-flex":"none"),this.randBtn&&(this.randBtn.style.display=e==="forest"?"none":"inline-flex"),this._updateWalkUI(),this.updateDockModeBtn&&this.updateDockModeBtn(),this.viewToggle){const o=Ea(e);this.viewToggle.textContent=o,this.viewToggle.setAttribute("aria-label",`Switch to ${o.toLowerCase()}`)}if(e==="portfolio")this.updateRingGeometries(!0),this.doors.forEach(o=>{o.isPainting&&sp(o)}),this.doors.filter(o=>o.isPainting).sort((o,a)=>this.camera.position.distanceTo(o.group.position)-this.camera.position.distanceTo(a.group.position)).slice(0,6).forEach(o=>Ma(o,xs.MID)),Ae.to(this.bloomPass,{threshold:.92,strength:.2,duration:.6});else if(e==="forest"){this.motionPaused||(this._motionPausedByForest=!0,this.setMotionPaused(!0));const o=Math.PI*2,a=((PE-this.sunAngle)%o+o)%o,l=a>Math.PI?a-o:a;Ae.killTweensOf(this,"sunAngle"),Math.abs(l)>.001&&Ae.to(this,{sunAngle:this.sunAngle+l,duration:DE,ease:"power2.inOut",overwrite:"auto"}),this.controls.autoRotate=!this.motionPaused,this.controls.autoRotateSpeed=vc.forest,this.controls.maxPolarAngle=Math.PI*.54,this.controls.minDistance=Math.min(2,this._minDistanceFloor??2),this.updateRingGeometries(!1),Ae.to(this.bloomPass,{threshold:.98,strength:.08,duration:.6})}else this.motionPaused||(this.controls.autoRotate=!0),this.controls.maxPolarAngle=Math.PI*.54,this.controls.minDistance=Math.min(.5,this._minDistanceFloor??.5),this.updateRingGeometries(!1),Ae.to(this.bloomPass,{threshold:this._bloomDefaults.threshold,strength:this._bloomDefaults.strength,duration:.6});if(this.rings&&this.rings.forEach(o=>{o.mesh.visible=e!=="forest"}),this.groundMat&&(e==="forest"?(this.groundMat.map=k1(),this.groundMat.transparent=!0,this.groundMat.polygonOffset=!1,this.groundMat.roughness=.95,this.groundMat.metalness=0,this.groundMat.needsUpdate=!0):(this.groundMat.transparent=!0,this.groundMat.polygonOffset=!0,this.groundMat.polygonOffsetFactor=1,this.groundMat.polygonOffsetUnits=1,this.groundMat.roughness=1,Sa.uForestActive.value>0?Ae.to(Sa.uForestActive,{value:0,duration:.5,onComplete:()=>{this.groundMat&&(this.groundMat.map=null,this.groundMat.needsUpdate=!0)}}):(this.groundMat.map=null,this.groundMat.needsUpdate=!0))),this.scene.fog){const o=e==="forest"?.0075:.002;Ae.to(this.scene.fog,{density:o,duration:.8})}const i=Pp(this)[e];[this.rock,this.sculpture,this.roseCenterpiece].forEach(o=>{o===i?this._showCenterpiece(o):this._hideCenterpiece(o)}),t?(this.closeAllDoors(),this.activeDoor=null,this._hideReticle(),this.ringMat&&Ae.to(this.ringMat,{opacity:.9,duration:4,ease:"power2.inOut"})):this.resetScene();const r=[...this.doors];await new Promise(o=>{if(!r.length)return o();const a=Ae.timeline({onComplete:o});r.slice().sort((l,c)=>l.group.position.lengthSq()-c.group.position.lengthSq()).forEach((l,c)=>{a.to(l.group.scale,{x:.001,y:.001,z:.001,duration:.32,ease:"power2.in"},c*.011)})}),this.clearDoors(),e==="portfolio"?await this.buildPortfolioDoors():e==="forest"?(Sa.uForestActive.value=1,this._pulseShadowUpdates(yp+xp+.5),await this.buildForest()):this.setupDoors(),e!=="forest"&&(this._pulseShadowUpdates(3.5),this.doors.slice().sort((o,a)=>o.group.position.lengthSq()-a.group.position.lengthSq()).forEach((o,a)=>{o.group.scale.setScalar(.001),Ae.to(o.group.scale,{x:1,y:1,z:1,duration:1.1,ease:"back.out(1.05)",delay:a*.045})})),this._switching=!1}async buildPortfolioDoors(){const e=await n1();if(!e.paintings.length){console.warn("No paintings in manifest — portfolio view is empty.");return}M1(y1(e.paintings)).forEach(({painting:n,ring:i,radius:r,x:o,z:a,width:l})=>{const c=new Ot;c.position.set(o,0,a),this.scene.add(c);const{panel:h,panelMaterial:u,height:d,centreY:p}=a1(c,n),f={group:c,data:n,panel:h,panelMaterial:u,width:l,height:d,centreY:p,ring:i,radius:r,isOpen:!1,isPainting:!0,portalHitbox:h};if(f.name=n.title||"",f.name){const g=document.createElement("div");g.className="door-label",g.textContent=f.name,document.body.appendChild(g),f.labelEl=g}this.doors.push(f)}),this.doors.forEach(n=>sp(n)),this.doors.slice().sort((n,i)=>this.camera.position.distanceTo(n.group.position)-this.camera.position.distanceTo(i.group.position)).slice(0,6).forEach(n=>Ma(n,xs.MID)),this._hoverTargets=null,!this.activeDoor&&this.viewMode==="portfolio"&&!this._introStarted&&(this._introOverview={camPos:new P(0,3,28.5),target:new P(0,1.6,0)},this._priorMaxDistance=this.controls.maxDistance,this.controls.maxDistance=Math.max(this._priorMaxDistance,Dp+60),this.camera.position.set(this._introOverview.camPos.x,Dp,this._introOverview.camPos.z),this.controls.target.copy(this._introOverview.target),this.camera.lookAt(this._introOverview.target),this._doorsReady=!0,this._maybeStartIntro())}_nextFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}_setupWalkPad(){const e=document.getElementById("walk-pad");if(!e)return;this.walkPad=e;const t={};e.querySelectorAll(".wp-btn").forEach(u=>{t[u.dataset.dir]=u}),t.jump=document.getElementById("wp-jump");const n=.22,i=Math.sin(Math.PI/8);let r=null,o=!1;const a=(u,d,p,f)=>{const g=this._padKeys;g.forward=u,g.back=d,g.left=p,g.right=f,t.forward?.classList.toggle("active",u),t.back?.classList.toggle("active",d),t.left?.classList.toggle("active",p),t.right?.classList.toggle("active",f)},l=u=>{const d=e.getBoundingClientRect(),p=(u.clientX-(d.left+d.width/2))/(d.width/2),f=(u.clientY-(d.top+d.height/2))/(d.height/2);return{nx:p,ny:f,mag:Math.hypot(p,f)}},c=u=>{const{nx:d,ny:p,mag:f}=l(u);if(f<n)return a(!1,!1,!1,!1);const g=d/f,m=p/f;a(-m>i,m>i,-g>i,g>i)},h=u=>{u.pointerId===r&&(u.stopPropagation(),r=null,o=!1,t.jump?.classList.remove("active"),a(!1,!1,!1,!1))};e.addEventListener("pointerdown",u=>{if(u.preventDefault(),u.stopPropagation(),r===null){if(r=u.pointerId,e.setPointerCapture(u.pointerId),this.dismissIntro(),l(u).mag<n){o=!0,t.jump?.classList.add("active"),this._jumpRequested=!0;return}c(u)}}),e.addEventListener("pointermove",u=>{u.pointerId!==r||o||(u.stopPropagation(),c(u))}),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h),e.addEventListener("lostpointercapture",h),this._releaseWalkPad=()=>{r=null,o=!1,a(!1,!1,!1,!1)}}setWalkEnabled(e){if(this.walkEnabled=!!e,this.walkEnabled)this.controls.autoRotate=!1;else{for(const n in this._walkKeys)this._walkKeys[n]=!1;this.viewMode!=="forest"&&(this.controls.autoRotate=!this.motionPaused)}const t=this.walkBtn;if(t){t.classList.toggle("is-on",this.walkEnabled),t.setAttribute("aria-pressed",String(this.walkEnabled));const n=this.walkEnabled?"Stop walking":this.isTouch?"Walk":"Walk · WASD";t.setAttribute("aria-label",n);const i=t.querySelector(".btn-tip");i&&(i.textContent=n)}this._updateWalkUI(),this.resetUIHideTimer()}_updateWalkUI(){const e=!!this.walkEnabled;this.walkPad&&(e&&this.isTouch?(this.walkPad.hidden=!1,requestAnimationFrame(()=>this.walkPad.classList.add("shown"))):(this.walkPad.classList.remove("shown"),this.walkPad.hidden=!0,this._releaseWalkPad?.()));const t=document.getElementById("clock"),n=document.getElementById("clock-hint");t&&n&&(e&&(n.textContent=this.isTouch?"Arrows to walk · Tap to jump":"WASD to walk · Space to jump"),t.classList.toggle("hint-visible",e))}_growTreeIn(e,t){const n=Math.hypot(e.position.x,e.position.z),i=Math.min(1,n/100)*yp+Math.sin(e.position.x*2.1)*.06,r=(performance.now()-t)/1e3;e.scale.set(.001,.001,.001),Ae.to(e.scale,{x:1,y:1,z:1,duration:xp,ease:"power2.out",delay:Math.max(0,i-r)})}async buildForest(){const e={banyan:{title:"Banyan Tree",meta:"Ficus benghalensis · Canopy 28m",description:"The majestic national tree of India, known for expansive aerial prop roots and immortal vitality."},peepal:{title:"Peepal / Bodhi Tree",meta:"Ficus religiosa · Bodhi Fig",description:"Venerated across ancient traditions as the tree of wisdom and enlightenment, with heart-shaped leaves."},mango:{title:"Mango Tree",meta:"Mangifera indica · Evergreen Canopy",description:"King of fruits in Punjabi folklore and Sanskrit literature, symbolizing prosperity and abundant life."},neem:{title:"Neem Tree",meta:"Azadirachta indica · Indian Margosa",description:"Renowned as nature's pharmacy, revered for cooling medicinal shade and enduring purity."}},t=V1(this.quality.treeCountScale).slice().sort((a,l)=>a.x*a.x+a.z*a.z-(l.x*l.x+l.z*l.z));await this._nextFrame();const n=performance.now();let i=n;for(let a=0;a<t.length;a++){a>0&&performance.now()-i>tE&&(await this._nextFrame(),i=performance.now());const{species:l,x:c,z:h,angle:u,seed:d,scale:p}=t[a],f=O1(l,{seed:d,scale:p}),g=Gr(c,h);f.position.set(c,g,h),f.rotation.y=u,this._growTreeIn(f,n),this.scene.add(f);const m=e[l]||{title:`${l.charAt(0).toUpperCase()+l.slice(1)} Tree`};this.doors.push({group:f,species:l,scale:p,title:m.title,name:m.title,meta:m.meta,description:m.description,isTree:!0,isFlora:!0,isOpen:!1,swayGroup:f.userData.swayGroup,swayAmplitude:f.userData.swayAmplitude,swayFreqMult:f.userData.swayFreqMult,swayPhase:Math.sin(d*12.9898)*Math.PI})}const{grass:r,shrubs:o}=B1();this.scene.add(r),this.doors.push({group:r,isTree:!0,isGrass:!0,isOpen:!1}),o.forEach(a=>{const l=Gr(a.position.x,a.position.z);a.position.y=l,this._growTreeIn(a,n),this.scene.add(a),this.doors.push({group:a,isTree:!0,isShrub:!0,isOpen:!1,swayGroup:a.userData.swayGroup,swayAmplitude:a.userData.swayAmplitude,swayFreqMult:a.userData.swayFreqMult,swayPhase:Math.sin(a.userData.seed*12.9898)*Math.PI})}),this._hoverTargets=null}focusPainting(e){if(this.isTraveling||this.isFlying||this._switching)return;this.dismissIntro(),Ma(e,xs.FULL,{urgent:!0});const t=new P;e.panel.getWorldPosition(t);const n=new P().subVectors(this.camera.position,t).setY(0).normalize();n.lengthSq()<1e-4&&n.set(0,0,1);const i=rp(e.width,e.height,this.camera),r=t.clone().addScaledVector(n,i);r.y=t.y,this.activeDoor=e,this.flyTo(r,t,1.6,()=>{this.controls.target.copy(t),this.controls.autoRotate=!1,this.activeDoor===e&&this._showReticle()})}focusFlora(e){if(this.isTraveling||this.isFlying||this._switching)return;this.dismissIntro();const t=e.group||e;t.updateMatrixWorld(!0);const n=new Zn;t.traverse(_=>{_.isMesh&&_.visible&&_.name!=="ContactShadow"&&(_.geometry.boundingBox||_.geometry.computeBoundingBox(),n.expandByObject(_))}),n.isEmpty()&&n.setFromObject(t);const i=n.getSize(new P),r=n.getCenter(new P),o=Math.max(i.y,.5),a=Math.max(i.x,i.z,.5),l=this.camera.fov*Math.PI/180,c=Math.max(this.camera.aspect,.35),h=o/2/Math.tan(l/2),u=a/2/(Math.tan(l/2)*c),d=Math.max(h,u)*1.25,p=new P(r.x,e.isRose?r.y:n.min.y+o*.48,r.z);let f=new P().subVectors(this.camera.position,p);f.y=0,f.lengthSq()<1e-4?f.set(0,0,1):f.normalize();const g=p.clone().addScaledVector(f,d),m=Gr(g.x,g.z);e.isRose?g.y=Math.max(1.35,p.y+d*.28):g.y=Math.max(m+1.8,p.y),this.activeDoor=e,this.flyTo(g,p,1.8,()=>{this.controls.target.copy(p),this.controls.autoRotate=!1,this.activeDoor===e&&this._showReticle()})}_updateForestFocusOcclusion(){if(this.viewMode!=="forest"||!this.activeDoor||this.isFlying){this._occludedTrees&&this._occludedTrees.size>0&&(this._occludedTrees.forEach(u=>{if(u.group){u.group.visible=!0;const d=u.scale||1;Ae.killTweensOf(u.group.scale),Ae.to(u.group.scale,{x:d,y:d,z:d,duration:.5,ease:"power2.out"})}}),this._occludedTrees.clear());return}this._occludedTrees||(this._occludedTrees=new Set);const e=this.activeDoor.group||this.activeDoor;if(!e)return;const t=this.camera.position,n=e.position,i=n.x-t.x,r=n.z-t.z,o=i*i+r*r;if(o<1e-4)return;const a=Math.sqrt(o),l=i/a,c=r/a,h=new Set;for(let u=0;u<this.doors.length;u++){const d=this.doors[u];if(!d.isTree||!d.group||d===this.activeDoor||d.group===e||d.isGrass)continue;const p=d.group.position,f=p.x-t.x,g=p.z-t.z,m=f*l+g*c,_=m/a,x=f-m*l,M=g-m*c,v=Math.sqrt(x*x+M*M),T=Math.sqrt(f*f+g*g);_>.15&&_<.85&&v<2&&T<3.5&&h.add(d)}this._occludedTrees.forEach(u=>{if(!h.has(u)&&u.group){u.group.visible=!0;const d=u.scale||1;Ae.killTweensOf(u.group.scale),Ae.to(u.group.scale,{x:d,y:d,z:d,duration:.5,ease:"power2.out"})}}),h.forEach(u=>{u.group&&!this._occludedTrees.has(u)&&(Ae.killTweensOf(u.group.scale),Ae.to(u.group.scale,{x:.001,y:.001,z:.001,duration:.4,ease:"power2.in",onComplete:()=>{h.has(u)&&(u.group.visible=!1)}}))}),this._occludedTrees=h}setupDoors(){const e=new mu(this.loadingManager),t=5,n=15,i=8;for(let r=0;r<t;r++){const o=n+r*i;ds.doors.forEach((a,l)=>{const c=l*(Math.PI*2)/ds.doors.length,h=r%2===1?Math.PI/ds.doors.length:0,u=c+h,d=Math.sin(u)*o,p=Math.cos(u)*o,f=new Ot;f.position.set(d,0,p),this.scene.add(f);const g=new Ot;g.position.set(-.75,0,0),f.add(g);const m={group:f,data:a,hinge:g,isOpen:!1};this.createDoorFrame(f,a);const _=()=>{const M=new Ne(new qn(1.5,3.6,.2),new Qt({color:1118481,roughness:.4,metalness:.2}));M.position.set(.75,1.78,0),M.castShadow=!0,M.receiveShadow=!0,g.add(M),m.panel=M};a.modelPath?e.load(In(a.modelPath),M=>{const v=M.scene,T=v.getObjectByName("Door")||v;v.traverse(w=>{w.isMesh&&(w.material=new Qt({color:6710886,roughness:.4,metalness:.2}),w.castShadow=!0,w.receiveShadow=!0)}),T.position.set(.75,-.02,0),g.add(T),m.panel=T},null,_):_(),m.portalHitbox=f.userData.portalHitbox,m.portalMaterial=f.userData.portalMaterial;const x=document.createElement("div");x.className="door-label",m.name=this._randomDoorName(),x.textContent=m.name,document.body.appendChild(x),m.labelEl=x,this.doors.push(m)})}this._hoverTargets=null}createDoorFrame(e,t){const n=new Qt({color:2236962,roughness:.5,metalness:.5,envMapIntensity:2.7}),i=new qn(.1,3.6,.1),r=new Ne(i,n);r.position.set(-.8,1.78,0),r.castShadow=!0,r.name="Frame",e.add(r);const o=new Ne(i,n);o.position.set(.8,1.78,0),o.castShadow=!0,o.name="Frame",e.add(o);const a=new Ne(new qn(1.7,.1,.1),n);a.position.set(0,3.58,0),a.castShadow=!0,a.name="Frame",e.add(a);const l=new Ne(new qn(1.7,.12,.1),n);l.position.set(0,.04,0),l.castShadow=!0,l.receiveShadow=!0,l.name="Frame",e.add(l);const c=new En(1.5,3.5),h=new an({color:16711680,transparent:!0,opacity:0,visible:!0,side:Qe}),u=new Ne(c,h);u.position.set(0,1.75,.01),u.name="PortalHitbox",e.add(u),e.userData.portalHitbox=u;const d=this.createPortalMaterial(t.color),p=new Ne(new En(1.5,3.5),d);p.position.set(0,1.75,0),p.name="PortalSurface",p.renderOrder=2,e.add(p),e.userData.portalMaterial=d}createWavyRingGeometry(e,t=60,n=.35,i=.25,r=720){const o=new At,a=[],l=[],c=[],h=i/2;for(let u=0;u<=r;u++){const d=u/r*Math.PI*2,p=Math.sin(d*t)*n,f=e+p,g=f-h,m=f+h,_=Math.cos(d),x=Math.sin(d);a.push(_*g,x*g,0),l.push(u/r,0),a.push(_*m,x*m,0),l.push(u/r,1)}for(let u=0;u<r;u++){const d=u*2,p=u*2+1,f=(u+1)*2,g=(u+1)*2+1;c.push(d,f,p),c.push(p,f,g)}return o.setAttribute("position",new ct(a,3)),o.setAttribute("uv",new ct(l,2)),o.setIndex(c),o.computeVertexNormals(),o}writeRingWave(e,t){const n=e.mesh.geometry.getAttribute("position"),i=n.array,r=e.segments,o=Np*t,a=(Aa+(Fp-Aa)*t)/2;let l=0;for(let c=0;c<=r;c++){const h=c/r*Math.PI*2,u=e.radius+Math.sin(h*Ip)*o,d=Math.cos(h),p=Math.sin(h),f=u-a,g=u+a;i[l++]=d*f,i[l++]=p*f,i[l++]=0,i[l++]=d*g,i[l++]=p*g,i[l++]=0}n.needsUpdate=!0}updateRingGeometries(e){if(!this.rings)return;const t=e?1:0;this._ringWaveTweens&&this._ringWaveTweens.forEach(n=>n.kill()),this._ringWaveTweens=this.rings.map((n,i)=>Ae.to(n,{waveT:t,duration:1.1,delay:i*.055,ease:"power2.inOut",onUpdate:()=>this.writeRingWave(n,n.waveT)}))}createSacredGeometry(){this.ringMat=new Qt({color:16764995,metalness:.88,roughness:.18,envMapIntensity:2.7,side:Qe,depthWrite:!0,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.rings=[];const e=15,t=8,n=this.viewMode==="portfolio";for(let i=0;i<10;i++){const r=e+i*t,o=n?1:0,a=this.createWavyRingGeometry(r,Ip,Np*o,Aa+(Fp-Aa)*o,Lp),l=new Ne(a,this.ringMat);l.rotation.x=-Math.PI/2,l.position.y=.002,l.receiveShadow=!0;const c=(i%2===0?1:-1)*(5e-4+i*8e-5);this.scene.add(l),this.rings.push({mesh:l,speed:c,radius:r,segments:Lp,waveT:o})}}createCentralRock(){const e=new Mo(1e-4,1.5,3,128,1,!1);e.translate(0,1.5,0);const t=new Qt({color:16777215,metalness:.95,roughness:.1,envMapIntensity:2.7});this.rock=new Ne(e,t),this.rock.castShadow=!0,this.rock.receiveShadow=!0,this.rock.position.y=0,this.rock.visible=!1;const n=new En(3.6,3.6),i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(0, 0, 0, 0.94)"),o.addColorStop(.35,"rgba(0, 0, 0, 0.70)"),o.addColorStop(.7,"rgba(0, 0, 0, 0.25)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),r.fillStyle=o,r.fillRect(0,0,128,128);const a=new an({map:new io(i),transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new Ne(n,a);l.rotation.x=-Math.PI/2,l.position.y=.003,l.renderOrder=1,this.rock.add(l),this.scene.add(this.rock),this.sculpture=G1(this.loadingManager),this.sculpture.visible=!1,this.scene.add(this.sculpture),this.roseCenterpiece=H1(4242,{dedicatedShadowLight:this.quality.secondaryShadowLights}),this.roseCenterpiece.visible=!1,this.scene.add(this.roseCenterpiece),this.roseDoor={group:this.roseCenterpiece,isRose:!0,isFlora:!0,title:"Duar 3.0",name:"Duar 3.0",meta:"Rosa damascena · Living Centerpiece",description:"A flourishing velvety ruby rose resting peacefully at the sanctuary center."}}setupDustMotes(){const t=new At,n=new Float32Array(300);for(let i=0;i<100;i++)n[i*3]=(Math.random()-.5)*120,n[i*3+1]=Math.random()*10,n[i*3+2]=(Math.random()-.5)*120;t.setAttribute("position",new Xt(n,3)),this.dust=new su(t,new il({color:16777215,size:.05,transparent:!0,opacity:.3,sizeAttenuation:!0})),this.scene.add(this.dust)}_fovForAspect(e){const t=ds.scene.camera.fov,n=4/3;if(e>=n)return t;const i=qe.degToRad(t)/2,r=Math.atan(Math.tan(i)*n),o=Math.atan(Math.tan(r)/Math.max(e,.35));return qe.clamp(qe.radToDeg(o)*2,t,58)}applyCameraFraming(){const e=window.innerWidth/window.innerHeight;this.camera.aspect=e,this.camera.fov=this._fovForAspect(e),this.camera.updateProjectionMatrix()}onResize(){if(this.applyCameraFraming(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),!this.activeDoor&&!this.isTraveling&&this.controls&&!this._switching){const e=this.getDefaultOverview(),t=this.camera.position.distanceTo(e.camPos);t>.5&&t<14&&this.flyTo(e.camPos,e.target,.6)}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this._hoverDirty=!0}_applyWalk(e){if(!this.walkEnabled||this.isTraveling||this.isFlying)return;const t=this._walkKeys,n=this._padKeys,i=t.forward||n.forward,r=t.back||n.back,o=t.left||n.left,a=t.right||n.right;if(!(i||r||o||a))return;this.activeDoor&&this._releaseFocus(),bi.set(0,0,-1).applyQuaternion(this.camera.quaternion),bi.y=0,bi.lengthSq()<1e-6&&bi.set(0,0,-1),bi.normalize(),pc.set(bi.z,0,-bi.x);const l=$1*(t.boost?J1:1)*e;hn.set(0,0,0),i&&hn.add(bi),r&&hn.sub(bi),a&&hn.add(pc),o&&hn.sub(pc),hn.lengthSq()>1e-6&&hn.normalize().multiplyScalar(l);const c=this.controls.target.x+hn.x,h=this.controls.target.z+hn.z,u=Math.hypot(c,h);if(u>vp){const d=Math.hypot(this.controls.target.x,this.controls.target.z);u>d&&hn.multiplyScalar(Math.max(0,vp-d)/(u-d||1))}this.camera.position.x+=hn.x,this.camera.position.z+=hn.z,this.controls.target.x+=hn.x,this.controls.target.z+=hn.z,this.dismissIntro()}_applyJump(e,t){this._jumpVelocity!==0&&(this.camera.position.y+=this._jumpVelocity*e,this._jumpVelocity-=eE*e),this.camera.position.y<t&&(this.camera.position.y=t,this._jumpVelocity=0),this._jumpRequested&&(this._jumpRequested=!1,this.walkEnabled&&this._jumpVelocity===0&&this.camera.position.y<=t+1e-4&&(this._jumpVelocity=Q1,this.activeDoor&&this._releaseFocus(),this.dismissIntro()))}animate(){this._rafId=requestAnimationFrame(()=>this.animate()),this.time+=.001;const e=performance.now(),t=Math.min((e-(this._lastFrame||e))/1e3,.1);if(this._lastFrame=e,this.elapsed+=t,this.sunMesh&&this.moonMesh&&this.skySystem){this.motionPaused||(this.sunAngle+=this.daySpeed*6*t);const f=this.skySystem.update(this.sunAngle,this.elapsed,this.sunDist);this._sky=f,this.sunMesh.position.copy(f.cel.sunPos),this.moonMesh.position.copy(f.cel.moonPos),fc.copy(f.cel.sunPos).normalize().multiplyScalar(350),Wr.copy(f.cel.moonPos).normalize().multiplyScalar(350),this.sunLight.position.copy(fc),this.moonLight.position.copy(Wr),this.moonMesh.lookAt(0,0,0);const g=qe.smoothstep(f.cel.moonAlt,0,.06);this.moonMesh.material.opacity=g,this.moonMesh.visible=g>.001;const m=qe.smoothstep(f.cel.sunAlt,0,.06);this.sunMesh.material.opacity=m,this.sunMesh.visible=m>.001;const _=f.sunW,x=1-_,M=Math.sin(Math.max(.05,f.sunAlt)),v=this.viewMode==="forest"?1.75:2.5,T=this.viewMode==="forest"?1.1:1.8;this.sunLight.intensity=(v+M*T)*_;const w=this.viewMode==="forest"?.6:1.5;this.moonLight.intensity=Math.max(w,f.mH*w*1.33)*x;const C=_>.02,y=x>.02;if(x>.001){const N=f.cel.moonPos.x||120,F=f.cel.moonPos.z||120,Z=Math.max(160,Math.abs(f.cel.moonPos.y));Wr.set(N,Z,F).normalize().multiplyScalar(320),this.moonLight.position.copy(Wr)}const b=Math.abs(this.sunAngle-(this._lastShadowSunAngle||0)),U=C!==this._sunCasting||y!==this._moonCasting;this.sunLight.castShadow=C,this.moonLight.castShadow=y,this._sunCasting=C,this._moonCasting=y,(b>.008||U)&&(this._lastShadowSunAngle=this.sunAngle,this.renderer.shadowMap.needsUpdate=!0);const A=(this.sunAngle%(Math.PI*2)+Math.PI*2)%(Math.PI*2),D=Math.PI/3;if(A>=0&&A<=Math.PI){const N=D,F=Math.PI-D;if(A<N||A>F){const Z=A<N?1-A/N:(A-F)/D,J=A<N?uE:hE;this.sunMesh.material.color.lerpColors(wp,cE,Z),this.sunLight.color.lerpColors(Ep,J,Z)}else this.sunMesh.material.color.copy(wp),this.sunLight.color.copy(Ep)}if(A>Math.PI&&A<Math.PI*2){const N=Math.PI+D,F=Math.PI*2-D;if(A<N||A>F){const Z=A<N?1-(A-Math.PI)/D:(A-F)/D;this.moonMesh.material.color.lerpColors(Ap,dE,Z),this.moonMesh.material.emissive.copy(this.moonMesh.material.color),this.moonLight.color.lerpColors(Cp,fE,Z)}else this.moonMesh.material.color.copy(Ap),this.moonMesh.material.emissive.copy(pE),this.moonLight.color.copy(Cp)}const I=Math.cos(A)*.5+.5;if(mc.lerpColors(sE,nE,I),gc.lerpColors(rE,iE,I),_c.lerpColors(aE,oE,I),f.sunAlt>.17)ba.copy(Mp),Xr.copy(Sp),Ta.copy(bp);else if(f.sunAlt>-.05){const N=(.17-f.sunAlt)/.22;ba.lerpColors(Mp,mc,N),Xr.lerpColors(Sp,gc,N),Ta.lerpColors(bp,_c,N)}else{const N=Math.min(1,(-.05-f.sunAlt)/.2);ba.lerpColors(mc,lE,N),Xr.lerpColors(gc,Tp,N),Ta.lerpColors(_c,Tp,N)}if(this.skySystem&&this.skySystem.skyDomeMat){const N=this.skySystem.skyDomeMat.uniforms;N.uZenithColor.value.copy(ba),N.uHorizonColor.value.copy(Xr),N.uHorizonOpposite&&N.uHorizonOpposite.value.copy(Ta)}this.scene.background=null,this.scene.fog&&this.scene.fog.color.copy(Xr);const H=this.viewMode==="forest"?yE:_E,z=this.viewMode==="forest"?ME:vE;if(this.hemiLight.intensity=this.viewMode==="forest"?.028+f.sH*.04+f.mH*.04:.06+f.sH*.05+f.mH*.11,this.hemiLight.color.lerpColors(mE,gE,f.sH),this.hemiLight.groundColor.lerpColors(H,z,f.sH),this.groundMat){const N=Math.PI/2,F=this.viewMode==="forest",Z=F?RE:wE,J=F?EE:SE,ce=F?AE:bE,fe=F?CE:TE;if(A>=0&&A<N){const se=A/N;this.groundMat.color.lerpColors(Z,J,se)}else if(A>=N&&A<Math.PI){const se=(A-N)/N;this.groundMat.color.lerpColors(J,ce,se)}else if(A>=Math.PI&&A<Math.PI*1.5){const se=(A-Math.PI)/N;this.groundMat.color.lerpColors(ce,fe,se)}else{const se=(A-Math.PI*1.5)/N;this.groundMat.color.lerpColors(fe,Z,se)}}}!this.motionPaused&&this.rings&&this.rings.forEach(f=>f.mesh.rotation.z+=f.speed),this.rock&&this.rock.visible&&(this.viewMode==="forest"?this.rock.visible=!1:(this.rock.position.y=0,this.rock.rotation.set(0,0,0)));const n=Math.atan2(this.camera.position.x,this.camera.position.z);this._lastCamAngle===void 0&&(this._lastCamAngle=n);let i=n-this._lastCamAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this._lastCamAngle=n;const r=i/Math.max(.001,t),o=Math.abs(r);this._lastCamPos||(this._lastCamPos=this.camera.position.clone());const a=this.camera.position.distanceTo(this._lastCamPos);this._lastCamPos.copy(this.camera.position);const l=a/Math.max(.001,t),c=Math.max(0,o-.28)*1.6,h=Math.max(0,(l-2.2)*.12),u=this._isPointerDown?Math.max(0,(this._pointerSpeed-280)*.003):0,d=Math.min(2,Math.max(c,h,u));this._forestDragMotion===void 0&&(this._forestDragMotion=0);const p=d>this._forestDragMotion?.22:.045;if(this._forestDragMotion=qe.lerp(this._forestDragMotion,d,p),this._forestDragMotion<.001&&(this._forestDragMotion=0),this._updateWindEnvelope(t),this.roseCenterpiece&&this.roseCenterpiece.visible){this.roseCenterpiece.position.y=0,this.roseCenterpiece.rotation.y=0;const f=this.roseCenterpiece.userData.swayGroup;if(f){const _=this.roseCenterpiece.userData.swayAmplitude,x=this.roseCenterpiece.userData.swayFreqMult??1,M=this._forestDragMotion;f.rotation.z=Math.sin(this.time*24*x)*_*M,f.rotation.x=Math.cos(this.time*18*x+1.3)*_*.6*M}const g=this.roseCenterpiece.userData.motes;g&&(g.rotation.y=this.time*.25);const m=this.roseCenterpiece.userData.shadowLight;if(m&&this._sky){const _=this._sky.cel;if(_.sunAlt>.01){const x=fc.copy(_.sunPos).normalize();m.position.set(x.x*12,Math.max(x.y*12,1.5),x.z*12),m.intensity=Math.min(2.2,Math.max(.2,_.sunAlt*3.2)),m.color.set(16773832)}else{const x=Wr.copy(_.moonPos).normalize();m.position.set(x.x*12,Math.max(x.y*12,1.5),x.z*12),m.intensity=Math.min(.55,Math.max(.06,_.moonAlt*1.2)),m.color.set(10534630)}}}if(this.viewMode==="forest"){S1(this.time*24,this._windAmbient+this._forestDragMotion*.85);const f=qe.clamp(this.sunLight.intensity/2,0,1),g=qe.clamp(this.moonLight.intensity/1.4,0,1)*.55,_=f>=g?this.sunLight:this.moonLight,x=Math.abs(f-g);Rp.copy(_.position).normalize(),b1(Rp,this.camera,x)}if(this.sculpture&&this.sculpture.visible&&(this.sculpture.position.y=0,this.sculpture.rotation.set(0,0,0),this.sculpture.userData&&this.sculpture.userData.threadUniforms)){const f=this.sculpture.userData.threadUniforms;f.uTime.value=this.time,this._threadMotion===void 0&&(this._threadMotion=0);const g=Math.min(1.8,o*1.3),m=g>this._threadMotion?.14:.05;this._threadMotion=qe.lerp(this._threadMotion,g,m),this._threadMotion<5e-4&&(this._threadMotion=0),f.uMotion.value=this._threadMotion;const _=Math.sign(r)||1,x=-Math.sin(n)*_,M=Math.cos(n)*_;this._threadDrag||(this._threadDrag=new te(0,0));const v=x*Math.min(1,o*.7),T=M*Math.min(1,o*.7),w=o>.01?.12:.05;this._threadDrag.x=qe.lerp(this._threadDrag.x,v,w),this._threadDrag.y=qe.lerp(this._threadDrag.y,T,w),this._threadDrag.lengthSq()<1e-4&&this._threadDrag.set(0,0),f.uDrag&&f.uDrag.value.copy(this._threadDrag)}if(this.viewMode==="portfolio"&&this._sky&&this.updatePaintingLight(this._sky),r1(this.sunAngle,this.ringMat),this.viewMode==="portfolio"&&(!this._lastTexCheck||e-this._lastTexCheck>200)){this._lastTexCheck=e;const f=this.camera.position;mp.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),pp.setFromProjectionMatrix(mp);const g=Ug*2.5,m=[];for(const _ of this.doors){if(!_.isPainting||(_.group.getWorldPosition(dc),!pp.containsPoint(dc)))continue;h1(_);const x=f.distanceTo(dc);x<g&&m.push({door:_,dist:x})}m.sort((_,x)=>_.dist-x.dist);for(let _=0;_<Math.min(m.length,3);_++)Ma(m[_].door,xs.MID)}if(this.doors.forEach(f=>{f.portalMaterial&&(f.portalMaterial.uniforms.uTime.value=this.time*2)}),this.updateLabels(),this.dust){const f=this.dust.geometry.attributes.position.array,g=this.isTraveling?18:1;for(let m=0;m<f.length;m+=3)this.isTraveling?(f[m+2]+=.25*g,f[m+2]>60&&(f[m+2]=-60)):f[m+1]+=Math.sin(this.time*5+f[m])*.002;this.dust.geometry.attributes.position.needsUpdate=!0}if(this.isTraveling||this.doors.forEach(f=>{if(f.isTree){f.swayGroup&&f.swayGroup.rotation.set(0,0,0);return}f.group.lookAt(this.camera.position.x,f.group.position.y,this.camera.position.z)}),this._hoverDirty&&(this._hoverDirty=!1,this.checkHover()),this.viewMode==="forest"){this._updateForestFocusOcclusion(),this.controls.autoRotate=!1,this.controls.maxPolarAngle=Math.PI*.54,this.controls.minDistance=2,this._applyWalk(t),this.controls.update();const f=Gr(this.camera.position.x,this.camera.position.z);this._applyJump(t,f+.75)}else this._occludedTrees&&this._occludedTrees.size>0&&(this._occludedTrees.forEach(f=>{f.group&&(f.group.visible=!0)}),this._occludedTrees.clear()),this.controls.maxPolarAngle=Math.PI*.54,this.controls.minDistance=.5,this.walkEnabled&&(this.controls.autoRotate=!1),this._applyWalk(t),this.controls.update(),this._applyJump(t,.4);this.viewMode==="forest"?this.renderer.render(this.scene,this.camera):this.composer.render()}}new FE;"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(In("sw.js")).then(t=>{console.log("SW registered:",t),t.waiting&&t.waiting.postMessage({type:"SKIP_WAITING"}),setInterval(()=>{t.update()},60*1e3),t.onupdatefound=()=>{const n=t.installing;n!=null&&(n.onstatechange=()=>{n.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.waiting&&t.waiting.postMessage({type:"SKIP_WAITING"})):console.log("Content is cached for offline use."))})}}).catch(t=>{console.log("SW registration failed:",t)});const s=!!navigator.serviceWorker.controller;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||!s||(e=!0,window.location.reload())})});
