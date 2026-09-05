(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Pc="183",en={ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fg=0,Hu=1,zg=2,So=1,bf=2,jn=3,Ar=0,Kt=1,mt=2,ar=0,xs=1,ha=2,Vu=3,Gu=4,kg=5,fs=100,Bg=101,Hg=102,Vg=103,Gg=104,Wg=200,Xg=201,jg=202,qg=203,dh=204,ph=205,Yg=206,Kg=207,Zg=208,Jg=209,$g=210,Qg=211,e_=212,t_=213,i_=214,fh=0,mh=1,gh=2,on=3,_h=4,vh=5,yh=6,xh=7,Lc=0,r_=1,s_=2,or=0,Tf=1,wf=2,Ef=3,Dc=4,Af=5,Cf=6,Rf=7,Wu="attached",n_="detached",Pf=300,ws=301,ln=302,sl=303,nl=304,qo=306,qi=1e3,Mi=1001,Io=1002,zt=1003,Lf=1004,qn=1005,St=1006,bo=1007,rr=1008,yi=1009,Df=1010,If=1011,ca=1012,Ic=1013,lr=1014,Li=1015,Ti=1016,Uc=1017,Nc=1018,ua=1020,Uf=35902,Nf=35899,Of=1021,Ff=1022,Di=1023,Cr=1026,_s=1027,Oc=1028,Fc=1029,hn=1030,zc=1031,kc=1033,To=33776,wo=33777,Eo=33778,Ao=33779,Mh=35840,Sh=35841,bh=35842,Th=35843,wh=36196,Eh=37492,Ah=37496,Ch=37488,Rh=37489,Ph=37490,Lh=37491,Dh=37808,Ih=37809,Uh=37810,Nh=37811,Oh=37812,Fh=37813,zh=37814,kh=37815,Bh=37816,Hh=37817,Vh=37818,Gh=37819,Wh=37820,Xh=37821,jh=36492,qh=36494,Yh=36495,Kh=36283,Zh=36284,Jh=36285,$h=36286,da=2300,pa=2301,al=2302,Xu=2303,ju=2400,qu=2401,Yu=2402,a_=2500,o_=0,zf=1,Qh=2,l_=3200,kf=3201,Bc=0,h_=1,Br="",yt="srgb",ni="srgb-linear",Uo="linear",$e="srgb",Ds=7680,Ku=519,c_=512,u_=513,d_=514,Hc=515,p_=516,f_=517,Vc=518,m_=519,ec=35044,Zu="300 es",sr=2e3,fa=2001;function g_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function __(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function v_(){const r=ma("canvas");return r.style.display="block",r}const Ju={};function No(...r){const e="THREE."+r.shift();console.log(e,...r)}function Bf(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function be(...r){r=Bf(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Le(...r){r=Bf(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Oo(...r){const e=r.join(" ");e in Ju||(Ju[e]=!0,be(...r))}function y_(r,e,t){return new Promise(function(i,s){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}const x_={[fh]:mh,[gh]:yh,[_h]:xh,[on]:vh,[mh]:fh,[yh]:gh,[xh]:_h,[vh]:on};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let n=0,a=s.length;n<a;n++)s[n].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $u=1234567;const ea=Math.PI/180,cn=180/Math.PI;function Ni(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function ke(r,e,t){return Math.max(e,Math.min(t,r))}function Gc(r,e){return(r%e+e)%e}function M_(r,e,t,i,s){return i+(r-e)*(s-i)/(t-e)}function S_(r,e,t){return r!==e?(t-r)/(e-r):0}function ta(r,e,t){return(1-t)*r+t*e}function b_(r,e,t,i){return ta(r,e,1-Math.exp(-t*i))}function T_(r,e=1){return e-Math.abs(Gc(r,e*2)-e)}function w_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function E_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function A_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function C_(r,e){return r+Math.random()*(e-r)}function R_(r){return r*(.5-Math.random())}function P_(r){r!==void 0&&($u=r);let e=$u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(r){return r*ea}function D_(r){return r*cn}function I_(r){return(r&r-1)===0&&r!==0}function U_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function N_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function O_(r,e,t,i,s){const n=Math.cos,a=Math.sin,o=n(t/2),l=a(t/2),h=n((e+i)/2),c=a((e+i)/2),d=n((e-i)/2),u=a((e-i)/2),p=n((i-e)/2),f=a((i-e)/2);switch(s){case"XYX":r.set(o*c,l*d,l*u,o*h);break;case"YZY":r.set(l*u,o*c,l*d,o*h);break;case"ZXZ":r.set(l*d,l*u,o*c,o*h);break;case"XZX":r.set(o*c,l*f,l*p,o*h);break;case"YXY":r.set(l*p,o*c,l*f,o*h);break;case"ZYZ":r.set(l*f,l*p,o*c,o*h);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ke={DEG2RAD:ea,RAD2DEG:cn,generateUUID:Ni,clamp:ke,euclideanModulo:Gc,mapLinear:M_,inverseLerp:S_,lerp:ta,damp:b_,pingpong:T_,smoothstep:w_,smootherstep:E_,randInt:A_,randFloat:C_,randFloatSpread:R_,seededRandom:P_,degToRad:L_,radToDeg:D_,isPowerOfTwo:I_,ceilPowerOfTwo:U_,floorPowerOfTwo:N_,setQuaternionFromProperEuler:O_,normalize:Qe,denormalize:Hi};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*s+e.x,this.y=n*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=n[a+0],p=n[a+1],f=n[a+2],_=n[a+3];if(d!==_||l!==u||h!==p||c!==f){let m=l*u+h*p+c*f+d*_;m<0&&(u=-u,p=-p,f=-f,_=-_,m=-m);let g=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,l=l*g+u*o,h=h*g+p*o,c=c*g+f*o,d=d*g+_*o}else{l=l*g+u*o,h=h*g+p*o,c=c*g+f*o,d=d*g+_*o;const v=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=v,h*=v,c*=v,d*=v}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,n,a){const o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=n[a],u=n[a+1],p=n[a+2],f=n[a+3];return e[t]=o*f+c*d+l*p-h*u,e[t+1]=l*f+c*u+h*d-o*p,e[t+2]=h*f+c*p+o*u-l*d,e[t+3]=c*f-o*d-l*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),d=o(n/2),u=l(i/2),p=l(s/2),f=l(n/2);switch(a){case"XYZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"YXZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"ZXY":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"ZYX":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"YZX":this._x=u*c*d+h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d-u*p*f;break;case"XZY":this._x=u*c*d-h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d+u*p*f;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(n-h)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(n+h)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(n-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(n+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+s*h-n*l,this._y=s*c+a*l+n*o-i*h,this._z=n*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-n*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,n=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,n=-n,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+n*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+n*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*i),c=2*(o*t-n*s),d=2*(n*i-a*t);return this.x=t+l*h+a*d-o*c,this.y=i+l*c+o*h-n*d,this.z=s+l*d+n*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-n*o,this.y=n*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new P,Qu=new pi;class ze{constructor(e,t,i,s,n,a,o,l,h){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,h)}set(e,t,i,s,n,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=n,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],p=i[5],f=i[8],_=s[0],m=s[3],g=s[6],v=s[1],M=s[4],x=s[7],w=s[2],b=s[5],A=s[8];return n[0]=a*_+o*v+l*w,n[3]=a*m+o*M+l*b,n[6]=a*g+o*x+l*A,n[1]=h*_+c*v+d*w,n[4]=h*m+c*M+d*b,n[7]=h*g+c*x+d*A,n[2]=u*_+p*v+f*w,n[5]=u*m+p*M+f*b,n[8]=u*g+p*x+f*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*n*c+i*o*l+s*n*h-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*n,p=h*n-a*l,f=t*d+i*u+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=d*_,e[1]=(s*h-c*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(c*t-s*l)*_,e[5]=(s*n-o*t)*_,e[6]=p*_,e[7]=(i*l-h*t)*_,e[8]=(a*t-i*n)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,a,o){const l=Math.cos(n),h=Math.sin(n);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new ze,ed=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const r={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===$e&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=tn(s.r),s.g=tn(s.g),s.b=tn(s.b))),s},workingToColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},colorSpaceToWorking:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Br?Uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,a){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,n){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,n)},toWorkingColorSpace:function(s,n){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ni]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:$e,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),r}const je=F_();function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Is;class z_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=ma("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let a=0;a<n.length;a++)n[a]=Er(n[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?n.push(hl(s[a].image)):n.push(hl(s[a]))}else n=hl(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?z_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let B_=0;const cl=new P;class Ht extends Cs{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Mi,s=Mi,n=St,a=rr,o=Di,l=yi,h=Ht.DEFAULT_ANISOTROPY,c=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ni(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Pf;Ht.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const a=e.elements,o=a[0],l=a[4],h=a[8],c=a[1],d=a[5],u=a[9],p=a[2],f=a[6],_=a[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-f)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+f)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,v=(d+1)/2,M=(_+1)/2,x=(l+c)/4,w=(h+p)/4,b=(u+f)/4;return g>v&&g>M?g<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(g),s=x/i,n=w/i):v>M?v<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(v),i=x/s,n=b/s):M<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(M),i=w/n,s=b/n),this.set(i,s,n,t),this}let m=Math.sqrt((f-u)*(f-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(f-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends Cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},n=new Ht(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends H_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hf extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ne{constructor(e,t,i,s,n,a,o,l,h,c,d,u,p,f,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,h,c,d,u,p,f,_,m)}set(e,t,i,s,n,a,o,l,h,c,d,u,p,f,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=n,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=c,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),n=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const u=a*c,p=a*d,f=o*c,_=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=p+f*h,t[5]=u-_*h,t[9]=-o*l,t[2]=_-u*h,t[6]=f+p*h,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,p=l*d,f=h*c,_=h*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,p=l*d,f=h*c,_=h*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*c,t[9]=_-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,p=a*d,f=o*c,_=o*d;t[0]=l*c,t[4]=f*h-p,t[8]=u*h+_,t[1]=l*d,t[5]=_*h+u,t[9]=p*h-f,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*h,f=o*l,_=o*h;t[0]=l*c,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,p=a*h,f=o*l,_=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+_,t[5]=a*c,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*c,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,t,i){const s=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Dr.crossVectors(i,gi),Dr.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Dr.crossVectors(i,gi)),Dr.normalize(),Oa.crossVectors(gi,Dr),s[0]=Dr.x,s[4]=Oa.x,s[8]=gi.x,s[1]=Dr.y,s[5]=Oa.y,s[9]=gi.y,s[2]=Dr.z,s[6]=Oa.z,s[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],p=i[13],f=i[2],_=i[6],m=i[10],g=i[14],v=i[3],M=i[7],x=i[11],w=i[15],b=s[0],A=s[4],y=s[8],T=s[12],U=s[1],R=s[5],L=s[9],N=s[13],k=s[2],B=s[6],z=s[10],H=s[14],$=s[3],J=s[7],oe=s[11],de=s[15];return n[0]=a*b+o*U+l*k+h*$,n[4]=a*A+o*R+l*B+h*J,n[8]=a*y+o*L+l*z+h*oe,n[12]=a*T+o*N+l*H+h*de,n[1]=c*b+d*U+u*k+p*$,n[5]=c*A+d*R+u*B+p*J,n[9]=c*y+d*L+u*z+p*oe,n[13]=c*T+d*N+u*H+p*de,n[2]=f*b+_*U+m*k+g*$,n[6]=f*A+_*R+m*B+g*J,n[10]=f*y+_*L+m*z+g*oe,n[14]=f*T+_*N+m*H+g*de,n[3]=v*b+M*U+x*k+w*$,n[7]=v*A+M*R+x*B+w*J,n[11]=v*y+M*L+x*z+w*oe,n[15]=v*T+M*N+x*H+w*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],p=e[14],f=e[3],_=e[7],m=e[11],g=e[15],v=l*p-h*u,M=o*p-h*d,x=o*u-l*d,w=a*p-h*c,b=a*u-l*c,A=a*d-o*c;return t*(_*v-m*M+g*x)-i*(f*v-m*w+g*b)+s*(f*M-_*w+g*A)-n*(f*x-_*b+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],v=t*o-i*a,M=t*l-s*a,x=t*h-n*a,w=i*l-s*o,b=i*h-n*o,A=s*h-n*l,y=c*_-d*f,T=c*m-u*f,U=c*g-p*f,R=d*m-u*_,L=d*g-p*_,N=u*g-p*m,k=v*N-M*L+x*R+w*U-b*T+A*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return e[0]=(o*N-l*L+h*R)*B,e[1]=(s*L-i*N-n*R)*B,e[2]=(_*A-m*b+g*w)*B,e[3]=(u*b-d*A-p*w)*B,e[4]=(l*U-a*N-h*T)*B,e[5]=(t*N-s*U+n*T)*B,e[6]=(m*x-f*A-g*M)*B,e[7]=(c*A-u*x+p*M)*B,e[8]=(a*L-o*U+h*y)*B,e[9]=(i*U-t*L-n*y)*B,e[10]=(f*b-_*x+g*v)*B,e[11]=(d*x-c*b-p*v)*B,e[12]=(o*T-a*R-l*y)*B,e[13]=(t*R-i*T+s*y)*B,e[14]=(_*M-f*w-m*v)*B,e[15]=(c*w-d*M+u*v)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,a=e.x,o=e.y,l=e.z,h=n*a,c=n*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,a){return this.set(1,i,n,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,h=n+n,c=a+a,d=o+o,u=n*h,p=n*c,f=n*d,_=a*c,m=a*d,g=o*d,v=l*h,M=l*c,x=l*d,w=i.x,b=i.y,A=i.z;return s[0]=(1-(_+g))*w,s[1]=(p+x)*w,s[2]=(f-M)*w,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(u+g))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(f+M)*A,s[9]=(m-v)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const n=this.determinant();if(n===0)return i.set(1,1,1),t.identity(),this;let a=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();n<0&&(a=-a),zi.copy(this);const h=1/a,c=1/o,d=1/l;return zi.elements[0]*=h,zi.elements[1]*=h,zi.elements[2]*=h,zi.elements[4]*=c,zi.elements[5]*=c,zi.elements[6]*=c,zi.elements[8]*=d,zi.elements[9]*=d,zi.elements[10]*=d,t.setFromRotationMatrix(zi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,n,a,o=sr,l=!1){const h=this.elements,c=2*n/(t-e),d=2*n/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s);let f,_;if(l)f=n/(a-n),_=a*n/(a-n);else if(o===sr)f=-(a+n)/(a-n),_=-2*a*n/(a-n);else if(o===fa)f=-a/(a-n),_=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,n,a,o=sr,l=!1){const h=this.elements,c=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s);let f,_;if(l)f=1/(a-n),_=a/(a-n);else if(o===sr)f=-2/(a-n),_=-(a+n)/(a-n);else if(o===fa)f=-1/(a-n),_=-n/(a-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=f,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new P,zi=new Ne,G_=new P(0,0,0),W_=new P(1,1,1),Dr=new P,Oa=new P,gi=new P,id=new Ne,rd=new pi;class Yi{constructor(e=0,t=0,i=0,s=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,p),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const sd=new P,Ns=new pi,gr=new Ne,Fa=new P,In=new P,j_=new P,q_=new pi,nd=new P(1,0,0),ad=new P(0,1,0),od=new P(0,0,1),ld={type:"added"},Y_={type:"removed"},Os={type:"childadded",child:null},ul={type:"childremoved",child:null};class pt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new P,t=new Yi,i=new pi,s=new P(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ze}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(ad,e)}rotateZ(e){return this.rotateOnAxis(od,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(ad,e)}translateZ(e){return this.translateOnAxis(od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fa.copy(e):Fa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(In,Fa,this.up):gr.lookAt(Fa,In,this.up),this.quaternion.setFromRotationMatrix(gr),s&&(gr.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(gr),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),Os.child=e,this.dispatchEvent(Os),Os.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*s,n[13]+=i-n[1]*t-n[5]*i-n[9]*s,n[14]+=s-n[2]*t-n[6]*i-n[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(e.materials,this.material[l]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pt.DEFAULT_UP=new P(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kt extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),g=this._getHandJoint(h,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,f=.005;h.inputState.pinching&&u>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},za={h:0,s:0,l:0};function pl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Z{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=Gc(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=pl(a,n,e+1/3),this.g=pl(a,n,e),this.b=pl(a,n,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function i(n){n!==void 0&&parseFloat(n)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=Vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return je.workingToColorSpace($t.copy(this),e),Math.round(ke($t.r*255,0,255))*65536+Math.round(ke($t.g*255,0,255))*256+Math.round(ke($t.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,n=$t.b,a=Math.max(i,s,n),o=Math.min(i,s,n);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-n)/d+(s<n?6:0);break;case s:l=(n-i)/d+2;break;case n:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=yt){je.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(za);const i=ta(Ir.h,za.h,t),s=ta(Ir.s,za.s,t),n=ta(Ir.l,za.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Z;Z.NAMES=Vf;class jc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Z(e),this.density=t}clone(){return new jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gf extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new P,_r=new P,fl=new P,vr=new P,Fs=new P,zs=new P,hd=new P,ml=new P,gl=new P,_l=new P,vl=new dt,yl=new dt,xl=new dt;class Vi{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ki.subVectors(e,t),s.cross(ki);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){ki.subVectors(s,t),_r.subVectors(i,t),fl.subVectors(e,t);const a=ki.dot(ki),o=ki.dot(_r),l=ki.dot(fl),h=_r.dot(_r),c=_r.dot(fl),d=a*h-o*o;if(d===0)return n.set(0,0,0),null;const u=1/d,p=(h*l-o*c)*u,f=(a*c-o*l)*u;return n.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,s,n,a,o,l){return this.getBarycoord(e,t,i,s,vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,vr.x),l.addScaledVector(a,vr.y),l.addScaledVector(o,vr.z),l)}static getInterpolatedAttribute(e,t,i,s,n,a){return vl.setScalar(0),yl.setScalar(0),xl.setScalar(0),vl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),xl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vl,n.x),a.addScaledVector(yl,n.y),a.addScaledVector(xl,n.z),a}static isFrontFacing(e,t,i,s){return ki.subVectors(i,t),_r.subVectors(e,t),ki.cross(_r).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),ki.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return Vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let a,o;Fs.subVectors(s,i),zs.subVectors(n,i),ml.subVectors(e,i);const l=Fs.dot(ml),h=zs.dot(ml);if(l<=0&&h<=0)return t.copy(i);gl.subVectors(e,s);const c=Fs.dot(gl),d=zs.dot(gl);if(c>=0&&d<=c)return t.copy(s);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Fs,a);_l.subVectors(e,n);const p=Fs.dot(_l),f=zs.dot(_l);if(f>=0&&p<=f)return t.copy(n);const _=p*h-l*f;if(_<=0&&h>=0&&f<=0)return o=h/(h-f),t.copy(i).addScaledVector(zs,o);const m=c*f-p*d;if(m<=0&&d-c>=0&&p-f>=0)return hd.subVectors(n,s),o=(d-c)/(d-c+(p-f)),t.copy(s).addScaledVector(hd,o);const g=1/(m+_+u);return a=_*g,o=u*g,t.copy(i).addScaledVector(Fs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bi):Bi.fromBufferAttribute(n,a),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const s=e.children;for(let n=0,a=s.length;n<a;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Un),Ba.subVectors(this.max,Un),ks.subVectors(e.a,Un),Bs.subVectors(e.b,Un),Hs.subVectors(e.c,Un),Ur.subVectors(Bs,ks),Nr.subVectors(Hs,Bs),is.subVectors(ks,Hs);let t=[0,-Ur.z,Ur.y,0,-Nr.z,Nr.y,0,-is.z,is.y,Ur.z,0,-Ur.x,Nr.z,0,-Nr.x,is.z,0,-is.x,-Ur.y,Ur.x,0,-Nr.y,Nr.x,0,-is.y,is.x,0];return!Ml(t,ks,Bs,Hs,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,ks,Bs,Hs,Ba))?!1:(Ha.crossVectors(Ur,Nr),t=[Ha.x,Ha.y,Ha.z],Ml(t,ks,Bs,Hs,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new P,new P,new P,new P,new P,new P,new P,new P],Bi=new P,ka=new cr,ks=new P,Bs=new P,Hs=new P,Ur=new P,Nr=new P,is=new P,Un=new P,Ba=new P,Ha=new P,rs=new P;function Ml(r,e,t,i,s){for(let n=0,a=r.length-3;n<=a;n+=3){rs.fromArray(r,n);const o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),h=t.dot(rs),c=i.dot(rs);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Dt=new P,Va=new te;let Z_=0;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ec,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}}class Wf extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xf extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const J_=new cr,Nn=new P,Sl=new P;class ur{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):J_.setFromPoints(e).getCenter(i);let s=0;for(let n=0,a=e.length;n<a;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nn.subVectors(e,this.center);const t=Nn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Nn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nn.copy(e.center).add(Sl)),this.expandByPoint(Nn.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $_=0;const Ci=new Ne,bl=new pt,Vs=new P,_i=new cr,On=new cr,Wt=new P;class wt extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?Xf:Wf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new ze().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,n=e.length;s<n;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const n=e[s];t.setXYZ(s,n.x,n.y,n.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];_i.setFromBufferAttribute(n),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];On.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(_i.min,On.min),_i.expandByPoint(Wt),Wt.addVectors(_i.max,On.max),_i.expandByPoint(Wt)):(_i.expandByPoint(On.min),_i.expandByPoint(On.max))}_i.getCenter(i);let s=0;for(let n=0,a=e.count;n<a;n++)Wt.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Wt.fromBufferAttribute(o,h),l&&(Vs.fromBufferAttribute(e,h),Wt.add(Vs)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new P,l[y]=new P;const h=new P,c=new P,d=new P,u=new te,p=new te,f=new te,_=new P,m=new P;function g(y,T,U){h.fromBufferAttribute(i,y),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,U),u.fromBufferAttribute(n,y),p.fromBufferAttribute(n,T),f.fromBufferAttribute(n,U),c.sub(h),d.sub(h),p.sub(u),f.sub(u);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(_.copy(c).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(R),o[y].add(_),o[T].add(_),o[U].add(_),l[y].add(m),l[T].add(m),l[U].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,T=v.length;y<T;++y){const U=v[y],R=U.start,L=U.count;for(let N=R,k=R+L;N<k;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const M=new P,x=new P,w=new P,b=new P;function A(y){w.fromBufferAttribute(s,y),b.copy(w);const T=o[y];M.copy(T),M.sub(w.multiplyScalar(w.dot(T))).normalize(),x.crossVectors(b,T);const U=x.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,U)}for(let y=0,T=v.length;y<T;++y){const U=v[y],R=U.start,L=U.count;for(let N=R,k=R+L;N<k;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new P,n=new P,a=new P,o=new P,l=new P,h=new P,c=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const f=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,f),n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,n),d.subVectors(s,n),c.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,n),d.subVectors(s,n),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c);let p=0,f=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let g=0;g<c;g++)u[f++]=h[p++]}return new Xt(u,c,d)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,i);t.setAttribute(o,h)}const n=this.morphAttributes;for(const o in n){const l=[],h=n[o];for(let c=0,d=h.length;c<d;c++){const u=h[c],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let n=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const p=h[d];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const n=e.morphAttributes;for(const h in n){const c=[],d=n[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new P;class qc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){No("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){No("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ev=0;class ji extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=xs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=on,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==ph&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==on&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=s(e.textures),a=s(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new P,Tl=new P,Ga=new P,Or=new P,wl=new P,Wa=new P,El=new P;class En{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Tl.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Tl);const n=e.distanceTo(t)*.5,a=-this.direction.dot(Ga),o=Or.dot(this.direction),l=-Or.dot(Ga),h=Or.lengthSq(),c=Math.abs(1-a*a);let d,u,p,f;if(c>0)if(d=a*l-o,u=a*o-l,f=n*c,d>=0)if(u>=-f)if(u<=f){const _=1/c;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=n,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;else u=-n,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;else u<=-f?(d=Math.max(0,-(-a*n+o)),u=d>0?-n:Math.min(Math.max(-n,-l),n),p=-d*d+u*(u+2*l)+h):u<=f?(d=0,u=Math.min(Math.max(-n,-l),n),p=u*(u+2*l)+h):(d=Math.max(0,-(a*n+o)),u=d>0?n:Math.min(Math.max(-n,-l),n),p=-d*d+u*(u+2*l)+h);else u=a>0?-n:n,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tl).addScaledVector(Ga,u),p}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const i=xr.dot(this.direction),s=xr.dot(xr)-i*i,n=e.radius*e.radius;if(s>n)return null;const a=Math.sqrt(n-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,s=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,s=(e.min.x-u.x)*h),c>=0?(n=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(n=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||n>s||((n>i||isNaN(i))&&(i=n),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,s,n){wl.subVectors(t,e),Wa.subVectors(i,e),El.crossVectors(wl,Wa);let a=this.direction.dot(El),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Or.subVectors(this.origin,e);const l=o*this.direction.dot(Wa.crossVectors(Or,Wa));if(l<0)return null;const h=o*this.direction.dot(wl.cross(Or));if(h<0||l+h>a)return null;const c=-o*Or.dot(El);return c<0?null:this.at(c/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cd=new Ne,ss=new En,Xa=new ur,ud=new P,ja=new P,qa=new P,Ya=new P,Al=new P,Ka=new P,dd=new P,Za=new P;class Oe extends pt{constructor(e=new wt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(n&&o){Ka.set(0,0,0);for(let l=0,h=n.length;l<h;l++){const c=o[l],d=n[l];c!==0&&(Al.fromBufferAttribute(d,e),a?Ka.addScaledVector(Al,c):Ka.addScaledVector(Al.sub(t),c))}t.add(Ka)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(n),ss.copy(e.ray).recast(e.near),!(Xa.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Xa,ud)===null||ss.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(cd.copy(n).invert(),ss.copy(e.ray).applyMatrix4(cd),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const n=this.geometry,a=this.material,o=n.index,l=n.attributes.position,h=n.attributes.uv,c=n.attributes.uv1,d=n.attributes.normal,u=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){const m=u[f],g=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=M;x<w;x+=3){const b=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);s=Ja(this,g,e,i,h,c,d,b,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=f,g=_;m<g;m+=3){const v=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);s=Ja(this,a,e,i,h,c,d,v,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){const m=u[f],g=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=M;x<w;x+=3){const b=x,A=x+1,y=x+2;s=Ja(this,g,e,i,h,c,d,b,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=f,g=_;m<g;m+=3){const v=m,M=m+1,x=m+2;s=Ja(this,a,e,i,h,c,d,v,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function tv(r,e,t,i,s,n,a,o){let l;if(e.side===Kt?l=i.intersectTriangle(a,n,s,!0,o):l=i.intersectTriangle(s,n,a,e.side===Ar,o),l===null)return null;Za.copy(o),Za.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Za);return h<t.near||h>t.far?null:{distance:h,point:Za.clone(),object:r}}function Ja(r,e,t,i,s,n,a,o,l,h){r.getVertexPosition(o,ja),r.getVertexPosition(l,qa),r.getVertexPosition(h,Ya);const c=tv(r,e,t,i,ja,qa,Ya,dd);if(c){const d=new P;Vi.getBarycoord(dd,ja,qa,Ya,d),s&&(c.uv=Vi.getInterpolatedAttribute(s,o,l,h,d,new te)),n&&(c.uv1=Vi.getInterpolatedAttribute(n,o,l,h,d,new te)),a&&(c.normal=Vi.getInterpolatedAttribute(a,o,l,h,d,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new P,materialIndex:0};Vi.getNormal(ja,qa,Ya,u.normal),c.face=u,c.barycoord=d}return c}const pd=new P,fd=new dt,md=new dt,iv=new P,gd=new Ne,$a=new P,Cl=new ur,_d=new Ne,Rl=new En;class rv extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wu,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ur),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(s),e.ray.intersectsSphere(Cl)!==!1&&(_d.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===n_?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;fd.fromBufferAttribute(s.attributes.skinIndex,e),md.fromBufferAttribute(s.attributes.skinWeight,e),pd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const a=md.getComponent(n);if(a!==0){const o=fd.getComponent(n);gd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(iv.copy(pd).applyMatrix4(gd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class jf extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yc extends Ht{constructor(e=null,t=1,i=1,s,n,a,o,l,h=zt,c=zt,d,u){super(null,a,o,l,h,c,s,n,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new Ne,sv=new Ne;class Kc{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let n=0,a=e.length;n<a;n++){const o=e[n]?e[n].matrixWorld:sv;vd.multiplyMatrices(o,t[n]),vd.toArray(i,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Yc(t,e,e,Di,Li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const n=e.bones[i];let a=t[n];a===void 0&&(be("Skeleton: No bone found with UUID:",n),a=new jf),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,n=t.length;s<n;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class tc extends Xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new Ne,yd=new Ne,Qa=[],xd=new cr,nv=new Ne,Fn=new Oe,zn=new ur;class Yo extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),xd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(xd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),zn.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(zn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,a=e*n+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fn.geometry=this.geometry,Fn.material=this.material,Fn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zn.copy(this.boundingSphere),zn.applyMatrix4(i),e.ray.intersectsSphere(zn)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,Gs),yd.multiplyMatrices(i,Gs),Fn.matrixWorld=yd,Fn.raycast(e,Qa);for(let a=0,o=Qa.length;a<o;a++){const l=Qa[a];l.instanceId=n,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(s*this.count),s,this.count,Oc,Li));const n=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;n[l]=o,n.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pl=new P,av=new P,ov=new ze;class br{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Pl.subVectors(i,t).cross(av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ov.getNormalMatrix(e),s=this.coplanarPoint(Pl).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ur,lv=new te(.5,.5),eo=new P;class Ko{constructor(e=new br,t=new br,i=new br,s=new br,n=new br,a=new br){this.planes=[e,t,i,s,n,a]}set(e,t,i,s,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=sr,i=!1){const s=this.planes,n=e.elements,a=n[0],o=n[1],l=n[2],h=n[3],c=n[4],d=n[5],u=n[6],p=n[7],f=n[8],_=n[9],m=n[10],g=n[11],v=n[12],M=n[13],x=n[14],w=n[15];if(s[0].setComponents(h-a,p-c,g-f,w-v).normalize(),s[1].setComponents(h+a,p+c,g+f,w+v).normalize(),s[2].setComponents(h+o,p+d,g+_,w+M).normalize(),s[3].setComponents(h-o,p-d,g-_,w-M).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(h-l,p-u,g-m,w-x).normalize();else if(s[4].setComponents(h-l,p-u,g-m,w-x).normalize(),t===sr)s[5].setComponents(h+l,p+u,g+m,w+x).normalize();else if(t===fa)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=lv.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qf extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new P,zo=new P,Md=new Ne,kn=new En,to=new ur,Ll=new P,Sd=new P;class Zc extends pt{constructor(e=new wt,t=new qf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Fo.fromBufferAttribute(t,s-1),zo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fo.distanceTo(zo);e.setAttribute("lineDistance",new it(i,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),to.radius+=n,e.ray.intersectsSphere(to)===!1)return;Md.copy(s).invert(),kn.copy(e.ray).applyMatrix4(Md);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let f=u,_=p-1;f<_;f+=h){const m=c.getX(f),g=c.getX(f+1),v=io(this,e,kn,l,m,g,f);v&&t.push(v)}if(this.isLineLoop){const f=c.getX(p-1),_=c.getX(u),m=io(this,e,kn,l,f,_,p-1);m&&t.push(m)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=u,_=p-1;f<_;f+=h){const m=io(this,e,kn,l,f,f+1,f);m&&t.push(m)}if(this.isLineLoop){const f=io(this,e,kn,l,p-1,u,p-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function io(r,e,t,i,s,n,a){const o=r.geometry.attributes.position;if(Fo.fromBufferAttribute(o,s),zo.fromBufferAttribute(o,n),t.distanceSqToSegment(Fo,zo,Ll,Sd)>i)return;Ll.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ll);if(!(l<e.near||l>e.far))return{distance:l,point:Sd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const bd=new P,Td=new P;class hv extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)bd.fromBufferAttribute(t,s),Td.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bd.distanceTo(Td);e.setAttribute("lineDistance",new it(i,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cv extends Zc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zo extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wd=new Ne,ic=new En,ro=new ur,so=new P;class Jc extends pt{constructor(e=new wt,t=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ro.radius+=n,e.ray.intersectsSphere(ro)===!1)return;wd.copy(s).invert(),ic.copy(e.ray).applyMatrix4(wd);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let p=d,f=u;p<f;p++){const _=h.getX(p);so.fromBufferAttribute(c,_),Ed(so,_,l,s,e,t,this)}}else{const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,f=u;p<f;p++)so.fromBufferAttribute(c,p),Ed(so,p,l,s,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ed(r,e,t,i,s,n,a){const o=ic.distanceSqToPoint(r);if(o<t){const l=new P;ic.closestPointToPoint(r,l),l.applyMatrix4(i);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yf extends Ht{constructor(e=[],t=ws,i,s,n,a,o,l,h,c){super(e,t,i,s,n,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jr extends Ht{constructor(e,t,i,s,n,a,o,l,h){super(e,t,i,s,n,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ga extends Ht{constructor(e,t,i=lr,s,n,a,o=zt,l=zt,h,c=Cr,d=1){if(c!==Cr&&c!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,n,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uv extends ga{constructor(e,t=lr,i=ws,s,n,a=zt,o=zt,l,h=Cr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,s,n,a,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kf extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wi extends wt{constructor(e=1,t=1,i=1,s=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:a};const o=this;s=Math.floor(s),n=Math.floor(n),a=Math.floor(a);const l=[],h=[],c=[],d=[];let u=0,p=0;f("z","y","x",-1,-1,i,t,e,a,n,0),f("z","y","x",1,-1,i,t,-e,a,n,1),f("x","z","y",1,1,e,i,t,s,a,2),f("x","z","y",1,-1,e,i,-t,s,a,3),f("x","y","z",1,-1,e,t,i,s,n,4),f("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(d,2));function f(_,m,g,v,M,x,w,b,A,y,T){const U=x/A,R=w/y,L=x/2,N=w/2,k=b/2,B=A+1,z=y+1;let H=0,$=0;const J=new P;for(let oe=0;oe<z;oe++){const de=oe*R-N;for(let xe=0;xe<B;xe++){const Re=xe*U-L;J[_]=Re*v,J[m]=de*M,J[g]=k,h.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[g]=b>0?1:-1,c.push(J.x,J.y,J.z),d.push(xe/A),d.push(1-oe/y),H+=1}}for(let oe=0;oe<y;oe++)for(let de=0;de<A;de++){const xe=u+de+B*oe,Re=u+de+B*(oe+1),Ye=u+(de+1)+B*(oe+1),ut=u+(de+1)+B*oe;l.push(xe,Re,ut),l.push(Re,Ye,ut),$+=6}o.addGroup(p,$,T),p+=$,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class un extends wt{constructor(e=1,t=1,i=1,s=32,n=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),n=Math.floor(n);const c=[],d=[],u=[],p=[];let f=0;const _=[],m=i/2;let g=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(p,2));function v(){const x=new P,w=new P;let b=0;const A=(t-e)/i;for(let y=0;y<=n;y++){const T=[],U=y/n,R=U*(t-e)+e;for(let L=0;L<=s;L++){const N=L/s,k=N*l+o,B=Math.sin(k),z=Math.cos(k);w.x=R*B,w.y=-U*i+m,w.z=R*z,d.push(w.x,w.y,w.z),x.set(B,A,z).normalize(),u.push(x.x,x.y,x.z),p.push(N,1-U),T.push(f++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<n;T++){const U=_[T][y],R=_[T+1][y],L=_[T+1][y+1],N=_[T][y+1];(e>0||T!==0)&&(c.push(U,R,N),b+=3),(t>0||T!==n-1)&&(c.push(R,L,N),b+=3)}h.addGroup(g,b,0),g+=b}function M(x){const w=f,b=new te,A=new P;let y=0;const T=x===!0?e:t,U=x===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*U,0),u.push(0,U,0),p.push(.5,.5),f++;const R=f;for(let L=0;L<=s;L++){const N=L/s*l+o,k=Math.cos(N),B=Math.sin(N);A.x=T*B,A.y=m*U,A.z=T*k,d.push(A.x,A.y,A.z),u.push(0,U,0),b.x=k*.5+.5,b.y=B*.5*U+.5,p.push(b.x,b.y),f++}for(let L=0;L<s;L++){const N=w+L,k=R+L;x===!0?c.push(k,k+1,N):c.push(k+1,k,N),y+=3}h.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(s),t.push(n),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const n=i.length;let a;t?a=t:a=e*i[n-1];let o=0,l=n-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(n-1);const c=i[s],d=i[s+1]-c,u=(a-c)/d;return(s+u)/(n-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const n=this.getPoint(i),a=this.getPoint(s),o=t||(n.isVector2?new te:new P);return o.copy(a).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,s=[],n=[],a=[],o=new P,l=new Ne;for(let p=0;p<=e;p++){const f=p/e;s[p]=this.getTangentAt(f,new P)}n[0]=new P,a[0]=new P;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),n[0].crossVectors(s[0],o),a[0].crossVectors(s[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(ke(s[p-1].dot(s[p]),-1,1));n[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(s[p],n[p])}if(t===!0){let p=Math.acos(ke(n[0].dot(n[e]),-1,1));p/=e,s[0].dot(o.crossVectors(n[0],n[e]))>0&&(p=-p);for(let f=1;f<=e;f++)n[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),a[f].crossVectors(s[f],n[f])}return{tangents:s,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $c extends dr{constructor(e=0,t=0,i=1,s=1,n=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){const i=t,s=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=s;for(;n>s;)n-=s;n<Number.EPSILON&&(a?n=0:n=s),this.aClockwise===!0&&!a&&(n===s?n=-s:n=n-s);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=h-this.aY;l=u*c-p*d+this.aX,h=u*d+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dv extends $c{constructor(e,t,i,s,n,a){super(e,t,i,i,s,n,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let r=0,e=0,t=0,i=0;function s(n,a,o,l){r=n,e=o,t=-3*n+3*a-2*o-l,i=2*n-2*a+o+l}return{initCatmullRom:function(n,a,o,l,h){s(a,o,h*(o-n),h*(l-a))},initNonuniformCatmullRom:function(n,a,o,l,h,c,d){let u=(a-n)/h-(o-n)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,p*=c,s(a,o,u,p)},calc:function(n){const a=n*n,o=a*n;return r+e*n+t*a+i*o}}}const no=new P,Dl=new Qc,Il=new Qc,Ul=new Qc;class pv extends dr{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,n=s.length,a=(n-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%n]:(no.subVectors(s[0],s[1]).add(s[0]),h=no);const d=s[o%n],u=s[(o+1)%n];if(this.closed||o+2<n?c=s[(o+2)%n]:(no.subVectors(s[n-1],s[n-2]).add(s[n-1]),c=no),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(h.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Dl.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,f,_,m),Il.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,f,_,m),Ul.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),Il.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),Ul.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(Dl.calc(l),Il.calc(l),Ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ad(r,e,t,i,s){const n=(i-e)*.5,a=(s-t)*.5,o=r*r,l=r*o;return(2*t-2*i+n+a)*l+(-3*t+3*i-2*n-a)*o+n*r+t}function fv(r,e){const t=1-r;return t*t*e}function mv(r,e){return 2*(1-r)*r*e}function gv(r,e){return r*r*e}function ia(r,e,t,i){return fv(r,e)+mv(r,t)+gv(r,i)}function _v(r,e){const t=1-r;return t*t*t*e}function vv(r,e){const t=1-r;return 3*t*t*r*e}function yv(r,e){return 3*(1-r)*r*r*e}function xv(r,e){return r*r*r*e}function ra(r,e,t,i,s){return _v(r,e)+vv(r,t)+yv(r,i)+xv(r,s)}class Zf extends dr{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){const i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,s.x,n.x,a.x,o.x),ra(e,s.y,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mv extends dr{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(ra(e,s.x,n.x,a.x,o.x),ra(e,s.y,n.y,a.y,o.y),ra(e,s.z,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends dr{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sv extends dr{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $f extends dr{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){const i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(ia(e,s.x,n.x,a.x),ia(e,s.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bv extends dr{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(ia(e,s.x,n.x,a.x),ia(e,s.y,n.y,a.y),ia(e,s.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends dr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const i=t,s=this.points,n=(s.length-1)*e,a=Math.floor(n),o=n-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ad(o,l.x,h.x,c.x,d.x),Ad(o,l.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new te().fromArray(s))}return this}}var Cd=Object.freeze({__proto__:null,ArcCurve:dv,CatmullRomCurve3:pv,CubicBezierCurve:Zf,CubicBezierCurve3:Mv,EllipseCurve:$c,LineCurve:Jf,LineCurve3:Sv,QuadraticBezierCurve:$f,QuadraticBezierCurve3:bv,SplineCurve:Qf});class Tv extends dr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let n=0;for(;n<s.length;){if(s[n]>=i){const a=s[n]-i,o=this.curves[n],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,n=this.curves;s<n.length;s++){const a=n[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Cd[s.type]().fromJSON(s))}return this}}class Rd extends Tv{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Jf(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const n=new $f(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(n),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,n,a){const o=new Zf(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(n,a));return this.curves.push(o),this.currentPoint.set(n,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,n,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,n,a),this}absarc(e,t,i,s,n,a){return this.absellipse(e,t,i,i,s,n,a),this}ellipse(e,t,i,s,n,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,n,a,o,l),this}absellipse(e,t,i,s,n,a,o,l){const h=new $c(e,t,i,s,n,a,o,l);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class eu extends Rd{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Rd().fromJSON(s))}return this}}function wv(r,e,t=2){const i=e&&e.length,s=i?e[0]*t:r.length;let n=em(r,0,s,t,!0);const a=[];if(!n||n.next===n.prev)return a;let o,l,h;if(i&&(n=Pv(r,e,n,t)),r.length>80*t){o=r[0],l=r[1];let c=o,d=l;for(let u=t;u<s;u+=t){const p=r[u],f=r[u+1];p<o&&(o=p),f<l&&(l=f),p>c&&(c=p),f>d&&(d=f)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return _a(n,a,t,o,l,h,0),a}function em(r,e,t,i,s){let n;if(s===Hv(r,e,t,i)>0)for(let a=e;a<t;a+=i)n=Pd(a/i|0,r[a],r[a+1],n);else for(let a=t-i;a>=e;a-=i)n=Pd(a/i|0,r[a],r[a+1],n);return n&&dn(n,n.next)&&(ya(n),n=n.next),n}function Es(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(dn(t,t.next)||xt(t.prev,t,t.next)===0)){if(ya(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function _a(r,e,t,i,s,n,a){if(!r)return;!a&&n&&Nv(r,i,s,n);let o=r;for(;r.prev!==r.next;){const l=r.prev,h=r.next;if(n?Av(r,i,s,n):Ev(r)){e.push(l.i,r.i,h.i),ya(r),r=h.next,o=h.next;continue}if(r=h,r===o){a?a===1?(r=Cv(Es(r),e),_a(r,e,t,i,s,n,2)):a===2&&Rv(r,e,t,i,s,n):_a(Es(r),e,t,i,s,n,1);break}}}function Ev(r){const e=r.prev,t=r,i=r.next;if(xt(e,t,i)>=0)return!1;const s=e.x,n=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=Math.min(s,n,a),d=Math.min(o,l,h),u=Math.max(s,n,a),p=Math.max(o,l,h);let f=i.next;for(;f!==e;){if(f.x>=c&&f.x<=u&&f.y>=d&&f.y<=p&&Yn(s,o,n,l,a,h,f.x,f.y)&&xt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Av(r,e,t,i){const s=r.prev,n=r,a=r.next;if(xt(s,n,a)>=0)return!1;const o=s.x,l=n.x,h=a.x,c=s.y,d=n.y,u=a.y,p=Math.min(o,l,h),f=Math.min(c,d,u),_=Math.max(o,l,h),m=Math.max(c,d,u),g=rc(p,f,e,t,i),v=rc(_,m,e,t,i);let M=r.prevZ,x=r.nextZ;for(;M&&M.z>=g&&x&&x.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==s&&M!==a&&Yn(o,c,l,d,h,u,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==s&&x!==a&&Yn(o,c,l,d,h,u,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==s&&M!==a&&Yn(o,c,l,d,h,u,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==s&&x!==a&&Yn(o,c,l,d,h,u,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Cv(r,e){let t=r;do{const i=t.prev,s=t.next.next;!dn(i,s)&&im(i,t,t.next,s)&&va(i,s)&&va(s,i)&&(e.push(i.i,t.i,s.i),ya(t),ya(t.next),t=r=s),t=t.next}while(t!==r);return Es(t)}function Rv(r,e,t,i,s,n){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zv(a,o)){let l=rm(a,o);a=Es(a,a.next),l=Es(l,l.next),_a(a,e,t,i,s,n,0),_a(l,e,t,i,s,n,0);return}o=o.next}a=a.next}while(a!==r)}function Pv(r,e,t,i){const s=[];for(let n=0,a=e.length;n<a;n++){const o=e[n]*i,l=n<a-1?e[n+1]*i:r.length,h=em(r,o,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Fv(h))}s.sort(Lv);for(let n=0;n<s.length;n++)t=Dv(s[n],t);return t}function Lv(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Dv(r,e){const t=Iv(r,e);if(!t)return e;const i=rm(t,r);return Es(i,i.next),Es(t,t.next)}function Iv(r,e){let t=e;const i=r.x,s=r.y;let n=-1/0,a;if(dn(r,t))return t;do{if(dn(r,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>n&&(n=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,h=a.y;let c=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&tm(s<h?i:n,s,l,h,s<h?n:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);va(t,r)&&(d<c||d===c&&(t.x>a.x||t.x===a.x&&Uv(a,t)))&&(a=t,c=d)}t=t.next}while(t!==o);return a}function Uv(r,e){return xt(r.prev,r,e.prev)<0&&xt(e.next,r,r.next)<0}function Nv(r,e,t,i){let s=r;do s.z===0&&(s.z=rc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,Ov(s)}function Ov(r){let e,t=1;do{let i=r,s;r=null;let n=null;for(e=0;i;){e++;let a=i,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),n?n.nextZ=s:r=s,s.prevZ=n,n=s;i=a}n.nextZ=null,t*=2}while(e>1);return r}function rc(r,e,t,i,s){return r=(r-t)*s|0,e=(e-i)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Fv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function tm(r,e,t,i,s,n,a,o){return(s-a)*(e-o)>=(r-a)*(n-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(n-o)>=(s-a)*(i-o)}function Yn(r,e,t,i,s,n,a,o){return!(r===a&&e===o)&&tm(r,e,t,i,s,n,a,o)}function zv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!kv(r,e)&&(va(r,e)&&va(e,r)&&Bv(r,e)&&(xt(r.prev,r,e.prev)||xt(r,e.prev,e))||dn(r,e)&&xt(r.prev,r,r.next)>0&&xt(e.prev,e,e.next)>0)}function xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function dn(r,e){return r.x===e.x&&r.y===e.y}function im(r,e,t,i){const s=oo(xt(r,e,t)),n=oo(xt(r,e,i)),a=oo(xt(t,i,r)),o=oo(xt(t,i,e));return!!(s!==n&&a!==o||s===0&&ao(r,t,e)||n===0&&ao(r,i,e)||a===0&&ao(t,r,i)||o===0&&ao(t,e,i))}function ao(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function oo(r){return r>0?1:r<0?-1:0}function kv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&im(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function va(r,e){return xt(r.prev,r,r.next)<0?xt(r,e,r.next)>=0&&xt(r,r.prev,e)>=0:xt(r,e,r.prev)<0||xt(r,r.next,e)<0}function Bv(r,e){let t=r,i=!1;const s=(r.x+e.x)/2,n=(r.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&s<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function rm(r,e){const t=sc(r.i,r.x,r.y),i=sc(e.i,e.x,e.y),s=r.next,n=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function Pd(r,e,t,i){const s=sc(r,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ya(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function sc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hv(r,e,t,i){let s=0;for(let n=e,a=t-i;n<t;n+=i)s+=(r[a]-r[n])*(r[n+1]+r[a+1]),a=n;return s}class Vv{static triangulate(e,t,i=2){return wv(e,t,i)}}class sa{static area(e){const t=e.length;let i=0;for(let s=t-1,n=0;n<t;s=n++)i+=e[s].x*e[n].y-e[n].x*e[s].y;return i*.5}static isClockWise(e){return sa.area(e)<0}static triangulateShape(e,t){const i=[],s=[],n=[];Ld(e),Dd(i,e);let a=e.length;t.forEach(Ld);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Dd(i,t[l]);const o=Vv.triangulate(i,s);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function Ld(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Dd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oi extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,d=e/o,u=t/l,p=[],f=[],_=[],m=[];for(let g=0;g<c;g++){const v=g*u-a;for(let M=0;M<h;M++){const x=M*d-n;f.push(x,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const M=v+h*g,x=v+h*(g+1),w=v+1+h*(g+1),b=v+1+h*g;p.push(M,x,b),p.push(x,w,b)}this.setIndex(p),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class tu extends wt{constructor(e=.5,t=1,i=32,s=1,n=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:n,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],h=[],c=[];let d=e;const u=(t-e)/s,p=new P,f=new te;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const g=n+m/i*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),h.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,c.push(f.x,f.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let g=0;g<i;g++){const v=g+m,M=v,x=v+i+1,w=v+i+2,b=v+1;o.push(M,x,b),o.push(x,w,b)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Aa extends wt{constructor(e=new eu([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],n=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(n,3)),this.setAttribute("uv",new it(a,2));function h(c){const d=s.length/3,u=c.extractPoints(t);let p=u.shape;const f=u.holes;sa.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){const v=f[m];sa.isClockWise(v)===!0&&(f[m]=v.reverse())}const _=sa.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){const v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){const v=p[m];s.push(v.x,v.y,0),n.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){const v=_[m],M=v[0]+d,x=v[1]+d,w=v[2]+d;i.push(M,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Gv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,n=e.shapes.length;s<n;s++){const a=t[e.shapes[s]];i.push(a)}return new Aa(i,e.curveSegments)}}function Gv(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const s=r[t];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e}class pn extends wt{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const c=[],d=new P,u=new P,p=[],f=[],_=[],m=[];for(let g=0;g<=i;g++){const v=[],M=g/i;let x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const b=w/t;d.x=-e*Math.cos(s+b*n)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+b*n)*Math.sin(a+M*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+x,1-M),v.push(h++)}c.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){const M=c[g][v+1],x=c[g][v],w=c[g+1][v],b=c[g+1][v+1];(g!==0||a>0)&&p.push(M,x,b),(g!==i-1||l<Math.PI)&&p.push(x,w,b)}this.setIndex(p),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function fn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ii(r){const e={};for(let t=0;t<r.length;t++){const i=fn(r[t]);for(const s in i)e[s]=i[s]}return e}function Wv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const ko={clone:fn,merge:ii};var Xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fn(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qv extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ft extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pr extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yv extends ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Lc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iu extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kv extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Zv(r){function e(s,n){return r[s]-r[n]}const t=r.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Id(r,e,t){const i=r.length,s=new r.constructor(i);for(let n=0,a=0;a!==i;++n){const o=t[n]*e;for(let l=0;l!==e;++l)s[a++]=r[o+l]}return s}function nm(r,e,t,i){let s=1,n=r[0];for(;n!==void 0&&n[i]===void 0;)n=r[s++];if(n===void 0)return;let a=n[i];if(a!==void 0)if(Array.isArray(a))do a=n[i],a!==void 0&&(e.push(n.time),t.push(...a)),n=r[s++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[i],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=r[s++];while(n!==void 0);else do a=n[i],a!==void 0&&(e.push(n.time),t.push(a)),n=r[s++];while(n!==void 0)}class An{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],n=t[i-1];i:{e:{let a;t:{r:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=n,n=t[--i-1],e>=n)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,s)}return this.interpolate_(i,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s;for(let a=0;a!==s;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jv extends An{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(e,t,i){const s=this.parameterPositions;let n=e-2,a=e+1,o=s[n],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qu:n=e,o=2*t-i;break;case Yu:n=s.length-2,o=t+s[n]-s[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qu:a=e,l=2*i-t;break;case Yu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=n*c,this._offsetNext=a*c}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),_=f*f,m=_*f,g=-u*m+2*u*_-u*f,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,M=(-1-p)*m+(1.5+p)*_+.5*f,x=p*m-p*_;for(let w=0;w!==o;++w)n[w]=g*a[c+w]+v*a[h+w]+M*a[l+w]+x*a[d+w];return n}}class $v extends An{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(s-t),d=1-c;for(let u=0;u!==o;++u)n[u]=a[h+u]*d+a[l+u]*c;return n}}class Qv extends An{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class e0 extends An{interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this.settings||this.DefaultSettings_,d=c.inTangents,u=c.outTangents;if(!d||!u){const _=(i-t)/(s-t),m=1-_;for(let g=0;g!==o;++g)n[g]=a[h+g]*m+a[l+g]*_;return n}const p=o*2,f=e-1;for(let _=0;_!==o;++_){const m=a[h+_],g=a[l+_],v=f*p+_*2,M=u[v],x=u[v+1],w=e*p+_*2,b=d[w],A=d[w+1];let y=(i-t)/(s-t),T,U,R,L,N;for(let k=0;k<8;k++){T=y*y,U=T*y,R=1-y,L=R*R,N=L*R;const B=N*t+3*L*y*M+3*R*T*b+U*s-i;if(Math.abs(B)<1e-10)break;const z=3*L*(M-t)+6*R*y*(b-M)+3*T*(s-b);if(Math.abs(z)<1e-10)break;y=y-B/z,y=Math.max(0,Math.min(1,y))}n[_]=N*m+3*L*y*x+3*R*T*A+U*g}return n}}class Ki{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $v(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new e0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case pa:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break;case Xu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return al;case this.InterpolantFactoryMethodBezier:return Xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let n=0,a=s-1;for(;n!==s&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==s){n>=a&&(a=Math.max(a,1),n=a-1);const o=this.getValueSize();this.times=i.slice(n,a),this.values=this.values.slice(n*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,n=i.length;n===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==n;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&__(s))for(let o=0,l=s.length;o!==l;++o){const h=s[o];if(isNaN(h)){Le("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===al,n=e.length-1;let a=1;for(let o=1;o<n;++o){let l=!1;const h=e[o],c=e[o+1];if(h!==c&&(o!==1||h!==e[0]))if(s)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let f=0;f!==i;++f){const _=t[d+f];if(_!==t[u+f]||_!==t[p+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(n>0){e[a]=e[n];for(let o=n*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ki.prototype.ValueTypeName="";Ki.prototype.TimeBufferType=Float32Array;Ki.prototype.ValueBufferType=Float32Array;Ki.prototype.DefaultInterpolation=pa;class Cn extends Ki{constructor(e,t,i){super(e,t,i)}}Cn.prototype.ValueTypeName="bool";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=da;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;class am extends Ki{constructor(e,t,i,s){super(e,t,i,s)}}am.prototype.ValueTypeName="color";class mn extends Ki{constructor(e,t,i,s){super(e,t,i,s)}}mn.prototype.ValueTypeName="number";class t0 extends An{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let h=e*o;for(let c=h+o;h!==c;h+=4)pi.slerpFlat(n,0,a,h-o,a,h,l);return n}}class gn extends Ki{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}}gn.prototype.ValueTypeName="quaternion";gn.prototype.InterpolantFactoryMethodSmooth=void 0;class Rn extends Ki{constructor(e,t,i){super(e,t,i)}}Rn.prototype.ValueTypeName="string";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=da;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;class _n extends Ki{constructor(e,t,i,s){super(e,t,i,s)}}_n.prototype.ValueTypeName="vector";class i0{constructor(e="",t=-1,i=[],s=a_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(s0(i[a]).scale(s));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n.userData=JSON.parse(e.userData||"{}"),n}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let n=0,a=i.length;n!==a;++n)t.push(Ki.toJSON(i[n]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const n=t.length,a=[];for(let o=0;o<n;o++){let l=[],h=[];l.push((o+n-1)%n,o,(o+1)%n),h.push(0,1,0);const c=Zv(l);l=Id(l,1,c),h=Id(h,1,c),!s&&l[0]===0&&(l.push(n),h.push(h[0])),a.push(new mn(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],c=h.name.match(n);if(c&&c.length>1){const d=c[1];let u=s[d];u||(s[d]=u=[]),u.push(h)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Le("AnimationClip: No animation in JSONLoader data."),null;const i=function(c,d,u,p,f){if(u.length!==0){const _=[],m=[];nm(u,_,m,p),_.length!==0&&f.push(new c(d,_,m))}},s=[],n=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let f=0;f<d[p].morphTargets.length;f++)u[d[p].morphTargets[f]]=-1;for(const f in u){const _=[],m=[];for(let g=0;g!==d[p].morphTargets.length;++g){const v=d[p];_.push(v.time),m.push(v.morphTarget===f?1:0)}s.push(new mn(".morphTargetInfluence["+f+"]",_,m))}l=u.length*a}else{const u=".bones["+t[c].name+"]";i(_n,u+".position",d,"pos",s),i(gn,u+".quaternion",d,"rot",s),i(_n,u+".scale",d,"scl",s)}}return s.length===0?null:new this(n,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function r0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mn;case"vector":case"vector2":case"vector3":case"vector4":return _n;case"color":return am;case"quaternion":return gn;case"bool":case"boolean":return Cn;case"string":return Rn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function s0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=r0(r.type);if(r.times===void 0){const t=[],i=[];nm(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const wr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Ud(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Ud(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Ud(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class om{constructor(e,t,i){const s=this;let n=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,n===!1&&s.onStart!==void 0&&s.onStart(c,a,o),n=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){const d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){const p=h[d],f=h[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const n0=new om;class Pn{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mr={};class a0 extends Error{constructor(e,t){super(e),this.response=t}}class lm extends Pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=wr.get(`file:${e}`);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Mr[e]!==void 0){Mr[e].push({onLoad:t,onProgress:i,onError:s});return}Mr[e]=[],Mr[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=Mr[e],d=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=u?parseInt(u):0,f=p!==0;let _=0;const m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:x})=>{if(M)g.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:p});for(let b=0,A=c.length;b<A;b++){const y=c[b];y.onProgress&&y.onProgress(w)}g.enqueue(x),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new a0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o==="")return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,u=new TextDecoder(d);return h.arrayBuffer().then(p=>u.decode(p))}}}).then(h=>{wr.add(`file:${e}`,h);const c=Mr[e];delete Mr[e];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{const c=Mr[e];if(c===void 0)throw this.manager.itemError(e),h;delete Mr[e];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ws=new WeakMap;class o0 extends Pn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=wr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0);else{let d=Ws.get(a);d===void 0&&(d=[],Ws.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=ma("img");function l(){c(),t&&t(this);const d=Ws.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}Ws.delete(this),n.manager.itemEnd(e)}function h(d){c(),s&&s(d),wr.remove(`image:${e}`);const u=Ws.get(this)||[];for(let p=0;p<u.length;p++){const f=u[p];f.onError&&f.onError(d)}Ws.delete(this),n.manager.itemError(e),n.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wr.add(`image:${e}`,o),n.manager.itemStart(e),o.src=e,o}}class ru extends Pn{constructor(e){super(e)}load(e,t,i,s){const n=new Ht,a=new o0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}}class Ca extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class l0 extends Ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Nl=new Ne,Nd=new P,Od=new P;class su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ho=new P,co=new pi,Ji=new P;class hm extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,co,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,co,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ho,co,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,co,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new P,Fd=new te,zd=new te;class ri extends hm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cn*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,Fd,zd),t.subVectors(zd,Fd)}setViewOffset(e,t,i,s,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;n+=a.offsetX*s/l,t-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class h0 extends su{constructor(){super(new ri(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=cn*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;(i!==t.fov||s!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=s,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class c0 extends Ca{constructor(e,t,i=0,s=Math.PI/3,n=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=n,this.decay=a,this.map=null,this.shadow=new h0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class u0 extends su{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class nu extends Ca{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new u0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ra extends hm{constructor(e=-1,t=1,i=1,s=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,a=n+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d0 extends su{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nc extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new d0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class p0 extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class na{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ol=new WeakMap;class f0 extends Pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=wr.get(`image-bitmap:${e}`);if(a!==void 0){if(n.manager.itemStart(e),a.then){a.then(h=>{if(Ol.has(a)===!0)s&&s(Ol.get(a)),n.manager.itemError(e),n.manager.itemEnd(e);else return t&&t(h),n.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(h){return wr.add(`image-bitmap:${e}`,h),t&&t(h),n.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Ol.set(l,h),wr.remove(`image-bitmap:${e}`),n.manager.itemError(e),n.manager.itemEnd(e)});wr.add(`image-bitmap:${e}`,l),n.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xs=-90,js=1;class m0 extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ri(Xs,js,e,t);s.layers=this.layers,this.add(s);const n=new ri(Xs,js,e,t);n.layers=this.layers,this.add(n);const a=new ri(Xs,js,e,t);a.layers=this.layers,this.add(a);const o=new ri(Xs,js,e,t);o.layers=this.layers,this.add(o);const l=new ri(Xs,js,e,t);l.layers=this.layers,this.add(l);const h=new ri(Xs,js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,n,a,o,l]=t;for(const h of t)this.remove(h);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,o,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class g0 extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=v0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function v0(){this._document.hidden===!1&&this.reset()}const au="\\[\\]\\.:\\/",y0=new RegExp("["+au+"]","g"),ou="[^"+au+"]",x0="[^"+au.replace("\\.","")+"]",M0=/((?:WC+[\/:])*)/.source.replace("WC",ou),S0=/(WCOD+)?/.source.replace("WCOD",x0),b0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),w0=new RegExp("^"+M0+S0+b0+T0+"$"),E0=["material","materials","bones","map"];class A0{constructor(e,t,i){const s=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,n=i.length;s!==n;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y0,"")}static parseTrackName(e){const t=w0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const n=i.nodeName.substring(s+1);E0.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let a=0;a<n.length;a++){const o=n[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let n=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[s];if(a===void 0){const h=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=A0;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kd=new Ne;class C0{constructor(e,t,i=0,s=1/0){this.ray=new En(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(e,t=!0,i=[]){return ac(e,this,i,t),i.sort(Bd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,n=e.length;s<n;s++)ac(e[s],this,i,t);return i.sort(Bd),i}}function Bd(r,e){return r.distance-e.distance}function ac(r,e,t,i){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const n=r.children;for(let a=0,o=n.length;a<o;a++)ac(n[a],e,t,!0)}}class Hd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class R0 extends Cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vd(r,e,t,i){const s=P0(i);switch(t){case Of:return r*e;case Oc:return r*e/s.components*s.byteLength;case Fc:return r*e/s.components*s.byteLength;case hn:return r*e*2/s.components*s.byteLength;case zc:return r*e*2/s.components*s.byteLength;case Ff:return r*e*3/s.components*s.byteLength;case Di:return r*e*4/s.components*s.byteLength;case kc:return r*e*4/s.components*s.byteLength;case To:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eo:case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Th:return Math.max(r,16)*Math.max(e,8)/4;case Mh:case bh:return Math.max(r,8)*Math.max(e,8)/2;case wh:case Eh:case Ch:case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ah:case Ph:case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jh:case qh:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kh:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Jh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(r){switch(r){case yi:case Df:return{byteLength:1,components:1};case ca:case If:case Ti:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case lr:case Ic:case Li:return{byteLength:4,components:1};case Uf:case Nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);function cm(){let r=null,e=!1,t=null,i=null;function s(n,a){t(n,a),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function L0(r){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,d=h.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=r.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=r.SHORT;else if(h instanceof Uint32Array)p=r.UNSIGNED_INT;else if(h instanceof Int32Array)p=r.INT;else if(h instanceof Int8Array)p=r.BYTE;else if(h instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,h){const c=l.array,d=l.updateRanges;if(r.bindBuffer(h,o),d.length===0)r.bufferSubData(h,0,c);else{d.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<d.length;p++){const f=d[u],_=d[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,f=d.length;p<f;p++){const _=d[p];r.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:n,update:a}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,H0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ty=`#define PI 3.141592653589793
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
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
#endif`,Py=`uniform sampler2D dfgLUT;
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
}`,Ly=`
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hy=`#if defined( USE_POINTS_UV )
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
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gx=`float getShadowMask() {
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
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,zx=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Bx=`#define DISTANCE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,Yx=`#define LAMBERT
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
}`,Kx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,Qx=`#define PHONG
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
}`,eM=`#define PHONG
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
}`,tM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,sM=`#define TOON
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
}`,nM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,Be={alphahash_fragment:D0,alphahash_pars_fragment:I0,alphamap_fragment:U0,alphamap_pars_fragment:N0,alphatest_fragment:O0,alphatest_pars_fragment:F0,aomap_fragment:z0,aomap_pars_fragment:k0,batching_pars_vertex:B0,batching_vertex:H0,begin_vertex:V0,beginnormal_vertex:G0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:j0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:$0,color_pars_vertex:Q0,color_vertex:ey,common:ty,cube_uv_reflection_fragment:iy,defaultnormal_vertex:ry,displacementmap_pars_vertex:sy,displacementmap_vertex:ny,emissivemap_fragment:ay,emissivemap_pars_fragment:oy,colorspace_fragment:ly,colorspace_pars_fragment:hy,envmap_fragment:cy,envmap_common_pars_fragment:uy,envmap_pars_fragment:dy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ty,envmap_vertex:fy,fog_vertex:my,fog_pars_vertex:gy,fog_fragment:_y,fog_pars_fragment:vy,gradientmap_pars_fragment:yy,lightmap_pars_fragment:xy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Sy,lights_pars_begin:by,lights_toon_fragment:wy,lights_toon_pars_fragment:Ey,lights_phong_fragment:Ay,lights_phong_pars_fragment:Cy,lights_physical_fragment:Ry,lights_physical_pars_fragment:Py,lights_fragment_begin:Ly,lights_fragment_maps:Dy,lights_fragment_end:Iy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:Fy,map_fragment:zy,map_pars_fragment:ky,map_particle_fragment:By,map_particle_pars_fragment:Hy,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Wy,morphcolor_vertex:Xy,morphnormal_vertex:jy,morphtarget_pars_vertex:qy,morphtarget_vertex:Yy,normal_fragment_begin:Ky,normal_fragment_maps:Zy,normal_pars_fragment:Jy,normal_pars_vertex:$y,normal_vertex:Qy,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:rx,iridescence_pars_fragment:sx,opaque_fragment:nx,packing:ax,premultiplied_alpha_fragment:ox,project_vertex:lx,dithering_fragment:hx,dithering_pars_fragment:cx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:fx,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:_x,skinning_pars_vertex:vx,skinning_vertex:yx,skinnormal_vertex:xx,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:bx,tonemapping_pars_fragment:Tx,transmission_fragment:wx,transmission_pars_fragment:Ex,uv_pars_fragment:Ax,uv_pars_vertex:Cx,uv_vertex:Rx,worldpos_vertex:Px,background_vert:Lx,background_frag:Dx,backgroundCube_vert:Ix,backgroundCube_frag:Ux,cube_vert:Nx,cube_frag:Ox,depth_vert:Fx,depth_frag:zx,distance_vert:kx,distance_frag:Bx,equirect_vert:Hx,equirect_frag:Vx,linedashed_vert:Gx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:jx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:Kx,meshmatcap_frag:Zx,meshnormal_vert:Jx,meshnormal_frag:$x,meshphong_vert:Qx,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:iM,meshtoon_vert:rM,meshtoon_frag:sM,points_vert:nM,points_frag:aM,shadow_vert:oM,shadow_frag:lM,sprite_vert:hM,sprite_frag:cM},ce={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},tr={basic:{uniforms:ii([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ii([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ii([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ii([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ii([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Z(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ii([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ii([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ii([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ii([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ii([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ii([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:ii([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:ii([ce.lights,ce.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};tr.physical={uniforms:ii([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const uo={r:0,b:0,g:0},as=new Yi,uM=new Ne;function dM(r,e,t,i,s,n){const a=new Z(0);let o=s===!0?0:1,l,h,c=null,d=0,u=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=e.get(M,x)}return M}function f(v){let M=!1;const x=p(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,n),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===qo)?(h===void 0&&(h=new Oe(new Wi(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:fn(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),as.copy(M.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(as)),h.material.toneMapped=je.getTransfer(x.colorSpace)!==$e,(c!==x||d!==x.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,c=x,d=x.version,u=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Oe(new Oi(2,2),new Bt({name:"BackgroundMaterial",uniforms:fn(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(uo,sm(r)),t.buffers.color.setClear(uo.r,uo.g,uo.b,M,n)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:f,addToRenderList:_,dispose:g}}function pM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=u(null);let n=s,a=!1;function o(R,L,N,k,B){let z=!1;const H=d(R,k,N,L);n!==H&&(n=H,h(n.object)),z=p(R,k,N,B),z&&f(R,k,N,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(R,L,N,k),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function c(R){return r.deleteVertexArray(R)}function d(R,L,N,k){const B=k.wireframe===!0;let z=i[L.id];z===void 0&&(z={},i[L.id]=z);const H=R.isInstancedMesh===!0?R.id:0;let $=z[H];$===void 0&&($={},z[H]=$);let J=$[N.id];J===void 0&&(J={},$[N.id]=J);let oe=J[B];return oe===void 0&&(oe=u(l()),J[B]=oe),oe}function u(R){const L=[],N=[],k=[];for(let B=0;B<t;B++)L[B]=0,N[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:k,object:R,attributes:{},index:null}}function p(R,L,N,k){const B=n.attributes,z=L.attributes;let H=0;const $=N.getAttributes();for(const J in $)if($[J].location>=0){const oe=B[J];let de=z[J];if(de===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;H++}return n.attributesNum!==H||n.index!==k}function f(R,L,N,k){const B={},z=L.attributes;let H=0;const $=N.getAttributes();for(const J in $)if($[J].location>=0){let oe=z[J];oe===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),B[J]=de,H++}n.attributes=B,n.attributesNum=H,n.index=k}function _(){const R=n.newAttributes;for(let L=0,N=R.length;L<N;L++)R[L]=0}function m(R){g(R,0)}function g(R,L){const N=n.newAttributes,k=n.enabledAttributes,B=n.attributeDivisors;N[R]=1,k[R]===0&&(r.enableVertexAttribArray(R),k[R]=1),B[R]!==L&&(r.vertexAttribDivisor(R,L),B[R]=L)}function v(){const R=n.newAttributes,L=n.enabledAttributes;for(let N=0,k=L.length;N<k;N++)L[N]!==R[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function M(R,L,N,k,B,z,H){H===!0?r.vertexAttribIPointer(R,L,N,B,z):r.vertexAttribPointer(R,L,N,k,B,z)}function x(R,L,N,k){_();const B=k.attributes,z=N.getAttributes(),H=L.defaultAttributeValues;for(const $ in z){const J=z[$];if(J.location>=0){let oe=B[$];if(oe===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const de=oe.normalized,xe=oe.itemSize,Re=e.get(oe);if(Re===void 0)continue;const Ye=Re.buffer,ut=Re.type,Y=Re.bytesPerElement,ie=ut===r.INT||ut===r.UNSIGNED_INT||oe.gpuType===Ic;if(oe.isInterleavedBufferAttribute){const he=oe.data,Fe=he.stride,De=oe.offset;if(he.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)g(J.location+ve,he.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<J.locationSize;ve++)m(J.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ve=0;ve<J.locationSize;ve++)M(J.location+ve,xe/J.locationSize,ut,de,Fe*Y,(De+xe/J.locationSize*ve)*Y,ie)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)g(J.location+he,oe.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<J.locationSize;he++)m(J.location+he);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let he=0;he<J.locationSize;he++)M(J.location+he,xe/J.locationSize,ut,de,xe*Y,xe/J.locationSize*he*Y,ie)}}else if(H!==void 0){const de=H[$];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(J.location,de);break;case 3:r.vertexAttrib3fv(J.location,de);break;case 4:r.vertexAttrib4fv(J.location,de);break;default:r.vertexAttrib1fv(J.location,de)}}}}v()}function w(){T();for(const R in i){const L=i[R];for(const N in L){const k=L[N];for(const B in k){const z=k[B];for(const H in z)c(z[H].object),delete z[H];delete k[B]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;const L=i[R.id];for(const N in L){const k=L[N];for(const B in k){const z=k[B];for(const H in z)c(z[H].object),delete z[H];delete k[B]}}delete i[R.id]}function A(R){for(const L in i){const N=i[L];for(const k in N){const B=N[k];if(B[R.id]===void 0)continue;const z=B[R.id];for(const H in z)c(z[H].object),delete z[H];delete B[R.id]}}}function y(R){for(const L in i){const N=i[L],k=R.isInstancedMesh===!0?R.id:0,B=N[k];if(B!==void 0){for(const z in B){const H=B[z];for(const $ in H)c(H[$].object),delete H[$];delete B[z]}delete N[k],Object.keys(N).length===0&&delete i[L]}}}function T(){U(),a=!0,n!==s&&(n=s,h(n.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function fM(r,e,t){let i;function s(h){i=h}function n(h,c){r.drawArrays(i,h,c),t.update(c,i,1)}function a(h,c,d){d!==0&&(r.drawArraysInstanced(i,h,c,d),t.update(c,i,d))}function o(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];t.update(u,i,1)}function l(h,c,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)a(h[f],c[f],u[f]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=c[_]*u[_];t.update(f,i,1)}}this.setMode=s,this.render=n,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mM(r,e,t,i){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Di&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Li&&!y)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(be("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:w,samples:b}}function gM(r){const e=this;let t=null,i=0,s=!1,n=!1;const a=new br,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,p){const f=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!s||f===null||f.length===0||n&&!m)n?c(null):h();else{const v=n?0:i,M=v*4;let x=g.clippingState||null;l.value=x,x=c(f,u,M,p);for(let w=0;w!==M;++w)x[w]=t[w];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,p,f){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,f!==!0||m===null){const g=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,x=p;M!==_;++M,x+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Vr=4,Gd=[.125,.215,.35,.446,.526,.582],ms=20,_M=256,Bn=new Ra,Wd=new Z;let Fl=null,zl=0,kl=0,Bl=!1;const vM=new P;class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,n={}){const{size:a=256,position:o=vM}=n;Fl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,zl,kl),this._renderer.xr.enabled=Bl,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===ln?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ti,format:Di,colorSpace:ni,depthBuffer:!1},s=Xd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,t,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yM(n)),this._blurMaterial=MM(n,e,t),this._ggxMaterial=xM(n,e,t)}return s}_compileMaterial(e){const t=new Oe(new wt,e);this._renderer.compile(t,Bn)}_sceneToCubeUV(e,t,i,s,n){const a=new ri(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,d=h.toneMapping;h.getClearColor(Wd),h.toneMapping=or,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Wi,new oi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,p=u.material;let f=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,f=!0):(p.color.copy(Wd),f=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(n.x,n.y,n.z),a.lookAt(n.x+l[m],n.y,n.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(n.x,n.y,n.z),a.lookAt(n.x,n.y+l[m],n.z)):(a.up.set(0,o[m],0),a.position.set(n.x,n.y,n.z),a.lookAt(n.x,n.y,n.z+l[m]));const v=this._cubeSize;qs(s,g*v,m>2?v:0,v,v),h.setRenderTarget(s),f&&h.render(u,a),h.render(e,a)}h.toneMapping=d,h.autoClear=c,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ws||e.mapping===ln;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());const n=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=n;const o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let n=1;n<s;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,n=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,h=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=0+h*1.25,p=d*u,{_lodMax:f}=this,_=this._sizeLods[i],m=3*_*(i>f-Vr?i-f+Vr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=f-t,qs(n,m,g,3*_,2*_),s.setRenderTarget(n),s.render(o,Bn),l.envMap.value=n.texture,l.roughness.value=0,l.mipInt.value=f-i,qs(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(o,Bn)}_blur(e,t,i,s,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",n),this._halfBlur(a,e,i,i,s,"longitudinal",n)}_halfBlur(e,t,i,s,n,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[s];d.material=h;const u=h.uniforms,p=this._sizeLods[i]-1,f=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*ms-1),_=n/f,m=isFinite(n)?1+Math.floor(c*_):ms;m>ms&&be(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);const g=[];let v=0;for(let A=0;A<ms;++A){const y=A/_,T=Math.exp(-y*y/2);g.push(T),A===0?v+=T:A<m&&(v+=2*T)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=f,u.mipInt.value=M-i;const x=this._sizeLods[s],w=3*x*(s>M-Vr?s-M+Vr:0),b=4*(this._cubeSize-x);qs(t,w,b,3*x,2*x),l.setRenderTarget(t),l.render(d,Bn)}}function yM(r){const e=[],t=[],i=[];let s=r;const n=r-Vr+1+Gd.length;for(let a=0;a<n;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>r-Vr?l=Gd[a-r+Vr-1]:a===0&&(l=0),t.push(l);const h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,f=6,_=3,m=2,g=1,v=new Float32Array(_*f*p),M=new Float32Array(m*f*p),x=new Float32Array(g*f*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,y=b>2?0:-1,T=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(T,_*f*b),M.set(u,m*f*b);const U=[b,b,b,b,b,b];x.set(U,g*f*b)}const w=new wt;w.setAttribute("position",new Xt(v,_)),w.setAttribute("uv",new Xt(M,m)),w.setAttribute("faceIndex",new Xt(x,g)),i.push(new Oe(w,null)),s>Vr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xd(r,e,t){const i=new li(r,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function xM(r,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_M,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function MM(r,e,t){const i=new Float32Array(ms),s=new P(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function jd(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function qd(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}class um extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wi(5,5,5),n=new Bt({name:"CubemapFromEquirect",uniforms:fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:ar});n.uniforms.tEquirect.value=t;const a=new Oe(s,n),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=St),new m0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(n)}}function SM(r){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):n(u)}function n(u){if(u&&u.isTexture){const p=u.mapping;if(p===sl||p===nl)if(e.has(u)){const f=e.get(u).texture;return o(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const _=new um(f.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,f=p===sl||p===nl,_=p===ws||p===ln;if(f||_){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new oc(r)),m=f?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return f&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new oc(r)),m=f?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===sl?u.mapping=ws:p===nl&&(u.mapping=ln),u}function l(u){let p=0;const f=6;for(let _=0;_<f;_++)u[_]!==void 0&&p++;return p===f}function h(u){const p=u.target;p.removeEventListener("dispose",h);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function c(u){const p=u.target;p.removeEventListener("dispose",c);const f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function bM(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=r.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Oo("WebGLRenderer: "+i+" extension not supported."),s}}}function TM(r,e,t,i){const s={},n=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const f in u.attributes)e.remove(u.attributes[f]);u.removeEventListener("dispose",a),delete s[u.id];const p=n.get(u);p&&(e.remove(p),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],r.ARRAY_BUFFER)}function h(d){const u=[],p=d.index,f=d.attributes.position;let _=0;if(f===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const w=v[M+0],b=v[M+1],A=v[M+2];u.push(w,b,b,A,A,w)}}else{const v=f.array;_=f.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const w=M+0,b=M+1,A=M+2;u.push(w,b,b,A,A,w)}}const m=new(f.count>=65535?Xf:Wf)(u,1);m.version=_;const g=n.get(d);g&&e.remove(g),n.set(d,m)}function c(d){const u=n.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function wM(r,e,t){let i;function s(u){i=u}let n,a;function o(u){n=u.type,a=u.bytesPerElement}function l(u,p){r.drawElements(i,p,n,u*a),t.update(p,i,1)}function h(u,p,f){f!==0&&(r.drawElementsInstanced(i,p,n,u*a,f),t.update(p,i,f))}function c(u,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,n,u,0,f);let _=0;for(let m=0;m<f;m++)_+=p[m];t.update(_,i,1)}function d(u,p,f,_){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)h(u[g]/a,p[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,n,u,0,_,0,f);let g=0;for(let v=0;v<f;v++)g+=p[v]*_[v];t.update(g,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function EM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function AM(r,e,t){const i=new WeakMap,s=new dt;function n(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=o.attributes.position.count*x,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*b*4*d),y=new Hf(A,w,b,d);y.type=Li,y.needsUpdate=!0;const T=x*4;for(let U=0;U<d;U++){const R=g[U],L=v[U],N=M[U],k=w*b*4*U;for(let B=0;B<R.count;B++){const z=B*T;f===!0&&(s.fromBufferAttribute(R,B),A[k+z+0]=s.x,A[k+z+1]=s.y,A[k+z+2]=s.z,A[k+z+3]=0),_===!0&&(s.fromBufferAttribute(L,B),A[k+z+4]=s.x,A[k+z+5]=s.y,A[k+z+6]=s.z,A[k+z+7]=0),m===!0&&(s.fromBufferAttribute(N,B),A[k+z+8]=s.x,A[k+z+9]=s.y,A[k+z+10]=s.z,A[k+z+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:y,size:new te(w,b)},i.set(o,u),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];const f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",f),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:n}}function CM(r,e,t,i,s){let n=new WeakMap;function a(h){const c=s.render.frame,d=h.geometry,u=e.get(h,d);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==c&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){const p=h.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return u}function o(){n=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const RM={[Tf]:"LINEAR_TONE_MAPPING",[wf]:"REINHARD_TONE_MAPPING",[Ef]:"CINEON_TONE_MAPPING",[Dc]:"ACES_FILMIC_TONE_MAPPING",[Cf]:"AGX_TONE_MAPPING",[Rf]:"NEUTRAL_TONE_MAPPING",[Af]:"CUSTOM_TONE_MAPPING"};function PM(r,e,t,i,s){const n=new li(e,t,{type:r,depthBuffer:i,stencilBuffer:s}),a=new li(e,t,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),o=new wt;o.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new it([0,2,0,0,2,0],2));const l=new qv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Oe(o,l),c=new Ra(-1,1,1,-1,0,1);let d=null,u=null,p=!1,f,_=null,m=[],g=!1;this.setSize=function(v,M){n.setSize(v,M),a.setSize(v,M);for(let x=0;x<m.length;x++){const w=m[x];w.setSize&&w.setSize(v,M)}},this.setEffects=function(v){m=v,g=m.length>0&&m[0].isRenderPass===!0;const M=n.width,x=n.height;for(let w=0;w<m.length;w++){const b=m[w];b.setSize&&b.setSize(M,x)}},this.begin=function(v,M){if(p||v.toneMapping===or&&m.length===0)return!1;if(_=M,M!==null){const x=M.width,w=M.height;(n.width!==x||n.height!==w)&&this.setSize(x,w)}return g===!1&&v.setRenderTarget(n),f=v.toneMapping,v.toneMapping=or,!0},this.hasRenderPass=function(){return g},this.end=function(v,M){v.toneMapping=f,p=!0;let x=n,w=a;for(let b=0;b<m.length;b++){const A=m[b];if(A.enabled!==!1&&(A.render(v,w,x,M),A.needsSwap!==!1)){const y=x;x=w,w=y}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,l.defines={},je.getTransfer(d)===$e&&(l.defines.SRGB_TRANSFER="");const b=RM[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(h,c),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){n.dispose(),a.dispose(),o.dispose(),l.dispose()}}const dm=new Ht,lc=new ga(1,1),pm=new Hf,fm=new V_,mm=new Yf,Yd=[],Kd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),$d=new Float32Array(4);function Ln(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let n=Yd[s];if(n===void 0&&(n=new Float32Array(s),Yd[s]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(n,o)}return n}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function $o(r,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function LM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function DM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function NM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;$d.set(i),r.uniformMatrix2fv(this.addr,!1,$d),Gt(t,i)}}function OM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Jd.set(i),r.uniformMatrix3fv(this.addr,!1,Jd),Gt(t,i)}}function FM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Zd.set(i),r.uniformMatrix4fv(this.addr,!1,Zd),Gt(t,i)}}function zM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function VM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function WM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function jM(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let n;this.type===r.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?Vc:Hc,n=lc):n=dm,t.setTexture2D(e||n,s)}function qM(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fm,s)}function YM(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mm,s)}function KM(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pm,s)}function ZM(r){switch(r){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return OM;case 35676:return FM;case 5124:case 35670:return zM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return KM}}function JM(r,e){r.uniform1fv(this.addr,e)}function $M(r,e){const t=Ln(e,this.size,2);r.uniform2fv(this.addr,t)}function QM(r,e){const t=Ln(e,this.size,3);r.uniform3fv(this.addr,t)}function e1(r,e){const t=Ln(e,this.size,4);r.uniform4fv(this.addr,t)}function t1(r,e){const t=Ln(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function i1(r,e){const t=Ln(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function r1(r,e){const t=Ln(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function s1(r,e){r.uniform1iv(this.addr,e)}function n1(r,e){r.uniform2iv(this.addr,e)}function a1(r,e){r.uniform3iv(this.addr,e)}function o1(r,e){r.uniform4iv(this.addr,e)}function l1(r,e){r.uniform1uiv(this.addr,e)}function h1(r,e){r.uniform2uiv(this.addr,e)}function c1(r,e){r.uniform3uiv(this.addr,e)}function u1(r,e){r.uniform4uiv(this.addr,e)}function d1(r,e,t){const i=this.cache,s=e.length,n=$o(t,s);Vt(i,n)||(r.uniform1iv(this.addr,n),Gt(i,n));let a;this.type===r.SAMPLER_2D_SHADOW?a=lc:a=dm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,n[o])}function p1(r,e,t){const i=this.cache,s=e.length,n=$o(t,s);Vt(i,n)||(r.uniform1iv(this.addr,n),Gt(i,n));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fm,n[a])}function f1(r,e,t){const i=this.cache,s=e.length,n=$o(t,s);Vt(i,n)||(r.uniform1iv(this.addr,n),Gt(i,n));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||mm,n[a])}function m1(r,e,t){const i=this.cache,s=e.length,n=$o(t,s);Vt(i,n)||(r.uniform1iv(this.addr,n),Gt(i,n));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pm,n[a])}function g1(r){switch(r){case 5126:return JM;case 35664:return $M;case 35665:return QM;case 35666:return e1;case 35674:return t1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return n1;case 35668:case 35672:return a1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return h1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return m1}}class _1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZM(t.type)}}class v1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let n=0,a=s.length;n!==a;++n){const o=s[n];o.setValue(e,t[o.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Qd(r,e){r.seq.push(e),r.map[e.id]=e}function x1(r,e,t){const i=r.name,s=i.length;for(Hl.lastIndex=0;;){const n=Hl.exec(i),a=Hl.lastIndex;let o=n[1];const l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Qd(t,h===void 0?new _1(o,r,e):new v1(o,r,e));break}else{let c=t.map[o];c===void 0&&(c=new y1(o),Qd(t,c)),t=c}}}class Co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);x1(o,l,this)}const s=[],n=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):n.push(a);s.length>0&&(this.seq=s.concat(n))}setValue(e,t,i,s){const n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,a=t.length;n!==a;++n){const o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,n=e.length;s!==n;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ep(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const M1=37297;let S1=0;function b1(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=s;a<n;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const tp=new ze;function T1(r){je._getMatrix(tp,je.workingColorSpace,r);const e=`mat3( ${tp.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(r)){case Uo:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ip(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const n=/ERROR: 0:(\d+)/.exec(s);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+b1(r.getShaderSource(e),a)}else return s}function w1(r,e){const t=T1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const E1={[Tf]:"Linear",[wf]:"Reinhard",[Ef]:"Cineon",[Dc]:"ACESFilmic",[Cf]:"AgX",[Rf]:"Neutral",[Af]:"Custom"};function A1(r,e){const t=E1[e];return t===void 0?(be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new P;function C1(){je.getLuminanceCoefficients(po);const r=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kn).join(`
`)}function P1(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L1(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=r.getActiveAttrib(e,s),a=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Kn(r){return r!==""}function rp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(r){return r.replace(D1,U1)}const I1=new Map;function U1(r,e){let t=Be[e];if(t===void 0){const i=I1.get(e);if(i!==void 0)t=Be[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}const N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(r){return r.replace(N1,O1)}function O1(r,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function ap(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const F1={[So]:"SHADOWMAP_TYPE_PCF",[jn]:"SHADOWMAP_TYPE_VSM"};function z1(r){return F1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k1={[ws]:"ENVMAP_TYPE_CUBE",[ln]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function B1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":k1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const H1={[ln]:"ENVMAP_MODE_REFRACTION"};function V1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":H1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G1={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function W1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":G1[r.combine]||"ENVMAP_BLENDING_NONE"}function X1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function j1(r,e,t,i){const s=r.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=z1(t),h=B1(t),c=V1(t),d=W1(t),u=X1(t),p=R1(t),f=P1(n),_=s.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Kn).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Kn).join(`
`),g.length>0&&(g+=`
`)):(m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),g=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Be.tonemapping_pars_fragment:"",t.toneMapping!==or?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,w1("linearToOutputTexel",t.outputColorSpace),C1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kn).join(`
`)),a=hc(a),a=rp(a,t),a=sp(a,t),o=hc(o),o=rp(o,t),o=sp(o,t),a=np(a),o=np(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+m+a,x=v+g+o,w=ep(s,s.VERTEX_SHADER,M),b=ep(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(r.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(b)||"",B=L.trim(),z=N.trim(),H=k.trim();let $=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,_,w,b);else{const oe=ip(s,w,"vertex"),de=ip(s,b,"fragment");Le("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+oe+`
`+de)}else B!==""?be("WebGLProgram: Program Info Log:",B):(z===""||H==="")&&(J=!1);J&&(R.diagnostics={runnable:$,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(w),s.deleteShader(b),y=new Co(s,_),T=L1(s,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,M1)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let q1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),n=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K1(e),t.set(e,i)),i}}class K1{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}}function Z1(r,e,t,i,s,n){const a=new Xc,o=new Y1,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,U,R,L){const N=R.fog,k=L.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||B,z),$=H&&H.mapping===qo?H.image.height:null,J=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&be("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=oe!==void 0?oe.length:0;let xe=0;k.morphAttributes.position!==void 0&&(xe=1),k.morphAttributes.normal!==void 0&&(xe=2),k.morphAttributes.color!==void 0&&(xe=3);let Re,Ye,ut,Y;if(J){const Je=tr[J];Re=Je.vertexShader,Ye=Je.fragmentShader}else Re=y.vertexShader,Ye=y.fragmentShader,o.update(y),ut=o.getVertexShaderID(y),Y=o.getFragmentShaderID(y);const ie=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,ve=!!y.map,rt=!!y.matcap,st=!!H,Ve=!!y.aoMap,Ut=!!y.lightMap,Rt=!!y.bumpMap,qt=!!y.normalMap,D=!!y.displacementMap,Pt=!!y.emissiveMap,Ze=!!y.metalnessMap,ht=!!y.roughnessMap,Me=y.anisotropy>0,C=y.clearcoat>0,S=y.dispersion>0,O=y.iridescence>0,j=y.sheen>0,K=y.transmission>0,q=Me&&!!y.anisotropyMap,Se=C&&!!y.clearcoatMap,ae=C&&!!y.clearcoatNormalMap,Ee=C&&!!y.clearcoatRoughnessMap,Te=O&&!!y.iridescenceMap,Q=O&&!!y.iridescenceThicknessMap,se=j&&!!y.sheenColorMap,we=j&&!!y.sheenRoughnessMap,ye=!!y.specularMap,pe=!!y.specularColorMap,We=!!y.specularIntensityMap,I=K&&!!y.transmissionMap,le=K&&!!y.thicknessMap,re=!!y.gradientMap,ge=!!y.alphaMap,ee=y.alphaTest>0,X=!!y.alphaHash,_e=!!y.extensions;let Pe=or;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Pe=r.toneMapping);const Nt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Re,fragmentShader:Ye,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ni,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:rt,envMap:st,envMapMode:st&&H.mapping,envMapCubeUVHeight:$,aoMap:Ve,lightMap:Ut,bumpMap:Rt,normalMap:qt,displacementMap:D,emissiveMap:Pt,normalMapObjectSpace:qt&&y.normalMapType===h_,normalMapTangentSpace:qt&&y.normalMapType===Bc,metalnessMap:Ze,roughnessMap:ht,anisotropy:Me,anisotropyMap:q,clearcoat:C,clearcoatMap:Se,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:O,iridescenceMap:Te,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:se,sheenRoughnessMap:we,specularMap:ye,specularColorMap:pe,specularIntensityMap:We,transmission:K,transmissionMap:I,thicknessMap:le,gradientMap:re,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:X,combine:y.combine,mapUv:ve&&f(y.map.channel),aoMapUv:Ve&&f(y.aoMap.channel),lightMapUv:Ut&&f(y.lightMap.channel),bumpMapUv:Rt&&f(y.bumpMap.channel),normalMapUv:qt&&f(y.normalMap.channel),displacementMapUv:D&&f(y.displacementMap.channel),emissiveMapUv:Pt&&f(y.emissiveMap.channel),metalnessMapUv:Ze&&f(y.metalnessMap.channel),roughnessMapUv:ht&&f(y.roughnessMap.channel),anisotropyMapUv:q&&f(y.anisotropyMap.channel),clearcoatMapUv:Se&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:se&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&f(y.sheenRoughnessMap.channel),specularMapUv:ye&&f(y.specularMap.channel),specularColorMapUv:pe&&f(y.specularColorMap.channel),specularIntensityMapUv:We&&f(y.specularIntensityMap.channel),transmissionMapUv:I&&f(y.transmissionMap.channel),thicknessMapUv:le&&f(y.thicknessMap.channel),alphaMapUv:ge&&f(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(qt||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(ve||ge),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&qt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===$e,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===$e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const T=p[y.type];let U;if(T){const R=tr[T];U=ko.clone(R.uniforms)}else U=y.uniforms;return U}function x(y,T){let U=c.get(T);return U!==void 0?++U.usedTimes:(U=new j1(r,T,y,s),h.push(U),c.set(T,U)),U}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),c.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:A}}function J1(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:n}}function $1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function op(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lp(){const r=[];let e=0;const t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,f,_,m,g){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:f,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=f,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=m,v.group=g),e++,v}function l(u,p,f,_,m,g){const v=o(u,p,f,_,m,g);f.transmission>0?i.push(v):f.transparent===!0?s.push(v):t.push(v)}function h(u,p,f,_,m,g){const v=o(u,p,f,_,m,g);f.transmission>0?i.unshift(v):f.transparent===!0?s.unshift(v):t.unshift(v)}function c(u,p){t.length>1&&t.sort(u||$1),i.length>1&&i.sort(p||op),s.length>1&&s.sort(p||op)}function d(){for(let u=e,p=r.length;u<p;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:l,unshift:h,finish:d,sort:c}}function Q1(){let r=new WeakMap;function e(i,s){const n=r.get(i);let a;return n===void 0?(a=new lp,r.set(i,[a])):s>=n.length?(a=new lp,n.push(a)):a=n[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function eS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Z};break;case"SpotLight":t={position:new P,direction:new P,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":t={color:new Z,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function tS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iS=0;function rS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sS(r){const e=new eS,t=tS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,n=new Ne,a=new Ne;function o(h){let c=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,f=0,_=0,m=0,g=0,v=0,M=0,x=0,w=0,b=0,A=0;h.sort(rS);for(let T=0,U=h.length;T<U;T++){const R=h[T],L=R.color,N=R.intensity,k=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===hn?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=L.r*N,d+=L.g*N,u+=L.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],N);A++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const H=R.shadow,$=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=z,p++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=k,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[_]=z;const H=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,H.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[_]=H.matrix,R.castShadow){const $=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=B,x++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const H=R.shadow,$=t.get(R);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,i.pointShadow[f]=$,i.pointShadowMap[f]=B,i.pointShadowMatrix[f]=R.shadow.matrix,M++}i.point[f]=z,f++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[g]=z,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const y=i.hash;(y.directionalLength!==p||y.pointLength!==f||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==v||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==w||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=f,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,y.directionalLength=p,y.pointLength=f,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=v,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=w,y.numLightProbes=A,i.version=iS++)}function l(h,c){let d=0,u=0,p=0,f=0,_=0;const m=c.matrixWorldInverse;for(let g=0,v=h.length;g<v;g++){const M=h[g];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),n.copy(M.matrixWorld),n.premultiply(m),a.extractRotation(n),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),f++}else if(M.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function hp(r){const e=new sS(r),t=[],i=[];function s(c){h.camera=c,t.length=0,i.length=0}function n(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:a}}function nS(r){let e=new WeakMap;function t(s,n=0){const a=e.get(s);let o;return a===void 0?(o=new hp(r),e.set(s,[o])):n>=a.length?(o=new hp(r),a.push(o)):o=a[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
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
}`,lS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],hS=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],cp=new Ne,Hn=new P,Vl=new P;function cS(r,e,t){let i=new Ko;const s=new te,n=new te,a=new dt,o=new iu,l=new Kv,h={},c=t.maxTextureSize,d={[Ar]:Kt,[Kt]:Ar,[mt]:mt},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:aS,fragmentShader:oS}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const f=new wt;f.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let g=this.type;this.render=function(b,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===bf&&(be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=So);const T=r.getRenderTarget(),U=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),L=r.state;L.setBlending(ar),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=g!==this.type;N&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(B=>B.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,B=b.length;k<B;k++){const z=b[k],H=z.shadow;if(H===void 0){be("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const $=H.getFrameExtents();s.multiply($),n.copy(H.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(n.x=Math.floor(c/$.x),s.x=n.x*$.x,H.mapSize.x=n.x),s.y>c&&(n.y=Math.floor(c/$.y),s.y=n.y*$.y,H.mapSize.y=n.y));const J=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=J,H.map===null||N===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===jn){if(z.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new li(s.x,s.y,{format:hn,type:Ti,minFilter:St,magFilter:St,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new ga(s.x,s.y,Li),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Cr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt}else z.isPointLight?(H.map=new um(s.x),H.map.depthTexture=new uv(s.x,lr)):(H.map=new li(s.x,s.y),H.map.depthTexture=new ga(s.x,s.y,lr)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Cr,this.type===So?(H.map.depthTexture.compareFunction=J?Vc:Hc,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt);H.camera.updateProjectionMatrix()}const oe=H.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<oe;de++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,de),r.clear();else{de===0&&(r.setRenderTarget(H.map),r.clear());const xe=H.getViewport(de);a.set(n.x*xe.x,n.y*xe.y,n.x*xe.z,n.y*xe.w),L.viewport(a)}if(z.isPointLight){const xe=H.camera,Re=H.matrix,Ye=z.distance||xe.far;Ye!==xe.far&&(xe.far=Ye,xe.updateProjectionMatrix()),Hn.setFromMatrixPosition(z.matrixWorld),xe.position.copy(Hn),Vl.copy(xe.position),Vl.add(lS[de]),xe.up.copy(hS[de]),xe.lookAt(Vl),xe.updateMatrixWorld(),Re.makeTranslation(-Hn.x,-Hn.y,-Hn.z),cp.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(cp,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(z);i=H.getFrustum(),x(A,y,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&v(H,y),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(T,U,R)};function v(b,A){const y=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new li(s.x,s.y,{format:hn,type:Ti})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,y,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,y,p,_,null)}function M(b,A,y,T){let U=null;const R=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)U=R;else if(U=y.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=U.uuid,N=A.uuid;let k=h[L];k===void 0&&(k={},h[L]=k);let B=k[N];B===void 0&&(B=U.clone(),k[N]=B,A.addEventListener("dispose",w)),U=B}if(U.visible=A.visible,U.wireframe=A.wireframe,T===jn?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:d[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const L=r.properties.get(U);L.light=y}return U}function x(b,A,y,T,U){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===jn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const L=e.update(b),N=b.material;if(Array.isArray(N)){const k=L.groups;for(let B=0,z=k.length;B<z;B++){const H=k[B],$=N[H.materialIndex];if($&&$.visible){const J=M(b,$,T,U);b.onBeforeShadow(r,b,A,y,L,J,H),r.renderBufferDirect(y,null,L,J,b,H),b.onAfterShadow(r,b,A,y,L,J,H)}}}else if(N.visible){const k=M(b,N,T,U);b.onBeforeShadow(r,b,A,y,L,k,null),r.renderBufferDirect(y,null,L,k,b,null),b.onAfterShadow(r,b,A,y,L,k,null)}}const R=b.children;for(let L=0,N=R.length;L<N;L++)x(R[L],A,y,T,U)}function w(b){b.target.removeEventListener("dispose",w);for(const A in h){const y=h[A],T=b.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function uS(r,e){function t(){let I=!1;const le=new dt;let re=null;const ge=new dt(0,0,0,0);return{setMask:function(ee){re!==ee&&!I&&(r.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){I=ee},setClear:function(ee,X,_e,Pe,Nt){Nt===!0&&(ee*=Pe,X*=Pe,_e*=Pe),le.set(ee,X,_e,Pe),ge.equals(le)===!1&&(r.clearColor(ee,X,_e,Pe),ge.copy(le))},reset:function(){I=!1,re=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,re=null,ge=null,ee=null;return{setReversed:function(X){if(le!==X){const _e=e.get("EXT_clip_control");X?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),le=X;const Pe=ee;ee=null,this.setClear(Pe)}},getReversed:function(){return le},setTest:function(X){X?ie(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(X){re!==X&&!I&&(r.depthMask(X),re=X)},setFunc:function(X){if(le&&(X=x_[X]),ge!==X){switch(X){case fh:r.depthFunc(r.NEVER);break;case mh:r.depthFunc(r.ALWAYS);break;case gh:r.depthFunc(r.LESS);break;case on:r.depthFunc(r.LEQUAL);break;case _h:r.depthFunc(r.EQUAL);break;case vh:r.depthFunc(r.GEQUAL);break;case yh:r.depthFunc(r.GREATER);break;case xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=X}},setLocked:function(X){I=X},setClear:function(X){ee!==X&&(ee=X,le&&(X=1-X),r.clearDepth(X))},reset:function(){I=!1,re=null,ge=null,ee=null,le=!1}}}function s(){let I=!1,le=null,re=null,ge=null,ee=null,X=null,_e=null,Pe=null,Nt=null;return{setTest:function(Je){I||(Je?ie(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(Je){le!==Je&&!I&&(r.stencilMask(Je),le=Je)},setFunc:function(Je,fr,mr){(re!==Je||ge!==fr||ee!==mr)&&(r.stencilFunc(Je,fr,mr),re=Je,ge=fr,ee=mr)},setOp:function(Je,fr,mr){(X!==Je||_e!==fr||Pe!==mr)&&(r.stencilOp(Je,fr,mr),X=Je,_e=fr,Pe=mr)},setLocked:function(Je){I=Je},setClear:function(Je){Nt!==Je&&(r.clearStencil(Je),Nt=Je)},reset:function(){I=!1,le=null,re=null,ge=null,ee=null,X=null,_e=null,Pe=null,Nt=null}}}const n=new t,a=new i,o=new s,l=new WeakMap,h=new WeakMap;let c={},d={},u=new WeakMap,p=[],f=null,_=!1,m=null,g=null,v=null,M=null,x=null,w=null,b=null,A=new Z(0,0,0),y=0,T=!1,U=null,R=null,L=null,N=null,k=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),z=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=H>=2);let J=null,oe={};const de=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Re=new dt().fromArray(de),Ye=new dt().fromArray(xe);function ut(I,le,re,ge){const ee=new Uint8Array(4),X=r.createTexture();r.bindTexture(I,X),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<re;_e++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(le+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return X}const Y={};Y[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(on),Rt(!1),qt(Hu),ie(r.CULL_FACE),Ve(ar);function ie(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function he(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function Fe(I,le){return d[I]!==le?(r.bindFramebuffer(I,le),d[I]=le,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le),!0):!1}function De(I,le){let re=p,ge=!1;if(I){re=u.get(le),re===void 0&&(re=[],u.set(le,re));const ee=I.textures;if(re.length!==ee.length||re[0]!==r.COLOR_ATTACHMENT0){for(let X=0,_e=ee.length;X<_e;X++)re[X]=r.COLOR_ATTACHMENT0+X;re.length=ee.length,ge=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,ge=!0);ge&&r.drawBuffers(re)}function ve(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const rt={[fs]:r.FUNC_ADD,[Bg]:r.FUNC_SUBTRACT,[Hg]:r.FUNC_REVERSE_SUBTRACT};rt[Vg]=r.MIN,rt[Gg]=r.MAX;const st={[Wg]:r.ZERO,[Xg]:r.ONE,[jg]:r.SRC_COLOR,[dh]:r.SRC_ALPHA,[$g]:r.SRC_ALPHA_SATURATE,[Zg]:r.DST_COLOR,[Yg]:r.DST_ALPHA,[qg]:r.ONE_MINUS_SRC_COLOR,[ph]:r.ONE_MINUS_SRC_ALPHA,[Jg]:r.ONE_MINUS_DST_COLOR,[Kg]:r.ONE_MINUS_DST_ALPHA,[Qg]:r.CONSTANT_COLOR,[e_]:r.ONE_MINUS_CONSTANT_COLOR,[t_]:r.CONSTANT_ALPHA,[i_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(I,le,re,ge,ee,X,_e,Pe,Nt,Je){if(I===ar){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(ie(r.BLEND),_=!0),I!==kg){if(I!==m||Je!==T){if((g!==fs||x!==fs)&&(r.blendEquation(r.FUNC_ADD),g=fs,x=fs),Je)switch(I){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ha:r.blendFunc(r.ONE,r.ONE);break;case Vu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",I);break}else switch(I){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ha:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vu:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",I);break}v=null,M=null,w=null,b=null,A.set(0,0,0),y=0,m=I,T=Je}return}ee=ee||le,X=X||re,_e=_e||ge,(le!==g||ee!==x)&&(r.blendEquationSeparate(rt[le],rt[ee]),g=le,x=ee),(re!==v||ge!==M||X!==w||_e!==b)&&(r.blendFuncSeparate(st[re],st[ge],st[X],st[_e]),v=re,M=ge,w=X,b=_e),(Pe.equals(A)===!1||Nt!==y)&&(r.blendColor(Pe.r,Pe.g,Pe.b,Nt),A.copy(Pe),y=Nt),m=I,T=!1}function Ut(I,le){I.side===mt?he(r.CULL_FACE):ie(r.CULL_FACE);let re=I.side===Kt;le&&(re=!re),Rt(re),I.blending===xs&&I.transparent===!1?Ve(ar):Ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),n.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(I){U!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),U=I)}function qt(I){I!==Fg?(ie(r.CULL_FACE),I!==R&&(I===Hu?r.cullFace(r.BACK):I===zg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),R=I}function D(I){I!==L&&(z&&r.lineWidth(I),L=I)}function Pt(I,le,re){I?(ie(r.POLYGON_OFFSET_FILL),(N!==le||k!==re)&&(N=le,k=re,a.getReversed()&&(le=-le),r.polygonOffset(le,re))):he(r.POLYGON_OFFSET_FILL)}function Ze(I){I?ie(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function ht(I){I===void 0&&(I=r.TEXTURE0+B-1),J!==I&&(r.activeTexture(I),J=I)}function Me(I,le,re){re===void 0&&(J===null?re=r.TEXTURE0+B-1:re=J);let ge=oe[re];ge===void 0&&(ge={type:void 0,texture:void 0},oe[re]=ge),(ge.type!==I||ge.texture!==le)&&(J!==re&&(r.activeTexture(re),J=re),r.bindTexture(I,le||Y[I]),ge.type=I,ge.texture=le)}function C(){const I=oe[J];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function j(){try{r.texSubImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function K(){try{r.texSubImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function ae(){try{r.texStorage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function Ee(){try{r.texStorage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function Te(){try{r.texImage2D(...arguments)}catch(I){Le("WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){Le("WebGLState:",I)}}function se(I){Re.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function we(I){Ye.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function ye(I,le){let re=h.get(le);re===void 0&&(re=new WeakMap,h.set(le,re));let ge=re.get(I);ge===void 0&&(ge=r.getUniformBlockIndex(le,I.name),re.set(I,ge))}function pe(I,le){const re=h.get(le).get(I);l.get(le)!==re&&(r.uniformBlockBinding(le,re,I.__bindingPointIndex),l.set(le,re))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},J=null,oe={},d={},u=new WeakMap,p=[],f=null,_=!1,m=null,g=null,v=null,M=null,x=null,w=null,b=null,A=new Z(0,0,0),y=0,T=!1,U=null,R=null,L=null,N=null,k=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:ie,disable:he,bindFramebuffer:Fe,drawBuffers:De,useProgram:ve,setBlending:Ve,setMaterial:Ut,setFlipSided:Rt,setCullFace:qt,setLineWidth:D,setPolygonOffset:Pt,setScissorTest:Ze,activeTexture:ht,bindTexture:Me,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Te,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:se,viewport:we,reset:We}}function dS(r,e,t,i,s,n,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new te,c=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,S){return p?new OffscreenCanvas(C,S):ma("canvas")}function _(C,S,O){let j=1;const K=Me(C);if((K.width>O||K.height>O)&&(j=O/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(j*K.width),Se=Math.floor(j*K.height);d===void 0&&(d=f(q,Se));const ae=S?f(q,Se):d;return ae.width=q,ae.height=Se,ae.getContext("2d").drawImage(C,0,0,q,Se),be("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Se+")."),ae}else return"data"in C&&be("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,S,O,j,K=!1){if(C!==null){if(r[C]!==void 0)return r[C];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=S;if(S===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),S===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RG8UI),O===r.UNSIGNED_SHORT&&(q=r.RG16UI),O===r.UNSIGNED_INT&&(q=r.RG32UI),O===r.BYTE&&(q=r.RG8I),O===r.SHORT&&(q=r.RG16I),O===r.INT&&(q=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGB8UI),O===r.UNSIGNED_SHORT&&(q=r.RGB16UI),O===r.UNSIGNED_INT&&(q=r.RGB32UI),O===r.BYTE&&(q=r.RGB8I),O===r.SHORT&&(q=r.RGB16I),O===r.INT&&(q=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),O===r.UNSIGNED_INT&&(q=r.RGBA32UI),O===r.BYTE&&(q=r.RGBA8I),O===r.SHORT&&(q=r.RGBA16I),O===r.INT&&(q=r.RGBA32I)),S===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),S===r.RGBA){const Se=K?Uo:je.getTransfer(j);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=Se===$e?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(C,S){let O;return C?S===null||S===lr||S===ua?O=r.DEPTH24_STENCIL8:S===Li?O=r.DEPTH32F_STENCIL8:S===ca&&(O=r.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===lr||S===ua?O=r.DEPTH_COMPONENT24:S===Li?O=r.DEPTH_COMPONENT32F:S===ca&&(O=r.DEPTH_COMPONENT16),O}function w(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==St?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function b(C){const S=C.target;S.removeEventListener("dispose",b),y(S),S.isVideoTexture&&c.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),U(S)}function y(C){const S=i.get(C);if(S.__webglInit===void 0)return;const O=C.source,j=u.get(O);if(j){const K=j[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(C),Object.keys(j).length===0&&u.delete(O)}i.remove(C)}function T(C){const S=i.get(C);r.deleteTexture(S.__webglTexture);const O=C.source,j=u.get(O);delete j[S.__cacheKey],a.memory.textures--}function U(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let K=0;K<S.__webglFramebuffer[j].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[j][K]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let j=0,K=O.length;j<K;j++){const q=i.get(O[j]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[j])}i.remove(C)}let R=0;function L(){R=0}function N(){const C=R;return C>=s.maxTextures&&be("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function B(C,S){const O=i.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const j=C.image;if(j===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,C,S);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function z(C,S){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Y(O,C,S);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function H(C,S){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Y(O,C,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function $(C,S){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){ie(O,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const J={[qi]:r.REPEAT,[Mi]:r.CLAMP_TO_EDGE,[Io]:r.MIRRORED_REPEAT},oe={[zt]:r.NEAREST,[Lf]:r.NEAREST_MIPMAP_NEAREST,[qn]:r.NEAREST_MIPMAP_LINEAR,[St]:r.LINEAR,[bo]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},de={[c_]:r.NEVER,[m_]:r.ALWAYS,[u_]:r.LESS,[Hc]:r.LEQUAL,[d_]:r.EQUAL,[Vc]:r.GEQUAL,[p_]:r.GREATER,[f_]:r.NOTEQUAL};function xe(C,S){if(S.type===Li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===St||S.magFilter===bo||S.magFilter===qn||S.magFilter===rr||S.minFilter===St||S.minFilter===bo||S.minFilter===qn||S.minFilter===rr)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,J[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,J[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,J[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,oe[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==qn&&S.minFilter!==rr||S.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Re(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const q=k(S);if(q!==C.__cacheKey){K[q]===void 0&&(K[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;const Se=K[C.__cacheKey];Se!==void 0&&(K[C.__cacheKey].usedTimes--,Se.usedTimes===0&&T(S)),C.__cacheKey=q,C.__webglTexture=K[q].texture}return O}function Ye(C,S,O){return Math.floor(Math.floor(C/O)/S)}function ut(C,S,O,j){const K=C.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,O,j,S.data);else{K.sort((Te,Q)=>Te.start-Q.start);let q=0;for(let Te=1;Te<K.length;Te++){const Q=K[q],se=K[Te],we=Q.start+Q.count,ye=Ye(se.start,S.width,4),pe=Ye(Q.start,S.width,4);se.start<=we+1&&ye===pe&&Ye(se.start+se.count-1,S.width,4)===ye?Q.count=Math.max(Q.count,se.start+se.count-Q.start):(++q,K[q]=se)}K.length=q+1;const Se=r.getParameter(r.UNPACK_ROW_LENGTH),ae=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Te=0,Q=K.length;Te<Q;Te++){const se=K[Te],we=Math.floor(se.start/4),ye=Math.ceil(se.count/4),pe=we%S.width,We=Math.floor(we/S.width),I=ye;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,We),t.texSubImage2D(r.TEXTURE_2D,0,pe,We,I,1,O,j,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function Y(C,S,O){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const K=Re(C,S),q=S.source;t.bindTexture(j,C.__webglTexture,r.TEXTURE0+O);const Se=i.get(q);if(q.version!==Se.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const ae=je.getPrimaries(je.workingColorSpace),Ee=S.colorSpace===Br?null:je.getPrimaries(S.colorSpace),Te=S.colorSpace===Br||ae===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Q=_(S.image,!1,s.maxTextureSize);Q=ht(S,Q);const se=n.convert(S.format,S.colorSpace),we=n.convert(S.type);let ye=M(S.internalFormat,se,we,S.colorSpace,S.isVideoTexture);xe(j,S);let pe;const We=S.mipmaps,I=S.isVideoTexture!==!0,le=Se.__version===void 0||K===!0,re=q.dataReady,ge=w(S,Q);if(S.isDepthTexture)ye=x(S.format===_s,S.type),le&&(I?t.texStorage2D(r.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,ye,Q.width,Q.height,0,se,we,null));else if(S.isDataTexture)if(We.length>0){I&&le&&t.texStorage2D(r.TEXTURE_2D,ge,ye,We[0].width,We[0].height);for(let ee=0,X=We.length;ee<X;ee++)pe=We[ee],I?re&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,pe.width,pe.height,se,we,pe.data):t.texImage2D(r.TEXTURE_2D,ee,ye,pe.width,pe.height,0,se,we,pe.data);S.generateMipmaps=!1}else I?(le&&t.texStorage2D(r.TEXTURE_2D,ge,ye,Q.width,Q.height),re&&ut(S,Q,se,we)):t.texImage2D(r.TEXTURE_2D,0,ye,Q.width,Q.height,0,se,we,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ye,We[0].width,We[0].height,Q.depth);for(let ee=0,X=We.length;ee<X;ee++)if(pe=We[ee],S.format!==Di)if(se!==null)if(I){if(re)if(S.layerUpdates.size>0){const _e=Vd(pe.width,pe.height,S.format,S.type);for(const Pe of S.layerUpdates){const Nt=pe.data.subarray(Pe*_e/pe.data.BYTES_PER_ELEMENT,(Pe+1)*_e/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Pe,pe.width,pe.height,1,se,Nt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,Q.depth,se,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,Q.depth,se,we,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,Q.depth,0,se,we,pe.data)}else{I&&le&&t.texStorage2D(r.TEXTURE_2D,ge,ye,We[0].width,We[0].height);for(let ee=0,X=We.length;ee<X;ee++)pe=We[ee],S.format!==Di?se!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ye,pe.width,pe.height,0,pe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,pe.width,pe.height,se,we,pe.data):t.texImage2D(r.TEXTURE_2D,ee,ye,pe.width,pe.height,0,se,we,pe.data)}else if(S.isDataArrayTexture)if(I){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ye,Q.width,Q.height,Q.depth),re)if(S.layerUpdates.size>0){const ee=Vd(Q.width,Q.height,S.format,S.type);for(const X of S.layerUpdates){const _e=Q.data.subarray(X*ee/Q.data.BYTES_PER_ELEMENT,(X+1)*ee/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,se,we,_e)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,se,we,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,se,we,Q.data);else if(S.isData3DTexture)I?(le&&t.texStorage3D(r.TEXTURE_3D,ge,ye,Q.width,Q.height,Q.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,se,we,Q.data)):t.texImage3D(r.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,se,we,Q.data);else if(S.isFramebufferTexture){if(le)if(I)t.texStorage2D(r.TEXTURE_2D,ge,ye,Q.width,Q.height);else{let ee=Q.width,X=Q.height;for(let _e=0;_e<ge;_e++)t.texImage2D(r.TEXTURE_2D,_e,ye,ee,X,0,se,we,null),ee>>=1,X>>=1}}else if(We.length>0){if(I&&le){const ee=Me(We[0]);t.texStorage2D(r.TEXTURE_2D,ge,ye,ee.width,ee.height)}for(let ee=0,X=We.length;ee<X;ee++)pe=We[ee],I?re&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,se,we,pe):t.texImage2D(r.TEXTURE_2D,ee,ye,se,we,pe);S.generateMipmaps=!1}else if(I){if(le){const ee=Me(Q);t.texStorage2D(r.TEXTURE_2D,ge,ye,ee.width,ee.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,we,Q)}else t.texImage2D(r.TEXTURE_2D,0,ye,se,we,Q);m(S)&&g(j),Se.__version=q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ie(C,S,O){if(S.image.length!==6)return;const j=Re(C,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const q=i.get(K);if(K.version!==q.__version||j===!0){t.activeTexture(r.TEXTURE0+O);const Se=je.getPrimaries(je.workingColorSpace),ae=S.colorSpace===Br?null:je.getPrimaries(S.colorSpace),Ee=S.colorSpace===Br||Se===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,se=[];for(let X=0;X<6;X++)!Te&&!Q?se[X]=_(S.image[X],!0,s.maxCubemapSize):se[X]=Q?S.image[X].image:S.image[X],se[X]=ht(S,se[X]);const we=se[0],ye=n.convert(S.format,S.colorSpace),pe=n.convert(S.type),We=M(S.internalFormat,ye,pe,S.colorSpace),I=S.isVideoTexture!==!0,le=q.__version===void 0||j===!0,re=K.dataReady;let ge=w(S,we);xe(r.TEXTURE_CUBE_MAP,S);let ee;if(Te){I&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,We,we.width,we.height);for(let X=0;X<6;X++){ee=se[X].mipmaps;for(let _e=0;_e<ee.length;_e++){const Pe=ee[_e];S.format!==Di?ye!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Pe.width,Pe.height,ye,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,We,Pe.width,Pe.height,0,Pe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Pe.width,Pe.height,ye,pe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,We,Pe.width,Pe.height,0,ye,pe,Pe.data)}}}else{if(ee=S.mipmaps,I&&le){ee.length>0&&ge++;const X=Me(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,We,X.width,X.height)}for(let X=0;X<6;X++)if(Q){I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,se[X].width,se[X].height,ye,pe,se[X].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,We,se[X].width,se[X].height,0,ye,pe,se[X].data);for(let _e=0;_e<ee.length;_e++){const Pe=ee[_e].image[X].image;I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,Pe.width,Pe.height,ye,pe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,We,Pe.width,Pe.height,0,ye,pe,Pe.data)}}else{I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye,pe,se[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,We,ye,pe,se[X]);for(let _e=0;_e<ee.length;_e++){const Pe=ee[_e];I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,ye,pe,Pe.image[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,We,ye,pe,Pe.image[X])}}}m(S)&&g(r.TEXTURE_CUBE_MAP),q.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,O,j,K,q){const Se=n.convert(O.format,O.colorSpace),ae=n.convert(O.type),Ee=M(O.internalFormat,Se,ae,O.colorSpace),Te=i.get(S),Q=i.get(O);if(Q.__renderTarget=S,!Te.__hasExternalTextures){const se=Math.max(1,S.width>>q),we=Math.max(1,S.height>>q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Ee,se,we,S.depth,0,Se,ae,null):t.texImage2D(K,q,Ee,se,we,0,Se,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Pt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,K,Q.__webglTexture,0,D(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,K,Q.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(C,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,K=j&&j.isDepthTexture?j.type:null,q=x(S.stencilBuffer,K),Se=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Pt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(S),q,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(S),q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,C)}else{const j=S.textures;for(let K=0;K<j.length;K++){const q=j[K],Se=n.convert(q.format,q.colorSpace),ae=n.convert(q.type),Ee=M(q.internalFormat,Se,ae,q.colorSpace);Pt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(S),Ee,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(S),Ee,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(C,S,O){const j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),xe(r.TEXTURE_CUBE_MAP,S.depthTexture);const Te=n.convert(S.depthTexture.format),Q=n.convert(S.depthTexture.type);let se;S.depthTexture.format===Cr?se=r.DEPTH_COMPONENT24:S.depthTexture.format===_s&&(se=r.DEPTH24_STENCIL8);for(let we=0;we<6;we++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,se,S.width,S.height,0,Te,Q,null)}}else B(S.depthTexture,0);const q=K.__webglTexture,Se=D(S),ae=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,Ee=S.depthTexture.format===_s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Cr)Pt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,ae,q,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,Ee,ae,q,0);else if(S.depthTexture.format===_s)Pt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,ae,q,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,Ee,ae,q,0);else throw new Error("Unknown depthTexture format")}function ve(C){const S=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let j=0;j<6;j++)De(S.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?De(S.__webglFramebuffer[0],C,0):De(S.__webglFramebuffer,C,0)}else if(O){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=r.createRenderbuffer(),Fe(S.__webglDepthbuffer[j],C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Fe(S.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(C,S,O){const j=i.get(C);S!==void 0&&he(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&ve(C)}function st(C){const S=C.texture,O=i.get(C),j=i.get(S);C.addEventListener("dispose",A);const K=C.textures,q=C.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)O.__webglFramebuffer[ae][Ee]=r.createFramebuffer()}else O.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)O.__webglFramebuffer[ae]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Se)for(let ae=0,Ee=K.length;ae<Ee;ae++){const Te=i.get(K[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Pt(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const Ee=K[ae];O.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Te=n.convert(Ee.format,Ee.colorSpace),Q=n.convert(Ee.type),se=M(Ee.internalFormat,Te,Q,Ee.colorSpace,C.isXRRenderTarget===!0),we=D(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,se,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),xe(r.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)he(O.__webglFramebuffer[ae][Ee],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else he(O.__webglFramebuffer[ae],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ae=0,Ee=K.length;ae<Ee;ae++){const Te=K[ae],Q=i.get(Te);let se=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),xe(se,Te),he(O.__webglFramebuffer,C,Te,r.COLOR_ATTACHMENT0+ae,se,0),m(Te)&&g(se)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),xe(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)he(O.__webglFramebuffer[Ee],C,S,r.COLOR_ATTACHMENT0,ae,Ee);else he(O.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,ae,0);m(S)&&g(ae),t.unbindTexture()}C.depthBuffer&&ve(C)}function Ve(C){const S=C.textures;for(let O=0,j=S.length;O<j;O++){const K=S[O];if(m(K)){const q=v(C),Se=i.get(K).__webglTexture;t.bindTexture(q,Se),g(q),t.unbindTexture()}}}const Ut=[],Rt=[];function qt(C){if(C.samples>0){if(Pt(C)===!1){const S=C.textures,O=C.width,j=C.height;let K=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=i.get(C),ae=S.length>1;if(ae)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);const Q=i.get(S[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,j,0,0,O,j,K,r.NEAREST),l===!0&&(Ut.length=0,Rt.length=0,Ut.push(r.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ut.push(q),Rt.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);const Q=i.get(S[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function D(C){return Math.min(s.maxSamples,C.samples)}function Pt(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(C){const S=a.render.frame;c.get(C)!==S&&(c.set(C,S),C.update())}function ht(C,S){const O=C.colorSpace,j=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ni&&O!==Br&&(je.getTransfer(O)===$e?(j!==Di||K!==yi)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",O)),S}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pS(r,e){function t(i,s=Br){let n;const a=je.getTransfer(s);if(i===yi)return r.UNSIGNED_BYTE;if(i===Uc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Uf)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Nf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Df)return r.BYTE;if(i===If)return r.SHORT;if(i===ca)return r.UNSIGNED_SHORT;if(i===Ic)return r.INT;if(i===lr)return r.UNSIGNED_INT;if(i===Li)return r.FLOAT;if(i===Ti)return r.HALF_FLOAT;if(i===Of)return r.ALPHA;if(i===Ff)return r.RGB;if(i===Di)return r.RGBA;if(i===Cr)return r.DEPTH_COMPONENT;if(i===_s)return r.DEPTH_STENCIL;if(i===Oc)return r.RED;if(i===Fc)return r.RED_INTEGER;if(i===hn)return r.RG;if(i===zc)return r.RG_INTEGER;if(i===kc)return r.RGBA_INTEGER;if(i===To||i===wo||i===Eo||i===Ao)if(a===$e)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===To)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===To)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===Sh||i===bh||i===Th)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===Mh)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wh||i===Eh||i===Ah||i===Ch||i===Rh||i===Ph||i===Lh)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===wh||i===Eh)return a===$e?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Ah)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ch)return n.COMPRESSED_R11_EAC;if(i===Rh)return n.COMPRESSED_SIGNED_R11_EAC;if(i===Ph)return n.COMPRESSED_RG11_EAC;if(i===Lh)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dh||i===Ih||i===Uh||i===Nh||i===Oh||i===Fh||i===zh||i===kh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Dh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ih)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xh)return a===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===qh||i===Yh)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===jh)return a===$e?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qh)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yh)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Zh||i===Jh||i===$h)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===Kh)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
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

}`;class gS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bt({vertexShader:fS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _S extends Cs{constructor(e,t){super();const i=this;let s=null,n=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,p=null,f=null;const _=typeof XRWebGLBinding<"u",m=new gS,g={},v=t.getContextAttributes();let M=null,x=null;const w=[],b=[],A=new te;let y=null;const T=new ri;T.viewport=new dt;const U=new ri;U.viewport=new dt;const R=[T,U],L=new g0;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=w[Y];return ie===void 0&&(ie=new dl,w[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=w[Y];return ie===void 0&&(ie=new dl,w[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=w[Y];return ie===void 0&&(ie=new dl,w[Y]=ie),ie.getHandSpace()};function B(Y){const ie=b.indexOf(Y.inputSource);if(ie===-1)return;const he=w[ie];he!==void 0&&(he.update(Y.inputSource,Y.frame,h||a),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let Y=0;Y<w.length;Y++){const ie=b[Y];ie!==null&&(b[Y]=null,w[Y].disconnect(ie))}N=null,k=null,m.reset();for(const Y in g)delete g[Y];e.setRenderTarget(M),p=null,u=null,d=null,s=null,x=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){n=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,he=null,Fe=null;v.depth&&(Fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?_s:Cr,he=v.stencil?ua:lr);const De={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:n};d=this.getBinding(),u=d.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new li(u.textureWidth,u.textureHeight,{format:Di,type:yi,depthTexture:new ga(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new li(p.framebufferWidth,p.framebufferHeight,{format:Di,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Y){for(let ie=0;ie<Y.removed.length;ie++){const he=Y.removed[ie],Fe=b.indexOf(he);Fe>=0&&(b[Fe]=null,w[Fe].disconnect(he))}for(let ie=0;ie<Y.added.length;ie++){const he=Y.added[ie];let Fe=b.indexOf(he);if(Fe===-1){for(let ve=0;ve<w.length;ve++)if(ve>=b.length){b.push(he),Fe=ve;break}else if(b[ve]===null){b[ve]=he,Fe=ve;break}if(Fe===-1)break}const De=w[Fe];De&&De.connect(he)}}const $=new P,J=new P;function oe(Y,ie,he){$.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(he.matrixWorld);const Fe=$.distanceTo(J),De=ie.projectionMatrix.elements,ve=he.projectionMatrix.elements,rt=De[14]/(De[10]-1),st=De[14]/(De[10]+1),Ve=(De[9]+1)/De[5],Ut=(De[9]-1)/De[5],Rt=(De[8]-1)/De[0],qt=(ve[8]+1)/ve[0],D=rt*Rt,Pt=rt*qt,Ze=Fe/(-Rt+qt),ht=Ze*-Rt;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(Ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=rt+Ze,C=st+Ze,S=D-ht,O=Pt+(Fe-ht),j=Ve*st/C*Me,K=Ut*st/C*Me;Y.projectionMatrix.makePerspective(S,O,j,K,Me,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ie=Y.near,he=Y.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(he=m.depthFar)),L.near=U.near=T.near=ie,L.far=U.far=T.far=he,(N!==L.near||k!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,k=L.far),L.layers.mask=Y.layers.mask|6,T.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;const Fe=Y.parent,De=L.cameras;de(L,Fe);for(let ve=0;ve<De.length;ve++)de(De[ve],Fe);De.length===2?oe(L,T,U):L.projectionMatrix.copy(T.projectionMatrix),xe(Y,L,Fe)};function xe(Y,ie,he){he===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return g[Y]};let Re=null;function Ye(Y,ie){if(c=ie.getViewerPose(h||a),f=ie,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Fe=!1;he.length!==L.cameras.length&&(L.cameras.length=0,Fe=!0);for(let ve=0;ve<he.length;ve++){const rt=he[ve];let st=null;if(p!==null)st=p.getViewport(rt);else{const Ut=d.getViewSubImage(u,rt);st=Ut.viewport,ve===0&&(e.setRenderTargetTextures(x,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(x))}let Ve=R[ve];Ve===void 0&&(Ve=new ri,Ve.layers.enable(ve),Ve.viewport=new dt,R[ve]=Ve),Ve.matrix.fromArray(rt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(rt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(st.x,st.y,st.width,st.height),ve===0&&(L.matrix.copy(Ve.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Fe===!0&&L.cameras.push(Ve)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const ve=d.getDepthInformation(he[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,s.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let ve=0;ve<he.length;ve++){const rt=he[ve].camera;if(rt){let st=g[rt];st||(st=new Kf,g[rt]=st);const Ve=d.getCameraImage(rt);st.sourceTexture=Ve}}}}for(let he=0;he<w.length;he++){const Fe=b[he],De=w[he];Fe!==null&&De!==void 0&&De.update(Fe,ie,h||a)}Re&&Re(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),f=null}const ut=new cm;ut.setAnimationLoop(Ye),this.setAnimationLoop=function(Y){Re=Y},this.dispose=function(){}}}const os=new Yi,vS=new Ne;function yS(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,sm(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,M,x){g.isMeshBasicMaterial?n(m,g):g.isMeshLambertMaterial?(n(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(n(m,g),d(m,g)):g.isMeshPhongMaterial?(n(m,g),c(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(n(m,g),u(m,g),g.isMeshPhysicalMaterial&&p(m,g,x)):g.isMeshMatcapMaterial?(n(m,g),f(m,g)):g.isMeshDepthMaterial?n(m,g):g.isMeshDistanceMaterial?(n(m,g),_(m,g)):g.isMeshNormalMaterial?n(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?h(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,os.copy(x),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(os)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xS(r,e,t,i){let s={},n={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function h(v,M){let x=s[v.id];x===void 0&&(f(v),x=c(v),s[v.id]=x,v.addEventListener("dispose",m));const w=M.program;i.updateUBOMapping(v,w);const b=e.render.frame;n[v.id]!==b&&(u(v),n[v.id]=b)}function c(v){const M=d();v.__bindingPointIndex=M;const x=r.createBuffer(),w=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=s[v.id],x=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,A=x.length;b<A;b++){const y=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,U=y.length;T<U;T++){const R=y[T];if(p(R,b,T,w)===!0){const L=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let B=0;B<N.length;B++){const z=N[B],H=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+k,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,k),k+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,M,x,w){const b=v.value,A=M+"_"+x;if(w[A]===void 0)return typeof b=="number"||typeof b=="boolean"?w[A]=b:w[A]=b.clone(),!0;{const y=w[A];if(typeof b=="number"||typeof b=="boolean"){if(y!==b)return w[A]=b,!0}else if(y.equals(b)===!1)return y.copy(b),!0}return!1}function f(v){const M=v.uniforms;let x=0;const w=16;for(let A=0,y=M.length;A<y;A++){const T=Array.isArray(M[A])?M[A]:[M[A]];for(let U=0,R=T.length;U<R;U++){const L=T[U],N=Array.isArray(L.value)?L.value:[L.value];for(let k=0,B=N.length;k<B;k++){const z=N[k],H=_(z),$=x%w,J=$%H.boundary,oe=$+J;x+=J,oe!==0&&w-oe<H.storage&&(x+=w-oe),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=H.storage}}}const b=x%w;return b>0&&(x+=w-b),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(s[M.id]),delete s[M.id],delete n[M.id]}function g(){for(const v in s)r.deleteBuffer(s[v]);a=[],s={},n={}}return{bind:l,update:h,dispose:g}}const MS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function SS(){return $i===null&&($i=new Yc(MS,16,16,hn,Ti),$i.name="DFG_LUT",$i.minFilter=St,$i.magFilter=St,$i.wrapS=Mi,$i.wrapT=Mi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class bS{constructor(e={}){const{canvas:t=v_(),context:i=null,depth:s=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=yi}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const _=p,m=new Set([kc,zc,Fc]),g=new Set([yi,lr,ca,ua,Uc,Nc]),v=new Uint32Array(4),M=new Int32Array(4);let x=null,w=null;const b=[],A=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=yt;let R=0,L=0,N=null,k=-1,B=null;const z=new dt,H=new dt;let $=null;const J=new Z(0);let oe=0,de=t.width,xe=t.height,Re=1,Ye=null,ut=null;const Y=new dt(0,0,de,xe),ie=new dt(0,0,de,xe);let he=!1;const Fe=new Ko;let De=!1,ve=!1;const rt=new Ne,st=new P,Ve=new dt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function qt(){return N===null?Re:1}let D=i;function Pt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Nt,!1),D===null){const F="webgl2";if(D=Pt(F,E),D===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Le("WebGLRenderer: "+E.message),E}let Ze,ht,Me,C,S,O,j,K,q,Se,ae,Ee,Te,Q,se,we,ye,pe,We,I,le,re,ge;function ee(){Ze=new bM(D),Ze.init(),le=new pS(D,Ze),ht=new mM(D,Ze,e,le),Me=new uS(D,Ze),ht.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),C=new EM(D),S=new J1,O=new dS(D,Ze,Me,S,ht,le,C),j=new SM(T),K=new L0(D),re=new pM(D,K),q=new TM(D,K,C,re),Se=new CM(D,q,K,re,C),pe=new AM(D,ht,O),se=new gM(S),ae=new Z1(T,j,Ze,ht,re,se),Ee=new yS(T,S),Te=new Q1,Q=new nS(Ze),ye=new dM(T,j,Me,Se,f,l),we=new cS(T,Se,ht),ge=new xS(D,C,ht,Me),We=new fM(D,Ze,C),I=new wM(D,Ze,C),C.programs=ae.programs,T.capabilities=ht,T.extensions=Ze,T.properties=S,T.renderLists=Te,T.shadowMap=we,T.state=Me,T.info=C}ee(),_!==yi&&(y=new PM(_,t.width,t.height,s,n));const X=new _S(T,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(E){E!==void 0&&(Re=E,this.setSize(de,xe,!1))},this.getSize=function(E){return E.set(de,xe)},this.setSize=function(E,F,W=!0){if(X.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}de=E,xe=F,t.width=Math.floor(E*Re),t.height=Math.floor(F*Re),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(de*Re,xe*Re).floor()},this.setDrawingBufferSize=function(E,F,W){de=E,xe=F,Re=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,F,W,G){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,F,W,G),Me.viewport(z.copy(Y).multiplyScalar(Re).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,F,W,G){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,F,W,G),Me.scissor(H.copy(ie).multiplyScalar(Re).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){Me.setScissorTest(he=E)},this.setOpaqueSort=function(E){Ye=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let G=0;if(E){let V=!1;if(N!==null){const ne=N.texture.format;V=m.has(ne)}if(V){const ne=N.texture.type,ue=g.has(ne),me=ye.getClearColor(),fe=ye.getClearAlpha(),Ie=me.r,He=me.g,Xe=me.b;ue?(v[0]=Ie,v[1]=He,v[2]=Xe,v[3]=fe,D.clearBufferuiv(D.COLOR,0,v)):(M[0]=Ie,M[1]=He,M[2]=Xe,M[3]=fe,D.clearBufferiv(D.COLOR,0,M))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),ye.dispose(),Te.dispose(),Q.dispose(),S.dispose(),j.dispose(),Se.dispose(),re.dispose(),ge.dispose(),ae.dispose(),X.dispose(),X.removeEventListener("sessionstart",Iu),X.removeEventListener("sessionend",Uu),Qr.stop()};function _e(E){E.preventDefault(),No("WebGLRenderer: Context Lost."),U=!0}function Pe(){No("WebGLRenderer: Context Restored."),U=!1;const E=C.autoReset,F=we.enabled,W=we.autoUpdate,G=we.needsUpdate,V=we.type;ee(),C.autoReset=E,we.enabled=F,we.autoUpdate=W,we.needsUpdate=G,we.type=V}function Nt(E){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const F=E.target;F.removeEventListener("dispose",Je),fr(F)}function fr(E){mr(E),S.remove(E)}function mr(E){const F=S.get(E).programs;F!==void 0&&(F.forEach(function(W){ae.releaseProgram(W)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,G,V,ne){F===null&&(F=Ut);const ue=V.isMesh&&V.matrixWorld.determinant()<0,me=Lg(E,F,W,G,V);Me.setMaterial(G,ue);let fe=W.index,Ie=1;if(G.wireframe===!0){if(fe=q.getWireframeAttribute(W),fe===void 0)return;Ie=2}const He=W.drawRange,Xe=W.attributes.position;let Ce=He.start*Ie,ct=(He.start+He.count)*Ie;ne!==null&&(Ce=Math.max(Ce,ne.start*Ie),ct=Math.min(ct,(ne.start+ne.count)*Ie)),fe!==null?(Ce=Math.max(Ce,0),ct=Math.min(ct,fe.count)):Xe!=null&&(Ce=Math.max(Ce,0),ct=Math.min(ct,Xe.count));const Et=ct-Ce;if(Et<0||Et===1/0)return;re.setup(V,G,me,W,fe);let gt,nt=We;if(fe!==null&&(gt=K.get(fe),nt=I,nt.setIndex(gt)),V.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*qt()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(V.isLine){let bt=G.linewidth;bt===void 0&&(bt=1),Me.setLineWidth(bt*qt()),V.isLineSegments?nt.setMode(D.LINES):V.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else V.isPoints?nt.setMode(D.POINTS):V.isSprite&&nt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))nt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const bt=V._multiDrawStarts,Ae=V._multiDrawCounts,mi=V._multiDrawCount,es=fe?K.get(fe).bytesPerElement:1,Fi=S.get(G).currentProgram.getUniforms();for(let Zi=0;Zi<mi;Zi++)Fi.setValue(D,"_gl_DrawID",Zi),nt.render(bt[Zi]/es,Ae[Zi])}else if(V.isInstancedMesh)nt.renderInstances(Ce,Et,V.count);else if(W.isInstancedBufferGeometry){const bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ae=Math.min(W.instanceCount,bt);nt.renderInstances(Ce,Et,Ae)}else nt.render(Ce,Et)};function Du(E,F,W){E.transparent===!0&&E.side===mt&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,Na(E,F,W),E.side=Ar,E.needsUpdate=!0,Na(E,F,W),E.side=mt):Na(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),w=Q.get(W),w.init(F),A.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ne=V.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const me=ne[ue];Du(me,W,V),G.add(me)}else Du(ne,W,V),G.add(ne)}),w=A.pop(),G},this.compileAsync=function(E,F,W=null){const G=this.compile(E,F,W);return new Promise(V=>{function ne(){if(G.forEach(function(ue){S.get(ue).currentProgram.isReady()&&G.delete(ue)}),G.size===0){V(E);return}setTimeout(ne,10)}Ze.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let il=null;function Pg(E){il&&il(E)}function Iu(){Qr.stop()}function Uu(){Qr.start()}const Qr=new cm;Qr.setAnimationLoop(Pg),typeof self<"u"&&Qr.setContext(self),this.setAnimationLoop=function(E){il=E,X.setAnimationLoop(E),E===null?Qr.stop():Qr.start()},X.addEventListener("sessionstart",Iu),X.addEventListener("sessionend",Uu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,G=y!==null&&(N===null||W)&&y.begin(T,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,F,N),w=Q.get(E,A.length),w.init(F),A.push(w),rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Fe.setFromProjectionMatrix(rt,sr,F.reversedDepth),ve=this.localClippingEnabled,De=se.init(this.clippingPlanes,ve),x=Te.get(E,b.length),x.init(),b.push(x),X.enabled===!0&&X.isPresenting===!0){const ne=T.xr.getDepthSensingMesh();ne!==null&&rl(ne,F,-1/0,T.sortObjects)}rl(E,F,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(Ye,ut),Rt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Rt&&ye.addToRenderList(x,E),this.info.render.frame++,De===!0&&se.beginShadows();const V=w.state.shadowsArray;if(we.render(V,E,F),De===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&y.hasRenderPass())===!1){const ne=x.opaque,ue=x.transmissive;if(w.setupLights(),F.isArrayCamera){const me=F.cameras;if(ue.length>0)for(let fe=0,Ie=me.length;fe<Ie;fe++){const He=me[fe];Ou(ne,ue,E,He)}Rt&&ye.render(E);for(let fe=0,Ie=me.length;fe<Ie;fe++){const He=me[fe];Nu(x,E,He,He.viewport)}}else ue.length>0&&Ou(ne,ue,E,F),Rt&&ye.render(E),Nu(x,E,F)}N!==null&&L===0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),G&&y.end(T),E.isScene===!0&&E.onAfterRender(T,E,F),re.resetDefaultState(),k=-1,B=null,A.pop(),A.length>0?(w=A[A.length-1],De===!0&&se.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function rl(E,F,W,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){G&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);const ne=Se.update(E),ue=E.material;ue.visible&&x.push(E,ne,ue,W,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const ne=Se.update(E),ue=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ve.copy(ne.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(ue)){const me=ne.groups;for(let fe=0,Ie=me.length;fe<Ie;fe++){const He=me[fe],Xe=ue[He.materialIndex];Xe&&Xe.visible&&x.push(E,ne,Xe,W,Ve.z,He)}}else ue.visible&&x.push(E,ne,ue,W,Ve.z,null)}}const V=E.children;for(let ne=0,ue=V.length;ne<ue;ne++)rl(V[ne],F,W,G)}function Nu(E,F,W,G){const{opaque:V,transmissive:ne,transparent:ue}=E;w.setupLightsView(W),De===!0&&se.setGlobalState(T.clippingPlanes,W),G&&Me.viewport(z.copy(G)),V.length>0&&Ua(V,F,W),ne.length>0&&Ua(ne,F,W),ue.length>0&&Ua(ue,F,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ou(E,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Xe=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new li(1,1,{generateMipmaps:!0,type:Xe?Ti:yi,minFilter:rr,samples:Math.max(4,ht.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const V=w.state.transmissionRenderTarget[G.id],ne=G.viewport||z;V.setSize(ne.z*T.transmissionResolutionScale,ne.w*T.transmissionResolutionScale);const ue=T.getRenderTarget(),me=T.getActiveCubeFace(),fe=T.getActiveMipmapLevel();T.setRenderTarget(V),T.getClearColor(J),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),Rt&&ye.render(W);const Ie=T.toneMapping;T.toneMapping=or;const He=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),De===!0&&se.setGlobalState(T.clippingPlanes,G),Ua(E,W,G),O.updateMultisampleRenderTarget(V),O.updateRenderTargetMipmap(V),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ce=0,ct=F.length;Ce<ct;Ce++){const Et=F[Ce],{object:gt,geometry:nt,material:bt,group:Ae}=Et;if(bt.side===mt&&gt.layers.test(G.layers)){const mi=bt.side;bt.side=Kt,bt.needsUpdate=!0,Fu(gt,W,G,nt,bt,Ae),bt.side=mi,bt.needsUpdate=!0,Xe=!0}}Xe===!0&&(O.updateMultisampleRenderTarget(V),O.updateRenderTargetMipmap(V))}T.setRenderTarget(ue,me,fe),T.setClearColor(J,oe),He!==void 0&&(G.viewport=He),T.toneMapping=Ie}function Ua(E,F,W){const G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ne=E.length;V<ne;V++){const ue=E[V],{object:me,geometry:fe,group:Ie}=ue;let He=ue.material;He.allowOverride===!0&&G!==null&&(He=G),me.layers.test(W.layers)&&Fu(me,F,W,fe,He,Ie)}}function Fu(E,F,W,G,V,ne){E.onBeforeRender(T,F,W,G,V,ne),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(T,F,W,G,E,ne),V.transparent===!0&&V.side===mt&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,T.renderBufferDirect(W,F,G,V,E,ne),V.side=Ar,V.needsUpdate=!0,T.renderBufferDirect(W,F,G,V,E,ne),V.side=mt):T.renderBufferDirect(W,F,G,V,E,ne),E.onAfterRender(T,F,W,G,V,ne)}function Na(E,F,W){F.isScene!==!0&&(F=Ut);const G=S.get(E),V=w.state.lights,ne=w.state.shadowsArray,ue=V.state.version,me=ae.getParameters(E,V.state,ne,F,W),fe=ae.getProgramCacheKey(me);let Ie=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=j.get(E.envMap||G.environment,He),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Je),Ie=new Map,G.programs=Ie);let Xe=Ie.get(fe);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===ue)return ku(E,me),Xe}else me.uniforms=ae.getUniforms(E),E.onBeforeCompile(me,T),Xe=ae.acquireProgram(me,fe),Ie.set(fe,Xe),G.uniforms=me.uniforms;const Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=se.uniform),ku(E,me),G.needsLights=Ig(E),G.lightsStateVersion=ue,G.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),G.currentProgram=Xe,G.uniformsList=null,Xe}function zu(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Co.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ku(E,F){const W=S.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Lg(E,F,W,G,V){F.isScene!==!0&&(F=Ut),O.resetTextureUnits();const ne=F.fog,ue=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,me=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ni,fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=j.get(G.envMap||ue,fe),He=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let gt=or;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(gt=T.toneMapping);const nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,bt=nt!==void 0?nt.length:0,Ae=S.get(G),mi=w.state.lights;if(De===!0&&(ve===!0||E!==B)){const Lt=E===B&&G.id===k;se.setState(G,E,Lt)}let es=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==mi.state.version||Ae.outputColorSpace!==me||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==Ie||G.fog===!0&&Ae.fog!==ne||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==He||Ae.vertexTangents!==Xe||Ae.morphTargets!==Ce||Ae.morphNormals!==ct||Ae.morphColors!==Et||Ae.toneMapping!==gt||Ae.morphTargetsCount!==bt)&&(es=!0):(es=!0,Ae.__version=G.version);let Fi=Ae.currentProgram;es===!0&&(Fi=Na(G,F,V));let Zi=!1,ts=!1,Ps=!1;const at=Fi.getUniforms(),Yt=Ae.uniforms;if(Me.useProgram(Fi.program)&&(Zi=!0,ts=!0,Ps=!0),G.id!==k&&(k=G.id,ts=!0),Zi||B!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",E.projectionMatrix),at.setValue(D,"viewMatrix",E.matrixWorldInverse);const Lt=at.map.cameraPosition;Lt!==void 0&&Lt.setValue(D,st.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,ts=!0,Ps=!0)}if(Ae.needsLights&&(mi.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",mi.state.directionalShadowMap,O),mi.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",mi.state.spotShadowMap,O),mi.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",mi.state.pointShadowMap,O)),V.isSkinnedMesh){at.setOptional(D,V,"bindMatrix"),at.setOptional(D,V,"bindMatrixInverse");const Lt=V.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),at.setValue(D,"boneTexture",Lt.boneTexture,O))}V.isBatchedMesh&&(at.setOptional(D,V,"batchingTexture"),at.setValue(D,"batchingTexture",V._matricesTexture,O),at.setOptional(D,V,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",V._indirectTexture,O),at.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",V._colorsTexture,O));const Lr=W.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&pe.update(V,W,Fi),(ts||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,at.setValue(D,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Yt.envMapIntensity.value=F.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=SS()),ts&&(at.setValue(D,"toneMappingExposure",T.toneMappingExposure),Ae.needsLights&&Dg(Yt,Ps),ne&&G.fog===!0&&Ee.refreshFogUniforms(Yt,ne),Ee.refreshMaterialUniforms(Yt,G,Re,xe,w.state.transmissionRenderTarget[E.id]),Co.upload(D,zu(Ae),Yt,O)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Co.upload(D,zu(Ae),Yt,O),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(D,"center",V.center),at.setValue(D,"modelViewMatrix",V.modelViewMatrix),at.setValue(D,"normalMatrix",V.normalMatrix),at.setValue(D,"modelMatrix",V.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Lt=G.uniformsGroups;for(let Dn=0,Ls=Lt.length;Dn<Ls;Dn++){const Bu=Lt[Dn];ge.update(Bu,Fi),ge.bind(Bu,Fi)}}return Fi}function Dg(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Ig(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,F,W){const G=S.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=F,S.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const W=S.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Ug=D.createFramebuffer();this.setRenderTarget=function(E,F=0,W=0){N=E,R=F,L=W;let G=null,V=!1,ne=!1;if(E){const ue=S.get(E);if(ue.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),z.copy(E.viewport),H.copy(E.scissor),$=E.scissorTest,Me.viewport(z),Me.scissor(H),Me.setScissorTest($),k=-1;return}else if(ue.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(ue.__hasExternalTextures)O.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(ue.__boundDepthTexture!==Ie){if(Ie!==null&&S.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}const me=E.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(ne=!0);const fe=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(fe[F])?G=fe[F][W]:G=fe[F],V=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?G=S.get(E).__webglMultisampledFramebuffer:Array.isArray(fe)?G=fe[W]:G=fe,z.copy(E.viewport),H.copy(E.scissor),$=E.scissorTest}else z.copy(Y).multiplyScalar(Re).floor(),H.copy(ie).multiplyScalar(Re).floor(),$=he;if(W!==0&&(G=Ug),Me.bindFramebuffer(D.FRAMEBUFFER,G)&&Me.drawBuffers(E,G),Me.viewport(z),Me.scissor(H),Me.setScissorTest($),V){const ue=S.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,W)}else if(ne){const ue=F;for(let me=0;me<E.textures.length;me++){const fe=S.get(E.textures[me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+me,fe.__webglTexture,W,ue)}}else if(E!==null&&W!==0){const ue=S.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,W)}k=-1},this.readRenderTargetPixels=function(E,F,W,G,V,ne,ue,me=0){if(!(E&&E.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){Me.bindFramebuffer(D.FRAMEBUFFER,fe);try{const Ie=E.textures[me],He=Ie.format,Xe=Ie.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!ht.textureFormatReadable(He)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Xe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&W>=0&&W<=E.height-V&&D.readPixels(F,W,G,V,le.convert(He),le.convert(Xe),ne)}finally{const Ie=N!==null?S.get(N).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,G,V,ne,ue,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe)if(F>=0&&F<=E.width-G&&W>=0&&W<=E.height-V){Me.bindFramebuffer(D.FRAMEBUFFER,fe);const Ie=E.textures[me],He=Ie.format,Xe=Ie.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!ht.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),D.readPixels(F,W,G,V,le.convert(He),le.convert(Xe),0);const ct=N!==null?S.get(N).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,ct);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await y_(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne),D.deleteBuffer(Ce),D.deleteSync(Et),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){const G=Math.pow(2,-W),V=Math.floor(E.image.width*G),ne=Math.floor(E.image.height*G),ue=F!==null?F.x:0,me=F!==null?F.y:0;O.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ue,me,V,ne),Me.unbindTexture()};const Ng=D.createFramebuffer(),Og=D.createFramebuffer();this.copyTextureToTexture=function(E,F,W=null,G=null,V=0,ne=0){let ue,me,fe,Ie,He,Xe,Ce,ct,Et;const gt=E.isCompressedTexture?E.mipmaps[ne]:E.image;if(W!==null)ue=W.max.x-W.min.x,me=W.max.y-W.min.y,fe=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,He=W.min.y,Xe=W.isBox3?W.min.z:0;else{const Yt=Math.pow(2,-V);ue=Math.floor(gt.width*Yt),me=Math.floor(gt.height*Yt),E.isDataArrayTexture?fe=gt.depth:E.isData3DTexture?fe=Math.floor(gt.depth*Yt):fe=1,Ie=0,He=0,Xe=0}G!==null?(Ce=G.x,ct=G.y,Et=G.z):(Ce=0,ct=0,Et=0);const nt=le.convert(F.format),bt=le.convert(F.type);let Ae;F.isData3DTexture?(O.setTexture3D(F,0),Ae=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(O.setTexture2DArray(F,0),Ae=D.TEXTURE_2D_ARRAY):(O.setTexture2D(F,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const mi=D.getParameter(D.UNPACK_ROW_LENGTH),es=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fi=D.getParameter(D.UNPACK_SKIP_PIXELS),Zi=D.getParameter(D.UNPACK_SKIP_ROWS),ts=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);const Ps=E.isDataArrayTexture||E.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Yt=S.get(E),Lr=S.get(F),Lt=S.get(Yt.__renderTarget),Dn=S.get(Lr.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Ls=0;Ls<fe;Ls++)Ps&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(E).__webglTexture,V,Xe+Ls),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(F).__webglTexture,ne,Et+Ls)),D.blitFramebuffer(Ie,He,ue,me,Ce,ct,ue,me,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||S.has(E)){const Yt=S.get(E),Lr=S.get(F);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Ng),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Og);for(let Lt=0;Lt<fe;Lt++)Ps?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,V,Xe+Lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,V),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lr.__webglTexture,ne,Et+Lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lr.__webglTexture,ne),V!==0?D.blitFramebuffer(Ie,He,ue,me,Ce,ct,ue,me,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(Ae,ne,Ce,ct,Et+Lt,Ie,He,ue,me):D.copyTexSubImage2D(Ae,ne,Ce,ct,Ie,He,ue,me);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ae,ne,Ce,ct,Et,ue,me,fe,nt,bt,gt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,ne,Ce,ct,Et,ue,me,fe,nt,gt.data):D.texSubImage3D(Ae,ne,Ce,ct,Et,ue,me,fe,nt,bt,gt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,Ce,ct,ue,me,nt,bt,gt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,Ce,ct,gt.width,gt.height,nt,gt.data):D.texSubImage2D(D.TEXTURE_2D,ne,Ce,ct,ue,me,nt,bt,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,mi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,es),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ts),ne===0&&F.generateMipmaps&&D.generateMipmap(Ae),Me.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){R=0,L=0,N=null,Me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const up={type:"change"},lu={type:"start"},gm={type:"end"},fo=new En,dp=new br,TS=Math.cos(70*Ke.DEG2RAD),Ot=new P,ai=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6;class wS extends R0{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:en.ROTATE,MIDDLE:en.DOLLY,RIGHT:en.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new pi,this._lastTargetPosition=new P,this._quat=new pi().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hd,this._sphericalDelta=new Hd,this._scale=1,this._panOffset=new P,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new P,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AS.bind(this),this._onPointerDown=ES.bind(this),this._onPointerUp=CS.bind(this),this._onContextMenu=NS.bind(this),this._onMouseWheel=LS.bind(this),this._onKeyDown=DS.bind(this),this._onTouchStart=IS.bind(this),this._onTouchMove=US.bind(this),this._onMouseDown=RS.bind(this),this._onMouseMove=PS.bind(this),this._interceptControlDown=OS.bind(this),this._interceptControlUp=FS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(up),this.update(),this.state=tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ai:i>Math.PI&&(i-=ai),s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),n=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=l!==this.object.zoom;const h=new P(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fo.origin.copy(this.object.position),fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fo.direction))<TS?this.object.lookAt(this.target):(dp.setFromNormalAndCoplanarPoint(this.object.up,this.target),fo.intersectPlane(dp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(up),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ai/60*this.autoRotateSpeed*e:ai/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let n=Ot.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,n=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(n/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/t.clientHeight),this._rotateUp(ai*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(s,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/t.clientHeight),this._rotateUp(ai*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ES(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function AS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function CS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gm),this.state=tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function RS(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case en.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=tt.DOLLY;break;case en.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=tt.ROTATE}break;case en.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(lu)}function PS(r){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function LS(r){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(r.preventDefault(),this.dispatchEvent(lu),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gm))}function DS(r){this.enabled!==!1&&this._handleKeyDown(r)}function IS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=tt.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=tt.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(lu)}function US(r){switch(this._trackPointer(r),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=tt.NONE}}function NS(r){this.enabled!==!1&&r.preventDefault()}function OS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hu(r,e=!1){const t=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),s=new Set(Object.keys(r[0].morphAttributes)),n={},a={},o=r[0].morphTargetsRelative,l=new wt;let h=0;for(let c=0;c<r.length;++c){const d=r[c];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(t){let c=0;const d=[];for(let u=0;u<r.length;++u){const p=r[u].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+c);c+=r[u].attributes.position.count}l.setIndex(d)}for(const c in n){const d=pp(n[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(const c in a){const d=a[c][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<a[c].length;++_)p.push(a[c][_][u]);const f=pp(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(f)}}return l}function pp(r){let e,t,i,s=-1,n=0;for(let h=0;h<r.length;++h){const c=r[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=c.count*t}const a=new e(n),o=new Xt(a,t,i);let l=0;for(let h=0;h<r.length;++h){const c=r[h];if(c.isInterleavedBufferAttribute){const d=l/t;for(let u=0,p=c.count;u<p;u++)for(let f=0;f<t;f++){const _=c.getComponent(u,f);o.setComponent(u+d,f,_)}}else a.set(c.array,l);l+=c.count*t}return s!==void 0&&(o.gpuType=s),o}function fp(r,e){if(e===o_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Qh||e===zf){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,s=[];if(e===Qh)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=r.clone();return n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function zS(r){const e=new Map,t=new Map,i=r.clone();return _m(r,i,function(s,n){e.set(n,s),t.set(s,n)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const n=s,a=e.get(s),o=a.skeleton.bones;n.skeleton=a.skeleton.clone(),n.bindMatrix.copy(a.bindMatrix),n.skeleton.bones=o.map(function(l){return t.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),i}function _m(r,e,t){t(r,e);for(let i=0;i<r.children.length;i++)_m(r.children[i],e.children[i],t)}class cu extends Pn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new mp(t,Ge.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new mp(t,Ge.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ib(t)})}load(e,t,i,s){const n=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=na.extractUrlBase(e);a=na.resolveURL(h,this.path)}else a=na.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){s?s(h):console.error(h),n.manager.itemError(e),n.manager.itemEnd(e)},l=new lm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{n.parse(h,a,function(c){t(c),n.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let n;const a={},o={},l=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vm){try{a[Ge.KHR_BINARY_GLTF]=new rb(e)}catch(c){s&&s(c);return}n=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new gb(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const d=this.pluginCallbacks[c](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){const d=n.extensionsUsed[c],u=n.extensionsRequired||[];switch(d){case Ge.KHR_MATERIALS_UNLIT:a[d]=new HS;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[d]=new sb(n,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[d]=new nb;break;case Ge.KHR_MESH_QUANTIZATION:a[d]=new ab;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,n){i.parse(e,t,s,n)})}}function kS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Ct(r,e,t){const i=r.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BS{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const n=t.json,a=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let o;const l=new Z(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],ni);const h=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new nc(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new nu(l),o.distance=h;break;case"spot":o=new c0(l),o.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),Qi(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),s=Promise.resolve(o),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],n=(s.extensions&&s.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(a){return i._getNodeRef(t.cache,n,a)})}}class HS{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,i){const s=[];e.color=new Z(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const a=n.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ni),e.opacity=a[3]}n.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",n.baseColorTexture,yt))}return Promise.all(s)}}class VS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class GS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const n=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(n,n)}return Promise.all(s)}}class WS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class XS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class jS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const n=i.sheenColorFactor;t.sheenColor.setRGB(n[0],n[1],n[2],ni)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,yt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class qS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class YS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const n=i.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(n[0],n[1],n[2],ni),Promise.all(s)}}class KS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class ZS{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const n=i.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(n[0],n[1],n[2],ni),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,yt)),Promise.all(s)}}class JS{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class $S{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?pr:null}extendMaterialParams(e,t){const i=Ct(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class QS{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const n=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,a)}}class eb{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(l=h)}return i.loadTextureImage(e,a.source,l)}}class tb{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(l=h)}return i.loadTextureImage(e,a.source,l)}}class mp{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){const l=s.byteOffset||0,h=s.byteLength||0,c=s.count,d=s.byteStride,u=new Uint8Array(o,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,d,u,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(c*d);return a.decodeGltfBuffer(new Uint8Array(p),c,d,u,s.mode,s.filter),p})})}else return null}}class ib{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==Pi.TRIANGLES&&l.mode!==Pi.TRIANGLE_STRIP&&l.mode!==Pi.TRIANGLE_FAN&&l.mode!==void 0)return null;const n=i.extensions[this.name].attributes,a=[],o={};for(const l in n)a.push(this.parser.getDependency("accessor",n[l]).then(h=>(o[l]=h,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),c=h.isGroup?h.children:[h],d=l[0].count,u=[];for(const p of c){const f=new Ne,_=new P,m=new pi,g=new P(1,1,1),v=new Yo(p.geometry,p.material,d);for(let M=0;M<d;M++)o.TRANSLATION&&_.fromBufferAttribute(o.TRANSLATION,M),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,M),o.SCALE&&g.fromBufferAttribute(o.SCALE,M),v.setMatrixAt(M,f.compose(_,m,g));for(const M in o)if(M==="_COLOR_0"){const x=o[M];v.instanceColor=new tc(x.array,x.itemSize,x.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,o[M]);pt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),u.push(v)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const vm="glTF",Vn=12,gp={JSON:1313821514,BIN:5130562};class rb{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Vn,n=new DataView(e,Vn);let a=0;for(;a<s;){const o=n.getUint32(a,!0);a+=4;const l=n.getUint32(a,!0);if(a+=4,l===gp.JSON){const h=new Uint8Array(e,Vn+a,o);this.content=i.decode(h)}else if(l===gp.BIN){const h=Vn+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},h={};for(const c in a){const d=cc[c]||c.toLowerCase();o[d]=a[c]}for(const c in e.attributes){const d=cc[c]||c.toLowerCase();if(a[c]!==void 0){const u=i.accessors[e.attributes[c]],p=rn[u.componentType];h[d]=p.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",n).then(function(c){return new Promise(function(d,u){s.decodeDracoFile(c,function(p){for(const f in p.attributes){const _=p.attributes[f],m=l[f];m!==void 0&&(_.normalized=m)}d(p)},o,h,ni,u)})})}}class nb{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ab{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class ym extends An{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[n+a];return t}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,c=s-t,d=(i-t)/c,u=d*d,p=u*d,f=e*h,_=f-h,m=-2*p+3*u,g=p-u,v=1-m,M=g-u+d;for(let x=0;x!==o;x++){const w=a[_+x+o],b=a[_+x+l]*c,A=a[f+x+o],y=a[f+x]*c;n[x]=v*w+M*b+m*A+g*y}return n}}const ob=new pi;class lb extends ym{interpolate_(e,t,i,s){const n=super.interpolate_(e,t,i,s);return ob.fromArray(n).normalize().toArray(n),n}}const Pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_p={9728:zt,9729:St,9984:Lf,9985:bo,9986:qn,9987:rr},vp={33071:Mi,33648:Io,10497:qi},Wl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hb={CUBICSPLINE:void 0,LINEAR:pa,STEP:da},Xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ar})),r.DefaultMaterial}function ls(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Qi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ub(r,e,t){let i=!1,s=!1,n=!1;for(let h=0,c=e.length;h<c;h++){const d=e[h];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(n=!0),i&&s&&n)break}if(!i&&!s&&!n)return Promise.resolve(r);const a=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){const d=e[h];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(s){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(n){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){const c=h[0],d=h[1],u=h[2];return i&&(r.morphAttributes.position=c),s&&(r.morphAttributes.normal=d),n&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function db(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pb(r){let e;const t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jl(t.attributes):e=r.indices+":"+jl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,s=r.targets.length;i<s;i++)e+=":"+jl(r.targets[i]);return e}function jl(r){let e="";const t=Object.keys(r).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+r[t[i]]+";";return e}function uc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mb=new Ne;class gb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,n=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,a=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||n&&a<98?this.textureLoader=new ru(this.options.manager):this.textureLoader=new f0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ls(n,o,s),Qi(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,n=t.length;s<n;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,n=e.length;s<n;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),n=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,c]of a.children.entries())n(c,o.children[h])};return n(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const n=e(t[s]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":s=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(n,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(n,a){i.load(na.resolveURL(t.uri,s.path),n,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Wl[s.type],o=rn[s.componentType],l=s.normalized===!0,h=new o(s.count*a);return Promise.resolve(new Xt(h,a,l))}const n=[];return s.bufferView!==void 0?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),s.sparse!==void 0&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then(function(a){const o=a[0],l=Wl[s.type],h=rn[s.componentType],c=h.BYTES_PER_ELEMENT,d=c*l,u=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0;let _,m;if(p&&p!==d){const g=Math.floor(u/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let M=t.cache.get(v);M||(_=new h(o,g*p,s.count*p/c),M=new Q_(_,p/c),t.cache.add(v,M)),m=new qc(M,l,u%p/c,f)}else o===null?_=new h(s.count*l):_=new h(o,u,s.count*l),m=new Xt(_,l,f);if(s.sparse!==void 0){const g=Wl.SCALAR,v=rn[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new v(a[1],M,s.sparse.count*g),b=new h(a[2],x,s.sparse.count*l);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=w.length;A<y;A++){const T=w[A];if(m.setX(T,b[A*l]),l>=2&&m.setY(T,b[A*l+1]),l>=3&&m.setZ(T,b[A*l+2]),l>=4&&m.setW(T,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,n=t.images[s];let a=this.textureLoader;if(n.uri){const o=i.manager.getHandler(n.uri);o!==null&&(a=o)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const s=this,n=this.json,a=n.textures[e],o=n.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const d=(n.samplers||{})[a.sampler]||{};return c.magFilter=_p[d.magFilter]||St,c.minFilter=_p[d.minFilter]||rr,c.wrapS=vp[d.wrapS]||qi,c.wrapT=vp[d.wrapT]||qi,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==zt&&c.minFilter!==St,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const i=this,s=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){h=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let f=u;t.isImageBitmapLoader===!0&&(f=function(_){const m=new Ht(_);m.needsUpdate=!0,u(m)}),t.load(na.resolveURL(d,n.path),f,void 0,p)})}).then(function(d){return h===!0&&o.revokeObjectURL(l),Qi(d,a),d.userData.mimeType=a.mimeType||fb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=c,c}assignTexture(e,t,i,s){const n=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),n.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=n.associations.get(a);a=n.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),n.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Zo,ji.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new qf,ji.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||n||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),n&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ft}loadMaterial(e){const t=this,i=this.json,s=this.extensions,n=i.materials[e];let a;const o={},l=n.extensions||{},h=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const d=s[Ge.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(o,n,t))}else{const d=n.pbrMetallicRoughness||{};if(o.color=new Z(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],ni),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",d.baseColorTexture,yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=mt);const c=n.alphaMode||Xl.OPAQUE;if(c===Xl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Xl.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&a!==oi&&(h.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new te(1,1),n.normalTexture.scale!==void 0)){const d=n.normalTexture.scale;o.normalScale.set(d,d)}if(n.occlusionTexture!==void 0&&a!==oi&&(h.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&a!==oi){const d=n.emissiveFactor;o.emissive=new Z().setRGB(d[0],d[1],d[2],ni)}return n.emissiveTexture!==void 0&&a!==oi&&h.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture,yt)),Promise.all(h).then(function(){const d=new a(o);return n.name&&(d.name=n.name),Qi(d,n),t.associations.set(d,{materials:e}),n.extensions&&ls(s,d,n),d})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function n(o){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return yp(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],c=pb(h),d=s[c];if(d)a.push(d.promise);else{let u;h.extensions&&h.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?u=n(h):u=yp(new wt,h,t),s[c]={primitive:h,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,n=i.meshes[e],a=n.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const c=a[l].material===void 0?cb(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let p=0,f=c.length;p<f;p++){const _=c[p],m=a[p];let g;const v=h[p];if(m.mode===Pi.TRIANGLES||m.mode===Pi.TRIANGLE_STRIP||m.mode===Pi.TRIANGLE_FAN||m.mode===void 0)g=n.isSkinnedMesh===!0?new rv(_,v):new Oe(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Pi.TRIANGLE_STRIP?g.geometry=fp(g.geometry,zf):m.mode===Pi.TRIANGLE_FAN&&(g.geometry=fp(g.geometry,Qh));else if(m.mode===Pi.LINES)g=new hv(_,v);else if(m.mode===Pi.LINE_STRIP)g=new Zc(_,v);else if(m.mode===Pi.LINE_LOOP)g=new cv(_,v);else if(m.mode===Pi.POINTS)g=new Jc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&db(g,n),g.name=t.createUniqueName(n.name||"mesh_"+e),Qi(g,n),m.extensions&&ls(s,g,m),t.assignFinalMaterial(g),d.push(g)}for(let p=0,f=d.length;p<f;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return n.extensions&&ls(s,d[0],n),d[0];const u=new kt;n.extensions&&ls(s,u,n),t.associations.set(u,{meshes:e});for(let p=0,f=d.length;p<f;p++)u.add(d[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ri(Ke.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ra(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Qi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,n=t.joints.length;s<n;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const n=s.pop(),a=s,o=[],l=[];for(let h=0,c=a.length;h<c;h++){const d=a[h];if(d){o.push(d);const u=new Ne;n!==null&&u.fromArray(n.array,h*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Kc(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],n=s.name?s.name:"animation_"+e,a=[],o=[],l=[],h=[],c=[];for(let d=0,u=s.channels.length;d<u;d++){const p=s.channels[d],f=s.samplers[p.sampler],_=p.target,m=_.node,g=s.parameters!==void 0?s.parameters[f.input]:f.input,v=s.parameters!==void 0?s.parameters[f.output]:f.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),h.push(f),c.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(d){const u=d[0],p=d[1],f=d[2],_=d[3],m=d[4],g=[];for(let M=0,x=u.length;M<x;M++){const w=u[M],b=p[M],A=f[M],y=_[M],T=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const U=i._createAnimationTracks(w,b,A,y,T);if(U)for(let R=0;R<U.length;R++)g.push(U[R])}const v=new i0(n,void 0,g);return Qi(v,s),v})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(n){const a=i._getNodeRef(i.meshCache,s.mesh,n);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=s.weights.length;l<h;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],n=i._loadNodeShallow(e),a=[],o=s.children||[];for(let h=0,c=o.length;h<c;h++)a.push(i.getDependency("node",o[h]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([n,Promise.all(a),l]).then(function(h){const c=h[0],d=h[1],u=h[2];u!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(u,mb)});for(let p=0,f=d.length;p<f;p++)c.add(d[p]);if(c.userData.pivot!==void 0&&d.length>0){const p=c.userData.pivot,f=d[0];c.pivot=new P().fromArray(p),c.position.x-=p[0],c.position.y-=p[1],c.position.z-=p[2],f.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],a=n.name?s.createUniqueName(n.name):"",o=[],l=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),n.camera!==void 0&&o.push(s.getDependency("camera",n.camera).then(function(h){return s._getNodeRef(s.cameraCache,n.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let c;if(n.isBone===!0?c=new jf:h.length>1?c=new kt:h.length===1?c=h[0]:c=new pt,c!==h[0])for(let d=0,u=h.length;d<u;d++)c.add(h[d]);if(n.name&&(c.userData.name=n.name,c.name=a),Qi(c,n),n.extensions&&ls(i,c,n),n.matrix!==void 0){const d=new Ne;d.fromArray(n.matrix),c.applyMatrix4(d)}else n.translation!==void 0&&c.position.fromArray(n.translation),n.rotation!==void 0&&c.quaternion.fromArray(n.rotation),n.scale!==void 0&&c.scale.fromArray(n.scale);if(!s.associations.has(c))s.associations.set(c,{});else if(n.mesh!==void 0&&s.meshCache.refs[n.mesh]>1){const d=s.associations.get(c);s.associations.set(c,{...d})}return s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,n=new kt;i.name&&(n.name=s.createUniqueName(i.name)),Qi(n,i),i.extensions&&ls(t,n,i);const a=i.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,d=l.length;c<d;c++){const u=l[c];u.parent!==null?n.add(zS(u)):n.add(u)}const h=c=>{const d=new Map;for(const[u,p]of s.associations)(u instanceof ji||u instanceof Ht)&&d.set(u,p);return c.traverse(u=>{const p=s.associations.get(u);p!=null&&d.set(u,p)}),d};return s.associations=h(n),n})}_createAnimationTracks(e,t,i,s,n){const a=[],o=e.name?e.name:e.uuid,l=[];zr[n.path]===zr.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let h;switch(zr[n.path]){case zr.weights:h=mn;break;case zr.rotation:h=gn;break;case zr.translation:case zr.scale:h=_n;break;default:i.itemSize===1?h=mn:h=_n;break}const c=s.interpolation!==void 0?hb[s.interpolation]:pa,d=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const f=new h(l[u]+"."+zr[n.path],t.array,d,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=uc(t.constructor),s=new Float32Array(t.length);for(let n=0,a=t.length;n<a;n++)s[n]=t[n]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof gn?lb:ym;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _b(r,e,t){const i=e.attributes,s=new cr;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(h[0],h[1],h[2])),o.normalized){const c=uc(rn[o.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const o=new P,l=new P;for(let h=0,c=n.length;h<c;h++){const d=n[h];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,f=u.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),u.normalized){const _=uc(rn[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}r.boundingBox=s;const a=new ur;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=a}function yp(r,e,t){const i=e.attributes,s=[];function n(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=cc[a]||a.toLowerCase();o in r.attributes||s.push(n(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});s.push(a)}return je.workingColorSpace!==ni&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Qi(r,e),_b(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ub(r,e.targets,t):r})}const Ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Pa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vb=new Ra(-1,1,1,-1,0,1);class yb extends wt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const xb=new yb;class xm{constructor(e){this._mesh=new Oe(xb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mb extends Pa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ko.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xp extends Pa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),n.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(s.EQUAL,1,4294967295),n.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),n.buffers.stencil.setLocked(!0)}}class Sb extends Pa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mb(Ro),this.copyPass.material.blending=ar,this.timer=new _0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,n=this.passes.length;s<n;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xp!==void 0&&(a instanceof xp?i=!0:a instanceof Sb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tb extends Pa{constructor(e,t,i=null,s=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Z}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const wb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Z(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vn extends Pa{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Z(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new li(n,a,{type:Ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new li(n,a,{type:Ti});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new li(n,a,{type:Ti});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),a=Math.round(a/2)}const o=wb;this.highPassUniforms=ko.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new te(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ko.clone(Ro.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,premultipliedAlpha:!0,blending:ha,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Z,this._oldClearAlpha=1,this._basic=new oi,this._fsQuad=new xm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,s),this.renderTargetsVertical[n].setSize(i,s),this.separableBlurMaterials[n].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=vn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}vn.BlurDirectionX=new te(1,0);vn.BlurDirectionY=new te(0,1);class Eb extends Gf{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Wi;e.deleteAttribute("uv");const t=new Ft({side:Kt}),i=new Ft,s=new nu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const n=new Oe(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const a=new Yo(e,i,6),o=new pt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Oe(e,Ys(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const h=new Oe(e,Ys(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);const c=new Oe(e,Ys(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const d=new Oe(e,Ys(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new Oe(e,Ys(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const p=new Oe(e,Ys(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ys(r){return new Yv({color:0,emissive:16777215,emissiveIntensity:r})}function Sr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Mm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yn={duration:.5,overwrite:!1,delay:0},uu,Zt,ft,Ii=1e8,lt=1/Ii,dc=Math.PI*2,Ab=dc/4,Cb=0,Sm=Math.sqrt,Rb=Math.cos,Pb=Math.sin,jt=function(r){return typeof r=="string"},Tt=function(r){return typeof r=="function"},Rr=function(r){return typeof r=="number"},du=function(r){return typeof r>"u"},hr=function(r){return typeof r=="object"},hi=function(r){return r!==!1},pu=function(){return typeof window<"u"},mo=function(r){return Tt(r)||jt(r)},bm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ei=Array.isArray,Lb=/random\([^)]+\)/g,Db=/,\s*/g,Mp=/(?:-?\.?\d|\.)+/gi,Tm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wm=/[+-]=-?[.\d]+/,Ib=/[^,'"\[\]\s]+/gi,Ub=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,er,pc,fu,Ei={},Bo={},Em,Am=function(r){return(Bo=xn(r,Ei))&&fi},mu=function(r,e){return console.warn("Invalid property",r,"set to",e,"Missing plugin? gsap.registerPlugin()")},xa=function(r,e){return!e&&console.warn(r)},Cm=function(r,e){return r&&(Ei[r]=e)&&Bo&&(Bo[r]=e)||Ei},Ma=function(){return 0},Nb={suppressEvents:!0,isStart:!0,kill:!1},Po={suppressEvents:!0,kill:!1},Ob={suppressEvents:!0},gu={},qr=[],fc={},Rm,vi={},Yl={},Sp=30,Lo=[],_u="",vu=function(r){var e=r[0],t,i;if(hr(e)||Tt(e)||(r=[r]),!(t=(e._gsap||{}).harness)){for(i=Lo.length;i--&&!Lo[i].targetTest(e););t=Lo[i]}for(i=r.length;i--;)r[i]&&(r[i]._gsap||(r[i]._gsap=new Qm(r[i],t)))||r.splice(i,1);return r},Ms=function(r){return r._gsap||vu(Ui(r))[0]._gsap},Pm=function(r,e,t){return(t=r[e])&&Tt(t)?r[e]():du(t)&&r.getAttribute&&r.getAttribute(e)||t},ci=function(r,e){return(r=r.split(",")).forEach(e)||r},At=function(r){return Math.round(r*1e5)/1e5||0},_t=function(r){return Math.round(r*1e7)/1e7||0},sn=function(r,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return r=parseFloat(r),t==="+"?r+i:t==="-"?r-i:t==="*"?r*i:r/i},Fb=function(r,e){for(var t=e.length,i=0;r.indexOf(e[i])<0&&++i<t;);return i<t},Ho=function(){var r=qr.length,e=qr.slice(0),t,i;for(fc={},qr.length=0,t=0;t<r;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yu=function(r){return!!(r._initted||r._startAt||r.add)},Lm=function(r,e,t,i){qr.length&&!Zt&&Ho(),r.render(e,t,!!(Zt&&e<0&&yu(r))),qr.length&&!Zt&&Ho()},Dm=function(r){var e=parseFloat(r);return(e||e===0)&&(r+"").match(Ib).length<2?e:jt(r)?r.trim():r},Im=function(r){return r},Ai=function(r,e){for(var t in e)t in r||(r[t]=e[t]);return r},zb=function(r){return function(e,t){for(var i in t)i in e||i==="duration"&&r||i==="ease"||(e[i]=t[i])}},xn=function(r,e){for(var t in e)r[t]=e[t];return r},bp=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=hr(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Vo=function(r,e){var t={},i;for(i in r)i in e||(t[i]=r[i]);return t},aa=function(r){var e=r.parent||vt,t=r.keyframes?zb(ei(r.keyframes)):Ai;if(hi(r.inherit))for(;e;)t(r,e.vars.defaults),e=e.parent||e._dp;return r},kb=function(r,e){for(var t=r.length,i=t===e.length;i&&t--&&r[t]===e[t];);return t<0},Um=function(r,e,t,i,s){var n=r[i],a;if(s)for(a=e[s];n&&n[s]>a;)n=n._prev;return n?(e._next=n._next,n._next=e):(e._next=r[t],r[t]=e),e._next?e._next._prev=e:r[i]=e,e._prev=n,e.parent=e._dp=r,e},Qo=function(r,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var s=e._prev,n=e._next;s?s._next=n:r[t]===e&&(r[t]=n),n?n._prev=s:r[i]===e&&(r[i]=s),e._next=e._prev=e.parent=null},Kr=function(r,e){r.parent&&(!e||r.parent.autoRemoveChildren)&&r.parent.remove&&r.parent.remove(r),r._act=0},Ss=function(r,e){if(r&&(!e||e._end>r._dur||e._start<0))for(var t=r;t;)t._dirty=1,t=t.parent;return r},Bb=function(r){for(var e=r.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return r},mc=function(r,e,t,i){return r._startAt&&(Zt?r._startAt.revert(Po):r.vars.immediateRender&&!r.vars.autoRevert||r._startAt.render(e,!0,i))},Hb=function r(e){return!e||e._ts&&r(e.parent)},Tp=function(r){return r._repeat?Mn(r._tTime,r=r.duration()+r._rDelay)*r:0},Mn=function(r,e){var t=Math.floor(r=_t(r/e));return r&&t===r?t-1:t},Go=function(r,e){return(r-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},el=function(r){return r._end=_t(r._start+(r._tDur/Math.abs(r._ts||r._rts||lt)||0))},tl=function(r,e){var t=r._dp;return t&&t.smoothChildTiming&&r._ts&&(r._start=_t(t._time-(r._ts>0?e/r._ts:((r._dirty?r.totalDuration():r._tDur)-e)/-r._ts)),el(r),t._dirty||Ss(t,r)),r},Nm=function(r,e){var t;if((e._time||!e._dur&&e._initted||e._start<r._time&&(e._dur||!e.add))&&(t=Go(r.rawTime(),e),(!e._dur||La(0,e.totalDuration(),t)-e._tTime>lt)&&e.render(t,!0)),Ss(r,e)._dp&&r._initted&&r._time>=r._dur&&r._ts){if(r._dur<r.duration())for(t=r;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;r._zTime=-lt}},ir=function(r,e,t,i){return e.parent&&Kr(e),e._start=_t((Rr(t)?t:t||r!==vt?Ri(r,t,e):r._time)+e._delay),e._end=_t(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Um(r,e,"_first","_last",r._sort?"_start":0),gc(e)||(r._recent=e),i||Nm(r,e),r._ts<0&&tl(r,r._tTime),r},Om=function(r,e){return(Ei.ScrollTrigger||mu("scrollTrigger",e))&&Ei.ScrollTrigger.create(e,r)},Fm=function(r,e,t,i,s){if(Mu(r,e,s),!r._initted)return 1;if(!t&&r._pt&&!Zt&&(r._dur&&r.vars.lazy!==!1||!r._dur&&r.vars.lazy)&&Rm!==xi.frame)return qr.push(r),r._lazy=[s,i],1},Vb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gc=function(r){var e=r.data;return e==="isFromStart"||e==="isStart"},Gb=function(r,e,t,i){var s=r.ratio,n=e<0||!e&&(!r._start&&Vb(r)&&!(!r._initted&&gc(r))||(r._ts<0||r._dp._ts<0)&&!gc(r))?0:1,a=r._rDelay,o=0,l,h,c;if(a&&r._repeat&&(o=La(0,r._tDur,e),h=Mn(o,a),r._yoyo&&h&1&&(n=1-n),h!==Mn(r._tTime,a)&&(s=1-n,r.vars.repeatRefresh&&r._initted&&r.invalidate())),n!==s||Zt||i||r._zTime===lt||!e&&r._zTime){if(!r._initted&&Fm(r,e,i,t,o))return;for(c=r._zTime,r._zTime=e||(t?lt:0),t||(t=e&&!c),r.ratio=n,r._from&&(n=1-n),r._time=0,r._tTime=o,l=r._pt;l;)l.r(n,l.d),l=l._next;e<0&&mc(r,e,t,!0),r._onUpdate&&!t&&Si(r,"onUpdate"),o&&r._repeat&&!t&&r.parent&&Si(r,"onRepeat"),(e>=r._tDur||e<0)&&r.ratio===n&&(n&&Kr(r,1),!t&&!Zt&&(Si(r,n?"onComplete":"onReverseComplete",!0),r._prom&&r._prom()))}else r._zTime||(r._zTime=e)},Wb=function(r,e,t){var i;if(t>e)for(i=r._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=r._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Sn=function(r,e,t,i){var s=r._repeat,n=_t(e)||0,a=r._tTime/r._tDur;return a&&!i&&(r._time*=n/r._dur),r._dur=n,r._tDur=s?s<0?1e10:_t(n*(s+1)+r._rDelay*s):n,a>0&&!i&&tl(r,r._tTime=r._tDur*a),r.parent&&el(r),t||Ss(r.parent,r),r},wp=function(r){return r instanceof si?Ss(r):Sn(r,r._dur)},Xb={_start:0,endTime:Ma,totalDuration:Ma},Ri=function r(e,t,i){var s=e.labels,n=e._recent||Xb,a=e.duration()>=Ii?n.endTime(!1):e._dur,o,l,h;return jt(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),h=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(o<0?n:i).totalDuration()/100:1)):o<0?(t in s||(s[t]=a),s[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),h&&i&&(l=l/100*(ei(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},oa=function(r,e,t){var i=Rr(e[1]),s=(i?2:1)+(r<2?0:1),n=e[s],a,o;if(i&&(n.duration=e[1]),n.parent=t,r){for(a=n,o=t;o&&!("immediateRender"in a);)a=o.vars.defaults||{},o=hi(o.vars.inherit)&&o.parent;n.immediateRender=hi(a.immediateRender),r<2?n.runBackwards=1:n.startAt=e[s-1]}return new It(e[0],n,e[s+1])},$r=function(r,e){return r||r===0?e(r):e},La=function(r,e,t){return t<r?r:t>e?e:t},Qt=function(r,e){return!jt(r)||!(e=Ub.exec(r))?"":e[1]},jb=function(r,e,t){return $r(t,function(i){return La(r,e,i)})},_c=[].slice,zm=function(r,e){return r&&hr(r)&&"length"in r&&(!e&&!r.length||r.length-1 in r&&hr(r[0]))&&!r.nodeType&&r!==er},qb=function(r,e,t){return t===void 0&&(t=[]),r.forEach(function(i){var s;return jt(i)&&!e||zm(i,1)?(s=t).push.apply(s,Ui(i)):t.push(i)})||t},Ui=function(r,e,t){return ft&&!e&&ft.selector?ft.selector(r):jt(r)&&!t&&(pc||!bn())?_c.call((e||fu).querySelectorAll(r),0):ei(r)?qb(r,t):zm(r)?_c.call(r,0):r?[r]:[]},vc=function(r){return r=Ui(r)[0]||xa("Invalid scope")||{},function(e){var t=r.current||r.nativeElement||r;return Ui(e,t.querySelectorAll?t:t===r?xa("Invalid scope")||fu.createElement("div"):r)}},km=function(r){return r.sort(function(){return .5-Math.random()})},Bm=function(r){if(Tt(r))return r;var e=hr(r)?r:{each:r},t=bs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,n={},a=i>0&&i<1,o=isNaN(i)||a,l=e.axis,h=i,c=i;return jt(i)?h=c={center:.5,edges:.5,end:1}[i]||0:!a&&o&&(h=i[0],c=i[1]),function(d,u,p){var f=(p||e).length,_=n[f],m,g,v,M,x,w,b,A,y;if(!_){if(y=e.grid==="auto"?0:(e.grid||[1,Ii])[1],!y){for(b=-Ii;b<(b=p[y++].getBoundingClientRect().left)&&y<f;);y<f&&y--}for(_=n[f]=[],m=o?Math.min(y,f)*h-.5:i%y,g=y===Ii?0:o?f*c/y-.5:i/y|0,b=0,A=Ii,w=0;w<f;w++)v=w%y-m,M=g-(w/y|0),_[w]=x=l?Math.abs(l==="y"?M:v):Sm(v*v+M*M),x>b&&(b=x),x<A&&(A=x);i==="random"&&km(_),_.max=b-A,_.min=A,_.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(y>f?f-1:l?l==="y"?f/y:y:Math.max(y,f/y))||0)*(i==="edges"?-1:1),_.b=f<0?s-f:s,_.u=Qt(e.amount||e.each)||0,t=t&&f<0?Zm(t):t}return f=(_[d]-_.min)/_.max||0,_t(_.b+(t?t(f):f)*_.v)+_.u}},yc=function(r){var e=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var i=_t(Math.round(parseFloat(t)/r)*r*e);return(i-i%1)/e+(Rr(t)?0:Qt(t))}},Hm=function(r,e){var t=ei(r),i,s;return!t&&hr(r)&&(i=t=r.radius||Ii,r.values?(r=Ui(r.values),(s=!Rr(r[0]))&&(i*=i)):r=yc(r.increment)),$r(e,t?Tt(r)?function(n){return s=r(n),Math.abs(s-n)<=i?s:n}:function(n){for(var a=parseFloat(s?n.x:n),o=parseFloat(s?n.y:0),l=Ii,h=0,c=r.length,d,u;c--;)s?(d=r[c].x-a,u=r[c].y-o,d=d*d+u*u):d=Math.abs(r[c]-a),d<l&&(l=d,h=c);return h=!i||l<=i?r[h]:n,s||h===n||Rr(n)?h:h+Qt(n)}:yc(r))},Vm=function(r,e,t,i){return $r(ei(r)?!e:t===!0?!!(t=0):!i,function(){return ei(r)?r[~~(Math.random()*r.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((r-t/2+Math.random()*(e-r+t*.99))/t)*t*i)/i})},Yb=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(i){return e.reduce(function(s,n){return n(s)},i)}},Kb=function(r,e){return function(t){return r(parseFloat(t))+(e||Qt(t))}},Zb=function(r,e,t){return Wm(r,e,0,1,t)},Gm=function(r,e,t){return $r(t,function(i){return r[~~e(i)]})},Jb=function r(e,t,i){var s=t-e;return ei(e)?Gm(e,r(0,e.length),t):$r(i,function(n){return(s+(n-e)%s)%s+e})},$b=function r(e,t,i){var s=t-e,n=s*2;return ei(e)?Gm(e,r(0,e.length-1),t):$r(i,function(a){return a=(n+(a-e)%n)%n||0,e+(a>s?n-a:a)})},Sa=function(r){return r.replace(Lb,function(e){var t=e.indexOf("[")+1,i=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(Db);return Vm(t?i:+i[0],t?0:+i[1],+i[2]||1e-5)})},Wm=function(r,e,t,i,s){var n=e-r,a=i-t;return $r(s,function(o){return t+((o-r)/n*a||0)})},Qb=function r(e,t,i,s){var n=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!n){var a=jt(e),o={},l,h,c,d,u;if(i===!0&&(s=1)&&(i=null),a)e={p:e},t={p:t};else if(ei(e)&&!ei(t)){for(c=[],d=e.length,u=d-2,h=1;h<d;h++)c.push(r(e[h-1],e[h]));d--,n=function(p){p*=d;var f=Math.min(u,~~p);return c[f](p-f)},i=t}else s||(e=xn(ei(e)?[]:{},e));if(!c){for(l in t)xu.call(o,e,l,"get",t[l]);n=function(p){return Tu(p,o)||(a?e.p:e)}}}return $r(i,n)},Ep=function(r,e,t){var i=r.labels,s=Ii,n,a,o;for(n in i)a=i[n]-e,a<0==!!t&&a&&s>(a=Math.abs(a))&&(o=n,s=a);return o},Si=function(r,e,t){var i=r.vars,s=i[e],n=ft,a=r._ctx,o,l,h;if(s)return o=i[e+"Params"],l=i.callbackScope||r,t&&qr.length&&Ho(),a&&(ft=a),h=o?s.apply(l,o):s.call(l),ft=n,h},Zn=function(r){return Kr(r),r.scrollTrigger&&r.scrollTrigger.kill(!!Zt),r.progress()<1&&Si(r,"onInterrupt"),r},Qs,Xm=[],jm=function(r){if(r)if(r=!r.name&&r.default||r,pu()||r.headless){var e=r.name,t=Tt(r),i=e&&!t&&r.init?function(){this._props=[]}:r,s={init:Ma,render:Tu,add:xu,kill:mT,modifier:fT,rawVars:0},n={targetTest:0,get:0,getSetter:bu,aliases:{},register:0};if(bn(),r!==i){if(vi[e])return;Ai(i,Ai(Vo(r,s),n)),xn(i.prototype,xn(s,Vo(r,n))),vi[i.prop=e]=i,r.targetTest&&(Lo.push(i),gu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cm(e,i),r.register&&r.register(fi,i,ui)}else Xm.push(r)},ot=255,Jn={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Kl=function(r,e,t){return r+=r<0?1:r>1?-1:0,(r*6<1?e+(t-e)*r*6:r<.5?t:r*3<2?e+(t-e)*(2/3-r)*6:e)*ot+.5|0},qm=function(r,e,t){var i=r?Rr(r)?[r>>16,r>>8&ot,r&ot]:0:Jn.black,s,n,a,o,l,h,c,d,u,p;if(!i){if(r.substr(-1)===","&&(r=r.substr(0,r.length-1)),Jn[r])i=Jn[r];else if(r.charAt(0)==="#"){if(r.length<6&&(s=r.charAt(1),n=r.charAt(2),a=r.charAt(3),r="#"+s+s+n+n+a+a+(r.length===5?r.charAt(4)+r.charAt(4):"")),r.length===9)return i=parseInt(r.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(r.substr(7),16)/255];r=parseInt(r.substr(1),16),i=[r>>16,r>>8&ot,r&ot]}else if(r.substr(0,3)==="hsl"){if(i=p=r.match(Mp),!e)o=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,n=h<=.5?h*(l+1):h+l-h*l,s=h*2-n,i.length>3&&(i[3]*=1),i[0]=Kl(o+1/3,s,n),i[1]=Kl(o,s,n),i[2]=Kl(o-1/3,s,n);else if(~r.indexOf("="))return i=r.match(Tm),t&&i.length<4&&(i[3]=1),i}else i=r.match(Mp)||Jn.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/ot,n=i[1]/ot,a=i[2]/ot,c=Math.max(s,n,a),d=Math.min(s,n,a),h=(c+d)/2,c===d?o=l=0:(u=c-d,l=h>.5?u/(2-c-d):u/(c+d),o=c===s?(n-a)/u+(n<a?6:0):c===n?(a-s)/u+2:(s-n)/u+4,o*=60),i[0]=~~(o+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),t&&i.length<4&&(i[3]=1),i},Ym=function(r){var e=[],t=[],i=-1;return r.split(Yr).forEach(function(s){var n=s.match($s)||[];e.push.apply(e,n),t.push(i+=n.length+1)}),e.c=t,e},Ap=function(r,e,t){var i="",s=(r+i).match(Yr),n=e?"hsla(":"rgba(",a=0,o,l,h,c;if(!s)return r;if(s=s.map(function(d){return(d=qm(d,e,1))&&n+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),t&&(h=Ym(r),o=t.c,o.join(i)!==h.c.join(i)))for(l=r.replace(Yr,"1").split($s),c=l.length-1;a<c;a++)i+=l[a]+(~o.indexOf(a)?s.shift()||n+"0,0,0,0)":(h.length?h:s.length?s:t).shift());if(!l)for(l=r.split(Yr),c=l.length-1;a<c;a++)i+=l[a]+s[a];return i+l[c]},Yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Jn)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),eT=/hsl[a]?\(/,Km=function(r){var e=r.join(" "),t;if(Yr.lastIndex=0,Yr.test(e))return t=eT.test(e),r[1]=Ap(r[1],t),r[0]=Ap(r[0],t,Ym(r[1])),!0},ba,xi=(function(){var r=Date.now,e=500,t=33,i=r(),s=i,n=1e3/240,a=n,o=[],l,h,c,d,u,p,f=function _(m){var g=r()-s,v=m===!0,M,x,w,b;if((g>e||g<0)&&(i+=g-t),s+=g,w=s-i,M=w-a,(M>0||v)&&(b=++d.frame,u=w-d.time*1e3,d.time=w=w/1e3,a+=M+(M>=n?4:n-M),x=1),v||(l=h(_)),x)for(p=0;p<o.length;p++)o[p](w,u,b,m)};return d={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(_){return u/(1e3/(_||60))},wake:function(){Em&&(!pc&&pu()&&(er=pc=window,fu=er.document||{},Ei.gsap=fi,(er.gsapVersions||(er.gsapVersions=[])).push(fi.version),Am(Bo||er.GreenSockGlobals||!er.gsap&&er||{}),Xm.forEach(jm)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),h=c||function(_){return setTimeout(_,a-d.time*1e3+1|0)},ba=1,f(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ba=0,h=Ma},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){n=1e3/(_||240),a=d.time*1e3+n},add:function(_,m,g){var v=m?function(M,x,w,b){_(M,x,w,b),d.remove(v)}:_;return d.remove(_),o[g?"unshift":"push"](v),bn(),v},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},d})(),bn=function(){return!ba&&xi.wake()},qe={},tT=/^[\d.\-M][\d.\-,\s]/,iT=/["']/g,rT=function(r){for(var e={},t=r.substr(1,r.length-3).split(":"),i=t[0],s=1,n=t.length,a,o,l;s<n;s++)o=t[s],a=s!==n-1?o.lastIndexOf(","):o.length,l=o.substr(0,a),e[i]=isNaN(l)?l.replace(iT,"").trim():+l,i=o.substr(a+1).trim();return e},sT=function(r){var e=r.indexOf("(")+1,t=r.indexOf(")"),i=r.indexOf("(",e);return r.substring(e,~i&&i<t?r.indexOf(")",t+1):t)},nT=function(r){var e=(r+"").split("("),t=qe[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~r.indexOf("{")?[rT(e[1])]:sT(r).split(",").map(Dm)):qe._CE&&tT.test(r)?qe._CE("",r):t},Zm=function(r){return function(e){return 1-r(1-e)}},Jm=function r(e,t){for(var i=e._first,s;i;)i instanceof si?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},bs=function(r,e){return r&&(Tt(r)?r:qe[r]||nT(r))||e},Rs=function(r,e,t,i){t===void 0&&(t=function(a){return 1-e(1-a)}),i===void 0&&(i=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var s={easeIn:e,easeOut:t,easeInOut:i},n;return ci(r,function(a){qe[a]=Ei[a]=s,qe[n=a.toLowerCase()]=t;for(var o in s)qe[n+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=qe[a+"."+o]=s[o]}),s},$m=function(r){return function(e){return e<.5?(1-r(1-e*2))/2:.5+r((e-.5)*2)/2}},Zl=function r(e,t,i){var s=t>=1?t:1,n=(i||(e?.3:.45))/(t<1?t:1),a=n/dc*(Math.asin(1/s)||0),o=function(h){return h===1?1:s*Math.pow(2,-10*h)*Pb((h-a)*n)+1},l=e==="out"?o:e==="in"?function(h){return 1-o(1-h)}:$m(o);return n=dc/n,l.config=function(h,c){return r(e,h,c)},l},Jl=function r(e,t){t===void 0&&(t=1.70158);var i=function(n){return n?--n*n*((t+1)*n+t)+1:0},s=e==="out"?i:e==="in"?function(n){return 1-i(1-n)}:$m(i);return s.config=function(n){return r(e,n)},s};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rs(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Rs("Elastic",Zl("in"),Zl("out"),Zl());(function(r,e){var t=1/e,i=2*t,s=2.5*t,n=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<s?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Rs("Bounce",function(a){return 1-n(1-a)},n)})(7.5625,2.75);Rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Rs("Circ",function(r){return-(Sm(1-r*r)-1)});Rs("Sine",function(r){return r===1?1:-Rb(r*Ab)+1});Rs("Back",Jl("in"),Jl("out"),Jl());qe.SteppedEase=qe.steps=Ei.SteppedEase={config:function(r,e){r===void 0&&(r=1);var t=1/r,i=r+(e?0:1),s=e?1:0,n=1-lt;return function(a){return((i*La(0,n,a)|0)+s)*t}}};yn.ease=qe["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _u+=r+","+r+"Params,"});var Qm=function(r,e){this.id=Cb++,r._gsap=this,this.target=r,this.harness=e,this.get=e?e.get:Pm,this.set=e?e.getSetter:bu},Ta=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sn(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),ba||xi.wake()}var e=r.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Sn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(bn(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tl(this,t),!s._dp||s.parent||Nm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ir(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===lt||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Lm(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Tp(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Tp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*s,i):this._repeat?Mn(this._tTime,s)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===t)return this;var s=this.parent&&this._ts?Go(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-lt?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),el(this),Bb(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=_t(t);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ir(i,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+(hi(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Go(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=Ob);var i=Zt;return Zt=t,yu(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(t){for(var i=this,s=arguments.length?t:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):s},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,wp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,wp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(Ri(this,t),hi(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,hi(i)),this._dur||(this._zTime=-lt),this},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,s;return!!(!t||this._ts&&this._initted&&t.isActive()&&(s=t.rawTime(!0))>=i&&s<this.endTime(!0)-lt)},e.eventCallback=function(t,i,s){var n=this.vars;return arguments.length>1?(i?(n[t]=i,s&&(n[t+"Params"]=s),t==="onUpdate"&&(this._onUpdate=i)):delete n[t],this):n[t]},e.then=function(t){var i=this,s=i._prom;return new Promise(function(n){var a=Tt(t)?t:Im,o=function(){var l=i.then;i.then=null,s&&s(),Tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),n(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Zn(this)},r})();Ai(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var si=(function(r){Mm(e,r);function e(i,s){var n;return i===void 0&&(i={}),n=r.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=hi(i.sortChildren),vt&&ir(i.parent||vt,Sr(n),s),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&Om(Sr(n),i.scrollTrigger),n}var t=e.prototype;return t.to=function(i,s,n){return oa(0,arguments,this),this},t.from=function(i,s,n){return oa(1,arguments,this),this},t.fromTo=function(i,s,n,a){return oa(2,arguments,this),this},t.set=function(i,s,n){return s.duration=0,s.parent=this,aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(i,s,Ri(this,n),1),this},t.call=function(i,s,n){return ir(this,It.delayedCall(0,i,s),n)},t.staggerTo=function(i,s,n,a,o,l,h){return n.duration=s,n.stagger=n.stagger||a,n.onComplete=l,n.onCompleteParams=h,n.parent=this,new It(i,n,Ri(this,o)),this},t.staggerFrom=function(i,s,n,a,o,l,h){return n.runBackwards=1,aa(n).immediateRender=hi(n.immediateRender),this.staggerTo(i,s,n,a,o,l,h)},t.staggerFromTo=function(i,s,n,a,o,l,h,c){return a.startAt=n,aa(a).immediateRender=hi(a.immediateRender),this.staggerTo(i,s,a,o,l,h,c)},t.render=function(i,s,n){var a=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:_t(i),c=this._zTime<0!=i<0&&(this._initted||!l),d,u,p,f,_,m,g,v,M,x,w,b;if(this!==vt&&h>o&&i>=0&&(h=o),h!==this._tTime||n||c){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,M=this._start,v=this._ts,m=!v,c&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,_=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,n);if(d=_t(h%_),h===o?(f=this._repeat,d=l):(x=_t(h/_),f=~~x,f&&f===x&&(d=l,f--),d>l&&(d=l)),x=Mn(this._tTime,_),!a&&this._tTime&&x!==f&&this._tTime-x*_-this._dur<=0&&(x=f),w&&f&1&&(d=l-d,b=1),f!==x&&!this._lock){var A=w&&x&1,y=A===(w&&f&1);if(f<x&&(A=!A),a=A?0:h%l?l:h,this._lock=1,this.render(a||(b?0:_t(f*_)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,x=f),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,y&&(this._lock=2,a=A?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Jm(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Wb(this,_t(a),_t(d)),g&&(h-=d-(d=g._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&l&&!s&&!x&&(Si(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&g!==u){if(u.parent!==this)return this.render(i,s,n);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,n),d!==this._time||!this._ts&&!m){g=0,p&&(h+=this._zTime=-lt);break}}u=p}else{u=this._last;for(var T=i<0?i:d;u;){if(p=u._prev,(u._act||T<=u._end)&&u._ts&&g!==u){if(u.parent!==this)return this.render(i,s,n);if(u.render(u._ts>0?(T-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(T-u._start)*u._ts,s,n||Zt&&yu(u)),d!==this._time||!this._ts&&!m){g=0,p&&(h+=this._zTime=T?-lt:lt);break}}u=p}}if(g&&!s&&(this.pause(),g.render(d>=a?0:-lt)._zTime=d>=a?1:-1,this._ts))return this._start=M,el(this),this.render(i,s,n);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(h===o&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===o&&this._ts>0||!h&&this._ts<0)&&Kr(this,1),!s&&!(i<0&&!a)&&(h||a||!o)&&(Si(this,h===o&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var n=this;if(Rr(s)||(s=Ri(this,s,i)),!(i instanceof Ta)){if(ei(i))return i.forEach(function(a){return n.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(Tt(i))i=It.delayedCall(0,i);else return this}return this!==i?ir(this,i,s):this},t.getChildren=function(i,s,n,a){i===void 0&&(i=!0),s===void 0&&(s=!0),n===void 0&&(n=!0),a===void 0&&(a=-Ii);for(var o=[],l=this._first;l;)l._start>=a&&(l instanceof It?s&&o.push(l):(n&&o.push(l),i&&o.push.apply(o,l.getChildren(!0,s,n)))),l=l._next;return o},t.getById=function(i){for(var s=this.getChildren(1,1,1),n=s.length;n--;)if(s[n].vars.id===i)return s[n]},t.remove=function(i){return jt(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(i.parent===this&&Qo(this,i),i===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(xi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ri(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,n){var a=It.delayedCall(0,s||Ma,n);return a.data="isPause",this._hasPause=1,ir(this,a,Ri(this,i))},t.removePause=function(i){var s=this._first;for(i=Ri(this,i);s;)s._start===i&&s.data==="isPause"&&Kr(s),s=s._next},t.killTweensOf=function(i,s,n){for(var a=this.getTweensOf(i,n),o=a.length;o--;)Gr!==a[o]&&a[o].kill(i,s);return this},t.getTweensOf=function(i,s){for(var n=[],a=Ui(i),o=this._first,l=Rr(s),h;o;)o instanceof It?Fb(o._targets,a)&&(l?(!Gr||o._initted&&o._ts)&&o.globalTime(0)<=s&&o.globalTime(o.totalDuration())>s:!s||o.isActive())&&n.push(o):(h=o.getTweensOf(a,s)).length&&n.push.apply(n,h),o=o._next;return n},t.tweenTo=function(i,s){s=s||{};var n=this,a=Ri(n,i),o=s,l=o.startAt,h=o.onStart,c=o.onStartParams,d=o.immediateRender,u,p=It.to(n,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:n._time))/n.timeScale())||lt,onStart:function(){if(n.pause(),!u){var f=s.duration||Math.abs((a-(l&&"time"in l?l.time:n._time))/n.timeScale());p._dur!==f&&Sn(p,f,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,c||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(i,s,n){return this.tweenTo(s,Ai({startAt:{time:Ri(this,i)}},n))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ep(this,Ri(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ep(this,Ri(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(i,s,n){n===void 0&&(n=0);var a=this._first,o=this.labels,l;for(i=_t(i);a;)a._start>=n&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in o)o[l]>=n&&(o[l]+=i);return Ss(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,n;s;)n=s._next,this.remove(s),s=n;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ss(this)},t.totalDuration=function(i){var s=0,n=this,a=n._last,o=Ii,l,h,c;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-i:i));if(n._dirty){for(c=n.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>o&&n._sort&&a._ts&&!n._lock?(n._lock=1,ir(n,a,h-a._delay,1)._lock=0):o=h,h<0&&a._ts&&(s-=h,(!c&&!n._dp||c&&c.smoothChildTiming)&&(n._start+=_t(h/n._ts),n._time-=h,n._tTime-=h),n.shiftChildren(-h,!1,-1/0),o=0),a._end>s&&a._ts&&(s=a._end),a=l;Sn(n,n===vt&&n._time>s?n._time:s,1,1),n._dirty=0}return n._tDur},e.updateRoot=function(i){if(vt._ts&&(Lm(vt,Go(i,vt)),Rm=xi.frame),xi.frame>=Sp){Sp+=wi.autoSleep||120;var s=vt._first;if((!s||!s._ts)&&wi.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e})(Ta);Ai(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var aT=function(r,e,t,i,s,n,a){var o=new ui(this._pt,r,e,0,1,ng,null,s),l=0,h=0,c,d,u,p,f,_,m,g;for(o.b=t,o.e=i,t+="",i+="",(m=~i.indexOf("random("))&&(i=Sa(i)),n&&(g=[t,i],n(g,r,e),t=g[0],i=g[1]),d=t.match(ql)||[];c=ql.exec(i);)p=c[0],f=i.substring(l,c.index),u?u=(u+1)%5:f.substr(-5)==="rgba("&&(u=1),p!==d[h++]&&(_=parseFloat(d[h-1])||0,o._pt={_next:o._pt,p:f||h===1?f:",",s:_,c:p.charAt(1)==="="?sn(_,p)-_:parseFloat(p)-_,m:u&&u<4?Math.round:0},l=ql.lastIndex);return o.c=l<i.length?i.substring(l,i.length):"",o.fp=a,(wm.test(i)||m)&&(o.e=0),this._pt=o,o},xu=function(r,e,t,i,s,n,a,o,l,h){Tt(i)&&(i=i(s||0,r,n));var c=r[e],d=t!=="get"?t:Tt(c)?l?r[e.indexOf("set")||!Tt(r["get"+e.substr(3)])?e:"get"+e.substr(3)](l):r[e]():c,u=Tt(c)?l?uT:rg:Su,p;if(jt(i)&&(~i.indexOf("random(")&&(i=Sa(i)),i.charAt(1)==="="&&(p=sn(d,i)+(Qt(d)||0),(p||p===0)&&(i=p))),!h||d!==i||xc)return!isNaN(d*i)&&i!==""?(p=new ui(this._pt,r,e,+d||0,i-(d||0),typeof c=="boolean"?pT:sg,0,u),l&&(p.fp=l),a&&p.modifier(a,this,r),this._pt=p):(!c&&!(e in r)&&mu(e,i),aT.call(this,r,e,d,i,u,o||wi.stringFilter,l))},oT=function(r,e,t,i,s){if(Tt(r)&&(r=la(r,s,e,t,i)),!hr(r)||r.style&&r.nodeType||ei(r)||bm(r))return jt(r)?la(r,s,e,t,i):r;var n={},a;for(a in r)n[a]=la(r[a],s,e,t,i);return n},eg=function(r,e,t,i,s,n){var a,o,l,h;if(vi[r]&&(a=new vi[r]).init(s,a.rawVars?e[r]:oT(e[r],i,s,n,t),t,i,n)!==!1&&(t._pt=o=new ui(t._pt,s,r,0,1,a.render,a,0,a.priority),t!==Qs))for(l=t._ptLookup[t._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=o;return a},Gr,xc,Mu=function r(e,t,i){var s=e.vars,n=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,h=s.onUpdate,c=s.runBackwards,d=s.yoyoEase,u=s.keyframes,p=s.autoRevert,f=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,M=e._overwrite==="auto"&&!uu,x=e.timeline,w,b,A,y,T,U,R,L,N,k,B,z,H;if(x&&(!u||!n)&&(n="none"),e._ease=bs(n,yn.ease),e._yEase=d?Zm(bs(d===!0?n:d,yn.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!x&&!!s.runBackwards,!x||u&&!s.stagger){if(L=m[0]?Ms(m[0]).harness:0,z=L&&s[L.prop],w=Vo(s,gu),_&&(_._zTime<0&&_.progress(1),t<0&&c&&o&&!p?_.render(-1,!0):_.revert(c&&f?Po:Nb),_._lazy=0),a){if(Kr(e._startAt=It.set(m,Ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&hi(l),startAt:null,delay:0,onUpdate:h&&function(){return Si(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!o&&!p)&&e._startAt.revert(Po),o&&f&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&f&&!_){if(t&&(o=!1),A=Ai({overwrite:!1,data:"isFromStart",lazy:o&&!_&&hi(l),immediateRender:o,stagger:0,parent:g},w),z&&(A[L.prop]=z),Kr(e._startAt=It.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Po):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=f&&hi(l)||l&&!f,b=0;b<m.length;b++){if(T=m[b],R=T._gsap||vu(m)[b]._gsap,e._ptLookup[b]=k={},fc[R.id]&&qr.length&&Ho(),B=v===m?b:v.indexOf(T),L&&(N=new L).init(T,z||w,e,B,v)!==!1&&(e._pt=y=new ui(e._pt,T,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function($){k[$]=y}),N.priority&&(U=1)),!L||z)for(A in w)vi[A]&&(N=eg(A,w,e,B,T,v))?N.priority&&(U=1):k[A]=y=xu.call(e,T,A,"get",w[A],B,v,0,s.stringFilter);e._op&&e._op[b]&&e.kill(T,e._op[b]),M&&e._pt&&(Gr=e,vt.killTweensOf(T,k,e.globalTime(t)),H=!e.parent,Gr=0),e._pt&&l&&(fc[R.id]=1)}U&&ag(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!H,u&&t<=0&&x.render(Ii,!0,!0)},lT=function(r,e,t,i,s,n,a,o){var l=(r._pt&&r._ptCache||(r._ptCache={}))[e],h,c,d,u;if(!l)for(l=r._ptCache[e]=[],d=r._ptLookup,u=r._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return xc=1,r.vars[e]="+=0",Mu(r,a),xc=0,o?xa(e+" not eligible for reset"):1;l.push(h)}for(u=l.length;u--;)c=l[u],h=c._pt||c,h.s=(i||i===0)&&!s?i:h.s+(i||0)+n*h.c,h.c=t-h.s,c.e&&(c.e=At(t)+Qt(c.e)),c.b&&(c.b=h.s+Qt(c.b))},hT=function(r,e){var t=r[0]?Ms(r[0]).harness:0,i=t&&t.aliases,s,n,a,o;if(!i)return e;s=xn({},e);for(n in i)if(n in s)for(o=i[n].split(","),a=o.length;a--;)s[o[a]]=s[n];return s},cT=function(r,e,t,i){var s=e.ease||i||"power1.inOut",n,a;if(ei(e))a=t[r]||(t[r]=[]),e.forEach(function(o,l){return a.push({t:l/(e.length-1)*100,v:o,e:s})});else for(n in e)a=t[n]||(t[n]=[]),n==="ease"||a.push({t:parseFloat(r),v:e[n],e:s})},la=function(r,e,t,i,s){return Tt(r)?r.call(e,t,i,s):jt(r)&&~r.indexOf("random(")?Sa(r):r},tg=_u+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ig={};ci(tg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ig[r]=1});var It=(function(r){Mm(e,r);function e(i,s,n,a){var o;typeof s=="number"&&(n.duration=s,s=n,n=null),o=r.call(this,a?s:aa(s))||this;var l=o.vars,h=l.duration,c=l.delay,d=l.immediateRender,u=l.stagger,p=l.overwrite,f=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,v=s.parent||vt,M=(ei(i)||bm(i)?Rr(i[0]):"length"in s)?[i]:Ui(i),x,w,b,A,y,T,U,R;if(o._targets=M.length?vu(M):xa("GSAP target "+i+" not found. https://gsap.com",!wi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,f||u||mo(h)||mo(c)){if(s=o.vars,x=o.timeline=new si({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=Sr(o),x._start=0,u||mo(h)||mo(c)){if(A=M.length,U=u&&Bm(u),hr(u))for(y in u)~tg.indexOf(y)&&(R||(R={}),R[y]=u[y]);for(w=0;w<A;w++)b=Vo(s,ig),b.stagger=0,g&&(b.yoyoEase=g),R&&xn(b,R),T=M[w],b.duration=+la(h,Sr(o),w,T,M),b.delay=(+la(c,Sr(o),w,T,M)||0)-o._delay,!u&&A===1&&b.delay&&(o._delay=c=b.delay,o._start+=c,b.delay=0),x.to(T,b,U?U(w,T,M):0),x._ease=qe.none;x.duration()?h=c=0:o.timeline=0}else if(f){aa(Ai(x.vars.defaults,{ease:"none"})),x._ease=bs(f.ease||s.ease||"none");var L=0,N,k,B;if(ei(f))f.forEach(function(z){return x.to(M,z,">")}),x.duration();else{b={};for(y in f)y==="ease"||y==="easeEach"||cT(y,f[y],b,f.easeEach);for(y in b)for(N=b[y].sort(function(z,H){return z.t-H.t}),L=0,w=0;w<N.length;w++)k=N[w],B={ease:k.e,duration:(k.t-(w?N[w-1].t:0))/100*h},B[y]=k.v,x.to(M,B,L),L+=B.duration;x.duration()<h&&x.to({},{duration:h-x.duration()})}}h||o.duration(h=x.duration())}else o.timeline=0;return p===!0&&!uu&&(Gr=Sr(o),vt.killTweensOf(M),Gr=0),ir(v,Sr(o),n),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(d||!h&&!f&&o._start===_t(v._time)&&hi(d)&&Hb(Sr(o))&&v.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-c)||0)),m&&Om(Sr(o),m),o}var t=e.prototype;return t.render=function(i,s,n){var a=this._time,o=this._tDur,l=this._dur,h=i<0,c=i>o-lt&&!h?o:i<lt?0:i,d,u,p,f,_,m,g,v,M;if(!l)Gb(this,i,s,n);else if(c!==this._tTime||!i||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=c,v=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(f*100+i,s,n);if(d=_t(c%f),c===o?(p=this._repeat,d=l):(_=_t(c/f),p=~~_,p&&p===_?(d=l,p--):d>l&&(d=l)),m=this._yoyo&&p&1,m&&(M=this._yEase,d=l-d),_=Mn(this._tTime,f),d===a&&!n&&this._initted&&p===_)return this._tTime=c,this;p!==_&&(v&&this._yEase&&Jm(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==f&&this._initted&&(this._lock=n=1,this.render(_t(f*p),!0).invalidate()._lock=0))}if(!this._initted){if(Fm(this,h?i:d,n,s,c))return this._tTime=0,this;if(a!==this._time&&!(n&&this.vars.repeatRefresh&&p!==_))return this;if(l!==this._dur)return this.render(i,s,n)}if(this._tTime=c,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(M||this._ease)(d/l),this._from&&(this.ratio=g=1-g),!a&&c&&!s&&!_&&(Si(this,"onStart"),this._tTime!==c))return this;for(u=this._pt;u;)u.r(g,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,n)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&mc(this,i,s,n),Si(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(h&&!this._onUpdate&&mc(this,i,!0,!0),(i||!l)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&Kr(this,1),!s&&!(h&&!a)&&(c||a||m)&&(Si(this,c===o?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,n,a,o){ba||xi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mu(this,l),h=this._ease(l/this._dur),lT(this,i,s,n,a,h,l,o)?this.resetTo(i,s,n,a,1):(tl(this,0),this.parent||Um(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Zt),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Gr&&Gr.vars.overwrite!==!0)._first||Zn(this),this.parent&&n!==this.timeline.totalDuration()&&Sn(this,this._dur*this.timeline._tDur/n,0,1),this}var a=this._targets,o=i?Ui(i):a,l=this._ptLookup,h=this._pt,c,d,u,p,f,_,m;if((!s||s==="all")&&kb(a,o))return s==="all"&&(this._pt=0),Zn(this);for(c=this._op=this._op||[],s!=="all"&&(jt(s)&&(f={},ci(s,function(g){return f[g]=1}),s=f),s=hT(a,s)),m=a.length;m--;)if(~o.indexOf(a[m])){d=l[m],s==="all"?(c[m]=s,p=d,u={}):(u=c[m]=c[m]||{},p=s);for(f in p)_=d&&d[f],_&&((!("kill"in _.d)||_.d.kill(f)===!0)&&Qo(this,_,"_pt"),delete d[f]),u!=="all"&&(u[f]=1)}return this._initted&&!this._pt&&h&&Zn(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return oa(1,arguments)},e.delayedCall=function(i,s,n,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:a})},e.fromTo=function(i,s,n){return oa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,n){return vt.killTweensOf(i,s,n)},e})(Ta);Ai(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(r){It[r]=function(){var e=new si,t=_c.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Su=function(r,e,t){return r[e]=t},rg=function(r,e,t){return r[e](t)},uT=function(r,e,t,i){return r[e](i.fp,t)},dT=function(r,e,t){return r.setAttribute(e,t)},bu=function(r,e){return Tt(r[e])?rg:du(r[e])&&r.setAttribute?dT:Su},sg=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e6)/1e6,e)},pT=function(r,e){return e.set(e.t,e.p,!!(e.s+e.c*r),e)},ng=function(r,e){var t=e._pt,i="";if(!r&&e.b)i=e.b;else if(r===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*r):Math.round((t.s+t.c*r)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},Tu=function(r,e){for(var t=e._pt;t;)t.r(r,t.d),t=t._next},fT=function(r,e,t,i){for(var s=this._pt,n;s;)n=s._next,s.p===i&&s.modifier(r,e,t),s=n},mT=function(r){for(var e=this._pt,t,i;e;)i=e._next,e.p===r&&!e.op||e.op===r?Qo(this,e,"_pt"):e.dep||(t=1),e=i;return!t},gT=function(r,e,t,i){i.mSet(r,e,i.m.call(i.tween,t,i.mt),i)},ag=function(r){for(var e=r._pt,t,i,s,n;e;){for(t=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:n)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:n=e,e=t}r._pt=s},ui=(function(){function r(t,i,s,n,a,o,l,h,c){this.t=i,this.s=n,this.c=a,this.p=s,this.r=o||sg,this.d=l||this,this.set=h||Su,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(t,i,s){this.mSet=this.mSet||this.set,this.set=gT,this.m=t,this.mt=s,this.tween=i},r})();ci(_u+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return gu[r]=1});Ei.TweenMax=Ei.TweenLite=It;Ei.TimelineLite=Ei.TimelineMax=si;vt=new si({sortChildren:!1,defaults:yn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=Km;var Ts=[],Do={},_T=[],Cp=0,vT=0,$l=function(r){return(Do[r]||_T).map(function(e){return e()})},Mc=function(){var r=Date.now(),e=[];r-Cp>2&&($l("matchMediaInit"),Ts.forEach(function(t){var i=t.queries,s=t.conditions,n,a,o,l;for(a in i)n=er.matchMedia(i[a]).matches,n&&(o=1),n!==s[a]&&(s[a]=n,l=1);l&&(t.revert(),o&&e.push(t))}),$l("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Cp=r,$l("matchMedia"))},og=(function(){function r(t,i){this.selector=i&&vc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=vT++,t&&this.add(t)}var e=r.prototype;return e.add=function(t,i,s){Tt(t)&&(s=i,i=t,t=Tt);var n=this,a=function(){var o=ft,l=n.selector,h;return o&&o!==n&&o.data.push(n),s&&(n.selector=vc(s)),ft=n,h=i.apply(n,arguments),Tt(h)&&n._r.push(h),ft=o,n.selector=l,n.isReverted=!1,h};return n.last=a,t===Tt?a(n,function(o){return n.add(null,o)}):t?n[t]=a:a},e.ignore=function(t){var i=ft;ft=null,t(this),ft=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof r?t.push.apply(t,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var s=this;if(t?(function(){for(var a=s.getTweens(),o=s.data.length,l;o--;)l=s.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,c){return c.g-h.g||-1/0}).forEach(function(h){return h.t.revert(t)}),o=s.data.length;o--;)l=s.data[o],l instanceof si?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof It)&&l.revert&&l.revert(t);s._r.forEach(function(h){return h(t,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var n=Ts.length;n--;)Ts[n].id===this.id&&Ts.splice(n,1)},e.revert=function(t){this.kill(t||{})},r})(),yT=(function(){function r(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=r.prototype;return e.add=function(t,i,s){hr(t)||(t={matches:t});var n=new og(0,s||this.scope),a=n.conditions={},o,l,h;ft&&!n.selector&&(n.selector=ft.selector),this.contexts.push(n),i=n.add("onMatch",i),n.queries=t;for(l in t)l==="all"?h=1:(o=er.matchMedia(t[l]),o&&(Ts.indexOf(n)<0&&Ts.push(n),(a[l]=o.matches)&&(h=1),o.addListener?o.addListener(Mc):o.addEventListener("change",Mc)));return h&&i(n,function(c){return n.add(null,c)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},r})(),Wo={registerPlugin:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e.forEach(function(i){return jm(i)})},timeline:function(r){return new si(r)},getTweensOf:function(r,e){return vt.getTweensOf(r,e)},getProperty:function(r,e,t,i){jt(r)&&(r=Ui(r)[0]);var s=Ms(r||{}).get,n=t?Im:Dm;return t==="native"&&(t=""),r&&(e?n((vi[e]&&vi[e].get||s)(r,e,t,i)):function(a,o,l){return n((vi[a]&&vi[a].get||s)(r,a,o,l))})},quickSetter:function(r,e,t){if(r=Ui(r),r.length>1){var i=r.map(function(h){return fi.quickSetter(h,e,t)}),s=i.length;return function(h){for(var c=s;c--;)i[c](h)}}r=r[0]||{};var n=vi[e],a=Ms(r),o=a.harness&&(a.harness.aliases||{})[e]||e,l=n?function(h){var c=new n;Qs._pt=0,c.init(r,t?h+t:h,Qs,0,[r]),c.render(1,c),Qs._pt&&Tu(1,Qs)}:a.set(r,o);return n?l:function(h){return l(r,o,t?h+t:h,a,1)}},quickTo:function(r,e,t){var i,s=fi.to(r,Ai((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),t||{})),n=function(a,o,l){return s.resetTo(e,a,o,l)};return n.tween=s,n},isTweening:function(r){return vt.getTweensOf(r,!0).length>0},defaults:function(r){return r&&r.ease&&(r.ease=bs(r.ease,yn.ease)),bp(yn,r||{})},config:function(r){return bp(wi,r||{})},registerEffect:function(r){var e=r.name,t=r.effect,i=r.plugins,s=r.defaults,n=r.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!vi[a]&&!Ei[a]&&xa(e+" effect requires "+a+" plugin.")}),Yl[e]=function(a,o,l){return t(Ui(a),Ai(o||{},s),l)},n&&(si.prototype[e]=function(a,o,l){return this.add(Yl[e](a,hr(o)?o:(l=o)&&{},this),l)})},registerEase:function(r,e){qe[r]=bs(e)},parseEase:function(r,e){return arguments.length?bs(r,e):qe},getById:function(r){return vt.getById(r)},exportRoot:function(r,e){r===void 0&&(r={});var t=new si(r),i,s;for(t.smoothChildTiming=hi(r.smoothChildTiming),vt.remove(t),t._dp=0,t._time=t._tTime=vt._time,i=vt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&ir(t,i,i._start-i._delay),i=s;return ir(vt,t,0),t},context:function(r,e){return r?new og(r,e):ft},matchMedia:function(r){return new yT(r)},matchMediaRefresh:function(){return Ts.forEach(function(r){var e=r.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&r.revert()})||Mc()},addEventListener:function(r,e){var t=Do[r]||(Do[r]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(r,e){var t=Do[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:Jb,wrapYoyo:$b,distribute:Bm,random:Vm,snap:Hm,normalize:Zb,getUnit:Qt,clamp:jb,splitColor:qm,toArray:Ui,selector:vc,mapRange:Wm,pipe:Yb,unitize:Kb,interpolate:Qb,shuffle:km},install:Am,effects:Yl,ticker:xi,updateRoot:si.updateRoot,plugins:vi,globalTimeline:vt,core:{PropTween:ui,globals:Cm,Tween:It,Timeline:si,Animation:Ta,getCache:Ms,_removeLinkedListItem:Qo,reverting:function(){return Zt},context:function(r){return r&&ft&&(ft.data.push(r),r._ctx=ft),ft},suppressOverwrites:function(r){return uu=r}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wo[r]=It[r]});xi.add(si.updateRoot);Qs=Wo.to({},{duration:0});var xT=function(r,e){for(var t=r._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},MT=function(r,e){var t=r._targets,i,s,n;for(i in e)for(s=t.length;s--;)n=r._ptLookup[s][i],n&&(n=n.d)&&(n._pt&&(n=xT(n,i)),n&&n.modifier&&n.modifier(e[i],r,t[s],i))},Ql=function(r,e){return{name:r,headless:1,rawVars:1,init:function(t,i,s){s._onInit=function(n){var a,o;if(jt(i)&&(a={},ci(i,function(l){return a[l]=1}),i=a),e){a={};for(o in i)a[o]=e(i[o]);i=a}MT(n,i)}}}},fi=Wo.registerPlugin({name:"attr",init:function(r,e,t,i,s){var n,a,o;this.tween=t;for(n in e)o=r.getAttribute(n)||"",a=this.add(r,"setAttribute",(o||0)+"",e[n],i,s,0,0,n),a.op=n,a.b=o,this._props.push(n)},render:function(r,e){for(var t=e._pt;t;)Zt?t.set(t.t,t.p,t.b,t):t.r(r,t.d),t=t._next}},{name:"endArray",headless:1,init:function(r,e){for(var t=e.length;t--;)this.add(r,t,r[t]||0,e[t],0,0,0,0,0,1)}},Ql("roundProps",yc),Ql("modifiers"),Ql("snap",Hm))||Wo;It.version=si.version=fi.version="3.14.2";Em=1;pu()&&bn();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;var Rp,Wr,nn,wu,vs,Pp,Eu,ST=function(){return typeof window<"u"},Pr={},ds=180/Math.PI,an=Math.PI/180,Ks=Math.atan2,Lp=1e8,Au=/([A-Z])/g,bT=/(left|right|width|margin|padding|x)/i,TT=/[\s,\(]\S/,nr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sc=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},wT=function(r,e){return e.set(e.t,e.p,r===1?e.e:Math.round((e.s+e.c*r)*1e4)/1e4+e.u,e)},ET=function(r,e){return e.set(e.t,e.p,r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},AT=function(r,e){return e.set(e.t,e.p,r===1?e.e:r?Math.round((e.s+e.c*r)*1e4)/1e4+e.u:e.b,e)},CT=function(r,e){var t=e.s+e.c*r;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},lg=function(r,e){return e.set(e.t,e.p,r?e.e:e.b,e)},hg=function(r,e){return e.set(e.t,e.p,r!==1?e.b:e.e,e)},RT=function(r,e,t){return r.style[e]=t},PT=function(r,e,t){return r.style.setProperty(e,t)},LT=function(r,e,t){return r._gsap[e]=t},DT=function(r,e,t){return r._gsap.scaleX=r._gsap.scaleY=t},IT=function(r,e,t,i,s){var n=r._gsap;n.scaleX=n.scaleY=t,n.renderTransform(s,n)},UT=function(r,e,t,i,s){var n=r._gsap;n[e]=t,n.renderTransform(s,n)},Mt="transform",di=Mt+"Origin",NT=function r(e,t){var i=this,s=this.target,n=s.style,a=s._gsap;if(e in Pr&&n){if(this.tfm=this.tfm||{},e!=="transform")e=nr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Tr(s,o)}):this.tfm[e]=a.x?a[e]:Tr(s,e),e===di&&(this.tfm.zOrigin=a.zOrigin);else return nr.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Mt)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=Mt}(n||t)&&this.props.push(e,t,n[e])},cg=function(r){r.translate&&(r.removeProperty("translate"),r.removeProperty("scale"),r.removeProperty("rotate"))},OT=function(){var r=this.props,e=this.target,t=e.style,i=e._gsap,s,n;for(s=0;s<r.length;s+=3)r[s+1]?r[s+1]===2?e[r[s]](r[s+2]):e[r[s]]=r[s+2]:r[s+2]?t[r[s]]=r[s+2]:t.removeProperty(r[s].substr(0,2)==="--"?r[s]:r[s].replace(Au,"-$1").toLowerCase());if(this.tfm){for(n in this.tfm)i[n]=this.tfm[n];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Eu(),(!s||!s.isStart)&&!t[Mt]&&(cg(t),i.zOrigin&&t[di]&&(t[di]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ug=function(r,e){var t={target:r,props:[],revert:OT,save:NT};return r._gsap||fi.core.getCache(r),e&&r.style&&r.nodeType&&e.split(",").forEach(function(i){return t.save(i)}),t},dg,bc=function(r,e){var t=Wr.createElementNS?Wr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),r):Wr.createElement(r);return t&&t.style?t:Wr.createElement(r)},bi=function r(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Au,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&r(e,Tn(t)||t,1)||""},Dp="O,Moz,ms,Ms,Webkit".split(","),Tn=function(r,e,t){var i=e||vs,s=i.style,n=5;if(r in s&&!t)return r;for(r=r.charAt(0).toUpperCase()+r.substr(1);n--&&!(Dp[n]+r in s););return n<0?null:(n===3?"ms":n>=0?Dp[n]:"")+r},Tc=function(){ST()&&window.document&&(Rp=window,Wr=Rp.document,nn=Wr.documentElement,vs=bc("div")||{style:{}},bc("div"),Mt=Tn(Mt),di=Mt+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dg=!!Tn("perspective"),Eu=fi.core.reverting,wu=1)},Ip=function(r){var e=r.ownerSVGElement,t=bc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=r.cloneNode(!0),s;i.style.display="block",t.appendChild(i),nn.appendChild(t);try{s=i.getBBox()}catch{}return t.removeChild(i),nn.removeChild(t),s},Up=function(r,e){for(var t=e.length;t--;)if(r.hasAttribute(e[t]))return r.getAttribute(e[t])},pg=function(r){var e,t;try{e=r.getBBox()}catch{e=Ip(r),t=1}return e&&(e.width||e.height)||t||(e=Ip(r)),e&&!e.width&&!e.x&&!e.y?{x:+Up(r,["x","cx","x1"])||0,y:+Up(r,["y","cy","y1"])||0,width:0,height:0}:e},fg=function(r){return!!(r.getCTM&&(!r.parentNode||r.ownerSVGElement)&&pg(r))},Zr=function(r,e){if(e){var t=r.style,i;e in Pr&&e!==di&&(e=Mt),t.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(i==="--"?e:e.replace(Au,"-$1").toLowerCase())):t.removeAttribute(e)}},Xr=function(r,e,t,i,s,n){var a=new ui(r._pt,e,t,0,1,n?hg:lg);return r._pt=a,a.b=i,a.e=s,r._props.push(t),a},Np={deg:1,rad:1,turn:1},FT={grid:1,flex:1},Jr=function r(e,t,i,s){var n=parseFloat(i)||0,a=(i+"").trim().substr((n+"").length)||"px",o=vs.style,l=bT.test(t),h=e.tagName.toLowerCase()==="svg",c=(h?"client":"offset")+(l?"Width":"Height"),d=100,u=s==="px",p=s==="%",f,_,m,g;if(s===a||!n||Np[s]||Np[a])return n;if(a!=="px"&&!u&&(n=r(e,t,i,"px")),g=e.getCTM&&fg(e),(p||a==="%")&&(Pr[t]||~t.indexOf("adius")))return f=g?e.getBBox()[l?"width":"height"]:e[c],At(p?n/f*d:n/100*f);if(o[l?"width":"height"]=d+(u?a:s),_=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===xi.time&&!m.uncache)return At(n/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+s,f=e[c],v?e.style[t]=v:Zr(e,t)}else(p||a==="%")&&!FT[bi(_,"display")]&&(o.position=bi(e,"position")),_===e&&(o.position="static"),_.appendChild(vs),f=vs[c],_.removeChild(vs),o.position="absolute";return l&&p&&(m=Ms(_),m.time=xi.time,m.width=_[c]),At(u?f*n/d:f&&n?d/f*n:0)},Tr=function(r,e,t,i){var s;return wu||Tc(),e in nr&&e!=="transform"&&(e=nr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Pr[e]&&e!=="transform"?(s=Ea(r,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:jo(bi(r,di))+" "+s.zOrigin+"px"):(s=r.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xo[e]&&Xo[e](r,e,t)||bi(r,e)||Pm(r,e)||(e==="opacity"?1:0))),t&&!~(s+"").trim().indexOf(" ")?Jr(r,e,s,t)+t:s},zT=function(r,e,t,i){if(!t||t==="none"){var s=Tn(e,r,1),n=s&&bi(r,s,1);n&&n!==t?(e=s,t=n):e==="borderColor"&&(t=bi(r,"borderTopColor"))}var a=new ui(this._pt,r.style,e,0,1,ng),o=0,l=0,h,c,d,u,p,f,_,m,g,v,M,x;if(a.b=t,a.e=i,t+="",i+="",i.substring(0,6)==="var(--"&&(i=bi(r,i.substring(4,i.indexOf(")")))),i==="auto"&&(f=r.style[e],r.style[e]=i,i=bi(r,e)||i,f?r.style[e]=f:Zr(r,e)),h=[t,i],Km(h),t=h[0],i=h[1],d=t.match($s)||[],x=i.match($s)||[],x.length){for(;c=$s.exec(i);)_=c[0],g=i.substring(o,c.index),p?p=(p+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(p=1),_!==(f=d[l++]||"")&&(u=parseFloat(f)||0,M=f.substr((u+"").length),_.charAt(1)==="="&&(_=sn(u,_)+M),m=parseFloat(_),v=_.substr((m+"").length),o=$s.lastIndex-v.length,v||(v=v||wi.units[e]||M,o===i.length&&(i+=v,a.e+=v)),M!==v&&(u=Jr(r,e,f,v)||0),a._pt={_next:a._pt,p:g||l===1?g:",",s:u,c:m-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=o<i.length?i.substring(o,i.length):""}else a.r=e==="display"&&i==="none"?hg:lg;return wm.test(i)&&(a.e=0),this._pt=a,a},Op={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kT=function(r){var e=r.split(" "),t=e[0],i=e[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(r=t,t=i,i=r),e[0]=Op[t]||t,e[1]=Op[i]||i,e.join(" ")},BT=function(r,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,i=t.style,s=e.u,n=t._gsap,a,o,l;if(s==="all"||s===!0)i.cssText="",o=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Pr[a]&&(o=1,a=a==="transformOrigin"?di:Mt),Zr(t,a);o&&(Zr(t,Mt),n&&(n.svg&&t.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ea(t,1),n.uncache=1,cg(i)))}},Xo={clearProps:function(r,e,t,i,s){if(s.data!=="isFromStart"){var n=r._pt=new ui(r._pt,e,t,0,0,BT);return n.u=i,n.pr=-10,n.tween=s,r._props.push(t),1}}},wa=[1,0,0,1,0,0],mg={},gg=function(r){return r==="matrix(1, 0, 0, 1, 0, 0)"||r==="none"||!r},Fp=function(r){var e=bi(r,Mt);return gg(e)?wa:e.substr(7).match(Tm).map(At)},Cu=function(r,e){var t=r._gsap||Ms(r),i=r.style,s=Fp(r),n,a,o,l;return t.svg&&r.getAttribute("transform")?(o=r.transform.baseVal.consolidate().matrix,s=[o.a,o.b,o.c,o.d,o.e,o.f],s.join(",")==="1,0,0,1,0,0"?wa:s):(s===wa&&!r.offsetParent&&r!==nn&&!t.svg&&(o=i.display,i.display="block",n=r.parentNode,(!n||!r.offsetParent&&!r.getBoundingClientRect().width)&&(l=1,a=r.nextElementSibling,nn.appendChild(r)),s=Fp(r),o?i.display=o:Zr(r,"display"),l&&(a?n.insertBefore(r,a):n?n.appendChild(r):nn.removeChild(r))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wc=function(r,e,t,i,s,n){var a=r._gsap,o=s||Cu(r,!0),l=a.xOrigin||0,h=a.yOrigin||0,c=a.xOffset||0,d=a.yOffset||0,u=o[0],p=o[1],f=o[2],_=o[3],m=o[4],g=o[5],v=e.split(" "),M=parseFloat(v[0])||0,x=parseFloat(v[1])||0,w,b,A,y;t?o!==wa&&(b=u*_-p*f)&&(A=M*(_/b)+x*(-f/b)+(f*g-_*m)/b,y=M*(-p/b)+x*(u/b)-(u*g-p*m)/b,M=A,x=y):(w=pg(r),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),x=w.y+(~(v[1]||v[0]).indexOf("%")?x/100*w.height:x)),i||i!==!1&&a.smooth?(m=M-l,g=x-h,a.xOffset=c+(m*u+g*f)-m,a.yOffset=d+(m*p+g*_)-g):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=x,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!t,r.style[di]="0px 0px",n&&(Xr(n,a,"xOrigin",l,M),Xr(n,a,"yOrigin",h,x),Xr(n,a,"xOffset",c,a.xOffset),Xr(n,a,"yOffset",d,a.yOffset)),r.setAttribute("data-svg-origin",M+" "+x)},Ea=function(r,e){var t=r._gsap||new Qm(r);if("x"in t&&!e&&!t.uncache)return t;var i=r.style,s=t.scaleX<0,n="px",a="deg",o=getComputedStyle(r),l=bi(r,di)||"0",h,c,d,u,p,f,_,m,g,v,M,x,w,b,A,y,T,U,R,L,N,k,B,z,H,$,J,oe,de,xe,Re,Ye;return h=c=d=f=_=m=g=v=M=0,u=p=1,t.svg=!!(r.getCTM&&fg(r)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(i[Mt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[Mt]!=="none"?o[Mt]:"")),i.scale=i.rotate=i.translate="none"),b=Cu(r,t.svg),t.svg&&(t.uncache?(H=r.getBBox(),l=t.xOrigin-H.x+"px "+(t.yOrigin-H.y)+"px",z=""):z=!e&&r.getAttribute("data-svg-origin"),wc(r,z||l,!!z||t.originIsAbsolute,t.smooth!==!1,b)),x=t.xOrigin||0,w=t.yOrigin||0,b!==wa&&(U=b[0],R=b[1],L=b[2],N=b[3],h=k=b[4],c=B=b[5],b.length===6?(u=Math.sqrt(U*U+R*R),p=Math.sqrt(N*N+L*L),f=U||R?Ks(R,U)*ds:0,g=L||N?Ks(L,N)*ds+f:0,g&&(p*=Math.abs(Math.cos(g*an))),t.svg&&(h-=x-(x*U+w*L),c-=w-(x*R+w*N))):(Ye=b[6],xe=b[7],J=b[8],oe=b[9],de=b[10],Re=b[11],h=b[12],c=b[13],d=b[14],A=Ks(Ye,de),_=A*ds,A&&(y=Math.cos(-A),T=Math.sin(-A),z=k*y+J*T,H=B*y+oe*T,$=Ye*y+de*T,J=k*-T+J*y,oe=B*-T+oe*y,de=Ye*-T+de*y,Re=xe*-T+Re*y,k=z,B=H,Ye=$),A=Ks(-L,de),m=A*ds,A&&(y=Math.cos(-A),T=Math.sin(-A),z=U*y-J*T,H=R*y-oe*T,$=L*y-de*T,Re=N*T+Re*y,U=z,R=H,L=$),A=Ks(R,U),f=A*ds,A&&(y=Math.cos(A),T=Math.sin(A),z=U*y+R*T,H=k*y+B*T,R=R*y-U*T,B=B*y-k*T,U=z,k=H),_&&Math.abs(_)+Math.abs(f)>359.9&&(_=f=0,m=180-m),u=At(Math.sqrt(U*U+R*R+L*L)),p=At(Math.sqrt(B*B+Ye*Ye)),A=Ks(k,B),g=Math.abs(A)>2e-4?A*ds:0,M=Re?1/(Re<0?-Re:Re):0),t.svg&&(z=r.getAttribute("transform"),t.forceCSS=r.setAttribute("transform","")||!gg(bi(r,Mt)),z&&r.setAttribute("transform",z))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(u*=-1,g+=f<=0?180:-180,f+=f<=0?180:-180):(p*=-1,g+=g<=0?180:-180)),e=e||t.uncache,t.x=h-((t.xPercent=h&&(!e&&t.xPercent||(Math.round(r.offsetWidth/2)===Math.round(-h)?-50:0)))?r.offsetWidth*t.xPercent/100:0)+n,t.y=c-((t.yPercent=c&&(!e&&t.yPercent||(Math.round(r.offsetHeight/2)===Math.round(-c)?-50:0)))?r.offsetHeight*t.yPercent/100:0)+n,t.z=d+n,t.scaleX=At(u),t.scaleY=At(p),t.rotation=At(f)+a,t.rotationX=At(_)+a,t.rotationY=At(m)+a,t.skewX=g+a,t.skewY=v+a,t.transformPerspective=M+n,(t.zOrigin=parseFloat(l.split(" ")[2])||!e&&t.zOrigin||0)&&(i[di]=jo(l)),t.xOffset=t.yOffset=0,t.force3D=wi.force3D,t.renderTransform=t.svg?VT:dg?_g:HT,t.uncache=0,t},jo=function(r){return(r=r.split(" "))[0]+" "+r[1]},eh=function(r,e,t){var i=Qt(e);return At(parseFloat(e)+parseFloat(Jr(r,"x",t+"px",i)))+i},HT=function(r,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_g(r,e)},hs="0deg",Gn="0px",cs=") ",_g=function(r,e){var t=e||this,i=t.xPercent,s=t.yPercent,n=t.x,a=t.y,o=t.z,l=t.rotation,h=t.rotationY,c=t.rotationX,d=t.skewX,u=t.skewY,p=t.scaleX,f=t.scaleY,_=t.transformPerspective,m=t.force3D,g=t.target,v=t.zOrigin,M="",x=m==="auto"&&r&&r!==1||m===!0;if(v&&(c!==hs||h!==hs)){var w=parseFloat(h)*an,b=Math.sin(w),A=Math.cos(w),y;w=parseFloat(c)*an,y=Math.cos(w),n=eh(g,n,b*y*-v),a=eh(g,a,-Math.sin(w)*-v),o=eh(g,o,A*y*-v+v)}_!==Gn&&(M+="perspective("+_+cs),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(x||n!==Gn||a!==Gn||o!==Gn)&&(M+=o!==Gn||x?"translate3d("+n+", "+a+", "+o+") ":"translate("+n+", "+a+cs),l!==hs&&(M+="rotate("+l+cs),h!==hs&&(M+="rotateY("+h+cs),c!==hs&&(M+="rotateX("+c+cs),(d!==hs||u!==hs)&&(M+="skew("+d+", "+u+cs),(p!==1||f!==1)&&(M+="scale("+p+", "+f+cs),g.style[Mt]=M||"translate(0, 0)"},VT=function(r,e){var t=e||this,i=t.xPercent,s=t.yPercent,n=t.x,a=t.y,o=t.rotation,l=t.skewX,h=t.skewY,c=t.scaleX,d=t.scaleY,u=t.target,p=t.xOrigin,f=t.yOrigin,_=t.xOffset,m=t.yOffset,g=t.forceCSS,v=parseFloat(n),M=parseFloat(a),x,w,b,A,y;o=parseFloat(o),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,o+=h),o||l?(o*=an,l*=an,x=Math.cos(o)*c,w=Math.sin(o)*c,b=Math.sin(o-l)*-d,A=Math.cos(o-l)*d,l&&(h*=an,y=Math.tan(l-h),y=Math.sqrt(1+y*y),b*=y,A*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),x*=y,w*=y)),x=At(x),w=At(w),b=At(b),A=At(A)):(x=c,A=d,w=b=0),(v&&!~(n+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=Jr(u,"x",n,"px"),M=Jr(u,"y",a,"px")),(p||f||_||m)&&(v=At(v+p-(p*x+f*b)+_),M=At(M+f-(p*w+f*A)+m)),(i||s)&&(y=u.getBBox(),v=At(v+i/100*y.width),M=At(M+s/100*y.height)),y="matrix("+x+","+w+","+b+","+A+","+v+","+M+")",u.setAttribute("transform",y),g&&(u.style[Mt]=y)},GT=function(r,e,t,i,s){var n=360,a=jt(s),o=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),l=o-i,h=i+l+"deg",c,d;return a&&(c=s.split("_")[1],c==="short"&&(l%=n,l!==l%(n/2)&&(l+=l<0?n:-n)),c==="cw"&&l<0?l=(l+n*Lp)%n-~~(l/n)*n:c==="ccw"&&l>0&&(l=(l-n*Lp)%n-~~(l/n)*n)),r._pt=d=new ui(r._pt,e,t,i,l,wT),d.e=h,d.u="deg",r._props.push(t),d},zp=function(r,e){for(var t in e)r[t]=e[t];return r},WT=function(r,e,t){var i=zp({},t._gsap),s="perspective,force3D,transformOrigin,svgOrigin",n=t.style,a,o,l,h,c,d,u,p;i.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),n[Mt]=e,a=Ea(t,1),Zr(t,Mt),t.setAttribute("transform",l)):(l=getComputedStyle(t)[Mt],n[Mt]=e,a=Ea(t,1),n[Mt]=l);for(o in Pr)l=i[o],h=a[o],l!==h&&s.indexOf(o)<0&&(u=Qt(l),p=Qt(h),c=u!==p?Jr(t,o,l,p):parseFloat(l),d=parseFloat(h),r._pt=new ui(r._pt,a,o,c,d-c,Sc),r._pt.u=p||0,r._props.push(o));zp(a,i)};ci("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",s="Bottom",n="Left",a=(e<3?[t,i,s,n]:[t+n,t+i,s+i,s+n]).map(function(o){return e<2?r+o:"border"+o+r});Xo[e>1?"border"+r:r]=function(o,l,h,c,d){var u,p;if(arguments.length<4)return u=a.map(function(f){return Tr(o,f,h)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(c+"").split(" "),p={},a.forEach(function(f,_){return p[f]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,p,d)}});var vg={name:"css",register:Tc,targetTest:function(r){return r.style&&r.nodeType},init:function(r,e,t,i,s){var n=this._props,a=r.style,o=t.vars.startAt,l,h,c,d,u,p,f,_,m,g,v,M,x,w,b,A,y;wu||Tc(),this.styles=this.styles||ug(r),A=this.styles.props,this.tween=t;for(f in e)if(f!=="autoRound"&&(h=e[f],!(vi[f]&&eg(f,e,t,i,r,s)))){if(u=typeof h,p=Xo[f],u==="function"&&(h=h.call(t,i,r,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Sa(h)),p)p(this,r,f,h,t)&&(b=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(r).getPropertyValue(f)+"").trim(),h+="",Yr.lastIndex=0,Yr.test(l)||(_=Qt(l),m=Qt(h),m?_!==m&&(l=Jr(r,f,l,m)+m):_&&(h+=_)),this.add(a,"setProperty",l,h,i,s,0,0,f),n.push(f),A.push(f,0,a[f]);else if(u!=="undefined"){if(o&&f in o?(l=typeof o[f]=="function"?o[f].call(t,i,r,s):o[f],jt(l)&&~l.indexOf("random(")&&(l=Sa(l)),Qt(l+"")||l==="auto"||(l+=wi.units[f]||Qt(Tr(r,f))||""),(l+"").charAt(1)==="="&&(l=Tr(r,f))):l=Tr(r,f),d=parseFloat(l),g=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),g&&(h=h.substr(2)),c=parseFloat(h),f in nr&&(f==="autoAlpha"&&(d===1&&Tr(r,"visibility")==="hidden"&&c&&(d=0),A.push("visibility",0,a.visibility),Xr(this,a,"visibility",d?"inherit":"hidden",c?"inherit":"hidden",!c)),f!=="scale"&&f!=="transform"&&(f=nr[f],~f.indexOf(",")&&(f=f.split(",")[0]))),v=f in Pr,v){if(this.styles.save(f),y=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=bi(r,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=r.style.perspective;r.style.perspective=h,h=bi(r,"perspective"),T?r.style.perspective=T:Zr(r,"perspective")}c=parseFloat(h)}if(M||(x=r._gsap,x.renderTransform&&!e.parseTransform||Ea(r,e.parseTransform),w=e.smoothOrigin!==!1&&x.smooth,M=this._pt=new ui(this._pt,a,Mt,0,1,x.renderTransform,x,0,-1),M.dep=1),f==="scale")this._pt=new ui(this._pt,x,"scaleY",x.scaleY,(g?sn(x.scaleY,g+c):c)-x.scaleY||0,Sc),this._pt.u=0,n.push("scaleY",f),f+="X";else if(f==="transformOrigin"){A.push(di,0,a[di]),h=kT(h),x.svg?wc(r,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==x.zOrigin&&Xr(this,x,"zOrigin",x.zOrigin,m),Xr(this,a,f,jo(l),jo(h)));continue}else if(f==="svgOrigin"){wc(r,h,1,w,0,this);continue}else if(f in mg){GT(this,x,f,d,g?sn(d,g+h):h);continue}else if(f==="smoothOrigin"){Xr(this,x,"smooth",x.smooth,h);continue}else if(f==="force3D"){x[f]=h;continue}else if(f==="transform"){WT(this,h,r);continue}}else f in a||(f=Tn(f)||f);if(v||(c||c===0)&&(d||d===0)&&!TT.test(h)&&f in a)_=(l+"").substr((d+"").length),c||(c=0),m=Qt(h)||(f in wi.units?wi.units[f]:_),_!==m&&(d=Jr(r,f,l,m)),this._pt=new ui(this._pt,v?x:a,f,d,(g?sn(d,g+c):c)-d,!v&&(m==="px"||f==="zIndex")&&e.autoRound!==!1?CT:Sc),this._pt.u=m||0,v&&y!==h?(this._pt.b=l,this._pt.e=y,this._pt.r=AT):_!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=ET);else if(f in a)zT.call(this,r,f,l,g?g+h:h);else if(f in r)this.add(r,f,l||r[f],g?g+h:h,i,s);else if(f!=="parseTransform"){mu(f,h);continue}v||(f in a?A.push(f,0,a[f]):typeof r[f]=="function"?A.push(f,2,r[f]()):A.push(f,1,l||r[f])),n.push(f)}}b&&ag(this)},render:function(r,e){if(e.tween._time||!Eu())for(var t=e._pt;t;)t.r(r,t.d),t=t._next;else e.styles.revert()},get:Tr,aliases:nr,getSetter:function(r,e,t){var i=nr[e];return i&&i.indexOf(",")<0&&(e=i),e in Pr&&e!==di&&(r._gsap.x||Tr(r,"x"))?t&&Pp===t?e==="scale"?DT:LT:(Pp=t||{})&&(e==="scale"?IT:UT):r.style&&!du(r.style[e])?RT:~e.indexOf("-")?PT:bu(r,e)},core:{_removeProperty:Zr,_getMatrix:Cu}};fi.utils.checkPrefix=Tn;fi.core.getStyleSaver=ug;(function(r,e,t,i){var s=ci(r+","+e+","+t,function(n){Pr[n]=1});ci(e,function(n){wi.units[n]="deg",mg[n]=1}),nr[s[13]]=r+","+e,ci(i,function(n){var a=n.split(":");nr[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){wi.units[r]="px"});fi.registerPlugin(vg);var Ue=fi.registerPlugin(vg)||fi;Ue.core.Tween;function Gi(r){if(!r)return"";if(/^(?:[a-z]+:)?\/\//i.test(r)||r.startsWith("data:"))return r;const e="./",t=r.replace(/^\/+/,"");return`${e.endsWith("/")?e:`${e}/`}${t}`}let go=null;async function XT(){if(go)return go;try{const r=await fetch(Gi("portfolio/manifest.json"),{cache:"no-cache"});if(!r.ok)throw new Error(`manifest.json ${r.status}`);const e=await r.json(),t=(e.paintings||[]).filter(i=>i.aspect>0&&i.file);return go={...e,paintings:t},go}catch(r){return console.error("Could not load portfolio manifest — run `npm run portfolio`.",r),{paintings:[]}}}const jT=.28,qT=new Wi(1,1,1),yg=new Oi(1,1),Ru=new Ft({color:13280613,roughness:.28,metalness:.85,envMapIntensity:1.4,shadowSide:mt}),kp=new Z(13280613),Bp=new Z(1576965),Hp=new Z(14476782),Vp=new Z(922650),Gp=new Z(3290946),Wp=new Z(329224),Xp=new Z(1184792),jp=new Z(131588),qp=new Z(12086322),Yp=new Z(1837826),Kp=new Z(13206082),Zp=new Z(2363139);function YT(r,e=null){const t=(r%(Math.PI*2)+Math.PI*2)%(Math.PI*2),i=Math.PI/2,s=n=>{if(n)if(t>=0&&t<i){const a=t/i;if(a<.4){const o=a/.4;n.color.lerpColors(qp,Kp,o),n.emissive.lerpColors(Yp,Zp,o)}else{const o=(a-.4)/.6;n.color.lerpColors(Kp,kp,o),n.emissive.lerpColors(Zp,Bp,o)}n.roughness=Ke.lerp(.32,.26,a),n.metalness=Ke.lerp(.8,.88,a)}else if(t>=i&&t<Math.PI){const a=(t-i)/i;if(a<.65){const o=a/.65;n.color.lerpColors(kp,Hp,o),n.emissive.lerpColors(Bp,Vp,o)}else{const o=(a-.65)/.35;n.color.lerpColors(Hp,Gp,o),n.emissive.lerpColors(Vp,Wp,o)}n.roughness=Ke.lerp(.26,.32,a),n.metalness=Ke.lerp(.88,.82,a)}else if(t>=Math.PI&&t<Math.PI*1.5){const a=(t-Math.PI)/i;n.color.lerpColors(Gp,Xp,a),n.emissive.lerpColors(Wp,jp,a),n.roughness=Ke.lerp(.32,.38,a),n.metalness=Ke.lerp(.82,.75,a)}else{const a=(t-Math.PI*1.5)/i;n.color.lerpColors(Xp,qp,a),n.emissive.lerpColors(jp,Yp,a),n.roughness=Ke.lerp(.38,.32,a),n.metalness=Ke.lerp(.75,.8,a)}};s(Ru),e&&s(e)}function xg(r){const e=r.aspect||(r.width&&r.height?r.width/r.height:1),t=(r.heightIn||16)*jT;return{width:t*e,height:t}}function KT(r,e,t=.12,i=.08,s=.05){const n=r/2,a=e/2,o=n+t,l=a+t,h=i,c=-s,d=[-n,-a,0],u=[n,-a,0],p=[n,a,0],f=[-n,a,0],_=[-o,-l,h],m=[o,-l,h],g=[o,l,h],v=[-o,l,h],M=[-o,-l,c],x=[o,-l,c],w=[o,l,c],b=[-o,l,c],A=[],y=(R,L,N)=>{A.push(...R,...L,...N)},T=(R,L,N,k)=>{y(R,L,N),y(R,N,k)};T(_,m,u,d),T(f,p,g,v),T(u,m,g,p),T(_,d,f,v),T(_,M,x,m),T(v,g,w,b),T(m,x,w,g),T(v,b,M,_),T(M,b,w,x);const U=new wt;return U.setAttribute("position",new it(A,3)),U.computeVertexNormals(),U}function ZT(r,e){const{width:t,height:i}=xg(e),s=Math.min(.18,Math.max(.1,t*.045)),n=s*.75,a=.16+i/2,o=KT(t,i,s,n,.06),l=new Oe(o,Ru);l.position.set(0,a,0),l.castShadow=!0,l.receiveShadow=!0,l.name="Frame",r.add(l);const h=new oi({color:1710618,toneMapped:!1,side:mt}),c=new Oe(yg,h);return c.scale.set(t,i,1),c.position.set(0,a,.002),c.castShadow=!0,c.name="Painting",r.add(c),{panel:c,panelMaterial:h,width:t,height:i,centreY:a}}const ys={THUMB:0,MID:1,FULL:2};function JT(r){const e=r.image;if(!e||!e.width||!e.height)return 0;const t=e.width*e.height*4;return r.generateMipmaps?t*1.3333:t}const $T=typeof navigator<"u"&&(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||typeof window<"u"&&window.innerWidth<768),Jp=($T?24:64)*1024*1024,Mg=new ru;let Wn=null;function Sg(){return Wn!==null?Promise.resolve(Wn):new Promise(r=>{const e=new Image;e.onload=()=>{Wn=e.width>0&&e.height>0,r(Wn)},e.onerror=()=>{Wn=!1,r(!1)},e.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="})}function bg(r,e){const t=e?`portfolio/${r}?v=${e}`:`portfolio/${r}`;return Gi(t)}const wn=new Set;let As=0;function QT(r){r._lastSeen=performance.now()}function ew(r){if(!r._texture)return;As-=r._bytes||0,wn.delete(r),r._texture.dispose(),r._texture=null,r._bytes=0,r._tier=ys.THUMB;const e=r.panelMaterial;e&&r._thumbTexture&&(e.map=r._thumbTexture,e.needsUpdate=!0)}function tw(r){if(As<=Jp)return;const e=[...wn].filter(t=>t!==r).sort((t,i)=>(t._lastSeen||0)-(i._lastSeen||0));for(const t of e){if(As<=Jp)break;ew(t)}}async function $p(r){if(r._thumbRequested)return;r._thumbRequested=!0;const e=await Sg(),t=bg(e&&r.data.thumb?r.data.thumb:r.data.thumbJpg||r.data.thumb||r.data.file,r.data.v);Mg.load(t,i=>{i.colorSpace=yt,i.minFilter=St,i.magFilter=St,i.generateMipmaps=!1;const s=r.panelMaterial;if(!s){i.dispose();return}r._thumbTexture=i,r._texture||(s.map=i,r._lit===void 0&&s.color.set(16777215),s.needsUpdate=!0,r._tier=ys.THUMB)},void 0,()=>{})}const iw=3;let th=0;const Hr=[];function Ec(){for(;th<iw&&Hr.length>0;){const r=Hr.shift();if((r.door._tier||0)>=r.tier){r.door._pending=0;continue}th++,rw(r,()=>{th--,r.onLoaded&&r.onLoaded(r.door),Ec()})}}async function rw(r,e){const{door:t,tier:i}=r,s=await Sg(),n=t.data;let a;i===ys.FULL?a=s&&n.webp?n.webp:n.file:a=(s?n.mid:n.midJpg||n.mid)||(s&&n.webp?n.webp:n.file);const o=bg(a,n.v);Mg.load(o,l=>{const h=t.panelMaterial;if(t._pending=0,!h||(t._tier||0)>=i){l.dispose(),e();return}l.colorSpace=yt,l.anisotropy=4,l.generateMipmaps=!0,l.minFilter=rr,t._texture&&(As-=t._bytes||0,wn.delete(t),t._texture.dispose()),h.map=l,t._lit===void 0&&h.color.set(16777215),h.needsUpdate=!0,t._texture=l,t._tier=i,t._bytes=JT(l),t._lastSeen=performance.now(),wn.add(t),As+=t._bytes,tw(r.urgent?t:null),e()},void 0,()=>{t._pending=0,console.warn("Painting failed to load:",o),e()})}function _o(r,e,{urgent:t=!1,onLoaded:i=null}={}){if(r._lastSeen=performance.now(),(r._tier||0)>=e){i&&i(r);return}if(r._pending>=e){if(t){const n=Hr.findIndex(a=>a.door===r);n>0&&Hr.unshift(Hr.splice(n,1)[0]),Ec()}return}r._pending=e;const s={door:r,tier:e,urgent:t,onLoaded:i};t?Hr.unshift(s):Hr.push(s),Ec()}function sw(r){r._texture&&(As-=r._bytes||0,wn.delete(r),r._texture.dispose(),r._texture=null),r._thumbTexture&&(r._thumbTexture.dispose(),r._thumbTexture=null),r._bytes=0,r._tier=0,r._pending=0,r._thumbRequested=!1}function nw(){Hr.length=0,wn.clear(),As=0}function Qp(r,e,t){const i=t.fov*Math.PI/180,s=e/2/Math.tan(i/2),n=r/2/(Math.tan(i/2)*t.aspect);return Math.max(s,n)*1.25}const Ac=15,Pu=8;function aw(r){if(r<=0)return[2];const e=[2,3];let t=5;for(;t<r;){const i=e[e.length-1]+e[e.length-2];e.push(i),t+=i}return e}function ow(r){const e=Tg(r),t=Math.max(1,e.length);return Array.from({length:t},(i,s)=>Ac+s*Pu)}function Tg(r){if(r<=0)return[];const e=aw(r),t=[];let i=r;for(let s=0;s<e.length;s++){const n=Math.min(i,e[s]);if(n<=0)break;t.push(n),i-=n}return t}function lw(r){const e=r.filter(i=>Number.isFinite(i.rank)),t=r.filter(i=>!Number.isFinite(i.rank));return e.sort((i,s)=>i.rank-s.rank),t.sort((i,s)=>(s.year||0)-(i.year||0)),[...e,...t]}function hw(r){const e=Tg(r.length),t=ow(r.length),i=[],s=[];let n=0;return t.forEach((a,o)=>{const l=e[o],h=r.slice(n,n+l);if(n+=l,!h.length)return;const c=h.map(_=>xg(_).width),d=c.map(_=>Math.asin(Math.min(_/(2*a),.999))),u=Math.PI*2/l;let p=0,f=-1/0;if(o===0)p=Math.PI/2;else for(let _=0;_<720;_++){const m=_/720*u;let g=1/0;for(let v=0;v<l;v++){const M=(m+v*u)%(Math.PI*2),x=d[v];for(const w of s){let b=Math.abs(M-w.center);b>Math.PI&&(b=Math.PI*2-b);const A=b-(x+w.halfAngle),y=Math.pow(.7,o-w.ring-1),T=A*y;T<g&&(g=T)}}g>f&&(f=g,p=m)}h.forEach((_,m)=>{const g=(p+m*u)%(Math.PI*2);s.push({center:g,halfAngle:d[m],ring:o}),i.push({painting:_,ring:o,radius:a,angle:g,width:c[m],x:Math.sin(g)*a,z:Math.cos(g)*a})})}),i}function Da(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const wg=new P(0,1,0);new P(1,1,1);const gs=new Z,Xi={uWindTime:{value:0},uWindStrength:{value:0},uWindScale:{value:.075},uGrassGrowth:{value:1}},kr={uForestWave:{value:0},uForestActive:{value:0}};function cw(r,e=0){Xi.uWindTime.value=r,Xi.uWindStrength.value=e}function uw(r,e=1){!r||r._hasWindShader||(r._hasWindShader=!0,r.onBeforeCompile=t=>{t.uniforms.uWindTime=Xi.uWindTime,t.uniforms.uWindStrength=Xi.uWindStrength,t.uniforms.uWindScale=Xi.uWindScale,t.vertexShader=`
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
            `)})}function dw(r){r.onBeforeCompile=e=>{e.uniforms.uWindTime=Xi.uWindTime,e.uniforms.uWindStrength=Xi.uWindStrength,e.uniforms.uWindScale=Xi.uWindScale,e.uniforms.uGrassGrowth=Xi.uGrassGrowth,e.vertexShader=`
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
            `)}}const ih=new Map;function pw(r){if(ih.has(r))return ih.get(r);const e=512,t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");i.clearRect(0,0,e,e);const s=(h,c,d,u,p,f,_)=>{i.save(),i.translate(h,c),i.rotate(p),i.beginPath(),i.moveTo(0,-d*.9),i.bezierCurveTo(u*.65,-d*.5,u*.75,d*.15,u*.35,d*.55),i.bezierCurveTo(u*.15,d*.65,-u*.15,d*.65,-u*.35,d*.55),i.bezierCurveTo(-u*.75,d*.15,-u*.65,-d*.5,0,-d*.9),i.closePath();const m=i.createRadialGradient(0,0,d*.08,0,0,d*.75);m.addColorStop(0,"rgba(175, 225, 120, 0.98)"),m.addColorStop(.55,"rgba(88, 160, 48, 0.96)"),m.addColorStop(1,"rgba(42, 105, 28, 0.94)"),i.fillStyle=m,i.fill(),i.strokeStyle="rgba(225, 248, 170, 0.88)",i.lineWidth=3.5,i.beginPath(),i.moveTo(0,d*.55),i.lineTo(0,-d*.85),i.stroke(),i.strokeStyle="rgba(200, 238, 145, 0.50)",i.lineWidth=1.5;for(let g=1;g<=5;g++){const v=d*.45-g*(d*.22);[-1,1].forEach(M=>{i.beginPath(),i.moveTo(0,v),i.quadraticCurveTo(M*u*.35,v-d*.06,M*u*.55,v-d*.14),i.stroke()})}i.restore()};i.strokeStyle="rgba(105, 85, 55, 0.9)",i.lineWidth=6,i.beginPath(),i.moveTo(e*.5,e*.95),i.lineTo(e*.5,e*.2),i.stroke(),s(e*.5,e*.22,130,75,0);const n=[-.65,.65,-.85,.85,-1.05,1.05],a=[e*.42,e*.42,e*.6,e*.6,e*.75,e*.75],o=[e*.44,e*.56,e*.42,e*.58,e*.42,e*.58];for(let h=0;h<n.length;h++)s(o[h],a[h],120,70,n[h]);const l=new jr(t);return l.colorSpace=yt,l.wrapS=Mi,l.wrapT=Mi,ih.set(r,l),l}function Ia(r=1.6){const e=[],t=r,i=r*1.15;for(let n=0;n<3;n++){const a=new Oi(t,i,2,2),o=a.attributes.position;for(let l=0;l<o.count;l++){const h=o.getX(l),c=Math.cos(h/(t*.5)*Math.PI*.5)*.18*r;o.setZ(l,c)}a.computeVertexNormals(),a.rotateY(n/3*Math.PI),a.translate(0,i*.48,0),e.push(a)}const s=hu(e,!1);return e.forEach(n=>n.dispose()),s}function fw(){const r=[];for(let t=0;t<2;t++){const i=new Oi(1.4,1.4,2,2);i.rotateX(-Math.PI*.5),i.rotateY(t/2*Math.PI*.5),i.translate(0,.1,0),r.push(i)}const e=hu(r,!1);return r.forEach(t=>t.dispose()),e}function mw(){const r=[],e=new eu;e.moveTo(-.055,0),e.quadraticCurveTo(-.055*.25,.42*.55,.055*.35,.42*1.1),e.quadraticCurveTo(.055*.2,.42*.52,.055,0);for(let i=0;i<5;i++){const s=new Aa(e,3),n=s.attributes.position,a=.75+Math.random()*.45,o=.25+Math.random()*.35,l=i/5*Math.PI*2+Math.random()*.4;for(let h=0;h<n.count;h++){const c=n.getY(h);n.setZ(h,Math.pow(c/.42,1.6)*.18)}s.computeVertexNormals(),s.scale(a,a,a),s.rotateX(o),s.rotateY(l),r.push(s)}const t=hu(r,!1);return r.forEach(i=>i.dispose()),t}function Eg(r){const e=new eu;return e.moveTo(0,0),e.bezierCurveTo(r*.65,r*.12,r*.88,r*.44,r*.76,r*.78),e.bezierCurveTo(r*.62,r*1.05,r*.26,r*1.2,0,r*1.22),e.bezierCurveTo(-r*.26,r*1.2,-r*.62,r*1.05,-r*.76,r*.78),e.bezierCurveTo(-r*.88,r*.44,-r*.65,r*.12,0,0),e}function gw(r,e){const t=new Aa(Eg(r),6),i=t.attributes.position;for(let s=0;s<i.count;s++){const n=i.getX(s),a=i.getY(s),o=Ke.clamp(a/(r*1.22),0,1.1),l=e*(n*n)/(r*r)*(.35+o)*r,h=-e*.54*o*o*r,c=Math.sin(n/r*6.5)*.015*r*o;i.setZ(s,l+h+c)}return t.computeVertexNormals(),t}function _w(r,e,t=5){const i=new Aa(r,t),s=i.attributes.position;let n=1/0,a=-1/0,o=0;for(let c=0;c<s.count;c++)n=Math.min(n,s.getY(c)),a=Math.max(a,s.getY(c)),o=Math.max(o,Math.abs(s.getX(c)));const l=Math.max(1e-6,a-n),h=Math.max(1e-6,o);for(let c=0;c<s.count;c++){const d=s.getX(c),u=s.getY(c),p=d/h,f=(u-n)/l;s.setZ(c,e*l*(p*p*.45+Math.pow(f,1.6)*.32))}return i.translate(0,-n,0),i.computeVertexNormals(),i}const vw=Ia(1.65),yw=Ia(1.75),xw=Ia(1.55),Mw=Ia(1.45),Sw=Ia(1.5),bw=fw(),Ag=_w(Eg(.18),.28,4),Cg=mw(),Rg=new Set([vw,yw,xw,Mw,Sw,bw,Ag,Cg]),rh=new Map;function Tw(r){if(rh.has(r))return rh.get(r);const e=512,t=512,i=document.createElement("canvas");i.width=e,i.height=t;const s=document.createElement("canvas");s.width=e,s.height=t;const n=i.getContext("2d"),a=s.getContext("2d"),o={mango:{base:"#4a3c2e",mid:"#382b1f",dark:"#221810",light:"#62513f",moss:"#424a2f"},banyan:{base:"#5a5246",mid:"#474035",dark:"#312b23",light:"#71685b",moss:"#4a5336"},peepal:{base:"#6c675b",mid:"#565045",dark:"#3d372e",light:"#847d70",moss:"#535b3d"},neem:{base:"#453729",mid:"#32261a",dark:"#20160e",light:"#5c4a37",moss:"#3c4329"},gulmohar:{base:"#534a3f",mid:"#413930",dark:"#2e261e",light:"#6a6052",moss:"#4b5335"},twig:{base:"#4a3f31",mid:"#382e22",dark:"#261e14",light:"#5e4e3d",moss:"#3e462b"}},l=o[r]||o.twig;n.fillStyle=l.base,n.fillRect(0,0,e,t),a.fillStyle="#808080",a.fillRect(0,0,e,t);for(let u=0;u<30;u++){const p=Math.random()*e,f=e*(.05+Math.random()*.16);n.globalAlpha=.1+Math.random()*.16,n.fillStyle=Math.random()<.5?l.mid:l.light,n.fillRect(p,0,f,t)}for(let u=0;u<70;u++){const p=Math.random()*e,f=t*(.25+Math.random()*.65),_=Math.random()*t,m=1.5+Math.random()*3.5;for(const g of[-t,0,t]){n.strokeStyle=Math.random()<.65?l.dark:l.mid,n.globalAlpha=.12+Math.random()*.18,n.lineWidth=m,a.strokeStyle="rgb(115,115,115)",a.lineWidth=m,n.beginPath(),a.beginPath(),n.moveTo(p,_+g),a.moveTo(p,_+g);for(let v=_;v<_+f;v+=18){const M=(v-_)*.014,x=Math.sin(M*5.2+p*.04)*3.5;n.lineTo(p+x,v+g),a.lineTo(p+x,v+g)}n.stroke(),a.stroke()}}const h=new jr(i),c=new jr(s);[h,c].forEach(u=>{u.wrapS=qi,u.wrapT=qi,u.repeat.set(1.6,1)}),h.colorSpace=yt;const d={map:h,bumpMap:c};return rh.set(r,d),d}const sh=new Map;function ww(r){if(sh.has(r))return sh.get(r);const{map:e,bumpMap:t}=Tw(r),i=new Ft({map:e,bumpMap:t,bumpScale:.07,roughness:.85,metalness:.02,emissive:new Z(1315085),emissiveIntensity:.15});return sh.set(r,i),i}function Cc(r,e){const t=Math.hypot(r,e),i=Ke.smoothstep(t,1.5,12),s=Math.sin(r*.045+.5)*Math.cos(e*.04+.8)*.65,n=Math.sin(r*.095-e*.08)*.35,a=Math.cos(r*.18+e*.15)*.18,o=Math.sin(r*.38)*Math.cos(e*.35)*.08;return(s+n+a+o)*i}let nh=null;function Ew(){if(nh)return nh;const r=1024,e=document.createElement("canvas");e.width=r,e.height=r;const t=e.getContext("2d");t.fillStyle="#262016",t.fillRect(0,0,r,r);const i=["#140f09","#1b140b","#120d08","#241a10","#2d2114","#18120a","#1e160e","#0f0a06"];for(let o=0;o<320;o++)t.globalAlpha=.28+Math.random()*.42,t.fillStyle=i[Math.random()*i.length|0],t.beginPath(),t.ellipse(Math.random()*r,Math.random()*r,24+Math.random()*95,16+Math.random()*70,Math.random()*Math.PI,0,Math.PI*2),t.fill();const s=["#222a14","#2c3618","#343f1c","#1b2210"];for(let o=0;o<180;o++)t.globalAlpha=.16+Math.random()*.24,t.fillStyle=s[Math.random()*s.length|0],t.beginPath(),t.ellipse(Math.random()*r,Math.random()*r,15+Math.random()*50,10+Math.random()*38,Math.random()*Math.PI,0,Math.PI*2),t.fill();const n=["#3e2a16","#4e331a","#22150a","#301f10","#593b1d","#120904"];for(let o=0;o<2600;o++){t.globalAlpha=.22+Math.random()*.5,t.fillStyle=n[Math.random()*n.length|0];const l=Math.random()*r,h=Math.random()*r;t.fillRect(l,h,2+Math.random()*6,1+Math.random()*3)}t.globalAlpha=1;const a=new jr(e);return a.wrapS=qi,a.wrapT=qi,a.repeat.set(28,28),a.colorSpace=yt,nh=a,a}const ef={mango:{trunkHeight:6.2,trunkBaseRadius:.95,trunkTopRadius:.54,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:46,splitSpreadDeg:36,lengthFalloff:.78,radiusFalloff:.66,limbLength:3.2,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.25,leafColor:2246686,leafColorVariance:.12,leafRoughness:.4,flushColor:10176044,flushRatio:.18,flutterMult:.85,swayAmplitude:.04,swayFreqMult:.85},banyan:{trunkHeight:6.8,trunkBaseRadius:1.15,trunkTopRadius:.58,buttressFlutes:5,buttressReach:.68,propRoots:4,limbCount:5,branchLevels:3,firstSpreadDeg:44,splitSpreadDeg:35,lengthFalloff:.78,radiusFalloff:.65,limbLength:3.4,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.3,leafColor:3036709,leafColorVariance:.12,leafRoughness:.46,flutterMult:.85,swayAmplitude:.05,swayFreqMult:.85},peepal:{trunkHeight:7.2,trunkBaseRadius:.85,trunkTopRadius:.4,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:38,splitSpreadDeg:32,lengthFalloff:.76,radiusFalloff:.63,limbLength:3,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.2,leafColor:6591548,leafColorVariance:.15,leafRoughness:.42,flutterMult:1.8,swayAmplitude:.12,swayFreqMult:1.6},neem:{trunkHeight:7,trunkBaseRadius:.76,trunkTopRadius:.36,buttressFlutes:3,buttressReach:.38,propRoots:0,limbCount:4,branchLevels:3,firstSpreadDeg:36,splitSpreadDeg:30,lengthFalloff:.76,radiusFalloff:.64,limbLength:2.8,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.15,leafColor:4025895,leafColorVariance:.13,leafRoughness:.65,flutterMult:1.25,swayAmplitude:.1,swayFreqMult:1.25},gulmohar:{trunkHeight:6.4,trunkBaseRadius:.82,trunkTopRadius:.44,buttressFlutes:4,buttressReach:.45,propRoots:0,limbCount:5,branchLevels:3,firstSpreadDeg:48,splitSpreadDeg:38,lengthFalloff:.8,radiusFalloff:.65,limbLength:3.2,spraysPerTwig:4,spraysOnBoughs:2,sprayScale:1.25,leafColor:3828775,leafColorVariance:.12,leafRoughness:.52,hasBlossoms:!0,blossomColor:14235678,blossomCountPerTwig:3,flutterMult:1.1,swayAmplitude:.07,swayFreqMult:1.1}},ps=new Map;let $n=null,tf=!1,rf=!1;const ah=[];function Lu(r){if(r){if(rf)return r(),Promise.resolve();ah.push(r)}if(tf)return Promise.resolve();tf=!0;const e=new cu,t=[{key:"mango",url:Gi("models/mango_tree_2.glb"),targetHeight:13.5,groundSink:0},{key:"neem",url:Gi("models/mango_tree.glb"),targetHeight:10.5,groundSink:0},{key:"banyan",url:Gi("models/chinese_banyan_ficus_microcarpa.glb"),targetHeight:12.5,groundSink:0},{key:"peepal",url:Gi("models/bodhi_tree.glb"),targetHeight:11,groundSink:1.25},{key:"rose",url:Gi("models/red_rose.glb"),targetHeight:1.55,groundSink:0}].map(i=>new Promise(s=>{e.load(i.url,n=>{const a=n.scene;a.name=`GLB_${i.key}`;const o=new cr().setFromObject(a),l=o.getCenter(new P),h=o.getSize(new P),c=i.targetHeight/Math.max(h.y,.001),d=(i.groundSink||0)/c;a.position.set(-l.x,-o.min.y-d,-l.z);const u=new kt;u.name=`GLB_Wrapper_${i.key}`,u.add(a),u.scale.setScalar(c),a.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0,p.geometry&&Rg.add(p.geometry),p.material&&(p.material.side=mt,p.material.shadowSide=mt,p.material.roughness!==void 0&&(p.material.roughness=Math.max(p.material.roughness,.65)),(p.material.name==="Material.001"||p.material.name==="Material.004"||p.material.alphaTest>0||p.material.name&&/leaf|leaves|foliage/i.test(p.material.name)||p.name&&/leaf|leaves/i.test(p.name))&&p.material.map&&(p.material.alphaTest=.35,p.material.transparent=!1,p.material.depthWrite=!0,p.material.needsUpdate=!0,p.customDepthMaterial=new iu({depthPacking:kf,map:p.material.map,alphaTest:.35}))))}),i.key==="rose"?$n=u:ps.set(i.key,u),s()},void 0,n=>{console.warn(`Failed to load ${i.url}:`,n),s()})}));return Promise.all(t).then(()=>{rf=!0;const i=[...ah];ah.length=0,i.forEach(s=>{try{s()}catch(n){console.error(n)}})})}Lu();function Aw(r,{seed:e=1,scale:t=1}={}){const i=new kt;i.name=`Tree_${r}`;let s=r;s==="gulmohar"&&(s="peepal");const n=Da(e),a=ps.get(s)||ps.get("mango")||ps.get("banyan"),o=c=>{const d=.92+n()*.18;r==="neem"?c.scale.set(d*t*.78,d*t*1.2,d*t*.78):r==="mango"?c.scale.set(d*t*1.2,d*t*1.52,d*t*1.2):c.scale.multiplyScalar(d*t),c.rotation.y=n()*Math.PI*2},l=c=>{c.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,d.material&&(d.material.shadowSide=mt,d.material.alphaTest>0&&d.material.map&&!d.customDepthMaterial&&(d.customDepthMaterial=new iu({depthPacking:kf,map:d.material.map,alphaTest:d.material.alphaTest}))))})};if(a){const c=a.clone(!0);o(c),l(c),i.add(c),i.userData.swayGroup=c}else{const c=new kt;i.add(c),i.userData.swayGroup=c,Lu(()=>{const d=ps.get(s)||ps.get("mango")||ps.get("banyan");if(d){const u=d.clone(!0);o(u),l(u),c.add(u)}})}const h=ef[r]||ef.mango;return i.userData.swayAmplitude=h.swayAmplitude,i.userData.swayFreqMult=h.swayFreqMult,i.userData.species=r,i.userData.seed=e,i}function Cw(r,e,t,i){const s=new Z(4878120),n=new Ft({color:16777215,roughness:.78,metalness:0,side:mt,vertexColors:!0,emissive:s.clone().multiplyScalar(.24),emissiveIntensity:.95});n.shadowSide=mt,dw(n);const a=new Yo(Cg,n,i);a.castShadow=!0,a.receiveShadow=!0;const o=new Ne,l=new pi,h=new P,c=new P,d=new Z(9403452),u=new Z(2835480);for(let p=0;p<i;p++){const f=e+(t-e)*Math.sqrt(r()),_=r()*Math.PI*2,m=Math.sin(_)*f,g=Math.cos(_)*f,v=Cc(m,g);c.set(m,v,g),l.setFromAxisAngle(wg,r()*Math.PI*2);const M=m*.08,x=g*.08,w=Math.sin(M*2.1+Math.sin(x*1.8))*Math.cos(x*1.9+Math.sin(M*2.3));let b=.85+r()*1.35;w>.3&&r()<.65&&(b*=.22),h.set(b,b*(.9+r()*.8),b),o.compose(c,l,h),a.setMatrixAt(p,o);const A=r();A<.14?gs.copy(s).lerp(d,.4+r()*.45):A<.45?gs.copy(s).lerp(u,r()*.65):gs.copy(s),gs.offsetHSL((r()-.5)*.03,0,(r()-.5)*.1),a.setColorAt(p,gs)}return a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a}function Rw(r){const e=Da(r),t=new kt;t.name="Shrub";const i=.35+e()*.3,s=new un(.024,.048,i,8,1);s.translate(0,i/2,0);const n=new Oe(s,ww("twig"));n.castShadow=!0,t.add(n);const a=36+Math.floor(e()*16),o=new Z(4223786),l=new Ft({color:16777215,map:pw("mango"),roughness:.68,metalness:0,side:mt,alphaTest:.4,vertexColors:!0,emissive:o.clone().multiplyScalar(.22),emissiveIntensity:.9});l.shadowSide=mt,uw(l,1.2);const h=new Yo(Ag,l,a);h.castShadow=!0,h.receiveShadow=!0;const c=new Ne,d=new pi,u=new pi,p=new P,f=new P,_=new P,m=new P,g=.48+e()*.3;for(let v=0;v<a;v++){const M=g*Math.cbrt(e()),x=e()*Math.PI*2,w=Math.acos(2*e()-1);_.set(Math.sin(w)*Math.cos(x),Math.abs(Math.cos(w))*.85+.25,Math.sin(w)*Math.sin(x)).normalize(),f.copy(_).multiplyScalar(M),f.y+=i*.72,d.setFromUnitVectors(wg,_),m.set(e()-.5,e()-.5,e()-.5).normalize(),u.setFromAxisAngle(m,(e()-.5)*1.1),d.multiply(u);const b=.85+e()*.5;p.setScalar(b),c.compose(f,d,p),h.setMatrixAt(v,c),gs.copy(o).offsetHSL((e()-.5)*.04,0,(e()-.5)*.12),h.setColorAt(v,gs)}return h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),t.add(h),t.userData.swayGroup=t,t.userData.swayAmplitude=.04,t.userData.swayFreqMult=1.25,t}function Pw(r=5e3){const e=Da(r),t=Ac-5,i=Ac+4*Pu+8,s=Cw(e,Math.max(3,t),i,1e4);s.name="ForestGrass";const n=[];for(let a=0;a<20;a++){const o=t+e()*(i-t),l=e()*Math.PI*2,h=Rw(9e3+a);h.position.set(Math.sin(l)*o,0,Math.cos(l)*o),h.rotation.y=e()*Math.PI*2,h.scale.setScalar(.9+e()*.5),h.userData.seed=9e3+a,n.push(h)}return{grass:s,shrubs:n}}function Lw(r=4242){const e=Da(r),t=new kt;t.name="RoseCenterpiece";const i=gw(.15,.11),s=new Ft({color:10752036,roughness:.4,side:mt,emissive:2359814,emissiveIntensity:.85});for(let d=0;d<9;d++){const u=new Oe(i,s),p=.2+e()*.55,f=e()*Math.PI*2;u.position.set(Math.cos(f)*p,.015,Math.sin(f)*p),u.rotation.x=Math.PI*.48+(e()-.5)*.2,u.rotation.y=e()*Math.PI*2,u.rotation.z=(e()-.5)*.3,u.scale.setScalar(.72+e()*.38),u.castShadow=!0,t.add(u)}const n=new kt;n.name="RedRoseGLBPivot",n.position.set(0,0,0),t.add(n);const a=d=>{d.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material&&(u.material.shadowSide=mt))})};if($n){const d=$n.clone(!0);a(d),n.add(d)}else Lu(()=>{if($n){const d=$n.clone(!0);a(d),n.add(d)}});const o=36,l=new wt,h=new Float32Array(o*3);for(let d=0;d<o;d++){const u=.3+e()*1.5,p=e()*Math.PI*2,f=.5+e()*2.8;h[d*3]=Math.cos(p)*u+.15,h[d*3+1]=f,h[d*3+2]=Math.sin(p)*u}l.setAttribute("position",new Xt(h,3));const c=new Jc(l,new Zo({color:16767344,size:.045,transparent:!0,opacity:.8,blending:ha,depthWrite:!1}));return t.add(c),t.userData.swayGroup=n,t.userData.swayAmplitude=.035,t.userData.swayFreqMult=1.1,t.userData.motes=c,t}function Dw(){const r=Da(8491),e=["mango","mango","mango","mango","mango","neem","neem","neem","neem","neem","neem","neem","peepal","peepal","peepal","peepal","peepal","banyan","banyan","banyan","banyan"],t={mango:[16.5,25],neem:[18,28.5],peepal:[22,32],banyan:[25,35]},i={mango:1.14,neem:1.02,peepal:1.03,banyan:1.1},s=[],n=5.6;for(let a=0;a<e.length;a++){const o=e[a],[l,h]=t[o],c=i[o];let d=0,u=0,p=0,f=!1;for(let m=0;m<150;m++){const g=r()*Math.PI*2,v=l+r()*(h-l),M=Math.sin(g)*v,x=Math.cos(g)*v;let w=!1;for(const b of s)if(Math.hypot(M-b.x,x-b.z)<n){w=!0;break}if(!w){d=M,u=x,p=g,f=!0;break}}if(!f){const m=a*2.39996+r()*.4,g=l+r()*(h-l);d=Math.sin(m)*g,u=Math.cos(m)*g,p=m}const _=.94+r()*.2;s.push({species:o,x:d,z:u,angle:p,seed:500+a*43,scale:c*_})}return s}function sf(r=!1){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),i=t.createRadialGradient(256,256,0,256,256,256);return r?(i.addColorStop(0,"rgba(0, 0, 0, 0.96)"),i.addColorStop(.35,"rgba(0, 0, 0, 0.78)"),i.addColorStop(.65,"rgba(0, 0, 0, 0.38)"),i.addColorStop(.85,"rgba(0, 0, 0, 0.12)"),i.addColorStop(1,"rgba(0, 0, 0, 0.0)")):(i.addColorStop(0,"rgba(0, 0, 0, 0.65)"),i.addColorStop(.28,"rgba(0, 0, 0, 0.42)"),i.addColorStop(.58,"rgba(0, 0, 0, 0.20)"),i.addColorStop(.82,"rgba(0, 0, 0, 0.05)"),i.addColorStop(1,"rgba(0, 0, 0, 0.0)")),t.fillStyle=i,t.fillRect(0,0,512,512),new jr(e)}function Iw(r){const e=new kt;e.name="CenterSculpture";const t=new Oi(6.2,6.2),i=new oi({map:sf(!1),transparent:!0,opacity:.95,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Oe(t,i);s.rotation.x=-Math.PI/2,s.position.y=.002,s.renderOrder=1,e.add(s);const n=new Oi(3.6,3.6),a=new oi({map:sf(!0),transparent:!0,opacity:.98,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),o=new Oe(n,a);o.rotation.x=-Math.PI/2,o.position.y=.004,o.renderOrder=2,e.add(o);const l=new un(1.8,2.1,3.8,16);l.translate(0,1.9,0);const h=new oi({visible:!1}),c=new Oe(l,h);c.name="SculptureHitbox",e.add(c);const d=new nu(16105608,.65,4,2);return d.position.set(0,1.7,0),e.add(d),new cu(r).load(Gi("models/center_sculpture.glb"),u=>{const p=u.scene;p.name="SculptureScannedModel";const f=new P;let _=-1/0,m=1/0;p.traverse(U=>{if(U.isMesh&&U.geometry){const R=U.geometry.attributes.position,L=new P;for(let N=0;N<R.count;N++)L.fromBufferAttribute(R,N),L.y>_&&(_=L.y,f.copy(L)),L.y<m&&(m=L.y)}});const g=3.6,v=_-m,M=g/(v||1);p.position.x=-f.x*M,p.position.z=-f.z*M,p.position.y=-m*M-.085,p.scale.setScalar(M),p.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0,U.material&&(U.material.roughness=.52,U.material.metalness=.04,U.material.envMapIntensity=.75,U.material.onBeforeCompile=R=>{R.vertexShader=`
                                varying vec3 vGroundWorldPos;
                            
`+R.vertexShader,R.vertexShader=R.vertexShader.replace("#include <worldpos_vertex>",`
                                #include <worldpos_vertex>
                                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                                `),R.fragmentShader=`
                                varying vec3 vGroundWorldPos;
                            
`+R.fragmentShader,R.fragmentShader=R.fragmentShader.replace("#include <dithering_fragment>",`
                                #include <dithering_fragment>
                                float groundH = max(0.0, vGroundWorldPos.y);
                                float baseAO = smoothstep(0.0, 0.45, groundH);
                                gl_FragColor.rgb *= mix(0.42, 1.0, baseAO);
                                `)}))}),e.add(p),e.userData.scannedModel=p;const x=_*M+p.position.y,w=720,b=new un(.016,.016,w,12,1e3,!0);b.translate(0,w/2,0);const A={uTime:{value:0},uMotion:{value:0},uDrag:{value:new te(0,0)},uWind:{value:new te(0,0)}},y=new Ft({color:14162972,emissive:10031120,emissiveIntensity:1.3,roughness:.88,metalness:.02});y.onBeforeCompile=U=>{U.uniforms.uTime=A.uTime,U.uniforms.uMotion=A.uMotion,U.uniforms.uDrag=A.uDrag,U.uniforms.uWind=A.uWind,U.vertexShader=`
                    uniform float uTime;
                    uniform float uMotion;
                    uniform vec2 uDrag;
                    uniform vec2 uWind;
                    varying float vFresnel;
                
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`
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
                    `),U.fragmentShader=`
                    varying float vFresnel;
                
`+U.fragmentShader,U.fragmentShader=U.fragmentShader.replace("#include <dithering_fragment>",`
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
                    `)};const T=new Oe(b,y);T.position.set(0,x,0),T.name="SculptureRedThread",T.frustumCulled=!1,e.add(T),e.userData.threadUniforms=A},void 0,u=>{console.error("Error loading center_sculpture.glb:",u)}),e.userData={isSculpture:!0,hitbox:c},e}const Rc=43.6532*(Math.PI/180),Uw=12.5*(Math.PI/180),Nw=9.95/24*Math.PI*2,Ow=new P(-.198,.456,.8677).normalize(),Fw=new P(-.8734,-.4838,.0549).normalize(),zw=new P(.4448,-.7469,.4941).normalize();function nf(r,e,t){const i=Math.sin(r)*Math.sin(e)+Math.cos(r)*Math.cos(e)*Math.cos(t),s=Math.asin(Math.max(-1,Math.min(1,i))),n=Math.cos(s);if(Math.abs(n)<1e-5)return{alt:s,az:0};const a=(Math.sin(e)-Math.sin(r)*Math.sin(s))/(Math.cos(r)*n),o=-Math.cos(e)*Math.sin(t)/n;let l=Math.atan2(o,Math.max(-1,Math.min(1,a)));l<0&&(l+=Math.PI*2);let h=(l+Math.PI)%(Math.PI*2);return{alt:s,az:h}}function af(r,e,t=1600){const i=Math.cos(r),s=t*i*Math.sin(e),n=t*Math.sin(r),a=-t*i*Math.cos(e);return new P(s,n,a)}function kw(r,e=1600){const t=r-Math.PI/2,i=nf(Rc,Uw,t),s=af(i.alt,i.az,e),n=t+Math.PI,a=-11*(Math.PI/180),o=nf(Rc,a,n),l=af(o.alt,o.az,e);return{sunPos:s,sunAlt:i.alt,sunAz:i.az,moonPos:l,moonAlt:o.alt,moonAz:o.az}}function Bw(r=1800,e=!1){const t=new kt;t.name="TorontoSkySystem";const i=new pn(r*.98,e?24:32,e?16:24),s=new Bt({uniforms:{uZenithColor:{value:new Z(1721972)},uHorizonColor:{value:new Z(5011622)},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new Z(16774616)},uNightFactor:{value:0}},vertexShader:`
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
        `,side:Kt,depthWrite:!1,fog:!1}),n=new Oe(i,s);n.renderOrder=-200,t.add(n);const a=new kt;a.name="TorontoCelestialGroup";const o=new ru().load(Gi("textures/milkyway.jpg"));o.wrapS=qi,o.wrapT=Mi,o.minFilter=St,o.magFilter=St,o.generateMipmaps=!1;const l=new pn(r*.95,e?32:48,e?24:36),h=new Bt({uniforms:{uMwTex:{value:o},uNightFactor:{value:0},uGalacticPole:{value:Ow},uGalacticCenter:{value:Fw},uGalactic90:{value:zw}},vertexShader:`
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
        `,side:Kt,transparent:!0,blending:ha,depthWrite:!1,fog:!1}),c=new Oe(l,h);return c.renderOrder=-160,a.add(c),t.add(a),{skyRoot:t,skyDomeMat:s,mwMat:h,celestialGroup:a,update(d,u,p=1600){const f=kw(d,p),_=f.sunAlt,m=Math.max(0,Math.sin(_)),g=Math.max(0,Math.sin(f.moonAlt)),v=Ke.clamp((-_+.08)/.2,0,1);s.uniforms.uSunDir.value.copy(f.sunPos).normalize(),s.uniforms.uNightFactor.value=v,h.uniforms.uNightFactor.value=v;const M=d-Math.PI/2+Nw;return a.rotation.order="ZXY",a.rotation.x=Math.PI/2-Rc,a.rotation.y=-M,{cel:f,sunAlt:_,sH:m,mH:g,nightFactor:v}}}}const of=new Ko,lf=new Ne,oh=new P,hf=new P,cf=new P,Zs=new P,uf=new P,vo=new P,yo=new Z,Xn=new Z,df=new Z(1721972),pf=new Z(5011622),Hw=new Z(2762055),Vw=new Z(14718591),Gw=new Z(1841196),Ww=new Z(13127711),lh=new Z,hh=new Z,Xw=new Z(0),jw=new Z(0),ff=new Z(16776680),qw=new Z(16298086),mf=new Z(16773832),Yw=new Z(16033630),Kw=new Z(15773850),gf=new Z(15134197),Zw=new Z(12767970),_f=new Z(13162728),Jw=new Z(11584986),$w=new Z(14739698),Qw=new Z(3491165),eE=new Z(16577236),tE=new Z(1053983),iE=new Z(2367256),rE=new Z(659977),sE=new Z(2306328),nE=new Z(6841438),aE=new Z(2107444),oE=new Z(660516),lE=new Z(3289140),hE=new Z(9215598),cE=new Z(5137984),uE=new Z(1977370),dE=new Z(9077088),ch=.025,uh=["default","portfolio","forest"];function Qn(r){return uh[(uh.indexOf(r)+1)%uh.length]}const pE={default:"Doors",portfolio:"Paintings",forest:"Forest"};function xo(r){return pE[Qn(r)]}const vf=130,fE=15,mE=3,yf=720,xf=60,Mf=.2,Mo=.25,Sf=.22,us={scene:{fog:{color:"#273444"},camera:{fov:50}},doors:[{id:"portfolio",label:"PORTFOLIO",type:"rustic_wood",modelPath:"/models/door_rustic.glb",position:[-10,0,-6],rotation:[0,.4,0],destinationUrl:"",animation:"creakOpen",color:16755336,particles:"leaves"},{id:"blog",label:"BLOG",type:"scifi_portal",modelPath:"/models/door_scifi.glb",position:[-5,0,-9],rotation:[0,.2,0],destinationUrl:"/blog",animation:"slideUp",color:8965375,particles:"tech"},{id:"projects",label:"PROJECTS",type:"iron_gate",modelPath:"/models/gate_iron.glb",position:[0,0,-10],rotation:[0,0,0],destinationUrl:"https://waveism.duar.one",animation:"swingBoth",color:16772778,particles:"sparks"},{id:"contact",label:"CONTACT",type:"stone_arch",modelPath:"/models/arch_stone.glb",position:[5,0,-9],rotation:[0,-.2,0],destinationUrl:"/about/",animation:"dissolveField",color:13404415,particles:"runes"},{id:"about",label:"ABOUT",type:"shoji_screen",modelPath:"/models/door_shoji.glb",position:[10,0,-6],rotation:[0,-.4,0],destinationUrl:"/about/",animation:"slideRight",color:16746666,particles:"petals"}]};class gE{constructor(){this.container=document.getElementById("app"),console.log("DuarApp initializing..."),this.scene=new Gf,this.doors=[],this.raycaster=new C0,this.mouse=new te,this.time=0,this.daySpeed=.08,this.motionPaused=!0,this.isTraveling=!1,this.activeDoor=null,this._orbitRadius=null,this.hoveredDoor=null,this.elapsed=0,this.viewMode="portfolio",this._switching=!1,this.particleSystems=[],this.dragPlane=new br(new P(0,1,0),0),this.loadingManager=new om,this.setupLoadingManager(),this._bindReticle(),this._bindPaintingPopup(),this.init(),setTimeout(()=>this.revealScene(),2500)}_bindReticle(){const e=document.getElementById("reticle");if(!e)return;["pointerdown","pointerup"].forEach(i=>e.addEventListener(i,s=>s.stopPropagation())),e.addEventListener("click",i=>{i.stopPropagation(),this.viewMode!=="portfolio"&&this._refuseEntry()});const t=document.querySelector(".reticle-back");t&&t.addEventListener("click",i=>{i.stopPropagation(),this.isTraveling||this.resetScene()})}_bindPaintingPopup(){const e=document.getElementById("painting-popup"),t=document.getElementById("painting-title-btn"),i=document.getElementById("painting-popup-card");!e||!t||(t.addEventListener("click",s=>{s.stopPropagation(),e.classList.toggle("open")}),i&&["pointerdown","pointerup","click"].forEach(s=>{i.addEventListener(s,n=>n.stopPropagation())}),window.addEventListener("click",s=>{e.classList.contains("open")&&!e.contains(s.target)&&e.classList.remove("open")}))}_flashReticleLabel(e){const t=document.querySelector("#reticle .reticle-label");t&&(this._reticleLabelDefault||(this._reticleLabelDefault=t.textContent),t.textContent=e,clearTimeout(this._reticleLabelTimeout),this._reticleLabelTimeout=setTimeout(()=>{t.textContent=this._reticleLabelDefault,t.classList.remove("refuse")},1600))}_refuseEntry(e="Coming soon"){const t=document.getElementById("reticle"),i=t?.querySelector(".reticle-label");this._flashReticleLabel(e),!(!t||!i)&&(t.classList.remove("refuse"),i.classList.remove("refuse"),t.offsetWidth,t.classList.add("refuse"),i.classList.add("refuse"),setTimeout(()=>t.classList.remove("refuse"),500))}_showReticle(){const e=document.getElementById("reticle");if(!e)return;const t=this.viewMode==="portfolio";if(e.classList.toggle("art-mode",t),t){const s=e.querySelector(".reticle-title");s&&(s.textContent="")}e.classList.add("visible");const i=document.querySelector(".reticle-back");if(i&&(i.classList.toggle("art",t),i.classList.add("visible")),Ue.fromTo(e,{opacity:0,scale:0},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)",overwrite:!0}),t&&this.activeDoor?.data){const s=this.activeDoor.data,n=document.getElementById("painting-popup"),a=n?.querySelector(".popup-title-text"),o=n?.querySelector(".popup-card-meta"),l=n?.querySelector(".popup-card-desc");if(n&&a){a.textContent=s.title||"Untitled";const h=[];s.year&&h.push(`${s.year}`),s.widthIn&&s.heightIn&&h.push(`${s.widthIn}×${s.heightIn} in`),s.medium&&h.push(s.medium),o&&(o.textContent=h.join("  ·  ")),l&&(l.textContent=s.description||""),n.classList.remove("open"),n.classList.add("visible")}}}_hideReticle(){const e=document.getElementById("reticle");if(!e)return;document.querySelector(".reticle-back")?.classList.remove("visible","art");const t=document.getElementById("painting-popup");t&&t.classList.remove("visible","open"),Ue.to(e,{opacity:0,scale:0,duration:.3,ease:"power2.in",overwrite:!0,onComplete:()=>e.classList.remove("visible","art-mode")})}dismissIntro(){this._introDismissed||(this._introDismissed=!0,["intro-title","intro-hint"].forEach(e=>{const t=document.getElementById(e);t&&(t.style.animation="none",Ue.to(t,{opacity:0,y:-20,duration:1.2,ease:"power2.out",onComplete:()=>{t.style.display="none"}}))}))}updateLabels(){if(!this.doors.length)return;const e=new P,t=window.innerWidth/2,i=window.innerHeight/2;this.doors.forEach(s=>{const n=s.labelEl;if(!n)return;if(!(s===this.hoveredDoor&&!this.activeDoor&&!this.isTraveling)){n.style.opacity!=="0"&&(n.style.opacity="0");return}const a=s.isPainting?s.centreY+(s.height||4)/2+.3:3.7;if(e.set(s.group.position.x,s.group.position.y+a,s.group.position.z).project(this.camera),e.z>1){n.style.opacity="0";return}n.style.left=e.x*t+t+"px",n.style.top=-e.y*i+i+"px",n.style.opacity="1"})}setupLoadingManager(){this.loadingManager.onLoad=()=>this.revealScene(),this.loadingManager.onError=()=>this.revealScene()}revealScene(){this._revealed=!0,this._maybeStartIntro();const e=document.getElementById("loading");e&&Ue.to(e,{opacity:0,duration:1.5,ease:"power2.out",onComplete:()=>{e.style.display="none"}}),this.viewMode==="portfolio"?(this.sculpture&&(this.sculpture.visible=!0),this.rock&&(this.rock.visible=!1),this.roseCenterpiece&&(this.roseCenterpiece.visible=!1)):this.viewMode==="forest"?(this.roseCenterpiece&&(this.roseCenterpiece.visible=!0),this.rock&&(this.rock.visible=!1),this.sculpture&&(this.sculpture.visible=!1)):(this.rock&&(this.rock.visible=!0),this.sculpture&&(this.sculpture.visible=!1),this.roseCenterpiece&&(this.roseCenterpiece.visible=!1))}init(){this.camera=new ri(us.scene.camera.fov,window.innerWidth/window.innerHeight,.1,6e3),this.camera.fov=this._fovForAspect(window.innerWidth/window.innerHeight),this.camera.updateProjectionMatrix(),this.camera.position.set(0,3,28.5),this.camera.lookAt(0,1.6,0);const e=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||window.innerWidth<768;this.isMobile=e,this.renderer=new bS({antialias:!e,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e?1.5:2)),this.renderer.toneMapping=Dc,this.renderer.toneMappingExposure=1.02,this.renderer.outputColorSpace=yt,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bf,this.container.appendChild(this.renderer.domElement),this.renderer.setClearColor(0,1);try{const u=new oc(this.renderer);u.compileEquirectangularShader();const p=new Eb;this.scene.environment=u.fromScene(p).texture,this.scene.environmentIntensity=.35,p.dispose(),u.dispose()}catch(u){console.warn("Environment map initialization bypassed:",u)}this.composer=new bb(this.renderer),this.composer.addPass(new Tb(this.scene,this.camera));const t=e?new te(Math.floor(window.innerWidth/4),Math.floor(window.innerHeight/4)):new te(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2));this.bloomPass=new vn(t,.08,.3,.98),this._bloomDefaults={strength:.08,threshold:.98},this.composer.addPass(this.bloomPass),this.controls=new wS(this.camera,this.renderer.domElement),this.controls.target.set(0,1.6,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=.5,this.controls.maxDistance=100,this.controls.maxPolarAngle=Math.PI*.54,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=-.8,this.scene.fog=new jc(us.scene.fog.color,.002),this.scene.background=new Z(us.scene.fog.color),this.setupLighting(),this.setupEnvironment(),this.viewMode==="portfolio"?(this.buildPortfolioDoors(),this.bloomPass.threshold=.98,this.bloomPass.strength=.08):this.setupDoors(),this.setupDustMotes(),window.addEventListener("resize",()=>this.onResize(),{passive:!0}),window.addEventListener("wheel",()=>this.dismissIntro(),{passive:!0}),["gesturestart","gesturechange","gestureend"].forEach(u=>window.addEventListener(u,p=>p.preventDefault(),{passive:!1}));let i=0;window.addEventListener("touchend",u=>{const p=performance.now();p-i<300&&u.preventDefault(),i=p},{passive:!1}),window.addEventListener("contextmenu",u=>{this.draggedDoor&&u.preventDefault()});let s=0,n=0,a=0;this._isPointerDown=!1,this._pointerSpeed=0;let o=0,l=0,h=0;window.addEventListener("pointerdown",u=>{this.dismissIntro(),s=u.clientX,n=u.clientY,a=performance.now(),this._isPointerDown=!0,o=u.clientX,l=u.clientY,h=a,this._pointerSpeed=0,this.onMouseMove(u),(u.button===1||u.button===2||u.shiftKey)&&this.handlePointerDown(u)}),window.addEventListener("pointermove",u=>{if(this._isPointerDown){const p=performance.now(),f=Math.max(1,p-h),_=Math.hypot(u.clientX-o,u.clientY-l);this._pointerSpeed=_/f*1e3,o=u.clientX,l=u.clientY,h=p}this.onMouseMove(u),this.draggedDoor&&this.handleDoorDrag(u)}),window.addEventListener("pointerup",u=>{if(this._isPointerDown=!1,this._pointerSpeed=0,u.pointerType==="touch"&&(this.hoveredDoor=null),this.draggedDoor){this.draggedDoor=null,this.controls.enabled=!0;return}const p=Math.hypot(u.clientX-s,u.clientY-n),f=performance.now()-a;p<8&&f<350&&this.onClick(u)}),window.addEventListener("pointercancel",()=>{this._isPointerDown=!1,this._pointerSpeed=0}),this.createTimeControls(),this._startClock();const c=new Date,d=c.getHours()+c.getMinutes()/60;this.sunAngle=(d-6)/24*Math.PI*2,this.daySpeed=ch,setTimeout(()=>this.dismissIntro(),14e3);try{this.renderer.compile(this.scene,this.camera)}catch{}this._lastFrame=performance.now(),this.animate()}createTimeControls(){if(!document.getElementById("compact-ui-css")){const m=document.createElement("style");m.id="compact-ui-css",m.innerHTML=`
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
            `,document.head.appendChild(m)}const e=document.createElement("div");this.uiContainer=e,e.style.cssText="position:absolute; bottom:calc(45px + env(safe-area-inset-bottom)); width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);";const t=document.createElement("div");t.className="glass-bar-wrapper",t.onmouseenter=()=>this.resetUIHideTimer();const i={home:'<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>',random:'<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>',day:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>',spiral:'<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a7.2 7.2 0 0 0-7.2-7.2 7.2 7.2 0 0 0-7.2 7.2c0 3.09 2.51 5.6 5.6 5.6s5.6-2.51 5.6-5.6a4 4 0 0 0-4-4c-1.33 0-2.4 1.07-2.4 2.4s1.07 2.4 2.4 2.4"/></svg>',night:'<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',pause:'<svg viewBox="0 0 24 24"><rect x="7" y="5" width="3.6" height="14" rx="1.2"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.2"/></svg>',play:'<svg viewBox="0 0 24 24"><path d="M8 5.4L18.4 12 8 18.6Z"/></svg>',art:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',duar:'<svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16h14zM9 5h6v14H9V5zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',forest:'<svg viewBox="0 0 24 24"><path d="M12 2 5 13h4l-5 8h20l-5-8h4z"/><path d="M12 23v-4"/></svg>',instagram:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'},s=(m,g,v="")=>{const M=document.createElement("button");if(M.className="glass-btn",M.innerHTML=m,v){M.setAttribute("aria-label",v);const x=document.createElement("span");x.className="btn-tip",x.textContent=v,M.appendChild(x);let w;M.addEventListener("touchstart",()=>{x.classList.add("tip-visible"),clearTimeout(w),w=setTimeout(()=>x.classList.remove("tip-visible"),1400)},{passive:!0})}return M.onclick=x=>{x.stopPropagation(),g(),this.resetUIHideTimer()},M.addEventListener("touchstart",x=>x.stopPropagation()),M},n=s(i.home,()=>this.resetScene(!0),"Home"),a=s(i.random,()=>{if(this.doors.length===0||this.isTraveling)return;const m=this.doors[Math.floor(Math.random()*this.doors.length)];m.isPainting?this.focusPainting(m):m.isOpen||this.toggleDoor(m)},"Discover"),o=s(i.day,()=>{},"Day");o.classList.add("day-btn");const l=s(i.spiral,()=>{},"Time Warp · Hold to cycle");l.classList.add("spiral-btn");const h=s(i.night,()=>{},"Night");h.classList.add("night-btn");const c=s(i.pause,()=>{},"Pause motion · Hold to go wuuuuu");this.motionBtn=c,this.rotateBtn=c,c.style.color="#fff",this._motionIcons={pause:i.pause,play:i.play};const d=200,u=(m,g,v)=>{let M,x=0,w=!1;const b=y=>{y.stopPropagation(),M&&clearInterval(M),this.resetUIHideTimer(),x=performance.now(),w=!1,M=setInterval(()=>{const T=performance.now()-x;this.resetUIHideTimer(),T>d&&(w=!0,g(T))},50)},A=y=>{M&&(clearInterval(M),M=null),x&&performance.now()-x>d&&(w=!0),!w&&v&&y.type!=="pointerleave"?(v(),this.resetUIHideTimer()):w&&((m===l||m===o||m===h)&&(this.daySpeed=0),m===c&&(this.controls.autoRotateSpeed=-.8,this.daySpeed=ch))};m.addEventListener("pointerdown",b),m.addEventListener("pointerup",A),m.addEventListener("pointerleave",A),m.addEventListener("pointerenter",()=>this.resetUIHideTimer())};u(c,()=>{this.motionPaused&&this.setMotionPaused(!1),this.controls.autoRotateSpeed=Math.max(-5e3,Math.min(-.5,this.controls.autoRotateSpeed*1.05)),this.daySpeed<.02&&(this.daySpeed=.02),this.daySpeed=Math.min(.65,this.daySpeed*1.08)},()=>{this.setMotionPaused(!this.motionPaused)}),u(l,m=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.02&&(this.daySpeed=.02),this.daySpeed=Math.min(.65,this.daySpeed*1.08)},()=>{this.sunAngle=(this.sunAngle+Math.PI/12)%(Math.PI*2),this.daySpeed=0}),u(o,m=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.01&&(this.daySpeed=.01),this.daySpeed=Math.min(.2,this.daySpeed*1.1)},()=>{this.sunAngle=Math.PI/2,this.daySpeed=0}),u(h,m=>{this.motionPaused&&this.setMotionPaused(!1,{rotation:!1}),this.daySpeed<.01&&(this.daySpeed=.01),this.daySpeed=Math.min(.2,this.daySpeed*1.1)},()=>{this.sunAngle=3*Math.PI/2,this.daySpeed=0});const p=m=>({default:i.duar,portfolio:i.art,forest:i.forest})[Qn(m)],f=s(p(this.viewMode),async()=>{await this.switchView(Qn(this.viewMode))},xo(this.viewMode));this.dockModeBtn=f,this.updateDockModeBtn=()=>{const m=xo(this.viewMode);f.innerHTML=p(this.viewMode),f.setAttribute("aria-label",m);const g=document.createElement("span");g.className="btn-tip",g.textContent=m,f.appendChild(g)};const _=s(i.instagram,()=>{window.open("https://instagram.com/vaveism","_blank","noopener,noreferrer")},"@vaveism");this.instaBtn=_,_.style.display=this.viewMode==="portfolio"?"inline-flex":"none",t.append(n,c,a,o,l,h,f,_),e.appendChild(t),document.body.appendChild(e),this.uiVisible=!0,this.resetUIHideTimer()}updatePaintingLight(e){if(!this.doors.length)return;hf.copy(e.cel.sunPos).normalize(),cf.copy(e.cel.moonPos).normalize();const t=e.sH,i=e.sunAlt>.01?0:e.mH,s=Ke.clamp(t*3,0,1),n=Ke.clamp(i*3,0,1),a=.4+.16*t;for(const o of this.doors){if(!o.isPainting||!o.panelMaterial||(Zs.subVectors(this.camera.position,o.group.position),Zs.y=0,Zs.lengthSq()<1e-6))continue;Zs.normalize();const l=Math.max(0,Zs.dot(hf)),h=Math.max(0,Zs.dot(cf));let c=a+.5*s*l+.14*n*h;o===this.activeDoor&&(c=Ke.lerp(c,1,.85)),c=Ke.clamp(c,.34,1),o._lit=o._lit===void 0?c:Ke.lerp(o._lit,c,.12),o.panelMaterial.color.setScalar(o._lit)}}_maybeStartIntro(){this._introStarted||!this._doorsReady||!this._revealed||this.viewMode!=="portfolio"||this.activeDoor||(this._introStarted=!0,this._playIntroDescent())}_playIntroDescent(){const e=this._introOverview||this.getDefaultOverview(),t=this._priorMaxDistance??this.controls.maxDistance;Ue.killTweensOf(this.camera.position),Ue.killTweensOf(this.controls);const i=Ue.timeline({onComplete:()=>{this.controls.maxDistance=t}});i.to(this.camera.position,{y:e.camPos.y,duration:fE,delay:1.6,ease:"sine.inOut"});const s=1.6;i.call(()=>{this.setMotionPaused(!1,{rotation:!1}),this.controls.autoRotate=!0},null,s),i.fromTo(this.controls,{autoRotateSpeed:0},{autoRotateSpeed:-.8,duration:mE,ease:"sine.inOut"},s)}setMotionPaused(e,{rotation:t=!0}={}){this.motionPaused=!!e,t&&(this.viewMode==="forest"?this.controls.autoRotate=!1:(this.controls.autoRotate=!this.motionPaused,this.motionPaused||(this.controls.autoRotateSpeed=-.8)));const i=this.motionBtn;if(i&&this._motionIcons){const s=(this.motionPaused?"Play motion":"Pause motion")+" · Hold to go wuuuuu";i.innerHTML=this.motionPaused?this._motionIcons.play:this._motionIcons.pause,i.setAttribute("aria-label",s),i.setAttribute("aria-pressed",String(this.motionPaused));const n=document.createElement("span");n.className="btn-tip",n.textContent=s,i.appendChild(n),i.style.color=this.motionPaused?"rgba(255,255,255,0.35)":"#fff"}this.resetUIHideTimer()}resetUIHideTimer(){this.uiHideTimeout&&clearTimeout(this.uiHideTimeout),this.uiHideTimeout=setTimeout(()=>this.setUIVisibility(!1),5e3)}setUIVisibility(e){this.uiContainer&&(e?(this.uiContainer.classList.remove("ui-hidden"),this.uiVisible=!0,this.resetUIHideTimer()):(this.uiContainer.classList.add("ui-hidden"),this.uiVisible=!1),this.viewToggle?.classList.toggle("ui-hidden",!e))}createViewToggle(){const e=document.createElement("button");e.id="view-toggle",e.className="ui-hidden",this.viewToggle=e,(()=>{const t=xo(this.viewMode);e.textContent=t,e.setAttribute("aria-label",`Switch to ${t.toLowerCase()}`)})(),e.addEventListener("click",async t=>{t.stopPropagation(),!this._switching&&(e.disabled=!0,await this.switchView(Qn(this.viewMode)),e.disabled=!1,this.resetUIHideTimer())}),e.addEventListener("pointerdown",t=>t.stopPropagation()),document.body.appendChild(e)}handlePointerDown(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);if(t.length>0){const i=t.find(s=>{let n=s.object;for(;n;){if(this.doors.some(a=>a.group===n))return!0;n=n.parent}return!1});if(i){let s=i.object;for(;s;){const n=this.doors.find(a=>a.group===s);if(n){this.draggedDoor=n,this.controls.enabled=!1;return}s=s.parent}}}}handleDoorDrag(e){if(!this.draggedDoor)return;this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=new P;this.raycaster.ray.intersectPlane(this.dragPlane,t),t&&this.draggedDoor.group.position.set(t.x,t.y,t.z)}onClick(e){if(!this.isTraveling)try{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);console.log("Click hits:",t.length,t.map(s=>s.object.type));let i=!1;if(t.length>0){const s=a=>{if(a===this.rock)return!0;let o=a;for(;o;){if(o===this.sculpture)return!0;o=o.parent}return!1},n=t.find(a=>{if(s(a.object))return!0;let o=a.object;for(;o;){if(this.doors.some(l=>l.group===o))return!0;o=o.parent}return!1});if(n){if(i=!0,s(n.object)){this.setMotionPaused(!0),this._switching||this.switchView(Qn(this.viewMode));return}let a=n.object,o=null;for(;a&&(o=this.doors.find(l=>l.group===a),!o);)a=a.parent;if(o&&!o.isTree)if(o.isPainting)if(this.activeDoor===o&&!this.isTraveling){const l=document.getElementById("painting-popup");l&&l.classList.toggle("open")}else this.focusPainting(o);else o.isOpen?this._refuseEntry():this.toggleDoor(o)}}if(!i){const s=document.getElementById("painting-popup");s&&s.classList.contains("open")?s.classList.remove("open"):this.setUIVisibility(!this.uiVisible)}}catch(t){console.error("Error in onClick:",t)}}travelThroughPortal(e){if(this.isTraveling)return;this.isTraveling=!0,this.activeDoor=null,this._hideReticle();const t=e.data.destinationUrl;if(console.log("travelThroughPortal to:",t),!t){this.isTraveling=!1;return}this.controls.enabled=!1,this.controls.autoRotate=!1,this.uiContainer&&(this.setUIVisibility(!1),this.uiContainer.style.display="none");const i=new P;e.portalHitbox.getWorldPosition(i);const s=new P().subVectors(i,this.camera.position).normalize(),n=i.clone().add(s.multiplyScalar(3)),a=Ue.timeline();a.to(this.camera.position,{x:n.x,y:i.y,z:n.z,duration:1.8,ease:"power3.in"},0),a.to(this.controls.target,{x:i.x+s.x*10,y:i.y,z:i.z+s.z*10,duration:1.5,ease:"power2.inOut"},0),a.to(this.camera,{fov:130,duration:1.8,ease:"power3.in",onUpdate:()=>this.camera.updateProjectionMatrix()},0);const o=document.getElementById("controls-legend");o&&a.to(o,{opacity:0,y:-10,duration:.5,ease:"power2.out"},0);const l=document.createElement("div");l.style.cssText=`
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #000;
            opacity: 0;
            z-index: 99999;
            pointer-events: none;
        `,document.body.appendChild(l),a.to(l,{opacity:1,duration:1,ease:"power2.inOut"},.8),a.call(()=>{t.startsWith("mailto:")?(window.location.href=t,setTimeout(()=>{l.style.opacity="0",setTimeout(()=>{document.body.removeChild(l),this.isTraveling=!1,this.controls.enabled=!0,this.uiContainer&&(this.uiContainer.style.display="flex",this.setUIVisibility(!0)),this.resetScene()},500)},2e3)):window.location.href=t})}createPortalMaterial(e){return new Bt({uniforms:{uTime:{value:0},uOpacity:{value:0},uHover:{value:0},uColor:{value:new Z(e||16777215)}},vertexShader:`
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
            `,transparent:!0,depthWrite:!1,blending:xs,side:mt})}_rebuildHoverTargets(){this._hoverTargets=[],this._hoverOwner=new Map;for(const t of this.doors){const i=t.portalHitbox;i&&(this._hoverTargets.push(i),this._hoverOwner.set(i,t))}const e=this.viewMode==="portfolio"?this.sculpture:this.rock;e&&e.traverse(t=>{t.isMesh&&(this._hoverTargets.push(t),this._hoverOwner.set(t,null))})}checkHover(){if(!this.raycaster||!this.scene||!this.camera)return;this._hoverTargets||this._rebuildHoverTargets(),this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this._hoverTargets,!1);let t=!1,i=null;if(e.length>0){const n=this._hoverOwner.get(e[0].object);t=!0,i=n||null}const s=t?"pointer":"crosshair";this._cursor!==s&&(this._cursor=s,document.body.style.cursor=s),this.hoveredDoor=i,this.doors.forEach(n=>{if(n.portalMaterial){const a=n===i&&n.isOpen?1:0;Ue.to(n.portalMaterial.uniforms.uHover,{value:a,duration:.4,ease:"power2.out"})}})}toggleDoor(e){if(!e.isAnimating){if(this.dismissIntro(),e.isAnimating=!0,e.isOpen=!e.isOpen,e.isOpen){const t=document.querySelector("#reticle .reticle-title");t&&(t.textContent=e.name||""),Ue.fromTo(this.bloomPass,{strength:2},{strength:1.2,duration:1.6,ease:"power2.out",overwrite:!0});const i=new P;e.group.getWorldPosition(i),i.y=1.78;const s=new P().subVectors(this.camera.position,i).setY(0).normalize();s.lengthSq()<1e-4&&s.set(0,0,1);const n=this.camera.fov/2*(Math.PI/180),a=.8/(window.innerWidth/window.innerHeight*Math.tan(n)),o=Math.max(.3,Math.min(6,a)),l=i.clone().add(s.multiplyScalar(o));l.y=1.78,this.activeDoor=e,this.flyTo(l,i,1.9,()=>{this.controls.target.copy(i),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.25,this.activeDoor===e&&this._showReticle()}),this.ringMat&&Ue.to(this.ringMat,{opacity:0,duration:1.5,ease:"power2.inOut"}),e.portalMaterial&&Ue.to(e.portalMaterial.uniforms.uOpacity,{value:.75,duration:1.5,delay:.5,ease:"power2.out"})}else{this.activeDoor=null,this._hideReticle(),this.setUIVisibility(!0);const t=new P;e.group.getWorldPosition(t),t.y=1.78;const i=new P().subVectors(this.camera.position,t).setY(0).normalize();i.lengthSq()<1e-4&&i.set(0,0,1);const s=t.clone().addScaledVector(i,8);s.y=2.8,Ue.to(this.camera.position,{x:s.x,y:s.y,z:s.z,duration:1.8,ease:"power3.inOut"}),Ue.to(this.controls.target,{x:t.x,y:1.78,z:t.z,duration:1.8,ease:"power3.inOut"}),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.6,Ue.to(this.camera,{fov:this._fovForAspect(this.camera.aspect),duration:1.8,ease:"power3.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()}),this.ringMat&&Ue.to(this.ringMat,{opacity:.9,duration:2,delay:.5,ease:"power2.inOut"}),e.portalMaterial&&Ue.to(e.portalMaterial.uniforms.uOpacity,{value:0,duration:1,ease:"power2.inOut"})}Ue.to(e.hinge.rotation,{y:e.isOpen?-Math.PI/2:0,duration:2,delay:e.isOpen?.5:0,ease:"power2.inOut",onComplete:()=>{e.isAnimating=!1}})}}flyTo(e,t,i=1.9,s=null){this.controls.autoRotate=!1,this.controls.enableDamping=!1,Ue.killTweensOf(this.camera.position),Ue.killTweensOf(this.controls.target),Ue.to(this.camera.position,{x:e.x,y:e.y,z:e.z,duration:i,ease:"power3.inOut",overwrite:!0}),Ue.to(this.controls.target,{x:t.x,y:t.y,z:t.z,duration:i,ease:"power3.inOut",overwrite:!0,onComplete:()=>{this.controls.target.copy(t),this.controls.enableDamping=!0,s&&s()}})}getDefaultOverview(){const e=window.innerWidth/Math.max(1,window.innerHeight),t=Ke.clamp((4/3-e)/(4/3-.46),0,1),i=1.6,s=3,n=1,a=new P(0,i,0);let o=new P(0,s,28.5*n);if(this.viewMode==="portfolio"&&this.doors.length>0){const l=this.doors.find(h=>h.data?.id==="Flowers Unnamed")||this.doors.find(h=>h.isPainting);if(l){const h=new P;l.group.getWorldPosition(h);const c=Math.atan2(h.x,h.z);let d=Math.max(28,(l.radius||15)+13)*n,u=s,p=i;if(t>.01){const f=Qp(l.width,l.height,this.camera)*1.25,_=l.centreY||2;d=Ke.lerp(d,(l.radius||15)+f,t),p=Ke.lerp(i,_,t),u=Ke.lerp(s,Math.min(1.6,_*.55),t)}a.set(0,p,0),o=new P(Math.sin(c)*d,u,Math.cos(c)*d)}}return{camPos:o,target:a}}resetScene(e=!1){const t=!e&&this.viewMode==="portfolio"&&this.activeDoor?.isPainting?this.activeDoor:null;this.closeAllDoors(),this.activeDoor=null,this.daySpeed=ch,this._hideReticle(),this.setUIVisibility(!0);let i=new P(0,1.6,0),s;if(t){const n=new P;t.group.getWorldPosition(n);const a=Math.atan2(n.x,n.z),o=t.radius||15,l=Math.max(28,o+13),h=2.8+Math.min(o*.04,3.2);s=new P(Math.sin(a)*l,h,Math.cos(a)*l)}else{const n=this.getDefaultOverview();s=n.camPos,i=n.target}this.flyTo(s,i,1.8,()=>{this.viewMode!=="forest"?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.6):this.controls.autoRotate=!1}),this.ringMat&&Ue.to(this.ringMat,{opacity:.9,duration:4,ease:"power2.inOut"}),Ue.to(this.camera,{fov:this._fovForAspect(this.camera.aspect),duration:1.8,ease:"power2.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()})}closeAllDoors(){this.doors.forEach(e=>{e.isOpen&&(e.isOpen=!1,e.isAnimating=!0,Ue.to(e.hinge.rotation,{y:0,duration:1.5,ease:"power2.inOut",onComplete:()=>{e.isAnimating=!1}}))})}setupLighting(){const e=new p0(16774634,.05);this.scene.add(e),this.hemiLight=new l0(16774104,2235414,.28),this.scene.add(this.hemiLight);const t=this.isMobile?1024:2048;this.sunDist=1600,this.sunLight=new nc(16773832,2.5),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=700;const i=75;this.sunLight.shadow.camera.left=-i,this.sunLight.shadow.camera.right=i,this.sunLight.shadow.camera.top=i,this.sunLight.shadow.camera.bottom=-i,this.sunLight.shadow.bias=-3e-4,this.sunLight.shadow.normalBias=.025,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const s=this.generateSunTexture();this.sunMesh=new Oe(new pn(44,32,32),new Ft({map:s,emissiveMap:s,emissive:16770167,emissiveIntensity:2.2,roughness:.85,fog:!1,transparent:!0})),this.sunMesh.renderOrder=-180,this.scene.add(this.sunMesh),this.moonLight=new nc(13162728,1.4),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.set(t,t),this.moonLight.shadow.camera.near=1,this.moonLight.shadow.camera.far=700,this.moonLight.shadow.camera.left=-i,this.moonLight.shadow.camera.right=i,this.moonLight.shadow.camera.top=i,this.moonLight.shadow.camera.bottom=-i,this.moonLight.shadow.bias=-3e-4,this.moonLight.shadow.normalBias=.025,this.moonLight.shadow.radius=2,this.scene.add(this.moonLight),this.scene.add(this.moonLight.target);const n=this.generateMoonTexture();this.moonMesh=new Oe(new pn(30,32,32),new Ft({map:n,emissiveMap:n,emissive:14739698,emissiveIntensity:1.1,roughness:.92,metalness:0,fog:!1,transparent:!0})),this.moonMesh.renderOrder=-180,this.scene.add(this.moonMesh)}generateSunTexture(){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#fffbeb"),i.addColorStop(.4,"#ffe67c"),i.addColorStop(1,"#ffb833"),t.fillStyle=i,t.fillRect(0,0,1024,512);for(let s=0;s<300;s++)t.fillStyle=`rgba(255, 255, 255, ${Math.random()*.15})`,t.beginPath(),t.arc(Math.random()*1024,Math.random()*512,Math.random()*25,0,Math.PI*2),t.fill();return new jr(e)}generateMoonTexture(){const e=document.createElement("canvas"),t=1024,i=512;e.width=t,e.height=i;const s=e.getContext("2d"),n=s.createLinearGradient(0,0,0,i);n.addColorStop(0,"#e8edf3"),n.addColorStop(.5,"#dbe2ea"),n.addColorStop(1,"#caced4"),s.fillStyle=n,s.fillRect(0,0,t,i);const a=s.getImageData(0,0,t,i),o=a.data;let l=12345;const h=()=>(l=l*16807%2147483647,(l-1)/2147483646);for(let u=0;u<i;u++)for(let p=0;p<t;p++){const f=(u*t+p)*4,_=(h()-.5)*18;o[f]=Math.max(0,Math.min(255,o[f]+_)),o[f+1]=Math.max(0,Math.min(255,o[f+1]+_)),o[f+2]=Math.max(0,Math.min(255,o[f+2]+_+2))}s.putImageData(a,0,0),[{x:.36*t,y:.32*i,rx:110,ry:75,col:"rgba(80, 92, 106, 0.58)"},{x:.44*t,y:.3*i,rx:85,ry:65,col:"rgba(74, 86, 98, 0.62)"},{x:.58*t,y:.35*i,rx:70,ry:58,col:"rgba(76, 88, 102, 0.60)"},{x:.62*t,y:.46*i,rx:80,ry:60,col:"rgba(72, 84, 96, 0.62)"},{x:.76*t,y:.38*i,rx:42,ry:34,col:"rgba(68, 78, 90, 0.65)"},{x:.68*t,y:.56*i,rx:65,ry:50,col:"rgba(78, 88, 100, 0.55)"},{x:.59*t,y:.62*i,rx:45,ry:36,col:"rgba(82, 92, 104, 0.52)"},{x:.42*t,y:.62*i,rx:70,ry:52,col:"rgba(80, 90, 102, 0.56)"},{x:.32*t,y:.6*i,rx:45,ry:38,col:"rgba(78, 88, 100, 0.54)"},{x:.48*t,y:.18*i,rx:140,ry:24,col:"rgba(84, 95, 108, 0.50)"}].forEach(u=>{s.save(),s.filter="blur(12px)",s.fillStyle=u.col,s.beginPath(),s.ellipse(u.x,u.y,u.rx,u.ry,0,0,Math.PI*2),s.fill(),s.fillStyle="rgba(64, 74, 86, 0.42)",s.beginPath(),s.ellipse(u.x+(h()-.5)*20,u.y+(h()-.5)*15,u.rx*.65,u.ry*.65,.2,0,Math.PI*2),s.fill(),s.restore()});const c=.47*t,d=.78*i;s.save(),s.strokeStyle="rgba(255, 255, 255, 0.28)",s.lineWidth=1.6,s.filter="blur(2px)";for(let u=0;u<24;u++){const p=u/24*Math.PI*2+h()*.15,f=90+h()*180;s.beginPath(),s.moveTo(c,d),s.lineTo(c+Math.cos(p)*f,d+Math.sin(p)*f),s.stroke()}s.fillStyle="rgba(255, 255, 255, 0.85)",s.filter="blur(3px)",s.beginPath(),s.arc(c,d,14,0,Math.PI*2),s.fill(),s.restore(),[{x:.41*t,y:.41*i,r:10,rays:14,len:75},{x:.32*t,y:.43*i,r:6,rays:10,len:45},{x:.28*t,y:.33*i,r:5,rays:8,len:35}].forEach(u=>{s.save(),s.strokeStyle="rgba(255, 255, 255, 0.22)",s.lineWidth=1.2,s.filter="blur(1.5px)";for(let p=0;p<u.rays;p++){const f=p/u.rays*Math.PI*2+h()*.2;s.beginPath(),s.moveTo(u.x,u.y),s.lineTo(u.x+Math.cos(f)*u.len,u.y+Math.sin(f)*u.len),s.stroke()}s.fillStyle="rgba(255, 255, 255, 0.90)",s.beginPath(),s.arc(u.x,u.y,u.r,0,Math.PI*2),s.fill(),s.restore()});for(let u=0;u<180;u++){const p=h()*t,f=h()*i,_=2+h()*6;s.save(),s.fillStyle="rgba(70, 80, 92, 0.35)",s.beginPath(),s.arc(p,f,_,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255, 255, 255, 0.45)",s.lineWidth=.8,s.beginPath(),s.arc(p-.5,f-.5,_,-Math.PI*.75,Math.PI*.25),s.stroke(),s.restore()}return new jr(e)}setupEnvironment(){const e=new tu(.001,150,96,64);this.groundMat=new Ft({color:6841438,roughness:1,metalness:0,envMapIntensity:0,transparent:!0,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),this.groundMat.onBeforeCompile=i=>{i.uniforms.uForestWave=kr.uForestWave,i.uniforms.uForestActive=kr.uForestActive,i.vertexShader=`
                uniform float uForestWave;
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`
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
                `),i.vertexShader=i.vertexShader.replace("#include <worldpos_vertex>",`
                #include <worldpos_vertex>
                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                `),i.fragmentShader=`
                uniform float uForestWave;
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
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
                `)};const t=new Oe(e,this.groundMat);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t),this.groundMesh=t,this.createSacredGeometry(),this.createCentralRock(),this.skySystem=Bw(1800,this.isMobile),this.scene.add(this.skySystem.skyRoot)}_toGurmukhi(e){const t=["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"];return String(e).replace(/[0-9]/g,i=>t[+i])}_randomDoorName(){return"duar-"+this._toGurmukhi(1+Math.floor(Math.random()*9))}_startClock(){const e=document.getElementById("clock"),t=document.getElementById("clock-time"),i=document.getElementById("clock-tz");if(i)try{i.textContent=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}if(e&&t){const o=()=>{e.classList.add("tz-visible"),clearTimeout(this._tzHideTimeout),this._tzHideTimeout=setTimeout(()=>e.classList.remove("tz-visible"),5e3)};t.addEventListener("mouseenter",o),t.addEventListener("touchstart",l=>{l.stopPropagation(),o()},{passive:!0}),t.addEventListener("click",l=>l.stopPropagation())}if(!t)return;const s=o=>String(o).padStart(2,"0"),n=o=>String(o).padStart(3,"0"),a=()=>{const o=new Date,l=`${s(o.getHours())} : ${s(o.getMinutes())} : ${s(o.getSeconds())} : ${n(o.getMilliseconds())}`;t.textContent=this._toGurmukhi(l)};a(),this._clockInterval=setInterval(a,40)}clearDoors(){this.activeDoor=null,this.hoveredDoor=null,this._hideReticle(),this.doors.forEach(e=>{e.labelEl?.remove(),sw(e),e.group.traverse(t=>{if(!t.isMesh)return;const i=t.geometry===qT||t.geometry===yg||Rg.has(t.geometry);t.geometry&&!i&&t.geometry.dispose(),t.material&&t.material!==Ru&&(t.material.map&&!e.isPainting&&t.material.map.dispose(),t.material.dispose())}),this.scene.remove(e.group)}),this.doors=[],this._hoverTargets=null,this._hoverOwner=null,nw()}_showCenterpiece(e){e&&(Ue.killTweensOf(e.scale),e.visible=!0,e===this.roseCenterpiece?(e.scale.set(.001,.001,.001),Ue.to(e.scale,{y:1,duration:2.2,ease:"power2.out",delay:.1}),Ue.to(e.scale,{x:1,z:1,duration:1.9,ease:"back.out(1.2)",delay:.4})):(e.scale.setScalar(.001),Ue.to(e.scale,{x:1,y:1,z:1,duration:.8,ease:"back.out(1.3)",delay:.2})))}_hideCenterpiece(e){!e||!e.visible||(Ue.killTweensOf(e.scale),Ue.to(e.scale,{x:.001,y:.001,z:.001,duration:.4,ease:"power2.in",onComplete:()=>{e.visible=!1}}))}async switchView(e){if(this._switching||e===this.viewMode)return;if(this._switching=!0,this.viewMode=e,this.instaBtn&&(this.instaBtn.style.display=e==="portfolio"?"inline-flex":"none"),this.updateDockModeBtn&&this.updateDockModeBtn(),this.viewToggle){const s=xo(e);this.viewToggle.textContent=s,this.viewToggle.setAttribute("aria-label",`Switch to ${s.toLowerCase()}`)}if(e==="portfolio"?(this.updateRingGeometries(!0),this.doors.forEach(s=>{s.isPainting&&$p(s)}),this.doors.filter(s=>s.isPainting).sort((s,n)=>this.camera.position.distanceTo(s.group.position)-this.camera.position.distanceTo(n.group.position)).slice(0,6).forEach(s=>_o(s,ys.MID)),Ue.to(this.bloomPass,{threshold:.92,strength:.2,duration:.6})):e==="forest"?(this.controls.autoRotate=!1,this.updateRingGeometries(!1),Ue.to(this.bloomPass,{threshold:.88,strength:.18,duration:.6})):(this.motionPaused||(this.controls.autoRotate=!0),this.updateRingGeometries(!1),Ue.to(this.bloomPass,{threshold:this._bloomDefaults.threshold,strength:this._bloomDefaults.strength,duration:.6})),this.rings&&this.rings.forEach(s=>{s.mesh.visible=e!=="forest"}),this.groundMat&&(e==="forest"?(this.groundMat.map=Ew(),this.groundMat.needsUpdate=!0):kr.uForestActive.value>0?Ue.to(kr.uForestActive,{value:0,duration:.5,onComplete:()=>{kr.uForestWave.value=0,this.groundMat&&(this.groundMat.map=null,this.groundMat.needsUpdate=!0)}}):(this.groundMat.map=null,this.groundMat.needsUpdate=!0)),this.scene.fog){const s=e==="forest"?.0075:.002;Ue.to(this.scene.fog,{density:s,duration:.8})}const t={default:this.rock,portfolio:this.sculpture,forest:this.roseCenterpiece}[e];[this.rock,this.sculpture,this.roseCenterpiece].forEach(s=>{s===t?this._showCenterpiece(s):this._hideCenterpiece(s)}),this.resetScene();const i=[...this.doors];await new Promise(s=>{if(!i.length)return s();const n=Ue.timeline({onComplete:s});i.slice().sort((a,o)=>a.group.position.lengthSq()-o.group.position.lengthSq()).forEach((a,o)=>{n.to(a.group.scale,{x:.001,y:.001,z:.001,duration:.5,ease:"power2.in"},o*.02)})}),this.clearDoors(),e==="portfolio"?await this.buildPortfolioDoors():e==="forest"?this.buildForest():this.setupDoors(),e==="forest"?(kr.uForestActive.value=1,kr.uForestWave.value=0,Ue.to(kr.uForestWave,{value:1,duration:3.6,ease:"power1.out"}),Xi.uGrassGrowth.value=0,Ue.to(Xi.uGrassGrowth,{value:1,duration:3.6,ease:"power1.out"}),this.doors.slice().sort((s,n)=>s.group.position.lengthSq()-n.group.position.lengthSq()).forEach(s=>{if(s.group.name==="ForestGrass"){s.group.scale.set(1,1,1);return}const n=.25+Math.sqrt(s.group.position.lengthSq())/120*2.2+Math.sin(s.group.position.x*2.1)*.12,a=s.group.rotation.y;s.group.scale.set(.001,.001,.001),s.group.rotation.y=a-.22,Ue.to(s.group.scale,{y:1,duration:2.4,ease:"power2.out",delay:n}),Ue.to(s.group.scale,{x:1,z:1,duration:2.1,ease:"back.out(1.22)",delay:n+.35}),Ue.to(s.group.rotation,{y:a,duration:2.5,ease:"power2.out",delay:n})})):this.doors.slice().sort((s,n)=>s.group.position.lengthSq()-n.group.position.lengthSq()).forEach((s,n)=>{s.group.scale.setScalar(.001),Ue.to(s.group.scale,{x:1,y:1,z:1,duration:.7,ease:"back.out(1.4)",delay:n*.035})}),this._switching=!1}async buildPortfolioDoors(){const e=await XT();if(!e.paintings.length){console.warn("No paintings in manifest — portfolio view is empty.");return}hw(lw(e.paintings)).forEach(({painting:t,ring:i,radius:s,x:n,z:a,width:o})=>{const l=new kt;l.position.set(n,0,a),this.scene.add(l);const{panel:h,panelMaterial:c,height:d,centreY:u}=ZT(l,t),p={group:l,data:t,panel:h,panelMaterial:c,width:o,height:d,centreY:u,ring:i,radius:s,isOpen:!1,isPainting:!0,portalHitbox:h};if(p.name=t.title||"",p.name){const f=document.createElement("div");f.className="door-label",f.textContent=p.name,document.body.appendChild(f),p.labelEl=f}this.doors.push(p)}),this.doors.forEach(t=>$p(t)),this.doors.slice().sort((t,i)=>this.camera.position.distanceTo(t.group.position)-this.camera.position.distanceTo(i.group.position)).slice(0,6).forEach(t=>_o(t,ys.MID)),this._hoverTargets=null,!this.activeDoor&&this.viewMode==="portfolio"&&(this._introOverview={camPos:new P(0,3,28.5),target:new P(0,1.6,0)},this._priorMaxDistance=this.controls.maxDistance,this.controls.maxDistance=Math.max(this._priorMaxDistance,vf+60),this.camera.position.set(this._introOverview.camPos.x,vf,this._introOverview.camPos.z),this.controls.target.copy(this._introOverview.target),this.camera.lookAt(this._introOverview.target),this._doorsReady=!0,this._maybeStartIntro())}buildForest(){Dw().forEach(({species:i,x:s,z:n,angle:a,seed:o,scale:l})=>{const h=Aw(i,{seed:o,scale:l}),c=Cc(s,n);h.position.set(s,c,n),h.rotation.y=a,this.scene.add(h),this.doors.push({group:h,isTree:!0,isOpen:!1,swayGroup:h.userData.swayGroup,swayAmplitude:h.userData.swayAmplitude,swayFreqMult:h.userData.swayFreqMult,swayPhase:Math.sin(o*12.9898)*Math.PI})});const{grass:e,shrubs:t}=Pw();this.scene.add(e),this.doors.push({group:e,isTree:!0,isOpen:!1}),t.forEach(i=>{const s=Cc(i.position.x,i.position.z);i.position.y=s,this.scene.add(i),this.doors.push({group:i,isTree:!0,isOpen:!1,swayGroup:i.userData.swayGroup,swayAmplitude:i.userData.swayAmplitude,swayFreqMult:i.userData.swayFreqMult,swayPhase:Math.sin(i.userData.seed*12.9898)*Math.PI})}),this._hoverTargets=null}focusPainting(e){if(this.isTraveling||this._switching)return;this.dismissIntro(),_o(e,ys.FULL,{urgent:!0});const t=new P;e.panel.getWorldPosition(t);const i=new P().subVectors(this.camera.position,t).setY(0).normalize();i.lengthSq()<1e-4&&i.set(0,0,1);const s=Qp(e.width,e.height,this.camera),n=t.clone().addScaledVector(i,s);n.y=t.y,this.activeDoor=e,this.flyTo(n,t,1.6,()=>{this.controls.target.copy(t),this.controls.autoRotate=!1,this.activeDoor===e&&this._showReticle()})}setupDoors(){const e=new cu(this.loadingManager),t=5,i=15,s=8;for(let n=0;n<t;n++){const a=i+n*s;us.doors.forEach((o,l)=>{const h=l*(Math.PI*2)/us.doors.length,c=n%2===1?Math.PI/us.doors.length:0,d=h+c,u=Math.sin(d)*a,p=Math.cos(d)*a,f=new kt;f.position.set(u,0,p),this.scene.add(f);const _=new kt;_.position.set(-.75,0,0),f.add(_);const m={group:f,data:o,hinge:_,isOpen:!1};this.createDoorFrame(f,o),e.load(Gi(o.modelPath),v=>{const M=v.scene,x=M.getObjectByName("Door")||M;M.traverse(w=>{w.isMesh&&(w.material=new Ft({color:6710886,roughness:.4,metalness:.2}),w.castShadow=!0,w.receiveShadow=!0)}),x.position.set(.75,-.02,0),_.add(x),m.panel=x},null,()=>{const v=new Oe(new Wi(1.5,3.6,.2),new Ft({color:1118481,roughness:.4,metalness:.2}));v.position.set(.75,1.78,0),v.castShadow=!0,v.receiveShadow=!0,_.add(v),m.panel=v}),m.portalHitbox=f.userData.portalHitbox,m.portalMaterial=f.userData.portalMaterial;const g=document.createElement("div");g.className="door-label",m.name=this._randomDoorName(),g.textContent=m.name,document.body.appendChild(g),m.labelEl=g,this.doors.push(m)})}this._hoverTargets=null}createDoorFrame(e,t){const i=new Ft({color:2236962,roughness:.5,metalness:.5}),s=new Wi(.1,3.6,.1),n=new Oe(s,i);n.position.set(-.8,1.78,0),n.castShadow=!0,n.name="Frame",e.add(n);const a=new Oe(s,i);a.position.set(.8,1.78,0),a.castShadow=!0,a.name="Frame",e.add(a);const o=new Oe(new Wi(1.7,.1,.1),i);o.position.set(0,3.58,0),o.castShadow=!0,o.name="Frame",e.add(o);const l=new Oe(new Wi(1.7,.12,.1),i);l.position.set(0,.04,0),l.castShadow=!0,l.receiveShadow=!0,l.name="Frame",e.add(l);const h=new Oi(1.5,3.5),c=new oi({color:16711680,transparent:!0,opacity:0,visible:!0,side:mt}),d=new Oe(h,c);d.position.set(0,1.75,.01),d.name="PortalHitbox",e.add(d),e.userData.portalHitbox=d;const u=this.createPortalMaterial(t.color),p=new Oe(new Oi(1.5,3.5),u);p.position.set(0,1.75,0),p.name="PortalSurface",p.renderOrder=2,e.add(p),e.userData.portalMaterial=u}createWavyRingGeometry(e,t=60,i=.35,s=.25,n=720){const a=new wt,o=[],l=[],h=[],c=s/2;for(let d=0;d<=n;d++){const u=d/n*Math.PI*2,p=Math.sin(u*t)*i,f=e+p,_=f-c,m=f+c,g=Math.cos(u),v=Math.sin(u);o.push(g*_,v*_,0),l.push(d/n,0),o.push(g*m,v*m,0),l.push(d/n,1)}for(let d=0;d<n;d++){const u=d*2,p=d*2+1,f=(d+1)*2,_=(d+1)*2+1;h.push(u,f,p),h.push(p,f,_)}return a.setAttribute("position",new it(o,3)),a.setAttribute("uv",new it(l,2)),a.setIndex(h),a.computeVertexNormals(),a}writeRingWave(e,t){const i=e.mesh.geometry.getAttribute("position"),s=i.array,n=e.segments,a=Mf*t,o=(Mo+(Sf-Mo)*t)/2;let l=0;for(let h=0;h<=n;h++){const c=h/n*Math.PI*2,d=e.radius+Math.sin(c*xf)*a,u=Math.cos(c),p=Math.sin(c),f=d-o,_=d+o;s[l++]=u*f,s[l++]=p*f,s[l++]=0,s[l++]=u*_,s[l++]=p*_,s[l++]=0}i.needsUpdate=!0}updateRingGeometries(e){if(!this.rings)return;const t=e?1:0;this._ringWaveTweens&&this._ringWaveTweens.forEach(i=>i.kill()),this._ringWaveTweens=this.rings.map((i,s)=>Ue.to(i,{waveT:t,duration:1.1,delay:s*.055,ease:"power2.inOut",onUpdate:()=>this.writeRingWave(i,i.waveT)}))}createSacredGeometry(){this.ringMat=new Ft({color:16764995,metalness:.88,roughness:.18,side:mt,depthWrite:!0,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.rings=[];const e=15,t=8,i=this.viewMode==="portfolio";for(let s=0;s<10;s++){const n=e+s*t,a=i?1:0,o=this.createWavyRingGeometry(n,xf,Mf*a,Mo+(Sf-Mo)*a,yf),l=new Oe(o,this.ringMat);l.rotation.x=-Math.PI/2,l.position.y=.002,l.receiveShadow=!0;const h=(s%2===0?1:-1)*(5e-4+s*8e-5);this.scene.add(l),this.rings.push({mesh:l,speed:h,radius:n,segments:yf,waveT:a})}}createCentralRock(){const e=new un(1e-4,1.5,3,128,1,!1);e.translate(0,1.5,0);const t=new Ft({color:16777215,metalness:.95,roughness:.1,envMapIntensity:1});this.rock=new Oe(e,t),this.rock.castShadow=!0,this.rock.receiveShadow=!0,this.rock.position.y=0,this.rock.visible=!1;const i=new Oi(3.6,3.6),s=document.createElement("canvas");s.width=128,s.height=128;const n=s.getContext("2d"),a=n.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(0, 0, 0, 0.94)"),a.addColorStop(.35,"rgba(0, 0, 0, 0.70)"),a.addColorStop(.7,"rgba(0, 0, 0, 0.25)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=a,n.fillRect(0,0,128,128);const o=new oi({map:new jr(s),transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new Oe(i,o);l.rotation.x=-Math.PI/2,l.position.y=.003,l.renderOrder=1,this.rock.add(l),this.scene.add(this.rock),this.sculpture=Iw(this.loadingManager),this.sculpture.visible=!1,this.scene.add(this.sculpture),this.roseCenterpiece=Lw(),this.roseCenterpiece.visible=!1,this.scene.add(this.roseCenterpiece)}setupDustMotes(){const e=new wt,t=new Float32Array(300);for(let i=0;i<100;i++)t[i*3]=(Math.random()-.5)*120,t[i*3+1]=Math.random()*10,t[i*3+2]=(Math.random()-.5)*120;e.setAttribute("position",new Xt(t,3)),this.dust=new Jc(e,new Zo({color:16777215,size:.05,transparent:!0,opacity:.3,sizeAttenuation:!0})),this.scene.add(this.dust)}_fovForAspect(e){const t=us.scene.camera.fov,i=4/3;if(e>=i)return t;const s=Ke.degToRad(t)/2,n=Math.atan(Math.tan(s)*i),a=Math.atan(Math.tan(n)/Math.max(e,.35));return Ke.clamp(Ke.radToDeg(a)*2,t,58)}applyCameraFraming(){const e=window.innerWidth/window.innerHeight;this.camera.aspect=e,this.camera.fov=this._fovForAspect(e),this.camera.updateProjectionMatrix()}onResize(){if(this.applyCameraFraming(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),!this.activeDoor&&!this.isTraveling&&this.controls){const e=this.getDefaultOverview();this.camera.position.copy(e.camPos),this.controls.target.copy(e.target)}}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this._hoverDirty=!0}animate(){requestAnimationFrame(()=>this.animate()),this.time+=.001;const e=performance.now(),t=Math.min((e-(this._lastFrame||e))/1e3,.1);if(this._lastFrame=e,this.elapsed+=t,this.sunMesh&&this.moonMesh&&this.skySystem){this.motionPaused||(this.sunAngle+=this.daySpeed*6*t);const f=this.skySystem.update(this.sunAngle,this.elapsed,this.sunDist);this._sky=f,this.sunMesh.position.copy(f.cel.sunPos),this.moonMesh.position.copy(f.cel.moonPos),uf.copy(f.cel.sunPos).normalize().multiplyScalar(350),vo.copy(f.cel.moonPos).normalize().multiplyScalar(350),this.sunLight.position.copy(uf),this.moonLight.position.copy(vo),this.moonMesh.lookAt(0,0,0);const _=Ke.smoothstep(f.cel.moonAlt,0,.06);this.moonMesh.material.opacity=_,this.moonMesh.visible=_>.001;const m=Ke.smoothstep(f.cel.sunAlt,0,.06);if(this.sunMesh.material.opacity=m,this.sunMesh.visible=m>.001,f.sunAlt>.01)this.sunLight.intensity=Math.max(1.8,f.sH*2.2),this.sunLight.castShadow=!0,this.moonLight.intensity=0,this.moonLight.castShadow=!1;else{this.sunLight.intensity=0,this.sunLight.castShadow=!1,this.moonLight.intensity=Math.max(1.35,f.mH*1.8),this.moonLight.castShadow=!0;const b=f.cel.moonPos.x||120,A=f.cel.moonPos.z||120,y=Math.max(160,Math.abs(f.cel.moonPos.y));vo.set(b,y,A).normalize().multiplyScalar(320),this.moonLight.position.copy(vo)}const g=(this.sunAngle%(Math.PI*2)+Math.PI*2)%(Math.PI*2),v=Math.PI/3;if(g>=0&&g<=Math.PI){const b=v,A=Math.PI-v;if(g<b||g>A){const y=g<b?1-g/b:(g-A)/v,T=g<b?Kw:Yw;this.sunMesh.material.color.lerpColors(ff,qw,y),this.sunLight.color.lerpColors(mf,T,y)}else this.sunMesh.material.color.copy(ff),this.sunLight.color.copy(mf)}if(g>Math.PI&&g<Math.PI*2){const b=Math.PI+v,A=Math.PI*2-v;if(g<b||g>A){const y=g<b?1-(g-Math.PI)/v:(g-A)/v;this.moonMesh.material.color.lerpColors(gf,Zw,y),this.moonMesh.material.emissive.copy(this.moonMesh.material.color),this.moonLight.color.lerpColors(_f,Jw,y)}else this.moonMesh.material.color.copy(gf),this.moonMesh.material.emissive.copy($w),this.moonLight.color.copy(_f)}const M=Math.cos(g)*.5+.5;if(lh.lerpColors(Gw,Hw,M),hh.lerpColors(Ww,Vw,M),f.sunAlt>.1)yo.copy(df),Xn.copy(pf);else if(f.sunAlt>-.04){const b=(.1-f.sunAlt)/.14;yo.lerpColors(df,lh,b),Xn.lerpColors(pf,hh,b)}else{const b=Math.min(1,(-.04-f.sunAlt)/.16);yo.lerpColors(lh,Xw,b),Xn.lerpColors(hh,jw,b)}this.skySystem&&this.skySystem.skyDomeMat&&(this.skySystem.skyDomeMat.uniforms.uZenithColor.value.copy(yo),this.skySystem.skyDomeMat.uniforms.uHorizonColor.value.copy(Xn)),this.scene.background=null,this.scene.fog&&this.scene.fog.color.copy(Xn);const x=this.viewMode==="forest"?rE:tE,w=this.viewMode==="forest"?sE:iE;if(this.hemiLight.intensity=.07+f.sH*.15+f.mH*.12,this.hemiLight.color.lerpColors(Qw,eE,f.sH),this.hemiLight.groundColor.lerpColors(x,w,f.sH),this.groundMat){const b=Math.PI/2,A=this.viewMode==="forest",y=A?dE:lE,T=A?hE:nE,U=A?cE:aE,R=A?uE:oE;if(g>=0&&g<b){const L=g/b;this.groundMat.color.lerpColors(y,T,L)}else if(g>=b&&g<Math.PI){const L=(g-b)/b;this.groundMat.color.lerpColors(T,U,L)}else if(g>=Math.PI&&g<Math.PI*1.5){const L=(g-Math.PI)/b;this.groundMat.color.lerpColors(U,R,L)}else{const L=(g-Math.PI*1.5)/b;this.groundMat.color.lerpColors(R,y,L)}}}!this.motionPaused&&this.rings&&this.rings.forEach(f=>f.mesh.rotation.z+=f.speed),this.rock&&this.rock.visible&&(this.viewMode==="forest"?this.rock.visible=!1:(this.rock.position.y=0,this.rock.rotation.set(0,0,0)));const i=Math.atan2(this.camera.position.x,this.camera.position.z);this._lastCamAngle===void 0&&(this._lastCamAngle=i);let s=i-this._lastCamAngle;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this._lastCamAngle=i;const n=s/Math.max(.001,t),a=Math.abs(n);this._lastCamPos||(this._lastCamPos=this.camera.position.clone());const o=this.camera.position.distanceTo(this._lastCamPos);this._lastCamPos.copy(this.camera.position);const l=o/Math.max(.001,t),h=Math.max(0,a-.28)*1.6,c=Math.max(0,(l-2.2)*.12),d=this._isPointerDown?Math.max(0,(this._pointerSpeed-280)*.003):0,u=Math.min(2,Math.max(h,c,d));this._forestDragMotion===void 0&&(this._forestDragMotion=0);const p=u>this._forestDragMotion?.22:.045;if(this._forestDragMotion=Ke.lerp(this._forestDragMotion,u,p),this._forestDragMotion<.001&&(this._forestDragMotion=0),this.roseCenterpiece&&this.roseCenterpiece.visible){this.roseCenterpiece.position.y=0,this.roseCenterpiece.rotation.y=0;const f=this.roseCenterpiece.userData.swayGroup;if(f){const m=this.roseCenterpiece.userData.swayAmplitude,g=this.roseCenterpiece.userData.swayFreqMult??1,v=this._forestDragMotion;f.rotation.z=Math.sin(this.time*24*g)*m*v,f.rotation.x=Math.cos(this.time*18*g+1.3)*m*.6*v}const _=this.roseCenterpiece.userData.motes;_&&(_.rotation.y=this.time*.25)}if(this.viewMode==="forest"&&cw(this.time*24,this._forestDragMotion*.85),this.sculpture&&this.sculpture.visible&&(this.sculpture.position.y=0,this.sculpture.rotation.set(0,0,0),this.sculpture.userData&&this.sculpture.userData.threadUniforms)){const f=this.sculpture.userData.threadUniforms;f.uTime.value=this.time,this._threadMotion===void 0&&(this._threadMotion=0);const _=Math.min(1.8,a*1.3),m=_>this._threadMotion?.14:.05;this._threadMotion=Ke.lerp(this._threadMotion,_,m),this._threadMotion<5e-4&&(this._threadMotion=0),f.uMotion.value=this._threadMotion;const g=Math.sign(n)||1,v=-Math.sin(i)*g,M=Math.cos(i)*g;this._threadDrag||(this._threadDrag=new te(0,0));const x=v*Math.min(1,a*.7),w=M*Math.min(1,a*.7),b=a>.01?.12:.05;this._threadDrag.x=Ke.lerp(this._threadDrag.x,x,b),this._threadDrag.y=Ke.lerp(this._threadDrag.y,w,b),this._threadDrag.lengthSq()<1e-4&&this._threadDrag.set(0,0),f.uDrag&&f.uDrag.value.copy(this._threadDrag)}if(this.viewMode==="portfolio"&&this._sky&&this.updatePaintingLight(this._sky),YT(this.sunAngle,this.ringMat),this.viewMode==="portfolio"&&(!this._lastTexCheck||e-this._lastTexCheck>200)){this._lastTexCheck=e;const f=this.camera.position;lf.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),of.setFromProjectionMatrix(lf);const _=Pu*2.5,m=[];for(const g of this.doors){if(!g.isPainting||(g.group.getWorldPosition(oh),!of.containsPoint(oh)))continue;QT(g);const v=f.distanceTo(oh);v<_&&m.push({door:g,dist:v})}m.sort((g,v)=>g.dist-v.dist);for(let g=0;g<Math.min(m.length,3);g++)_o(m[g].door,ys.MID)}if(this.doors.forEach(f=>{f.portalMaterial&&(f.portalMaterial.uniforms.uTime.value=this.time*2)}),this.updateLabels(),this.dust){const f=this.dust.geometry.attributes.position.array,_=this.isTraveling?18:1;for(let m=0;m<f.length;m+=3)this.isTraveling?(f[m+2]+=.25*_,f[m+2]>60&&(f[m+2]=-60)):f[m+1]+=Math.sin(this.time*5+f[m])*.002;this.dust.geometry.attributes.position.needsUpdate=!0}this.isTraveling||this.doors.forEach(f=>{if(f.isTree){f.swayGroup&&f.swayGroup.rotation.set(0,0,0);return}f.group.lookAt(this.camera.position.x,f.group.position.y,this.camera.position.z)}),this._hoverDirty&&(this._hoverDirty=!1,this.checkHover()),this.viewMode==="forest"&&(this.controls.autoRotate=!1),this.controls.update(),this.camera.position.y<.4&&(this.camera.position.y=.4),this.composer.render()}}new gE;"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register(Gi("sw.js")).then(e=>{console.log("SW registered:",e),setInterval(()=>{e.update()},60*1e3),e.onupdatefound=()=>{const t=e.installing;t!=null&&(t.onstatechange=()=>{t.state==="installed"&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"})):console.log("Content is cached for offline use."))})}}).catch(e=>{console.log("SW registration failed:",e)});let r;navigator.serviceWorker.addEventListener("controllerchange",()=>{r||(window.location.reload(),r=!0)})});
