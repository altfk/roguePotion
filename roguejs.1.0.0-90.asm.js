Module["asm"] =  (/** @suppress {uselessCode} */ function(global, env, buffer) {
'almost asm';


  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var abortStackOverflowEmterpreter=env.abortStackOverflowEmterpreter;
  var nullFunc_X=env.nullFunc_X;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_vi=env.nullFunc_vi;
  var invoke_X=env.invoke_X;
  var invoke_ii=env.invoke_ii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_v=env.invoke_v;
  var invoke_vi=env.invoke_vi;
  var _IMG_Load_RW=env._IMG_Load_RW;
  var _SDL_AudioQuit=env._SDL_AudioQuit;
  var _SDL_ConvertSurface=env._SDL_ConvertSurface;
  var _SDL_DisplayFormatAlpha=env._SDL_DisplayFormatAlpha;
  var _SDL_EnableKeyRepeat=env._SDL_EnableKeyRepeat;
  var _SDL_EnableUNICODE=env._SDL_EnableUNICODE;
  var _SDL_FillRect=env._SDL_FillRect;
  var _SDL_Flip=env._SDL_Flip;
  var _SDL_FreeRW=env._SDL_FreeRW;
  var _SDL_FreeSurface=env._SDL_FreeSurface;
  var _SDL_GetError=env._SDL_GetError;
  var _SDL_GetModState=env._SDL_GetModState;
  var _SDL_GetTicks=env._SDL_GetTicks;
  var _SDL_Init=env._SDL_Init;
  var _SDL_LoadBMP_RW=env._SDL_LoadBMP_RW;
  var _SDL_LockSurface=env._SDL_LockSurface;
  var _SDL_LowerBlit=env._SDL_LowerBlit;
  var _SDL_MapRGB=env._SDL_MapRGB;
  var _SDL_PollEvent=env._SDL_PollEvent;
  var _SDL_PushEvent=env._SDL_PushEvent;
  var _SDL_Quit=env._SDL_Quit;
  var _SDL_RWFromConstMem=env._SDL_RWFromConstMem;
  var _SDL_RWFromFile=env._SDL_RWFromFile;
  var _SDL_RWFromMem=env._SDL_RWFromMem;
  var _SDL_SetColorKey=env._SDL_SetColorKey;
  var _SDL_SetColors=env._SDL_SetColors;
  var _SDL_SetPalette=env._SDL_SetPalette;
  var _SDL_SetVideoMode=env._SDL_SetVideoMode;
  var _SDL_ShowCursor=env._SDL_ShowCursor;
  var _SDL_UpdateRects=env._SDL_UpdateRects;
  var _SDL_UpperBlit=env._SDL_UpperBlit;
  var _SDL_WM_SetCaption=env._SDL_WM_SetCaption;
  var _SDL_WM_SetIcon=env._SDL_WM_SetIcon;
  var ___buildEnvironment=env.___buildEnvironment;
  var ___lock=env.___lock;
  var ___setErrNo=env.___setErrNo;
  var ___syscall10=env.___syscall10;
  var ___syscall140=env.___syscall140;
  var ___syscall145=env.___syscall145;
  var ___syscall146=env.___syscall146;
  var ___syscall15=env.___syscall15;
  var ___syscall195=env.___syscall195;
  var ___syscall196=env.___syscall196;
  var ___syscall20=env.___syscall20;
  var ___syscall221=env.___syscall221;
  var ___syscall5=env.___syscall5;
  var ___syscall54=env.___syscall54;
  var ___syscall6=env.___syscall6;
  var ___unlock=env.___unlock;
  var __exit=env.__exit;
  var _abort=env._abort;
  var _atexit=env._atexit;
  var _emscripten_asm_const_i=env._emscripten_asm_const_i;
  var _emscripten_get_now=env._emscripten_get_now;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
  var _emscripten_sleep=env._emscripten_sleep;
  var _exit=env._exit;
  var _getenv=env._getenv;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var _localtime=env._localtime;
  var _localtime_r=env._localtime_r;
  var _signal=env._signal;
  var _time=env._time;
  var _tzset=env._tzset;
  var tempFloat = Math_fround(0);
  var asyncState = 0;
  const f0 = Math_fround(0);

var EMTSTACKTOP = env.EMTSTACKTOP|0;
var EMT_STACK_MAX = env.EMT_STACK_MAX|0;
var eb = env.eb|0;
// EMSCRIPTEN_START_FUNCS
function emterpret(pc) {
 pc = pc | 0;
 var sp = 0, inst = 0, lx = 0, ly = 0, lz = 0;
 var ld = 0.0;
 HEAP32[EMTSTACKTOP >> 2] = pc;
 sp = EMTSTACKTOP + 8 | 0;
 assert(HEAPU8[pc >> 0] >>> 0 == 140 | 0);
 lx = HEAPU16[pc + 2 >> 1] | 0;
 EMTSTACKTOP = EMTSTACKTOP + (lx + 1 << 3) | 0;
 if ((EMTSTACKTOP | 0) > (EMT_STACK_MAX | 0) | 0) abortStackOverflowEmterpreter();
 if ((asyncState | 0) != 2) {} else {
  pc = (HEAP32[sp - 4 >> 2] | 0) - 8 | 0;
 }
 pc = pc + 4 | 0;
 while (1) {
  pc = pc + 4 | 0;
  inst = HEAP32[pc >> 2] | 0;
  lx = inst >> 8 & 255;
  ly = inst >> 16 & 255;
  lz = inst >>> 24;
  switch (inst & 255) {
  case 0:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] | 0;
   break;
  case 1:
   HEAP32[sp + (lx << 3) >> 2] = inst >> 16;
   break;
  case 2:
   pc = pc + 4 | 0;
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[pc >> 2] | 0;
   break;
  case 3:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) + (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 4:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) - (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 5:
   HEAP32[sp + (lx << 3) >> 2] = Math_imul(HEAP32[sp + (ly << 3) >> 2] | 0, HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 6:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) / (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 7:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] >>> 0) / (HEAP32[sp + (lz << 3) >> 2] >>> 0) >>> 0;
   break;
  case 8:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) % (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 9:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] >>> 0) % (HEAP32[sp + (lz << 3) >> 2] >>> 0) >>> 0;
   break;
  case 11:
   HEAP32[sp + (lx << 3) >> 2] = ~(HEAP32[sp + (ly << 3) >> 2] | 0);
   break;
  case 12:
   HEAP32[sp + (lx << 3) >> 2] = !(HEAP32[sp + (ly << 3) >> 2] | 0);
   break;
  case 13:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) == (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 14:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) != (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 15:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) < (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 16:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] >>> 0 < HEAP32[sp + (lz << 3) >> 2] >>> 0 | 0;
   break;
  case 17:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) <= (HEAP32[sp + (lz << 3) >> 2] | 0) | 0;
   break;
  case 18:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] >>> 0 <= HEAP32[sp + (lz << 3) >> 2] >>> 0 | 0;
   break;
  case 19:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) & (HEAP32[sp + (lz << 3) >> 2] | 0);
   break;
  case 20:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] | 0 | (HEAP32[sp + (lz << 3) >> 2] | 0);
   break;
  case 21:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) ^ (HEAP32[sp + (lz << 3) >> 2] | 0);
   break;
  case 22:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) << (HEAP32[sp + (lz << 3) >> 2] | 0);
   break;
  case 24:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) >>> (HEAP32[sp + (lz << 3) >> 2] | 0);
   break;
  case 25:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) + (inst >> 24) | 0;
   break;
  case 26:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) - (inst >> 24) | 0;
   break;
  case 27:
   HEAP32[sp + (lx << 3) >> 2] = Math_imul(HEAP32[sp + (ly << 3) >> 2] | 0, inst >> 24) | 0;
   break;
  case 28:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) / (inst >> 24) | 0;
   break;
  case 29:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] >>> 0) / (lz >>> 0) >>> 0;
   break;
  case 30:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) % (inst >> 24) | 0;
   break;
  case 31:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] >>> 0) % (lz >>> 0) >>> 0;
   break;
  case 32:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) == inst >> 24 | 0;
   break;
  case 33:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) != inst >> 24 | 0;
   break;
  case 34:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) < inst >> 24 | 0;
   break;
  case 35:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] >>> 0 < lz >>> 0 | 0;
   break;
  case 36:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) <= inst >> 24 | 0;
   break;
  case 37:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] >>> 0 <= lz >>> 0 | 0;
   break;
  case 38:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) & inst >> 24;
   break;
  case 39:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] | 0 | inst >> 24;
   break;
  case 40:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) ^ inst >> 24;
   break;
  case 41:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) << lz;
   break;
  case 42:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) >> lz;
   break;
  case 43:
   HEAP32[sp + (lx << 3) >> 2] = (HEAP32[sp + (ly << 3) >> 2] | 0) >>> lz;
   break;
  case 45:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) == (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = pc + 4 | 0;
   } else {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 46:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) != (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = pc + 4 | 0;
   } else {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 47:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) < (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = pc + 4 | 0;
   } else {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 48:
   if (HEAP32[sp + (ly << 3) >> 2] >>> 0 < HEAP32[sp + (lz << 3) >> 2] >>> 0) {
    pc = pc + 4 | 0;
   } else {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 49:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) <= (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = pc + 4 | 0;
   } else {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 50:
   if (HEAP32[sp + (ly << 3) >> 2] >>> 0 <= HEAP32[sp + (lz << 3) >> 2] >>> 0) {
    pc = pc + 4 | 0;
   } else {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 52:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) == (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   } else {
    pc = pc + 4 | 0;
   }
   break;
  case 53:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) != (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   } else {
    pc = pc + 4 | 0;
   }
   break;
  case 54:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) < (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   } else {
    pc = pc + 4 | 0;
   }
   break;
  case 55:
   if (HEAP32[sp + (ly << 3) >> 2] >>> 0 < HEAP32[sp + (lz << 3) >> 2] >>> 0) {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   } else {
    pc = pc + 4 | 0;
   }
   break;
  case 56:
   if ((HEAP32[sp + (ly << 3) >> 2] | 0) <= (HEAP32[sp + (lz << 3) >> 2] | 0)) {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   } else {
    pc = pc + 4 | 0;
   }
   break;
  case 57:
   if (HEAP32[sp + (ly << 3) >> 2] >>> 0 <= HEAP32[sp + (lz << 3) >> 2] >>> 0) {
    pc = HEAP32[pc + 4 >> 2] | 0;
    pc = pc - 4 | 0;
    continue;
   } else {
    pc = pc + 4 | 0;
   }
   break;
  case 58:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[sp + (ly << 3) >> 3];
   break;
  case 59:
   HEAPF64[sp + (lx << 3) >> 3] = +(inst >> 16);
   break;
  case 60:
   pc = pc + 4 | 0;
   HEAPF64[sp + (lx << 3) >> 3] = +(HEAP32[pc >> 2] | 0);
   break;
  case 61:
   pc = pc + 4 | 0;
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF32[pc >> 2];
   break;
  case 62:
   HEAP32[tempDoublePtr >> 2] = HEAP32[pc + 4 >> 2];
   HEAP32[tempDoublePtr + 4 >> 2] = HEAP32[pc + 8 >> 2];
   pc = pc + 8 | 0;
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[tempDoublePtr >> 3];
   break;
  case 63:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[sp + (ly << 3) >> 3] + +HEAPF64[sp + (lz << 3) >> 3];
   break;
  case 64:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[sp + (ly << 3) >> 3] - +HEAPF64[sp + (lz << 3) >> 3];
   break;
  case 65:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[sp + (ly << 3) >> 3] * +HEAPF64[sp + (lz << 3) >> 3];
   break;
  case 66:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[sp + (ly << 3) >> 3] / +HEAPF64[sp + (lz << 3) >> 3];
   break;
  case 68:
   HEAPF64[sp + (lx << 3) >> 3] = -+HEAPF64[sp + (ly << 3) >> 3];
   break;
  case 69:
   HEAP32[sp + (lx << 3) >> 2] = +HEAPF64[sp + (ly << 3) >> 3] == +HEAPF64[sp + (lz << 3) >> 3] | 0;
   break;
  case 70:
   HEAP32[sp + (lx << 3) >> 2] = +HEAPF64[sp + (ly << 3) >> 3] != +HEAPF64[sp + (lz << 3) >> 3] | 0;
   break;
  case 74:
   HEAP32[sp + (lx << 3) >> 2] = +HEAPF64[sp + (ly << 3) >> 3] >= +HEAPF64[sp + (lz << 3) >> 3] | 0;
   break;
  case 75:
   HEAP32[sp + (lx << 3) >> 2] = ~~+HEAPF64[sp + (ly << 3) >> 3];
   break;
  case 76:
   HEAPF64[sp + (lx << 3) >> 3] = +(HEAP32[sp + (ly << 3) >> 2] | 0);
   break;
  case 77:
   HEAPF64[sp + (lx << 3) >> 3] = +(HEAP32[sp + (ly << 3) >> 2] >>> 0);
   break;
  case 78:
   HEAP32[sp + (lx << 3) >> 2] = HEAP8[HEAP32[sp + (ly << 3) >> 2] >> 0];
   break;
  case 79:
   HEAP32[sp + (lx << 3) >> 2] = HEAPU8[HEAP32[sp + (ly << 3) >> 2] >> 0];
   break;
  case 80:
   HEAP32[sp + (lx << 3) >> 2] = HEAP16[HEAP32[sp + (ly << 3) >> 2] >> 1];
   break;
  case 81:
   HEAP32[sp + (lx << 3) >> 2] = HEAPU16[HEAP32[sp + (ly << 3) >> 2] >> 1];
   break;
  case 82:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[HEAP32[sp + (ly << 3) >> 2] >> 2];
   break;
  case 83:
   HEAP8[HEAP32[sp + (lx << 3) >> 2] >> 0] = HEAP32[sp + (ly << 3) >> 2] | 0;
   break;
  case 84:
   HEAP16[HEAP32[sp + (lx << 3) >> 2] >> 1] = HEAP32[sp + (ly << 3) >> 2] | 0;
   break;
  case 85:
   HEAP32[HEAP32[sp + (lx << 3) >> 2] >> 2] = HEAP32[sp + (ly << 3) >> 2] | 0;
   break;
  case 86:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[HEAP32[sp + (ly << 3) >> 2] >> 3];
   break;
  case 87:
   HEAPF64[HEAP32[sp + (lx << 3) >> 2] >> 3] = +HEAPF64[sp + (ly << 3) >> 3];
   break;
  case 89:
   HEAPF32[HEAP32[sp + (lx << 3) >> 2] >> 2] = +HEAPF64[sp + (ly << 3) >> 3];
   break;
  case 90:
   HEAP32[sp + (lx << 3) >> 2] = HEAP8[(HEAP32[sp + (ly << 3) >> 2] | 0) + (HEAP32[sp + (lz << 3) >> 2] | 0) >> 0];
   break;
  case 91:
   HEAP32[sp + (lx << 3) >> 2] = HEAPU8[(HEAP32[sp + (ly << 3) >> 2] | 0) + (HEAP32[sp + (lz << 3) >> 2] | 0) >> 0];
   break;
  case 92:
   HEAP32[sp + (lx << 3) >> 2] = HEAP16[(HEAP32[sp + (ly << 3) >> 2] | 0) + (HEAP32[sp + (lz << 3) >> 2] | 0) >> 1];
   break;
  case 94:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[(HEAP32[sp + (ly << 3) >> 2] | 0) + (HEAP32[sp + (lz << 3) >> 2] | 0) >> 2];
   break;
  case 95:
   HEAP8[(HEAP32[sp + (lx << 3) >> 2] | 0) + (HEAP32[sp + (ly << 3) >> 2] | 0) >> 0] = HEAP32[sp + (lz << 3) >> 2] | 0;
   break;
  case 96:
   HEAP16[(HEAP32[sp + (lx << 3) >> 2] | 0) + (HEAP32[sp + (ly << 3) >> 2] | 0) >> 1] = HEAP32[sp + (lz << 3) >> 2] | 0;
   break;
  case 97:
   HEAP32[(HEAP32[sp + (lx << 3) >> 2] | 0) + (HEAP32[sp + (ly << 3) >> 2] | 0) >> 2] = HEAP32[sp + (lz << 3) >> 2] | 0;
   break;
  case 102:
   HEAP32[sp + (lx << 3) >> 2] = HEAP8[(HEAP32[sp + (ly << 3) >> 2] | 0) + (inst >> 24) >> 0];
   break;
  case 103:
   HEAP32[sp + (lx << 3) >> 2] = HEAPU8[(HEAP32[sp + (ly << 3) >> 2] | 0) + (inst >> 24) >> 0];
   break;
  case 104:
   HEAP32[sp + (lx << 3) >> 2] = HEAP16[(HEAP32[sp + (ly << 3) >> 2] | 0) + (inst >> 24) >> 1];
   break;
  case 105:
   HEAP32[sp + (lx << 3) >> 2] = HEAPU16[(HEAP32[sp + (ly << 3) >> 2] | 0) + (inst >> 24) >> 1];
   break;
  case 106:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[(HEAP32[sp + (ly << 3) >> 2] | 0) + (inst >> 24) >> 2];
   break;
  case 107:
   HEAP8[(HEAP32[sp + (lx << 3) >> 2] | 0) + (ly << 24 >> 24) >> 0] = HEAP32[sp + (lz << 3) >> 2] | 0;
   break;
  case 108:
   HEAP16[(HEAP32[sp + (lx << 3) >> 2] | 0) + (ly << 24 >> 24) >> 1] = HEAP32[sp + (lz << 3) >> 2] | 0;
   break;
  case 109:
   HEAP32[(HEAP32[sp + (lx << 3) >> 2] | 0) + (ly << 24 >> 24) >> 2] = HEAP32[sp + (lz << 3) >> 2] | 0;
   break;
  case 116:
   HEAP32[HEAP32[sp + (lx << 3) >> 2] >> 2] = HEAP32[HEAP32[sp + (ly << 3) >> 2] >> 2] | 0;
   break;
  case 119:
   pc = pc + (inst >> 16 << 2) | 0;
   pc = pc - 4 | 0;
   continue;
   break;
  case 120:
   if (HEAP32[sp + (lx << 3) >> 2] | 0) {
    pc = pc + (inst >> 16 << 2) | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 121:
   if (!(HEAP32[sp + (lx << 3) >> 2] | 0)) {
    pc = pc + (inst >> 16 << 2) | 0;
    pc = pc - 4 | 0;
    continue;
   }
   break;
  case 125:
   pc = pc + 4 | 0;
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (ly << 3) >> 2] | 0 ? HEAP32[sp + (lz << 3) >> 2] | 0 : HEAP32[sp + ((HEAPU8[pc >> 0] | 0) << 3) >> 2] | 0;
   break;
  case 127:
   HEAP32[sp + (lx << 3) >> 2] = tempDoublePtr;
   break;
  case 128:
   HEAP32[sp + (lx << 3) >> 2] = tempRet0;
   break;
  case 129:
   tempRet0 = HEAP32[sp + (lx << 3) >> 2] | 0;
   break;
  case 130:
   switch (ly | 0) {
   case 0:
    {
     HEAP32[sp + (lx << 3) >> 2] = STACK_MAX;
     continue;
    }
   case 1:
    {
     HEAP32[sp + (lx << 3) >> 2] = DYNAMICTOP_PTR;
     continue;
    }
   default:
    assert(0);
   }
   break;
  case 132:
   switch (inst >> 8 & 255) {
   case 0:
    {
     STACK_MAX = HEAP32[sp + (lz << 3) >> 2] | 0;
     continue;
    }
   case 1:
    {
     DYNAMICTOP_PTR = HEAP32[sp + (lz << 3) >> 2] | 0;
     continue;
    }
   default:
    assert(0);
   }
   break;
  case 134:
   lz = HEAPU8[(HEAP32[pc + 4 >> 2] | 0) + 1 | 0] | 0;
   ly = 0;
   if ((EMTSTACKTOP + 8 | 0) > (EMT_STACK_MAX | 0) | 0) abortStackOverflowEmterpreter();
   if ((asyncState | 0) != 2) {
    while ((ly | 0) < (lz | 0)) {
     HEAP32[EMTSTACKTOP + (ly << 3) + 8 >> 2] = HEAP32[sp + (HEAPU8[pc + 8 + ly >> 0] << 3) >> 2] | 0;
     HEAP32[EMTSTACKTOP + (ly << 3) + 12 >> 2] = HEAP32[sp + (HEAPU8[pc + 8 + ly >> 0] << 3) + 4 >> 2] | 0;
     ly = ly + 1 | 0;
    }
   }
   HEAP32[sp - 4 >> 2] = pc;
   emterpret(HEAP32[pc + 4 >> 2] | 0);
   if ((asyncState | 0) == 1) {
    EMTSTACKTOP = sp - 8 | 0;
    return;
   }
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[EMTSTACKTOP >> 2] | 0;
   HEAP32[sp + (lx << 3) + 4 >> 2] = HEAP32[EMTSTACKTOP + 4 >> 2] | 0;
   pc = pc + (4 + lz + 3 >> 2 << 2) | 0;
   break;
  case 135:
   switch (inst >>> 16 | 0) {
   case 0:
    {
     HEAP32[sp - 4 >> 2] = pc;
     abortStackOverflow(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 1:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _exit(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 2:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _memset(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 3:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _malloc(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 4:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _free(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 5:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _bitshift64Shl(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 6:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ld = +Math_abs(+HEAPF64[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 3]);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAPF64[sp + (lx << 3) >> 3] = ld;
     pc = pc + 4 | 0;
     continue;
    }
   case 7:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _bitshift64Lshr(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 8:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _strlen(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 9:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _memcpy(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 10:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _strncpy(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 11:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_Init(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 12:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_GetError() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 13:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _atexit(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 14:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _getenv(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 15:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_RWFromFile(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 16:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_LoadBMP_RW(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 17:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_RWFromMem(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 18:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _SDL_WM_SetIcon(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 19:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_SetVideoMode(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 7 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 20:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_MapRGB(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 7 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 21:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_EnableUNICODE(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 22:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _llvm_cttz_i32(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 23:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = Math_clz32(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 24:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ftCall_iii(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 25:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_LowerBlit(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 7 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 26:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_GetModState() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 27:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_PollEvent(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 28:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_PushEvent(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 29:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _emscripten_asm_const_i(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 30:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _strcpy(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 31:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _time(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 32:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _abort();
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     continue;
    }
   case 33:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_UpperBlit(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 7 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 34:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall146(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 35:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall221(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 36:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall54(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 37:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _localtime(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 38:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ftCall_ii(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 39:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ftCall_iiii(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 7 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 40:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_ShowCursor(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 41:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_SetPalette(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 7 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 8 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 8 | 0;
     continue;
    }
   case 42:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_SetColorKey(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 43:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_FillRect(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 44:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ftCall_vi(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 45:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall145(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 46:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _SDL_FreeSurface(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 47:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_DisplayFormatAlpha(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 48:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _strcat(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 49:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall5(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 50:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall6(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 51:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _signal(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 52:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall140(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 53:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = abortOnCannotGrowMemory() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 54:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ___setErrNo(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 55:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = getTotalMemory() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 56:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = enlargeMemory() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 57:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall196(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 58:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall195(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 59:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall15(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 60:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_GetTicks() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 61:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall10(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 62:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_Flip(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 63:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _SDL_UpdateRects(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 64:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = ___syscall20(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 65:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _emscripten_sleep(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 66:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_EnableKeyRepeat(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 67:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _SDL_WM_SetCaption(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 68:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _SDL_Quit();
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     continue;
    }
   case 69:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ___buildEnvironment(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 70:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ___lock(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 71:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ___unlock(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 72:
    {
     HEAP32[sp - 4 >> 2] = pc;
     nullFunc_X(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   default:
    assert(0);
   }
   break;
  case 136:
   HEAP32[sp + (lx << 3) >> 2] = STACKTOP;
   break;
  case 137:
   STACKTOP = HEAP32[sp + (lx << 3) >> 2] | 0;
   break;
  case 138:
   lz = HEAP32[sp + (lz << 3) >> 2] | 0;
   lx = (HEAP32[sp + (lx << 3) >> 2] | 0) - (HEAP32[sp + (ly << 3) >> 2] | 0) >>> 0;
   if (lx >>> 0 >= lz >>> 0) {
    pc = pc + (lz << 2) | 0;
    continue;
   }
   pc = HEAP32[pc + 4 + (lx << 2) >> 2] | 0;
   pc = pc - 4 | 0;
   continue;
   break;
  case 139:
   EMTSTACKTOP = sp - 8 | 0;
   HEAP32[EMTSTACKTOP >> 2] = HEAP32[sp + (lx << 3) >> 2] | 0;
   HEAP32[EMTSTACKTOP + 4 >> 2] = HEAP32[sp + (lx << 3) + 4 >> 2] | 0;
   return;
   break;
  case 145:
   HEAPF64[sp + (lx << 3) >> 3] = Math_fround(+HEAPF64[sp + (ly << 3) >> 3]);
   break;
  default:
   assert(0);
  }
 }
 assert(0);
}

function _malloc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i14 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 i13 = i15;
 do if (i1 >>> 0 < 245) {
  i10 = i1 >>> 0 < 11 ? 16 : i1 + 11 & -8;
  i1 = i10 >>> 3;
  i12 = HEAP32[19063] | 0;
  i2 = i12 >>> i1;
  if (i2 & 3 | 0) {
   i1 = (i2 & 1 ^ 1) + i1 | 0;
   i2 = 76292 + (i1 << 1 << 2) | 0;
   i3 = i2 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i4 + 8 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == (i2 | 0)) HEAP32[19063] = i12 & ~(1 << i1); else {
    HEAP32[i6 + 12 >> 2] = i2;
    HEAP32[i3 >> 2] = i6;
   }
   i14 = i1 << 3;
   HEAP32[i4 + 4 >> 2] = i14 | 3;
   i14 = i4 + i14 + 4 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
   i14 = i5;
   STACKTOP = i15;
   return i14 | 0;
  }
  i11 = HEAP32[19065] | 0;
  if (i10 >>> 0 > i11 >>> 0) {
   if (i2 | 0) {
    i8 = 2 << i1;
    i1 = i2 << i1 & (i8 | 0 - i8);
    i1 = (i1 & 0 - i1) + -1 | 0;
    i8 = i1 >>> 12 & 16;
    i1 = i1 >>> i8;
    i3 = i1 >>> 5 & 8;
    i1 = i1 >>> i3;
    i6 = i1 >>> 2 & 4;
    i1 = i1 >>> i6;
    i2 = i1 >>> 1 & 2;
    i1 = i1 >>> i2;
    i4 = i1 >>> 1 & 1;
    i4 = (i3 | i8 | i6 | i2 | i4) + (i1 >>> i4) | 0;
    i1 = 76292 + (i4 << 1 << 2) | 0;
    i2 = i1 + 8 | 0;
    i6 = HEAP32[i2 >> 2] | 0;
    i8 = i6 + 8 | 0;
    i3 = HEAP32[i8 >> 2] | 0;
    if ((i3 | 0) == (i1 | 0)) {
     i2 = i12 & ~(1 << i4);
     HEAP32[19063] = i2;
    } else {
     HEAP32[i3 + 12 >> 2] = i1;
     HEAP32[i2 >> 2] = i3;
     i2 = i12;
    }
    i14 = i4 << 3;
    i7 = i14 - i10 | 0;
    HEAP32[i6 + 4 >> 2] = i10 | 3;
    i5 = i6 + i10 | 0;
    HEAP32[i5 + 4 >> 2] = i7 | 1;
    HEAP32[i6 + i14 >> 2] = i7;
    if (i11 | 0) {
     i4 = HEAP32[19068] | 0;
     i1 = i11 >>> 3;
     i3 = 76292 + (i1 << 1 << 2) | 0;
     i1 = 1 << i1;
     if (!(i2 & i1)) {
      HEAP32[19063] = i2 | i1;
      i1 = i3;
      i2 = i3 + 8 | 0;
     } else {
      i2 = i3 + 8 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
     }
     HEAP32[i2 >> 2] = i4;
     HEAP32[i1 + 12 >> 2] = i4;
     HEAP32[i4 + 8 >> 2] = i1;
     HEAP32[i4 + 12 >> 2] = i3;
    }
    HEAP32[19065] = i7;
    HEAP32[19068] = i5;
    i14 = i8;
    STACKTOP = i15;
    return i14 | 0;
   }
   i6 = HEAP32[19064] | 0;
   if (i6) {
    i2 = (i6 & 0 - i6) + -1 | 0;
    i5 = i2 >>> 12 & 16;
    i2 = i2 >>> i5;
    i4 = i2 >>> 5 & 8;
    i2 = i2 >>> i4;
    i7 = i2 >>> 2 & 4;
    i2 = i2 >>> i7;
    i8 = i2 >>> 1 & 2;
    i2 = i2 >>> i8;
    i9 = i2 >>> 1 & 1;
    i9 = HEAP32[76556 + ((i4 | i5 | i7 | i8 | i9) + (i2 >>> i9) << 2) >> 2] | 0;
    i2 = i9;
    i8 = i9;
    i9 = (HEAP32[i9 + 4 >> 2] & -8) - i10 | 0;
    while (1) {
     i1 = HEAP32[i2 + 16 >> 2] | 0;
     if (!i1) {
      i1 = HEAP32[i2 + 20 >> 2] | 0;
      if (!i1) break;
     }
     i7 = (HEAP32[i1 + 4 >> 2] & -8) - i10 | 0;
     i5 = i7 >>> 0 < i9 >>> 0;
     i2 = i1;
     i8 = i5 ? i1 : i8;
     i9 = i5 ? i7 : i9;
    }
    i7 = i8 + i10 | 0;
    if (i7 >>> 0 > i8 >>> 0) {
     i5 = HEAP32[i8 + 24 >> 2] | 0;
     i1 = HEAP32[i8 + 12 >> 2] | 0;
     do if ((i1 | 0) == (i8 | 0)) {
      i2 = i8 + 20 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i2 = i8 + 16 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
       if (!i1) {
        i3 = 0;
        break;
       }
      }
      while (1) {
       i4 = i1 + 20 | 0;
       i3 = HEAP32[i4 >> 2] | 0;
       if (!i3) {
        i4 = i1 + 16 | 0;
        i3 = HEAP32[i4 >> 2] | 0;
        if (!i3) break; else {
         i1 = i3;
         i2 = i4;
        }
       } else {
        i1 = i3;
        i2 = i4;
       }
      }
      HEAP32[i2 >> 2] = 0;
      i3 = i1;
     } else {
      i3 = HEAP32[i8 + 8 >> 2] | 0;
      HEAP32[i3 + 12 >> 2] = i1;
      HEAP32[i1 + 8 >> 2] = i3;
      i3 = i1;
     } while (0);
     do if (i5 | 0) {
      i1 = HEAP32[i8 + 28 >> 2] | 0;
      i2 = 76556 + (i1 << 2) | 0;
      if ((i8 | 0) == (HEAP32[i2 >> 2] | 0)) {
       HEAP32[i2 >> 2] = i3;
       if (!i3) {
        HEAP32[19064] = i6 & ~(1 << i1);
        break;
       }
      } else {
       i14 = i5 + 16 | 0;
       HEAP32[((HEAP32[i14 >> 2] | 0) == (i8 | 0) ? i14 : i5 + 20 | 0) >> 2] = i3;
       if (!i3) break;
      }
      HEAP32[i3 + 24 >> 2] = i5;
      i1 = HEAP32[i8 + 16 >> 2] | 0;
      if (i1 | 0) {
       HEAP32[i3 + 16 >> 2] = i1;
       HEAP32[i1 + 24 >> 2] = i3;
      }
      i1 = HEAP32[i8 + 20 >> 2] | 0;
      if (i1 | 0) {
       HEAP32[i3 + 20 >> 2] = i1;
       HEAP32[i1 + 24 >> 2] = i3;
      }
     } while (0);
     if (i9 >>> 0 < 16) {
      i14 = i9 + i10 | 0;
      HEAP32[i8 + 4 >> 2] = i14 | 3;
      i14 = i8 + i14 + 4 | 0;
      HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
     } else {
      HEAP32[i8 + 4 >> 2] = i10 | 3;
      HEAP32[i7 + 4 >> 2] = i9 | 1;
      HEAP32[i7 + i9 >> 2] = i9;
      if (i11 | 0) {
       i4 = HEAP32[19068] | 0;
       i1 = i11 >>> 3;
       i3 = 76292 + (i1 << 1 << 2) | 0;
       i1 = 1 << i1;
       if (!(i1 & i12)) {
        HEAP32[19063] = i1 | i12;
        i1 = i3;
        i2 = i3 + 8 | 0;
       } else {
        i2 = i3 + 8 | 0;
        i1 = HEAP32[i2 >> 2] | 0;
       }
       HEAP32[i2 >> 2] = i4;
       HEAP32[i1 + 12 >> 2] = i4;
       HEAP32[i4 + 8 >> 2] = i1;
       HEAP32[i4 + 12 >> 2] = i3;
      }
      HEAP32[19065] = i9;
      HEAP32[19068] = i7;
     }
     i14 = i8 + 8 | 0;
     STACKTOP = i15;
     return i14 | 0;
    }
   }
  }
 } else if (i1 >>> 0 > 4294967231) i10 = -1; else {
  i1 = i1 + 11 | 0;
  i10 = i1 & -8;
  i9 = HEAP32[19064] | 0;
  if (i9) {
   i3 = 0 - i10 | 0;
   i1 = i1 >>> 8;
   if (!i1) i7 = 0; else if (i10 >>> 0 > 16777215) i7 = 31; else {
    i12 = (i1 + 1048320 | 0) >>> 16 & 8;
    i14 = i1 << i12;
    i11 = (i14 + 520192 | 0) >>> 16 & 4;
    i14 = i14 << i11;
    i7 = (i14 + 245760 | 0) >>> 16 & 2;
    i7 = 14 - (i11 | i12 | i7) + (i14 << i7 >>> 15) | 0;
    i7 = i10 >>> (i7 + 7 | 0) & 1 | i7 << 1;
   }
   i2 = HEAP32[76556 + (i7 << 2) >> 2] | 0;
   L79 : do if (!i2) {
    i2 = 0;
    i1 = 0;
    i14 = 61;
   } else {
    i1 = 0;
    i6 = i10 << ((i7 | 0) == 31 ? 0 : 25 - (i7 >>> 1) | 0);
    i4 = 0;
    while (1) {
     i5 = (HEAP32[i2 + 4 >> 2] & -8) - i10 | 0;
     if (i5 >>> 0 < i3 >>> 0) if (!i5) {
      i1 = i2;
      i3 = 0;
      i14 = 65;
      break L79;
     } else {
      i1 = i2;
      i3 = i5;
     }
     i14 = HEAP32[i2 + 20 >> 2] | 0;
     i2 = HEAP32[i2 + 16 + (i6 >>> 31 << 2) >> 2] | 0;
     i4 = (i14 | 0) == 0 | (i14 | 0) == (i2 | 0) ? i4 : i14;
     if (!i2) {
      i2 = i4;
      i14 = 61;
      break;
     } else i6 = i6 << 1;
    }
   } while (0);
   if ((i14 | 0) == 61) {
    if ((i2 | 0) == 0 & (i1 | 0) == 0) {
     i1 = 2 << i7;
     i1 = (i1 | 0 - i1) & i9;
     if (!i1) break;
     i12 = (i1 & 0 - i1) + -1 | 0;
     i7 = i12 >>> 12 & 16;
     i12 = i12 >>> i7;
     i6 = i12 >>> 5 & 8;
     i12 = i12 >>> i6;
     i8 = i12 >>> 2 & 4;
     i12 = i12 >>> i8;
     i11 = i12 >>> 1 & 2;
     i12 = i12 >>> i11;
     i2 = i12 >>> 1 & 1;
     i1 = 0;
     i2 = HEAP32[76556 + ((i6 | i7 | i8 | i11 | i2) + (i12 >>> i2) << 2) >> 2] | 0;
    }
    if (!i2) {
     i8 = i1;
     i6 = i3;
    } else i14 = 65;
   }
   if ((i14 | 0) == 65) {
    i4 = i2;
    while (1) {
     i12 = (HEAP32[i4 + 4 >> 2] & -8) - i10 | 0;
     i2 = i12 >>> 0 < i3 >>> 0;
     i3 = i2 ? i12 : i3;
     i1 = i2 ? i4 : i1;
     i2 = HEAP32[i4 + 16 >> 2] | 0;
     if (!i2) i2 = HEAP32[i4 + 20 >> 2] | 0;
     if (!i2) {
      i8 = i1;
      i6 = i3;
      break;
     } else i4 = i2;
    }
   }
   if (i8) if (i6 >>> 0 < ((HEAP32[19065] | 0) - i10 | 0) >>> 0) {
    i7 = i8 + i10 | 0;
    if (i7 >>> 0 > i8 >>> 0) {
     i5 = HEAP32[i8 + 24 >> 2] | 0;
     i1 = HEAP32[i8 + 12 >> 2] | 0;
     do if ((i1 | 0) == (i8 | 0)) {
      i2 = i8 + 20 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
      if (!i1) {
       i2 = i8 + 16 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
       if (!i1) {
        i1 = 0;
        break;
       }
      }
      while (1) {
       i4 = i1 + 20 | 0;
       i3 = HEAP32[i4 >> 2] | 0;
       if (!i3) {
        i4 = i1 + 16 | 0;
        i3 = HEAP32[i4 >> 2] | 0;
        if (!i3) break; else {
         i1 = i3;
         i2 = i4;
        }
       } else {
        i1 = i3;
        i2 = i4;
       }
      }
      HEAP32[i2 >> 2] = 0;
     } else {
      i14 = HEAP32[i8 + 8 >> 2] | 0;
      HEAP32[i14 + 12 >> 2] = i1;
      HEAP32[i1 + 8 >> 2] = i14;
     } while (0);
     do if (!i5) i4 = i9; else {
      i2 = HEAP32[i8 + 28 >> 2] | 0;
      i3 = 76556 + (i2 << 2) | 0;
      if ((i8 | 0) == (HEAP32[i3 >> 2] | 0)) {
       HEAP32[i3 >> 2] = i1;
       if (!i1) {
        i4 = i9 & ~(1 << i2);
        HEAP32[19064] = i4;
        break;
       }
      } else {
       i14 = i5 + 16 | 0;
       HEAP32[((HEAP32[i14 >> 2] | 0) == (i8 | 0) ? i14 : i5 + 20 | 0) >> 2] = i1;
       if (!i1) {
        i4 = i9;
        break;
       }
      }
      HEAP32[i1 + 24 >> 2] = i5;
      i2 = HEAP32[i8 + 16 >> 2] | 0;
      if (i2 | 0) {
       HEAP32[i1 + 16 >> 2] = i2;
       HEAP32[i2 + 24 >> 2] = i1;
      }
      i2 = HEAP32[i8 + 20 >> 2] | 0;
      if (!i2) i4 = i9; else {
       HEAP32[i1 + 20 >> 2] = i2;
       HEAP32[i2 + 24 >> 2] = i1;
       i4 = i9;
      }
     } while (0);
     L128 : do if (i6 >>> 0 < 16) {
      i14 = i6 + i10 | 0;
      HEAP32[i8 + 4 >> 2] = i14 | 3;
      i14 = i8 + i14 + 4 | 0;
      HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
     } else {
      HEAP32[i8 + 4 >> 2] = i10 | 3;
      HEAP32[i7 + 4 >> 2] = i6 | 1;
      HEAP32[i7 + i6 >> 2] = i6;
      i1 = i6 >>> 3;
      if (i6 >>> 0 < 256) {
       i3 = 76292 + (i1 << 1 << 2) | 0;
       i2 = HEAP32[19063] | 0;
       i1 = 1 << i1;
       if (!(i2 & i1)) {
        HEAP32[19063] = i2 | i1;
        i1 = i3;
        i2 = i3 + 8 | 0;
       } else {
        i2 = i3 + 8 | 0;
        i1 = HEAP32[i2 >> 2] | 0;
       }
       HEAP32[i2 >> 2] = i7;
       HEAP32[i1 + 12 >> 2] = i7;
       HEAP32[i7 + 8 >> 2] = i1;
       HEAP32[i7 + 12 >> 2] = i3;
       break;
      }
      i1 = i6 >>> 8;
      if (!i1) i3 = 0; else if (i6 >>> 0 > 16777215) i3 = 31; else {
       i13 = (i1 + 1048320 | 0) >>> 16 & 8;
       i14 = i1 << i13;
       i12 = (i14 + 520192 | 0) >>> 16 & 4;
       i14 = i14 << i12;
       i3 = (i14 + 245760 | 0) >>> 16 & 2;
       i3 = 14 - (i12 | i13 | i3) + (i14 << i3 >>> 15) | 0;
       i3 = i6 >>> (i3 + 7 | 0) & 1 | i3 << 1;
      }
      i1 = 76556 + (i3 << 2) | 0;
      HEAP32[i7 + 28 >> 2] = i3;
      i2 = i7 + 16 | 0;
      HEAP32[i2 + 4 >> 2] = 0;
      HEAP32[i2 >> 2] = 0;
      i2 = 1 << i3;
      if (!(i4 & i2)) {
       HEAP32[19064] = i4 | i2;
       HEAP32[i1 >> 2] = i7;
       HEAP32[i7 + 24 >> 2] = i1;
       HEAP32[i7 + 12 >> 2] = i7;
       HEAP32[i7 + 8 >> 2] = i7;
       break;
      }
      i1 = HEAP32[i1 >> 2] | 0;
      L145 : do if ((HEAP32[i1 + 4 >> 2] & -8 | 0) != (i6 | 0)) {
       i4 = i6 << ((i3 | 0) == 31 ? 0 : 25 - (i3 >>> 1) | 0);
       while (1) {
        i3 = i1 + 16 + (i4 >>> 31 << 2) | 0;
        i2 = HEAP32[i3 >> 2] | 0;
        if (!i2) break;
        if ((HEAP32[i2 + 4 >> 2] & -8 | 0) == (i6 | 0)) {
         i1 = i2;
         break L145;
        } else {
         i4 = i4 << 1;
         i1 = i2;
        }
       }
       HEAP32[i3 >> 2] = i7;
       HEAP32[i7 + 24 >> 2] = i1;
       HEAP32[i7 + 12 >> 2] = i7;
       HEAP32[i7 + 8 >> 2] = i7;
       break L128;
      } while (0);
      i13 = i1 + 8 | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      HEAP32[i14 + 12 >> 2] = i7;
      HEAP32[i13 >> 2] = i7;
      HEAP32[i7 + 8 >> 2] = i14;
      HEAP32[i7 + 12 >> 2] = i1;
      HEAP32[i7 + 24 >> 2] = 0;
     } while (0);
     i14 = i8 + 8 | 0;
     STACKTOP = i15;
     return i14 | 0;
    }
   }
  }
 } while (0);
 i3 = HEAP32[19065] | 0;
 if (i3 >>> 0 >= i10 >>> 0) {
  i1 = i3 - i10 | 0;
  i2 = HEAP32[19068] | 0;
  if (i1 >>> 0 > 15) {
   i14 = i2 + i10 | 0;
   HEAP32[19068] = i14;
   HEAP32[19065] = i1;
   HEAP32[i14 + 4 >> 2] = i1 | 1;
   HEAP32[i2 + i3 >> 2] = i1;
   HEAP32[i2 + 4 >> 2] = i10 | 3;
  } else {
   HEAP32[19065] = 0;
   HEAP32[19068] = 0;
   HEAP32[i2 + 4 >> 2] = i3 | 3;
   i14 = i2 + i3 + 4 | 0;
   HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 1;
  }
  i14 = i2 + 8 | 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 i6 = HEAP32[19066] | 0;
 if (i6 >>> 0 > i10 >>> 0) {
  i12 = i6 - i10 | 0;
  HEAP32[19066] = i12;
  i14 = HEAP32[19069] | 0;
  i13 = i14 + i10 | 0;
  HEAP32[19069] = i13;
  HEAP32[i13 + 4 >> 2] = i12 | 1;
  HEAP32[i14 + 4 >> 2] = i10 | 3;
  i14 = i14 + 8 | 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 if (!(HEAP32[19181] | 0)) {
  HEAP32[19183] = 4096;
  HEAP32[19182] = 4096;
  HEAP32[19184] = -1;
  HEAP32[19185] = -1;
  HEAP32[19186] = 0;
  HEAP32[19174] = 0;
  HEAP32[19181] = i13 & -16 ^ 1431655768;
  i1 = 4096;
 } else i1 = HEAP32[19183] | 0;
 i7 = i10 + 48 | 0;
 i8 = i10 + 47 | 0;
 i5 = i1 + i8 | 0;
 i4 = 0 - i1 | 0;
 i9 = i5 & i4;
 if (i9 >>> 0 <= i10 >>> 0) {
  i14 = 0;
  STACKTOP = i15;
  return i14 | 0;
 }
 i1 = HEAP32[19173] | 0;
 if (i1 | 0) {
  i12 = HEAP32[19171] | 0;
  i13 = i12 + i9 | 0;
  if (i13 >>> 0 <= i12 >>> 0 | i13 >>> 0 > i1 >>> 0) {
   i14 = 0;
   STACKTOP = i15;
   return i14 | 0;
  }
 }
 L178 : do if (!(HEAP32[19174] & 4)) {
  i2 = HEAP32[19069] | 0;
  L180 : do if (!i2) i14 = 128; else {
   i3 = 76700;
   while (1) {
    i1 = HEAP32[i3 >> 2] | 0;
    if (i1 >>> 0 <= i2 >>> 0) if ((i1 + (HEAP32[i3 + 4 >> 2] | 0) | 0) >>> 0 > i2 >>> 0) break;
    i1 = HEAP32[i3 + 8 >> 2] | 0;
    if (!i1) {
     i14 = 128;
     break L180;
    } else i3 = i1;
   }
   i1 = i5 - i6 & i4;
   if (i1 >>> 0 < 2147483647) {
    i4 = (tempInt = _sbrk(i1 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
    if ((i4 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0)) {
     if ((i4 | 0) != (-1 | 0)) {
      i14 = 145;
      break L178;
     }
    } else i14 = 136;
   } else i1 = 0;
  } while (0);
  do if ((i14 | 0) == 128) {
   i4 = (tempInt = _sbrk(0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
   if ((i4 | 0) == (-1 | 0)) i1 = 0; else {
    i1 = i4;
    i2 = HEAP32[19182] | 0;
    i3 = i2 + -1 | 0;
    i1 = ((i3 & i1 | 0) == 0 ? 0 : (i3 + i1 & 0 - i2) - i1 | 0) + i9 | 0;
    i2 = HEAP32[19171] | 0;
    i3 = i1 + i2 | 0;
    if (i1 >>> 0 > i10 >>> 0 & i1 >>> 0 < 2147483647) {
     i5 = HEAP32[19173] | 0;
     if (i5 | 0) if (i3 >>> 0 <= i2 >>> 0 | i3 >>> 0 > i5 >>> 0) {
      i1 = 0;
      break;
     }
     i2 = (tempInt = _sbrk(i1 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
     if ((i2 | 0) == (i4 | 0)) {
      i14 = 145;
      break L178;
     } else {
      i4 = i2;
      i14 = 136;
     }
    } else i1 = 0;
   }
  } while (0);
  do if ((i14 | 0) == 136) {
   i3 = 0 - i1 | 0;
   if (!(i7 >>> 0 > i1 >>> 0 & (i1 >>> 0 < 2147483647 & (i4 | 0) != (-1 | 0)))) if ((i4 | 0) == (-1 | 0)) {
    i1 = 0;
    break;
   } else {
    i14 = 145;
    break L178;
   }
   i2 = HEAP32[19183] | 0;
   i2 = i8 - i1 + i2 & 0 - i2;
   if (i2 >>> 0 >= 2147483647) {
    i14 = 145;
    break L178;
   }
   if (((tempInt = _sbrk(i2 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0) == (-1 | 0)) {
    (tempInt = _sbrk(i3 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
    i1 = 0;
    break;
   } else {
    i1 = i2 + i1 | 0;
    i14 = 145;
    break L178;
   }
  } while (0);
  HEAP32[19174] = HEAP32[19174] | 4;
  i14 = 143;
 } else {
  i1 = 0;
  i14 = 143;
 } while (0);
 if ((i14 | 0) == 143) if (i9 >>> 0 < 2147483647) {
  i4 = (tempInt = _sbrk(i9 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
  i13 = (tempInt = _sbrk(0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
  i2 = i13 - i4 | 0;
  i3 = i2 >>> 0 > (i10 + 40 | 0) >>> 0;
  if (!((i4 | 0) == (-1 | 0) | i3 ^ 1 | i4 >>> 0 < i13 >>> 0 & ((i4 | 0) != (-1 | 0) & (i13 | 0) != (-1 | 0)) ^ 1)) {
   i1 = i3 ? i2 : i1;
   i14 = 145;
  }
 }
 if ((i14 | 0) == 145) {
  i2 = (HEAP32[19171] | 0) + i1 | 0;
  HEAP32[19171] = i2;
  if (i2 >>> 0 > (HEAP32[19172] | 0) >>> 0) HEAP32[19172] = i2;
  i9 = HEAP32[19069] | 0;
  L215 : do if (!i9) {
   i14 = HEAP32[19067] | 0;
   if ((i14 | 0) == 0 | i4 >>> 0 < i14 >>> 0) HEAP32[19067] = i4;
   HEAP32[19175] = i4;
   HEAP32[19176] = i1;
   HEAP32[19178] = 0;
   HEAP32[19072] = HEAP32[19181];
   HEAP32[19071] = -1;
   HEAP32[19076] = 76292;
   HEAP32[19075] = 76292;
   HEAP32[19078] = 76300;
   HEAP32[19077] = 76300;
   HEAP32[19080] = 76308;
   HEAP32[19079] = 76308;
   HEAP32[19082] = 76316;
   HEAP32[19081] = 76316;
   HEAP32[19084] = 76324;
   HEAP32[19083] = 76324;
   HEAP32[19086] = 76332;
   HEAP32[19085] = 76332;
   HEAP32[19088] = 76340;
   HEAP32[19087] = 76340;
   HEAP32[19090] = 76348;
   HEAP32[19089] = 76348;
   HEAP32[19092] = 76356;
   HEAP32[19091] = 76356;
   HEAP32[19094] = 76364;
   HEAP32[19093] = 76364;
   HEAP32[19096] = 76372;
   HEAP32[19095] = 76372;
   HEAP32[19098] = 76380;
   HEAP32[19097] = 76380;
   HEAP32[19100] = 76388;
   HEAP32[19099] = 76388;
   HEAP32[19102] = 76396;
   HEAP32[19101] = 76396;
   HEAP32[19104] = 76404;
   HEAP32[19103] = 76404;
   HEAP32[19106] = 76412;
   HEAP32[19105] = 76412;
   HEAP32[19108] = 76420;
   HEAP32[19107] = 76420;
   HEAP32[19110] = 76428;
   HEAP32[19109] = 76428;
   HEAP32[19112] = 76436;
   HEAP32[19111] = 76436;
   HEAP32[19114] = 76444;
   HEAP32[19113] = 76444;
   HEAP32[19116] = 76452;
   HEAP32[19115] = 76452;
   HEAP32[19118] = 76460;
   HEAP32[19117] = 76460;
   HEAP32[19120] = 76468;
   HEAP32[19119] = 76468;
   HEAP32[19122] = 76476;
   HEAP32[19121] = 76476;
   HEAP32[19124] = 76484;
   HEAP32[19123] = 76484;
   HEAP32[19126] = 76492;
   HEAP32[19125] = 76492;
   HEAP32[19128] = 76500;
   HEAP32[19127] = 76500;
   HEAP32[19130] = 76508;
   HEAP32[19129] = 76508;
   HEAP32[19132] = 76516;
   HEAP32[19131] = 76516;
   HEAP32[19134] = 76524;
   HEAP32[19133] = 76524;
   HEAP32[19136] = 76532;
   HEAP32[19135] = 76532;
   HEAP32[19138] = 76540;
   HEAP32[19137] = 76540;
   i14 = i1 + -40 | 0;
   i12 = i4 + 8 | 0;
   i12 = (i12 & 7 | 0) == 0 ? 0 : 0 - i12 & 7;
   i13 = i4 + i12 | 0;
   i12 = i14 - i12 | 0;
   HEAP32[19069] = i13;
   HEAP32[19066] = i12;
   HEAP32[i13 + 4 >> 2] = i12 | 1;
   HEAP32[i4 + i14 + 4 >> 2] = 40;
   HEAP32[19070] = HEAP32[19185];
  } else {
   i2 = 76700;
   do {
    i3 = HEAP32[i2 >> 2] | 0;
    i5 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i4 | 0) == (i3 + i5 | 0)) {
     i14 = 154;
     break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
   } while ((i2 | 0) != 0);
   if ((i14 | 0) == 154) {
    i6 = i2 + 4 | 0;
    if (!(HEAP32[i2 + 12 >> 2] & 8)) if (i4 >>> 0 > i9 >>> 0 & i3 >>> 0 <= i9 >>> 0) {
     HEAP32[i6 >> 2] = i5 + i1;
     i14 = (HEAP32[19066] | 0) + i1 | 0;
     i12 = i9 + 8 | 0;
     i12 = (i12 & 7 | 0) == 0 ? 0 : 0 - i12 & 7;
     i13 = i9 + i12 | 0;
     i12 = i14 - i12 | 0;
     HEAP32[19069] = i13;
     HEAP32[19066] = i12;
     HEAP32[i13 + 4 >> 2] = i12 | 1;
     HEAP32[i9 + i14 + 4 >> 2] = 40;
     HEAP32[19070] = HEAP32[19185];
     break;
    }
   }
   if (i4 >>> 0 < (HEAP32[19067] | 0) >>> 0) HEAP32[19067] = i4;
   i3 = i4 + i1 | 0;
   i2 = 76700;
   do {
    if ((HEAP32[i2 >> 2] | 0) == (i3 | 0)) {
     i14 = 162;
     break;
    }
    i2 = HEAP32[i2 + 8 >> 2] | 0;
   } while ((i2 | 0) != 0);
   if ((i14 | 0) == 162) if (!(HEAP32[i2 + 12 >> 2] & 8)) {
    HEAP32[i2 >> 2] = i4;
    i12 = i2 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i1;
    i12 = i4 + 8 | 0;
    i12 = i4 + ((i12 & 7 | 0) == 0 ? 0 : 0 - i12 & 7) | 0;
    i1 = i3 + 8 | 0;
    i1 = i3 + ((i1 & 7 | 0) == 0 ? 0 : 0 - i1 & 7) | 0;
    i11 = i12 + i10 | 0;
    i8 = i1 - i12 - i10 | 0;
    HEAP32[i12 + 4 >> 2] = i10 | 3;
    L238 : do if ((i9 | 0) == (i1 | 0)) {
     i14 = (HEAP32[19066] | 0) + i8 | 0;
     HEAP32[19066] = i14;
     HEAP32[19069] = i11;
     HEAP32[i11 + 4 >> 2] = i14 | 1;
    } else {
     if ((HEAP32[19068] | 0) == (i1 | 0)) {
      i14 = (HEAP32[19065] | 0) + i8 | 0;
      HEAP32[19065] = i14;
      HEAP32[19068] = i11;
      HEAP32[i11 + 4 >> 2] = i14 | 1;
      HEAP32[i11 + i14 >> 2] = i14;
      break;
     }
     i2 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i2 & 3 | 0) == 1) {
      i7 = i2 & -8;
      i4 = i2 >>> 3;
      L246 : do if (i2 >>> 0 < 256) {
       i2 = HEAP32[i1 + 8 >> 2] | 0;
       i3 = HEAP32[i1 + 12 >> 2] | 0;
       if ((i3 | 0) == (i2 | 0)) {
        HEAP32[19063] = HEAP32[19063] & ~(1 << i4);
        break;
       } else {
        HEAP32[i2 + 12 >> 2] = i3;
        HEAP32[i3 + 8 >> 2] = i2;
        break;
       }
      } else {
       i6 = HEAP32[i1 + 24 >> 2] | 0;
       i2 = HEAP32[i1 + 12 >> 2] | 0;
       do if ((i2 | 0) == (i1 | 0)) {
        i3 = i1 + 16 | 0;
        i4 = i3 + 4 | 0;
        i2 = HEAP32[i4 >> 2] | 0;
        if (!i2) {
         i2 = HEAP32[i3 >> 2] | 0;
         if (!i2) {
          i2 = 0;
          break;
         }
        } else i3 = i4;
        while (1) {
         i5 = i2 + 20 | 0;
         i4 = HEAP32[i5 >> 2] | 0;
         if (!i4) {
          i5 = i2 + 16 | 0;
          i4 = HEAP32[i5 >> 2] | 0;
          if (!i4) break; else {
           i2 = i4;
           i3 = i5;
          }
         } else {
          i2 = i4;
          i3 = i5;
         }
        }
        HEAP32[i3 >> 2] = 0;
       } else {
        i14 = HEAP32[i1 + 8 >> 2] | 0;
        HEAP32[i14 + 12 >> 2] = i2;
        HEAP32[i2 + 8 >> 2] = i14;
       } while (0);
       if (!i6) break;
       i3 = HEAP32[i1 + 28 >> 2] | 0;
       i4 = 76556 + (i3 << 2) | 0;
       do if ((HEAP32[i4 >> 2] | 0) == (i1 | 0)) {
        HEAP32[i4 >> 2] = i2;
        if (i2 | 0) break;
        HEAP32[19064] = HEAP32[19064] & ~(1 << i3);
        break L246;
       } else {
        i14 = i6 + 16 | 0;
        HEAP32[((HEAP32[i14 >> 2] | 0) == (i1 | 0) ? i14 : i6 + 20 | 0) >> 2] = i2;
        if (!i2) break L246;
       } while (0);
       HEAP32[i2 + 24 >> 2] = i6;
       i3 = i1 + 16 | 0;
       i4 = HEAP32[i3 >> 2] | 0;
       if (i4 | 0) {
        HEAP32[i2 + 16 >> 2] = i4;
        HEAP32[i4 + 24 >> 2] = i2;
       }
       i3 = HEAP32[i3 + 4 >> 2] | 0;
       if (!i3) break;
       HEAP32[i2 + 20 >> 2] = i3;
       HEAP32[i3 + 24 >> 2] = i2;
      } while (0);
      i1 = i1 + i7 | 0;
      i5 = i7 + i8 | 0;
     } else i5 = i8;
     i1 = i1 + 4 | 0;
     HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
     HEAP32[i11 + 4 >> 2] = i5 | 1;
     HEAP32[i11 + i5 >> 2] = i5;
     i1 = i5 >>> 3;
     if (i5 >>> 0 < 256) {
      i3 = 76292 + (i1 << 1 << 2) | 0;
      i2 = HEAP32[19063] | 0;
      i1 = 1 << i1;
      if (!(i2 & i1)) {
       HEAP32[19063] = i2 | i1;
       i1 = i3;
       i2 = i3 + 8 | 0;
      } else {
       i2 = i3 + 8 | 0;
       i1 = HEAP32[i2 >> 2] | 0;
      }
      HEAP32[i2 >> 2] = i11;
      HEAP32[i1 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i1;
      HEAP32[i11 + 12 >> 2] = i3;
      break;
     }
     i1 = i5 >>> 8;
     do if (!i1) i4 = 0; else {
      if (i5 >>> 0 > 16777215) {
       i4 = 31;
       break;
      }
      i13 = (i1 + 1048320 | 0) >>> 16 & 8;
      i14 = i1 << i13;
      i10 = (i14 + 520192 | 0) >>> 16 & 4;
      i14 = i14 << i10;
      i4 = (i14 + 245760 | 0) >>> 16 & 2;
      i4 = 14 - (i10 | i13 | i4) + (i14 << i4 >>> 15) | 0;
      i4 = i5 >>> (i4 + 7 | 0) & 1 | i4 << 1;
     } while (0);
     i1 = 76556 + (i4 << 2) | 0;
     HEAP32[i11 + 28 >> 2] = i4;
     i2 = i11 + 16 | 0;
     HEAP32[i2 + 4 >> 2] = 0;
     HEAP32[i2 >> 2] = 0;
     i2 = HEAP32[19064] | 0;
     i3 = 1 << i4;
     if (!(i2 & i3)) {
      HEAP32[19064] = i2 | i3;
      HEAP32[i1 >> 2] = i11;
      HEAP32[i11 + 24 >> 2] = i1;
      HEAP32[i11 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i11;
      break;
     }
     i1 = HEAP32[i1 >> 2] | 0;
     L291 : do if ((HEAP32[i1 + 4 >> 2] & -8 | 0) != (i5 | 0)) {
      i4 = i5 << ((i4 | 0) == 31 ? 0 : 25 - (i4 >>> 1) | 0);
      while (1) {
       i3 = i1 + 16 + (i4 >>> 31 << 2) | 0;
       i2 = HEAP32[i3 >> 2] | 0;
       if (!i2) break;
       if ((HEAP32[i2 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
        i1 = i2;
        break L291;
       } else {
        i4 = i4 << 1;
        i1 = i2;
       }
      }
      HEAP32[i3 >> 2] = i11;
      HEAP32[i11 + 24 >> 2] = i1;
      HEAP32[i11 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i11;
      break L238;
     } while (0);
     i13 = i1 + 8 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i14 + 12 >> 2] = i11;
     HEAP32[i13 >> 2] = i11;
     HEAP32[i11 + 8 >> 2] = i14;
     HEAP32[i11 + 12 >> 2] = i1;
     HEAP32[i11 + 24 >> 2] = 0;
    } while (0);
    i14 = i12 + 8 | 0;
    STACKTOP = i15;
    return i14 | 0;
   }
   i3 = 76700;
   while (1) {
    i2 = HEAP32[i3 >> 2] | 0;
    if (i2 >>> 0 <= i9 >>> 0) {
     i2 = i2 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
     if (i2 >>> 0 > i9 >>> 0) break;
    }
    i3 = HEAP32[i3 + 8 >> 2] | 0;
   }
   i6 = i2 + -47 | 0;
   i3 = i6 + 8 | 0;
   i3 = i6 + ((i3 & 7 | 0) == 0 ? 0 : 0 - i3 & 7) | 0;
   i6 = i9 + 16 | 0;
   i3 = i3 >>> 0 < i6 >>> 0 ? i9 : i3;
   i14 = i3 + 8 | 0;
   i5 = i1 + -40 | 0;
   i12 = i4 + 8 | 0;
   i12 = (i12 & 7 | 0) == 0 ? 0 : 0 - i12 & 7;
   i13 = i4 + i12 | 0;
   i12 = i5 - i12 | 0;
   HEAP32[19069] = i13;
   HEAP32[19066] = i12;
   HEAP32[i13 + 4 >> 2] = i12 | 1;
   HEAP32[i4 + i5 + 4 >> 2] = 40;
   HEAP32[19070] = HEAP32[19185];
   i5 = i3 + 4 | 0;
   HEAP32[i5 >> 2] = 27;
   HEAP32[i14 >> 2] = HEAP32[19175];
   HEAP32[i14 + 4 >> 2] = HEAP32[19176];
   HEAP32[i14 + 8 >> 2] = HEAP32[19177];
   HEAP32[i14 + 12 >> 2] = HEAP32[19178];
   HEAP32[19175] = i4;
   HEAP32[19176] = i1;
   HEAP32[19178] = 0;
   HEAP32[19177] = i14;
   i1 = i3 + 24 | 0;
   do {
    i14 = i1;
    i1 = i1 + 4 | 0;
    HEAP32[i1 >> 2] = 7;
   } while ((i14 + 8 | 0) >>> 0 < i2 >>> 0);
   if ((i3 | 0) != (i9 | 0)) {
    i7 = i3 - i9 | 0;
    HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2;
    HEAP32[i9 + 4 >> 2] = i7 | 1;
    HEAP32[i3 >> 2] = i7;
    i1 = i7 >>> 3;
    if (i7 >>> 0 < 256) {
     i3 = 76292 + (i1 << 1 << 2) | 0;
     i2 = HEAP32[19063] | 0;
     i1 = 1 << i1;
     if (!(i2 & i1)) {
      HEAP32[19063] = i2 | i1;
      i1 = i3;
      i2 = i3 + 8 | 0;
     } else {
      i2 = i3 + 8 | 0;
      i1 = HEAP32[i2 >> 2] | 0;
     }
     HEAP32[i2 >> 2] = i9;
     HEAP32[i1 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i1;
     HEAP32[i9 + 12 >> 2] = i3;
     break;
    }
    i1 = i7 >>> 8;
    if (!i1) i4 = 0; else if (i7 >>> 0 > 16777215) i4 = 31; else {
     i13 = (i1 + 1048320 | 0) >>> 16 & 8;
     i14 = i1 << i13;
     i12 = (i14 + 520192 | 0) >>> 16 & 4;
     i14 = i14 << i12;
     i4 = (i14 + 245760 | 0) >>> 16 & 2;
     i4 = 14 - (i12 | i13 | i4) + (i14 << i4 >>> 15) | 0;
     i4 = i7 >>> (i4 + 7 | 0) & 1 | i4 << 1;
    }
    i3 = 76556 + (i4 << 2) | 0;
    HEAP32[i9 + 28 >> 2] = i4;
    HEAP32[i9 + 20 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    i1 = HEAP32[19064] | 0;
    i2 = 1 << i4;
    if (!(i1 & i2)) {
     HEAP32[19064] = i1 | i2;
     HEAP32[i3 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i3;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break;
    }
    i1 = HEAP32[i3 >> 2] | 0;
    L325 : do if ((HEAP32[i1 + 4 >> 2] & -8 | 0) != (i7 | 0)) {
     i4 = i7 << ((i4 | 0) == 31 ? 0 : 25 - (i4 >>> 1) | 0);
     while (1) {
      i3 = i1 + 16 + (i4 >>> 31 << 2) | 0;
      i2 = HEAP32[i3 >> 2] | 0;
      if (!i2) break;
      if ((HEAP32[i2 + 4 >> 2] & -8 | 0) == (i7 | 0)) {
       i1 = i2;
       break L325;
      } else {
       i4 = i4 << 1;
       i1 = i2;
      }
     }
     HEAP32[i3 >> 2] = i9;
     HEAP32[i9 + 24 >> 2] = i1;
     HEAP32[i9 + 12 >> 2] = i9;
     HEAP32[i9 + 8 >> 2] = i9;
     break L215;
    } while (0);
    i13 = i1 + 8 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 + 12 >> 2] = i9;
    HEAP32[i13 >> 2] = i9;
    HEAP32[i9 + 8 >> 2] = i14;
    HEAP32[i9 + 12 >> 2] = i1;
    HEAP32[i9 + 24 >> 2] = 0;
   }
  } while (0);
  i1 = HEAP32[19066] | 0;
  if (i1 >>> 0 > i10 >>> 0) {
   i12 = i1 - i10 | 0;
   HEAP32[19066] = i12;
   i14 = HEAP32[19069] | 0;
   i13 = i14 + i10 | 0;
   HEAP32[19069] = i13;
   HEAP32[i13 + 4 >> 2] = i12 | 1;
   HEAP32[i14 + 4 >> 2] = i10 | 3;
   i14 = i14 + 8 | 0;
   STACKTOP = i15;
   return i14 | 0;
  }
 }
 HEAP32[((tempInt = ___errno_location() | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0) >> 2] = 12;
 i14 = 0;
 STACKTOP = i15;
 return i14 | 0;
}

function _free(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if (!i1) return;
 i3 = i1 + -8 | 0;
 i5 = HEAP32[19067] | 0;
 i1 = HEAP32[i1 + -4 >> 2] | 0;
 i2 = i1 & -8;
 i9 = i3 + i2 | 0;
 do if (!(i1 & 1)) {
  i4 = HEAP32[i3 >> 2] | 0;
  if (!(i1 & 3)) return;
  i7 = i3 + (0 - i4) | 0;
  i6 = i4 + i2 | 0;
  if (i7 >>> 0 < i5 >>> 0) return;
  if ((HEAP32[19068] | 0) == (i7 | 0)) {
   i1 = i9 + 4 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 & 3 | 0) != 3) {
    i8 = i7;
    i2 = i6;
    break;
   }
   HEAP32[19065] = i6;
   HEAP32[i1 >> 2] = i2 & -2;
   HEAP32[i7 + 4 >> 2] = i6 | 1;
   HEAP32[i7 + i6 >> 2] = i6;
   return;
  }
  i3 = i4 >>> 3;
  if (i4 >>> 0 < 256) {
   i1 = HEAP32[i7 + 8 >> 2] | 0;
   i2 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i2 | 0) == (i1 | 0)) {
    HEAP32[19063] = HEAP32[19063] & ~(1 << i3);
    i8 = i7;
    i2 = i6;
    break;
   } else {
    HEAP32[i1 + 12 >> 2] = i2;
    HEAP32[i2 + 8 >> 2] = i1;
    i8 = i7;
    i2 = i6;
    break;
   }
  }
  i5 = HEAP32[i7 + 24 >> 2] | 0;
  i1 = HEAP32[i7 + 12 >> 2] | 0;
  do if ((i1 | 0) == (i7 | 0)) {
   i2 = i7 + 16 | 0;
   i3 = i2 + 4 | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   if (!i1) {
    i1 = HEAP32[i2 >> 2] | 0;
    if (!i1) {
     i1 = 0;
     break;
    }
   } else i2 = i3;
   while (1) {
    i4 = i1 + 20 | 0;
    i3 = HEAP32[i4 >> 2] | 0;
    if (!i3) {
     i4 = i1 + 16 | 0;
     i3 = HEAP32[i4 >> 2] | 0;
     if (!i3) break; else {
      i1 = i3;
      i2 = i4;
     }
    } else {
     i1 = i3;
     i2 = i4;
    }
   }
   HEAP32[i2 >> 2] = 0;
  } else {
   i8 = HEAP32[i7 + 8 >> 2] | 0;
   HEAP32[i8 + 12 >> 2] = i1;
   HEAP32[i1 + 8 >> 2] = i8;
  } while (0);
  if (!i5) {
   i8 = i7;
   i2 = i6;
  } else {
   i2 = HEAP32[i7 + 28 >> 2] | 0;
   i3 = 76556 + (i2 << 2) | 0;
   if ((HEAP32[i3 >> 2] | 0) == (i7 | 0)) {
    HEAP32[i3 >> 2] = i1;
    if (!i1) {
     HEAP32[19064] = HEAP32[19064] & ~(1 << i2);
     i8 = i7;
     i2 = i6;
     break;
    }
   } else {
    i8 = i5 + 16 | 0;
    HEAP32[((HEAP32[i8 >> 2] | 0) == (i7 | 0) ? i8 : i5 + 20 | 0) >> 2] = i1;
    if (!i1) {
     i8 = i7;
     i2 = i6;
     break;
    }
   }
   HEAP32[i1 + 24 >> 2] = i5;
   i2 = i7 + 16 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if (i3 | 0) {
    HEAP32[i1 + 16 >> 2] = i3;
    HEAP32[i3 + 24 >> 2] = i1;
   }
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   if (!i2) {
    i8 = i7;
    i2 = i6;
   } else {
    HEAP32[i1 + 20 >> 2] = i2;
    HEAP32[i2 + 24 >> 2] = i1;
    i8 = i7;
    i2 = i6;
   }
  }
 } else {
  i8 = i3;
  i7 = i3;
 } while (0);
 if (i7 >>> 0 >= i9 >>> 0) return;
 i1 = i9 + 4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (!(i4 & 1)) return;
 if (!(i4 & 2)) {
  if ((HEAP32[19069] | 0) == (i9 | 0)) {
   i9 = (HEAP32[19066] | 0) + i2 | 0;
   HEAP32[19066] = i9;
   HEAP32[19069] = i8;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   if ((i8 | 0) != (HEAP32[19068] | 0)) return;
   HEAP32[19068] = 0;
   HEAP32[19065] = 0;
   return;
  }
  if ((HEAP32[19068] | 0) == (i9 | 0)) {
   i9 = (HEAP32[19065] | 0) + i2 | 0;
   HEAP32[19065] = i9;
   HEAP32[19068] = i7;
   HEAP32[i8 + 4 >> 2] = i9 | 1;
   HEAP32[i7 + i9 >> 2] = i9;
   return;
  }
  i5 = (i4 & -8) + i2 | 0;
  i3 = i4 >>> 3;
  do if (i4 >>> 0 < 256) {
   i2 = HEAP32[i9 + 8 >> 2] | 0;
   i1 = HEAP32[i9 + 12 >> 2] | 0;
   if ((i1 | 0) == (i2 | 0)) {
    HEAP32[19063] = HEAP32[19063] & ~(1 << i3);
    break;
   } else {
    HEAP32[i2 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i2;
    break;
   }
  } else {
   i6 = HEAP32[i9 + 24 >> 2] | 0;
   i1 = HEAP32[i9 + 12 >> 2] | 0;
   do if ((i1 | 0) == (i9 | 0)) {
    i2 = i9 + 16 | 0;
    i3 = i2 + 4 | 0;
    i1 = HEAP32[i3 >> 2] | 0;
    if (!i1) {
     i1 = HEAP32[i2 >> 2] | 0;
     if (!i1) {
      i3 = 0;
      break;
     }
    } else i2 = i3;
    while (1) {
     i4 = i1 + 20 | 0;
     i3 = HEAP32[i4 >> 2] | 0;
     if (!i3) {
      i4 = i1 + 16 | 0;
      i3 = HEAP32[i4 >> 2] | 0;
      if (!i3) break; else {
       i1 = i3;
       i2 = i4;
      }
     } else {
      i1 = i3;
      i2 = i4;
     }
    }
    HEAP32[i2 >> 2] = 0;
    i3 = i1;
   } else {
    i3 = HEAP32[i9 + 8 >> 2] | 0;
    HEAP32[i3 + 12 >> 2] = i1;
    HEAP32[i1 + 8 >> 2] = i3;
    i3 = i1;
   } while (0);
   if (i6 | 0) {
    i1 = HEAP32[i9 + 28 >> 2] | 0;
    i2 = 76556 + (i1 << 2) | 0;
    if ((HEAP32[i2 >> 2] | 0) == (i9 | 0)) {
     HEAP32[i2 >> 2] = i3;
     if (!i3) {
      HEAP32[19064] = HEAP32[19064] & ~(1 << i1);
      break;
     }
    } else {
     i4 = i6 + 16 | 0;
     HEAP32[((HEAP32[i4 >> 2] | 0) == (i9 | 0) ? i4 : i6 + 20 | 0) >> 2] = i3;
     if (!i3) break;
    }
    HEAP32[i3 + 24 >> 2] = i6;
    i1 = i9 + 16 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    if (i2 | 0) {
     HEAP32[i3 + 16 >> 2] = i2;
     HEAP32[i2 + 24 >> 2] = i3;
    }
    i1 = HEAP32[i1 + 4 >> 2] | 0;
    if (i1 | 0) {
     HEAP32[i3 + 20 >> 2] = i1;
     HEAP32[i1 + 24 >> 2] = i3;
    }
   }
  } while (0);
  HEAP32[i8 + 4 >> 2] = i5 | 1;
  HEAP32[i7 + i5 >> 2] = i5;
  if ((i8 | 0) == (HEAP32[19068] | 0)) {
   HEAP32[19065] = i5;
   return;
  }
 } else {
  HEAP32[i1 >> 2] = i4 & -2;
  HEAP32[i8 + 4 >> 2] = i2 | 1;
  HEAP32[i7 + i2 >> 2] = i2;
  i5 = i2;
 }
 i1 = i5 >>> 3;
 if (i5 >>> 0 < 256) {
  i3 = 76292 + (i1 << 1 << 2) | 0;
  i2 = HEAP32[19063] | 0;
  i1 = 1 << i1;
  if (!(i2 & i1)) {
   HEAP32[19063] = i2 | i1;
   i1 = i3;
   i2 = i3 + 8 | 0;
  } else {
   i2 = i3 + 8 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
  }
  HEAP32[i2 >> 2] = i8;
  HEAP32[i1 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i1;
  HEAP32[i8 + 12 >> 2] = i3;
  return;
 }
 i1 = i5 >>> 8;
 if (!i1) i4 = 0; else if (i5 >>> 0 > 16777215) i4 = 31; else {
  i7 = (i1 + 1048320 | 0) >>> 16 & 8;
  i9 = i1 << i7;
  i6 = (i9 + 520192 | 0) >>> 16 & 4;
  i9 = i9 << i6;
  i4 = (i9 + 245760 | 0) >>> 16 & 2;
  i4 = 14 - (i6 | i7 | i4) + (i9 << i4 >>> 15) | 0;
  i4 = i5 >>> (i4 + 7 | 0) & 1 | i4 << 1;
 }
 i1 = 76556 + (i4 << 2) | 0;
 HEAP32[i8 + 28 >> 2] = i4;
 HEAP32[i8 + 20 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = 0;
 i2 = HEAP32[19064] | 0;
 i3 = 1 << i4;
 L112 : do if (!(i2 & i3)) {
  HEAP32[19064] = i2 | i3;
  HEAP32[i1 >> 2] = i8;
  HEAP32[i8 + 24 >> 2] = i1;
  HEAP32[i8 + 12 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i8;
 } else {
  i1 = HEAP32[i1 >> 2] | 0;
  L115 : do if ((HEAP32[i1 + 4 >> 2] & -8 | 0) != (i5 | 0)) {
   i4 = i5 << ((i4 | 0) == 31 ? 0 : 25 - (i4 >>> 1) | 0);
   while (1) {
    i3 = i1 + 16 + (i4 >>> 31 << 2) | 0;
    i2 = HEAP32[i3 >> 2] | 0;
    if (!i2) break;
    if ((HEAP32[i2 + 4 >> 2] & -8 | 0) == (i5 | 0)) {
     i1 = i2;
     break L115;
    } else {
     i4 = i4 << 1;
     i1 = i2;
    }
   }
   HEAP32[i3 >> 2] = i8;
   HEAP32[i8 + 24 >> 2] = i1;
   HEAP32[i8 + 12 >> 2] = i8;
   HEAP32[i8 + 8 >> 2] = i8;
   break L112;
  } while (0);
  i7 = i1 + 8 | 0;
  i9 = HEAP32[i7 >> 2] | 0;
  HEAP32[i9 + 12 >> 2] = i8;
  HEAP32[i7 >> 2] = i8;
  HEAP32[i8 + 8 >> 2] = i9;
  HEAP32[i8 + 12 >> 2] = i1;
  HEAP32[i8 + 24 >> 2] = 0;
 } while (0);
 i9 = (HEAP32[19071] | 0) + -1 | 0;
 HEAP32[19071] = i9;
 if (i9 | 0) return;
 i1 = 76708;
 while (1) {
  i1 = HEAP32[i1 >> 2] | 0;
  if (!i1) break; else i1 = i1 + 8 | 0;
 }
 HEAP32[19071] = -1;
 return;
}

function _memcpy(i3, i6, i1) {
 i3 = i3 | 0;
 i6 = i6 | 0;
 i1 = i1 | 0;
 var i2 = 0, i4 = 0, i5 = 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((i1 | 0) >= 8192) return (tempInt = _emscripten_memcpy_big(i3 | 0, i6 | 0, i1 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 i5 = i3 | 0;
 i4 = i3 + i1 | 0;
 if ((i3 & 3) == (i6 & 3)) {
  while (i3 & 3) {
   if (!i1) return i5 | 0;
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   i3 = i3 + 1 | 0;
   i6 = i6 + 1 | 0;
   i1 = i1 - 1 | 0;
  }
  i1 = i4 & -4 | 0;
  i2 = i1 - 64 | 0;
  while ((i3 | 0) <= (i2 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i3 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i3 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i3 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i3 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i3 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i3 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i3 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i3 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   HEAP32[i3 + 48 >> 2] = HEAP32[i6 + 48 >> 2];
   HEAP32[i3 + 52 >> 2] = HEAP32[i6 + 52 >> 2];
   HEAP32[i3 + 56 >> 2] = HEAP32[i6 + 56 >> 2];
   HEAP32[i3 + 60 >> 2] = HEAP32[i6 + 60 >> 2];
   i3 = i3 + 64 | 0;
   i6 = i6 + 64 | 0;
  }
  while ((i3 | 0) < (i1 | 0)) {
   HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 } else {
  i1 = i4 - 4 | 0;
  while ((i3 | 0) < (i1 | 0)) {
   HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
   HEAP8[i3 + 1 >> 0] = HEAP8[i6 + 1 >> 0] | 0;
   HEAP8[i3 + 2 >> 0] = HEAP8[i6 + 2 >> 0] | 0;
   HEAP8[i3 + 3 >> 0] = HEAP8[i6 + 3 >> 0] | 0;
   i3 = i3 + 4 | 0;
   i6 = i6 + 4 | 0;
  }
 }
 while ((i3 | 0) < (i4 | 0)) {
  HEAP8[i3 >> 0] = HEAP8[i6 >> 0] | 0;
  i3 = i3 + 1 | 0;
  i6 = i6 + 1 | 0;
 }
 return i5 | 0;
}

function _memset(i5, i6, i4) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i4 = i4 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i7 = 0;
 i3 = i5 + i4 | 0;
 i6 = i6 & 255;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((i4 | 0) >= 67) {
  while (i5 & 3) {
   HEAP8[i5 >> 0] = i6;
   i5 = i5 + 1 | 0;
  }
  i1 = i3 & -4 | 0;
  i2 = i1 - 64 | 0;
  i7 = i6 | i6 << 8 | i6 << 16 | i6 << 24;
  while ((i5 | 0) <= (i2 | 0)) {
   HEAP32[i5 >> 2] = i7;
   HEAP32[i5 + 4 >> 2] = i7;
   HEAP32[i5 + 8 >> 2] = i7;
   HEAP32[i5 + 12 >> 2] = i7;
   HEAP32[i5 + 16 >> 2] = i7;
   HEAP32[i5 + 20 >> 2] = i7;
   HEAP32[i5 + 24 >> 2] = i7;
   HEAP32[i5 + 28 >> 2] = i7;
   HEAP32[i5 + 32 >> 2] = i7;
   HEAP32[i5 + 36 >> 2] = i7;
   HEAP32[i5 + 40 >> 2] = i7;
   HEAP32[i5 + 44 >> 2] = i7;
   HEAP32[i5 + 48 >> 2] = i7;
   HEAP32[i5 + 52 >> 2] = i7;
   HEAP32[i5 + 56 >> 2] = i7;
   HEAP32[i5 + 60 >> 2] = i7;
   i5 = i5 + 64 | 0;
  }
  while ((i5 | 0) < (i1 | 0)) {
   HEAP32[i5 >> 2] = i7;
   i5 = i5 + 4 | 0;
  }
 }
 while ((i5 | 0) < (i3 | 0)) {
  HEAP8[i5 >> 0] = i6;
  i5 = i5 + 1 | 0;
 }
 return i3 - i4 | 0;
}

function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i3 = 0;
 i4 = i1;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 L1 : do if (!(i4 & 3)) i3 = 5; else {
  i2 = i4;
  while (1) {
   if (!(HEAP8[i1 >> 0] | 0)) {
    i1 = i2;
    break L1;
   }
   i1 = i1 + 1 | 0;
   i2 = i1;
   if (!(i2 & 3)) {
    i3 = 5;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 5) {
  while (1) {
   i2 = HEAP32[i1 >> 2] | 0;
   if (!((i2 & -2139062144 ^ -2139062144) & i2 + -16843009)) i1 = i1 + 4 | 0; else break;
  }
  if ((i2 & 255) << 24 >> 24) do i1 = i1 + 1 | 0; while ((HEAP8[i1 >> 0] | 0) != 0);
 }
 return i1 - i4 | 0;
}

function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  HEAP32[EMTSTACKTOP + 32 >> 2] = i4;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 200264 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  HEAP32[EMTSTACKTOP + 32 >> 2] = i4;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 203244 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  HEAP32[EMTSTACKTOP + 32 >> 2] = i4;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 196576 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  HEAP32[EMTSTACKTOP + 32 >> 2] = i4;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 200888 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function stackAlloc(i2) {
 i2 = i2 | 0;
 var i1 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + i2 | 0;
 STACKTOP = STACKTOP + 15 & -16;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(i2 | 0), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 return i1 | 0;
}

function ___stdout_write(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 179264 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _strcat(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 (tempInt = _strcpy(i1 + ((tempInt = _strlen(i1) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0) | 0, i2) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 return i1 | 0;
}

function ___stdio_write(i7, i2, i1) {
 i7 = i7 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i7;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 107848 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stdio_seek(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 176752 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stdio_read(i5, i6, i7) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i5;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i6;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i7;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 137392 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stpncpy(i2, i3, i1) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i3;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 130796 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _sn_write(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 192980 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _do_read(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i3;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 204644 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _main(i4, i5, i7) {
 i4 = i4 | 0;
 i5 = i5 | 0;
 i7 = i7 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i4;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i5;
  HEAP32[EMTSTACKTOP + 24 >> 2] = i7;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 92248 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _bitshift64Shl(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 << i1 | (i3 & (1 << i1) - 1 << 32 - i1) >>> 32 - i1;
  return i3 << i1;
 }
 tempRet0 = i3 << i1 - 32;
 return 0;
}

function _bitshift64Lshr(i3, i2, i1) {
 i3 = i3 | 0;
 i2 = i2 | 0;
 i1 = i1 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((i1 | 0) < 32) {
  tempRet0 = i2 >>> i1;
  return i3 >>> i1 | (i2 & (1 << i1) - 1) << 32 - i1;
 }
 tempRet0 = 0;
 return i2 >>> i1 - 32 | 0;
}

function _get_inv_t(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i3;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 118908 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _get_bool(i2, i3) {
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i2;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i3;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 134988 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stpcpy(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 146212 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _get_str(i5, i6) {
 i5 = i5 | 0;
 i6 = i6 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i5;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i6;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 100080 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _get_sf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 185600 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _strncpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 (tempInt = ___stpncpy(i1, i2, i3) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 return i1 | 0;
}

function _strcpy(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 (tempInt = ___stpcpy(i1, i2) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 return i1 | 0;
}

function establishStackSpace(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  HEAP32[EMTSTACKTOP + 16 >> 2] = i2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 205244 | 0);
}

function _llvm_bswap_i32(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 203708 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stdio_close(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 192436 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _charge_str(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 178880 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _turn_see(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 168304 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _ring_num(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 178116 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _nullstr(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207080 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _fflush(i2) {
 i2 = i2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 156324 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _sbrk(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 185256 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if (!__THREW__) {
  __THREW__ = i1;
  threwValue = i2;
 }
}

function _put_inv_t(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 204020 | 0);
}

function _put_bool(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 204240 | 0);
}

function _put_str(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 205928 | 0);
}

function runPostSets() {}
function ___emscripten_environ_constructor() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 205900 | 0);
}

function _leave(i1) {
 i1 = i1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = i1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 199180 | 0);
}

function ___errno_location() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207904 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_timezone() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208256 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_daylight() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208276 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_environ() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208312 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_tzname() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208332 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function b32() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207260 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b31() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207288 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b30() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207316 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b29() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207344 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b28() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207372 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b27() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207400 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b26() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207428 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b25() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207456 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b24() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207484 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b23() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207512 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b22() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207540 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b21() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207568 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b20() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207596 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b19() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207624 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b18() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207652 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b17() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207680 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b16() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207708 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b15() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207736 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b14() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207764 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b13() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207792 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b12() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207820 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b11() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207848 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b10() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207876 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b9() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207924 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b8() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207952 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b7() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 207980 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b6() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208008 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b5() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208036 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b4() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208064 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b3() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208092 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b2() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208120 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b1() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 208164 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function getEmtStackMax() {
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 return EMT_STACK_MAX | 0;
}

function emtStackSave() {
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 return EMTSTACKTOP | 0;
}

function getTempRet0() {
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 return tempRet0 | 0;
}

function _unconfuse() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 194900 | 0);
}

function _come_down() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 125856 | 0);
}

function _rollwand() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 196944 | 0);
}

function _visuals() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 128944 | 0);
}

function _swander() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 206516 | 0);
}

function _stomach() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 118120 | 0);
}

function _runners() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 148508 | 0);
}

function _nohaste() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 199644 | 0);
}

function _doctor() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 153108 | 0);
}

function _unsee() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 193740 | 0);
}

function _sight() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 188180 | 0);
}

function _land() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 198256 | 0);
}

function setEmtStackMax(i1) {
 i1 = i1 | 0;
 EMT_STACK_MAX = i1;
}

function emtStackRestore(i1) {
 i1 = i1 | 0;
 EMTSTACKTOP = i1;
}

function setAsyncState(i1) {
 i1 = i1 | 0;
 asyncState = i1;
}

function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}

function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}

function stackSave() {
 return STACKTOP | 0;
}

// EMSCRIPTEN_END_FUNCS

var FUNCTION_TABLE_X = [b1,_put_bool,_get_bool,_get_sf,_put_inv_t,_get_inv_t,_put_str,_get_str,_unconfuse,_come_down,_unsee,_sight,_land,___stdio_close,___stdio_write,___stdio_seek,___stdout_write,_sn_write,_nohaste,_runners,_doctor,_swander,_stomach,_leave,_nullstr,_ring_num,_charge_str,_rollwand,_turn_see
,_visuals,_SDL_Quit,___stdio_read,_do_read,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27
,b28,b29,b30,b31,b32];






  return { ___emscripten_environ_constructor: ___emscripten_environ_constructor, ___errno_location: ___errno_location, ___muldi3: ___muldi3, ___stdio_close: ___stdio_close, ___stdio_read: ___stdio_read, ___stdio_seek: ___stdio_seek, ___stdio_write: ___stdio_write, ___stdout_write: ___stdout_write, ___udivdi3: ___udivdi3, __get_daylight: __get_daylight, __get_environ: __get_environ, __get_timezone: __get_timezone, __get_tzname: __get_tzname, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, _charge_str: _charge_str, _come_down: _come_down, _do_read: _do_read, _doctor: _doctor, _fflush: _fflush, _free: _free, _get_bool: _get_bool, _get_inv_t: _get_inv_t, _get_sf: _get_sf, _get_str: _get_str, _i64Add: _i64Add, _i64Subtract: _i64Subtract, _land: _land, _leave: _leave, _llvm_bswap_i32: _llvm_bswap_i32, _main: _main, _malloc: _malloc, _memcpy: _memcpy, _memset: _memset, _nohaste: _nohaste, _nullstr: _nullstr, _put_bool: _put_bool, _put_inv_t: _put_inv_t, _put_str: _put_str, _ring_num: _ring_num, _rollwand: _rollwand, _runners: _runners, _sbrk: _sbrk, _sight: _sight, _sn_write: _sn_write, _stomach: _stomach, _swander: _swander, _turn_see: _turn_see, _unconfuse: _unconfuse, _unsee: _unsee, _visuals: _visuals, emtStackRestore: emtStackRestore, emtStackSave: emtStackSave, emterpret: emterpret, establishStackSpace: establishStackSpace, getEmtStackMax: getEmtStackMax, getTempRet0: getTempRet0, runPostSets: runPostSets, setAsyncState: setAsyncState, setEmtStackMax: setEmtStackMax, setTempRet0: setTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
})
;