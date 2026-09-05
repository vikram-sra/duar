const nr={ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fg=0,zu=1,Og=2,Sa=1,Sp=2,Yr=3,Ri=0,Kt=1,vt=2,li=0,Ss=1,co=2,Gu=3,Hu=4,Bg=5,gs=100,kg=101,zg=102,Gg=103,Hg=104,Vg=200,Wg=201,Xg=202,Yg=203,fc=204,dc=205,qg=206,jg=207,Kg=208,Zg=209,Jg=210,$g=211,Qg=212,e0=213,t0=214,pc=0,mc=1,gc=2,lr=3,_c=4,vc=5,xc=6,yc=7,Ph=0,n0=1,i0=2,ci=0,bp=1,Tp=2,wp=3,Dh=4,Ep=5,Ap=6,Cp=7,Vu="attached",s0="detached",Rp=300,As=301,cr=302,sl=303,rl=304,qa=306,Kn=1e3,bn=1001,Ia=1002,Ot=1003,Pp=1004,qr=1005,Tt=1006,ba=1007,ri=1008,Mn=1009,Dp=1010,Lp=1011,ho=1012,Lh=1013,hi=1014,In=1015,En=1016,Ih=1017,Nh=1018,uo=1020,Ip=35902,Np=35899,Up=1021,Fp=1022,Nn=1023,Pi=1026,xs=1027,Uh=1028,Fh=1029,hr=1030,Oh=1031,Bh=1033,Ta=33776,wa=33777,Ea=33778,Aa=33779,Mc=35840,Sc=35841,bc=35842,Tc=35843,wc=36196,Ec=37492,Ac=37496,Cc=37488,Rc=37489,Pc=37490,Dc=37491,Lc=37808,Ic=37809,Nc=37810,Uc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Gc=37817,Hc=37818,Vc=37819,Wc=37820,Xc=37821,Yc=36492,qc=36494,jc=36495,Kc=36283,Zc=36284,Jc=36285,$c=36286,fo=2300,po=2301,ol=2302,Wu=2303,Xu=2400,Yu=2401,qu=2402,r0=2500,o0=0,Op=1,Qc=2,a0=3200,Bp=3201,kh=0,l0=1,Vi="",Mt="srgb",an="srgb-linear",Na="linear",nt="srgb",Ns=7680,ju=519,c0=512,h0=513,u0=514,zh=515,f0=516,d0=517,Gh=518,p0=519,eh=35044,Ku="300 es",oi=2e3,mo=2001;function m0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function g0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _0(){const s=go("canvas");return s.style.display="block",s}const Zu={};function Ua(...s){const e="THREE."+s.shift();console.log(e,...s)}function kp(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Te(...s){s=kp(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Re(...s){s=kp(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Fa(...s){const e=s.join(" ");e in Zu||(Zu[e]=!0,Te(...s))}function v0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const x0={[pc]:mc,[gc]:xc,[_c]:yc,[lr]:vc,[mc]:pc,[xc]:gc,[yc]:_c,[vc]:lr};class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const eo=Math.PI/180,ur=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ze(s,e,t){return Math.max(e,Math.min(t,s))}function Hh(s,e){return(s%e+e)%e}function y0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function M0(s,e,t){return s!==e?(t-s)/(e-s):0}function to(s,e,t){return(1-t)*s+t*e}function S0(s,e,t,n){return to(s,e,1-Math.exp(-t*n))}function b0(s,e=1){return e-Math.abs(Hh(s,e*2)-e)}function T0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function w0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function E0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A0(s,e){return s+Math.random()*(e-s)}function C0(s){return s*(.5-Math.random())}function R0(s){s!==void 0&&(Ju=s);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(s){return s*eo}function D0(s){return s*ur}function L0(s){return(s&s-1)===0&&s!==0}function I0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function N0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function U0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:eo,RAD2DEG:ur,generateUUID:On,clamp:ze,euclideanModulo:Hh,mapLinear:y0,inverseLerp:M0,lerp:to,damp:S0,pingpong:b0,smoothstep:T0,smootherstep:w0,randInt:E0,randFloat:A0,randFloatSpread:C0,seededRandom:R0,degToRad:P0,radToDeg:D0,isPowerOfTwo:L0,ceilPowerOfTwo:I0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:U0,normalize:it,denormalize:Vn};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+_*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new P,$u=new mn;class ke{constructor(e,t,n,i,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],M=i[4],y=i[7],T=i[2],w=i[5],A=i[8];return r[0]=o*_+a*v+l*T,r[3]=o*m+a*M+l*w,r[6]=o*g+a*y+l*A,r[1]=c*_+h*v+u*T,r[4]=c*m+h*M+u*w,r[7]=c*g+h*y+u*A,r[2]=f*_+d*v+p*T,r[5]=f*m+d*M+p*w,r[8]=f*g+d*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new ke,Qu=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){const s={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?Na:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[an]:{primaries:e,whitePoint:n,transfer:Na,toXYZ:Qu,fromXYZ:ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Qu,fromXYZ:ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),s}const Ye=F0();function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class O0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=go("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B0=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cl(i[o].image)):r.push(cl(i[o]))}else r=cl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?O0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let k0=0;const hl=new P;class zt extends Ps{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=bn,i=bn,r=Tt,o=ri,a=Nn,l=Mn,c=zt.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=On(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Rp;zt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,T=(g+1)/2,w=(h+f)/4,A=(u+_)/4,x=(p+m)/4;return M>y&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=w/n,r=A/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=x/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=x/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends Ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new zt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends z0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zp extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G0 extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ie{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,p,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H0,e,V0)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(n,vn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(n,vn)),Ui.normalize(),Oo.crossVectors(vn,Ui),i[0]=Ui.x,i[4]=Oo.x,i[8]=vn.x,i[1]=Ui.y,i[5]=Oo.y,i[9]=vn.y,i[2]=Ui.z,i[6]=Oo.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],M=n[7],y=n[11],T=n[15],w=i[0],A=i[4],x=i[8],S=i[12],U=i[1],C=i[5],D=i[9],I=i[13],G=i[2],k=i[6],z=i[10],O=i[14],J=i[3],$=i[7],he=i[11],de=i[15];return r[0]=o*w+a*U+l*G+c*J,r[4]=o*A+a*C+l*k+c*$,r[8]=o*x+a*D+l*z+c*he,r[12]=o*S+a*I+l*O+c*de,r[1]=h*w+u*U+f*G+d*J,r[5]=h*A+u*C+f*k+d*$,r[9]=h*x+u*D+f*z+d*he,r[13]=h*S+u*I+f*O+d*de,r[2]=p*w+_*U+m*G+g*J,r[6]=p*A+_*C+m*k+g*$,r[10]=p*x+_*D+m*z+g*he,r[14]=p*S+_*I+m*O+g*de,r[3]=v*w+M*U+y*G+T*J,r[7]=v*A+M*C+y*k+T*$,r[11]=v*x+M*D+y*z+T*he,r[15]=v*S+M*I+y*O+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*d-c*f,M=a*d-c*u,y=a*f-l*u,T=o*d-c*h,w=o*f-l*h,A=o*u-a*h;return t*(_*v-m*M+g*y)-n*(p*v-m*T+g*w)+i*(p*M-_*T+g*A)-r*(p*y-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*a-n*o,M=t*l-i*o,y=t*c-r*o,T=n*l-i*a,w=n*c-r*a,A=i*c-r*l,x=h*_-u*p,S=h*m-f*p,U=h*g-d*p,C=u*m-f*_,D=u*g-d*_,I=f*g-d*m,G=v*I-M*D+y*C+T*U-w*S+A*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/G;return e[0]=(a*I-l*D+c*C)*k,e[1]=(i*D-n*I-r*C)*k,e[2]=(_*A-m*w+g*T)*k,e[3]=(f*w-u*A-d*T)*k,e[4]=(l*U-o*I-c*S)*k,e[5]=(t*I-i*U+r*S)*k,e[6]=(m*y-p*A-g*M)*k,e[7]=(h*A-f*y+d*M)*k,e[8]=(o*D-a*U+c*x)*k,e[9]=(n*U-t*D-r*x)*k,e[10]=(p*w-_*y+g*v)*k,e[11]=(u*y-h*w-d*v)*k,e[12]=(a*S-o*C-l*x)*k,e[13]=(t*C-n*S+i*x)*k,e[14]=(_*M-p*T-m*v)*k,e[15]=(h*T-u*M+f*v)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,_=o*h,m=o*u,g=a*u,v=l*c,M=l*h,y=l*u,T=n.x,w=n.y,A=n.z;return i[0]=(1-(_+g))*T,i[1]=(d+y)*T,i[2]=(p-M)*T,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+g))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(p+M)*A,i[9]=(m-v)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Fs.set(i[0],i[1],i[2]).length();const a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),zn.copy(this);const c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=oi,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===mo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=oi,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===oi)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===mo)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fs=new P,zn=new Ie,H0=new P(0,0,0),V0=new P(1,1,1),Ui=new P,Oo=new P,vn=new P,tf=new Ie,nf=new mn;class Zn{constructor(e=0,t=0,n=0,i=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const sf=new P,Os=new mn,vi=new Ie,Bo=new P,Ir=new P,X0=new P,Y0=new mn,rf=new P(1,0,0),of=new P(0,1,0),af=new P(0,0,1),lf={type:"added"},q0={type:"removed"},Bs={type:"childadded",child:null},ul={type:"childremoved",child:null};class gt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new Zn,n=new mn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ke}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ir,Bo,this.up):vi.lookAt(Bo,Ir,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(vi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function dl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class K{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Hh(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dl(o,r,e+1/3),this.g=dl(o,r,e),this.b=dl(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ye.workingToColorSpace(Qt.copy(this),e),Math.round(ze(Qt.r*255,0,255))*65536+Math.round(ze(Qt.g*255,0,255))*256+Math.round(ze(Qt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,r=Qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Mt){Ye.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(ko);const n=to(Fi.h,ko.h,t),i=to(Fi.s,ko.s,t),r=to(Fi.l,ko.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new K;K.NAMES=Gp;class Xh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(e),this.density=t}clone(){return new Xh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gn=new P,xi=new P,pl=new P,yi=new P,ks=new P,zs=new P,cf=new P,ml=new P,gl=new P,_l=new P,vl=new mt,xl=new mt,yl=new mt;class Wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gn.subVectors(e,t),i.cross(Gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gn.subVectors(i,t),xi.subVectors(n,t),pl.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(xi),l=Gn.dot(pl),c=xi.dot(xi),h=xi.dot(pl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return vl.setScalar(0),xl.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(e,t,n,i){return Gn.subVectors(n,t),xi.subVectors(e,t),Gn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ks.subVectors(i,n),zs.subVectors(r,n),ml.subVectors(e,n);const l=ks.dot(ml),c=zs.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,i);const h=ks.dot(gl),u=zs.dot(gl);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ks,o);_l.subVectors(e,r);const d=ks.dot(_l),p=zs.dot(_l);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(zs,a);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return cf.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(cf,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Go.subVectors(this.max,Nr),Gs.subVectors(e.a,Nr),Hs.subVectors(e.b,Nr),Vs.subVectors(e.c,Nr),Oi.subVectors(Hs,Gs),Bi.subVectors(Vs,Hs),ss.subVectors(Gs,Vs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ss.y,ss.x,0];return!Ml(t,Gs,Hs,Vs,Go)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Gs,Hs,Vs,Go))?!1:(Ho.crossVectors(Oi,Bi),t=[Ho.x,Ho.y,Ho.z],Ml(t,Gs,Hs,Vs,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new P,new P,new P,new P,new P,new P,new P,new P],Hn=new P,zo=new fi,Gs=new P,Hs=new P,Vs=new P,Oi=new P,Bi=new P,ss=new P,Nr=new P,Go=new P,Ho=new P,rs=new P;function Ml(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){rs.fromArray(s,r);const a=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const It=new P,Vo=new te;let K0=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class Vp extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wp extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Z0=new fi,Ur=new P,Sl=new P;class di{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Z0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Sl)),this.expandByPoint(Ur.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let J0=0;const Pn=new Ie,bl=new gt,Ws=new P,xn=new fi,Fr=new fi,Xt=new P;class At extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m0(e)?Wp:Vp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(xn.min,Fr.min),xn.expandByPoint(Xt),Xt.addVectors(xn.max,Fr.max),xn.expandByPoint(Xt)):(xn.expandByPoint(Fr.min),xn.expandByPoint(Fr.max))}xn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),Xt.add(Ws)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new P,l[x]=new P;const c=new P,h=new P,u=new P,f=new te,d=new te,p=new te,_=new P,m=new P;function g(x,S,U){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,U),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,U),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[x].add(_),a[S].add(_),a[U].add(_),l[x].add(m),l[S].add(m),l[U].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,S=v.length;x<S;++x){const U=v[x],C=U.start,D=U.count;for(let I=C,G=C+D;I<G;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new P,y=new P,T=new P,w=new P;function A(x){T.fromBufferAttribute(i,x),w.copy(T);const S=a[x];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(w,S);const C=y.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,C)}for(let x=0,S=v.length;x<S;++x){const U=v[x],C=U.start,D=U.count;for(let I=C,G=C+D;I<G;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Yt(f,h,u)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class Yh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Q0=0;class jn extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ss,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new P,Tl=new P,Wo=new P,ki=new P,wl=new P,Xo=new P,El=new P;class Ar{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tl.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Tl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wo),a=ki.dot(this.direction),l=-ki.dot(Wo),c=ki.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Tl).addScaledVector(Wo,f),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){wl.subVectors(t,e),Xo.subVectors(n,e),El.crossVectors(wl,Xo);let o=this.direction.dot(El),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Xo.crossVectors(ki,Xo));if(l<0)return null;const c=a*this.direction.dot(wl.cross(ki));if(c<0||l+c>o)return null;const h=-a*ki.dot(El);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hf=new Ie,os=new Ar,Yo=new di,uf=new P,qo=new P,jo=new P,Ko=new P,Al=new P,Zo=new P,ff=new P,Jo=new P;class Ue extends gt{constructor(e=new At,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Al.fromBufferAttribute(u,e),o?Zo.addScaledVector(Al,h):Zo.addScaledVector(Al.sub(t),h))}t.add(Zo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Yo.containsPoint(os.origin)===!1&&(os.intersectSphere(Yo,uf)===null||os.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),os.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=M;y<T;y+=3){const w=a.getX(y),A=a.getX(y+1),x=a.getX(y+2);i=$o(this,g,e,n,c,h,u,w,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=$o(this,o,e,n,c,h,u,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=M;y<T;y+=3){const w=y,A=y+1,x=y+2;i=$o(this,g,e,n,c,h,u,w,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=m,M=m+1,y=m+2;i=$o(this,o,e,n,c,h,u,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function e_(s,e,t,n,i,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ri,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:s}}function $o(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,qo),s.getVertexPosition(l,jo),s.getVertexPosition(c,Ko);const h=e_(s,e,t,n,qo,jo,Ko,ff);if(h){const u=new P;Wn.getBarycoord(ff,qo,jo,Ko,u),i&&(h.uv=Wn.getInterpolatedAttribute(i,a,l,c,u,new te)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,l,c,u,new te)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Wn.getNormal(qo,jo,Ko,f.normal),h.face=f,h.barycoord=u}return h}const df=new P,pf=new mt,mf=new mt,t_=new P,gf=new Ie,Qo=new P,Cl=new di,_f=new Ie,Rl=new Ar;class n_ extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vu,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(i),e.ray.intersectsSphere(Cl)!==!1&&(_f.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(_f),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pf.fromBufferAttribute(i.attributes.skinIndex,e),mf.fromBufferAttribute(i.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=mf.getComponent(r);if(o!==0){const a=pf.getComponent(r);gf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(t_.copy(df).applyMatrix4(gf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xp extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qh extends zt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ot,h=Ot,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=new Ie,i_=new Ie;class jh{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:i_;vf.multiplyMatrices(a,t[r]),vf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qh(t,e,e,Nn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Te("Skeleton: No bone found with UUID:",r),o=new Xp),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class th extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new Ie,xf=new Ie,ea=[],yf=new fi,s_=new Ie,Or=new Ue,Br=new di;class ja extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new th(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,s_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),yf.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(yf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Br.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xs),xf.multiplyMatrices(n,Xs),Or.matrixWorld=xf,Or.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){const l=ea[o];l.instanceId=r,l.object=this,t.push(l)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qh(new Float32Array(i*this.count),i,this.count,Uh,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pl=new P,r_=new P,o_=new ke;class wi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pl.subVectors(n,t).cross(r_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||o_.getNormalMatrix(e),i=this.coplanarPoint(Pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new di,a_=new te(.5,.5),ta=new P;class Ka{constructor(e=new wi,t=new wi,n=new wi,i=new wi,r=new wi,o=new wi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],M=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,d-h,g-p,T-v).normalize(),i[1].setComponents(c+o,d+h,g+p,T+v).normalize(),i[2].setComponents(c+a,d+u,g+_,T+M).normalize(),i[3].setComponents(c-a,d-u,g-_,T-M).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,g-m,T-y).normalize();else if(i[4].setComponents(c-l,d-f,g-m,T-y).normalize(),t===oi)i[5].setComponents(c+l,d+f,g+m,T+y).normalize();else if(t===mo)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=a_.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ta.x=i.normal.x>0?e.max.x:e.min.x,ta.y=i.normal.y>0?e.max.y:e.min.y,ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yp extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new P,Ba=new P,Mf=new Ie,kr=new Ar,na=new di,Dl=new P,Sf=new P;class Kh extends gt{constructor(e=new At,t=new Yp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Oa.fromBufferAttribute(t,i-1),Ba.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new lt(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Mf.copy(i).invert(),kr.copy(e.ray).applyMatrix4(Mf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=h.getX(_),v=h.getX(_+1),M=ia(this,e,kr,l,g,v,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=ia(this,e,kr,l,_,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=ia(this,e,kr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=ia(this,e,kr,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ia(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Oa.fromBufferAttribute(a,i),Ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Oa,Ba,Dl,Sf)>n)return;Dl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Dl);if(!(c<e.near||c>e.far))return{distance:c,point:Sf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const bf=new P,Tf=new P;class l_ extends Kh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bf.fromBufferAttribute(t,i),Tf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bf.distanceTo(Tf);e.setAttribute("lineDistance",new lt(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class c_ extends Kh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Za extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wf=new Ie,nh=new Ar,sa=new di,ra=new P;class Zh extends gt{constructor(e=new At,t=new Za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;wf.copy(i).invert(),nh.copy(e.ray).applyMatrix4(wf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=c.getX(p);ra.fromBufferAttribute(u,m),Ef(ra,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)ra.fromBufferAttribute(u,p),Ef(ra,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ef(s,e,t,n,i,r,o){const a=nh.distanceSqToPoint(s);if(a<t){const l=new P;nh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class qp extends zt{constructor(e=[],t=As,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ki extends zt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends zt{constructor(e,t,n=hi,i,r,o,a=Ot,l=Ot,c,h=Pi,u=1){if(h!==Pi&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class h_ extends _o{constructor(e,t=hi,n=As,i,r,o=Ot,a=Ot,l,c=Pi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jp extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yn extends At{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function p(_,m,g,v,M,y,T,w,A,x,S){const U=y/A,C=T/x,D=y/2,I=T/2,G=w/2,k=A+1,z=x+1;let O=0,J=0;const $=new P;for(let he=0;he<z;he++){const de=he*C-I;for(let le=0;le<k;le++){const Fe=le*U-D;$[_]=Fe*v,$[m]=de*M,$[g]=G,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[g]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(le/A),u.push(1-he/x),O+=1}}for(let he=0;he<x;he++)for(let de=0;de<A;de++){const le=f+de+k*he,Fe=f+de+k*(he+1),je=f+(de+1)+k*(he+1),Ke=f+(de+1)+k*he;l.push(le,Fe,Ke),l.push(Fe,je,Ke),J+=6}a.addGroup(d,J,S),d+=J,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fr extends At{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function v(){const y=new P,T=new P;let w=0;const A=(t-e)/n;for(let x=0;x<=r;x++){const S=[],U=x/r,C=U*(t-e)+e;for(let D=0;D<=i;D++){const I=D/i,G=I*l+a,k=Math.sin(G),z=Math.cos(G);T.x=C*k,T.y=-U*n+m,T.z=C*z,u.push(T.x,T.y,T.z),y.set(k,A,z).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-U),S.push(p++)}_.push(S)}for(let x=0;x<i;x++)for(let S=0;S<r;S++){const U=_[S][x],C=_[S+1][x],D=_[S+1][x+1],I=_[S][x+1];(e>0||S!==0)&&(h.push(U,C,I),w+=3),(t>0||S!==r-1)&&(h.push(C,D,I),w+=3)}c.addGroup(g,w,0),g+=w}function M(y){const T=p,w=new te,A=new P;let x=0;const S=y===!0?e:t,U=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*U,0),f.push(0,U,0),d.push(.5,.5),p++;const C=p;for(let D=0;D<=i;D++){const G=D/i*l+a,k=Math.cos(G),z=Math.sin(G);A.x=S*z,A.y=m*U,A.z=S*k,u.push(A.x,A.y,A.z),f.push(0,U,0),w.x=k*.5+.5,w.y=z*.5*U+.5,d.push(w.x,w.y),p++}for(let D=0;D<i;D++){const I=T+D,G=C+D;y===!0?h.push(G,G+1,I):h.push(G+1,G,I),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new te:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],r=[],o=[],a=new P,l=new Ie;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ze(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ze(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jh extends pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class u_ extends Jh{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $h(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const oa=new P,Ll=new $h,Il=new $h,Nl=new $h;class f_ extends pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(oa.subVectors(i[0],i[1]).add(i[0]),c=oa);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(oa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Ll.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,m),Il.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,m),Nl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Il.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Nl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ll.calc(l),Il.calc(l),Nl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Af(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function d_(s,e){const t=1-s;return t*t*e}function p_(s,e){return 2*(1-s)*s*e}function m_(s,e){return s*s*e}function no(s,e,t,n){return d_(s,e)+p_(s,t)+m_(s,n)}function g_(s,e){const t=1-s;return t*t*t*e}function __(s,e){const t=1-s;return 3*t*t*s*e}function v_(s,e){return 3*(1-s)*s*s*e}function x_(s,e){return s*s*s*e}function io(s,e,t,n,i){return g_(s,e)+__(s,t)+v_(s,n)+x_(s,i)}class Kp extends pi{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(e,i.x,r.x,o.x,a.x),io(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y_ extends pi{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(e,i.x,r.x,o.x,a.x),io(e,i.y,r.y,o.y,a.y),io(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zp extends pi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends pi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jp extends pi{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(no(e,i.x,r.x,o.x),no(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends pi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(no(e,i.x,r.x,o.x),no(e,i.y,r.y,o.y),no(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $p extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Af(a,l.x,c.x,h.x,u.x),Af(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}var Cf=Object.freeze({__proto__:null,ArcCurve:u_,CatmullRomCurve3:f_,CubicBezierCurve:Kp,CubicBezierCurve3:y_,EllipseCurve:Jh,LineCurve:Zp,LineCurve3:M_,QuadraticBezierCurve:Jp,QuadraticBezierCurve3:S_,SplineCurve:$p});class b_ extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Cf[i.type]().fromJSON(i))}return this}}class Rf extends b_{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zp(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Jp(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Kp(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $p(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Jh(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qh extends Rf{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Rf().fromJSON(i))}return this}}function T_(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Qp(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=R_(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){const d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return vo(r,o,t,a,l,c,0),o}function Qp(s,e,t,n,i){let r;if(i===z_(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Pf(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Pf(o/n|0,s[o],s[o+1],r);return r&&dr(r,r.next)&&(yo(r),r=r.next),r}function Cs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(dr(t,t.next)||St(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&N_(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?E_(s,n,i,r):w_(s)){e.push(l.i,s.i,c.i),yo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=A_(Cs(s),e),vo(s,e,t,n,i,r,2)):o===2&&C_(s,e,t,n,i,r):vo(Cs(s),e,t,n,i,r,1);break}}}function w_(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&jr(i,a,r,l,o,c,p.x,p.y)&&St(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function E_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),g=ih(d,p,e,t,n),v=ih(_,m,e,t,n);let M=s.prevZ,y=s.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&jr(a,h,l,u,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&jr(a,h,l,u,c,f,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&jr(a,h,l,u,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&jr(a,h,l,u,c,f,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function A_(s,e){let t=s;do{const n=t.prev,i=t.next.next;!dr(n,i)&&tm(n,t,t.next,i)&&xo(n,i)&&xo(i,n)&&(e.push(n.i,t.i,i.i),yo(t),yo(t.next),t=s=i),t=t.next}while(t!==s);return Cs(t)}function C_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O_(o,a)){let l=nm(o,a);o=Cs(o,o.next),l=Cs(l,l.next),vo(o,e,t,n,i,r,0),vo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function R_(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Qp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(F_(c))}i.sort(P_);for(let r=0;r<i.length;r++)t=D_(i[r],t);return t}function P_(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function D_(s,e){const t=L_(s,e);if(!t)return e;const n=nm(t,s);return Cs(n,n.next),Cs(t,t.next)}function L_(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(dr(s,t))return t;do{if(dr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&em(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);xo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&I_(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function I_(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function N_(s,e,t,n){let i=s;do i.z===0&&(i.z=ih(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,U_(i)}function U_(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ih(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function F_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function em(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function jr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&em(s,e,t,n,i,r,o,a)}function O_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!B_(s,e)&&(xo(s,e)&&xo(e,s)&&k_(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||dr(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function dr(s,e){return s.x===e.x&&s.y===e.y}function tm(s,e,t,n){const i=la(St(s,e,t)),r=la(St(s,e,n)),o=la(St(t,n,s)),a=la(St(t,n,e));return!!(i!==r&&o!==a||i===0&&aa(s,t,e)||r===0&&aa(s,n,e)||o===0&&aa(t,s,n)||a===0&&aa(t,e,n))}function aa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function la(s){return s>0?1:s<0?-1:0}function B_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&tm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xo(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function k_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function nm(s,e){const t=sh(s.i,s.x,s.y),n=sh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(s,e,t,n){const i=sh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class G_{static triangulate(e,t,n=2){return T_(e,t,n)}}class so{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return so.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Df(e),Lf(n,e);let o=e.length;t.forEach(Df);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Lf(n,t[l]);const a=G_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Df(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Lf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Bn extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const v=g*f-o;for(let M=0;M<c;M++){const y=M*u-r;p.push(y,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const M=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),w=v+1+c*g;d.push(M,y,w),d.push(y,T,w)}this.setIndex(d),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class eu extends At{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new P,p=new te;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const v=g+m,M=v,y=v+n+1,T=v+n+2,w=v+1;a.push(M,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Co extends At{constructor(e=new Qh([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;so.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];so.isClockWise(v)===!0&&(p[m]=v.reverse())}const _=so.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){const v=d[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){const v=_[m],M=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(M,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return H_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Co(n,e.curveSegments)}}function H_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class pr extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],M=g/n;let y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+M*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+y,1-M),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const M=h[g][v+1],y=h[g][v],T=h[g+1][v],w=h[g+1][v+1];(g!==0||o>0)&&d.push(M,y,w),(g!==n-1||l<Math.PI)&&d.push(y,T,w)}this.setIndex(d),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function mr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(s){const e={};for(let t=0;t<s.length;t++){const n=mr(s[t]);for(const i in n)e[i]=n[i]}return e}function V_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function im(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ka={clone:mr,merge:sn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Y_ extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ft extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class q_ extends jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ph,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tu extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ca(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function K_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function If(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function sm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Cr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z_ extends Cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=e,a=2*t-n;break;case qu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yu:o=e,l=2*n-t;break;case qu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+M*o[l+T]+y*o[u+T];return r}}class J_ extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class $_ extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Q_ extends Cr{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,f=h.outTangents;if(!u||!f){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*_;return r}const d=a*2,p=e-1;for(let _=0;_!==a;++_){const m=o[c+_],g=o[l+_],v=p*d+_*2,M=f[v],y=f[v+1],T=e*d+_*2,w=u[T],A=u[T+1];let x=(n-t)/(i-t),S,U,C,D,I;for(let G=0;G<8;G++){S=x*x,U=S*x,C=1-x,D=C*C,I=D*C;const z=I*t+3*D*x*M+3*C*S*w+U*i-n;if(Math.abs(z)<1e-10)break;const O=3*D*(M-t)+6*C*x*(w-M)+3*S*(i-w);if(Math.abs(O)<1e-10)break;x=x-z/O,x=Math.max(0,Math.min(1,x))}r[_]=I*m+3*D*x*y+3*C*S*A+U*g}return r}}class Jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new J_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Q_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case Wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Re("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Re("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&g0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Re("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ol,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=po;class Rr extends Jn{constructor(e,t,n){super(e,t,n)}}Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=fo;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class rm extends Jn{constructor(e,t,n,i){super(e,t,n,i)}}rm.prototype.ValueTypeName="color";class gr extends Jn{constructor(e,t,n,i){super(e,t,n,i)}}gr.prototype.ValueTypeName="number";class ev extends Cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class _r extends Jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ev(this.times,this.values,this.getValueSize(),e)}}_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends Jn{constructor(e,t,n){super(e,t,n)}}Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=fo;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends Jn{constructor(e,t,n,i){super(e,t,n,i)}}vr.prototype.ValueTypeName="vector";class tv{constructor(e="",t=-1,n=[],i=r0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=K_(l);l=If(l,1,h),c=If(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new gr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Te("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const m=[],g=[];sm(d,m,g,p),m.length!==0&&_.push(new u(f,m,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let v=0;v!==f[p].morphTargets.length;++v){const M=f[p];m.push(M.time),g.push(M.morphTarget===_?1:0)}i.push(new gr(".morphTargetInfluence["+_+"]",m,g))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(vr,d+".position",f,"pos",i),n(_r,d+".quaternion",f,"rot",i),n(vr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function nv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gr;case"vector":case"vector2":case"vector3":case"vector4":return vr;case"color":return rm;case"quaternion":return _r;case"bool":case"boolean":return Rr;case"string":return Pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nv(s.type);if(s.times===void 0){const t=[],n=[];sm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Nf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Nf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Nf(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class om{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sv=new om;class Dr{constructor(e){this.manager=e!==void 0?e:sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class rv extends Error{constructor(e,t){super(e),this.response=t}}class am extends Dr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ai.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=bi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){v();function v(){u.read().then(({done:M,value:y})=>{if(M)g.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let w=0,A=h.length;w<A;w++){const x=h[w];x.onProgress&&x.onProgress(T)}g.enqueue(y),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new rv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ai.add(`file:${e}`,c);const h=bi[e];delete bi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ys=new WeakMap;class ov extends Dr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ys.get(o);u===void 0&&(u=[],Ys.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=go("img");function l(){h(),t&&t(this);const u=Ys.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Ys.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ai.remove(`image:${e}`);const f=Ys.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}Ys.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class nu extends Dr{constructor(e){super(e)}load(e,t,n,i){const r=new zt,o=new ov(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ro extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new K(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class av extends Ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ul=new Ie,Uf=new P,Ff=new P;class iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===mo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ha=new P,ua=new mn,Qn=new P;class lm extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ua,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ha,ua,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new P,Of=new te,Bf=new te;class rn extends lm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Of,Bf),t.subVectors(Bf,Of)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lv extends iu{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cv extends Ro{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class hv extends iu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class su extends Ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Po extends lm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uv extends iu{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new uv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fv extends Ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ro{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Fl=new WeakMap;class dv extends Dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Fl.has(o)===!0)i&&i(Fl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Fl.set(l,c),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qs=-90,js=1;class pv extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(qs,js,e,t);i.layers=this.layers,this.add(i);const r=new rn(qs,js,e,t);r.layers=this.layers,this.add(r);const o=new rn(qs,js,e,t);o.layers=this.layers,this.add(o);const a=new rn(qs,js,e,t);a.layers=this.layers,this.add(a);const l=new rn(qs,js,e,t);l.layers=this.layers,this.add(l);const c=new rn(qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class mv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_v.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function _v(){this._document.hidden===!1&&this.reset()}const ru="\\[\\]\\.:\\/",vv=new RegExp("["+ru+"]","g"),ou="[^"+ru+"]",xv="[^"+ru.replace("\\.","")+"]",yv=/((?:WC+[\/:])*)/.source.replace("WC",ou),Mv=/(WCOD+)?/.source.replace("WCOD",xv),Sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),Tv=new RegExp("^"+yv+Mv+Sv+bv+"$"),wv=["material","materials","bones","map"];class Ev{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vv,"")}static parseTrackName(e){const t=Tv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);wv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Ev;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kf=new Ie;class Av{constructor(e,t,n=0,i=1/0){this.ray=new Ar(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Re("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(e,t=!0,n=[]){return oh(e,this,n,t),n.sort(zf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)oh(e[i],this,n,t);return n.sort(zf),n}}function zf(s,e){return s.distance-e.distance}function oh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)oh(r[o],e,t,!0)}}class Gf{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cv extends Ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hf(s,e,t,n){const i=Rv(n);switch(t){case Up:return s*e;case Uh:return s*e/i.components*i.byteLength;case Fh:return s*e/i.components*i.byteLength;case hr:return s*e*2/i.components*i.byteLength;case Oh:return s*e*2/i.components*i.byteLength;case Fp:return s*e*3/i.components*i.byteLength;case Nn:return s*e*4/i.components*i.byteLength;case Bh:return s*e*4/i.components*i.byteLength;case Ta:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Tc:return Math.max(s,16)*Math.max(e,8)/4;case Mc:case bc:return Math.max(s,8)*Math.max(e,8)/2;case wc:case Ec:case Cc:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Pc:case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yc:case qc:case jc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kc:case Zc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jc:case $c:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(s){switch(s){case Mn:case Dp:return{byteLength:1,components:1};case ho:case Lp:case En:return{byteLength:2,components:1};case Ih:case Nh:return{byteLength:2,components:4};case hi:case Lh:case In:return{byteLength:4,components:1};case Ip:case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function cm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Pv(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
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
#endif`,Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
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
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ex=`#define PI 3.141592653589793
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
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Rx=`uniform sampler2D dfgLUT;
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
}`,Px=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
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
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,my=`float getShadowMask() {
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
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,My=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Oy=`#if DEPTH_PACKING == 3200
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
}`,By=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,qy=`#define LAMBERT
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
}`,jy=`#define MATCAP
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
}`,Ky=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Jy=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Qy=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,rM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Dv,alphahash_pars_fragment:Lv,alphamap_fragment:Iv,alphamap_pars_fragment:Nv,alphatest_fragment:Uv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:Bv,batching_pars_vertex:kv,batching_vertex:zv,begin_vertex:Gv,beginnormal_vertex:Hv,bsdfs:Vv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:Yv,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:jv,clipping_planes_vertex:Kv,color_fragment:Zv,color_pars_fragment:Jv,color_pars_vertex:$v,color_vertex:Qv,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:sx,emissivemap_fragment:rx,emissivemap_pars_fragment:ox,colorspace_fragment:ax,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:hx,envmap_pars_fragment:ux,envmap_pars_vertex:fx,envmap_physical_pars_fragment:bx,envmap_vertex:dx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:vx,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:Mx,lights_pars_begin:Sx,lights_toon_fragment:Tx,lights_toon_pars_fragment:wx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Ax,lights_physical_fragment:Cx,lights_physical_pars_fragment:Rx,lights_fragment_begin:Px,lights_fragment_maps:Dx,lights_fragment_end:Lx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:Bx,map_particle_fragment:kx,map_particle_pars_fragment:zx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:Yx,morphtarget_vertex:qx,normal_fragment_begin:jx,normal_fragment_maps:Kx,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:$x,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:sy,packing:ry,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:dy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:vy,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:My,tonemapping_fragment:Sy,tonemapping_pars_fragment:by,transmission_fragment:Ty,transmission_pars_fragment:wy,uv_pars_fragment:Ey,uv_pars_vertex:Ay,uv_vertex:Cy,worldpos_vertex:Ry,background_vert:Py,background_frag:Dy,backgroundCube_vert:Ly,backgroundCube_frag:Iy,cube_vert:Ny,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distance_vert:By,distance_frag:ky,equirect_vert:zy,equirect_frag:Gy,linedashed_vert:Hy,linedashed_frag:Vy,meshbasic_vert:Wy,meshbasic_frag:Xy,meshlambert_vert:Yy,meshlambert_frag:qy,meshmatcap_vert:jy,meshmatcap_frag:Ky,meshnormal_vert:Zy,meshnormal_frag:Jy,meshphong_vert:$y,meshphong_frag:Qy,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:sM,points_frag:rM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},ce={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ii={basic:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:sn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:sn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new K(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:sn([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:sn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:sn([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:sn([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:sn([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:sn([ce.lights,ce.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const fa={r:0,b:0,g:0},ls=new Zn,hM=new Ie;function uM(s,e,t,n,i,r){const o=new K(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(v){let M=!1;const y=d(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,M){const y=d(M);y&&(y.isCubeTexture||y.mapping===qa)?(c===void 0&&(c=new Ue(new Yn(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:mr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ls.copy(M.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(ls)),c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==nt,(h!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ue(new Bn(2,2),new kt({name:"BackgroundMaterial",uniforms:mr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(fa,im(s)),t.buffers.color.setClear(fa.r,fa.g,fa.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function fM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(C,D,I,G,k){let z=!1;const O=u(C,G,I,D);r!==O&&(r=O,c(r.object)),z=d(C,G,I,k),z&&p(C,G,I,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(C,D,I,G),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,D,I,G){const k=G.wireframe===!0;let z=n[D.id];z===void 0&&(z={},n[D.id]=z);const O=C.isInstancedMesh===!0?C.id:0;let J=z[O];J===void 0&&(J={},z[O]=J);let $=J[I.id];$===void 0&&($={},J[I.id]=$);let he=$[k];return he===void 0&&(he=f(l()),$[k]=he),he}function f(C){const D=[],I=[],G=[];for(let k=0;k<t;k++)D[k]=0,I[k]=0,G[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:G,object:C,attributes:{},index:null}}function d(C,D,I,G){const k=r.attributes,z=D.attributes;let O=0;const J=I.getAttributes();for(const $ in J)if(J[$].location>=0){const de=k[$];let le=z[$];if(le===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),de===void 0||de.attribute!==le||le&&de.data!==le.data)return!0;O++}return r.attributesNum!==O||r.index!==G}function p(C,D,I,G){const k={},z=D.attributes;let O=0;const J=I.getAttributes();for(const $ in J)if(J[$].location>=0){let de=z[$];de===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(de=C.instanceColor));const le={};le.attribute=de,de&&de.data&&(le.data=de.data),k[$]=le,O++}r.attributes=k,r.attributesNum=O,r.index=G}function _(){const C=r.newAttributes;for(let D=0,I=C.length;D<I;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){const I=r.newAttributes,G=r.enabledAttributes,k=r.attributeDivisors;I[C]=1,G[C]===0&&(s.enableVertexAttribArray(C),G[C]=1),k[C]!==D&&(s.vertexAttribDivisor(C,D),k[C]=D)}function v(){const C=r.newAttributes,D=r.enabledAttributes;for(let I=0,G=D.length;I<G;I++)D[I]!==C[I]&&(s.disableVertexAttribArray(I),D[I]=0)}function M(C,D,I,G,k,z,O){O===!0?s.vertexAttribIPointer(C,D,I,k,z):s.vertexAttribPointer(C,D,I,G,k,z)}function y(C,D,I,G){_();const k=G.attributes,z=I.getAttributes(),O=D.defaultAttributeValues;for(const J in z){const $=z[J];if($.location>=0){let he=k[J];if(he===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const de=he.normalized,le=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const je=Fe.buffer,Ke=Fe.type,j=Fe.bytesPerElement,se=Ke===s.INT||Ke===s.UNSIGNED_INT||he.gpuType===Lh;if(he.isInterleavedBufferAttribute){const ae=he.data,Be=ae.stride,Ce=he.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<$.locationSize;De++)g($.location+De,ae.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<$.locationSize;De++)m($.location+De);s.bindBuffer(s.ARRAY_BUFFER,je);for(let De=0;De<$.locationSize;De++)M($.location+De,le/$.locationSize,Ke,de,Be*j,(Ce+le/$.locationSize*De)*j,se)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)g($.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<$.locationSize;ae++)m($.location+ae);s.bindBuffer(s.ARRAY_BUFFER,je);for(let ae=0;ae<$.locationSize;ae++)M($.location+ae,le/$.locationSize,Ke,de,le*j,le/$.locationSize*ae*j,se)}}else if(O!==void 0){const de=O[J];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv($.location,de);break;case 3:s.vertexAttrib3fv($.location,de);break;case 4:s.vertexAttrib4fv($.location,de);break;default:s.vertexAttrib1fv($.location,de)}}}}v()}function T(){S();for(const C in n){const D=n[C];for(const I in D){const G=D[I];for(const k in G){const z=G[k];for(const O in z)h(z[O].object),delete z[O];delete G[k]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const I in D){const G=D[I];for(const k in G){const z=G[k];for(const O in z)h(z[O].object),delete z[O];delete G[k]}}delete n[C.id]}function A(C){for(const D in n){const I=n[D];for(const G in I){const k=I[G];if(k[C.id]===void 0)continue;const z=k[C.id];for(const O in z)h(z[O].object),delete z[O];delete k[C.id]}}}function x(C){for(const D in n){const I=n[D],G=C.isInstancedMesh===!0?C.id:0,k=I[G];if(k!==void 0){for(const z in k){const O=k[z];for(const J in O)h(O[J].object),delete O[J];delete k[z]}delete I[G],Object.keys(I).length===0&&delete n[D]}}}function S(){U(),o=!0,r!==i&&(r=i,c(r.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function dM(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Nn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!x)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:w}}function mM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new wi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,M=v*4;let y=g.clippingState||null;l.value=y,y=h(p,f,M,d);for(let T=0;T!==M;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Xi=4,Vf=[.125,.215,.35,.446,.526,.582],_s=20,gM=256,zr=new Po,Wf=new K;let Ol=null,Bl=0,kl=0,zl=!1;const _M=new P;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=_M}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Bl,kl),this._renderer.xr.enabled=zl,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:En,format:Nn,colorSpace:an,depthBuffer:!1},i=Xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vM(r)),this._blurMaterial=yM(r,e,t),this._ggxMaterial=xM(r,e,t)}return i}_compileMaterial(e){const t=new Ue(new At,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,i,r){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wf),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Yn,new cn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(Wf),g=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const T=this._cubeSize;Ks(i,y*T,M>2?T:0,T,T),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Xi?n-p+Xi:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Ks(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(a,zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ks(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(a,zr)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_s-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):_s;m>_s&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);const g=[];let v=0;for(let A=0;A<_s;++A){const x=A/_,S=Math.exp(-x*x/2);g.push(S),A===0?v+=S:A<m&&(v+=2*S)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=p,f.mipInt.value=M-n;const y=this._sizeLods[i],T=3*y*(i>M-Xi?i-M+Xi:0),w=4*(this._cubeSize-y);Ks(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(u,zr)}}function vM(s){const e=[],t=[],n=[];let i=s;const r=s-Xi+1+Vf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Xi?l=Vf[o-s+Xi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*d),M=new Float32Array(m*p*d),y=new Float32Array(g*p*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,x=w>2?0:-1,S=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(S,_*p*w),M.set(f,m*p*w);const U=[w,w,w,w,w,w];y.set(U,g*p*w)}const T=new At;T.setAttribute("position",new Yt(v,_)),T.setAttribute("uv",new Yt(M,m)),T.setAttribute("faceIndex",new Yt(y,g)),n.push(new Ue(T,null)),i>Xi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xf(s,e,t){const n=new hn(s,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function xM(s,e,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function yM(s,e,t){const n=new Float32Array(_s),i=new P(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Yf(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function qf(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}class hm extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yn(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:li});r.uniforms.tEquirect.value=t;const o=new Ue(i,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=Tt),new pv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function MM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===sl||d===rl)if(e.has(f)){const p=e.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new hm(p.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===sl||d===rl,_=d===As||d===cr;if(p||_){let m=t.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ah(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new ah(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===sl?f.mapping=As:d===rl&&(f.mapping=cr),f}function l(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function SM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fa("WebGLRenderer: "+n+" extension not supported."),i}}}function bM(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let M=0,y=v.length;M<y;M+=3){const T=v[M+0],w=v[M+1],A=v[M+2];f.push(T,w,w,A,A,T)}}else{const v=p.array;_=p.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const T=M+0,w=M+1,A=M+2;f.push(T,w,w,A,A,T)}}const m=new(p.count>=65535?Wp:Vp)(f,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function TM(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function u(f,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v]*_[v];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Re("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function EM(s,e,t){const n=new WeakMap,i=new mt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let U=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",U)};var d=U;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let T=a.attributes.position.count*y,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*u),x=new zp(A,T,w,u);x.type=In,x.needsUpdate=!0;const S=y*4;for(let C=0;C<u;C++){const D=g[C],I=v[C],G=M[C],k=T*w*4*C;for(let z=0;z<D.count;z++){const O=z*S;p===!0&&(i.fromBufferAttribute(D,z),A[k+O+0]=i.x,A[k+O+1]=i.y,A[k+O+2]=i.z,A[k+O+3]=0),_===!0&&(i.fromBufferAttribute(I,z),A[k+O+4]=i.x,A[k+O+5]=i.y,A[k+O+6]=i.z,A[k+O+7]=0),m===!0&&(i.fromBufferAttribute(G,z),A[k+O+8]=i.x,A[k+O+9]=i.y,A[k+O+10]=i.z,A[k+O+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new te(T,w)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function AM(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const CM={[bp]:"LINEAR_TONE_MAPPING",[Tp]:"REINHARD_TONE_MAPPING",[wp]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[Ap]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[Ep]:"CUSTOM_TONE_MAPPING"};function RM(s,e,t,n,i){const r=new hn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new hn(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1}),a=new At;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));const l=new Y_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ue(a,l),h=new Po(-1,1,1,-1,0,1);let u=null,f=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(v,M){r.setSize(v,M),o.setSize(v,M);for(let y=0;y<m.length;y++){const T=m[y];T.setSize&&T.setSize(v,M)}},this.setEffects=function(v){m=v,g=m.length>0&&m[0].isRenderPass===!0;const M=r.width,y=r.height;for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(M,y)}},this.begin=function(v,M){if(d||v.toneMapping===ci&&m.length===0)return!1;if(_=M,M!==null){const y=M.width,T=M.height;(r.width!==y||r.height!==T)&&this.setSize(y,T)}return g===!1&&v.setRenderTarget(r),p=v.toneMapping,v.toneMapping=ci,!0},this.hasRenderPass=function(){return g},this.end=function(v,M){v.toneMapping=p,d=!0;let y=r,T=o;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(v,T,y,M),A.needsSwap!==!1)){const x=y;y=T,T=x}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,l.defines={},Ye.getTransfer(u)===nt&&(l.defines.SRGB_TRANSFER="");const w=CM[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const um=new zt,lh=new _o(1,1),fm=new zp,dm=new G0,pm=new qp,jf=[],Kf=[],Zf=new Float32Array(16),Jf=new Float32Array(9),$f=new Float32Array(4);function Lr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=jf[i];if(r===void 0&&(r=new Float32Array(i),jf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $a(s,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function PM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function NM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;$f.set(n),s.uniformMatrix2fv(this.addr,!1,$f),Ht(t,n)}}function UM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Jf.set(n),s.uniformMatrix3fv(this.addr,!1,Jf),Ht(t,n)}}function FM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Zf.set(n),s.uniformMatrix4fv(this.addr,!1,Zf),Ht(t,n)}}function OM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function GM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function XM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lh.compareFunction=t.isReversedDepthBuffer()?Gh:zh,r=lh):r=um,t.setTexture2D(e||r,i)}function YM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dm,i)}function qM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pm,i)}function jM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fm,i)}function KM(s){switch(s){case 5126:return PM;case 35664:return DM;case 35665:return LM;case 35666:return IM;case 35674:return NM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return GM;case 36294:return HM;case 36295:return VM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return jM}}function ZM(s,e){s.uniform1fv(this.addr,e)}function JM(s,e){const t=Lr(e,this.size,2);s.uniform2fv(this.addr,t)}function $M(s,e){const t=Lr(e,this.size,3);s.uniform3fv(this.addr,t)}function QM(s,e){const t=Lr(e,this.size,4);s.uniform4fv(this.addr,t)}function eS(s,e){const t=Lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tS(s,e){const t=Lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nS(s,e){const t=Lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function iS(s,e){s.uniform1iv(this.addr,e)}function sS(s,e){s.uniform2iv(this.addr,e)}function rS(s,e){s.uniform3iv(this.addr,e)}function oS(s,e){s.uniform4iv(this.addr,e)}function aS(s,e){s.uniform1uiv(this.addr,e)}function lS(s,e){s.uniform2uiv(this.addr,e)}function cS(s,e){s.uniform3uiv(this.addr,e)}function hS(s,e){s.uniform4uiv(this.addr,e)}function uS(s,e,t){const n=this.cache,i=e.length,r=$a(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=lh:o=um;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function fS(s,e,t){const n=this.cache,i=e.length,r=$a(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dm,r[o])}function dS(s,e,t){const n=this.cache,i=e.length,r=$a(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pm,r[o])}function pS(s,e,t){const n=this.cache,i=e.length,r=$a(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fm,r[o])}function mS(s){switch(s){case 5126:return ZM;case 35664:return JM;case 35665:return $M;case 35666:return QM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class _S{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}}class vS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function Qf(s,e){s.seq.push(e),s.map[e.id]=e}function xS(s,e,t){const n=s.name,i=n.length;for(Gl.lastIndex=0;;){const r=Gl.exec(n),o=Gl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qf(t,c===void 0?new gS(a,s,e):new _S(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new vS(a),Qf(t,u)),t=u}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);xS(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ed(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const yS=37297;let MS=0;function SS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const td=new ke;function bS(s){Ye._getMatrix(td,Ye.workingColorSpace,s);const e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Na:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+SS(s.getShaderSource(e),a)}else return r}function TS(s,e){const t=bS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wS={[bp]:"Linear",[Tp]:"Reinhard",[wp]:"Cineon",[Dh]:"ACESFilmic",[Ap]:"AgX",[Cp]:"Neutral",[Ep]:"Custom"};function ES(s,e){const t=wS[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new P;function AS(){Ye.getLuminanceCoefficients(da);const s=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function RS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Kr(s){return s!==""}function id(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(s){return s.replace(DS,IS)}const LS=new Map;function IS(s,e){let t=Ge[e];if(t===void 0){const n=LS.get(e);if(n!==void 0)t=Ge[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}const NS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(s){return s.replace(NS,US)}function US(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function od(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const FS={[Sa]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function OS(s){return FS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BS={[As]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function kS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const zS={[cr]:"ENVMAP_MODE_REFRACTION"};function GS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HS={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[n0]:"ENVMAP_BLENDING_MIX",[i0]:"ENVMAP_BLENDING_ADD"};function VS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HS[s.combine]||"ENVMAP_BLENDING_NONE"}function WS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function XS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OS(t),c=kS(t),h=GS(t),u=VS(t),f=WS(t),d=CS(t),p=RS(r),_=i.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Kr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Kr).join(`
`),g.length>0&&(g+=`
`)):(m=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),g=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ci?ES("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,TS("linearToOutputTexel",t.outputColorSpace),AS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=ch(o),o=id(o,t),o=sd(o,t),a=ch(a),a=id(a,t),a=sd(a,t),o=rd(o),a=rd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+m+o,y=v+g+a,T=ed(i,i.VERTEX_SHADER,M),w=ed(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(w)||"",k=D.trim(),z=I.trim(),O=G.trim();let J=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,w);else{const he=nd(i,T,"vertex"),de=nd(i,w,"fragment");Re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+he+`
`+de)}else k!==""?Te("WebGLProgram: Program Info Log:",k):(z===""||O==="")&&($=!1);$&&(C.diagnostics={runnable:J,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:g}})}i.deleteShader(T),i.deleteShader(w),x=new Ca(i,_),S=PS(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(_,yS)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let YS=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jS(e),t.set(e,n)),n}}class jS{constructor(e){this.id=YS++,this.code=e,this.usedTimes=0}}function KS(s,e,t,n,i,r){const o=new Wh,a=new qS,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,U,C,D){const I=C.fog,G=D.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||k,z),J=O&&O.mapping===qa?O.image.height:null,$=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=he!==void 0?he.length:0;let le=0;G.morphAttributes.position!==void 0&&(le=1),G.morphAttributes.normal!==void 0&&(le=2),G.morphAttributes.color!==void 0&&(le=3);let Fe,je,Ke,j;if($){const tt=ii[$];Fe=tt.vertexShader,je=tt.fragmentShader}else Fe=x.vertexShader,je=x.fragmentShader,a.update(x),Ke=a.getVertexShaderID(x),j=a.getFragmentShaderID(x);const se=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,De=!!x.map,Vt=!!x.matcap,Ze=!!O,et=!!x.aoMap,ct=!!x.lightMap,He=!!x.bumpMap,Ct=!!x.normalMap,L=!!x.displacementMap,Lt=!!x.emissiveMap,Qe=!!x.metalnessMap,dt=!!x.roughnessMap,Se=x.anisotropy>0,R=x.clearcoat>0,b=x.dispersion>0,F=x.iridescence>0,q=x.sheen>0,Z=x.transmission>0,Y=Se&&!!x.anisotropyMap,_e=R&&!!x.clearcoatMap,re=R&&!!x.clearcoatNormalMap,Ae=R&&!!x.clearcoatRoughnessMap,Pe=F&&!!x.iridescenceMap,Q=F&&!!x.iridescenceThicknessMap,ne=q&&!!x.sheenColorMap,ve=q&&!!x.sheenRoughnessMap,ye=!!x.specularMap,pe=!!x.specularColorMap,Ve=!!x.specularIntensityMap,N=Z&&!!x.transmissionMap,oe=Z&&!!x.thicknessMap,ie=!!x.gradientMap,ge=!!x.alphaMap,ee=x.alphaTest>0,X=!!x.alphaHash,xe=!!x.extensions;let Ne=ci;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const pt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:je,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:an,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:Vt,envMap:Ze,envMapMode:Ze&&O.mapping,envMapCubeUVHeight:J,aoMap:et,lightMap:ct,bumpMap:He,normalMap:Ct,displacementMap:L,emissiveMap:Lt,normalMapObjectSpace:Ct&&x.normalMapType===l0,normalMapTangentSpace:Ct&&x.normalMapType===kh,metalnessMap:Qe,roughnessMap:dt,anisotropy:Se,anisotropyMap:Y,clearcoat:R,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Ae,dispersion:b,iridescence:F,iridescenceMap:Pe,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:ne,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:pe,specularIntensityMap:Ve,transmission:Z,transmissionMap:N,thicknessMap:oe,gradientMap:ie,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:X,combine:x.combine,mapUv:De&&p(x.map.channel),aoMapUv:et&&p(x.aoMap.channel),lightMapUv:ct&&p(x.lightMap.channel),bumpMapUv:He&&p(x.bumpMap.channel),normalMapUv:Ct&&p(x.normalMap.channel),displacementMapUv:L&&p(x.displacementMap.channel),emissiveMapUv:Lt&&p(x.emissiveMap.channel),metalnessMapUv:Qe&&p(x.metalnessMap.channel),roughnessMapUv:dt&&p(x.roughnessMap.channel),anisotropyMapUv:Y&&p(x.anisotropyMap.channel),clearcoatMapUv:_e&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(x.sheenRoughnessMap.channel),specularMapUv:ye&&p(x.specularMap.channel),specularColorMapUv:pe&&p(x.specularColorMap.channel),specularIntensityMapUv:Ve&&p(x.specularIntensityMap.channel),transmissionMapUv:N&&p(x.transmissionMap.channel),thicknessMapUv:oe&&p(x.thicknessMap.channel),alphaMapUv:ge&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ct||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(De||ge),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vt,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)S.push(U),S.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(g(S,x),v(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const S=d[x.type];let U;if(S){const C=ii[S];U=ka.clone(C.uniforms)}else U=x.uniforms;return U}function y(x,S){let U=h.get(S);return U!==void 0?++U.usedTimes:(U=new XS(s,S,x,i),c.push(U),h.set(S,U)),U}function T(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function ZS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function JS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ad(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ld(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},s[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,d,p,_,m,g){const v=a(f,d,p,_,m,g);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(f,d,p,_,m,g){const v=a(f,d,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||JS),n.length>1&&n.sort(d||ad),i.length>1&&i.sort(d||ad)}function u(){for(let f=e,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function $S(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ld,s.set(n,[o])):i>=r.length?(o=new ld,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function QS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new K};break;case"SpotLight":t={position:new P,direction:new P,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new K,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new K,groundColor:new K};break;case"RectAreaLight":t={color:new K,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function eb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let tb=0;function nb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ib(s){const e=new QS,t=eb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new Ie,o=new Ie;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,M=0,y=0,T=0,w=0,A=0;c.sort(nb);for(let S=0,U=c.length;S<U;S++){const C=c[S],D=C.color,I=C.intensity,G=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===hr?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*I,u+=D.g*I,f+=D.b*I;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],I);A++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,J=t.get(C);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=z,d++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(D).multiplyScalar(I),z.distance=G,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;const O=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=O.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=k,y++}_++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(D).multiplyScalar(I),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const O=C.shadow,J=t.get(C);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=C.shadow.matrix,M++}n.point[p]=z,p++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(I),z.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[g]=z,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==y||x.numSpotMaps!==T||x.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=y,x.numSpotMaps=T,x.numLightProbes=A,n.version=tb++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function cd(s){const e=new ib(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new cd(s),e.set(i,[a])):r>=o.length?(a=new cd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
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
}`,ab=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],lb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],hd=new Ie,Gr=new P,Hl=new P;function cb(s,e,t){let n=new Ka;const i=new te,r=new te,o=new mt,a=new tu,l=new j_,c={},h=t.maxTextureSize,u={[Ri]:Kt,[Kt]:Ri,[vt]:vt},f=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:rb,fragmentShader:ob}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new At;p.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let g=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Sp&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sa);const S=s.getRenderTarget(),U=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=g!==this.type;I&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(k=>k.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,k=w.length;G<k;G++){const z=w[G],O=z.shadow;if(O===void 0){Te("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const J=O.getFrameExtents();i.multiply(J),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,O.mapSize.y=r.y));const $=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Yr){if(z.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hn(i.x,i.y,{format:hr,type:En,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new _o(i.x,i.y,In),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Pi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot}else z.isPointLight?(O.map=new hm(i.x),O.map.depthTexture=new h_(i.x,hi)):(O.map=new hn(i.x,i.y),O.map.depthTexture=new _o(i.x,i.y,hi)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Pi,this.type===Sa?(O.map.depthTexture.compareFunction=$?Gh:zh,O.map.depthTexture.minFilter=Tt,O.map.depthTexture.magFilter=Tt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot);O.camera.updateProjectionMatrix()}const he=O.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<he;de++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,de),s.clear();else{de===0&&(s.setRenderTarget(O.map),s.clear());const le=O.getViewport(de);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),D.viewport(o)}if(z.isPointLight){const le=O.camera,Fe=O.matrix,je=z.distance||le.far;je!==le.far&&(le.far=je,le.updateProjectionMatrix()),Gr.setFromMatrixPosition(z.matrixWorld),le.position.copy(Gr),Hl.copy(le.position),Hl.add(ab[de]),le.up.copy(lb[de]),le.lookAt(Hl),le.updateMatrixWorld(),Fe.makeTranslation(-Gr.x,-Gr.y,-Gr.z),hd.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),O._frustum.setFromProjectionMatrix(hd,le.coordinateSystem,le.reversedDepth)}else O.updateMatrices(z);n=O.getFrustum(),y(A,x,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Yr&&v(O,x),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(S,U,C)};function v(w,A){const x=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hn(i.x,i.y,{format:hr,type:En})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,x,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,x,d,_,null)}function M(w,A,x,S){let U=null;const C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)U=C;else if(U=x.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=U.uuid,I=A.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let k=G[I];k===void 0&&(k=U.clone(),G[I]=k,A.addEventListener("dispose",T)),U=k}if(U.visible=A.visible,U.wireframe=A.wireframe,S===Yr?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:u[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const D=s.properties.get(U);D.light=x}return U}function y(w,A,x,S,U){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Yr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const I=e.update(w),G=w.material;if(Array.isArray(G)){const k=I.groups;for(let z=0,O=k.length;z<O;z++){const J=k[z],$=G[J.materialIndex];if($&&$.visible){const he=M(w,$,S,U);w.onBeforeShadow(s,w,A,x,I,he,J),s.renderBufferDirect(x,null,I,he,w,J),w.onAfterShadow(s,w,A,x,I,he,J)}}}else if(G.visible){const k=M(w,G,S,U);w.onBeforeShadow(s,w,A,x,I,k,null),s.renderBufferDirect(x,null,I,k,w,null),w.onAfterShadow(s,w,A,x,I,k,null)}}const D=w.children;for(let I=0,G=D.length;I<G;I++)y(D[I],A,x,S,U)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const S=c[x],U=w.target.uuid;U in S&&(S[U].dispose(),delete S[U])}}}function hb(s,e){function t(){let N=!1;const oe=new mt;let ie=null;const ge=new mt(0,0,0,0);return{setMask:function(ee){ie!==ee&&!N&&(s.colorMask(ee,ee,ee,ee),ie=ee)},setLocked:function(ee){N=ee},setClear:function(ee,X,xe,Ne,pt){pt===!0&&(ee*=Ne,X*=Ne,xe*=Ne),oe.set(ee,X,xe,Ne),ge.equals(oe)===!1&&(s.clearColor(ee,X,xe,Ne),ge.copy(oe))},reset:function(){N=!1,ie=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,ie=null,ge=null,ee=null;return{setReversed:function(X){if(oe!==X){const xe=e.get("EXT_clip_control");X?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),oe=X;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return oe},setTest:function(X){X?se(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(X){ie!==X&&!N&&(s.depthMask(X),ie=X)},setFunc:function(X){if(oe&&(X=x0[X]),ge!==X){switch(X){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case lr:s.depthFunc(s.LEQUAL);break;case _c:s.depthFunc(s.EQUAL);break;case vc:s.depthFunc(s.GEQUAL);break;case xc:s.depthFunc(s.GREATER);break;case yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=X}},setLocked:function(X){N=X},setClear:function(X){ee!==X&&(ee=X,oe&&(X=1-X),s.clearDepth(X))},reset:function(){N=!1,ie=null,ge=null,ee=null,oe=!1}}}function i(){let N=!1,oe=null,ie=null,ge=null,ee=null,X=null,xe=null,Ne=null,pt=null;return{setTest:function(tt){N||(tt?se(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!N&&(s.stencilMask(tt),oe=tt)},setFunc:function(tt,gi,_i){(ie!==tt||ge!==gi||ee!==_i)&&(s.stencilFunc(tt,gi,_i),ie=tt,ge=gi,ee=_i)},setOp:function(tt,gi,_i){(X!==tt||xe!==gi||Ne!==_i)&&(s.stencilOp(tt,gi,_i),X=tt,xe=gi,Ne=_i)},setLocked:function(tt){N=tt},setClear:function(tt){pt!==tt&&(s.clearStencil(tt),pt=tt)},reset:function(){N=!1,oe=null,ie=null,ge=null,ee=null,X=null,xe=null,Ne=null,pt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,v=null,M=null,y=null,T=null,w=null,A=new K(0,0,0),x=0,S=!1,U=null,C=null,D=null,I=null,G=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=O>=1):J.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=O>=2);let $=null,he={};const de=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Fe=new mt().fromArray(de),je=new mt().fromArray(le);function Ke(N,oe,ie,ge){const ee=new Uint8Array(4),X=s.createTexture();s.bindTexture(N,X),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ie;xe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(oe+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return X}const j={};j[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(lr),He(!1),Ct(zu),se(s.CULL_FACE),et(li);function se(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function ae(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Be(N,oe){return u[N]!==oe?(s.bindFramebuffer(N,oe),u[N]=oe,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ce(N,oe){let ie=d,ge=!1;if(N){ie=f.get(oe),ie===void 0&&(ie=[],f.set(oe,ie));const ee=N.textures;if(ie.length!==ee.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let X=0,xe=ee.length;X<xe;X++)ie[X]=s.COLOR_ATTACHMENT0+X;ie.length=ee.length,ge=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ie)}function De(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const Vt={[gs]:s.FUNC_ADD,[kg]:s.FUNC_SUBTRACT,[zg]:s.FUNC_REVERSE_SUBTRACT};Vt[Gg]=s.MIN,Vt[Hg]=s.MAX;const Ze={[Vg]:s.ZERO,[Wg]:s.ONE,[Xg]:s.SRC_COLOR,[fc]:s.SRC_ALPHA,[Jg]:s.SRC_ALPHA_SATURATE,[Kg]:s.DST_COLOR,[qg]:s.DST_ALPHA,[Yg]:s.ONE_MINUS_SRC_COLOR,[dc]:s.ONE_MINUS_SRC_ALPHA,[Zg]:s.ONE_MINUS_DST_COLOR,[jg]:s.ONE_MINUS_DST_ALPHA,[$g]:s.CONSTANT_COLOR,[Qg]:s.ONE_MINUS_CONSTANT_COLOR,[e0]:s.CONSTANT_ALPHA,[t0]:s.ONE_MINUS_CONSTANT_ALPHA};function et(N,oe,ie,ge,ee,X,xe,Ne,pt,tt){if(N===li){_===!0&&(ae(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),N!==Bg){if(N!==m||tt!==S){if((g!==gs||y!==gs)&&(s.blendEquation(s.FUNC_ADD),g=gs,y=gs),tt)switch(N){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case co:s.blendFunc(s.ONE,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Re("WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gu:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",N);break}v=null,M=null,T=null,w=null,A.set(0,0,0),x=0,m=N,S=tt}return}ee=ee||oe,X=X||ie,xe=xe||ge,(oe!==g||ee!==y)&&(s.blendEquationSeparate(Vt[oe],Vt[ee]),g=oe,y=ee),(ie!==v||ge!==M||X!==T||xe!==w)&&(s.blendFuncSeparate(Ze[ie],Ze[ge],Ze[X],Ze[xe]),v=ie,M=ge,T=X,w=xe),(Ne.equals(A)===!1||pt!==x)&&(s.blendColor(Ne.r,Ne.g,Ne.b,pt),A.copy(Ne),x=pt),m=N,S=!1}function ct(N,oe){N.side===vt?ae(s.CULL_FACE):se(s.CULL_FACE);let ie=N.side===Kt;oe&&(ie=!ie),He(ie),N.blending===Ss&&N.transparent===!1?et(li):et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(N){U!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),U=N)}function Ct(N){N!==Fg?(se(s.CULL_FACE),N!==C&&(N===zu?s.cullFace(s.BACK):N===Og?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),C=N}function L(N){N!==D&&(z&&s.lineWidth(N),D=N)}function Lt(N,oe,ie){N?(se(s.POLYGON_OFFSET_FILL),(I!==oe||G!==ie)&&(I=oe,G=ie,o.getReversed()&&(oe=-oe),s.polygonOffset(oe,ie))):ae(s.POLYGON_OFFSET_FILL)}function Qe(N){N?se(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function dt(N){N===void 0&&(N=s.TEXTURE0+k-1),$!==N&&(s.activeTexture(N),$=N)}function Se(N,oe,ie){ie===void 0&&($===null?ie=s.TEXTURE0+k-1:ie=$);let ge=he[ie];ge===void 0&&(ge={type:void 0,texture:void 0},he[ie]=ge),(ge.type!==N||ge.texture!==oe)&&($!==ie&&(s.activeTexture(ie),$=ie),s.bindTexture(N,oe||j[N]),ge.type=N,ge.texture=oe)}function R(){const N=he[$];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(N){Re("WebGLState:",N)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(N){Re("WebGLState:",N)}}function q(){try{s.texSubImage2D(...arguments)}catch(N){Re("WebGLState:",N)}}function Z(){try{s.texSubImage3D(...arguments)}catch(N){Re("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Re("WebGLState:",N)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Re("WebGLState:",N)}}function re(){try{s.texStorage2D(...arguments)}catch(N){Re("WebGLState:",N)}}function Ae(){try{s.texStorage3D(...arguments)}catch(N){Re("WebGLState:",N)}}function Pe(){try{s.texImage2D(...arguments)}catch(N){Re("WebGLState:",N)}}function Q(){try{s.texImage3D(...arguments)}catch(N){Re("WebGLState:",N)}}function ne(N){Fe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Fe.copy(N))}function ve(N){je.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function ye(N,oe){let ie=c.get(oe);ie===void 0&&(ie=new WeakMap,c.set(oe,ie));let ge=ie.get(N);ge===void 0&&(ge=s.getUniformBlockIndex(oe,N.name),ie.set(N,ge))}function pe(N,oe){const ge=c.get(oe).get(N);l.get(oe)!==ge&&(s.uniformBlockBinding(oe,ge,N.__bindingPointIndex),l.set(oe,ge))}function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,he={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,v=null,M=null,y=null,T=null,w=null,A=new K(0,0,0),x=0,S=!1,U=null,C=null,D=null,I=null,G=null,Fe.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ae,bindFramebuffer:Be,drawBuffers:Ce,useProgram:De,setBlending:et,setMaterial:ct,setFlipSided:He,setCullFace:Ct,setLineWidth:L,setPolygonOffset:Lt,setScissorTest:Qe,activeTexture:dt,bindTexture:Se,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:F,texImage2D:Pe,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:re,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:_e,scissor:ne,viewport:ve,reset:Ve}}function ub(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return d?new OffscreenCanvas(R,b):go("canvas")}function _(R,b,F){let q=1;const Z=Se(R);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*Z.width),_e=Math.floor(q*Z.height);u===void 0&&(u=p(Y,_e));const re=b?p(Y,_e):u;return re.width=Y,re.height=_e,re.getContext("2d").drawImage(R,0,0,Y,_e),Te("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),re}else return"data"in R&&Te("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,b,F,q,Z=!1){if(R!==null){if(s[R]!==void 0)return s[R];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===s.RED&&(F===s.FLOAT&&(Y=s.R32F),F===s.HALF_FLOAT&&(Y=s.R16F),F===s.UNSIGNED_BYTE&&(Y=s.R8)),b===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.R8UI),F===s.UNSIGNED_SHORT&&(Y=s.R16UI),F===s.UNSIGNED_INT&&(Y=s.R32UI),F===s.BYTE&&(Y=s.R8I),F===s.SHORT&&(Y=s.R16I),F===s.INT&&(Y=s.R32I)),b===s.RG&&(F===s.FLOAT&&(Y=s.RG32F),F===s.HALF_FLOAT&&(Y=s.RG16F),F===s.UNSIGNED_BYTE&&(Y=s.RG8)),b===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RG8UI),F===s.UNSIGNED_SHORT&&(Y=s.RG16UI),F===s.UNSIGNED_INT&&(Y=s.RG32UI),F===s.BYTE&&(Y=s.RG8I),F===s.SHORT&&(Y=s.RG16I),F===s.INT&&(Y=s.RG32I)),b===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),F===s.UNSIGNED_INT&&(Y=s.RGB32UI),F===s.BYTE&&(Y=s.RGB8I),F===s.SHORT&&(Y=s.RGB16I),F===s.INT&&(Y=s.RGB32I)),b===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),F===s.UNSIGNED_INT&&(Y=s.RGBA32UI),F===s.BYTE&&(Y=s.RGBA8I),F===s.SHORT&&(Y=s.RGBA16I),F===s.INT&&(Y=s.RGBA32I)),b===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),b===s.RGBA){const _e=Z?Na:Ye.getTransfer(q);F===s.FLOAT&&(Y=s.RGBA32F),F===s.HALF_FLOAT&&(Y=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Y=_e===nt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(R,b){let F;return R?b===null||b===hi||b===uo?F=s.DEPTH24_STENCIL8:b===In?F=s.DEPTH32F_STENCIL8:b===ho&&(F=s.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hi||b===uo?F=s.DEPTH_COMPONENT24:b===In?F=s.DEPTH_COMPONENT32F:b===ho&&(F=s.DEPTH_COMPONENT16),F}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==Tt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),x(b),b.isVideoTexture&&h.delete(b)}function A(R){const b=R.target;b.removeEventListener("dispose",A),U(b)}function x(R){const b=n.get(R);if(b.__webglInit===void 0)return;const F=R.source,q=f.get(F);if(q){const Z=q[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(R),Object.keys(q).length===0&&f.delete(F)}n.remove(R)}function S(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const F=R.source,q=f.get(F);delete q[b.__cacheKey],o.memory.textures--}function U(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let Z=0;Z<b.__webglFramebuffer[q].length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[q][Z]);else s.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)s.deleteFramebuffer(b.__webglFramebuffer[q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,Z=F.length;q<Z;q++){const Y=n.get(F[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[q])}n.remove(R)}let C=0;function D(){C=0}function I(){const R=C;return R>=i.maxTextures&&Te("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function G(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const F=n.get(R);if(R.isVideoTexture&&Qe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,R,b);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+b)}function z(R,b){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,b);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+b)}function O(R,b){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){j(F,R,b);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+b)}function J(R,b){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){se(F,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+b)}const $={[Kn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Ia]:s.MIRRORED_REPEAT},he={[Ot]:s.NEAREST,[Pp]:s.NEAREST_MIPMAP_NEAREST,[qr]:s.NEAREST_MIPMAP_LINEAR,[Tt]:s.LINEAR,[ba]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},de={[c0]:s.NEVER,[p0]:s.ALWAYS,[h0]:s.LESS,[zh]:s.LEQUAL,[u0]:s.EQUAL,[Gh]:s.GEQUAL,[f0]:s.GREATER,[d0]:s.NOTEQUAL};function le(R,b){if(b.type===In&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Tt||b.magFilter===ba||b.magFilter===qr||b.magFilter===ri||b.minFilter===Tt||b.minFilter===ba||b.minFilter===qr||b.minFilter===ri)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,$[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,$[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,$[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,he[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,he[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ot||b.minFilter!==qr&&b.minFilter!==ri||b.type===In&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Fe(R,b){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const q=b.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const Y=G(b);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[Y].usedTimes++;const _e=Z[R.__cacheKey];_e!==void 0&&(Z[R.__cacheKey].usedTimes--,_e.usedTimes===0&&S(b)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return F}function je(R,b,F){return Math.floor(Math.floor(R/F)/b)}function Ke(R,b,F,q){const Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,F,q,b.data);else{Y.sort((Q,ne)=>Q.start-ne.start);let _e=0;for(let Q=1;Q<Y.length;Q++){const ne=Y[_e],ve=Y[Q],ye=ne.start+ne.count,pe=je(ve.start,b.width,4),Ve=je(ne.start,b.width,4);ve.start<=ye+1&&pe===Ve&&je(ve.start+ve.count-1,b.width,4)===pe?ne.count=Math.max(ne.count,ve.start+ve.count-ne.start):(++_e,Y[_e]=ve)}Y.length=_e+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),Ae=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Q=0,ne=Y.length;Q<ne;Q++){const ve=Y[Q],ye=Math.floor(ve.start/4),pe=Math.ceil(ve.count/4),Ve=ye%b.width,N=Math.floor(ye/b.width),oe=pe,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ve,N,oe,ie,F,q,b.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function j(R,b,F){let q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=s.TEXTURE_3D);const Z=Fe(R,b),Y=b.source;t.bindTexture(q,R.__webglTexture,s.TEXTURE0+F);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const re=Ye.getPrimaries(Ye.workingColorSpace),Ae=b.colorSpace===Vi?null:Ye.getPrimaries(b.colorSpace),Pe=b.colorSpace===Vi||re===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Q=_(b.image,!1,i.maxTextureSize);Q=dt(b,Q);const ne=r.convert(b.format,b.colorSpace),ve=r.convert(b.type);let ye=M(b.internalFormat,ne,ve,b.colorSpace,b.isVideoTexture);le(q,b);let pe;const Ve=b.mipmaps,N=b.isVideoTexture!==!0,oe=_e.__version===void 0||Z===!0,ie=Y.dataReady,ge=T(b,Q);if(b.isDepthTexture)ye=y(b.format===xs,b.type),oe&&(N?t.texStorage2D(s.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,ne,ve,null));else if(b.isDataTexture)if(Ve.length>0){N&&oe&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Ve[0].width,Ve[0].height);for(let ee=0,X=Ve.length;ee<X;ee++)pe=Ve[ee],N?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,pe.width,pe.height,ne,ve,pe.data):t.texImage2D(s.TEXTURE_2D,ee,ye,pe.width,pe.height,0,ne,ve,pe.data);b.generateMipmaps=!1}else N?(oe&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Q.width,Q.height),ie&&Ke(b,Q,ne,ve)):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,ne,ve,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ye,Ve[0].width,Ve[0].height,Q.depth);for(let ee=0,X=Ve.length;ee<X;ee++)if(pe=Ve[ee],b.format!==Nn)if(ne!==null)if(N){if(ie)if(b.layerUpdates.size>0){const xe=Hf(pe.width,pe.height,b.format,b.type);for(const Ne of b.layerUpdates){const pt=pe.data.subarray(Ne*xe/pe.data.BYTES_PER_ELEMENT,(Ne+1)*xe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ne,pe.width,pe.height,1,ne,pt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,Q.depth,ne,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,Q.depth,ne,ve,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,Q.depth,0,ne,ve,pe.data)}else{N&&oe&&t.texStorage2D(s.TEXTURE_2D,ge,ye,Ve[0].width,Ve[0].height);for(let ee=0,X=Ve.length;ee<X;ee++)pe=Ve[ee],b.format!==Nn?ne!==null?N?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,pe.width,pe.height,ne,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ye,pe.width,pe.height,0,pe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,pe.width,pe.height,ne,ve,pe.data):t.texImage2D(s.TEXTURE_2D,ee,ye,pe.width,pe.height,0,ne,ve,pe.data)}else if(b.isDataArrayTexture)if(N){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ye,Q.width,Q.height,Q.depth),ie)if(b.layerUpdates.size>0){const ee=Hf(Q.width,Q.height,b.format,b.type);for(const X of b.layerUpdates){const xe=Q.data.subarray(X*ee/Q.data.BYTES_PER_ELEMENT,(X+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,ne,ve,xe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ne,ve,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ne,ve,Q.data);else if(b.isData3DTexture)N?(oe&&t.texStorage3D(s.TEXTURE_3D,ge,ye,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ne,ve,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ne,ve,Q.data);else if(b.isFramebufferTexture){if(oe)if(N)t.texStorage2D(s.TEXTURE_2D,ge,ye,Q.width,Q.height);else{let ee=Q.width,X=Q.height;for(let xe=0;xe<ge;xe++)t.texImage2D(s.TEXTURE_2D,xe,ye,ee,X,0,ne,ve,null),ee>>=1,X>>=1}}else if(Ve.length>0){if(N&&oe){const ee=Se(Ve[0]);t.texStorage2D(s.TEXTURE_2D,ge,ye,ee.width,ee.height)}for(let ee=0,X=Ve.length;ee<X;ee++)pe=Ve[ee],N?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ne,ve,pe):t.texImage2D(s.TEXTURE_2D,ee,ye,ne,ve,pe);b.generateMipmaps=!1}else if(N){if(oe){const ee=Se(Q);t.texStorage2D(s.TEXTURE_2D,ge,ye,ee.width,ee.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne,ve,Q)}else t.texImage2D(s.TEXTURE_2D,0,ye,ne,ve,Q);m(b)&&g(q),_e.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function se(R,b,F){if(b.image.length!==6)return;const q=Fe(R,b),Z=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+F);const Y=n.get(Z);if(Z.version!==Y.__version||q===!0){t.activeTexture(s.TEXTURE0+F);const _e=Ye.getPrimaries(Ye.workingColorSpace),re=b.colorSpace===Vi?null:Ye.getPrimaries(b.colorSpace),Ae=b.colorSpace===Vi||_e===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let X=0;X<6;X++)!Pe&&!Q?ne[X]=_(b.image[X],!0,i.maxCubemapSize):ne[X]=Q?b.image[X].image:b.image[X],ne[X]=dt(b,ne[X]);const ve=ne[0],ye=r.convert(b.format,b.colorSpace),pe=r.convert(b.type),Ve=M(b.internalFormat,ye,pe,b.colorSpace),N=b.isVideoTexture!==!0,oe=Y.__version===void 0||q===!0,ie=Z.dataReady;let ge=T(b,ve);le(s.TEXTURE_CUBE_MAP,b);let ee;if(Pe){N&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ve,ve.width,ve.height);for(let X=0;X<6;X++){ee=ne[X].mipmaps;for(let xe=0;xe<ee.length;xe++){const Ne=ee[xe];b.format!==Nn?ye!==null?N?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Ne.width,Ne.height,ye,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ve,Ne.width,Ne.height,0,Ne.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,Ne.width,Ne.height,ye,pe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ve,Ne.width,Ne.height,0,ye,pe,Ne.data)}}}else{if(ee=b.mipmaps,N&&oe){ee.length>0&&ge++;const X=Se(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ve,X.width,X.height)}for(let X=0;X<6;X++)if(Q){N?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ne[X].width,ne[X].height,ye,pe,ne[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ne[X].width,ne[X].height,0,ye,pe,ne[X].data);for(let xe=0;xe<ee.length;xe++){const pt=ee[xe].image[X].image;N?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,pt.width,pt.height,ye,pe,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ve,pt.width,pt.height,0,ye,pe,pt.data)}}else{N?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye,pe,ne[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ve,ye,pe,ne[X]);for(let xe=0;xe<ee.length;xe++){const Ne=ee[xe];N?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ye,pe,Ne.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ve,ye,pe,Ne.image[X])}}}m(b)&&g(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ae(R,b,F,q,Z,Y){const _e=r.convert(F.format,F.colorSpace),re=r.convert(F.type),Ae=M(F.internalFormat,_e,re,F.colorSpace),Pe=n.get(b),Q=n.get(F);if(Q.__renderTarget=b,!Pe.__hasExternalTextures){const ne=Math.max(1,b.width>>Y),ve=Math.max(1,b.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Ae,ne,ve,b.depth,0,_e,re,null):t.texImage2D(Z,Y,Ae,ne,ve,0,_e,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Lt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Z,Q.__webglTexture,0,L(b)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Z,Q.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,b,F){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const q=b.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=y(b.stencilBuffer,Z),_e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Lt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(b),Y,b.width,b.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(b),Y,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Y,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,R)}else{const q=b.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],_e=r.convert(Y.format,Y.colorSpace),re=r.convert(Y.type),Ae=M(Y.internalFormat,_e,re,Y.colorSpace);Lt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L(b),Ae,b.width,b.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,L(b),Ae,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(R,b,F){const q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),le(s.TEXTURE_CUBE_MAP,b.depthTexture);const Pe=r.convert(b.depthTexture.format),Q=r.convert(b.depthTexture.type);let ne;b.depthTexture.format===Pi?ne=s.DEPTH_COMPONENT24:b.depthTexture.format===xs&&(ne=s.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ne,b.width,b.height,0,Pe,Q,null)}}else k(b.depthTexture,0);const Y=Z.__webglTexture,_e=L(b),re=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,Ae=b.depthTexture.format===xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Pi)Lt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,re,Y,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,re,Y,0);else if(b.depthTexture.format===xs)Lt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,re,Y,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,re,Y,0);else throw new Error("Unknown depthTexture format")}function De(R){const b=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)Ce(b.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Ce(b.__webglFramebuffer[0],R,0):Ce(b.__webglFramebuffer,R,0)}else if(F){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=s.createRenderbuffer(),Be(b.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Be(b.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,b,F){const q=n.get(R);b!==void 0&&ae(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&De(R)}function Ze(R){const b=R.texture,F=n.get(R),q=n.get(b);R.addEventListener("dispose",A);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=b.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)F.__webglFramebuffer[re][Ae]=s.createFramebuffer()}else F.__webglFramebuffer[re]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)F.__webglFramebuffer[re]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(_e)for(let re=0,Ae=Z.length;re<Ae;re++){const Pe=n.get(Z[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Lt(R)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Ae=Z[re];F.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Pe=r.convert(Ae.format,Ae.colorSpace),Q=r.convert(Ae.type),ne=M(Ae.internalFormat,Pe,Q,Ae.colorSpace,R.isXRRenderTarget===!0),ve=L(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,ne,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,F.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),le(s.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ae=0;Ae<b.mipmaps.length;Ae++)ae(F.__webglFramebuffer[re][Ae],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae);else ae(F.__webglFramebuffer[re],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(b)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,Ae=Z.length;re<Ae;re++){const Pe=Z[re],Q=n.get(Pe);let ne=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,Q.__webglTexture),le(ne,Pe),ae(F.__webglFramebuffer,R,Pe,s.COLOR_ATTACHMENT0+re,ne,0),m(Pe)&&g(ne)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),le(re,b),b.mipmaps&&b.mipmaps.length>0)for(let Ae=0;Ae<b.mipmaps.length;Ae++)ae(F.__webglFramebuffer[Ae],R,b,s.COLOR_ATTACHMENT0,re,Ae);else ae(F.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,re,0);m(b)&&g(re),t.unbindTexture()}R.depthBuffer&&De(R)}function et(R){const b=R.textures;for(let F=0,q=b.length;F<q;F++){const Z=b[F];if(m(Z)){const Y=v(R),_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),g(Y),t.unbindTexture()}}}const ct=[],He=[];function Ct(R){if(R.samples>0){if(Lt(R)===!1){const b=R.textures,F=R.width,q=R.height;let Z=s.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(R),re=b.length>1;if(re)for(let Pe=0;Pe<b.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ae=R.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Pe]);const Q=n.get(b[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,Z,s.NEAREST),l===!0&&(ct.length=0,He.length=0,ct.push(s.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(Y),He.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Pe=0;Pe<b.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Pe]);const Q=n.get(b[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function L(R){return Math.min(i.maxSamples,R.samples)}function Lt(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qe(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function dt(R,b){const F=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==an&&F!==Vi&&(Ye.getTransfer(F)===nt?(q!==Nn||Z!==Mn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",F)),b}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=Vt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fb(s,e){function t(n,i=Vi){let r;const o=Ye.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Ih)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ip)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Np)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dp)return s.BYTE;if(n===Lp)return s.SHORT;if(n===ho)return s.UNSIGNED_SHORT;if(n===Lh)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===In)return s.FLOAT;if(n===En)return s.HALF_FLOAT;if(n===Up)return s.ALPHA;if(n===Fp)return s.RGB;if(n===Nn)return s.RGBA;if(n===Pi)return s.DEPTH_COMPONENT;if(n===xs)return s.DEPTH_STENCIL;if(n===Uh)return s.RED;if(n===Fh)return s.RED_INTEGER;if(n===hr)return s.RG;if(n===Oh)return s.RG_INTEGER;if(n===Bh)return s.RGBA_INTEGER;if(n===Ta||n===wa||n===Ea||n===Aa)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Sc||n===bc||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Ec||n===Ac||n===Cc||n===Rc||n===Pc||n===Dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Ec)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cc)return r.COMPRESSED_R11_EAC;if(n===Rc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pc)return r.COMPRESSED_RG11_EAC;if(n===Dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lc||n===Ic||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Gc||n===Hc||n===Vc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===qc||n===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yc)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Zc||n===Jc||n===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===uo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pb=`
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

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:db,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends Ps{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new mb,g={},v=t.getContextAttributes();let M=null,y=null;const T=[],w=[],A=new te;let x=null;const S=new rn;S.viewport=new mt;const U=new rn;U.viewport=new mt;const C=[S,U],D=new mv;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=T[j];return se===void 0&&(se=new fl,T[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=T[j];return se===void 0&&(se=new fl,T[j]=se),se.getGripSpace()},this.getHand=function(j){let se=T[j];return se===void 0&&(se=new fl,T[j]=se),se.getHandSpace()};function k(j){const se=w.indexOf(j.inputSource);if(se===-1)return;const ae=T[se];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",O);for(let j=0;j<T.length;j++){const se=w[j];se!==null&&(w[j]=null,T[j].disconnect(se))}I=null,G=null,m.reset();for(const j in g)delete g[j];e.setRenderTarget(M),d=null,f=null,u=null,i=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Be=null,Ce=null;v.depth&&(Ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?xs:Pi,Be=v.stencil?uo:hi);const De={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new hn(f.textureWidth,f.textureHeight,{format:Nn,type:Mn,depthTexture:new _o(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hn(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let se=0;se<j.removed.length;se++){const ae=j.removed[se],Be=w.indexOf(ae);Be>=0&&(w[Be]=null,T[Be].disconnect(ae))}for(let se=0;se<j.added.length;se++){const ae=j.added[se];let Be=w.indexOf(ae);if(Be===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(ae),Be=De;break}else if(w[De]===null){w[De]=ae,Be=De;break}if(Be===-1)break}const Ce=T[Be];Ce&&Ce.connect(ae)}}const J=new P,$=new P;function he(j,se,ae){J.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);const Be=J.distanceTo($),Ce=se.projectionMatrix.elements,De=ae.projectionMatrix.elements,Vt=Ce[14]/(Ce[10]-1),Ze=Ce[14]/(Ce[10]+1),et=(Ce[9]+1)/Ce[5],ct=(Ce[9]-1)/Ce[5],He=(Ce[8]-1)/Ce[0],Ct=(De[8]+1)/De[0],L=Vt*He,Lt=Vt*Ct,Qe=Be/(-He+Ct),dt=Qe*-He;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(dt),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Se=Vt+Qe,R=Ze+Qe,b=L-dt,F=Lt+(Be-dt),q=et*Ze/R*Se,Z=ct*Ze/R*Se;j.projectionMatrix.makePerspective(b,F,q,Z,Se,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function de(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let se=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),D.near=U.near=S.near=se,D.far=U.far=S.far=ae,(I!==D.near||G!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,G=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;const Be=j.parent,Ce=D.cameras;de(D,Be);for(let De=0;De<Ce.length;De++)de(Ce[De],Be);Ce.length===2?he(D,S,U):D.projectionMatrix.copy(S.projectionMatrix),le(j,D,Be)};function le(j,se,ae){ae===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ur*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(j){return g[j]};let Fe=null;function je(j,se){if(h=se.getViewerPose(c||o),p=se,h!==null){const ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Be=!1;ae.length!==D.cameras.length&&(D.cameras.length=0,Be=!0);for(let Ze=0;Ze<ae.length;Ze++){const et=ae[Ze];let ct=null;if(d!==null)ct=d.getViewport(et);else{const Ct=u.getViewSubImage(f,et);ct=Ct.viewport,Ze===0&&(e.setRenderTargetTextures(y,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(y))}let He=C[Ze];He===void 0&&(He=new rn,He.layers.enable(Ze),He.viewport=new mt,C[Ze]=He),He.matrix.fromArray(et.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(et.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ct.x,ct.y,ct.width,ct.height),Ze===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Be===!0&&D.cameras.push(He)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ze=u.getDepthInformation(ae[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,i.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ze=0;Ze<ae.length;Ze++){const et=ae[Ze].camera;if(et){let ct=g[et];ct||(ct=new jp,g[et]=ct);const He=u.getCameraImage(et);ct.sourceTexture=He}}}}for(let ae=0;ae<T.length;ae++){const Be=w[ae],Ce=T[ae];Be!==null&&Ce!==void 0&&Ce.update(Be,se,c||o)}Fe&&Fe(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),p=null}const Ke=new cm;Ke.setAnimationLoop(je),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const cs=new Zn,_b=new Ie;function vb(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,im(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,y){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,cs.copy(y),cs.x*=-1,cs.y*=-1,cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(cs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xb(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=i[v.id];y===void 0&&(p(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(v,T);const w=e.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){const M=u();v.__bindingPointIndex=M;const y=s.createBuffer(),T=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,A=y.length;w<A;w++){const x=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,U=x.length;S<U;S++){const C=x[S];if(d(C,w,S,T)===!0){const D=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let k=0;k<I.length;k++){const z=I[k],O=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,D+G,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,G),G+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,M,y,T){const w=v.value,A=M+"_"+y;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const x=T[A];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return T[A]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function p(v){const M=v.uniforms;let y=0;const T=16;for(let A=0,x=M.length;A<x;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let U=0,C=S.length;U<C;U++){const D=S[U],I=Array.isArray(D.value)?D.value:[D.value];for(let G=0,k=I.length;G<k;G++){const z=I[G],O=_(z),J=y%T,$=J%O.boundary,he=J+$;y+=$,he!==0&&T-he<O.storage&&(y+=T-he),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=O.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Te("WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}const yb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function Mb(){return ei===null&&(ei=new qh(yb,16,16,hr,En),ei.name="DFG_LUT",ei.minFilter=Tt,ei.magFilter=Tt,ei.wrapS=bn,ei.wrapT=bn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class Sb{constructor(e={}){const{canvas:t=_0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=d,m=new Set([Bh,Oh,Fh]),g=new Set([Mn,hi,ho,uo,Ih,Nh]),v=new Uint32Array(4),M=new Int32Array(4);let y=null,T=null;const w=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let U=!1;this._outputColorSpace=Mt;let C=0,D=0,I=null,G=-1,k=null;const z=new mt,O=new mt;let J=null;const $=new K(0);let he=0,de=t.width,le=t.height,Fe=1,je=null,Ke=null;const j=new mt(0,0,de,le),se=new mt(0,0,de,le);let ae=!1;const Be=new Ka;let Ce=!1,De=!1;const Vt=new Ie,Ze=new P,et=new mt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Ct(){return I===null?Fe:1}let L=n;function Lt(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r183"),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",pt,!1),L===null){const B="webgl2";if(L=Lt(B,E),L===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Re("WebGLRenderer: "+E.message),E}let Qe,dt,Se,R,b,F,q,Z,Y,_e,re,Ae,Pe,Q,ne,ve,ye,pe,Ve,N,oe,ie,ge;function ee(){Qe=new SM(L),Qe.init(),oe=new fb(L,Qe),dt=new pM(L,Qe,e,oe),Se=new hb(L,Qe),dt.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),R=new wM(L),b=new ZS,F=new ub(L,Qe,Se,b,dt,oe,R),q=new MM(S),Z=new Pv(L),ie=new fM(L,Z),Y=new bM(L,Z,R,ie),_e=new AM(L,Y,Z,ie,R),pe=new EM(L,dt,F),ne=new mM(b),re=new KS(S,q,Qe,dt,ie,ne),Ae=new vb(S,b),Pe=new $S,Q=new sb(Qe),ye=new uM(S,q,Se,_e,p,l),ve=new cb(S,_e,dt),ge=new xb(L,R,dt,Se),Ve=new dM(L,Qe,R),N=new TM(L,Qe,R),R.programs=re.programs,S.capabilities=dt,S.extensions=Qe,S.properties=b,S.renderLists=Pe,S.shadowMap=ve,S.state=Se,S.info=R}ee(),_!==Mn&&(x=new RM(_,t.width,t.height,i,r));const X=new gb(S,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){E!==void 0&&(Fe=E,this.setSize(de,le,!1))},this.getSize=function(E){return E.set(de,le)},this.setSize=function(E,B,W=!0){if(X.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}de=E,le=B,t.width=Math.floor(E*Fe),t.height=Math.floor(B*Fe),W===!0&&(t.style.width=E+"px",t.style.height=B+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(de*Fe,le*Fe).floor()},this.setDrawingBufferSize=function(E,B,W){de=E,le=B,Fe=W,t.width=Math.floor(E*W),t.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,B,W,V){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,B,W,V),Se.viewport(z.copy(j).multiplyScalar(Fe).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,B,W,V){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,B,W,V),Se.scissor(O.copy(se).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){Se.setScissorTest(ae=E)},this.setOpaqueSort=function(E){je=E},this.setTransparentSort=function(E){Ke=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,W=!0){let V=0;if(E){let H=!1;if(I!==null){const ue=I.texture.format;H=m.has(ue)}if(H){const ue=I.texture.type,me=g.has(ue),fe=ye.getClearColor(),Me=ye.getClearAlpha(),we=fe.r,Oe=fe.g,We=fe.b;me?(v[0]=we,v[1]=Oe,v[2]=We,v[3]=Me,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=we,M[1]=Oe,M[2]=We,M[3]=Me,L.clearBufferiv(L.COLOR,0,M))}else V|=L.COLOR_BUFFER_BIT}B&&(V|=L.DEPTH_BUFFER_BIT),W&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),ye.dispose(),Pe.dispose(),Q.dispose(),b.dispose(),q.dispose(),_e.dispose(),ie.dispose(),ge.dispose(),re.dispose(),X.dispose(),X.removeEventListener("sessionstart",Lu),X.removeEventListener("sessionend",Iu),ns.stop()};function xe(E){E.preventDefault(),Ua("WebGLRenderer: Context Lost."),U=!0}function Ne(){Ua("WebGLRenderer: Context Restored."),U=!1;const E=R.autoReset,B=ve.enabled,W=ve.autoUpdate,V=ve.needsUpdate,H=ve.type;ee(),R.autoReset=E,ve.enabled=B,ve.autoUpdate=W,ve.needsUpdate=V,ve.type=H}function pt(E){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function tt(E){const B=E.target;B.removeEventListener("dispose",tt),gi(B)}function gi(E){_i(E),b.remove(E)}function _i(E){const B=b.get(E).programs;B!==void 0&&(B.forEach(function(W){re.releaseProgram(W)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,V,H,ue){B===null&&(B=ct);const me=H.isMesh&&H.matrixWorld.determinant()<0,fe=Pg(E,B,W,V,H);Se.setMaterial(V,me);let Me=W.index,we=1;if(V.wireframe===!0){if(Me=Y.getWireframeAttribute(W),Me===void 0)return;we=2}const Oe=W.drawRange,We=W.attributes.position;let Ee=Oe.start*we,rt=(Oe.start+Oe.count)*we;ue!==null&&(Ee=Math.max(Ee,ue.start*we),rt=Math.min(rt,(ue.start+ue.count)*we)),Me!==null?(Ee=Math.max(Ee,0),rt=Math.min(rt,Me.count)):We!=null&&(Ee=Math.max(Ee,0),rt=Math.min(rt,We.count));const Rt=rt-Ee;if(Rt<0||Rt===1/0)return;ie.setup(H,V,fe,W,Me);let wt,ot=Ve;if(Me!==null&&(wt=Z.get(Me),ot=N,ot.setIndex(wt)),H.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*Ct()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(H.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),Se.setLineWidth(Jt*Ct()),H.isLineSegments?ot.setMode(L.LINES):H.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else H.isPoints?ot.setMode(L.POINTS):H.isSprite&&ot.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Fa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Jt=H._multiDrawStarts,be=H._multiDrawCounts,_n=H._multiDrawCount,Je=Me?Z.get(Me).bytesPerElement:1,kn=b.get(V).currentProgram.getUniforms();for(let $n=0;$n<_n;$n++)kn.setValue(L,"_gl_DrawID",$n),ot.render(Jt[$n]/Je,be[$n])}else if(H.isInstancedMesh)ot.renderInstances(Ee,Rt,H.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Jt);ot.renderInstances(Ee,Rt,be)}else ot.render(Ee,Rt)};function Du(E,B,W){E.transparent===!0&&E.side===vt&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,Fo(E,B,W),E.side=Ri,E.needsUpdate=!0,Fo(E,B,W),E.side=vt):Fo(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),T=Q.get(W),T.init(B),A.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const fe=ue[me];Du(fe,W,H),V.add(fe)}else Du(ue,W,H),V.add(ue)}),T=A.pop(),V},this.compileAsync=function(E,B,W=null){const V=this.compile(E,B,W);return new Promise(H=>{function ue(){if(V.forEach(function(me){b.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){H(E);return}setTimeout(ue,10)}Qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let nl=null;function Rg(E){nl&&nl(E)}function Lu(){ns.stop()}function Iu(){ns.start()}const ns=new cm;ns.setAnimationLoop(Rg),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(E){nl=E,X.setAnimationLoop(E),E===null?ns.stop():ns.start()},X.addEventListener("sessionstart",Lu),X.addEventListener("sessionend",Iu),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,V=x!==null&&(I===null||W)&&x.begin(S,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(B),B=X.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,B,I),T=Q.get(E,A.length),T.init(B),A.push(T),Vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(Vt,oi,B.reversedDepth),De=this.localClippingEnabled,Ce=ne.init(this.clippingPlanes,De),y=Pe.get(E,w.length),y.init(),w.push(y),X.enabled===!0&&X.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&il(me,B,-1/0,S.sortObjects)}il(E,B,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(je,Ke),He=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,He&&ye.addToRenderList(y,E),this.info.render.frame++,Ce===!0&&ne.beginShadows();const H=T.state.shadowsArray;if(ve.render(H,E,B),Ce===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&x.hasRenderPass())===!1){const me=y.opaque,fe=y.transmissive;if(T.setupLights(),B.isArrayCamera){const Me=B.cameras;if(fe.length>0)for(let we=0,Oe=Me.length;we<Oe;we++){const We=Me[we];Uu(me,fe,E,We)}He&&ye.render(E);for(let we=0,Oe=Me.length;we<Oe;we++){const We=Me[we];Nu(y,E,We,We.viewport)}}else fe.length>0&&Uu(me,fe,E,B),He&&ye.render(E),Nu(y,E,B)}I!==null&&D===0&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),V&&x.end(S),E.isScene===!0&&E.onAfterRender(S,E,B),ie.resetDefaultState(),G=-1,k=null,A.pop(),A.length>0?(T=A[A.length-1],Ce===!0&&ne.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function il(E,B,W,V){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){V&&et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Vt);const me=_e.update(E),fe=E.material;fe.visible&&y.push(E,me,fe,W,et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const me=_e.update(E),fe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),et.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),et.copy(me.boundingSphere.center)),et.applyMatrix4(E.matrixWorld).applyMatrix4(Vt)),Array.isArray(fe)){const Me=me.groups;for(let we=0,Oe=Me.length;we<Oe;we++){const We=Me[we],Ee=fe[We.materialIndex];Ee&&Ee.visible&&y.push(E,me,Ee,W,et.z,We)}}else fe.visible&&y.push(E,me,fe,W,et.z,null)}}const ue=E.children;for(let me=0,fe=ue.length;me<fe;me++)il(ue[me],B,W,V)}function Nu(E,B,W,V){const{opaque:H,transmissive:ue,transparent:me}=E;T.setupLightsView(W),Ce===!0&&ne.setGlobalState(S.clippingPlanes,W),V&&Se.viewport(z.copy(V)),H.length>0&&Uo(H,B,W),ue.length>0&&Uo(ue,B,W),me.length>0&&Uo(me,B,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Uu(E,B,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ee=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new hn(1,1,{generateMipmaps:!0,type:Ee?En:Mn,minFilter:ri,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ue=T.state.transmissionRenderTarget[V.id],me=V.viewport||z;ue.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),Me=S.getActiveCubeFace(),we=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor($),he=S.getClearAlpha(),he<1&&S.setClearColor(16777215,.5),S.clear(),He&&ye.render(W);const Oe=S.toneMapping;S.toneMapping=ci;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ce===!0&&ne.setGlobalState(S.clippingPlanes,V),Uo(E,W,V),F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let rt=0,Rt=B.length;rt<Rt;rt++){const wt=B[rt],{object:ot,geometry:Jt,material:be,group:_n}=wt;if(be.side===vt&&ot.layers.test(V.layers)){const Je=be.side;be.side=Kt,be.needsUpdate=!0,Fu(ot,W,V,Jt,be,_n),be.side=Je,be.needsUpdate=!0,Ee=!0}}Ee===!0&&(F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue))}S.setRenderTarget(fe,Me,we),S.setClearColor($,he),We!==void 0&&(V.viewport=We),S.toneMapping=Oe}function Uo(E,B,W){const V=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ue=E.length;H<ue;H++){const me=E[H],{object:fe,geometry:Me,group:we}=me;let Oe=me.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),fe.layers.test(W.layers)&&Fu(fe,B,W,Me,Oe,we)}}function Fu(E,B,W,V,H,ue){E.onBeforeRender(S,B,W,V,H,ue),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(S,B,W,V,E,ue),H.transparent===!0&&H.side===vt&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,S.renderBufferDirect(W,B,V,H,E,ue),H.side=Ri,H.needsUpdate=!0,S.renderBufferDirect(W,B,V,H,E,ue),H.side=vt):S.renderBufferDirect(W,B,V,H,E,ue),E.onAfterRender(S,B,W,V,H,ue)}function Fo(E,B,W){B.isScene!==!0&&(B=ct);const V=b.get(E),H=T.state.lights,ue=T.state.shadowsArray,me=H.state.version,fe=re.getParameters(E,H.state,ue,B,W),Me=re.getProgramCacheKey(fe);let we=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=q.get(E.envMap||V.environment,Oe),V.envMapRotation=V.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",tt),we=new Map,V.programs=we);let We=we.get(Me);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===me)return Bu(E,fe),We}else fe.uniforms=re.getUniforms(E),E.onBeforeCompile(fe,S),We=re.acquireProgram(fe,Me),we.set(Me,We),V.uniforms=fe.uniforms;const Ee=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),Bu(E,fe),V.needsLights=Lg(E),V.lightsStateVersion=me,V.needsLights&&(Ee.ambientLightColor.value=H.state.ambient,Ee.lightProbe.value=H.state.probe,Ee.directionalLights.value=H.state.directional,Ee.directionalLightShadows.value=H.state.directionalShadow,Ee.spotLights.value=H.state.spot,Ee.spotLightShadows.value=H.state.spotShadow,Ee.rectAreaLights.value=H.state.rectArea,Ee.ltc_1.value=H.state.rectAreaLTC1,Ee.ltc_2.value=H.state.rectAreaLTC2,Ee.pointLights.value=H.state.point,Ee.pointLightShadows.value=H.state.pointShadow,Ee.hemisphereLights.value=H.state.hemi,Ee.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ee.spotLightMatrix.value=H.state.spotLightMatrix,Ee.spotLightMap.value=H.state.spotLightMap,Ee.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=We,V.uniformsList=null,We}function Ou(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Ca.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Bu(E,B){const W=b.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Pg(E,B,W,V,H){B.isScene!==!0&&(B=ct),F.resetTextureUnits();const ue=B.fog,me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,fe=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:an,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=q.get(V.envMap||me,Me),Oe=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let wt=ci;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=S.toneMapping);const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=ot!==void 0?ot.length:0,be=b.get(V),_n=T.state.lights;if(Ce===!0&&(De===!0||E!==k)){const Wt=E===k&&V.id===G;ne.setState(V,E,Wt)}let Je=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==_n.state.version||be.outputColorSpace!==fe||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==we||V.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==We||be.morphTargets!==Ee||be.morphNormals!==rt||be.morphColors!==Rt||be.toneMapping!==wt||be.morphTargetsCount!==Jt)&&(Je=!0):(Je=!0,be.__version=V.version);let kn=be.currentProgram;Je===!0&&(kn=Fo(V,B,H));let $n=!1,is=!1,Ls=!1;const ht=kn.getUniforms(),jt=be.uniforms;if(Se.useProgram(kn.program)&&($n=!0,is=!0,Ls=!0),V.id!==G&&(G=V.id,is=!0),$n||k!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(L,"projectionMatrix",E.projectionMatrix),ht.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ni=ht.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,Ze.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,is=!0,Ls=!0)}if(be.needsLights&&(_n.state.directionalShadowMap.length>0&&ht.setValue(L,"directionalShadowMap",_n.state.directionalShadowMap,F),_n.state.spotShadowMap.length>0&&ht.setValue(L,"spotShadowMap",_n.state.spotShadowMap,F),_n.state.pointShadowMap.length>0&&ht.setValue(L,"pointShadowMap",_n.state.pointShadowMap,F)),H.isSkinnedMesh){ht.setOptional(L,H,"bindMatrix"),ht.setOptional(L,H,"bindMatrixInverse");const Wt=H.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ht.setValue(L,"boneTexture",Wt.boneTexture,F))}H.isBatchedMesh&&(ht.setOptional(L,H,"batchingTexture"),ht.setValue(L,"batchingTexture",H._matricesTexture,F),ht.setOptional(L,H,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",H._indirectTexture,F),ht.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",H._colorsTexture,F));const Ii=W.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&pe.update(H,W,kn),(is||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,ht.setValue(L,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(jt.envMapIntensity.value=B.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=Mb()),is&&(ht.setValue(L,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&Dg(jt,Ls),ue&&V.fog===!0&&Ae.refreshFogUniforms(jt,ue),Ae.refreshMaterialUniforms(jt,V,Fe,le,T.state.transmissionRenderTarget[E.id]),Ca.upload(L,Ou(be),jt,F)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ca.upload(L,Ou(be),jt,F),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(L,"center",H.center),ht.setValue(L,"modelViewMatrix",H.modelViewMatrix),ht.setValue(L,"normalMatrix",H.normalMatrix),ht.setValue(L,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Wt=V.uniformsGroups;for(let Ni=0,Is=Wt.length;Ni<Is;Ni++){const ku=Wt[Ni];ge.update(ku,kn),ge.bind(ku,kn)}}return kn}function Dg(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Lg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,W){const V=b.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=B,b.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const W=b.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Ig=L.createFramebuffer();this.setRenderTarget=function(E,B=0,W=0){I=E,C=B,D=W;let V=null,H=!1,ue=!1;if(E){const fe=b.get(E);if(fe.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),z.copy(E.viewport),O.copy(E.scissor),J=E.scissorTest,Se.viewport(z),Se.scissor(O),Se.setScissorTest(J),G=-1;return}else if(fe.__webglFramebuffer===void 0)F.setupRenderTarget(E);else if(fe.__hasExternalTextures)F.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&b.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const we=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[B])?V=we[B][W]:V=we[B],H=!0):E.samples>0&&F.useMultisampledRTT(E)===!1?V=b.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[W]:V=we,z.copy(E.viewport),O.copy(E.scissor),J=E.scissorTest}else z.copy(j).multiplyScalar(Fe).floor(),O.copy(se).multiplyScalar(Fe).floor(),J=ae;if(W!==0&&(V=Ig),Se.bindFramebuffer(L.FRAMEBUFFER,V)&&Se.drawBuffers(E,V),Se.viewport(z),Se.scissor(O),Se.setScissorTest(J),H){const fe=b.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,fe.__webglTexture,W)}else if(ue){const fe=B;for(let Me=0;Me<E.textures.length;Me++){const we=b.get(E.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,we.__webglTexture,W,fe)}}else if(E!==null&&W!==0){const fe=b.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(E,B,W,V,H,ue,me,fe=0){if(!(E&&E.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Se.bindFramebuffer(L.FRAMEBUFFER,Me);try{const we=E.textures[fe],Oe=we.format,We=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!dt.textureFormatReadable(Oe)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(We)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-V&&W>=0&&W<=E.height-H&&L.readPixels(B,W,V,H,oe.convert(Oe),oe.convert(We),ue)}finally{const we=I!==null?b.get(I).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,V,H,ue,me,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(B>=0&&B<=E.width-V&&W>=0&&W<=E.height-H){Se.bindFramebuffer(L.FRAMEBUFFER,Me);const we=E.textures[fe],Oe=we.format,We=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!dt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(B,W,V,H,oe.convert(Oe),oe.convert(We),0);const rt=I!==null?b.get(I).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,rt);const Rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await v0(L,Rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Ee),L.deleteSync(Rt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,W=0){const V=Math.pow(2,-W),H=Math.floor(E.image.width*V),ue=Math.floor(E.image.height*V),me=B!==null?B.x:0,fe=B!==null?B.y:0;F.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,me,fe,H,ue),Se.unbindTexture()};const Ng=L.createFramebuffer(),Ug=L.createFramebuffer();this.copyTextureToTexture=function(E,B,W=null,V=null,H=0,ue=0){let me,fe,Me,we,Oe,We,Ee,rt,Rt;const wt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(W!==null)me=W.max.x-W.min.x,fe=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Oe=W.min.y,We=W.isBox3?W.min.z:0;else{const jt=Math.pow(2,-H);me=Math.floor(wt.width*jt),fe=Math.floor(wt.height*jt),E.isDataArrayTexture?Me=wt.depth:E.isData3DTexture?Me=Math.floor(wt.depth*jt):Me=1,we=0,Oe=0,We=0}V!==null?(Ee=V.x,rt=V.y,Rt=V.z):(Ee=0,rt=0,Rt=0);const ot=oe.convert(B.format),Jt=oe.convert(B.type);let be;B.isData3DTexture?(F.setTexture3D(B,0),be=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),be=L.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const _n=L.getParameter(L.UNPACK_ROW_LENGTH),Je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kn=L.getParameter(L.UNPACK_SKIP_PIXELS),$n=L.getParameter(L.UNPACK_SKIP_ROWS),is=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We);const Ls=E.isDataArrayTexture||E.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const jt=b.get(E),Ii=b.get(B),Wt=b.get(jt.__renderTarget),Ni=b.get(Ii.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Is=0;Is<Me;Is++)Ls&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(E).__webglTexture,H,We+Is),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(B).__webglTexture,ue,Rt+Is)),L.blitFramebuffer(we,Oe,me,fe,Ee,rt,me,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||b.has(E)){const jt=b.get(E),Ii=b.get(B);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Ng),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ug);for(let Wt=0;Wt<Me;Wt++)Ls?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jt.__webglTexture,H,We+Wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jt.__webglTexture,H),ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ii.__webglTexture,ue,Rt+Wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ii.__webglTexture,ue),H!==0?L.blitFramebuffer(we,Oe,me,fe,Ee,rt,me,fe,L.COLOR_BUFFER_BIT,L.NEAREST):ht?L.copyTexSubImage3D(be,ue,Ee,rt,Rt+Wt,we,Oe,me,fe):L.copyTexSubImage2D(be,ue,Ee,rt,we,Oe,me,fe);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(be,ue,Ee,rt,Rt,me,fe,Me,ot,Jt,wt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(be,ue,Ee,rt,Rt,me,fe,Me,ot,wt.data):L.texSubImage3D(be,ue,Ee,rt,Rt,me,fe,Me,ot,Jt,wt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Ee,rt,me,fe,ot,Jt,wt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Ee,rt,wt.width,wt.height,ot,wt.data):L.texSubImage2D(L.TEXTURE_2D,ue,Ee,rt,me,fe,ot,Jt,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,_n),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,$n),L.pixelStorei(L.UNPACK_SKIP_IMAGES,is),ue===0&&B.generateMipmaps&&L.generateMipmap(be),Se.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&F.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){C=0,D=0,I=null,Se.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const ud={type:"change"},au={type:"start"},mm={type:"end"},pa=new Ar,fd=new wi,bb=Math.cos(70*$e.DEG2RAD),Ut=new P,ln=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vl=1e-6;class Tb extends Cv{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new mn,this._lastTargetPosition=new P,this._quat=new mn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gf,this._sphericalDelta=new Gf,this._scale=1,this._panOffset=new P,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new P,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Eb.bind(this),this._onPointerDown=wb.bind(this),this._onPointerUp=Ab.bind(this),this._onContextMenu=Nb.bind(this),this._onMouseWheel=Pb.bind(this),this._onKeyDown=Db.bind(this),this._onTouchStart=Lb.bind(this),this._onTouchMove=Ib.bind(this),this._onMouseDown=Cb.bind(this),this._onMouseMove=Rb.bind(this),this._interceptControlDown=Ub.bind(this),this._interceptControlUp=Fb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pa.origin.copy(this.object.position),pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pa.direction))<bb?this.object.lookAt(this.target):(fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),pa.intersectPlane(fd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vl||this._lastTargetPosition.distanceToSquared(this.target)>Vl?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ut.copy(i).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function wb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Eb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ab(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mm),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Cb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=at.DOLLY;break;case nr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}break;case nr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(au)}function Rb(s){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Pb(s){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(s.preventDefault(),this.dispatchEvent(au),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(mm))}function Db(s){this.enabled!==!1&&this._handleKeyDown(s)}function Lb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=at.TOUCH_ROTATE;break;case Qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=at.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(au)}function Ib(s){switch(this._trackPointer(s),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=at.NONE}}function Nb(s){this.enabled!==!1&&s.preventDefault()}function Ub(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lu(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new At;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=dd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const p=dd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function dd(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Yt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){const _=h.getComponent(f,p);a.setComponent(f+u,p,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function pd(s,e){if(e===o0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Qc||e===Op){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Qc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ob(s){const e=new Map,t=new Map,n=s.clone();return gm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)gm(s.children[n],e.children[n],t)}class cu extends Dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new md(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new md(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new tT(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ro.extractUrlBase(e);o=ro.resolveURL(c,this.path)}else o=ro.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new am(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_m){try{o[Xe.KHR_BINARY_GLTF]=new nT(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:o[u]=new zb;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[u]=new iT(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[u]=new sT;break;case Xe.KHR_MESH_QUANTIZATION:o[u]=new rT;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Bb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Dt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kb{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new K(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],an);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new rh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new su(h),c.distance=u;break;case"spot":c=new cv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class zb{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){const i=[];e.color=new K(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(i)}}class Gb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Hb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(r,r)}return Promise.all(i)}}class Vb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Wb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Xb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new K(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],an)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Yb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class qb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new K().setRGB(r[0],r[1],r[2],an),Promise.all(i)}}class jb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class Kb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new K().setRGB(r[0],r[1],r[2],an),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(i)}}class Zb{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Jb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class $b{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Qb{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class eT{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class md{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class tT{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const p of u){const _=new Ie,m=new P,g=new mn,v=new P(1,1,1),M=new ja(p.geometry,p.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,_.compose(m,g,v));for(const y in l)if(y==="_COLOR_0"){const T=l[y];M.instanceColor=new th(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);gt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const _m="glTF",Hr=12,gd={JSON:1313821514,BIN:5130562};class nT{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hr,r=new DataView(e,Hr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===gd.JSON){const c=new Uint8Array(e,Hr+o,a);this.content=n.decode(c)}else if(l===gd.BIN){const c=Hr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=hh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=hh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=sr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(d)},a,c,an,f)})})}}class sT{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rT{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class vm extends Cr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,_=p-c,m=-2*d+3*f,g=d-f,v=1-m,M=g-f+u;for(let y=0;y!==a;y++){const T=o[_+y+a],w=o[_+y+l]*h,A=o[p+y+a],x=o[p+y]*h;r[y]=v*T+M*w+m*A+g*x}return r}}const oT=new mn;class aT extends vm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return oT.fromArray(r).normalize().toArray(r),r}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_d={9728:Ot,9729:Tt,9984:Pp,9985:ba,9986:qr,9987:ri},vd={33071:bn,33648:Ia,10497:Kn},Wl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lT={CUBICSPLINE:void 0,LINEAR:po,STEP:fo},Xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),s.DefaultMaterial}function hs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hT(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function uT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fT(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yl(t.attributes):e=s.indices+":"+Yl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Yl(s.targets[n]);return e}function Yl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pT=new Ie;class mT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new nu(this.options.manager):this.textureLoader=new dv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new am(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hs(r,a,i),ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ro.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wl[i.type],a=sr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Yt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Wl[i.type],c=sr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(d&&d!==u){const g=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(v);M||(_=new c(a,g*d,i.count*d/h),M=new $0(_,d/h),t.cache.add(v,M)),m=new Yh(M,l,f%d/h,p)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Yt(_,l,p);if(i.sparse!==void 0){const g=Wl.SCALAR,v=sr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new v(o[1],M,i.sparse.count*g),w=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,x=T.length;A<x;A++){const S=T[A];if(m.setX(S,w[A*l]),l>=2&&m.setY(S,w[A*l+1]),l>=3&&m.setZ(S,w[A*l+2]),l>=4&&m.setW(S,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=_d[f.magFilter]||Tt,h.minFilter=_d[f.minFilter]||ri,h.wrapS=vd[f.wrapS]||Kn,h.wrapT=vd[f.wrapT]||Kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ot&&h.minFilter!==Tt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(_){const m=new zt(_);m.needsUpdate=!0,f(m)}),t.load(ro.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ti(u,o),u.userData.mimeType=o.mimeType||dT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Za,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Yp,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ft}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new K(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],an),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vt);const h=r.alphaMode||Xl.OPAQUE;if(h===Xl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Xl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==cn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==cn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==cn){const u=r.emissiveFactor;a.emissive=new K().setRGB(u[0],u[1],u[2],an)}return r.emissiveTexture!==void 0&&o!==cn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&hs(i,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=fT(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=xd(new At,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?cT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],m=o[d];let g;const v=c[d];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new n_(_,v):new Ue(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?g.geometry=pd(g.geometry,Op):m.mode===Ln.TRIANGLE_FAN&&(g.geometry=pd(g.geometry,Qc));else if(m.mode===Ln.LINES)g=new l_(_,v);else if(m.mode===Ln.LINE_STRIP)g=new Kh(_,v);else if(m.mode===Ln.LINE_LOOP)g=new c_(_,v);else if(m.mode===Ln.POINTS)g=new Zh(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&uT(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ti(g,r),m.extensions&&hs(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&hs(i,u[0],r),u[0];const f=new Bt;r.extensions&&hs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn($e.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Po(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let M=0,y=f.length;M<y;M++){const T=f[M],w=d[M],A=p[M],x=_[M],S=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const U=n._createAnimationTracks(T,w,A,x,S);if(U)for(let C=0;C<U.length;C++)g.push(U[C])}const v=new tv(r,void 0,g);return ti(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,pT)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){const d=h.userData.pivot,p=u[0];h.pivot=new P().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Xp:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ti(h,r),r.extensions&&hs(n,h,r),r.matrix!==void 0){const u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),ti(r,n),n.extensions&&hs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const f=l[h];f.parent!==null?r.add(Ob(f)):r.add(f)}const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof jn||f instanceof zt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Gi[r.path]===Gi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Gi[r.path]){case Gi.weights:c=gr;break;case Gi.rotation:c=_r;break;case Gi.translation:case Gi.scale:c=vr;break;default:n.itemSize===1?c=gr:c=vr;break}const h=i.interpolation!==void 0?lT[i.interpolation]:po,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const p=new c(l[f]+"."+Gi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof _r?aT:vm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gT(s,e,t){const n=e.attributes,i=new fi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const h=uh(sr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=uh(sr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new di;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function xd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=hh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ye.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),ti(s,e),gT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hT(s,e.targets,t):s})}const Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Do{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _T=new Po(-1,1,1,-1,0,1);class vT extends At{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const xT=new vT;class xm{constructor(e){this._mesh=new Ue(xT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_T)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yT extends Do{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ka.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class yd extends Do{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class MT extends Do{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ST{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yT(Ra),this.copyPass.material.blending=li,this.timer=new gv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}yd!==void 0&&(o instanceof yd?n=!0:o instanceof MT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bT extends Do{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const TT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xr extends Do{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new hn(r,o,{type:En});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new hn(r,o,{type:En});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=TT;this.highPassUniforms=ka.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ka.clone(Ra.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,premultipliedAlpha:!0,blending:co,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new xm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}xr.BlurDirectionX=new te(1,0);xr.BlurDirectionY=new te(0,1);class wT extends Hp{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Yn;e.deleteAttribute("uv");const t=new Ft({side:Kt}),n=new Ft,i=new su(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ue(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ja(e,n,6),a=new gt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Ue(e,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ue(e,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Ue(e,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ue(e,Zs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Ue(e,Zs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new Ue(e,Zs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Zs(s){return new q_({color:0,emissive:16777215,emissiveIntensity:s})}function Ti(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ym(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yr={duration:.5,overwrite:!1,delay:0},hu,Zt,_t,Un=1e8,ft=1/Un,fh=Math.PI*2,ET=fh/4,AT=0,Mm=Math.sqrt,CT=Math.cos,RT=Math.sin,qt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Di=function(e){return typeof e=="number"},uu=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},un=function(e){return e!==!1},fu=function(){return typeof window<"u"},ma=function(e){return Et(e)||qt(e)},Sm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,PT=/random\([^)]+\)/g,DT=/,\s*/g,Md=/(?:-?\.?\d|\.)+/gi,bm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,er=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tm=/[+-]=-?[.\d]+/,LT=/[^,'"\[\]\s]+/gi,IT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,ni,dh,du,Cn={},za={},wm,Em=function(e){return(za=Mr(e,Cn))&&gn},pu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mo=function(e,t){return!t&&console.warn(e)},Am=function(e,t){return e&&(Cn[e]=t)&&za&&(za[e]=t)||Cn},So=function(){return 0},NT={suppressEvents:!0,isStart:!0,kill:!1},Pa={suppressEvents:!0,kill:!1},UT={suppressEvents:!0},mu={},Zi=[],ph={},Cm,yn={},jl={},Sd=30,Da=[],gu="",_u=function(e){var t=e[0],n,i;if(ui(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Da.length;i--&&!Da[i].targetTest(t););n=Da[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new $m(e[i],n)))||e.splice(i,1);return e},bs=function(e){return e._gsap||_u(Fn(e))[0]._gsap},Rm=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():uu(n)&&e.getAttribute&&e.getAttribute(t)||n},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},rr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},FT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ga=function(){var e=Zi.length,t=Zi.slice(0),n,i;for(ph={},Zi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vu=function(e){return!!(e._initted||e._startAt||e.add)},Pm=function(e,t,n,i){Zi.length&&!Zt&&Ga(),e.render(t,n,!!(Zt&&t<0&&vu(e))),Zi.length&&!Zt&&Ga()},Dm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(LT).length<2?t:qt(e)?e.trim():e},Lm=function(e){return e},Rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},OT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mr=function(e,t){for(var n in t)e[n]=t[n];return e},bd=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ha=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oo=function(e){var t=e.parent||yt,n=e.keyframes?OT(tn(e.keyframes)):Rn;if(un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},BT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Im=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Qa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},kT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mh=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(Pa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},zT=function s(e){return!e||e._ts&&s(e.parent)},Td=function(e){return e._repeat?Sr(e._tTime,e=e.duration()+e._rDelay)*e:0},Sr=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},Va=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},el=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),el(e),n._dirty||Ts(n,e)),e},Nm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Va(e.rawTime(),t),(!t._dur||Lo(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},si=function(e,t,n,i){return t.parent&&$i(t),t._start=xt((Di(n)?n:n||e!==yt?Dn(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Im(e,t,"_first","_last",e._sort?"_start":0),gh(t)||(e._recent=t),i||Nm(e,t),e._ts<0&&tl(e,e._tTime),e},Um=function(e,t){return(Cn.ScrollTrigger||pu("scrollTrigger",t))&&Cn.ScrollTrigger.create(t,e)},Fm=function(e,t,n,i,r){if(yu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cm!==Sn.frame)return Zi.push(e),e._lazy=[r,i],1},GT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},gh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},HT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&GT(e)&&!(!e._initted&&gh(e))||(e._ts<0||e._dp._ts<0)&&!gh(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Lo(0,e._tDur,t),h=Sr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Sr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Zt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&Fm(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&mh(e,t,n,!0),e._onUpdate&&!n&&Tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$i(e,1),!n&&!Zt&&(Tn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},br=function(e,t,n,i){var r=e._repeat,o=xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:xt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&tl(e,e._tTime=e._tDur*a),e.parent&&el(e),n||Ts(e.parent,e),e},wd=function(e){return e instanceof on?Ts(e):br(e,e._dur)},WT={_start:0,endTime:So,totalDuration:So},Dn=function s(e,t,n){var i=e.labels,r=e._recent||WT,o=e.duration()>=Un?r.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ao=function(e,t,n){var i=Di(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;o.immediateRender=un(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Nt(t[0],o,t[r+1])},ts=function(e,t){return e||e===0?t(e):t},Lo=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!qt(e)||!(t=IT.exec(e))?"":t[1]},XT=function(e,t,n){return ts(n,function(i){return Lo(e,t,i)})},_h=[].slice,Om=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==ni},YT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return qt(i)&&!t||Om(i,1)?(r=n).push.apply(r,Fn(i)):n.push(i)})||n},Fn=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):qt(e)&&!n&&(dh||!Tr())?_h.call((t||du).querySelectorAll(e),0):tn(e)?YT(e,n):Om(e)?_h.call(e,0):e?[e]:[]},vh=function(e){return e=Fn(e)[0]||Mo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Fn(t,n.querySelectorAll?n:n===e?Mo("Invalid scope")||du.createElement("div"):e)}},Bm=function(e){return e.sort(function(){return .5-Math.random()})},km=function(e){if(Et(e))return e;var t=ui(e)?e:{each:e},n=ws(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return qt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,p){var _=(p||t).length,m=o[_],g,v,M,y,T,w,A,x,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Un])[1],!S){for(A=-Un;A<(A=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],g=l?Math.min(S,_)*h-.5:i%S,v=S===Un?0:l?_*u/S-.5:i/S|0,A=0,x=Un,w=0;w<_;w++)M=w%S-g,y=v-(w/S|0),m[w]=T=c?Math.abs(c==="y"?y:M):Mm(M*M+y*y),T>A&&(A=T),T<x&&(x=T);i==="random"&&Bm(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=en(t.amount||t.each)||0,n=n&&_<0?Km(n):n}return _=(m[f]-m.min)/m.max||0,xt(m.b+(n?n(_):_)*m.v)+m.u}},xh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Di(n)?0:en(n))}},zm=function(e,t){var n=tn(e),i,r;return!n&&ui(e)&&(i=n=e.radius||Un,e.values?(e=Fn(e.values),(r=!Di(e[0]))&&(i*=i)):e=xh(e.increment)),ts(t,n?Et(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Un,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,r||h===o||Di(o)?h:h+en(o)}:xh(e))},Gm=function(e,t,n,i){return ts(tn(e)?!t:n===!0?!!(n=0):!i,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},jT=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},KT=function(e,t,n){return Vm(e,t,0,1,n)},Hm=function(e,t,n){return ts(n,function(i){return e[~~t(i)]})},ZT=function s(e,t,n){var i=t-e;return tn(e)?Hm(e,s(0,e.length),t):ts(n,function(r){return(i+(r-e)%i)%i+e})},JT=function s(e,t,n){var i=t-e,r=i*2;return tn(e)?Hm(e,s(0,e.length-1),t):ts(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},bo=function(e){return e.replace(PT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(DT);return Gm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vm=function(e,t,n,i,r){var o=t-e,a=i-n;return ts(r,function(l){return n+((l-e)/o*a||0)})},$T=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=qt(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(p){p*=u;var _=Math.min(f,~~p);return h[_](p-_)},n=t}else i||(e=Mr(tn(e)?[]:{},e));if(!h){for(l in t)xu.call(a,e,l,"get",t[l]);r=function(p){return bu(p,a)||(o?e.p:e)}}}return ts(n,r)},Ed=function(e,t,n){var i=e.labels,r=Un,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Tn=function(e,t,n){var i=e.vars,r=i[t],o=_t,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zi.length&&Ga(),a&&(_t=a),h=l?r.apply(c,l):r.call(c),_t=o,h},Zr=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Tn(e,"onInterrupt"),e},tr,Wm=[],Xm=function(e){if(e)if(e=!e.name&&e.default||e,fu()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:So,render:bu,add:xu,kill:pw,modifier:dw,rawVars:0},o={targetTest:0,get:0,getSetter:Su,aliases:{},register:0};if(Tr(),e!==i){if(yn[t])return;Rn(i,Rn(Ha(e,r),o)),Mr(i.prototype,Mr(r,Ha(e,o))),yn[i.prop=t]=i,e.targetTest&&(Da.push(i),mu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Am(t,i),e.register&&e.register(gn,i,dn)}else Wm.push(e)},ut=255,Jr={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Kl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Ym=function(e,t,n){var i=e?Di(e)?[e>>16,e>>8&ut,e&ut]:0:Jr.black,r,o,a,l,c,h,u,f,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Jr[e])i=Jr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Md),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Kl(l+1/3,r,o),i[1]=Kl(l,r,o),i[2]=Kl(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(bm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Md)||Jr.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/ut,o=i[1]/ut,a=i[2]/ut,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},qm=function(e){var t=[],n=[],i=-1;return e.split(Ji).forEach(function(r){var o=r.match(er)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Ad=function(e,t,n){var i="",r=(e+i).match(Ji),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Ym(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=qm(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ji,"1").split(er),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Ji),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Ji=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Jr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),QT=/hsl[a]?\(/,jm=function(e){var t=e.join(" "),n;if(Ji.lastIndex=0,Ji.test(t))return n=QT.test(t),e[1]=Ad(e[1],n),e[0]=Ad(e[0],n,qm(e[1])),!0},To,Sn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,p=function _(m){var g=s()-i,v=m===!0,M,y,T,w;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,M=T-o,(M>0||v)&&(w=++u.frame,f=T-u.time*1e3,u.time=T=T/1e3,o+=M+(M>=r?4:r-M),y=1),v||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](T,f,w,m)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){wm&&(!dh&&fu()&&(ni=dh=window,du=ni.document||{},Cn.gsap=gn,(ni.gsapVersions||(ni.gsapVersions=[])).push(gn.version),Em(za||ni.GreenSockGlobals||!ni.gsap&&ni||{}),Wm.forEach(Xm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},To=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),To=0,c=So},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,g,v){var M=g?function(y,T,w,A){m(y,T,w,A),u.remove(M)}:m;return u.remove(m),a[v?"unshift":"push"](M),Tr(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},u})(),Tr=function(){return!To&&Sn.wake()},qe={},ew=/^[\d.\-M][\d.\-,\s]/,tw=/["']/g,nw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(tw,"").trim():+c,i=l.substr(a+1).trim();return t},iw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sw=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nw(t[1])]:iw(e).split(",").map(Dm)):qe._CE&&ew.test(e)?qe._CE("",e):n},Km=function(e){return function(t){return 1-e(1-t)}},Zm=function s(e,t){for(var n=e._first,i;n;)n instanceof on?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ws=function(e,t){return e&&(Et(e)?e:qe[e]||sw(e))||t},Ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return fn(e,function(a){qe[a]=Cn[a]=r,qe[o=a.toLowerCase()]=n;for(var l in r)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=r[l]}),r},Jm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zl=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/fh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*RT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Jm(a);return r=fh/r,l.config=function(c,h){return s(e,c,h)},l},Jl=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Jm(n);return i.config=function(r){return s(e,r)},i};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ds(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Ds("Elastic",Zl("in"),Zl("out"),Zl());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ds("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ds("Circ",function(s){return-(Mm(1-s*s)-1)});Ds("Sine",function(s){return s===1?1:-CT(s*ET)+1});Ds("Back",Jl("in"),Jl("out"),Jl());qe.SteppedEase=qe.steps=Cn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-ft;return function(a){return((i*Lo(0,o,a)|0)+r)*n}}};yr.ease=qe["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gu+=s+","+s+"Params,"});var $m=function(e,t){this.id=AT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rm,this.set=t?t.getSetter:Su},wo=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,br(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),To||Sn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Tr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(tl(this,n),!r._dp||r.parent||Nm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Td(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Td(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Sr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Va(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(Lo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),el(this),kT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=xt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&si(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Va(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=UT);var i=Zt;return Zt=n,vu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Dn(this,n),un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,un(i)),this._dur||(this._zTime=-ft),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ft)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Et(n)?n:Lm,l=function(){var h=i.then;i.then=null,r&&r(),Et(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Zr(this)},s})();Rn(wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var on=(function(s){ym(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=un(n.sortChildren),yt&&si(n.parent||yt,Ti(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Um(Ti(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ao(0,arguments,this),this},t.from=function(i,r,o){return ao(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ao(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,oo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Nt(i,r,Dn(this,o),1),this},t.call=function(i,r,o){return si(this,Nt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Nt(i,o,Dn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,oo(o).immediateRender=un(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,oo(a).immediateRender=un(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,m,g,v,M,y,T,w,A;if(this!==yt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,M=this._ts,g=!M,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=xt(h%m),h===l?(_=this._repeat,f=c):(T=xt(h/m),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=Sr(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(f=c-f,A=1),_!==T&&!this._lock){var x=w&&T&1,S=x===(w&&_&1);if(_<T&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(A?0:xt(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Zm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=VT(this,xt(a),xt(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(Tn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-ft);break}}d=p}else{d=this._last;for(var U=i<0?i:f;d;){if(p=d._prev,(d._act||U<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(U-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(U-d._start)*d._ts,r,o||Zt&&vu(d)),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=U?-ft:ft);break}}d=p}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-ft)._zTime=f>=a?1:-1,this._ts))return this._start=y,el(this),this.render(i,r,o);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Tn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Di(r)||(r=Dn(this,r,i)),!(i instanceof wo)){if(tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(qt(i))return this.addLabel(i,r);if(Et(i))i=Nt.delayedCall(0,i);else return this}return this!==i?si(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Nt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(i.parent===this&&Qa(this,i),i===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(Sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Dn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Nt.delayedCall(0,r||So,o);return a.data="isPause",this._hasPause=1,si(this,a,Dn(this,i))},t.removePause=function(i){var r=this._first;for(i=Dn(this,i);r;)r._start===i&&r.data==="isPause"&&$i(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Yi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Fn(i),l=this._first,c=Di(r),h;l;)l instanceof Nt?FT(l._targets,a)&&(c?(!Yi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Dn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,p=Nt.to(o,Rn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ft,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&br(p,m,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},r));return f?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Rn({startAt:{time:Dn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ed(this,Dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ed(this,Dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=xt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Ts(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ts(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Un,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,si(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=xt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;br(o,o===yt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(yt._ts&&(Pm(yt,Va(i,yt)),Cm=Sn.frame),Sn.frame>=Sd){Sd+=An.autoSleep||120;var r=yt._first;if((!r||!r._ts)&&An.autoSleep&&Sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Sn.sleep()}}},e})(wo);Rn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var rw=function(e,t,n,i,r,o,a){var l=new dn(this._pt,e,t,0,1,sg,null,r),c=0,h=0,u,f,d,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=bo(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(ql)||[];u=ql.exec(i);)p=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?rr(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Tm.test(i)||g)&&(l.e=0),this._pt=l,l},xu=function(e,t,n,i,r,o,a,l,c,h){Et(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:Et(u)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Et(u)?c?hw:ng:Mu,p;if(qt(i)&&(~i.indexOf("random(")&&(i=bo(i)),i.charAt(1)==="="&&(p=rr(f,i)+(en(f)||0),(p||p===0)&&(i=p))),!h||f!==i||yh)return!isNaN(f*i)&&i!==""?(p=new dn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?fw:ig,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!u&&!(t in e)&&pu(t,i),rw.call(this,e,t,f,i,d,l||An.stringFilter,c))},ow=function(e,t,n,i,r){if(Et(e)&&(e=lo(e,r,t,n,i)),!ui(e)||e.style&&e.nodeType||tn(e)||Sm(e))return qt(e)?lo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=lo(e[a],r,t,n,i);return o},Qm=function(e,t,n,i,r,o){var a,l,c,h;if(yn[e]&&(a=new yn[e]).init(r,a.rawVars?t[e]:ow(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new dn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==tr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Yi,yh,yu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!hu,y=e.timeline,T,w,A,x,S,U,C,D,I,G,k,z,O;if(y&&(!f||!r)&&(r="none"),e._ease=ws(r,yr.ease),e._yEase=u?Km(ws(u===!0?r:u,yr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(D=m[0]?bs(m[0]).harness:0,z=D&&i[D.prop],T=Ha(i,mu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?Pa:NT),_._lazy=0),o){if($i(e._startAt=Nt.set(m,Rn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&un(l),startAt:null,delay:0,onUpdate:c&&function(){return Tn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!a&&!d)&&e._startAt.revert(Pa),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(a=!1),A=Rn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&un(l),immediateRender:a,stagger:0,parent:g},T),z&&(A[D.prop]=z),$i(e._startAt=Nt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Pa):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&un(l)||l&&!p,w=0;w<m.length;w++){if(S=m[w],C=S._gsap||_u(m)[w]._gsap,e._ptLookup[w]=G={},ph[C.id]&&Zi.length&&Ga(),k=v===m?w:v.indexOf(S),D&&(I=new D).init(S,z||T,e,k,v)!==!1&&(e._pt=x=new dn(e._pt,S,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(J){G[J]=x}),I.priority&&(U=1)),!D||z)for(A in T)yn[A]&&(I=Qm(A,T,e,k,S,v))?I.priority&&(U=1):G[A]=x=xu.call(e,S,A,"get",T[A],k,v,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),M&&e._pt&&(Yi=e,yt.killTweensOf(S,G,e.globalTime(t)),O=!e.parent,Yi=0),e._pt&&l&&(ph[C.id]=1)}U&&rg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&y.render(Un,!0,!0)},aw=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return yh=1,e.vars[t]="+=0",yu(e,a),yh=0,l?Mo(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Pt(n)+en(u.e)),u.b&&(u.b=h.s+en(u.b))},lw=function(e,t){var n=e[0]?bs(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Mr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},cw=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(tn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},lo=function(e,t,n,i,r){return Et(e)?e.call(t,n,i,r):qt(e)&&~e.indexOf("random(")?bo(e):e},eg=gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tg={};fn(eg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return tg[s]=1});var Nt=(function(s){ym(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:oo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,v=i.parent||yt,M=(tn(n)||Sm(n)?Di(n[0]):"length"in i)?[n]:Fn(n),y,T,w,A,x,S,U,C;if(a._targets=M.length?_u(M):Mo("GSAP target "+n+" not found. https://gsap.com",!An.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||ma(c)||ma(h)){if(i=a.vars,y=a.timeline=new on({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),y.kill(),y.parent=y._dp=Ti(a),y._start=0,f||ma(c)||ma(h)){if(A=M.length,U=f&&km(f),ui(f))for(x in f)~eg.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(T=0;T<A;T++)w=Ha(i,tg),w.stagger=0,g&&(w.yoyoEase=g),C&&Mr(w,C),S=M[T],w.duration=+lo(c,Ti(a),T,S,M),w.delay=(+lo(h,Ti(a),T,S,M)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),y.to(S,w,U?U(T,S,M):0),y._ease=qe.none;y.duration()?c=h=0:a.timeline=0}else if(p){oo(Rn(y.vars.defaults,{ease:"none"})),y._ease=ws(p.ease||i.ease||"none");var D=0,I,G,k;if(tn(p))p.forEach(function(z){return y.to(M,z,">")}),y.duration();else{w={};for(x in p)x==="ease"||x==="easeEach"||cw(x,p[x],w,p.easeEach);for(x in w)for(I=w[x].sort(function(z,O){return z.t-O.t}),D=0,T=0;T<I.length;T++)G=I[T],k={ease:G.e,duration:(G.t-(T?I[T-1].t:0))/100*c},k[x]=G.v,y.to(M,k,D),D+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!hu&&(Yi=Ti(a),yt.killTweensOf(M),Yi=0),si(v,Ti(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!p&&a._start===xt(v._time)&&un(u)&&zT(Ti(a))&&v.data!=="nested")&&(a._tTime=-ft,a.render(Math.max(0,-h)||0)),m&&Um(Ti(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ft&&!h?l:i<ft?0:i,f,d,p,_,m,g,v,M,y;if(!c)HT(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=xt(u%_),u===l?(p=this._repeat,f=c):(m=xt(u/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(y=this._yEase,f=c-f),m=Sr(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=u,this;p!==m&&(M&&this._yEase&&Zm(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(xt(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(Fm(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&u&&!r&&!m&&(Tn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&mh(this,i,r,o),Tn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&mh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!r&&!(h&&!a)&&(u||a||g)&&(Tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){To||Sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||yu(this,c),h=this._ease(c/this._dur),aw(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(tl(this,0),this.parent||Im(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Yi&&Yi.vars.overwrite!==!0)._first||Zr(this),this.parent&&o!==this.timeline.totalDuration()&&br(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Fn(i):a,c=this._ptLookup,h=this._pt,u,f,d,p,_,m,g;if((!r||r==="all")&&BT(a,l))return r==="all"&&(this._pt=0),Zr(this);for(u=this._op=this._op||[],r!=="all"&&(qt(r)&&(_={},fn(r,function(v){return _[v]=1}),r=_),r=lw(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(u[g]=r,p=f,d={}):(d=u[g]=u[g]||{},p=r);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Qa(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Zr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ao(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ao(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return yt.killTweensOf(i,r,o)},e})(wo);Rn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(s){Nt[s]=function(){var e=new on,t=_h.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Mu=function(e,t,n){return e[t]=n},ng=function(e,t,n){return e[t](n)},hw=function(e,t,n,i){return e[t](i.fp,n)},uw=function(e,t,n){return e.setAttribute(t,n)},Su=function(e,t){return Et(e[t])?ng:uu(e[t])&&e.setAttribute?uw:Mu},ig=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dw=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},pw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},dn=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ig,this.d=l||this,this.set=c||Mu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=mw,this.m=n,this.mt=r,this.tween=i},s})();fn(gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return mu[s]=1});Cn.TweenMax=Cn.TweenLite=Nt;Cn.TimelineLite=Cn.TimelineMax=on;yt=new on({sortChildren:!1,defaults:yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=jm;var Es=[],La={},gw=[],Cd=0,_w=0,$l=function(e){return(La[e]||gw).map(function(t){return t()})},Mh=function(){var e=Date.now(),t=[];e-Cd>2&&($l("matchMediaInit"),Es.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ni.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),$l("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cd=e,$l("matchMedia"))},og=(function(){function s(t,n){this.selector=n&&vh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_w++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Et(n)&&(r=i,i=n,n=Et);var o=this,a=function(){var c=_t,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=vh(r)),_t=o,u=i.apply(o,arguments),Et(u)&&o._r.push(u),_t=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Et?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Es.length;o--;)Es[o].id===this.id&&Es.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),vw=(function(){function s(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ui(n)||(n={matches:n});var o=new og(0,r||this.scope),a=o.conditions={},l,c,h;_t&&!o.selector&&(o.selector=_t.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ni.matchMedia(n[c]),l&&(Es.indexOf(o)<0&&Es.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Mh):l.addEventListener("change",Mh)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Wa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xm(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=Fn(e)[0]);var r=bs(e||{}).get,o=n?Lm:Dm;return n==="native"&&(n=""),e&&(t?o((yn[t]&&yn[t].get||r)(e,t,n,i)):function(a,l,c){return o((yn[a]&&yn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Fn(e),e.length>1){var i=e.map(function(h){return gn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=yn[t],a=bs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;tr._pt=0,u.init(e,n?h+n:h,tr,0,[e]),u.render(1,u),tr._pt&&bu(1,tr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=gn.to(e,Rn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ws(e.ease,yr.ease)),bd(yr,e||{})},config:function(e){return bd(An,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!yn[a]&&!Cn[a]&&Mo(t+" effect requires "+a+" plugin.")}),jl[t]=function(a,l,c){return n(Fn(a),Rn(l||{},r),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(jl[t](a,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=ws(t)},parseEase:function(e,t){return arguments.length?ws(e,t):qe},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,r;for(n.smoothChildTiming=un(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&si(n,i,i._start-i._delay),i=r;return si(yt,n,0),n},context:function(e,t){return e?new og(e,t):_t},matchMedia:function(e){return new vw(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Mh()},addEventListener:function(e,t){var n=La[e]||(La[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=La[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ZT,wrapYoyo:JT,distribute:km,random:Gm,snap:zm,normalize:KT,getUnit:en,clamp:XT,splitColor:Ym,toArray:Fn,selector:vh,mapRange:Vm,pipe:qT,unitize:jT,interpolate:$T,shuffle:Bm},install:Em,effects:jl,ticker:Sn,updateRoot:on.updateRoot,plugins:yn,globalTimeline:yt,core:{PropTween:dn,globals:Am,Tween:Nt,Timeline:on,Animation:wo,getCache:bs,_removeLinkedListItem:Qa,reverting:function(){return Zt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return hu=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Wa[s]=Nt[s]});Sn.add(on.updateRoot);tr=Wa.to({},{duration:0});var xw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yw=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=xw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ql=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(qt(r)&&(l={},fn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}yw(a,r)}}}},gn=Wa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ql("roundProps",xh),Ql("modifiers"),Ql("snap",zm))||Wa;Nt.version=on.version=gn.version="3.14.2";wm=1;fu()&&Tr();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;var Rd,qi,or,Tu,ys,Pd,wu,Mw=function(){return typeof window<"u"},Li={},ps=180/Math.PI,ar=Math.PI/180,Js=Math.atan2,Dd=1e8,Eu=/([A-Z])/g,Sw=/(left|right|width|margin|padding|x)/i,bw=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ww=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ew=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Aw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ag=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Cw=function(e,t,n){return e.style[t]=n},Rw=function(e,t,n){return e.style.setProperty(t,n)},Pw=function(e,t,n){return e._gsap[t]=n},Dw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Lw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Iw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},bt="transform",pn=bt+"Origin",Nw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Li&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[e]=o.x?o[e]:Ei(i,e),e===pn&&(this.tfm.zOrigin=o.zOrigin);else return ai.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,t,"")),e=bt}(r||t)&&this.props.push(e,t,r[e])},cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Uw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Eu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=wu(),(!r||!r.isStart)&&!n[bt]&&(cg(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},hg=function(e,t){var n={target:e,props:[],revert:Uw,save:Nw};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ug,bh=function(e,t){var n=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return n&&n.style?n:qi.createElement(e)},wn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Eu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,wr(t)||t,1)||""},Ld="O,Moz,ms,Ms,Webkit".split(","),wr=function(e,t,n){var i=t||ys,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ld[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Ld[o]:"")+e},Th=function(){Mw()&&window.document&&(Rd=window,qi=Rd.document,or=qi.documentElement,ys=bh("div")||{style:{}},bh("div"),bt=wr(bt),pn=bt+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ug=!!wr("perspective"),wu=gn.core.reverting,Tu=1)},Id=function(e){var t=e.ownerSVGElement,n=bh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),or.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),or.removeChild(n),r},Nd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fg=function(e){var t,n;try{t=e.getBBox()}catch{t=Id(e),n=1}return t&&(t.width||t.height)||n||(t=Id(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nd(e,["x","cx","x1"])||0,y:+Nd(e,["y","cy","y1"])||0,width:0,height:0}:t},dg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fg(e))},Qi=function(e,t){if(t){var n=e.style,i;t in Li&&t!==pn&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Eu,"-$1").toLowerCase())):n.removeAttribute(t)}},ji=function(e,t,n,i,r,o){var a=new dn(e._pt,t,n,0,1,o?lg:ag);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Ud={deg:1,rad:1,turn:1},Fw={grid:1,flex:1},es=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ys.style,l=Sw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,_,m,g;if(i===o||!r||Ud[i]||Ud[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),g=e.getCTM&&dg(e),(d||o==="%")&&(Li[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],Pt(d?r/p*u:r/100*p);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===qi||!_.appendChild)&&(_=qi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Sn.time&&!m.uncache)return Pt(r/m.width*u);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,p=e[h],v?e.style[t]=v:Qi(e,t)}else(d||o==="%")&&!Fw[wn(_,"display")]&&(a.position=wn(e,"position")),_===e&&(a.position="static"),_.appendChild(ys),p=ys[h],_.removeChild(ys),a.position="absolute";return l&&d&&(m=bs(_),m.time=Sn.time,m.width=_[h]),Pt(f?p*r/u:p&&r?u/p*r:0)},Ei=function(e,t,n,i){var r;return Tu||Th(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Li[t]&&t!=="transform"?(r=Ao(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ya(wn(e,pn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Xa[t]&&Xa[t](e,t,n)||wn(e,t)||Rm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?es(e,t,r,n)+n:r},Ow=function(e,t,n,i){if(!n||n==="none"){var r=wr(t,e,1),o=r&&wn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var a=new dn(this._pt,e.style,t,0,1,sg),l=0,c=0,h,u,f,d,p,_,m,g,v,M,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=wn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=wn(e,t)||i,_?e.style[t]=_:Qi(e,t)),h=[n,i],jm(h),n=h[0],i=h[1],f=n.match(er)||[],T=i.match(er)||[],T.length){for(;u=er.exec(i);)m=u[0],v=i.substring(l,u.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=rr(d,m)+y),g=parseFloat(m),M=m.substr((g+"").length),l=er.lastIndex-M.length,M||(M=M||An.units[t]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(d=es(e,t,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:g-d,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?lg:ag;return Tm.test(i)&&(a.e=0),this._pt=a,a},Fd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fd[n]||n,t[1]=Fd[i]||i,t.join(" ")},kw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Li[a]&&(l=1,a=a==="transformOrigin"?pn:bt),Qi(n,a);l&&(Qi(n,bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ao(n,1),o.uncache=1,cg(i)))}},Xa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new dn(e._pt,t,n,0,0,kw);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Eo=[1,0,0,1,0,0],pg={},mg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Od=function(e){var t=wn(e,bt);return mg(t)?Eo:t.substr(7).match(bm).map(Pt)},Au=function(e,t){var n=e._gsap||bs(e),i=e.style,r=Od(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Eo:r):(r===Eo&&!e.offsetParent&&e!==or&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,or.appendChild(e)),r=Od(e),l?i.display=l:Qi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):or.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wh=function(e,t,n,i,r,o){var a=e._gsap,l=r||Au(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,T=parseFloat(M[1])||0,w,A,x,S;n?l!==Eo&&(A=d*m-p*_)&&(x=y*(m/A)+T*(-_/A)+(_*v-m*g)/A,S=y*(-p/A)+T*(d/A)-(d*v-p*g)/A,y=x,T=S):(w=fg(e),y=w.x+(~M[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(M[1]||M[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=u+(g*d+v*_)-g,a.yOffset=f+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[pn]="0px 0px",o&&(ji(o,a,"xOrigin",c,y),ji(o,a,"yOrigin",h,T),ji(o,a,"xOffset",u,a.xOffset),ji(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Ao=function(e,t){var n=e._gsap||new $m(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=wn(e,pn)||"0",h,u,f,d,p,_,m,g,v,M,y,T,w,A,x,S,U,C,D,I,G,k,z,O,J,$,he,de,le,Fe,je,Ke;return h=u=f=_=m=g=v=M=y=0,d=p=1,n.svg=!!(e.getCTM&&dg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),A=Au(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),wh(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,w=n.yOrigin||0,A!==Eo&&(C=A[0],D=A[1],I=A[2],G=A[3],h=k=A[4],u=z=A[5],A.length===6?(d=Math.sqrt(C*C+D*D),p=Math.sqrt(G*G+I*I),_=C||D?Js(D,C)*ps:0,v=I||G?Js(I,G)*ps+_:0,v&&(p*=Math.abs(Math.cos(v*ar))),n.svg&&(h-=T-(T*C+w*I),u-=w-(T*D+w*G))):(Ke=A[6],Fe=A[7],he=A[8],de=A[9],le=A[10],je=A[11],h=A[12],u=A[13],f=A[14],x=Js(Ke,le),m=x*ps,x&&(S=Math.cos(-x),U=Math.sin(-x),O=k*S+he*U,J=z*S+de*U,$=Ke*S+le*U,he=k*-U+he*S,de=z*-U+de*S,le=Ke*-U+le*S,je=Fe*-U+je*S,k=O,z=J,Ke=$),x=Js(-I,le),g=x*ps,x&&(S=Math.cos(-x),U=Math.sin(-x),O=C*S-he*U,J=D*S-de*U,$=I*S-le*U,je=G*U+je*S,C=O,D=J,I=$),x=Js(D,C),_=x*ps,x&&(S=Math.cos(x),U=Math.sin(x),O=C*S+D*U,J=k*S+z*U,D=D*S-C*U,z=z*S-k*U,C=O,k=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Pt(Math.sqrt(C*C+D*D+I*I)),p=Pt(Math.sqrt(z*z+Ke*Ke)),x=Js(k,z),v=Math.abs(x)>2e-4?x*ps:0,y=je?1/(je<0?-je:je):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mg(wn(e,bt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Pt(d),n.scaleY=Pt(p),n.rotation=Pt(_)+a,n.rotationX=Pt(m)+a,n.rotationY=Pt(g)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[pn]=Ya(c)),n.xOffset=n.yOffset=0,n.force3D=An.force3D,n.renderTransform=n.svg?Gw:ug?gg:zw,n.uncache=0,n},Ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},ec=function(e,t,n){var i=en(t);return Pt(parseFloat(t)+parseFloat(es(e,"x",n+"px",i)))+i},zw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gg(e,t)},us="0deg",Vr="0px",fs=") ",gg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,M=n.zOrigin,y="",T=g==="auto"&&e&&e!==1||g===!0;if(M&&(u!==us||h!==us)){var w=parseFloat(h)*ar,A=Math.sin(w),x=Math.cos(w),S;w=parseFloat(u)*ar,S=Math.cos(w),o=ec(v,o,A*S*-M),a=ec(v,a,-Math.sin(w)*-M),l=ec(v,l,x*S*-M+M)}m!==Vr&&(y+="perspective("+m+fs),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==Vr||a!==Vr||l!==Vr)&&(y+=l!==Vr||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==us&&(y+="rotate("+c+fs),h!==us&&(y+="rotateY("+h+fs),u!==us&&(y+="rotateX("+u+fs),(f!==us||d!==us)&&(y+="skew("+f+", "+d+fs),(p!==1||_!==1)&&(y+="scale("+p+", "+_+fs),v.style[bt]=y||"translate(0, 0)"},Gw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,M=parseFloat(o),y=parseFloat(a),T,w,A,x,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ar,c*=ar,T=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=ar,S=Math.tan(c-h),S=Math.sqrt(1+S*S),A*=S,x*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Pt(T),w=Pt(w),A=Pt(A),x=Pt(x)):(T=u,x=f,w=A=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=es(d,"x",o,"px"),y=es(d,"y",a,"px")),(p||_||m||g)&&(M=Pt(M+p-(p*T+_*A)+m),y=Pt(y+_-(p*w+_*x)+g)),(i||r)&&(S=d.getBBox(),M=Pt(M+i/100*S.width),y=Pt(y+r/100*S.height)),S="matrix("+T+","+w+","+A+","+x+","+M+","+y+")",d.setAttribute("transform",S),v&&(d.style[bt]=S)},Hw=function(e,t,n,i,r){var o=360,a=qt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ps:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Dd)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Dd)%o-~~(c/o)*o)),e._pt=f=new dn(e._pt,t,n,i,c,Tw),f.e=h,f.u="deg",e._props.push(n),f},Bd=function(e,t){for(var n in t)e[n]=t[n];return e},Vw=function(e,t,n){var i=Bd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[bt]=t,a=Ao(n,1),Qi(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],o[bt]=t,a=Ao(n,1),o[bt]=c);for(l in Li)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=en(c),p=en(h),u=d!==p?es(n,l,c,p):parseFloat(c),f=parseFloat(h),e._pt=new dn(e._pt,a,l,u,f-u,Sh),e._pt.u=p||0,e._props.push(l));Bd(a,i)};fn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Xa[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(p){return Ei(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var _g={name:"css",register:Th,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,p,_,m,g,v,M,y,T,w,A,x,S;Tu||Th(),this.styles=this.styles||hg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(yn[_]&&Qm(_,t,n,i,e,r)))){if(d=typeof h,p=Xa[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=bo(h)),p)p(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Ji.lastIndex=0,Ji.test(c)||(m=en(c),g=en(h),g?m!==g&&(c=es(e,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],qt(c)&&~c.indexOf("random(")&&(c=bo(c)),en(c+"")||c==="auto"||(c+=An.units[_]||en(Ei(e,_))||""),(c+"").charAt(1)==="="&&(c=Ei(e,_))):c=Ei(e,_),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),_ in ai&&(_==="autoAlpha"&&(f===1&&Ei(e,"visibility")==="hidden"&&u&&(f=0),x.push("visibility",0,a.visibility),ji(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Li,M){if(this.styles.save(_),S=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=wn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=h,h=wn(e,"perspective"),U?e.style.perspective=U:Qi(e,"perspective")}u=parseFloat(h)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ao(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new dn(this._pt,a,bt,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new dn(this._pt,T,"scaleY",T.scaleY,(v?rr(T.scaleY,v+u):u)-T.scaleY||0,Sh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(pn,0,a[pn]),h=Bw(h),T.svg?wh(e,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&ji(this,T,"zOrigin",T.zOrigin,g),ji(this,a,_,Ya(c),Ya(h)));continue}else if(_==="svgOrigin"){wh(e,h,1,w,0,this);continue}else if(_ in pg){Hw(this,T,_,f,v?rr(f,v+h):h);continue}else if(_==="smoothOrigin"){ji(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Vw(this,h,e);continue}}else _ in a||(_=wr(_)||_);if(M||(u||u===0)&&(f||f===0)&&!bw.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),g=en(h)||(_ in An.units?An.units[_]:m),m!==g&&(f=es(e,_,c,g)),this._pt=new dn(this._pt,M?T:a,_,f,(v?rr(f,v+u):u)-f,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Aw:Sh),this._pt.u=g||0,M&&S!==h?(this._pt.b=c,this._pt.e=S,this._pt.r=Ew):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=ww);else if(_ in a)Ow.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,r);else if(_!=="parseTransform"){pu(_,h);continue}M||(_ in a?x.push(_,0,a[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),o.push(_)}}A&&rg(this)},render:function(e,t){if(t.tween._time||!wu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Li&&t!==pn&&(e._gsap.x||Ei(e,"x"))?n&&Pd===n?t==="scale"?Dw:Pw:(Pd=n||{})&&(t==="scale"?Lw:Iw):e.style&&!uu(e.style[t])?Cw:~t.indexOf("-")?Rw:Su(e,t)},core:{_removeProperty:Qi,_getMatrix:Au}};gn.utils.checkPrefix=wr;gn.core.getStyleSaver=hg;(function(s,e,t,n){var i=fn(s+","+e+","+t,function(r){Li[r]=1});fn(e,function(r){An.units[r]="deg",pg[r]=1}),ai[i[13]]=s+","+e,fn(n,function(r){var o=r.split(":");ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){An.units[s]="px"});gn.registerPlugin(_g);var Le=gn.registerPlugin(_g)||gn;Le.core.Tween;function Xn(s){if(!s)return"";if(/^(?:[a-z]+:)?\/\//i.test(s)||s.startsWith("data:"))return s;const e="./",t=s.replace(/^\/+/,"");return`${e.endsWith("/")?e:`${e}/`}${t}`}let ga=null;async function Ww(){if(ga)return ga;try{const s=await fetch(Xn("portfolio/manifest.json"),{cache:"no-cache"});if(!s.ok)throw new Error(`manifest.json ${s.status}`);const e=await s.json(),t=(e.paintings||[]).filter(n=>n.aspect>0&&n.file);return ga={...e,paintings:t},ga}catch(s){return console.error("Could not load portfolio manifest — run `npm run portfolio`.",s),{paintings:[]}}}const Xw=.28,Yw=new Yn(1,1,1),vg=new Bn(1,1),Cu=new Ft({color:13280613,roughness:.28,metalness:.85,envMapIntensity:1.4,shadowSide:vt}),kd=new K(13280613),zd=new K(1576965),Gd=new K(14476782),Hd=new K(922650),Vd=new K(3290946),Wd=new K(329224),Xd=new K(1184792),Yd=new K(131588),qd=new K(12086322),jd=new K(1837826),Kd=new K(13206082),Zd=new K(2363139);function qw(s,e=null){const t=(s%(Math.PI*2)+Math.PI*2)%(Math.PI*2),n=Math.PI/2,i=r=>{if(r)if(t>=0&&t<n){const o=t/n;if(o<.4){const a=o/.4;r.color.lerpColors(qd,Kd,a),r.emissive.lerpColors(jd,Zd,a)}else{const a=(o-.4)/.6;r.color.lerpColors(Kd,kd,a),r.emissive.lerpColors(Zd,zd,a)}r.roughness=$e.lerp(.32,.26,o),r.metalness=$e.lerp(.8,.88,o)}else if(t>=n&&t<Math.PI){const o=(t-n)/n;if(o<.65){const a=o/.65;r.color.lerpColors(kd,Gd,a),r.emissive.lerpColors(zd,Hd,a)}else{const a=(o-.65)/.35;r.color.lerpColors(Gd,Vd,a),r.emissive.lerpColors(Hd,Wd,a)}r.roughness=$e.lerp(.26,.32,o),r.metalness=$e.lerp(.88,.82,o)}else if(t>=Math.PI&&t<Math.PI*1.5){const o=(t-Math.PI)/n;r.color.lerpColors(Vd,Xd,o),r.emissive.lerpColors(Wd,Yd,o),r.roughness=$e.lerp(.32,.38,o),r.metalness=$e.lerp(.82,.75,o)}else{const o=(t-Math.PI*1.5)/n;r.color.lerpColors(Xd,qd,o),r.emissive.lerpColors(Yd,jd,o),r.roughness=$e.lerp(.38,.32,o),r.metalness=$e.lerp(.75,.8,o)}};i(Cu),e&&i(e)}function xg(s){const e=s.aspect||(s.width&&s.height?s.width/s.height:1),n=(s.heightIn||16)*Xw;return{width:n*e,height:n}}function jw(s,e,t=.12,n=.08,i=.05){const r=s/2,o=e/2,a=r+t,l=o+t,c=n,h=-i,u=[-r,-o,0],f=[r,-o,0],d=[r,o,0],p=[-r,o,0],_=[-a,-l,c],m=[a,-l,c],g=[a,l,c],v=[-a,l,c],M=[-a,-l,h],y=[a,-l,h],T=[a,l,h],w=[-a,l,h],A=[],x=(C,D,I)=>{A.push(...C,...D,...I)},S=(C,D,I,G)=>{x(C,D,I),x(C,I,G)};S(_,m,f,u),S(p,d,g,v),S(f,m,g,d),S(_,u,p,v),S(_,M,y,m),S(v,g,T,w),S(m,y,T,g),S(v,w,M,_),S(M,w,T,y);const U=new At;return U.setAttribute("position",new lt(A,3)),U.computeVertexNormals(),U}function Kw(s,e){const{width:t,height:n}=xg(e),i=Math.min(.18,Math.max(.1,t*.045)),r=i*.75,a=.16+n/2,l=jw(t,n,i,r,.06),c=new Ue(l,Cu);c.position.set(0,a,0),c.castShadow=!0,c.receiveShadow=!0,c.name="Frame",s.add(c);const h=new cn({color:1710618,toneMapped:!1,side:vt}),u=new Ue(vg,h);return u.scale.set(t,n,1),u.position.set(0,a,.002),u.castShadow=!0,u.name="Painting",s.add(u),{panel:u,panelMaterial:h,width:t,height:n,centreY:a}}const Ms={THUMB:0,MID:1,FULL:2};function Zw(s){const e=s.image;if(!e||!e.width||!e.height)return 0;const t=e.width*e.height*4;return s.generateMipmaps?t*1.3333:t}const Jw=typeof navigator<"u"&&(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||typeof window<"u"&&window.innerWidth<768),Jd=(Jw?24:64)*1024*1024,yg=new nu;let Wr=null;function Mg(){return Wr!==null?Promise.resolve(Wr):new Promise(s=>{const e=new Image;e.onload=()=>{Wr=e.width>0&&e.height>0,s(Wr)},e.onerror=()=>{Wr=!1,s(!1)},e.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="})}function Sg(s,e){const t=e?`portfolio/${s}?v=${e}`:`portfolio/${s}`;return Xn(t)}const Er=new Set;let Rs=0;function $w(s){s._lastSeen=performance.now()}function Qw(s){if(!s._texture)return;Rs-=s._bytes||0,Er.delete(s),s._texture.dispose(),s._texture=null,s._bytes=0,s._tier=Ms.THUMB;const e=s.panelMaterial;e&&s._thumbTexture&&(e.map=s._thumbTexture,e.needsUpdate=!0)}function e1(s){if(Rs<=Jd)return;const e=[...Er].filter(t=>t!==s).sort((t,n)=>(t._lastSeen||0)-(n._lastSeen||0));for(const t of e){if(Rs<=Jd)break;Qw(t)}}async function $d(s){if(s._thumbRequested)return;s._thumbRequested=!0;const e=await Mg(),t=Sg(e&&s.data.thumb?s.data.thumb:s.data.thumbJpg||s.data.thumb||s.data.file,s.data.v);yg.load(t,n=>{n.colorSpace=Mt,n.minFilter=Tt,n.magFilter=Tt,n.generateMipmaps=!1;const i=s.panelMaterial;if(!i){n.dispose();return}s._thumbTexture=n,s._texture||(i.map=n,s._lit===void 0&&i.color.set(16777215),i.needsUpdate=!0,s._tier=Ms.THUMB)},void 0,()=>{})}const t1=3;let tc=0;const Wi=[];function Eh(){for(;tc<t1&&Wi.length>0;){const s=Wi.shift();if((s.door._tier||0)>=s.tier){s.door._pending=0;continue}tc++,n1(s,()=>{tc--,s.onLoaded&&s.onLoaded(s.door),Eh()})}}async function n1(s,e){const{door:t,tier:n}=s,i=await Mg(),r=t.data;let o;n===Ms.FULL?o=i&&r.webp?r.webp:r.file:o=(i?r.mid:r.midJpg||r.mid)||(i&&r.webp?r.webp:r.file);const a=Sg(o,r.v);yg.load(a,l=>{const c=t.panelMaterial;if(t._pending=0,!c||(t._tier||0)>=n){l.dispose(),e();return}l.colorSpace=Mt,l.anisotropy=4,l.generateMipmaps=!0,l.minFilter=ri,t._texture&&(Rs-=t._bytes||0,Er.delete(t),t._texture.dispose()),c.map=l,t._lit===void 0&&c.color.set(16777215),c.needsUpdate=!0,t._texture=l,t._tier=n,t._bytes=Zw(l),t._lastSeen=performance.now(),Er.add(t),Rs+=t._bytes,e1(s.urgent?t:null),e()},void 0,()=>{t._pending=0,console.warn("Painting failed to load:",a),e()})}function _a(s,e,{urgent:t=!1,onLoaded:n=null}={}){if(s._lastSeen=performance.now(),(s._tier||0)>=e){n&&n(s);return}if(s._pending>=e){if(t){const r=Wi.findIndex(o=>o.door===s);r>0&&Wi.unshift(Wi.splice(r,1)[0]),Eh()}return}s._pending=e;const i={door:s,tier:e,urgent:t,onLoaded:n};t?Wi.unshift(i):Wi.push(i),Eh()}function i1(s){s._texture&&(Rs-=s._bytes||0,Er.delete(s),s._texture.dispose(),s._texture=null),s._thumbTexture&&(s._thumbTexture.dispose(),s._thumbTexture=null),s._bytes=0,s._tier=0,s._pending=0,s._thumbRequested=!1}function s1(){Wi.length=0,Er.clear(),Rs=0}function Qd(s,e,t){const n=t.fov*Math.PI/180,i=e/2/Math.tan(n/2),r=s/2/(Math.tan(n/2)*t.aspect);return Math.max(i,r)*1.25}const Ah=15,Ru=8;function r1(s){if(s<=0)return[2];const e=[2,3];let t=5;for(;t<s;){const n=e[e.length-1]+e[e.length-2];e.push(n),t+=n}return e}function o1(s){const e=bg(s),t=Math.max(1,e.length);return Array.from({length:t},(n,i)=>Ah+i*Ru)}function bg(s){if(s<=0)return[];const e=r1(s),t=[];let n=s;for(let i=0;i<e.length;i++){const r=Math.min(n,e[i]);if(r<=0)break;t.push(r),n-=r}return t}function a1(s){const e=s.filter(n=>Number.isFinite(n.rank)),t=s.filter(n=>!Number.isFinite(n.rank));return e.sort((n,i)=>n.rank-i.rank),t.sort((n,i)=>(i.year||0)-(n.year||0)),[...e,...t]}function l1(s){const e=bg(s.length),t=o1(s.length),n=[],i=[];let r=0;return t.forEach((o,a)=>{const l=e[a],c=s.slice(r,r+l);if(r+=l,!c.length)return;const h=c.map(_=>xg(_).width),u=h.map(_=>Math.asin(Math.min(_/(2*o),.999))),f=Math.PI*2/l;let d=0,p=-1/0;if(a===0)d=Math.PI/2;else for(let m=0;m<720;m++){const g=m/720*f;let v=1/0;for(let M=0;M<l;M++){const y=(g+M*f)%(Math.PI*2),T=u[M];for(const w of i){let A=Math.abs(y-w.center);A>Math.PI&&(A=Math.PI*2-A);const x=A-(T+w.halfAngle),S=Math.pow(.7,a-w.ring-1),U=x*S;U<v&&(v=U)}}v>p&&(p=v,d=g)}c.forEach((_,m)=>{const g=(d+m*f)%(Math.PI*2);i.push({center:g,halfAngle:u[m],ring:a}),n.push({painting:_,ring:a,radius:o,angle:g,width:h[m],x:Math.sin(g)*o,z:Math.cos(g)*o})})}),n}function Io(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Tg=new P(0,1,0);new P(1,1,1);const vs=new K,qn={uWindTime:{value:0},uWindStrength:{value:0},uWindScale:{value:.075},uGrassGrowth:{value:1}},Hi={uForestWave:{value:0},uForestActive:{value:0}};function c1(s,e=0){qn.uWindTime.value=s,qn.uWindStrength.value=e}function h1(s,e=1){!s||s._hasWindShader||(s._hasWindShader=!0,s.onBeforeCompile=t=>{t.uniforms.uWindTime=qn.uWindTime,t.uniforms.uWindStrength=qn.uWindStrength,t.uniforms.uWindScale=qn.uWindScale,t.vertexShader=`
            uniform float uWindTime;
            uniform float uWindStrength;
            uniform float uWindScale;
        `+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
            #include <begin_vertex>

            #ifdef USE_INSTANCING
                vec4 wPos = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
            #else
                vec4 wPos = modelMatrix * vec4(transformed, 1.0);
            #endif

            // Spatial rolling wind wave across the forest
            float wavePhase = dot(wPos.xz, vec2(0.707, 0.707)) * uWindScale - uWindTime * 1.5;
            float wave = sin(wavePhase) * 0.22 + sin(wavePhase * 2.2 + 1.1) * 0.09;

            // Organic high-frequency leaf shimmer
            float flutter = sin(uWindTime * 5.2 * ${e.toFixed(2)} + dot(transformed, vec3(3.2))) * 0.055;

            // Anchor trunk base firmly into the soil; canopy up high responds fully
            float heightCompliance = clamp((transformed.y + 0.5) * 0.25, 0.0, 1.0);

            transformed.x += (wave * 0.24 + flutter) * uWindStrength * heightCompliance;
            transformed.z += (wave * 0.18 + flutter) * uWindStrength * heightCompliance;
            transformed.y += abs(wave) * 0.05 * uWindStrength * heightCompliance;
            `)})}function u1(s){s.onBeforeCompile=e=>{e.uniforms.uWindTime=qn.uWindTime,e.uniforms.uWindStrength=qn.uWindStrength,e.uniforms.uWindScale=qn.uWindScale,e.uniforms.uGrassGrowth=qn.uGrassGrowth,e.vertexShader=`
            uniform float uWindTime;
            uniform float uWindStrength;
            uniform float uWindScale;
            uniform float uGrassGrowth;
        `+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
            #include <begin_vertex>

            #ifdef USE_INSTANCING
                vec4 wPos = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
            #else
                vec4 wPos = modelMatrix * vec4(transformed, 1.0);
            #endif

            // Progressive ground emergence: grass shoots up behind the expanding forest wave
            float waveFront = uGrassGrowth * 145.0;
            float rDist = length(wPos.xz);
            float sprout = smoothstep(waveFront + 4.0, waveFront - 6.0, rDist);
            transformed.y *= sprout;
            transformed.xz *= (0.15 + 0.85 * sprout);

            // Root is anchored at soil level (y=0 -> compliance=0)
            // Upper blade tip bends with quadratic compliance
            float heightRatio = clamp(position.y * 2.5, 0.0, 1.0);
            float compliance = heightRatio * heightRatio * sprout;

            // Dynamic rolling wind gusts through meadow grass
            float gustPhase = dot(wPos.xz, vec2(0.707, 0.707)) * (uWindScale * 1.6) - uWindTime * 2.2;
            float gust = sin(gustPhase) * 0.32 + sin(gustPhase * 1.7 + 0.8) * 0.14;

            transformed.x += gust * compliance * uWindStrength;
            transformed.z += gust * compliance * 0.82 * uWindStrength;
            transformed.y -= abs(gust) * compliance * 0.09 * uWindStrength;
            `)}}const nc=new Map;function f1(s){if(nc.has(s))return nc.get(s);const e=512,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.clearRect(0,0,e,e);const i=(c,h,u,f,d,p,_)=>{n.save(),n.translate(c,h),n.rotate(d),n.beginPath(),n.moveTo(0,-u*.9),n.bezierCurveTo(f*.65,-u*.5,f*.75,u*.15,f*.35,u*.55),n.bezierCurveTo(f*.15,u*.65,-f*.15,u*.65,-f*.35,u*.55),n.bezierCurveTo(-f*.75,u*.15,-f*.65,-u*.5,0,-u*.9),n.closePath();const m=n.createRadialGradient(0,0,u*.08,0,0,u*.75);m.addColorStop(0,"rgba(175, 225, 120, 0.98)"),m.addColorStop(.55,"rgba(88, 160, 48, 0.96)"),m.addColorStop(1,"rgba(42, 105, 28, 0.94)"),n.fillStyle=m,n.fill(),n.strokeStyle="rgba(225, 248, 170, 0.88)",n.lineWidth=3.5,n.beginPath(),n.moveTo(0,u*.55),n.lineTo(0,-u*.85),n.stroke(),n.strokeStyle="rgba(200, 238, 145, 0.50)",n.lineWidth=1.5;for(let g=1;g<=5;g++){const v=u*.45-g*(u*.22);[-1,1].forEach(M=>{n.beginPath(),n.moveTo(0,v),n.quadraticCurveTo(M*f*.35,v-u*.06,M*f*.55,v-u*.14),n.stroke()})}n.restore()};n.strokeStyle="rgba(105, 85, 55, 0.9)",n.lineWidth=6,n.beginPath(),n.moveTo(e*.5,e*.95),n.lineTo(e*.5,e*.2),n.stroke(),i(e*.5,e*.22,130,75,0);const r=[-.65,.65,-.85,.85,-1.05,1.05],o=[e*.42,e*.42,e*.6,e*.6,e*.75,e*.75],a=[e*.44,e*.56,e*.42,e*.58,e*.42,e*.58];for(let c=0;c<r.length;c++)i(a[c],o[c],120,70,r[c]);const l=new Ki(t);return l.colorSpace=Mt,l.wrapS=bn,l.wrapT=bn,nc.set(s,l),l}function No(s=1.6){const e=[],t=s,n=s*1.15;for(let r=0;r<3;r++){const o=new Bn(t,n,2,2),a=o.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l),h=Math.cos(c/(t*.5)*Math.PI*.5)*.18*s;a.setZ(l,h)}o.computeVertexNormals(),o.rotateY(r/3*Math.PI),o.translate(0,n*.48,0),e.push(o)}const i=lu(e,!1);return e.forEach(r=>r.dispose()),i}function d1(){const s=[];for(let n=0;n<2;n++){const i=new Bn(1.4,1.4,2,2);i.rotateX(-Math.PI*.5),i.rotateY(n/2*Math.PI*.5),i.translate(0,.1,0),s.push(i)}const t=lu(s,!1);return s.forEach(n=>n.dispose()),t}function p1(){const s=[],n=new Qh;n.moveTo(-.055,0),n.quadraticCurveTo(-.055*.25,.42*.55,.055*.35,.42*1.1),n.quadraticCurveTo(.055*.2,.42*.52,.055,0);for(let r=0;r<5;r++){const o=new Co(n,3),a=o.attributes.position,l=.75+Math.random()*.45,c=.25+Math.random()*.35,h=r/5*Math.PI*2+Math.random()*.4;for(let u=0;u<a.count;u++){const f=a.getY(u);a.setZ(u,Math.pow(f/.42,1.6)*.18)}o.computeVertexNormals(),o.scale(l,l,l),o.rotateX(c),o.rotateY(h),s.push(o)}const i=lu(s,!1);return s.forEach(r=>r.dispose()),i}function wg(s){const e=new Qh;return e.moveTo(0,0),e.bezierCurveTo(s*.65,s*.12,s*.88,s*.44,s*.76,s*.78),e.bezierCurveTo(s*.62,s*1.05,s*.26,s*1.2,0,s*1.22),e.bezierCurveTo(-s*.26,s*1.2,-s*.62,s*1.05,-s*.76,s*.78),e.bezierCurveTo(-s*.88,s*.44,-s*.65,s*.12,0,0),e}function m1(s,e){const t=new Co(wg(s),6),n=t.attributes.position;for(let i=0;i<n.count;i++){const r=n.getX(i),o=n.getY(i),a=$e.clamp(o/(s*1.22),0,1.1),l=e*(r*r)/(s*s)*(.35+a)*s,c=-e*.54*a*a*s,h=Math.sin(r/s*6.5)*.015*s*a;n.setZ(i,l+c+h)}return t.computeVertexNormals(),t}function g1(s,e,t=5){const n=new Co(s,t),i=n.attributes.position;let r=1/0,o=-1/0,a=0;for(let h=0;h<i.count;h++)r=Math.min(r,i.getY(h)),o=Math.max(o,i.getY(h)),a=Math.max(a,Math.abs(i.getX(h)));const l=Math.max(1e-6,o-r),c=Math.max(1e-6,a);for(let h=0;h<i.count;h++){const u=i.getX(h),f=i.getY(h),d=u/c,p=(f-r)/l;i.setZ(h,e*l*(d*d*.45+Math.pow(p,1.6)*.32))}return n.translate(0,-r,0),n.computeVertexNormals(),n}const _1=No(1.65),v1=No(1.75),x1=No(1.55),y1=No(1.45),M1=No(1.5),S1=d1(),Eg=g1(wg(.18),.28,4),Ag=p1(),Cg=new Set([_1,v1,x1,y1,M1,S1,Eg,Ag]),ic=new Map;function b1(s){if(ic.has(s))return ic.get(s);const e=512,t=512,n=document.createElement("canvas");n.width=e,n.height=t;const i=document.createElement("canvas");i.width=e,i.height=t;const r=n.getContext("2d"),o=i.getContext("2d"),a={mango:{base:"#4a3c2e",mid:"#382b1f",dark:"#221810",light:"#62513f",moss:"#424a2f"},banyan:{base:"#5a5246",mid:"#474035",dark:"#312b23",light:"#71685b",moss:"#4a5336"},peepal:{base:"#6c675b",mid:"#565045",dark:"#3d372e",light:"#847d70",moss:"#535b3d"},neem:{base:"#453729",mid:"#32261a",dark:"#20160e",light:"#5c4a37",moss:"#3c4329"},gulmohar:{base:"#534a3f",mid:"#413930",dark:"#2e261e",light:"#6a6052",moss:"#4b5335"},twig:{base:"#4a3f31",mid:"#382e22",dark:"#261e14",light:"#5e4e3d",moss:"#3e462b"}},l=a[s]||a.twig;r.fillStyle=l.base,r.fillRect(0,0,e,t),o.fillStyle="#808080",o.fillRect(0,0,e,t);for(let f=0;f<30;f++){const d=Math.random()*e,p=e*(.05+Math.random()*.16);r.globalAlpha=.1+Math.random()*.16,r.fillStyle=Math.random()<.5?l.mid:l.light,r.fillRect(d,0,p,t)}for(let f=0;f<70;f++){const d=Math.random()*e,p=t*(.25+Math.random()*.65),_=Math.random()*t,m=1.5+Math.random()*3.5;for(const g of[-t,0,t]){r.strokeStyle=Math.random()<.65?l.dark:l.mid,r.globalAlpha=.12+Math.random()*.18,r.lineWidth=m,o.strokeStyle="rgb(115,115,115)",o.lineWidth=m,r.beginPath(),o.beginPath(),r.moveTo(d,_+g),o.moveTo(d,_+g);for(let v=_;v<_+p;v+=18){const M=(v-_)*.014,y=Math.sin(M*5.2+d*.04)*3.5;r.lineTo(d+y,v+g),o.lineTo(d+y,v+g)}r.stroke(),o.stroke()}}const c=new Ki(n),h=new Ki(i);[c,h].forEach(f=>{f.wrapS=Kn,f.wrapT=Kn,f.repeat.set(1.6,1)}),c.colorSpace=Mt;const u={map:c,bumpMap:h};return ic.set(s,u),u}const sc=new Map;function T1(s){if(sc.has(s))return sc.get(s);const{map:e,bumpMap:t}=b1(s),n=new Ft({map:e,bumpMap:t,bumpScale:.07,roughness:.85,metalness:.02,emissive:new K(1315085),emissiveIntensity:.15});return sc.set(s,n),n}function Ch(s,e){const t=Math.hypot(s,e),n=$e.smoothstep(t,1.5,12),i=Math.sin(s*.045+.5)*Math.cos(e*.04+.8)*.65,r=Math.sin(s*.095-e*.08)*.35,o=Math.cos(s*.18+e*.15)*.18,a=Math.sin(s*.38)*Math.cos(e*.35)*.08;return(i+r+o+a)*n}let rc=null;function w1(){if(rc)return rc;const s=1024,e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d");t.fillStyle="#262016",t.fillRect(0,0,s,s);const n=["#140f09","#1b140b","#120d08","#241a10","#2d2114","#18120a","#1e160e","#0f0a06"];for(let a=0;a<320;a++)t.globalAlpha=.28+Math.random()*.42,t.fillStyle=n[Math.random()*n.length|0],t.beginPath(),t.ellipse(Math.random()*s,Math.random()*s,24+Math.random()*95,16+Math.random()*70,Math.random()*Math.PI,0,Math.PI*2),t.fill();const i=["#222a14","#2c3618","#343f1c","#1b2210"];for(let a=0;a<180;a++)t.globalAlpha=.16+Math.random()*.24,t.fillStyle=i[Math.random()*i.length|0],t.beginPath(),t.ellipse(Math.random()*s,Math.random()*s,15+Math.random()*50,10+Math.random()*38,Math.random()*Math.PI,0,Math.PI*2),t.fill();const r=["#3e2a16","#4e331a","#22150a","#301f10","#593b1d","#120904"];for(let a=0;a<2600;a++){t.globalAlpha=.22+Math.random()*.5,t.fillStyle=r[Math.random()*r.length|0];const l=Math.random()*s,c=Math.random()*s;t.fillRect(l,c,2+Math.random()*6,1+Math.random()*3)}t.globalAlpha=1;const o=new Ki(e);return o.wrapS=Kn,o.wrapT=Kn,o.repeat.set(28,28),o.colorSpace=Mt,rc=o,o}const ep={mango:{trunkHeight:6.2,trunkBaseRadius:.95,trunkTopRadius:.54,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:46,splitSpreadDeg:36,lengthFalloff:.78,radiusFalloff:.66,limbLength:3.2,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.25,leafColor:2246686,leafColorVariance:.12,leafRoughness:.4,flushColor:10176044,flushRatio:.18,flutterMult:.85,swayAmplitude:.04,swayFreqMult:.85},banyan:{trunkHeight:6.8,trunkBaseRadius:1.15,trunkTopRadius:.58,buttressFlutes:5,buttressReach:.68,propRoots:4,limbCount:5,branchLevels:3,firstSpreadDeg:44,splitSpreadDeg:35,lengthFalloff:.78,radiusFalloff:.65,limbLength:3.4,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.3,leafColor:3036709,leafColorVariance:.12,leafRoughness:.46,flutterMult:.85,swayAmplitude:.05,swayFreqMult:.85},peepal:{trunkHeight:7.2,trunkBaseRadius:.85,trunkTopRadius:.4,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:38,splitSpreadDeg:32,lengthFalloff:.76,radiusFalloff:.63,limbLength:3,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.2,leafColor:6591548,leafColorVariance:.15,leafRoughness:.42,flutterMult:1.8,swayAmplitude:.12,swayFreqMult:1.6},neem:{trunkHeight:7,trunkBaseRadius:.76,trunkTopRadius:.36,buttressFlutes:3,buttressReach:.38,propRoots:0,limbCount:4,branchLevels:3,firstSpreadDeg:36,splitSpreadDeg:30,lengthFalloff:.76,radiusFalloff:.64,limbLength:2.8,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.15,leafColor:4025895,leafColorVariance:.13,leafRoughness:.65,flutterMult:1.25,swayAmplitude:.1,swayFreqMult:1.25},gulmohar:{trunkHeight:6.4,trunkBaseRadius:.82,trunkTopRadius:.44,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:48,splitSpreadDeg:38,lengthFalloff:.8,radiusFalloff:.65,limbLength:3.2,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.25,leafColor:3828775,leafColorVariance:.12,leafRoughness:.52,hasBlossoms:!0,blossomColor:14235678,blossomCountPerTwig:3,flutterMult:1.1,swayAmplitude:.07,swayFreqMult:1.1}},ms=new Map;let $r=null,tp=!1,np=!1;const oc=[];function Pu(s){if(s){if(np)return s(),Promise.resolve();oc.push(s)}if(tp)return Promise.resolve();tp=!0;const e=new cu,n=[{key:"mango",url:Xn("models/mango_tree_2.glb"),targetHeight:13.5,groundSink:0},{key:"neem",url:Xn("models/mango_tree.glb"),targetHeight:10.5,groundSink:0},{key:"banyan",url:Xn("models/chinese_banyan_ficus_microcarpa.glb"),targetHeight:12.5,groundSink:0},{key:"peepal",url:Xn("models/bodhi_tree.glb"),targetHeight:11,groundSink:1.25},{key:"rose",url:Xn("models/red_rose.glb"),targetHeight:1.55,groundSink:0}].map(i=>new Promise(r=>{e.load(i.url,o=>{const a=o.scene;a.name=`GLB_${i.key}`;const l=new fi().setFromObject(a),c=l.getCenter(new P),h=l.getSize(new P),u=i.targetHeight/Math.max(h.y,.001),f=(i.groundSink||0)/u;a.position.set(-c.x,-l.min.y-f,-c.z);const d=new Bt;d.name=`GLB_Wrapper_${i.key}`,d.add(a),d.scale.setScalar(u),a.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0,p.geometry&&Cg.add(p.geometry),p.material&&(p.material.side=vt,p.material.shadowSide=vt,p.material.roughness!==void 0&&(p.material.roughness=Math.max(p.material.roughness,.65)),(p.material.name==="Material.001"||p.material.name==="Material.004"||p.material.alphaTest>0||p.material.name&&/leaf|leaves|foliage/i.test(p.material.name)||p.name&&/leaf|leaves/i.test(p.name))&&p.material.map&&(p.material.alphaTest=.35,p.material.transparent=!1,p.material.depthWrite=!0,p.material.needsUpdate=!0,p.customDepthMaterial=new tu({depthPacking:Bp,map:p.material.map,alphaTest:.35}))))}),i.key==="rose"?$r=d:ms.set(i.key,d),r()},void 0,o=>{console.warn(`Failed to load ${i.url}:`,o),r()})}));return Promise.all(n).then(()=>{np=!0;const i=[...oc];oc.length=0,i.forEach(r=>{try{r()}catch(o){console.error(o)}})})}Pu();function E1(s,{seed:e=1,scale:t=1}={}){const n=new Bt;n.name=`Tree_${s}`;let i=s;i==="gulmohar"&&(i="peepal");const r=Io(e),o=ms.get(i)||ms.get("mango")||ms.get("banyan"),a=h=>{const u=.92+r()*.18;s==="neem"?h.scale.set(u*t*.78,u*t*1.2,u*t*.78):s==="mango"?h.scale.set(u*t*1.2,u*t*1.52,u*t*1.2):h.scale.multiplyScalar(u*t),h.rotation.y=r()*Math.PI*2},l=h=>{h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material&&(u.material.shadowSide=vt,u.material.alphaTest>0&&u.material.map&&!u.customDepthMaterial&&(u.customDepthMaterial=new tu({depthPacking:Bp,map:u.material.map,alphaTest:u.material.alphaTest}))))})};if(o){const h=o.clone(!0);a(h),l(h),n.add(h),n.userData.swayGroup=h}else{const h=new Bt;n.add(h),n.userData.swayGroup=h,Pu(()=>{const u=ms.get(i)||ms.get("mango")||ms.get("banyan");if(u){const f=u.clone(!0);a(f),l(f),h.add(f)}})}const c=ep[s]||ep.mango;return n.userData.swayAmplitude=c.swayAmplitude,n.userData.swayFreqMult=c.swayFreqMult,n.userData.species=s,n.userData.seed=e,n}function A1(s,e,t,n){const i=new K(4878120),r=new Ft({color:16777215,roughness:.78,metalness:0,side:vt,vertexColors:!0,emissive:i.clone().multiplyScalar(.24),emissiveIntensity:.95});r.shadowSide=vt,u1(r);const o=new ja(Ag,r,n);o.castShadow=!0,o.receiveShadow=!0;const a=new Ie,l=new mn,c=new P,h=new P,u=new K(9403452),f=new K(2835480);for(let d=0;d<n;d++){const p=e+(t-e)*Math.sqrt(s()),_=s()*Math.PI*2,m=Math.sin(_)*p,g=Math.cos(_)*p,v=Ch(m,g);h.set(m,v,g),l.setFromAxisAngle(Tg,s()*Math.PI*2);const M=m*.08,y=g*.08,T=Math.sin(M*2.1+Math.sin(y*1.8))*Math.cos(y*1.9+Math.sin(M*2.3));let w=.85+s()*1.35;T>.3&&s()<.65&&(w*=.22),c.set(w,w*(.9+s()*.8),w),a.compose(h,l,c),o.setMatrixAt(d,a);const A=s();A<.14?vs.copy(i).lerp(u,.4+s()*.45):A<.45?vs.copy(i).lerp(f,s()*.65):vs.copy(i),vs.offsetHSL((s()-.5)*.03,0,(s()-.5)*.1),o.setColorAt(d,vs)}return o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o}function C1(s){const e=Io(s),t=new Bt;t.name="Shrub";const n=.35+e()*.3,i=new fr(.024,.048,n,8,1);i.translate(0,n/2,0);const r=new Ue(i,T1("twig"));r.castShadow=!0,t.add(r);const o=36+Math.floor(e()*16),a=new K(4223786),l=new Ft({color:16777215,map:f1("mango"),roughness:.68,metalness:0,side:vt,alphaTest:.4,vertexColors:!0,emissive:a.clone().multiplyScalar(.22),emissiveIntensity:.9});l.shadowSide=vt,h1(l,1.2);const c=new ja(Eg,l,o);c.castShadow=!0,c.receiveShadow=!0;const h=new Ie,u=new mn,f=new mn,d=new P,p=new P,_=new P,m=new P,g=.48+e()*.3;for(let v=0;v<o;v++){const M=g*Math.cbrt(e()),y=e()*Math.PI*2,T=Math.acos(2*e()-1);_.set(Math.sin(T)*Math.cos(y),Math.abs(Math.cos(T))*.85+.25,Math.sin(T)*Math.sin(y)).normalize(),p.copy(_).multiplyScalar(M),p.y+=n*.72,u.setFromUnitVectors(Tg,_),m.set(e()-.5,e()-.5,e()-.5).normalize(),f.setFromAxisAngle(m,(e()-.5)*1.1),u.multiply(f);const w=.85+e()*.5;d.setScalar(w),h.compose(p,u,d),c.setMatrixAt(v,h),vs.copy(a).offsetHSL((e()-.5)*.04,0,(e()-.5)*.12),c.setColorAt(v,vs)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),t.add(c),t.userData.swayGroup=t,t.userData.swayAmplitude=.04,t.userData.swayFreqMult=1.25,t}function R1(s=5e3){const e=Io(s),t=Ah-5,n=Ah+4*Ru+8,i=A1(e,Math.max(3,t),n,1e4);i.name="ForestGrass";const r=[];for(let o=0;o<20;o++){const a=t+e()*(n-t),l=e()*Math.PI*2,c=C1(9e3+o);c.position.set(Math.sin(l)*a,0,Math.cos(l)*a),c.rotation.y=e()*Math.PI*2,c.scale.setScalar(.9+e()*.5),c.userData.seed=9e3+o,r.push(c)}return{grass:i,shrubs:r}}function P1(s=4242){const e=Io(s),t=new Bt;t.name="RoseCenterpiece";const n=m1(.15,.11),i=new Ft({color:10752036,roughness:.4,side:vt,emissive:2359814,emissiveIntensity:.85});for(let u=0;u<9;u++){const f=new Ue(n,i),d=.2+e()*.55,p=e()*Math.PI*2;f.position.set(Math.cos(p)*d,.015,Math.sin(p)*d),f.rotation.x=Math.PI*.48+(e()-.5)*.2,f.rotation.y=e()*Math.PI*2,f.rotation.z=(e()-.5)*.3,f.scale.setScalar(.72+e()*.38),f.castShadow=!0,t.add(f)}const r=new Bt;r.name="RedRoseGLBPivot",r.position.set(0,0,0),t.add(r);const o=u=>{u.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0,f.material&&(f.material.shadowSide=vt))})};if($r){const u=$r.clone(!0);o(u),r.add(u)}else Pu(()=>{if($r){const u=$r.clone(!0);o(u),r.add(u)}});const a=36,l=new At,c=new Float32Array(a*3);for(let u=0;u<a;u++){const f=.3+e()*1.5,d=e()*Math.PI*2,p=.5+e()*2.8;c[u*3]=Math.cos(d)*f+.15,c[u*3+1]=p,c[u*3+2]=Math.sin(d)*f}l.setAttribute("position",new Yt(c,3));const h=new Zh(l,new Za({color:16767344,size:.045,transparent:!0,opacity:.8,blending:co,depthWrite:!1}));return t.add(h),t.userData.swayGroup=r,t.userData.swayAmplitude=.035,t.userData.swayFreqMult=1.1,t.userData.motes=h,t}function D1(){const s=Io(8491),e=["mango","mango","mango","mango","mango","neem","neem","neem","neem","neem","neem","neem","peepal","peepal","peepal","peepal","peepal","banyan","banyan","banyan","banyan"],t={mango:[16.5,25],neem:[18,28.5],peepal:[22,32],banyan:[25,35]},n={mango:1.14,neem:1.02,peepal:1.03,banyan:1.1},i=[],r=5.6;for(let o=0;o<e.length;o++){const a=e[o],[l,c]=t[a],h=n[a];let u=0,f=0,d=0,p=!1;for(let m=0;m<150;m++){const g=s()*Math.PI*2,v=l+s()*(c-l),M=Math.sin(g)*v,y=Math.cos(g)*v;let T=!1;for(const w of i)if(Math.hypot(M-w.x,y-w.z)<r){T=!0;break}if(!T){u=M,f=y,d=g,p=!0;break}}if(!p){const m=o*2.39996+s()*.4,g=l+s()*(c-l);u=Math.sin(m)*g,f=Math.cos(m)*g,d=m}const _=.94+s()*.2;i.push({species:a,x:u,z:f,angle:d,seed:500+o*43,scale:h*_})}return i}function ip(s=!1){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createRadialGradient(256,256,0,256,256,256);return s?(n.addColorStop(0,"rgba(0, 0, 0, 0.96)"),n.addColorStop(.35,"rgba(0, 0, 0, 0.78)"),n.addColorStop(.65,"rgba(0, 0, 0, 0.38)"),n.addColorStop(.85,"rgba(0, 0, 0, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)")):(n.addColorStop(0,"rgba(0, 0, 0, 0.65)"),n.addColorStop(.28,"rgba(0, 0, 0, 0.42)"),n.addColorStop(.58,"rgba(0, 0, 0, 0.20)"),n.addColorStop(.82,"rgba(0, 0, 0, 0.05)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)")),t.fillStyle=n,t.fillRect(0,0,512,512),new Ki(e)}function L1(s){const e=new Bt;e.name="CenterSculpture";const t=new Bn(6.2,6.2),n=new cn({map:ip(!1),transparent:!0,opacity:.95,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),i=new Ue(t,n);i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=1,e.add(i);const r=new Bn(3.6,3.6),o=new cn({map:ip(!0),transparent:!0,opacity:.98,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new Ue(r,o);a.rotation.x=-Math.PI/2,a.position.y=.004,a.renderOrder=2,e.add(a);const l=new fr(1.8,2.1,3.8,16);l.translate(0,1.9,0);const c=new cn({visible:!1}),h=new Ue(l,c);h.name="SculptureHitbox",e.add(h);const u=new su(16105608,.65,4,2);return u.position.set(0,1.7,0),e.add(u),new cu(s).load(Xn("models/center_sculpture.glb"),d=>{const p=d.scene;p.name="SculptureScannedModel";const _=new P;let m=-1/0,g=1/0;p.traverse(C=>{if(C.isMesh&&C.geometry){const D=C.geometry.attributes.position,I=new P;for(let G=0;G<D.count;G++)I.fromBufferAttribute(D,G),I.y>m&&(m=I.y,_.copy(I)),I.y<g&&(g=I.y)}});const v=3.6,M=m-g,y=v/(M||1);p.position.x=-_.x*y,p.position.z=-_.z*y,p.position.y=-g*y-.085,p.scale.setScalar(y),p.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0,C.material&&(C.material.roughness=.52,C.material.metalness=.04,C.material.envMapIntensity=.75,C.material.onBeforeCompile=D=>{D.vertexShader=`
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
                                `)}))}),e.add(p),e.userData.scannedModel=p;const T=m*y+p.position.y,w=720,A=new fr(.016,.016,w,12,1e3,!0);A.translate(0,w/2,0);const x={uTime:{value:0},uMotion:{value:0},uDrag:{value:new te(0,0)},uWind:{value:new te(0,0)}},S=new Ft({color:14162972,emissive:10031120,emissiveIntensity:1.3,roughness:.88,metalness:.02});S.onBeforeCompile=C=>{C.uniforms.uTime=x.uTime,C.uniforms.uMotion=x.uMotion,C.uniforms.uDrag=x.uDrag,C.uniforms.uWind=x.uWind,C.vertexShader=`
                    uniform float uTime;
                    uniform float uMotion;
                    uniform vec2 uDrag;
                    uniform vec2 uWind;
                    varying float vFresnel;
                
`+C.vertexShader,C.vertexShader=C.vertexShader.replace("#include <begin_vertex>",`
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
                    `),C.fragmentShader=`
                    varying float vFresnel;
                
`+C.fragmentShader,C.fragmentShader=C.fragmentShader.replace("#include <dithering_fragment>",`
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
                    `)};const U=new Ue(A,S);U.position.set(0,T,0),U.name="SculptureRedThread",U.frustumCulled=!1,e.add(U),e.userData.threadUniforms=x},void 0,d=>{console.error("Error loading center_sculpture.glb:",d)}),e.userData={isSculpture:!0,hitbox:h},e}const Rh=43.6532*(Math.PI/180),I1=12.5*(Math.PI/180),N1=9.95/24*Math.PI*2,U1=new P(-.198,.456,.8677).normalize(),F1=new P(-.8734,-.4838,.0549).normalize(),O1=new P(.4448,-.7469,.4941).normalize();function sp(s,e,t){const n=Math.sin(s)*Math.sin(e)+Math.cos(s)*Math.cos(e)*Math.cos(t),i=Math.asin(Math.max(-1,Math.min(1,n))),r=Math.cos(i);if(Math.abs(r)<1e-5)return{alt:i,az:0};const o=(Math.sin(e)-Math.sin(s)*Math.sin(i))/(Math.cos(s)*r),a=-Math.cos(e)*Math.sin(t)/r;let l=Math.atan2(a,Math.max(-1,Math.min(1,o)));l<0&&(l+=Math.PI*2);let c=(l+Math.PI)%(Math.PI*2);return{alt:i,az:c}}function rp(s,e,t=1600){const n=Math.cos(s),i=t*n*Math.sin(e),r=t*Math.sin(s),o=-t*n*Math.cos(e);return new P(i,r,o)}function B1(s,e=1600){const t=s-Math.PI/2,n=sp(Rh,I1,t),i=rp(n.alt,n.az,e),r=t+Math.PI,o=-11*(Math.PI/180),a=sp(Rh,o,r),l=rp(a.alt,a.az,e);return{sunPos:i,sunAlt:n.alt,sunAz:n.az,moonPos:l,moonAlt:a.alt,moonAz:a.az}}function k1(s=1800,e=!1){const t=new Bt;t.name="TorontoSkySystem";const n=new pr(s*.98,e?24:32,e?16:24),i=new kt({uniforms:{uZenithColor:{value:new K(1721972)},uHorizonColor:{value:new K(5011622)},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new K(16774616)},uNightFactor:{value:0}},vertexShader:`
            varying vec3 vWorldPos;
            void main() {
                vWorldPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 uZenithColor;
            uniform vec3 uHorizonColor;
            uniform vec3 uSunDir;
            uniform vec3 uSunColor;
            uniform float uNightFactor;
            varying vec3 vWorldPos;

            void main() {
                vec3 dir = normalize(vWorldPos);
                float h = max(0.0, dir.y);

                float horizonBand = pow(1.0 - h, 3.5) * 0.22;
                vec3 baseSky = mix(uZenithColor, uHorizonColor, horizonBand);

                float sunDot = max(0.0, dot(dir, uSunDir));
                float corona = pow(sunDot, 256.0) * 0.35 * (1.0 - uNightFactor);

                vec3 col = baseSky + uSunColor * corona;

                // Deep royal midnight sky with subtle atmospheric horizon airglow
                vec3 nightZenith = vec3(0.008, 0.015, 0.035);
                vec3 nightHorizon = vec3(0.018, 0.036, 0.062);
                vec3 nightSky = mix(nightZenith, nightHorizon, horizonBand);
                col = mix(col, nightSky, uNightFactor);

                gl_FragColor = vec4(col, 1.0);
            }
        `,side:Kt,depthWrite:!1,fog:!1}),r=new Ue(n,i);r.renderOrder=-200,t.add(r);const o=new Bt;o.name="TorontoCelestialGroup";const l=new nu().load(Xn("textures/milkyway.jpg"));l.wrapS=Kn,l.wrapT=bn,l.minFilter=Tt,l.magFilter=Tt,l.generateMipmaps=!1;const c=new pr(s*.95,e?32:48,e?24:36),h=new kt({uniforms:{uMwTex:{value:l},uNightFactor:{value:0},uGalacticPole:{value:U1},uGalacticCenter:{value:F1},uGalactic90:{value:O1}},vertexShader:`
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
        `,side:Kt,transparent:!0,blending:co,depthWrite:!1,fog:!1}),u=new Ue(c,h);return u.renderOrder=-160,o.add(u),t.add(o),{skyRoot:t,skyDomeMat:i,mwMat:h,celestialGroup:o,update(f,d,p=1600){const _=B1(f,p),m=_.sunAlt,g=Math.max(0,Math.sin(m)),v=Math.max(0,Math.sin(_.moonAlt)),M=$e.clamp((-m+.08)/.2,0,1);i.uniforms.uSunDir.value.copy(_.sunPos).normalize(),i.uniforms.uNightFactor.value=M,h.uniforms.uNightFactor.value=M;const y=f-Math.PI/2+N1;return o.rotation.order="ZXY",o.rotation.x=Math.PI/2-Rh,o.rotation.y=-y,{cel:_,sunAlt:m,sH:g,mH:v,nightFactor:M}}}}const op=new Ka,ap=new Ie,ac=new P,lp=new P,cp=new P,$s=new P,hp=new P,va=new P,xa=new K,Xr=new K,up=new K(1721972),fp=new K(5011622),z1=new K(2762055),G1=new K(14718591),H1=new K(1841196),V1=new K(13127711),lc=new K,cc=new K,W1=new K(0),X1=new K(0),dp=new K(16776680),Y1=new K(16298086),pp=new K(16773832),q1=new K(16033630),j1=new K(15773850),mp=new K(15134197),K1=new K(12767970),gp=new K(13162728),Z1=new K(11584986),J1=new K(14739698),$1=new K(3491165),Q1=new K(16577236),eE=new K(1053983),tE=new K(2367256),nE=new K(659977),iE=new K(2306328),sE=new K(6841438),rE=new K(2107444),oE=new K(660516),aE=new K(3289140),lE=new K(9215598),cE=new K(5137984),hE=new K(1977370),uE=new K(9077088),hc=.025,uc=["default","portfolio","forest"];function Qr(s){return uc[(uc.indexOf(s)+1)%uc.length]}const fE={default:"Doors",portfolio:"Paintings",forest:"Forest"};function ya(s){return fE[Qr(s)]}const _p=130,dE=15,pE=3,vp=720,xp=60,yp=.2,Ma=.25,Mp=.22,ds={scene:{fog:{color:"#273444"},camera:{fov:50}},doors:[{id:"portfolio",label:"PORTFOLIO",type:"rustic_wood",modelPath:"/models/door_rustic.glb",position:[-10,0,-6],rotation:[0,.4,0],destinationUrl:"",animation:"creakOpen",color:16755336,particles:"leaves"},{id:"blog",label:"BLOG",type:"scifi_portal",modelPath:"/models/door_scifi.glb",position:[-5,0,-9],rotation:[0,.2,0],destinationUrl:"/blog",animation:"slideUp",color:8965375,particles:"tech"},{id:"projects",label:"PROJECTS",type:"iron_gate",modelPath:"/models/gate_iron.glb",position:[0,0,-10],rotation:[0,0,0],destinationUrl:"https://waveism.duar.one",animation:"swingBoth",color:16772778,particles:"sparks"},{id:"contact",label:"CONTACT",type:"stone_arch",modelPath:"/models/arch_stone.glb",position:[5,0,-9],rotation:[0,-.2,0],destinationUrl:"/about/",animation:"dissolveField",color:13404415,particles:"runes"},{id:"about",label:"ABOUT",type:"shoji_screen",modelPath:"/models/door_shoji.glb",position:[10,0,-6],rotation:[0,-.4,0],destinationUrl:"/about/",animation:"slideRight",color:16746666,particles:"petals"}]};class mE{constructor(){this.container=document.getElementById("app"),console.log("DuarApp initializing..."),this.scene=new Hp,this.doors=[],this.raycaster=new Av,this.mouse=new te,this.time=0,this.daySpeed=.08,this.motionPaused=!0,this.isTraveling=!1,this.activeDoor=null,this._orbitRadius=null,this.hoveredDoor=null,this.elapsed=0,this.viewMode="portfolio",this._switching=!1,this.particleSystems=[],this.dragPlane=new wi(new P(0,1,0),0),this.loadingManager=new om,this.setupLoadingManager(),this._bindReticle(),this._bindPaintingPopup(),this.init(),setTimeout(()=>this.revealScene(),2500)}_bindReticle(){const e=document.getElementById("reticle");if(!e)return;["pointerdown","pointerup"].forEach(n=>e.addEventListener(n,i=>i.stopPropagation())),e.addEventListener("click",n=>{n.stopPropagation(),this.viewMode!=="portfolio"&&this._refuseEntry()});const t=document.querySelector(".reticle-back");t&&t.addEventListener("click",n=>{n.stopPropagation(),this.isTraveling||this.resetScene()})}_bindPaintingPopup(){const e=document.getElementById("painting-popup"),t=document.getElementById("painting-title-btn"),n=document.getElementById("painting-popup-card");!e||!t||(t.addEventListener("click",i=>{i.stopPropagation(),e.classList.toggle("open")}),n&&["pointerdown","pointerup","click"].forEach(i=>{n.addEventListener(i,r=>r.stopPropagation())}),window.addEventListener("click",i=>{e.classList.contains("open")&&!e.contains(i.target)&&e.classList.remove("open")}))}_flashReticleLabel(e){const t=document.querySelector("#reticle .reticle-label");t&&(this._reticleLabelDefault||(this._reticleLabelDefault=t.textContent),t.textContent=e,clearTimeout(this._reticleLabelTimeout),this._reticleLabelTimeout=setTimeout(()=>{t.textContent=this._reticleLabelDefault,t.classList.remove("refuse")},1600))}_refuseEntry(e="Coming soon"){const t=document.getElementById("reticle"),n=t?.querySelector(".reticle-label");this._flashReticleLabel(e),!(!t||!n)&&(t.classList.remove("refuse"),n.classList.remove("refuse"),t.offsetWidth,t.classList.add("refuse"),n.classList.add("refuse"),setTimeout(()=>t.classList.remove("refuse"),500))}_showReticle(){const e=document.getElementById("reticle");if(!e)return;const t=this.viewMode==="portfolio";if(e.classList.toggle("art-mode",t),t){const i=e.querySelector(".reticle-title");i&&(i.textContent="")}e.classList.add("visible");const n=document.querySelector(".reticle-back");if(n&&(n.classList.toggle("art",t),n.classList.add("visible")),Le.fromTo(e,{opacity:0,scale:0},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)",overwrite:!0}),t&&this.activeDoor?.data){const i=this.activeDoor.data,r=document.getElementById("painting-popup"),o=r?.querySelector(".popup-title-text"),a=r?.querySelector(".popup-card-meta"),l=r?.querySelector(".popup-card-desc");if(r&&o){o.textContent=i.title||"Untitled";const c=[];i.year&&c.push(`${i.year}`),i.widthIn&&i.heightIn&&c.push(`${i.widthIn}×${i.heightIn} in`),i.medium&&c.push(i.medium),a&&(a.textContent=c.join("  ·  ")),l&&(l.textContent=i.description||""),r.classList.remove("open"),r.classList.add("visible")}}}_hideReticle(){const e=document.getElementById("reticle");if(!e)return;document.querySelector(".reticle-back")?.classList.remove("visible","art");const t=document.getElementById("painting-popup");t&&t.classList.remove("visible","open"),Le.to(e,{opacity:0,scale:0,duration:.3,ease:"power2.in",overwrite:!0,onComplete:()=>e.classList.remove("visible","art-mode")})}dismissIntro(){this._introDismissed||(this._introDismissed=!0,["intro-title","intro-hint"].forEach(e=>{const t=document.getElementById(e);t&&(t.style.animation="none",Le.to(t,{opacity:0,y:-20,duration:1.2,ease:"power2.out",onComplete:()=>{t.style.display="none"}}))}))}updateLabels(){if(!this.doors.length)return;const e=new P,t=window.innerWidth/2,n=window.innerHeight/2;this.doors.forEach(i=>{const r=i.labelEl;if(!r)return;if(!(i===this.hoveredDoor&&!this.activeDoor&&!this.isTraveling)){r.style.opacity!=="0"&&(r.style.opacity="0");return}const a=i.isPainting?i.centreY+(i.height||4)/2+.3:3.7;if(e.set(i.group.position.x,i.group.position.y+a,i.group.position.z).project(this.camera),e.z>1){r.style.opacity="0";return}r.style.left=e.x*t+t+"px",r.style.top=-e.y*n+n+"px",r.style.opacity="1"})}setupLoadingManager(){this.loadingManager.onLoad=()=>this.revealScene(),this.loadingManager.onError=()=>this.revealScene()}revealScene(){this._revealed=!0,this._maybeStartIntro();const e=document.getElementById("loading");e&&Le.to(e,{opacity:0,duration:1.5,ease:"power2.out",onComplete:()=>{e.style.display="none"}}),this.viewMode==="portfolio"?(this.sculpture&&(this.sculpture.visible=!0),this.rock&&(this.rock.visible=!1),this.roseCenterpiece&&(this.roseCenterpiece.visible=!1)):this.viewMode==="forest"?(this.roseCenterpiece&&(this.roseCenterpiece.visible=!0),this.rock&&(this.rock.visible=!1),this.sculpture&&(this.sculpture.visible=!1)):(this.rock&&(this.rock.visible=!0),this.sculpture&&(this.sculpture.visible=!1),this.roseCenterpiece&&(this.roseCenterpiece.visible=!1))}init(){this.camera=new rn(ds.scene.camera.fov,window.innerWidth/window.innerHeight,.1,6e3),this.camera.fov=this._fovForAspect(window.innerWidth/window.innerHeight),this.camera.updateProjectionMatrix(),this.camera.position.set(0,3,28.5),this.camera.lookAt(0,1.6,0);const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.innerWidth<768;this.isMobile=e,this.renderer=new Sb({antialias:!e,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e?1.5:2)),this.renderer.toneMapping=Dh,this.renderer.toneMappingExposure=1.02,this.renderer.outputColorSpace=Mt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sp,this.container.appendChild(this.renderer.domElement),this.renderer.setClearColor(0,1);try{const f=new ah(this.renderer);f.compileEquirectangularShader();const d=new wT;this.scene.environment=f.fromScene(d).texture,this.scene.environmentIntensity=.35,d.dispose(),f.dispose()}catch(f){console.warn("Environment map initialization bypassed:",f)}this.composer=new ST(this.renderer),this.composer.addPass(new bT(this.scene,this.camera));const t=e?new te(Math.floor(window.innerWidth/4),Math.floor(window.innerHeight/4)):new te(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2));this.bloomPass=new xr(t,.08,.3,.98),this._bloomDefaults={strength:.08,threshold:.98},this.composer.addPass(this.bloomPass),this.controls=new Tb(this.camera,this.renderer.domElement),this.controls.target.set(0,1.6,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=.5,this.controls.maxDistance=100,this.controls.maxPolarAngle=Math.PI*.54,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=-.8,this.scene.fog=new Xh(ds.scene.fog.color,.002),this.scene.background=new K(ds.scene.fog.color),this.setupLighting(),this.setupEnvironment(),this.viewMode==="portfolio"?(this.buildPortfolioDoors(),this.bloomPass.threshold=.98,this.bloomPass.strength=.08):this.setupDoors(),this.setupDustMotes(),window.addEventListener("resize",()=>this.onResize(),{passive:!0}),window.addEventListener("wheel",()=>this.dismissIntro(),{passive:!0}),["gesturestart","gesturechange","gestureend"].forEach(f=>window.addEventListener(f,d=>d.preventDefault(),{passive:!1}));let n=0;window.addEventListener("touchend",f=>{const d=performance.now();d-n<300&&f.preventDefault(),n=d},{passive:!1}),window.addEventListener("contextmenu",f=>{this.draggedDoor&&f.preventDefault()});let i=0,r=0,o=0;this._isPointerDown=!1,this._pointerSpeed=0;let a=0,l=0,c=0;window.addEventListener("pointerdown",f=>{this.dismissIntro(),i=f.clientX,r=f.clientY,o=performance.now(),this._isPointerDown=!0,a=f.clientX,l=f.clientY,c=o,this._pointerSpeed=0,this.onMouseMove(f),(f.button===1||f.button===2||f.shiftKey)&&this.handlePointerDown(f)}),window.addEventListener("pointermove",f=>{if(this._isPointerDown){const d=performance.now(),p=Math.max(1,d-c),_=Math.hypot(f.clientX-a,f.clientY-l);this._pointerSpeed=_/p*1e3,a=f.clientX,l=f.clientY,c=d}this.onMouseMove(f),this.draggedDoor&&this.handleDoorDrag(f)}),window.addEventListener("pointerup",f=>{if(this._isPointerDown=!1,this._pointerSpeed=0,f.pointerType==="touch"&&(this.hoveredDoor=null),this.draggedDoor){this.draggedDoor=null,this.controls.enabled=!0;return}const d=Math.hypot(f.clientX-i,f.clientY-r),p=performance.now()-o;d<8&&p<350&&this.onClick(f)}),window.addEventListener("pointercancel",()=>{this._isPointerDown=!1,this._pointerSpeed=0}),this.createTimeControls(),this._startClock();const h=new Date,u=h.getHours()+h.getMinutes()/60;this.sunAngle=(u-6)/24*Math.PI*2,this.daySpeed=hc,setTimeout(()=>this.dismissIntro(),14e3);try{this.renderer.compile(this.scene,this.camera)}catch{}this._lastFrame=performance.now(),this.animate()}createTimeControls(){if(!document.getElementById("compact-ui-css")){const m=document.createElement("style");m.id="compact-ui-css",m.innerHTML=`
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
            `,document.head.appendChild(m)}const e=document.createElement("div");this.uiContainer=e,e.style.cssText="position:absolute; bottom:calc(45px + env(safe-area-inset-bottom)); width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);";const t=document.createElement("div");t.className="glass-bar-wrapper",t.onmouseenter=()=>this.resetUIHideTimer();const n={home:'<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>',random:'<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>',day:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>',spiral:'<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a7.2 7.2 0 0 0-7.2-7.2 7.2 7.2 0 0 0-7.2 7.2c0 3.09 2.51 5.6 5.6 5.6s5.6-2.51 5.6-5.6a4 4 0 0 0-4-4c-1.33 0-2.4 1.07-2.4 2.4s1.07 2.4 2.4 2.4"/></svg>',night:'<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',pause:'<svg viewBox="0 0 24 24"><rect x="7" y="5" width="3.6" height="14" rx="1.2"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.2"/></svg>',play:'<svg viewBox="0 0 24 24"><path d="M8 5.4L18.4 12 8 18.6Z"/></svg>',art:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',duar:'<svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16h14zM9 5h6v14H9V5zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',forest:'<svg viewBox="0 0 24 24"><path d="M12 2 5 13h4l-5 8h20l-5-8h4z"/><path d="M12 23v-4"/></svg>',instagram:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'},i=(m,g,v="")=>{const M=document.createElement("button");if(M.className="glass-btn",M.innerHTML=m,v){M.setAttribute("aria-label",v);const y=document.createElement("span");y.className="btn-tip",y.textContent=v,M.appendChild(y);let T;M.addEventListener("touchstart",()=>{y.classList.add("tip-visible"),clearTimeout(T),T=setTimeout(()=>y.classList.remove("tip-visible"),1400)},{passive:!0})}return M.onclick=y=>{y.stopPropagation(),g(),this.resetUIHideTimer()},M.addEventListener("touchstart",y=>y.stopPropagation()),M},r=i(n.home,()=>this.resetScene(!0),"Home"),o=i(n.random,()=>{if(this.doors.length===0||this.isTraveling)return;const m=this.doors[Math.floor(Math.random()*this.doors.length)];m.isPainting?this.focusPainting(m):m.isOpen||this.toggleDoor(m)},"Discover"),a=i(n.day,()=>{},"Day");a.classList.add("day-btn");const l=i(n.spiral,()=>{},"Time Warp · Hold to cycle");l.classList.add("spiral-btn");const c=i(n.night,()=>{},"Night");c.classList.add("night-btn");const h=i(n.pause,()=>{},"Pause motion · Hold to go wuuuuu");this.motionBtn=h,this.rotateBtn=h,h.style.color="#fff",this._motionIcons={pause:n.pause,play:n.play};const u=200,f=(m,g,v)=>{let M,y=0,T=!1;const w=x=>{x.stopPropagation(),M&&clearInterval(M),this.resetUIHideTimer(),y=performance.now(),T=!1,M=setInterval(()=>{const S=performance.now()-y;this.resetUIHideTimer(),S>u&&(T=!0,g(S))},50)},A=x=>{M&&(clearInterval(M),M=null),y&&performance.now()-y>u&&(T=!0),!T&&v&&x.type!=="pointerleave"?(v(),this.resetUIHideTimer()):T&&((m===l||m===a||m===c)&&(this.daySpeed=0),m===h&&(this.controls.autoRotateSpeed=-.8,this.daySpeed=hc))};m.addEventListener("pointerdown",w),m.addEventListener("pointerup",A),m.addEventListener("pointerleave",A),m.addEventListener("pointerenter",()=>this.resetUIHideTimer())};f(h,()=>{this.motionPaused&&this.setMotionPaused(!1),this.controls.autoRotateSpeed=Math.max(-5e3,Math.min(-.5,this.controls.autoRotateSpeed*1.05)),this.daySpeed<.02&&(this.daySpeed=.02),this.daySpeed=Math.min(.65,this.daySpeed*1.08)},()=>{this.setMotionPaused(!this.motionPaused)}),f(l,m=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.02&&(this.daySpeed=.02),this.daySpeed=Math.min(.65,this.daySpeed*1.08)},()=>{this.sunAngle=(this.sunAngle+Math.PI/12)%(Math.PI*2),this.daySpeed=0}),f(a,m=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.01&&(this.daySpeed=.01),this.daySpeed=Math.min(.2,this.daySpeed*1.1)},()=>{this.sunAngle=Math.PI/2,this.daySpeed=0}),f(c,m=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.01&&(this.daySpeed=.01),this.daySpeed=Math.min(.2,this.daySpeed*1.1)},()=>{this.sunAngle=3*Math.PI/2,this.daySpeed=0});const d=m=>({default:n.duar,portfolio:n.art,forest:n.forest})[Qr(m)],p=i(d(this.viewMode),async()=>{await this.switchView(Qr(this.viewMode))},ya(this.viewMode));this.dockModeBtn=p,this.updateDockModeBtn=()=>{const m=ya(this.viewMode);p.innerHTML=d(this.viewMode),p.setAttribute("aria-label",m);const g=document.createElement("span");g.className="btn-tip",g.textContent=m,p.appendChild(g)};const _=i(n.instagram,()=>{window.open("https://instagram.com/vaveism","_blank","noopener,noreferrer")},"@vaveism");this.instaBtn=_,_.style.display=this.viewMode==="portfolio"?"inline-flex":"none",t.append(r,h,o,a,l,c,p,_),e.appendChild(t),document.body.appendChild(e),this.uiVisible=!0,this.resetUIHideTimer()}updatePaintingLight(e){if(!this.doors.length)return;lp.copy(e.cel.sunPos).normalize(),cp.copy(e.cel.moonPos).normalize();const t=e.sH,n=e.sunAlt>.01?0:e.mH,i=$e.clamp(t*3,0,1),r=$e.clamp(n*3,0,1),o=.4+.16*t;for(const a of this.doors){if(!a.isPainting||!a.panelMaterial||($s.subVectors(this.camera.position,a.group.position),$s.y=0,$s.lengthSq()<1e-6))continue;$s.normalize();const l=Math.max(0,$s.dot(lp)),c=Math.max(0,$s.dot(cp));let h=o+.5*i*l+.14*r*c;a===this.activeDoor&&(h=$e.lerp(h,1,.85)),h=$e.clamp(h,.34,1),a._lit=a._lit===void 0?h:$e.lerp(a._lit,h,.12),a.panelMaterial.color.setScalar(a._lit)}}_maybeStartIntro(){this._introStarted||!this._doorsReady||!this._revealed||this.viewMode!=="portfolio"||this.activeDoor||(this._introStarted=!0,this._playIntroDescent())}_playIntroDescent(){const e=this._introOverview||this.getDefaultOverview(),t=this._priorMaxDistance??this.controls.maxDistance;Le.killTweensOf(this.camera.position),Le.killTweensOf(this.controls);const n=Le.timeline({onComplete:()=>{this.controls.maxDistance=t}});n.to(this.camera.position,{y:e.camPos.y,duration:dE,delay:1.6,ease:"sine.inOut"});const i=1.6;n.call(()=>{this.setMotionPaused(!1,{rotation:!1}),this.controls.autoRotate=!0},null,i),n.fromTo(this.controls,{autoRotateSpeed:0},{autoRotateSpeed:-.8,duration:pE,ease:"sine.inOut"},i)}setMotionPaused(e,{rotation:t=!0}={}){this.motionPaused=!!e,t&&(this.viewMode==="forest"?this.controls.autoRotate=!1:(this.controls.autoRotate=!this.motionPaused,this.motionPaused||(this.controls.autoRotateSpeed=-.8)));const n=this.motionBtn;if(n&&this._motionIcons){const i=(this.motionPaused?"Play motion":"Pause motion")+" · Hold to go wuuuuu";n.innerHTML=this.motionPaused?this._motionIcons.play:this._motionIcons.pause,n.setAttribute("aria-label",i),n.setAttribute("aria-pressed",String(this.motionPaused));const r=document.createElement("span");r.className="btn-tip",r.textContent=i,n.appendChild(r),n.style.color=this.motionPaused?"rgba(255,255,255,0.35)":"#fff"}this.resetUIHideTimer()}resetUIHideTimer(){this.uiHideTimeout&&clearTimeout(this.uiHideTimeout),this.uiHideTimeout=setTimeout(()=>this.setUIVisibility(!1),5e3)}setUIVisibility(e){this.uiContainer&&(e?(this.uiContainer.classList.remove("ui-hidden"),this.uiVisible=!0,this.resetUIHideTimer()):(this.uiContainer.classList.add("ui-hidden"),this.uiVisible=!1),this.viewToggle?.classList.toggle("ui-hidden",!e))}createViewToggle(){const e=document.createElement("button");e.id="view-toggle",e.className="ui-hidden",this.viewToggle=e,(()=>{const n=ya(this.viewMode);e.textContent=n,e.setAttribute("aria-label",`Switch to ${n.toLowerCase()}`)})(),e.addEventListener("click",async n=>{n.stopPropagation(),!this._switching&&(e.disabled=!0,await this.switchView(Qr(this.viewMode)),e.disabled=!1,this.resetUIHideTimer())}),e.addEventListener("pointerdown",n=>n.stopPropagation()),document.body.appendChild(e)}handlePointerDown(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);if(t.length>0){const n=t.find(i=>{let r=i.object;for(;r;){if(this.doors.some(o=>o.group===r))return!0;r=r.parent}return!1});if(n){let i=n.object;for(;i;){const r=this.doors.find(o=>o.group===i);if(r){this.draggedDoor=r,this.controls.enabled=!1;return}i=i.parent}}}}handleDoorDrag(e){if(!this.draggedDoor)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=new P;this.raycaster.ray.intersectPlane(this.dragPlane,t),t&&this.draggedDoor.group.position.set(t.x,t.y,t.z)}onClick(e){if(!this.isTraveling)try{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);console.log("Click hits:",t.length,t.map(i=>i.object.type));let n=!1;if(t.length>0){const i=o=>{if(o===this.rock)return!0;let a=o;for(;a;){if(a===this.sculpture)return!0;a=a.parent}return!1},r=t.find(o=>{if(i(o.object))return!0;let a=o.object;for(;a;){if(this.doors.some(l=>l.group===a))return!0;a=a.parent}return!1});if(r){if(n=!0,i(r.object)){this.setMotionPaused(!0),this._switching||this.switchView(Qr(this.viewMode));return}let o=r.object,a=null;for(;o&&(a=this.doors.find(l=>l.group===o),!a);)o=o.parent;if(a&&!a.isTree)if(a.isPainting)if(this.activeDoor===a&&!this.isTraveling){const l=document.getElementById("painting-popup");l&&l.classList.toggle("open")}else this.focusPainting(a);else a.isOpen?this._refuseEntry():this.toggleDoor(a)}}if(!n){const i=document.getElementById("painting-popup");i&&i.classList.contains("open")?i.classList.remove("open"):this.setUIVisibility(!this.uiVisible)}}catch(t){console.error("Error in onClick:",t)}}travelThroughPortal(e){if(this.isTraveling)return;this.isTraveling=!0,this.activeDoor=null,this._hideReticle();const t=e.data.destinationUrl;if(console.log("travelThroughPortal to:",t),!t){this.isTraveling=!1;return}this.controls.enabled=!1,this.controls.autoRotate=!1,this.uiContainer&&(this.setUIVisibility(!1),this.uiContainer.style.display="none");const n=new P;e.portalHitbox.getWorldPosition(n);const i=new P().subVectors(n,this.camera.position).normalize(),r=n.clone().add(i.multiplyScalar(3)),o=Le.timeline();o.to(this.camera.position,{x:r.x,y:n.y,z:r.z,duration:1.8,ease:"power3.in"},0),o.to(this.controls.target,{x:n.x+i.x*10,y:n.y,z:n.z+i.z*10,duration:1.5,ease:"power2.inOut"},0),o.to(this.camera,{fov:130,duration:1.8,ease:"power3.in",onUpdate:()=>this.camera.updateProjectionMatrix()},0);const a=document.getElementById("controls-legend");a&&o.to(a,{opacity:0,y:-10,duration:.5,ease:"power2.out"},0);const l=document.createElement("div");l.style.cssText=`
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #000;
            opacity: 0;
            z-index: 99999;
            pointer-events: none;
        `,document.body.appendChild(l),o.to(l,{opacity:1,duration:1,ease:"power2.inOut"},.8),o.call(()=>{t.startsWith("mailto:")?(window.location.href=t,setTimeout(()=>{l.style.opacity="0",setTimeout(()=>{document.body.removeChild(l),this.isTraveling=!1,this.controls.enabled=!0,this.uiContainer&&(this.uiContainer.style.display="flex",this.setUIVisibility(!0)),this.resetScene()},500)},2e3)):window.location.href=t})}createPortalMaterial(e){return new kt({uniforms:{uTime:{value:0},uOpacity:{value:0},uHover:{value:0},uColor:{value:new K(e||16777215)}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:Ss,side:vt})}_rebuildHoverTargets(){this._hoverTargets=[],this._hoverOwner=new Map;for(const t of this.doors){const n=t.portalHitbox;n&&(this._hoverTargets.push(n),this._hoverOwner.set(n,t))}const e=this.viewMode==="portfolio"?this.sculpture:this.rock;e&&e.traverse(t=>{t.isMesh&&(this._hoverTargets.push(t),this._hoverOwner.set(t,null))})}checkHover(){if(!this.raycaster||!this.scene||!this.camera)return;this._hoverTargets||this._rebuildHoverTargets(),this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this._hoverTargets,!1);let t=!1,n=null;if(e.length>0){const r=this._hoverOwner.get(e[0].object);t=!0,n=r||null}const i=t?"pointer":"crosshair";this._cursor!==i&&(this._cursor=i,document.body.style.cursor=i),this.hoveredDoor=n,this.doors.forEach(r=>{if(r.portalMaterial){const o=r===n&&r.isOpen?1:0;Le.to(r.portalMaterial.uniforms.uHover,{value:o,duration:.4,ease:"power2.out"})}})}toggleDoor(e){if(!e.isAnimating){if(this.dismissIntro(),e.isAnimating=!0,e.isOpen=!e.isOpen,e.isOpen){const t=document.querySelector("#reticle .reticle-title");t&&(t.textContent=e.name||""),Le.fromTo(this.bloomPass,{strength:2},{strength:1.2,duration:1.6,ease:"power2.out",overwrite:!0});const n=new P;e.group.getWorldPosition(n),n.y=1.78;const i=new P().subVectors(this.camera.position,n).setY(0).normalize();i.lengthSq()<1e-4&&i.set(0,0,1);const r=this.camera.fov/2*(Math.PI/180),a=.8/(window.innerWidth/window.innerHeight*Math.tan(r)),l=Math.max(.3,Math.min(6,a)),c=n.clone().add(i.multiplyScalar(l));c.y=1.78,this.activeDoor=e,this.flyTo(c,n,1.9,()=>{this.controls.target.copy(n),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.25,this.activeDoor===e&&this._showReticle()}),this.ringMat&&Le.to(this.ringMat,{opacity:0,duration:1.5,ease:"power2.inOut"}),e.portalMaterial&&Le.to(e.portalMaterial.uniforms.uOpacity,{value:.75,duration:1.5,delay:.5,ease:"power2.out"})}else{this.activeDoor=null,this._hideReticle(),this.setUIVisibility(!0);const t=new P;e.group.getWorldPosition(t),t.y=1.78;const n=new P().subVectors(this.camera.position,t).setY(0).normalize();n.lengthSq()<1e-4&&n.set(0,0,1);const i=t.clone().addScaledVector(n,8);i.y=2.8,Le.to(this.camera.position,{x:i.x,y:i.y,z:i.z,duration:1.8,ease:"power3.inOut"}),Le.to(this.controls.target,{x:t.x,y:1.78,z:t.z,duration:1.8,ease:"power3.inOut"}),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.6,Le.to(this.camera,{fov:this._fovForAspect(this.camera.aspect),duration:1.8,ease:"power3.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()}),this.ringMat&&Le.to(this.ringMat,{opacity:.9,duration:2,delay:.5,ease:"power2.inOut"}),e.portalMaterial&&Le.to(e.portalMaterial.uniforms.uOpacity,{value:0,duration:1,ease:"power2.inOut"})}Le.to(e.hinge.rotation,{y:e.isOpen?-Math.PI/2:0,duration:2,delay:e.isOpen?.5:0,ease:"power2.inOut",onComplete:()=>{e.isAnimating=!1}})}}flyTo(e,t,n=1.9,i=null){this.controls.autoRotate=!1,this.controls.enableDamping=!1,Le.killTweensOf(this.camera.position),Le.killTweensOf(this.controls.target),Le.to(this.camera.position,{x:e.x,y:e.y,z:e.z,duration:n,ease:"power3.inOut",overwrite:!0}),Le.to(this.controls.target,{x:t.x,y:t.y,z:t.z,duration:n,ease:"power3.inOut",overwrite:!0,onComplete:()=>{this.controls.target.copy(t),this.controls.enableDamping=!0,i&&i()}})}getDefaultOverview(){const e=window.innerWidth/Math.max(1,window.innerHeight),t=$e.clamp((4/3-e)/(4/3-.46),0,1),n=1.6,i=3,r=1,o=new P(0,n,0);let a=new P(0,i,28.5*r);if(this.viewMode==="portfolio"&&this.doors.length>0){const l=this.doors.find(c=>c.data?.id==="Flowers Unnamed")||this.doors.find(c=>c.isPainting);if(l){const c=new P;l.group.getWorldPosition(c);const h=Math.atan2(c.x,c.z);let u=Math.max(28,(l.radius||15)+13)*r,f=i,d=n;if(t>.01){const _=Qd(l.width,l.height,this.camera)*1.25,m=l.centreY||2;u=$e.lerp(u,(l.radius||15)+_,t),d=$e.lerp(n,m,t),f=$e.lerp(i,Math.min(1.6,m*.55),t)}o.set(0,d,0),a=new P(Math.sin(h)*u,f,Math.cos(h)*u)}}return{camPos:a,target:o}}resetScene(e=!1){const t=!e&&this.viewMode==="portfolio"&&this.activeDoor?.isPainting?this.activeDoor:null;this.closeAllDoors(),this.activeDoor=null,this.daySpeed=hc,this._hideReticle(),this.setUIVisibility(!0);let n=new P(0,1.6,0),i;if(t){const r=new P;t.group.getWorldPosition(r);const o=Math.atan2(r.x,r.z),a=t.radius||15,l=Math.max(28,a+13),c=2.8+Math.min(a*.04,3.2);i=new P(Math.sin(o)*l,c,Math.cos(o)*l)}else{const r=this.getDefaultOverview();i=r.camPos,n=r.target}this.flyTo(i,n,1.8,()=>{this.viewMode!=="forest"?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.6):this.controls.autoRotate=!1}),this.ringMat&&Le.to(this.ringMat,{opacity:.9,duration:4,ease:"power2.inOut"}),Le.to(this.camera,{fov:this._fovForAspect(this.camera.aspect),duration:1.8,ease:"power2.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()})}closeAllDoors(){this.doors.forEach(e=>{e.isOpen&&(e.isOpen=!1,e.isAnimating=!0,Le.to(e.hinge.rotation,{y:0,duration:1.5,ease:"power2.inOut",onComplete:()=>{e.isAnimating=!1}}))})}setupLighting(){const e=new fv(16774634,.05);this.scene.add(e),this.hemiLight=new av(16774104,2235414,.28),this.scene.add(this.hemiLight);const t=this.isMobile?1024:2048;this.sunDist=1600,this.sunLight=new rh(16773832,2.5),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=700;const n=75;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-3e-4,this.sunLight.shadow.normalBias=.025,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const i=this.generateSunTexture();this.sunMesh=new Ue(new pr(44,32,32),new Ft({map:i,emissiveMap:i,emissive:16770167,emissiveIntensity:2.2,roughness:.85,fog:!1,transparent:!0})),this.sunMesh.renderOrder=-180,this.scene.add(this.sunMesh),this.moonLight=new rh(13162728,1.4),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.set(t,t),this.moonLight.shadow.camera.near=1,this.moonLight.shadow.camera.far=700,this.moonLight.shadow.camera.left=-n,this.moonLight.shadow.camera.right=n,this.moonLight.shadow.camera.top=n,this.moonLight.shadow.camera.bottom=-n,this.moonLight.shadow.bias=-3e-4,this.moonLight.shadow.normalBias=.025,this.moonLight.shadow.radius=2,this.scene.add(this.moonLight),this.scene.add(this.moonLight.target);const r=this.generateMoonTexture();this.moonMesh=new Ue(new pr(30,32,32),new Ft({map:r,emissiveMap:r,emissive:14739698,emissiveIntensity:1.1,roughness:.92,metalness:0,fog:!1,transparent:!0})),this.moonMesh.renderOrder=-180,this.scene.add(this.moonMesh)}generateSunTexture(){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#fffbeb"),n.addColorStop(.4,"#ffe67c"),n.addColorStop(1,"#ffb833"),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let i=0;i<300;i++)t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.15})`,t.beginPath(),t.arc(Math.random()*1024,Math.random()*512,Math.random()*25,0,Math.PI*2),t.fill();return new Ki(e)}generateMoonTexture(){const e=document.createElement("canvas"),t=1024,n=512;e.width=t,e.height=n;const i=e.getContext("2d"),r=i.createLinearGradient(0,0,0,n);r.addColorStop(0,"#e8edf3"),r.addColorStop(.5,"#dbe2ea"),r.addColorStop(1,"#caced4"),i.fillStyle=r,i.fillRect(0,0,t,n);const o=i.getImageData(0,0,t,n),a=o.data;let l=12345;const c=()=>(l=l*16807%2147483647,(l-1)/2147483646);for(let p=0;p<n;p++)for(let _=0;_<t;_++){const m=(p*t+_)*4,g=(c()-.5)*18;a[m]=Math.max(0,Math.min(255,a[m]+g)),a[m+1]=Math.max(0,Math.min(255,a[m+1]+g)),a[m+2]=Math.max(0,Math.min(255,a[m+2]+g+2))}i.putImageData(o,0,0),[{x:.36*t,y:.32*n,rx:110,ry:75,col:"rgba(80, 92, 106, 0.58)"},{x:.44*t,y:.3*n,rx:85,ry:65,col:"rgba(74, 86, 98, 0.62)"},{x:.58*t,y:.35*n,rx:70,ry:58,col:"rgba(76, 88, 102, 0.60)"},{x:.62*t,y:.46*n,rx:80,ry:60,col:"rgba(72, 84, 96, 0.62)"},{x:.76*t,y:.38*n,rx:42,ry:34,col:"rgba(68, 78, 90, 0.65)"},{x:.68*t,y:.56*n,rx:65,ry:50,col:"rgba(78, 88, 100, 0.55)"},{x:.59*t,y:.62*n,rx:45,ry:36,col:"rgba(82, 92, 104, 0.52)"},{x:.42*t,y:.62*n,rx:70,ry:52,col:"rgba(80, 90, 102, 0.56)"},{x:.32*t,y:.6*n,rx:45,ry:38,col:"rgba(78, 88, 100, 0.54)"},{x:.48*t,y:.18*n,rx:140,ry:24,col:"rgba(84, 95, 108, 0.50)"}].forEach(p=>{i.save(),i.filter="blur(12px)",i.fillStyle=p.col,i.beginPath(),i.ellipse(p.x,p.y,p.rx,p.ry,0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(64, 74, 86, 0.42)",i.beginPath(),i.ellipse(p.x+(c()-.5)*20,p.y+(c()-.5)*15,p.rx*.65,p.ry*.65,.2,0,Math.PI*2),i.fill(),i.restore()});const u=.47*t,f=.78*n;i.save(),i.strokeStyle="rgba(255, 255, 255, 0.28)",i.lineWidth=1.6,i.filter="blur(2px)";for(let p=0;p<24;p++){const _=p/24*Math.PI*2+c()*.15,m=90+c()*180;i.beginPath(),i.moveTo(u,f),i.lineTo(u+Math.cos(_)*m,f+Math.sin(_)*m),i.stroke()}i.fillStyle="rgba(255, 255, 255, 0.85)",i.filter="blur(3px)",i.beginPath(),i.arc(u,f,14,0,Math.PI*2),i.fill(),i.restore(),[{x:.41*t,y:.41*n,r:10,rays:14,len:75},{x:.32*t,y:.43*n,r:6,rays:10,len:45},{x:.28*t,y:.33*n,r:5,rays:8,len:35}].forEach(p=>{i.save(),i.strokeStyle="rgba(255, 255, 255, 0.22)",i.lineWidth=1.2,i.filter="blur(1.5px)";for(let _=0;_<p.rays;_++){const m=_/p.rays*Math.PI*2+c()*.2;i.beginPath(),i.moveTo(p.x,p.y),i.lineTo(p.x+Math.cos(m)*p.len,p.y+Math.sin(m)*p.len),i.stroke()}i.fillStyle="rgba(255, 255, 255, 0.90)",i.beginPath(),i.arc(p.x,p.y,p.r,0,Math.PI*2),i.fill(),i.restore()});for(let p=0;p<180;p++){const _=c()*t,m=c()*n,g=2+c()*6;i.save(),i.fillStyle="rgba(70, 80, 92, 0.35)",i.beginPath(),i.arc(_,m,g,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255, 255, 255, 0.45)",i.lineWidth=.8,i.beginPath(),i.arc(_-.5,m-.5,g,-Math.PI*.75,Math.PI*.25),i.stroke(),i.restore()}return new Ki(e)}setupEnvironment(){const e=new eu(.001,150,96,64);this.groundMat=new Ft({color:6841438,roughness:1,metalness:0,envMapIntensity:0,transparent:!0,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.groundMat.onBeforeCompile=n=>{n.uniforms.uForestWave=Hi.uForestWave,n.uniforms.uForestActive=Hi.uForestActive,n.vertexShader=`
                uniform float uForestWave;
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`
                #include <begin_vertex>
                // Radial ground emergence ripple travelling outward across the disc
                float rDist = length(position.xy);
                float waveFront = uForestWave * 145.0;
                float distToWave = rDist - waveFront;
                float ripple = sin(clamp(distToWave * 0.22, -3.14, 3.14)) * exp(-distToWave * distToWave * 0.006) * 0.85 * uForestActive * (1.0 - uForestWave * 0.45);

                // Uneven organic forest terrain topography (matches getForestElevation)
                float worldZ = -position.y;
                float clearingFactor = smoothstep(1.5, 12.0, rDist);
                float hill1 = sin(position.x * 0.045 + 0.5) * cos(worldZ * 0.040 + 0.8) * 0.65;
                float hill2 = sin(position.x * 0.095 - worldZ * 0.08) * 0.35;
                float hill3 = cos(position.x * 0.18 + worldZ * 0.15) * 0.18;
                float micro = sin(position.x * 0.38) * cos(worldZ * 0.35) * 0.08;
                float terrainHeight = (hill1 + hill2 + hill3 + micro) * clearingFactor * uForestActive;

                transformed.z += ripple + terrainHeight;
                `),n.vertexShader=n.vertexShader.replace("#include <worldpos_vertex>",`
                #include <worldpos_vertex>
                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                `),n.fragmentShader=`
                uniform float uForestWave;
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`
                #include <dithering_fragment>
                // Natural planetary horizon illusion: solid ground for all paintings (r <= 112m), softly fades at perimeter
                float r = length(vGroundWorldPos.xz);
                float edgeFade = 1.0 - smoothstep(112.0, 150.0, r);
                gl_FragColor.a *= edgeFade;

                // Uneven muddy patches and damp earth pooling in the forest
                if (uForestActive > 0.01) {
                    vec2 mPos = vGroundWorldPos.xz * 0.08;
                    float mudPool = sin(mPos.x * 2.1 + sin(mPos.y * 1.8)) * cos(mPos.y * 1.9 + sin(mPos.x * 2.3));
                    float microMud = sin(vGroundWorldPos.x * 0.42) * cos(vGroundWorldPos.z * 0.42) * 0.5;
                    float mudVal = smoothstep(0.12, 0.68, mudPool * 0.75 + microMud * 0.25);
                    
                    // Dark damp muddy silt and deep wet earth
                    vec3 drySoil = vec3(0.26, 0.22, 0.16);
                    vec3 wetMud = vec3(0.08, 0.06, 0.04);
                    vec3 deepSilt = vec3(0.035, 0.024, 0.016);

                    vec3 mudColor = mix(drySoil, wetMud, mudVal);
                    mudColor = mix(mudColor, deepSilt, pow(mudVal, 2.2));

                    // Modulate floor with damp muddy patches
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * mudColor * 2.8, mudVal * 0.72 * uForestActive);

                    // Wet muddy sheen under light
                    float wetGleam = pow(max(0.0, mudVal), 3.0) * 0.18 * uForestActive;
                    gl_FragColor.rgb += vec3(wetGleam * 0.65, wetGleam * 0.80, wetGleam);
                }

                // Bioluminescent life ring along the active ground wave
                if (uForestActive > 0.01) {
                    float waveFront = uForestWave * 145.0;
                    float distToWave = abs(r - waveFront);
                    float edgeGlow = exp(-distToWave * distToWave * 0.015) * (1.0 - uForestWave * 0.7);
                    gl_FragColor.rgb += vec3(0.22, 0.42, 0.16) * edgeGlow * uForestActive;
                }

                if (gl_FragColor.a <= 0.002) discard;
                `)};const t=new Ue(e,this.groundMat);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t),this.groundMesh=t,this.createSacredGeometry(),this.createCentralRock(),this.skySystem=k1(1800,this.isMobile),this.scene.add(this.skySystem.skyRoot)}_toGurmukhi(e){const t=["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"];return String(e).replace(/[0-9]/g,n=>t[+n])}_randomDoorName(){return"duar-"+this._toGurmukhi(1+Math.floor(Math.random()*9))}_startClock(){const e=document.getElementById("clock"),t=document.getElementById("clock-time"),n=document.getElementById("clock-tz");if(n)try{n.textContent=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}if(e&&t){const a=()=>{e.classList.add("tz-visible"),clearTimeout(this._tzHideTimeout),this._tzHideTimeout=setTimeout(()=>e.classList.remove("tz-visible"),5e3)};t.addEventListener("mouseenter",a),t.addEventListener("touchstart",l=>{l.stopPropagation(),a()},{passive:!0}),t.addEventListener("click",l=>l.stopPropagation())}if(!t)return;const i=a=>String(a).padStart(2,"0"),r=a=>String(a).padStart(3,"0"),o=()=>{const a=new Date,l=`${i(a.getHours())} : ${i(a.getMinutes())} : ${i(a.getSeconds())} : ${r(a.getMilliseconds())}`;t.textContent=this._toGurmukhi(l)};o(),this._clockInterval=setInterval(o,40)}clearDoors(){this.activeDoor=null,this.hoveredDoor=null,this._hideReticle(),this.doors.forEach(e=>{e.labelEl?.remove(),i1(e),e.group.traverse(t=>{if(!t.isMesh)return;const n=t.geometry===Yw||t.geometry===vg||Cg.has(t.geometry);t.geometry&&!n&&t.geometry.dispose(),t.material&&t.material!==Cu&&(t.material.map&&!e.isPainting&&t.material.map.dispose(),t.material.dispose())}),this.scene.remove(e.group)}),this.doors=[],this._hoverTargets=null,this._hoverOwner=null,s1()}_showCenterpiece(e){e&&(Le.killTweensOf(e.scale),e.visible=!0,e===this.roseCenterpiece?(e.scale.set(.001,.001,.001),Le.to(e.scale,{y:1,duration:2.2,ease:"power2.out",delay:.1}),Le.to(e.scale,{x:1,z:1,duration:1.9,ease:"back.out(1.2)",delay:.4})):(e.scale.setScalar(.001),Le.to(e.scale,{x:1,y:1,z:1,duration:.8,ease:"back.out(1.3)",delay:.2})))}_hideCenterpiece(e){!e||!e.visible||(Le.killTweensOf(e.scale),Le.to(e.scale,{x:.001,y:.001,z:.001,duration:.4,ease:"power2.in",onComplete:()=>{e.visible=!1}}))}async switchView(e){if(this._switching||e===this.viewMode)return;if(this._switching=!0,this.viewMode=e,this.instaBtn&&(this.instaBtn.style.display=e==="portfolio"?"inline-flex":"none"),this.updateDockModeBtn&&this.updateDockModeBtn(),this.viewToggle){const i=ya(e);this.viewToggle.textContent=i,this.viewToggle.setAttribute("aria-label",`Switch to ${i.toLowerCase()}`)}if(e==="portfolio"?(this.updateRingGeometries(!0),this.doors.forEach(i=>{i.isPainting&&$d(i)}),this.doors.filter(i=>i.isPainting).sort((i,r)=>this.camera.position.distanceTo(i.group.position)-this.camera.position.distanceTo(r.group.position)).slice(0,6).forEach(i=>_a(i,Ms.MID)),Le.to(this.bloomPass,{threshold:.92,strength:.2,duration:.6})):e==="forest"?(this.controls.autoRotate=!1,this.updateRingGeometries(!1),Le.to(this.bloomPass,{threshold:.88,strength:.18,duration:.6})):(this.motionPaused||(this.controls.autoRotate=!0),this.updateRingGeometries(!1),Le.to(this.bloomPass,{threshold:this._bloomDefaults.threshold,strength:this._bloomDefaults.strength,duration:.6})),this.rings&&this.rings.forEach(i=>{i.mesh.visible=e!=="forest"}),this.groundMat&&(e==="forest"?(this.groundMat.map=w1(),this.groundMat.needsUpdate=!0):Hi.uForestActive.value>0?Le.to(Hi.uForestActive,{value:0,duration:.5,onComplete:()=>{Hi.uForestWave.value=0,this.groundMat&&(this.groundMat.map=null,this.groundMat.needsUpdate=!0)}}):(this.groundMat.map=null,this.groundMat.needsUpdate=!0)),this.scene.fog){const i=e==="forest"?.0075:.002;Le.to(this.scene.fog,{density:i,duration:.8})}const t={default:this.rock,portfolio:this.sculpture,forest:this.roseCenterpiece}[e];[this.rock,this.sculpture,this.roseCenterpiece].forEach(i=>{i===t?this._showCenterpiece(i):this._hideCenterpiece(i)}),this.resetScene();const n=[...this.doors];await new Promise(i=>{if(!n.length)return i();const r=Le.timeline({onComplete:i});n.slice().sort((o,a)=>o.group.position.lengthSq()-a.group.position.lengthSq()).forEach((o,a)=>{r.to(o.group.scale,{x:.001,y:.001,z:.001,duration:.5,ease:"power2.in"},a*.02)})}),this.clearDoors(),e==="portfolio"?await this.buildPortfolioDoors():e==="forest"?this.buildForest():this.setupDoors(),e==="forest"?(Hi.uForestActive.value=1,Hi.uForestWave.value=0,Le.to(Hi.uForestWave,{value:1,duration:3.6,ease:"power1.out"}),qn.uGrassGrowth.value=0,Le.to(qn.uGrassGrowth,{value:1,duration:3.6,ease:"power1.out"}),this.doors.slice().sort((i,r)=>i.group.position.lengthSq()-r.group.position.lengthSq()).forEach(i=>{if(i.group.name==="ForestGrass"){i.group.scale.set(1,1,1);return}const o=.25+Math.sqrt(i.group.position.lengthSq())/120*2.2+Math.sin(i.group.position.x*2.1)*.12,a=i.group.rotation.y;i.group.scale.set(.001,.001,.001),i.group.rotation.y=a-.22,Le.to(i.group.scale,{y:1,duration:2.4,ease:"power2.out",delay:o}),Le.to(i.group.scale,{x:1,z:1,duration:2.1,ease:"back.out(1.22)",delay:o+.35}),Le.to(i.group.rotation,{y:a,duration:2.5,ease:"power2.out",delay:o})})):this.doors.slice().sort((i,r)=>i.group.position.lengthSq()-r.group.position.lengthSq()).forEach((i,r)=>{i.group.scale.setScalar(.001),Le.to(i.group.scale,{x:1,y:1,z:1,duration:.7,ease:"back.out(1.4)",delay:r*.035})}),this._switching=!1}async buildPortfolioDoors(){const e=await Ww();if(!e.paintings.length){console.warn("No paintings in manifest — portfolio view is empty.");return}l1(a1(e.paintings)).forEach(({painting:n,ring:i,radius:r,x:o,z:a,width:l})=>{const c=new Bt;c.position.set(o,0,a),this.scene.add(c);const{panel:h,panelMaterial:u,height:f,centreY:d}=Kw(c,n),p={group:c,data:n,panel:h,panelMaterial:u,width:l,height:f,centreY:d,ring:i,radius:r,isOpen:!1,isPainting:!0,portalHitbox:h};if(p.name=n.title||"",p.name){const _=document.createElement("div");_.className="door-label",_.textContent=p.name,document.body.appendChild(_),p.labelEl=_}this.doors.push(p)}),this.doors.forEach(n=>$d(n)),this.doors.slice().sort((n,i)=>this.camera.position.distanceTo(n.group.position)-this.camera.position.distanceTo(i.group.position)).slice(0,6).forEach(n=>_a(n,Ms.MID)),this._hoverTargets=null,!this.activeDoor&&this.viewMode==="portfolio"&&(this._introOverview={camPos:new P(0,3,28.5),target:new P(0,1.6,0)},this._priorMaxDistance=this.controls.maxDistance,this.controls.maxDistance=Math.max(this._priorMaxDistance,_p+60),this.camera.position.set(this._introOverview.camPos.x,_p,this._introOverview.camPos.z),this.controls.target.copy(this._introOverview.target),this.camera.lookAt(this._introOverview.target),this._doorsReady=!0,this._maybeStartIntro())}buildForest(){D1().forEach(({species:n,x:i,z:r,angle:o,seed:a,scale:l})=>{const c=E1(n,{seed:a,scale:l}),h=Ch(i,r);c.position.set(i,h,r),c.rotation.y=o,this.scene.add(c),this.doors.push({group:c,isTree:!0,isOpen:!1,swayGroup:c.userData.swayGroup,swayAmplitude:c.userData.swayAmplitude,swayFreqMult:c.userData.swayFreqMult,swayPhase:Math.sin(a*12.9898)*Math.PI})});const{grass:e,shrubs:t}=R1();this.scene.add(e),this.doors.push({group:e,isTree:!0,isOpen:!1}),t.forEach(n=>{const i=Ch(n.position.x,n.position.z);n.position.y=i,this.scene.add(n),this.doors.push({group:n,isTree:!0,isOpen:!1,swayGroup:n.userData.swayGroup,swayAmplitude:n.userData.swayAmplitude,swayFreqMult:n.userData.swayFreqMult,swayPhase:Math.sin(n.userData.seed*12.9898)*Math.PI})}),this._hoverTargets=null}focusPainting(e){if(this.isTraveling||this._switching)return;this.dismissIntro(),_a(e,Ms.FULL,{urgent:!0});const t=new P;e.panel.getWorldPosition(t);const n=new P().subVectors(this.camera.position,t).setY(0).normalize();n.lengthSq()<1e-4&&n.set(0,0,1);const i=Qd(e.width,e.height,this.camera),r=t.clone().addScaledVector(n,i);r.y=t.y,this.activeDoor=e,this.flyTo(r,t,1.6,()=>{this.controls.target.copy(t),this.controls.autoRotate=!1,this.activeDoor===e&&this._showReticle()})}setupDoors(){const e=new cu(this.loadingManager),t=5,n=15,i=8;for(let r=0;r<t;r++){const o=n+r*i;ds.doors.forEach((a,l)=>{const c=l*(Math.PI*2)/ds.doors.length,h=r%2===1?Math.PI/ds.doors.length:0,u=c+h,f=Math.sin(u)*o,d=Math.cos(u)*o,p=new Bt;p.position.set(f,0,d),this.scene.add(p);const _=new Bt;_.position.set(-.75,0,0),p.add(_);const m={group:p,data:a,hinge:_,isOpen:!1};this.createDoorFrame(p,a),e.load(Xn(a.modelPath),v=>{const M=v.scene,y=M.getObjectByName("Door")||M;M.traverse(T=>{T.isMesh&&(T.material=new Ft({color:6710886,roughness:.4,metalness:.2}),T.castShadow=!0,T.receiveShadow=!0)}),y.position.set(.75,-.02,0),_.add(y),m.panel=y},null,()=>{const v=new Ue(new Yn(1.5,3.6,.2),new Ft({color:1118481,roughness:.4,metalness:.2}));v.position.set(.75,1.78,0),v.castShadow=!0,v.receiveShadow=!0,_.add(v),m.panel=v}),m.portalHitbox=p.userData.portalHitbox,m.portalMaterial=p.userData.portalMaterial;const g=document.createElement("div");g.className="door-label",m.name=this._randomDoorName(),g.textContent=m.name,document.body.appendChild(g),m.labelEl=g,this.doors.push(m)})}this._hoverTargets=null}createDoorFrame(e,t){const n=new Ft({color:2236962,roughness:.5,metalness:.5}),i=new Yn(.1,3.6,.1),r=new Ue(i,n);r.position.set(-.8,1.78,0),r.castShadow=!0,r.name="Frame",e.add(r);const o=new Ue(i,n);o.position.set(.8,1.78,0),o.castShadow=!0,o.name="Frame",e.add(o);const a=new Ue(new Yn(1.7,.1,.1),n);a.position.set(0,3.58,0),a.castShadow=!0,a.name="Frame",e.add(a);const l=new Ue(new Yn(1.7,.12,.1),n);l.position.set(0,.04,0),l.castShadow=!0,l.receiveShadow=!0,l.name="Frame",e.add(l);const c=new Bn(1.5,3.5),h=new cn({color:16711680,transparent:!0,opacity:0,visible:!0,side:vt}),u=new Ue(c,h);u.position.set(0,1.75,.01),u.name="PortalHitbox",e.add(u),e.userData.portalHitbox=u;const f=this.createPortalMaterial(t.color),d=new Ue(new Bn(1.5,3.5),f);d.position.set(0,1.75,0),d.name="PortalSurface",d.renderOrder=2,e.add(d),e.userData.portalMaterial=f}createWavyRingGeometry(e,t=60,n=.35,i=.25,r=720){const o=new At,a=[],l=[],c=[],h=i/2;for(let u=0;u<=r;u++){const f=u/r*Math.PI*2,d=Math.sin(f*t)*n,p=e+d,_=p-h,m=p+h,g=Math.cos(f),v=Math.sin(f);a.push(g*_,v*_,0),l.push(u/r,0),a.push(g*m,v*m,0),l.push(u/r,1)}for(let u=0;u<r;u++){const f=u*2,d=u*2+1,p=(u+1)*2,_=(u+1)*2+1;c.push(f,p,d),c.push(d,p,_)}return o.setAttribute("position",new lt(a,3)),o.setAttribute("uv",new lt(l,2)),o.setIndex(c),o.computeVertexNormals(),o}writeRingWave(e,t){const n=e.mesh.geometry.getAttribute("position"),i=n.array,r=e.segments,o=yp*t,a=(Ma+(Mp-Ma)*t)/2;let l=0;for(let c=0;c<=r;c++){const h=c/r*Math.PI*2,u=e.radius+Math.sin(h*xp)*o,f=Math.cos(h),d=Math.sin(h),p=u-a,_=u+a;i[l++]=f*p,i[l++]=d*p,i[l++]=0,i[l++]=f*_,i[l++]=d*_,i[l++]=0}n.needsUpdate=!0}updateRingGeometries(e){if(!this.rings)return;const t=e?1:0;this._ringWaveTweens&&this._ringWaveTweens.forEach(n=>n.kill()),this._ringWaveTweens=this.rings.map((n,i)=>Le.to(n,{waveT:t,duration:1.1,delay:i*.055,ease:"power2.inOut",onUpdate:()=>this.writeRingWave(n,n.waveT)}))}createSacredGeometry(){this.ringMat=new Ft({color:16764995,metalness:.88,roughness:.18,side:vt,depthWrite:!0,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.rings=[];const e=15,t=8,n=this.viewMode==="portfolio";for(let i=0;i<10;i++){const r=e+i*t,o=n?1:0,a=this.createWavyRingGeometry(r,xp,yp*o,Ma+(Mp-Ma)*o,vp),l=new Ue(a,this.ringMat);l.rotation.x=-Math.PI/2,l.position.y=.002,l.receiveShadow=!0;const c=(i%2===0?1:-1)*(5e-4+i*8e-5);this.scene.add(l),this.rings.push({mesh:l,speed:c,radius:r,segments:vp,waveT:o})}}createCentralRock(){const e=new fr(1e-4,1.5,3,128,1,!1);e.translate(0,1.5,0);const t=new Ft({color:16777215,metalness:.95,roughness:.1,envMapIntensity:1});this.rock=new Ue(e,t),this.rock.castShadow=!0,this.rock.receiveShadow=!0,this.rock.position.y=0,this.rock.visible=!1;const n=new Bn(3.6,3.6),i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(0, 0, 0, 0.94)"),o.addColorStop(.35,"rgba(0, 0, 0, 0.70)"),o.addColorStop(.7,"rgba(0, 0, 0, 0.25)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),r.fillStyle=o,r.fillRect(0,0,128,128);const a=new cn({map:new Ki(i),transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new Ue(n,a);l.rotation.x=-Math.PI/2,l.position.y=.003,l.renderOrder=1,this.rock.add(l),this.scene.add(this.rock),this.sculpture=L1(this.loadingManager),this.sculpture.visible=!1,this.scene.add(this.sculpture),this.roseCenterpiece=P1(),this.roseCenterpiece.visible=!1,this.scene.add(this.roseCenterpiece)}setupDustMotes(){const t=new At,n=new Float32Array(300);for(let i=0;i<100;i++)n[i*3]=(Math.random()-.5)*120,n[i*3+1]=Math.random()*10,n[i*3+2]=(Math.random()-.5)*120;t.setAttribute("position",new Yt(n,3)),this.dust=new Zh(t,new Za({color:16777215,size:.05,transparent:!0,opacity:.3,sizeAttenuation:!0})),this.scene.add(this.dust)}_fovForAspect(e){const t=ds.scene.camera.fov,n=4/3;if(e>=n)return t;const i=$e.degToRad(t)/2,r=Math.atan(Math.tan(i)*n),o=Math.atan(Math.tan(r)/Math.max(e,.35));return $e.clamp($e.radToDeg(o)*2,t,58)}applyCameraFraming(){const e=window.innerWidth/window.innerHeight;this.camera.aspect=e,this.camera.fov=this._fovForAspect(e),this.camera.updateProjectionMatrix()}onResize(){if(this.applyCameraFraming(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),!this.activeDoor&&!this.isTraveling&&this.controls){const e=this.getDefaultOverview();this.camera.position.copy(e.camPos),this.controls.target.copy(e.target)}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this._hoverDirty=!0}animate(){requestAnimationFrame(()=>this.animate()),this.time+=.001;const e=performance.now(),t=Math.min((e-(this._lastFrame||e))/1e3,.1);if(this._lastFrame=e,this.elapsed+=t,this.sunMesh&&this.moonMesh&&this.skySystem){this.motionPaused||(this.sunAngle+=this.daySpeed*6*t);const p=this.skySystem.update(this.sunAngle,this.elapsed,this.sunDist);this._sky=p,this.sunMesh.position.copy(p.cel.sunPos),this.moonMesh.position.copy(p.cel.moonPos),hp.copy(p.cel.sunPos).normalize().multiplyScalar(350),va.copy(p.cel.moonPos).normalize().multiplyScalar(350),this.sunLight.position.copy(hp),this.moonLight.position.copy(va),this.moonMesh.lookAt(0,0,0);const _=$e.smoothstep(p.cel.moonAlt,0,.06);this.moonMesh.material.opacity=_,this.moonMesh.visible=_>.001;const m=$e.smoothstep(p.cel.sunAlt,0,.06);if(this.sunMesh.material.opacity=m,this.sunMesh.visible=m>.001,p.sunAlt>.01)this.sunLight.intensity=Math.max(1.8,p.sH*2.2),this.sunLight.castShadow=!0,this.moonLight.intensity=0,this.moonLight.castShadow=!1;else{this.sunLight.intensity=0,this.sunLight.castShadow=!1,this.moonLight.intensity=Math.max(1.35,p.mH*1.8),this.moonLight.castShadow=!0;const A=p.cel.moonPos.x||120,x=p.cel.moonPos.z||120,S=Math.max(160,Math.abs(p.cel.moonPos.y));va.set(A,S,x).normalize().multiplyScalar(320),this.moonLight.position.copy(va)}const v=(this.sunAngle%(Math.PI*2)+Math.PI*2)%(Math.PI*2),M=Math.PI/3;if(v>=0&&v<=Math.PI){const A=M,x=Math.PI-M;if(v<A||v>x){const S=v<A?1-v/A:(v-x)/M,U=v<A?j1:q1;this.sunMesh.material.color.lerpColors(dp,Y1,S),this.sunLight.color.lerpColors(pp,U,S)}else this.sunMesh.material.color.copy(dp),this.sunLight.color.copy(pp)}if(v>Math.PI&&v<Math.PI*2){const A=Math.PI+M,x=Math.PI*2-M;if(v<A||v>x){const S=v<A?1-(v-Math.PI)/M:(v-x)/M;this.moonMesh.material.color.lerpColors(mp,K1,S),this.moonMesh.material.emissive.copy(this.moonMesh.material.color),this.moonLight.color.lerpColors(gp,Z1,S)}else this.moonMesh.material.color.copy(mp),this.moonMesh.material.emissive.copy(J1),this.moonLight.color.copy(gp)}const y=Math.cos(v)*.5+.5;if(lc.lerpColors(H1,z1,y),cc.lerpColors(V1,G1,y),p.sunAlt>.1)xa.copy(up),Xr.copy(fp);else if(p.sunAlt>-.04){const A=(.1-p.sunAlt)/.14;xa.lerpColors(up,lc,A),Xr.lerpColors(fp,cc,A)}else{const A=Math.min(1,(-.04-p.sunAlt)/.16);xa.lerpColors(lc,W1,A),Xr.lerpColors(cc,X1,A)}this.skySystem&&this.skySystem.skyDomeMat&&(this.skySystem.skyDomeMat.uniforms.uZenithColor.value.copy(xa),this.skySystem.skyDomeMat.uniforms.uHorizonColor.value.copy(Xr)),this.scene.background=null,this.scene.fog&&this.scene.fog.color.copy(Xr);const T=this.viewMode==="forest"?nE:eE,w=this.viewMode==="forest"?iE:tE;if(this.hemiLight.intensity=.07+p.sH*.15+p.mH*.12,this.hemiLight.color.lerpColors($1,Q1,p.sH),this.hemiLight.groundColor.lerpColors(T,w,p.sH),this.groundMat){const A=Math.PI/2,x=this.viewMode==="forest",S=x?uE:aE,U=x?lE:sE,C=x?cE:rE,D=x?hE:oE;if(v>=0&&v<A){const I=v/A;this.groundMat.color.lerpColors(S,U,I)}else if(v>=A&&v<Math.PI){const I=(v-A)/A;this.groundMat.color.lerpColors(U,C,I)}else if(v>=Math.PI&&v<Math.PI*1.5){const I=(v-Math.PI)/A;this.groundMat.color.lerpColors(C,D,I)}else{const I=(v-Math.PI*1.5)/A;this.groundMat.color.lerpColors(D,S,I)}}}!this.motionPaused&&this.rings&&this.rings.forEach(p=>p.mesh.rotation.z+=p.speed),this.rock&&this.rock.visible&&(this.viewMode==="forest"?this.rock.visible=!1:(this.rock.position.y=0,this.rock.rotation.set(0,0,0)));const n=Math.atan2(this.camera.position.x,this.camera.position.z);this._lastCamAngle===void 0&&(this._lastCamAngle=n);let i=n-this._lastCamAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this._lastCamAngle=n;const r=i/Math.max(.001,t),o=Math.abs(r);this._lastCamPos||(this._lastCamPos=this.camera.position.clone());const a=this.camera.position.distanceTo(this._lastCamPos);this._lastCamPos.copy(this.camera.position);const l=a/Math.max(.001,t),c=Math.max(0,o-.28)*1.6,h=Math.max(0,(l-2.2)*.12),u=this._isPointerDown?Math.max(0,(this._pointerSpeed-280)*.003):0,f=Math.min(2,Math.max(c,h,u));this._forestDragMotion===void 0&&(this._forestDragMotion=0);const d=f>this._forestDragMotion?.22:.045;if(this._forestDragMotion=$e.lerp(this._forestDragMotion,f,d),this._forestDragMotion<.001&&(this._forestDragMotion=0),this.roseCenterpiece&&this.roseCenterpiece.visible){this.roseCenterpiece.position.y=0,this.roseCenterpiece.rotation.y=0;const p=this.roseCenterpiece.userData.swayGroup;if(p){const m=this.roseCenterpiece.userData.swayAmplitude,g=this.roseCenterpiece.userData.swayFreqMult??1,v=this._forestDragMotion;p.rotation.z=Math.sin(this.time*24*g)*m*v,p.rotation.x=Math.cos(this.time*18*g+1.3)*m*.6*v}const _=this.roseCenterpiece.userData.motes;_&&(_.rotation.y=this.time*.25)}if(this.viewMode==="forest"&&c1(this.time*24,this._forestDragMotion*.85),this.sculpture&&this.sculpture.visible&&(this.sculpture.position.y=0,this.sculpture.rotation.set(0,0,0),this.sculpture.userData&&this.sculpture.userData.threadUniforms)){const p=this.sculpture.userData.threadUniforms;p.uTime.value=this.time,this._threadMotion===void 0&&(this._threadMotion=0);const _=Math.min(1.8,o*1.3),m=_>this._threadMotion?.14:.05;this._threadMotion=$e.lerp(this._threadMotion,_,m),this._threadMotion<5e-4&&(this._threadMotion=0),p.uMotion.value=this._threadMotion;const g=Math.sign(r)||1,v=-Math.sin(n)*g,M=Math.cos(n)*g;this._threadDrag||(this._threadDrag=new te(0,0));const y=v*Math.min(1,o*.7),T=M*Math.min(1,o*.7),w=o>.01?.12:.05;this._threadDrag.x=$e.lerp(this._threadDrag.x,y,w),this._threadDrag.y=$e.lerp(this._threadDrag.y,T,w),this._threadDrag.lengthSq()<1e-4&&this._threadDrag.set(0,0),p.uDrag&&p.uDrag.value.copy(this._threadDrag)}if(this.viewMode==="portfolio"&&this._sky&&this.updatePaintingLight(this._sky),qw(this.sunAngle,this.ringMat),this.viewMode==="portfolio"&&(!this._lastTexCheck||e-this._lastTexCheck>200)){this._lastTexCheck=e;const p=this.camera.position;ap.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),op.setFromProjectionMatrix(ap);const _=Ru*2.5,m=[];for(const g of this.doors){if(!g.isPainting||(g.group.getWorldPosition(ac),!op.containsPoint(ac)))continue;$w(g);const v=p.distanceTo(ac);v<_&&m.push({door:g,dist:v})}m.sort((g,v)=>g.dist-v.dist);for(let g=0;g<Math.min(m.length,3);g++)_a(m[g].door,Ms.MID)}if(this.doors.forEach(p=>{p.portalMaterial&&(p.portalMaterial.uniforms.uTime.value=this.time*2)}),this.updateLabels(),this.dust){const p=this.dust.geometry.attributes.position.array,_=this.isTraveling?18:1;for(let m=0;m<p.length;m+=3)this.isTraveling?(p[m+2]+=.25*_,p[m+2]>60&&(p[m+2]=-60)):p[m+1]+=Math.sin(this.time*5+p[m])*.002;this.dust.geometry.attributes.position.needsUpdate=!0}this.isTraveling||this.doors.forEach(p=>{if(p.isTree){p.swayGroup&&p.swayGroup.rotation.set(0,0,0);return}p.group.lookAt(this.camera.position.x,p.group.position.y,this.camera.position.z)}),this._hoverDirty&&(this._hoverDirty=!1,this.checkHover()),this.viewMode==="forest"&&(this.controls.autoRotate=!1),this.controls.update(),this.camera.position.y<.4&&(this.camera.position.y=.4),this.composer.render()}}new mE;"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(Xn("sw.js")).then(e=>{console.log("SW registered:",e),setInterval(()=>{e.update()},60*1e3),e.onupdatefound=()=>{const t=e.installing;t!=null&&(t.onstatechange=()=>{t.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"})):console.log("Content is cached for offline use."))})}}).catch(e=>{console.log("SW registration failed:",e)});let s;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||(window.location.reload(),s=!0)})});
