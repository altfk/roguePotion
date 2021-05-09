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
  var segfault=env.segfault;
  var alignfault=env.alignfault;
  var ftfault=env.ftfault;
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

function _malloc($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i16$i = 0, $$0187$i = 0, $$0189$i = 0, $$0190$i = 0, $$0191$i = 0, $$0197 = 0, $$0199 = 0, $$02065$i$i = 0, $$0207$lcssa$i$i = 0, $$02074$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0, $$024372$i = 0, $$0286$i$i = 0, $$028711$i$i = 0, $$0288$lcssa$i$i = 0, $$028810$i$i = 0, $$0294$i$i = 0, $$0295$i$i = 0, $$0340$i = 0, $$034217$i = 0, $$0343$lcssa$i = 0, $$034316$i = 0, $$0345$i = 0, $$0351$i = 0, $$0357$i = 0, $$0358$i = 0, $$0360$i = 0, $$0361$i = 0, $$0367$i = 0, $$1194$i = 0, $$1194$i$be = 0, $$1194$i$ph = 0, $$1196$i = 0, $$1196$i$be = 0, $$1196$i$ph = 0, $$124471$i = 0, $$1290$i$i = 0, $$1290$i$i$be = 0, $$1290$i$i$ph = 0, $$1292$i$i = 0, $$1292$i$i$be = 0, $$1292$i$i$ph = 0, $$1341$i = 0, $$1346$i = 0, $$1362$i = 0, $$1369$i = 0, $$1369$i$be = 0, $$1369$i$ph = 0, $$1373$i = 0, $$1373$i$be = 0, $$1373$i$ph = 0, $$2234243136$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2353$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i203 = 0, $$3$i203218 = 0, $$3348$i = 0, $$3371$i = 0, $$4$lcssa$i = 0, $$420$i = 0, $$420$i$ph = 0, $$4236$i = 0, $$4349$lcssa$i = 0, $$434919$i = 0, $$434919$i$ph = 0, $$4355$i = 0, $$535618$i = 0, $$535618$i$ph = 0, $$723947$i = 0, $$748$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i17$i = 0, $$pre$i208 = 0, $$pre$i210 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i18$iZ2D = 0, $$pre$phi$i209Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi17$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre16$i$i = 0, $$sink = 0, $$sink325 = 0, $$sink326 = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $1059 = 0, $106 = 0, $1060 = 0, $1061 = 0, $1062 = 0, $1063 = 0, $1064 = 0, $1065 = 0, $1066 = 0, $1067 = 0, $1068 = 0, $1069 = 0, $107 = 0, $1070 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i207 = 0, $not$$i = 0, $or$cond$i = 0, $or$cond$i213 = 0, $or$cond1$i = 0, $or$cond11$i = 0, $or$cond2$i = 0, $or$cond2$i214 = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond51$i = 0, $or$cond6$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $or$cond8$not$i = 0, $spec$select$i = 0, $spec$select$i205 = 0, $spec$select1$i = 0, $spec$select3$i = 0, $spec$select49$i = 0, $spec$select7$i = 0, $spec$select9$i = 0, label = 0, sp = 0;
 label = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 $1 = sp;
 $2 = $0 >>> 0 < 245;
 do {
  if ($2) {
   $3 = $0 >>> 0 < 11;
   $4 = $0 + 11 | 0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10 | 0) == 0;
   if (!$11) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = $13 + $7 | 0;
    $15 = $14 << 1;
    $16 = 75308 + ($15 << 2) | 0;
    $17 = $16 + 8 | 0;
    $18 = (tempInt = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $19 = $18 + 8 | 0;
    $20 = (tempInt = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $21 = ($20 | 0) == ($16 | 0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      SAFE_HEAP_STORE(18817 * 4 | 0, $24 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     } else {
      $25 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $26 = $25 >>> 0 > $20 >>> 0;
      if ($26) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      }
      $27 = $20 + 12 | 0;
      $28 = (tempInt = SAFE_HEAP_LOAD($27 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $29 = ($28 | 0) == ($18 | 0);
      if ($29) {
       SAFE_HEAP_STORE($27 | 0, $16 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       SAFE_HEAP_STORE($17 | 0, $20 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       break;
      } else {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      }
     }
    } while (0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = $18 + 4 | 0;
    SAFE_HEAP_STORE($32 | 0, $31 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $33 = $18 + $30 | 0;
    $34 = $33 + 4 | 0;
    $35 = (tempInt = SAFE_HEAP_LOAD($34 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $36 = $35 | 1;
    SAFE_HEAP_STORE($34 | 0, $36 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $$0 = $19;
    STACKTOP = sp;
    return $$0 | 0;
   }
   $37 = (tempInt = SAFE_HEAP_LOAD(75276 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $38 = $6 >>> 0 > $37 >>> 0;
   if ($38) {
    $39 = ($9 | 0) == 0;
    if (!$39) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = 0 - $41 | 0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = 0 - $44 | 0;
     $46 = $44 & $45;
     $47 = $46 + -1 | 0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = $65 + $66 | 0;
     $68 = $67 << 1;
     $69 = 75308 + ($68 << 2) | 0;
     $70 = $69 + 8 | 0;
     $71 = (tempInt = SAFE_HEAP_LOAD($70 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $72 = $71 + 8 | 0;
     $73 = (tempInt = SAFE_HEAP_LOAD($72 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $74 = ($73 | 0) == ($69 | 0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       SAFE_HEAP_STORE(18817 * 4 | 0, $77 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $98 = $77;
      } else {
       $78 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $79 = $78 >>> 0 > $73 >>> 0;
       if ($79) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
       $80 = $73 + 12 | 0;
       $81 = (tempInt = SAFE_HEAP_LOAD($80 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $82 = ($81 | 0) == ($71 | 0);
       if ($82) {
        SAFE_HEAP_STORE($80 | 0, $69 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        SAFE_HEAP_STORE($70 | 0, $73 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $98 = $8;
        break;
       } else {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
      }
     } while (0);
     $83 = $67 << 3;
     $84 = $83 - $6 | 0;
     $85 = $6 | 3;
     $86 = $71 + 4 | 0;
     SAFE_HEAP_STORE($86 | 0, $85 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $87 = $71 + $6 | 0;
     $88 = $84 | 1;
     $89 = $87 + 4 | 0;
     SAFE_HEAP_STORE($89 | 0, $88 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $90 = $71 + $83 | 0;
     SAFE_HEAP_STORE($90 | 0, $84 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $91 = ($37 | 0) == 0;
     if (!$91) {
      $92 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = 75308 + ($94 << 2) | 0;
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97 | 0) == 0;
      if ($99) {
       $100 = $98 | $96;
       SAFE_HEAP_STORE(18817 * 4 | 0, $100 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $$pre = $95 + 8 | 0;
       $$0199 = $95;
       $$pre$phiZ2D = $$pre;
      } else {
       $101 = $95 + 8 | 0;
       $102 = (tempInt = SAFE_HEAP_LOAD($101 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $103 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $104 = $103 >>> 0 > $102 >>> 0;
       if ($104) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        $$0199 = $102;
        $$pre$phiZ2D = $101;
       }
      }
      SAFE_HEAP_STORE($$pre$phiZ2D | 0, $92 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $105 = $$0199 + 12 | 0;
      SAFE_HEAP_STORE($105 | 0, $92 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $106 = $92 + 8 | 0;
      SAFE_HEAP_STORE($106 | 0, $$0199 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $107 = $92 + 12 | 0;
      SAFE_HEAP_STORE($107 | 0, $95 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     SAFE_HEAP_STORE(75276 | 0, $84 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     SAFE_HEAP_STORE(75288 | 0, $87 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $$0 = $72;
     STACKTOP = sp;
     return $$0 | 0;
    }
    $108 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $109 = ($108 | 0) == 0;
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = 0 - $108 | 0;
     $111 = $108 & $110;
     $112 = $111 + -1 | 0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = $130 + $131 | 0;
     $133 = 75572 + ($132 << 2) | 0;
     $134 = (tempInt = SAFE_HEAP_LOAD($133 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $135 = $134 + 4 | 0;
     $136 = (tempInt = SAFE_HEAP_LOAD($135 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $137 = $136 & -8;
     $138 = $137 - $6 | 0;
     $$0189$i = $134;
     $$0190$i = $134;
     $$0191$i = $138;
     while (1) {
      $139 = $$0189$i + 16 | 0;
      $140 = (tempInt = SAFE_HEAP_LOAD($139 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $141 = ($140 | 0) == (0 | 0);
      if ($141) {
       $142 = $$0189$i + 20 | 0;
       $143 = (tempInt = SAFE_HEAP_LOAD($142 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $144 = ($143 | 0) == (0 | 0);
       if ($144) {
        break;
       } else {
        $146 = $143;
       }
      } else {
       $146 = $140;
      }
      $145 = $146 + 4 | 0;
      $147 = (tempInt = SAFE_HEAP_LOAD($145 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $148 = $147 & -8;
      $149 = $148 - $6 | 0;
      $150 = $149 >>> 0 < $$0191$i >>> 0;
      $spec$select$i = $150 ? $149 : $$0191$i;
      $spec$select1$i = $150 ? $146 : $$0190$i;
      $$0189$i = $146;
      $$0190$i = $spec$select1$i;
      $$0191$i = $spec$select$i;
     }
     $151 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $152 = $151 >>> 0 > $$0190$i >>> 0;
     if ($152) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $153 = $$0190$i + $6 | 0;
     $154 = $153 >>> 0 > $$0190$i >>> 0;
     if (!$154) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $155 = $$0190$i + 24 | 0;
     $156 = (tempInt = SAFE_HEAP_LOAD($155 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $157 = $$0190$i + 12 | 0;
     $158 = (tempInt = SAFE_HEAP_LOAD($157 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $159 = ($158 | 0) == ($$0190$i | 0);
     do {
      if ($159) {
       $169 = $$0190$i + 20 | 0;
       $170 = (tempInt = SAFE_HEAP_LOAD($169 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $171 = ($170 | 0) == (0 | 0);
       if ($171) {
        $172 = $$0190$i + 16 | 0;
        $173 = (tempInt = SAFE_HEAP_LOAD($172 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $174 = ($173 | 0) == (0 | 0);
        if ($174) {
         $$3$i = 0;
         break;
        } else {
         $$1194$i$ph = $173;
         $$1196$i$ph = $172;
        }
       } else {
        $$1194$i$ph = $170;
        $$1196$i$ph = $169;
       }
       $$1194$i = $$1194$i$ph;
       $$1196$i = $$1196$i$ph;
       while (1) {
        $175 = $$1194$i + 20 | 0;
        $176 = (tempInt = SAFE_HEAP_LOAD($175 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $177 = ($176 | 0) == (0 | 0);
        if ($177) {
         $178 = $$1194$i + 16 | 0;
         $179 = (tempInt = SAFE_HEAP_LOAD($178 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $180 = ($179 | 0) == (0 | 0);
         if ($180) {
          break;
         } else {
          $$1194$i$be = $179;
          $$1196$i$be = $178;
         }
        } else {
         $$1194$i$be = $176;
         $$1196$i$be = $175;
        }
        $$1194$i = $$1194$i$be;
        $$1196$i = $$1196$i$be;
       }
       $181 = $151 >>> 0 > $$1196$i >>> 0;
       if ($181) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        SAFE_HEAP_STORE($$1196$i | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $$3$i = $$1194$i;
        break;
       }
      } else {
       $160 = $$0190$i + 8 | 0;
       $161 = (tempInt = SAFE_HEAP_LOAD($160 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $162 = $151 >>> 0 > $161 >>> 0;
       if ($162) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
       $163 = $161 + 12 | 0;
       $164 = (tempInt = SAFE_HEAP_LOAD($163 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $165 = ($164 | 0) == ($$0190$i | 0);
       if (!$165) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
       $166 = $158 + 8 | 0;
       $167 = (tempInt = SAFE_HEAP_LOAD($166 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $168 = ($167 | 0) == ($$0190$i | 0);
       if ($168) {
        SAFE_HEAP_STORE($163 | 0, $158 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        SAFE_HEAP_STORE($166 | 0, $161 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $$3$i = $158;
        break;
       } else {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
      }
     } while (0);
     $182 = ($156 | 0) == (0 | 0);
     L78 : do {
      if (!$182) {
       $183 = $$0190$i + 28 | 0;
       $184 = (tempInt = SAFE_HEAP_LOAD($183 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $185 = 75572 + ($184 << 2) | 0;
       $186 = (tempInt = SAFE_HEAP_LOAD($185 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $187 = ($$0190$i | 0) == ($186 | 0);
       do {
        if ($187) {
         SAFE_HEAP_STORE($185 | 0, $$3$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $cond$i = ($$3$i | 0) == (0 | 0);
         if ($cond$i) {
          $188 = 1 << $184;
          $189 = $188 ^ -1;
          $190 = $108 & $189;
          SAFE_HEAP_STORE(75272 | 0, $190 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          break L78;
         }
        } else {
         $191 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $192 = $191 >>> 0 > $156 >>> 0;
         if ($192) {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         } else {
          $193 = $156 + 16 | 0;
          $194 = (tempInt = SAFE_HEAP_LOAD($193 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
          $195 = ($194 | 0) == ($$0190$i | 0);
          $196 = $156 + 20 | 0;
          $$sink = $195 ? $193 : $196;
          SAFE_HEAP_STORE($$sink | 0, $$3$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $197 = ($$3$i | 0) == (0 | 0);
          if ($197) {
           break L78;
          } else {
           break;
          }
         }
        }
       } while (0);
       $198 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $199 = $198 >>> 0 > $$3$i >>> 0;
       if ($199) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
       $200 = $$3$i + 24 | 0;
       SAFE_HEAP_STORE($200 | 0, $156 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $201 = $$0190$i + 16 | 0;
       $202 = (tempInt = SAFE_HEAP_LOAD($201 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $203 = ($202 | 0) == (0 | 0);
       do {
        if (!$203) {
         $204 = $198 >>> 0 > $202 >>> 0;
         if ($204) {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         } else {
          $205 = $$3$i + 16 | 0;
          SAFE_HEAP_STORE($205 | 0, $202 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $206 = $202 + 24 | 0;
          SAFE_HEAP_STORE($206 | 0, $$3$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          break;
         }
        }
       } while (0);
       $207 = $$0190$i + 20 | 0;
       $208 = (tempInt = SAFE_HEAP_LOAD($207 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $209 = ($208 | 0) == (0 | 0);
       if (!$209) {
        $210 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $211 = $210 >>> 0 > $208 >>> 0;
        if ($211) {
         _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        } else {
         $212 = $$3$i + 20 | 0;
         SAFE_HEAP_STORE($212 | 0, $208 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $213 = $208 + 24 | 0;
         SAFE_HEAP_STORE($213 | 0, $$3$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         break;
        }
       }
      }
     } while (0);
     $214 = $$0191$i >>> 0 < 16;
     if ($214) {
      $215 = $$0191$i + $6 | 0;
      $216 = $215 | 3;
      $217 = $$0190$i + 4 | 0;
      SAFE_HEAP_STORE($217 | 0, $216 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $218 = $$0190$i + $215 | 0;
      $219 = $218 + 4 | 0;
      $220 = (tempInt = SAFE_HEAP_LOAD($219 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $221 = $220 | 1;
      SAFE_HEAP_STORE($219 | 0, $221 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     } else {
      $222 = $6 | 3;
      $223 = $$0190$i + 4 | 0;
      SAFE_HEAP_STORE($223 | 0, $222 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $224 = $$0191$i | 1;
      $225 = $153 + 4 | 0;
      SAFE_HEAP_STORE($225 | 0, $224 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $226 = $153 + $$0191$i | 0;
      SAFE_HEAP_STORE($226 | 0, $$0191$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $227 = ($37 | 0) == 0;
      if (!$227) {
       $228 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = 75308 + ($230 << 2) | 0;
       $232 = 1 << $229;
       $233 = $232 & $8;
       $234 = ($233 | 0) == 0;
       if ($234) {
        $235 = $232 | $8;
        SAFE_HEAP_STORE(18817 * 4 | 0, $235 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $$pre$i = $231 + 8 | 0;
        $$0187$i = $231;
        $$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = $231 + 8 | 0;
        $237 = (tempInt = SAFE_HEAP_LOAD($236 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $238 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $239 = $238 >>> 0 > $237 >>> 0;
        if ($239) {
         _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        } else {
         $$0187$i = $237;
         $$pre$phi$iZ2D = $236;
        }
       }
       SAFE_HEAP_STORE($$pre$phi$iZ2D | 0, $228 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $240 = $$0187$i + 12 | 0;
       SAFE_HEAP_STORE($240 | 0, $228 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $241 = $228 + 8 | 0;
       SAFE_HEAP_STORE($241 | 0, $$0187$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $242 = $228 + 12 | 0;
       SAFE_HEAP_STORE($242 | 0, $231 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      }
      SAFE_HEAP_STORE(75276 | 0, $$0191$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      SAFE_HEAP_STORE(75288 | 0, $153 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $243 = $$0190$i + 8 | 0;
     $$0 = $243;
     STACKTOP = sp;
     return $$0 | 0;
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $244 = $0 >>> 0 > 4294967231;
   if ($244) {
    $$0197 = -1;
   } else {
    $245 = $0 + 11 | 0;
    $246 = $245 & -8;
    $247 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $248 = ($247 | 0) == 0;
    if ($248) {
     $$0197 = $246;
    } else {
     $249 = 0 - $246 | 0;
     $250 = $245 >>> 8;
     $251 = ($250 | 0) == 0;
     if ($251) {
      $$0357$i = 0;
     } else {
      $252 = $246 >>> 0 > 16777215;
      if ($252) {
       $$0357$i = 31;
      } else {
       $253 = $250 + 1048320 | 0;
       $254 = $253 >>> 16;
       $255 = $254 & 8;
       $256 = $250 << $255;
       $257 = $256 + 520192 | 0;
       $258 = $257 >>> 16;
       $259 = $258 & 4;
       $260 = $259 | $255;
       $261 = $256 << $259;
       $262 = $261 + 245760 | 0;
       $263 = $262 >>> 16;
       $264 = $263 & 2;
       $265 = $260 | $264;
       $266 = 14 - $265 | 0;
       $267 = $261 << $264;
       $268 = $267 >>> 15;
       $269 = $266 + $268 | 0;
       $270 = $269 << 1;
       $271 = $269 + 7 | 0;
       $272 = $246 >>> $271;
       $273 = $272 & 1;
       $274 = $273 | $270;
       $$0357$i = $274;
      }
     }
     $275 = 75572 + ($$0357$i << 2) | 0;
     $276 = (tempInt = SAFE_HEAP_LOAD($275 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $277 = ($276 | 0) == (0 | 0);
     L122 : do {
      if ($277) {
       $$2353$i = 0;
       $$3$i203 = 0;
       $$3348$i = $249;
       label = 85;
      } else {
       $278 = ($$0357$i | 0) == 31;
       $279 = $$0357$i >>> 1;
       $280 = 25 - $279 | 0;
       $281 = $278 ? 0 : $280;
       $282 = $246 << $281;
       $$0340$i = 0;
       $$0345$i = $249;
       $$0351$i = $276;
       $$0358$i = $282;
       $$0361$i = 0;
       while (1) {
        $283 = $$0351$i + 4 | 0;
        $284 = (tempInt = SAFE_HEAP_LOAD($283 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $285 = $284 & -8;
        $286 = $285 - $246 | 0;
        $287 = $286 >>> 0 < $$0345$i >>> 0;
        if ($287) {
         $288 = ($286 | 0) == 0;
         if ($288) {
          $$420$i$ph = $$0351$i;
          $$434919$i$ph = 0;
          $$535618$i$ph = $$0351$i;
          label = 89;
          break L122;
         } else {
          $$1341$i = $$0351$i;
          $$1346$i = $286;
         }
        } else {
         $$1341$i = $$0340$i;
         $$1346$i = $$0345$i;
        }
        $289 = $$0351$i + 20 | 0;
        $290 = (tempInt = SAFE_HEAP_LOAD($289 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $291 = $$0358$i >>> 31;
        $292 = ($$0351$i + 16 | 0) + ($291 << 2) | 0;
        $293 = (tempInt = SAFE_HEAP_LOAD($292 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $294 = ($290 | 0) == (0 | 0);
        $295 = ($290 | 0) == ($293 | 0);
        $or$cond2$i = $294 | $295;
        $$1362$i = $or$cond2$i ? $$0361$i : $290;
        $296 = ($293 | 0) == (0 | 0);
        $spec$select7$i = $$0358$i << 1;
        if ($296) {
         $$2353$i = $$1362$i;
         $$3$i203 = $$1341$i;
         $$3348$i = $$1346$i;
         label = 85;
         break;
        } else {
         $$0340$i = $$1341$i;
         $$0345$i = $$1346$i;
         $$0351$i = $293;
         $$0358$i = $spec$select7$i;
         $$0361$i = $$1362$i;
        }
       }
      }
     } while (0);
     if ((label | 0) == 85) {
      $297 = ($$2353$i | 0) == (0 | 0);
      $298 = ($$3$i203 | 0) == (0 | 0);
      $or$cond$i = $297 & $298;
      if ($or$cond$i) {
       $299 = 2 << $$0357$i;
       $300 = 0 - $299 | 0;
       $301 = $299 | $300;
       $302 = $301 & $247;
       $303 = ($302 | 0) == 0;
       if ($303) {
        $$0197 = $246;
        break;
       }
       $304 = 0 - $302 | 0;
       $305 = $302 & $304;
       $306 = $305 + -1 | 0;
       $307 = $306 >>> 12;
       $308 = $307 & 16;
       $309 = $306 >>> $308;
       $310 = $309 >>> 5;
       $311 = $310 & 8;
       $312 = $311 | $308;
       $313 = $309 >>> $311;
       $314 = $313 >>> 2;
       $315 = $314 & 4;
       $316 = $312 | $315;
       $317 = $313 >>> $315;
       $318 = $317 >>> 1;
       $319 = $318 & 2;
       $320 = $316 | $319;
       $321 = $317 >>> $319;
       $322 = $321 >>> 1;
       $323 = $322 & 1;
       $324 = $320 | $323;
       $325 = $321 >>> $323;
       $326 = $324 + $325 | 0;
       $327 = 75572 + ($326 << 2) | 0;
       $328 = (tempInt = SAFE_HEAP_LOAD($327 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $$3$i203218 = 0;
       $$4355$i = $328;
      } else {
       $$3$i203218 = $$3$i203;
       $$4355$i = $$2353$i;
      }
      $329 = ($$4355$i | 0) == (0 | 0);
      if ($329) {
       $$4$lcssa$i = $$3$i203218;
       $$4349$lcssa$i = $$3348$i;
      } else {
       $$420$i$ph = $$3$i203218;
       $$434919$i$ph = $$3348$i;
       $$535618$i$ph = $$4355$i;
       label = 89;
      }
     }
     if ((label | 0) == 89) {
      $$420$i = $$420$i$ph;
      $$434919$i = $$434919$i$ph;
      $$535618$i = $$535618$i$ph;
      while (1) {
       $330 = $$535618$i + 4 | 0;
       $331 = (tempInt = SAFE_HEAP_LOAD($330 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $332 = $331 & -8;
       $333 = $332 - $246 | 0;
       $334 = $333 >>> 0 < $$434919$i >>> 0;
       $spec$select$i205 = $334 ? $333 : $$434919$i;
       $spec$select3$i = $334 ? $$535618$i : $$420$i;
       $335 = $$535618$i + 16 | 0;
       $336 = (tempInt = SAFE_HEAP_LOAD($335 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $337 = ($336 | 0) == (0 | 0);
       if ($337) {
        $338 = $$535618$i + 20 | 0;
        $339 = (tempInt = SAFE_HEAP_LOAD($338 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $341 = $339;
       } else {
        $341 = $336;
       }
       $340 = ($341 | 0) == (0 | 0);
       if ($340) {
        $$4$lcssa$i = $spec$select3$i;
        $$4349$lcssa$i = $spec$select$i205;
        break;
       } else {
        $$420$i = $spec$select3$i;
        $$434919$i = $spec$select$i205;
        $$535618$i = $341;
       }
      }
     }
     $342 = ($$4$lcssa$i | 0) == (0 | 0);
     if ($342) {
      $$0197 = $246;
     } else {
      $343 = (tempInt = SAFE_HEAP_LOAD(75276 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $344 = $343 - $246 | 0;
      $345 = $$4349$lcssa$i >>> 0 < $344 >>> 0;
      if ($345) {
       $346 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $347 = $346 >>> 0 > $$4$lcssa$i >>> 0;
       if ($347) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
       $348 = $$4$lcssa$i + $246 | 0;
       $349 = $348 >>> 0 > $$4$lcssa$i >>> 0;
       if (!$349) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       }
       $350 = $$4$lcssa$i + 24 | 0;
       $351 = (tempInt = SAFE_HEAP_LOAD($350 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $352 = $$4$lcssa$i + 12 | 0;
       $353 = (tempInt = SAFE_HEAP_LOAD($352 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $354 = ($353 | 0) == ($$4$lcssa$i | 0);
       do {
        if ($354) {
         $364 = $$4$lcssa$i + 20 | 0;
         $365 = (tempInt = SAFE_HEAP_LOAD($364 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $366 = ($365 | 0) == (0 | 0);
         if ($366) {
          $367 = $$4$lcssa$i + 16 | 0;
          $368 = (tempInt = SAFE_HEAP_LOAD($367 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
          $369 = ($368 | 0) == (0 | 0);
          if ($369) {
           $$3371$i = 0;
           break;
          } else {
           $$1369$i$ph = $368;
           $$1373$i$ph = $367;
          }
         } else {
          $$1369$i$ph = $365;
          $$1373$i$ph = $364;
         }
         $$1369$i = $$1369$i$ph;
         $$1373$i = $$1373$i$ph;
         while (1) {
          $370 = $$1369$i + 20 | 0;
          $371 = (tempInt = SAFE_HEAP_LOAD($370 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
          $372 = ($371 | 0) == (0 | 0);
          if ($372) {
           $373 = $$1369$i + 16 | 0;
           $374 = (tempInt = SAFE_HEAP_LOAD($373 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $375 = ($374 | 0) == (0 | 0);
           if ($375) {
            break;
           } else {
            $$1369$i$be = $374;
            $$1373$i$be = $373;
           }
          } else {
           $$1369$i$be = $371;
           $$1373$i$be = $370;
          }
          $$1369$i = $$1369$i$be;
          $$1373$i = $$1373$i$be;
         }
         $376 = $346 >>> 0 > $$1373$i >>> 0;
         if ($376) {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         } else {
          SAFE_HEAP_STORE($$1373$i | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $$3371$i = $$1369$i;
          break;
         }
        } else {
         $355 = $$4$lcssa$i + 8 | 0;
         $356 = (tempInt = SAFE_HEAP_LOAD($355 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $357 = $346 >>> 0 > $356 >>> 0;
         if ($357) {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         }
         $358 = $356 + 12 | 0;
         $359 = (tempInt = SAFE_HEAP_LOAD($358 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $360 = ($359 | 0) == ($$4$lcssa$i | 0);
         if (!$360) {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         }
         $361 = $353 + 8 | 0;
         $362 = (tempInt = SAFE_HEAP_LOAD($361 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $363 = ($362 | 0) == ($$4$lcssa$i | 0);
         if ($363) {
          SAFE_HEAP_STORE($358 | 0, $353 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          SAFE_HEAP_STORE($361 | 0, $356 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $$3371$i = $353;
          break;
         } else {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         }
        }
       } while (0);
       $377 = ($351 | 0) == (0 | 0);
       L176 : do {
        if ($377) {
         $469 = $247;
        } else {
         $378 = $$4$lcssa$i + 28 | 0;
         $379 = (tempInt = SAFE_HEAP_LOAD($378 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $380 = 75572 + ($379 << 2) | 0;
         $381 = (tempInt = SAFE_HEAP_LOAD($380 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $382 = ($$4$lcssa$i | 0) == ($381 | 0);
         do {
          if ($382) {
           SAFE_HEAP_STORE($380 | 0, $$3371$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $cond$i207 = ($$3371$i | 0) == (0 | 0);
           if ($cond$i207) {
            $383 = 1 << $379;
            $384 = $383 ^ -1;
            $385 = $247 & $384;
            SAFE_HEAP_STORE(75272 | 0, $385 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $469 = $385;
            break L176;
           }
          } else {
           $386 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $387 = $386 >>> 0 > $351 >>> 0;
           if ($387) {
            _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           } else {
            $388 = $351 + 16 | 0;
            $389 = (tempInt = SAFE_HEAP_LOAD($388 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
            $390 = ($389 | 0) == ($$4$lcssa$i | 0);
            $391 = $351 + 20 | 0;
            $$sink325 = $390 ? $388 : $391;
            SAFE_HEAP_STORE($$sink325 | 0, $$3371$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $392 = ($$3371$i | 0) == (0 | 0);
            if ($392) {
             $469 = $247;
             break L176;
            } else {
             break;
            }
           }
          }
         } while (0);
         $393 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $394 = $393 >>> 0 > $$3371$i >>> 0;
         if ($394) {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         }
         $395 = $$3371$i + 24 | 0;
         SAFE_HEAP_STORE($395 | 0, $351 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $396 = $$4$lcssa$i + 16 | 0;
         $397 = (tempInt = SAFE_HEAP_LOAD($396 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $398 = ($397 | 0) == (0 | 0);
         do {
          if (!$398) {
           $399 = $393 >>> 0 > $397 >>> 0;
           if ($399) {
            _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           } else {
            $400 = $$3371$i + 16 | 0;
            SAFE_HEAP_STORE($400 | 0, $397 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $401 = $397 + 24 | 0;
            SAFE_HEAP_STORE($401 | 0, $$3371$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            break;
           }
          }
         } while (0);
         $402 = $$4$lcssa$i + 20 | 0;
         $403 = (tempInt = SAFE_HEAP_LOAD($402 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $404 = ($403 | 0) == (0 | 0);
         if ($404) {
          $469 = $247;
         } else {
          $405 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
          $406 = $405 >>> 0 > $403 >>> 0;
          if ($406) {
           _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          } else {
           $407 = $$3371$i + 20 | 0;
           SAFE_HEAP_STORE($407 | 0, $403 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $408 = $403 + 24 | 0;
           SAFE_HEAP_STORE($408 | 0, $$3371$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $469 = $247;
           break;
          }
         }
        }
       } while (0);
       $409 = $$4349$lcssa$i >>> 0 < 16;
       L200 : do {
        if ($409) {
         $410 = $$4349$lcssa$i + $246 | 0;
         $411 = $410 | 3;
         $412 = $$4$lcssa$i + 4 | 0;
         SAFE_HEAP_STORE($412 | 0, $411 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $413 = $$4$lcssa$i + $410 | 0;
         $414 = $413 + 4 | 0;
         $415 = (tempInt = SAFE_HEAP_LOAD($414 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $416 = $415 | 1;
         SAFE_HEAP_STORE($414 | 0, $416 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        } else {
         $417 = $246 | 3;
         $418 = $$4$lcssa$i + 4 | 0;
         SAFE_HEAP_STORE($418 | 0, $417 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $419 = $$4349$lcssa$i | 1;
         $420 = $348 + 4 | 0;
         SAFE_HEAP_STORE($420 | 0, $419 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $421 = $348 + $$4349$lcssa$i | 0;
         SAFE_HEAP_STORE($421 | 0, $$4349$lcssa$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $422 = $$4349$lcssa$i >>> 3;
         $423 = $$4349$lcssa$i >>> 0 < 256;
         if ($423) {
          $424 = $422 << 1;
          $425 = 75308 + ($424 << 2) | 0;
          $426 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
          $427 = 1 << $422;
          $428 = $426 & $427;
          $429 = ($428 | 0) == 0;
          if ($429) {
           $430 = $426 | $427;
           SAFE_HEAP_STORE(18817 * 4 | 0, $430 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $$pre$i208 = $425 + 8 | 0;
           $$0367$i = $425;
           $$pre$phi$i209Z2D = $$pre$i208;
          } else {
           $431 = $425 + 8 | 0;
           $432 = (tempInt = SAFE_HEAP_LOAD($431 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $433 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $434 = $433 >>> 0 > $432 >>> 0;
           if ($434) {
            _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           } else {
            $$0367$i = $432;
            $$pre$phi$i209Z2D = $431;
           }
          }
          SAFE_HEAP_STORE($$pre$phi$i209Z2D | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $435 = $$0367$i + 12 | 0;
          SAFE_HEAP_STORE($435 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $436 = $348 + 8 | 0;
          SAFE_HEAP_STORE($436 | 0, $$0367$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $437 = $348 + 12 | 0;
          SAFE_HEAP_STORE($437 | 0, $425 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          break;
         }
         $438 = $$4349$lcssa$i >>> 8;
         $439 = ($438 | 0) == 0;
         if ($439) {
          $$0360$i = 0;
         } else {
          $440 = $$4349$lcssa$i >>> 0 > 16777215;
          if ($440) {
           $$0360$i = 31;
          } else {
           $441 = $438 + 1048320 | 0;
           $442 = $441 >>> 16;
           $443 = $442 & 8;
           $444 = $438 << $443;
           $445 = $444 + 520192 | 0;
           $446 = $445 >>> 16;
           $447 = $446 & 4;
           $448 = $447 | $443;
           $449 = $444 << $447;
           $450 = $449 + 245760 | 0;
           $451 = $450 >>> 16;
           $452 = $451 & 2;
           $453 = $448 | $452;
           $454 = 14 - $453 | 0;
           $455 = $449 << $452;
           $456 = $455 >>> 15;
           $457 = $454 + $456 | 0;
           $458 = $457 << 1;
           $459 = $457 + 7 | 0;
           $460 = $$4349$lcssa$i >>> $459;
           $461 = $460 & 1;
           $462 = $461 | $458;
           $$0360$i = $462;
          }
         }
         $463 = 75572 + ($$0360$i << 2) | 0;
         $464 = $348 + 28 | 0;
         SAFE_HEAP_STORE($464 | 0, $$0360$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $465 = $348 + 16 | 0;
         $466 = $465 + 4 | 0;
         SAFE_HEAP_STORE($466 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         SAFE_HEAP_STORE($465 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $467 = 1 << $$0360$i;
         $468 = $469 & $467;
         $470 = ($468 | 0) == 0;
         if ($470) {
          $471 = $469 | $467;
          SAFE_HEAP_STORE(75272 | 0, $471 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          SAFE_HEAP_STORE($463 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $472 = $348 + 24 | 0;
          SAFE_HEAP_STORE($472 | 0, $463 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $473 = $348 + 12 | 0;
          SAFE_HEAP_STORE($473 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $474 = $348 + 8 | 0;
          SAFE_HEAP_STORE($474 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          break;
         }
         $475 = (tempInt = SAFE_HEAP_LOAD($463 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $476 = $475 + 4 | 0;
         $477 = (tempInt = SAFE_HEAP_LOAD($476 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $478 = $477 & -8;
         $479 = ($478 | 0) == ($$4349$lcssa$i | 0);
         L218 : do {
          if ($479) {
           $$0343$lcssa$i = $475;
          } else {
           $480 = ($$0360$i | 0) == 31;
           $481 = $$0360$i >>> 1;
           $482 = 25 - $481 | 0;
           $483 = $480 ? 0 : $482;
           $484 = $$4349$lcssa$i << $483;
           $$034217$i = $484;
           $$034316$i = $475;
           while (1) {
            $491 = $$034217$i >>> 31;
            $492 = ($$034316$i + 16 | 0) + ($491 << 2) | 0;
            $487 = (tempInt = SAFE_HEAP_LOAD($492 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
            $493 = ($487 | 0) == (0 | 0);
            if ($493) {
             break;
            }
            $485 = $$034217$i << 1;
            $486 = $487 + 4 | 0;
            $488 = (tempInt = SAFE_HEAP_LOAD($486 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
            $489 = $488 & -8;
            $490 = ($489 | 0) == ($$4349$lcssa$i | 0);
            if ($490) {
             $$0343$lcssa$i = $487;
             break L218;
            } else {
             $$034217$i = $485;
             $$034316$i = $487;
            }
           }
           $494 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $495 = $494 >>> 0 > $492 >>> 0;
           if ($495) {
            _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           } else {
            SAFE_HEAP_STORE($492 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $496 = $348 + 24 | 0;
            SAFE_HEAP_STORE($496 | 0, $$034316$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $497 = $348 + 12 | 0;
            SAFE_HEAP_STORE($497 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $498 = $348 + 8 | 0;
            SAFE_HEAP_STORE($498 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            break L200;
           }
          }
         } while (0);
         $499 = $$0343$lcssa$i + 8 | 0;
         $500 = (tempInt = SAFE_HEAP_LOAD($499 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $501 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $502 = $501 >>> 0 <= $$0343$lcssa$i >>> 0;
         $503 = $501 >>> 0 <= $500 >>> 0;
         $504 = $503 & $502;
         if ($504) {
          $505 = $500 + 12 | 0;
          SAFE_HEAP_STORE($505 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          SAFE_HEAP_STORE($499 | 0, $348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $506 = $348 + 8 | 0;
          SAFE_HEAP_STORE($506 | 0, $500 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $507 = $348 + 12 | 0;
          SAFE_HEAP_STORE($507 | 0, $$0343$lcssa$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          $508 = $348 + 24 | 0;
          SAFE_HEAP_STORE($508 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          break;
         } else {
          _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         }
        }
       } while (0);
       $509 = $$4$lcssa$i + 8 | 0;
       $$0 = $509;
       STACKTOP = sp;
       return $$0 | 0;
      } else {
       $$0197 = $246;
      }
     }
    }
   }
  }
 } while (0);
 $510 = (tempInt = SAFE_HEAP_LOAD(75276 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $511 = $510 >>> 0 < $$0197 >>> 0;
 if (!$511) {
  $512 = $510 - $$0197 | 0;
  $513 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $514 = $512 >>> 0 > 15;
  if ($514) {
   $515 = $513 + $$0197 | 0;
   SAFE_HEAP_STORE(75288 | 0, $515 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(75276 | 0, $512 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $516 = $512 | 1;
   $517 = $515 + 4 | 0;
   SAFE_HEAP_STORE($517 | 0, $516 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $518 = $513 + $510 | 0;
   SAFE_HEAP_STORE($518 | 0, $512 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $519 = $$0197 | 3;
   $520 = $513 + 4 | 0;
   SAFE_HEAP_STORE($520 | 0, $519 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  } else {
   SAFE_HEAP_STORE(75276 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(75288 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $521 = $510 | 3;
   $522 = $513 + 4 | 0;
   SAFE_HEAP_STORE($522 | 0, $521 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $523 = $513 + $510 | 0;
   $524 = $523 + 4 | 0;
   $525 = (tempInt = SAFE_HEAP_LOAD($524 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $526 = $525 | 1;
   SAFE_HEAP_STORE($524 | 0, $526 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  }
  $527 = $513 + 8 | 0;
  $$0 = $527;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $528 = (tempInt = SAFE_HEAP_LOAD(75280 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $529 = $528 >>> 0 > $$0197 >>> 0;
 if ($529) {
  $530 = $528 - $$0197 | 0;
  SAFE_HEAP_STORE(75280 | 0, $530 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $531 = (tempInt = SAFE_HEAP_LOAD(75292 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $532 = $531 + $$0197 | 0;
  SAFE_HEAP_STORE(75292 | 0, $532 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $533 = $530 | 1;
  $534 = $532 + 4 | 0;
  SAFE_HEAP_STORE($534 | 0, $533 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $535 = $$0197 | 3;
  $536 = $531 + 4 | 0;
  SAFE_HEAP_STORE($536 | 0, $535 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $537 = $531 + 8 | 0;
  $$0 = $537;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $538 = (tempInt = SAFE_HEAP_LOAD(18935 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $539 = ($538 | 0) == 0;
 if ($539) {
  SAFE_HEAP_STORE(75748 | 0, 4096 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  SAFE_HEAP_STORE(75744 | 0, 4096 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  SAFE_HEAP_STORE(75752 | 0, -1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  SAFE_HEAP_STORE(75756 | 0, -1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  SAFE_HEAP_STORE(75760 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  SAFE_HEAP_STORE(75712 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $540 = $1;
  $541 = $540 & -16;
  $542 = $541 ^ 1431655768;
  SAFE_HEAP_STORE(18935 * 4 | 0, $542 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $546 = 4096;
 } else {
  $$pre$i210 = (tempInt = SAFE_HEAP_LOAD(75748 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $546 = $$pre$i210;
 }
 $543 = $$0197 + 48 | 0;
 $544 = $$0197 + 47 | 0;
 $545 = $546 + $544 | 0;
 $547 = 0 - $546 | 0;
 $548 = $545 & $547;
 $549 = $548 >>> 0 > $$0197 >>> 0;
 if (!$549) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $550 = (tempInt = SAFE_HEAP_LOAD(75708 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $551 = ($550 | 0) == 0;
 if (!$551) {
  $552 = (tempInt = SAFE_HEAP_LOAD(75700 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $553 = $552 + $548 | 0;
  $554 = $553 >>> 0 <= $552 >>> 0;
  $555 = $553 >>> 0 > $550 >>> 0;
  $or$cond1$i = $554 | $555;
  if ($or$cond1$i) {
   $$0 = 0;
   STACKTOP = sp;
   return $$0 | 0;
  }
 }
 $556 = (tempInt = SAFE_HEAP_LOAD(75712 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $557 = $556 & 4;
 $558 = ($557 | 0) == 0;
 L257 : do {
  if ($558) {
   $559 = (tempInt = SAFE_HEAP_LOAD(75292 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $560 = ($559 | 0) == (0 | 0);
   L259 : do {
    if ($560) {
     label = 173;
    } else {
     $$0$i$i = 75716;
     while (1) {
      $561 = (tempInt = SAFE_HEAP_LOAD($$0$i$i | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $562 = $561 >>> 0 > $559 >>> 0;
      if (!$562) {
       $563 = $$0$i$i + 4 | 0;
       $564 = (tempInt = SAFE_HEAP_LOAD($563 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $565 = $561 + $564 | 0;
       $566 = $565 >>> 0 > $559 >>> 0;
       if ($566) {
        break;
       }
      }
      $567 = $$0$i$i + 8 | 0;
      $568 = (tempInt = SAFE_HEAP_LOAD($567 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $569 = ($568 | 0) == (0 | 0);
      if ($569) {
       label = 173;
       break L259;
      } else {
       $$0$i$i = $568;
      }
     }
     $592 = $545 - $528 | 0;
     $593 = $592 & $547;
     $594 = $593 >>> 0 < 2147483647;
     if ($594) {
      $595 = $$0$i$i + 4 | 0;
      $596 = (tempInt = _sbrk($593 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
      $597 = (tempInt = SAFE_HEAP_LOAD($$0$i$i | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $598 = (tempInt = SAFE_HEAP_LOAD($595 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $599 = $597 + $598 | 0;
      $600 = ($596 | 0) == ($599 | 0);
      if ($600) {
       $601 = ($596 | 0) == (-1 | 0);
       if ($601) {
        $$2234243136$i = $593;
       } else {
        $$723947$i = $593;
        $$748$i = $596;
        label = 190;
        break L257;
       }
      } else {
       $$2247$ph$i = $596;
       $$2253$ph$i = $593;
       label = 181;
      }
     } else {
      $$2234243136$i = 0;
     }
    }
   } while (0);
   do {
    if ((label | 0) == 173) {
     $570 = (tempInt = _sbrk(0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
     $571 = ($570 | 0) == (-1 | 0);
     if ($571) {
      $$2234243136$i = 0;
     } else {
      $572 = $570;
      $573 = (tempInt = SAFE_HEAP_LOAD(75744 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $574 = $573 + -1 | 0;
      $575 = $574 & $572;
      $576 = ($575 | 0) == 0;
      $577 = $574 + $572 | 0;
      $578 = 0 - $573 | 0;
      $579 = $577 & $578;
      $580 = $579 - $572 | 0;
      $581 = $576 ? 0 : $580;
      $spec$select49$i = $581 + $548 | 0;
      $582 = (tempInt = SAFE_HEAP_LOAD(75700 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $583 = $spec$select49$i + $582 | 0;
      $584 = $spec$select49$i >>> 0 > $$0197 >>> 0;
      $585 = $spec$select49$i >>> 0 < 2147483647;
      $or$cond$i213 = $584 & $585;
      if ($or$cond$i213) {
       $586 = (tempInt = SAFE_HEAP_LOAD(75708 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $587 = ($586 | 0) == 0;
       if (!$587) {
        $588 = $583 >>> 0 <= $582 >>> 0;
        $589 = $583 >>> 0 > $586 >>> 0;
        $or$cond2$i214 = $588 | $589;
        if ($or$cond2$i214) {
         $$2234243136$i = 0;
         break;
        }
       }
       $590 = (tempInt = _sbrk($spec$select49$i | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
       $591 = ($590 | 0) == ($570 | 0);
       if ($591) {
        $$723947$i = $spec$select49$i;
        $$748$i = $570;
        label = 190;
        break L257;
       } else {
        $$2247$ph$i = $590;
        $$2253$ph$i = $spec$select49$i;
        label = 181;
       }
      } else {
       $$2234243136$i = 0;
      }
     }
    }
   } while (0);
   do {
    if ((label | 0) == 181) {
     $602 = 0 - $$2253$ph$i | 0;
     $603 = ($$2247$ph$i | 0) != (-1 | 0);
     $604 = $$2253$ph$i >>> 0 < 2147483647;
     $or$cond7$i = $604 & $603;
     $605 = $543 >>> 0 > $$2253$ph$i >>> 0;
     $or$cond6$i = $605 & $or$cond7$i;
     if (!$or$cond6$i) {
      $615 = ($$2247$ph$i | 0) == (-1 | 0);
      if ($615) {
       $$2234243136$i = 0;
       break;
      } else {
       $$723947$i = $$2253$ph$i;
       $$748$i = $$2247$ph$i;
       label = 190;
       break L257;
      }
     }
     $606 = (tempInt = SAFE_HEAP_LOAD(75748 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $607 = $544 - $$2253$ph$i | 0;
     $608 = $607 + $606 | 0;
     $609 = 0 - $606 | 0;
     $610 = $608 & $609;
     $611 = $610 >>> 0 < 2147483647;
     if (!$611) {
      $$723947$i = $$2253$ph$i;
      $$748$i = $$2247$ph$i;
      label = 190;
      break L257;
     }
     $612 = (tempInt = _sbrk($610 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
     $613 = ($612 | 0) == (-1 | 0);
     if ($613) {
      (tempInt = _sbrk($602 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
      $$2234243136$i = 0;
      break;
     } else {
      $614 = $610 + $$2253$ph$i | 0;
      $$723947$i = $614;
      $$748$i = $$2247$ph$i;
      label = 190;
      break L257;
     }
    }
   } while (0);
   $616 = (tempInt = SAFE_HEAP_LOAD(75712 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $617 = $616 | 4;
   SAFE_HEAP_STORE(75712 | 0, $617 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $$4236$i = $$2234243136$i;
   label = 188;
  } else {
   $$4236$i = 0;
   label = 188;
  }
 } while (0);
 if ((label | 0) == 188) {
  $618 = $548 >>> 0 < 2147483647;
  if ($618) {
   $619 = (tempInt = _sbrk($548 | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
   $620 = (tempInt = _sbrk(0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
   $621 = ($619 | 0) != (-1 | 0);
   $622 = ($620 | 0) != (-1 | 0);
   $or$cond5$i = $621 & $622;
   $623 = $619 >>> 0 < $620 >>> 0;
   $or$cond8$i = $623 & $or$cond5$i;
   $624 = $620;
   $625 = $619;
   $626 = $624 - $625 | 0;
   $627 = $$0197 + 40 | 0;
   $628 = $626 >>> 0 > $627 >>> 0;
   $spec$select9$i = $628 ? $626 : $$4236$i;
   $or$cond8$not$i = $or$cond8$i ^ 1;
   $629 = ($619 | 0) == (-1 | 0);
   $not$$i = $628 ^ 1;
   $630 = $629 | $not$$i;
   $or$cond50$i = $630 | $or$cond8$not$i;
   if (!$or$cond50$i) {
    $$723947$i = $spec$select9$i;
    $$748$i = $619;
    label = 190;
   }
  }
 }
 if ((label | 0) == 190) {
  $631 = (tempInt = SAFE_HEAP_LOAD(75700 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $632 = $631 + $$723947$i | 0;
  SAFE_HEAP_STORE(75700 | 0, $632 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $633 = (tempInt = SAFE_HEAP_LOAD(75704 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $634 = $632 >>> 0 > $633 >>> 0;
  if ($634) {
   SAFE_HEAP_STORE(75704 | 0, $632 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  }
  $635 = (tempInt = SAFE_HEAP_LOAD(75292 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $636 = ($635 | 0) == (0 | 0);
  L294 : do {
   if ($636) {
    $637 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $638 = ($637 | 0) == (0 | 0);
    $639 = $$748$i >>> 0 < $637 >>> 0;
    $or$cond11$i = $638 | $639;
    if ($or$cond11$i) {
     SAFE_HEAP_STORE(75284 | 0, $$748$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    }
    SAFE_HEAP_STORE(75716 | 0, $$748$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75720 | 0, $$723947$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75728 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $640 = (tempInt = SAFE_HEAP_LOAD(18935 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    SAFE_HEAP_STORE(75304 | 0, $640 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75300 | 0, -1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75320 | 0, 75308 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75316 | 0, 75308 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75328 | 0, 75316 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75324 | 0, 75316 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75336 | 0, 75324 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75332 | 0, 75324 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75344 | 0, 75332 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75340 | 0, 75332 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75352 | 0, 75340 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75348 | 0, 75340 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75360 | 0, 75348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75356 | 0, 75348 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75368 | 0, 75356 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75364 | 0, 75356 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75376 | 0, 75364 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75372 | 0, 75364 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75384 | 0, 75372 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75380 | 0, 75372 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75392 | 0, 75380 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75388 | 0, 75380 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75400 | 0, 75388 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75396 | 0, 75388 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75408 | 0, 75396 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75404 | 0, 75396 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75416 | 0, 75404 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75412 | 0, 75404 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75424 | 0, 75412 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75420 | 0, 75412 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75432 | 0, 75420 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75428 | 0, 75420 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75440 | 0, 75428 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75436 | 0, 75428 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75448 | 0, 75436 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75444 | 0, 75436 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75456 | 0, 75444 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75452 | 0, 75444 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75464 | 0, 75452 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75460 | 0, 75452 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75472 | 0, 75460 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75468 | 0, 75460 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75480 | 0, 75468 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75476 | 0, 75468 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75488 | 0, 75476 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75484 | 0, 75476 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75496 | 0, 75484 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75492 | 0, 75484 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75504 | 0, 75492 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75500 | 0, 75492 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75512 | 0, 75500 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75508 | 0, 75500 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75520 | 0, 75508 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75516 | 0, 75508 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75528 | 0, 75516 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75524 | 0, 75516 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75536 | 0, 75524 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75532 | 0, 75524 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75544 | 0, 75532 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75540 | 0, 75532 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75552 | 0, 75540 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75548 | 0, 75540 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75560 | 0, 75548 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75556 | 0, 75548 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75568 | 0, 75556 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75564 | 0, 75556 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $641 = $$723947$i + -40 | 0;
    $642 = $$748$i + 8 | 0;
    $643 = $642;
    $644 = $643 & 7;
    $645 = ($644 | 0) == 0;
    $646 = 0 - $643 | 0;
    $647 = $646 & 7;
    $648 = $645 ? 0 : $647;
    $649 = $$748$i + $648 | 0;
    $650 = $641 - $648 | 0;
    SAFE_HEAP_STORE(75292 | 0, $649 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75280 | 0, $650 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $651 = $650 | 1;
    $652 = $649 + 4 | 0;
    SAFE_HEAP_STORE($652 | 0, $651 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $653 = $$748$i + $641 | 0;
    $654 = $653 + 4 | 0;
    SAFE_HEAP_STORE($654 | 0, 40 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $655 = (tempInt = SAFE_HEAP_LOAD(75756 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    SAFE_HEAP_STORE(75296 | 0, $655 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   } else {
    $$024372$i = 75716;
    while (1) {
     $656 = (tempInt = SAFE_HEAP_LOAD($$024372$i | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $657 = $$024372$i + 4 | 0;
     $658 = (tempInt = SAFE_HEAP_LOAD($657 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $659 = $656 + $658 | 0;
     $660 = ($$748$i | 0) == ($659 | 0);
     if ($660) {
      label = 199;
      break;
     }
     $661 = $$024372$i + 8 | 0;
     $662 = (tempInt = SAFE_HEAP_LOAD($661 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $663 = ($662 | 0) == (0 | 0);
     if ($663) {
      break;
     } else {
      $$024372$i = $662;
     }
    }
    if ((label | 0) == 199) {
     $664 = $$024372$i + 4 | 0;
     $665 = $$024372$i + 12 | 0;
     $666 = (tempInt = SAFE_HEAP_LOAD($665 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $667 = $666 & 8;
     $668 = ($667 | 0) == 0;
     if ($668) {
      $669 = $656 >>> 0 <= $635 >>> 0;
      $670 = $$748$i >>> 0 > $635 >>> 0;
      $or$cond51$i = $670 & $669;
      if ($or$cond51$i) {
       $671 = $658 + $$723947$i | 0;
       SAFE_HEAP_STORE($664 | 0, $671 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $672 = (tempInt = SAFE_HEAP_LOAD(75280 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $673 = $672 + $$723947$i | 0;
       $674 = $635 + 8 | 0;
       $675 = $674;
       $676 = $675 & 7;
       $677 = ($676 | 0) == 0;
       $678 = 0 - $675 | 0;
       $679 = $678 & 7;
       $680 = $677 ? 0 : $679;
       $681 = $635 + $680 | 0;
       $682 = $673 - $680 | 0;
       SAFE_HEAP_STORE(75292 | 0, $681 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       SAFE_HEAP_STORE(75280 | 0, $682 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $683 = $682 | 1;
       $684 = $681 + 4 | 0;
       SAFE_HEAP_STORE($684 | 0, $683 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $685 = $635 + $673 | 0;
       $686 = $685 + 4 | 0;
       SAFE_HEAP_STORE($686 | 0, 40 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $687 = (tempInt = SAFE_HEAP_LOAD(75756 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       SAFE_HEAP_STORE(75296 | 0, $687 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       break;
      }
     }
    }
    $688 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $689 = $$748$i >>> 0 < $688 >>> 0;
    if ($689) {
     SAFE_HEAP_STORE(75284 | 0, $$748$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $753 = $$748$i;
    } else {
     $753 = $688;
    }
    $690 = $$748$i + $$723947$i | 0;
    $$124471$i = 75716;
    while (1) {
     $691 = (tempInt = SAFE_HEAP_LOAD($$124471$i | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $692 = ($691 | 0) == ($690 | 0);
     if ($692) {
      label = 207;
      break;
     }
     $693 = $$124471$i + 8 | 0;
     $694 = (tempInt = SAFE_HEAP_LOAD($693 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $695 = ($694 | 0) == (0 | 0);
     if ($695) {
      break;
     } else {
      $$124471$i = $694;
     }
    }
    if ((label | 0) == 207) {
     $696 = $$124471$i + 12 | 0;
     $697 = (tempInt = SAFE_HEAP_LOAD($696 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $698 = $697 & 8;
     $699 = ($698 | 0) == 0;
     if ($699) {
      SAFE_HEAP_STORE($$124471$i | 0, $$748$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $700 = $$124471$i + 4 | 0;
      $701 = (tempInt = SAFE_HEAP_LOAD($700 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $702 = $701 + $$723947$i | 0;
      SAFE_HEAP_STORE($700 | 0, $702 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $703 = $$748$i + 8 | 0;
      $704 = $703;
      $705 = $704 & 7;
      $706 = ($705 | 0) == 0;
      $707 = 0 - $704 | 0;
      $708 = $707 & 7;
      $709 = $706 ? 0 : $708;
      $710 = $$748$i + $709 | 0;
      $711 = $690 + 8 | 0;
      $712 = $711;
      $713 = $712 & 7;
      $714 = ($713 | 0) == 0;
      $715 = 0 - $712 | 0;
      $716 = $715 & 7;
      $717 = $714 ? 0 : $716;
      $718 = $690 + $717 | 0;
      $719 = $718;
      $720 = $710;
      $721 = $719 - $720 | 0;
      $722 = $710 + $$0197 | 0;
      $723 = $721 - $$0197 | 0;
      $724 = $$0197 | 3;
      $725 = $710 + 4 | 0;
      SAFE_HEAP_STORE($725 | 0, $724 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $726 = ($635 | 0) == ($718 | 0);
      L317 : do {
       if ($726) {
        $727 = (tempInt = SAFE_HEAP_LOAD(75280 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $728 = $727 + $723 | 0;
        SAFE_HEAP_STORE(75280 | 0, $728 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        SAFE_HEAP_STORE(75292 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $729 = $728 | 1;
        $730 = $722 + 4 | 0;
        SAFE_HEAP_STORE($730 | 0, $729 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        $731 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $732 = ($731 | 0) == ($718 | 0);
        if ($732) {
         $733 = (tempInt = SAFE_HEAP_LOAD(75276 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $734 = $733 + $723 | 0;
         SAFE_HEAP_STORE(75276 | 0, $734 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         SAFE_HEAP_STORE(75288 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $735 = $734 | 1;
         $736 = $722 + 4 | 0;
         SAFE_HEAP_STORE($736 | 0, $735 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $737 = $722 + $734 | 0;
         SAFE_HEAP_STORE($737 | 0, $734 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         break;
        }
        $738 = $718 + 4 | 0;
        $739 = (tempInt = SAFE_HEAP_LOAD($738 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $740 = $739 & 3;
        $741 = ($740 | 0) == 1;
        if ($741) {
         $742 = $739 & -8;
         $743 = $739 >>> 3;
         $744 = $739 >>> 0 < 256;
         L325 : do {
          if ($744) {
           $745 = $718 + 8 | 0;
           $746 = (tempInt = SAFE_HEAP_LOAD($745 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $747 = $718 + 12 | 0;
           $748 = (tempInt = SAFE_HEAP_LOAD($747 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $749 = $743 << 1;
           $750 = 75308 + ($749 << 2) | 0;
           $751 = ($746 | 0) == ($750 | 0);
           do {
            if (!$751) {
             $752 = $753 >>> 0 > $746 >>> 0;
             if ($752) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             }
             $754 = $746 + 12 | 0;
             $755 = (tempInt = SAFE_HEAP_LOAD($754 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $756 = ($755 | 0) == ($718 | 0);
             if ($756) {
              break;
             }
             _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            }
           } while (0);
           $757 = ($748 | 0) == ($746 | 0);
           if ($757) {
            $758 = 1 << $743;
            $759 = $758 ^ -1;
            $760 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
            $761 = $760 & $759;
            SAFE_HEAP_STORE(18817 * 4 | 0, $761 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            break;
           }
           $762 = ($748 | 0) == ($750 | 0);
           do {
            if ($762) {
             $$pre16$i$i = $748 + 8 | 0;
             $$pre$phi17$i$iZ2D = $$pre16$i$i;
            } else {
             $763 = $753 >>> 0 > $748 >>> 0;
             if ($763) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             }
             $764 = $748 + 8 | 0;
             $765 = (tempInt = SAFE_HEAP_LOAD($764 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $766 = ($765 | 0) == ($718 | 0);
             if ($766) {
              $$pre$phi17$i$iZ2D = $764;
              break;
             }
             _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            }
           } while (0);
           $767 = $746 + 12 | 0;
           SAFE_HEAP_STORE($767 | 0, $748 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           SAFE_HEAP_STORE($$pre$phi17$i$iZ2D | 0, $746 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          } else {
           $768 = $718 + 24 | 0;
           $769 = (tempInt = SAFE_HEAP_LOAD($768 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $770 = $718 + 12 | 0;
           $771 = (tempInt = SAFE_HEAP_LOAD($770 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $772 = ($771 | 0) == ($718 | 0);
           do {
            if ($772) {
             $782 = $718 + 16 | 0;
             $783 = $782 + 4 | 0;
             $784 = (tempInt = SAFE_HEAP_LOAD($783 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $785 = ($784 | 0) == (0 | 0);
             if ($785) {
              $786 = (tempInt = SAFE_HEAP_LOAD($782 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
              $787 = ($786 | 0) == (0 | 0);
              if ($787) {
               $$3$i$i = 0;
               break;
              } else {
               $$1290$i$i$ph = $786;
               $$1292$i$i$ph = $782;
              }
             } else {
              $$1290$i$i$ph = $784;
              $$1292$i$i$ph = $783;
             }
             $$1290$i$i = $$1290$i$i$ph;
             $$1292$i$i = $$1292$i$i$ph;
             while (1) {
              $788 = $$1290$i$i + 20 | 0;
              $789 = (tempInt = SAFE_HEAP_LOAD($788 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
              $790 = ($789 | 0) == (0 | 0);
              if ($790) {
               $791 = $$1290$i$i + 16 | 0;
               $792 = (tempInt = SAFE_HEAP_LOAD($791 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
               $793 = ($792 | 0) == (0 | 0);
               if ($793) {
                break;
               } else {
                $$1290$i$i$be = $792;
                $$1292$i$i$be = $791;
               }
              } else {
               $$1290$i$i$be = $789;
               $$1292$i$i$be = $788;
              }
              $$1290$i$i = $$1290$i$i$be;
              $$1292$i$i = $$1292$i$i$be;
             }
             $794 = $753 >>> 0 > $$1292$i$i >>> 0;
             if ($794) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             } else {
              SAFE_HEAP_STORE($$1292$i$i | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
              $$3$i$i = $$1290$i$i;
              break;
             }
            } else {
             $773 = $718 + 8 | 0;
             $774 = (tempInt = SAFE_HEAP_LOAD($773 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $775 = $753 >>> 0 > $774 >>> 0;
             if ($775) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             }
             $776 = $774 + 12 | 0;
             $777 = (tempInt = SAFE_HEAP_LOAD($776 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $778 = ($777 | 0) == ($718 | 0);
             if (!$778) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             }
             $779 = $771 + 8 | 0;
             $780 = (tempInt = SAFE_HEAP_LOAD($779 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $781 = ($780 | 0) == ($718 | 0);
             if ($781) {
              SAFE_HEAP_STORE($776 | 0, $771 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
              SAFE_HEAP_STORE($779 | 0, $774 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
              $$3$i$i = $771;
              break;
             } else {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             }
            }
           } while (0);
           $795 = ($769 | 0) == (0 | 0);
           if ($795) {
            break;
           }
           $796 = $718 + 28 | 0;
           $797 = (tempInt = SAFE_HEAP_LOAD($796 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $798 = 75572 + ($797 << 2) | 0;
           $799 = (tempInt = SAFE_HEAP_LOAD($798 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $800 = ($799 | 0) == ($718 | 0);
           do {
            if ($800) {
             SAFE_HEAP_STORE($798 | 0, $$3$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             $cond$i$i = ($$3$i$i | 0) == (0 | 0);
             if (!$cond$i$i) {
              break;
             }
             $801 = 1 << $797;
             $802 = $801 ^ -1;
             $803 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $804 = $803 & $802;
             SAFE_HEAP_STORE(75272 | 0, $804 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             break L325;
            } else {
             $805 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
             $806 = $805 >>> 0 > $769 >>> 0;
             if ($806) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             } else {
              $807 = $769 + 16 | 0;
              $808 = (tempInt = SAFE_HEAP_LOAD($807 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
              $809 = ($808 | 0) == ($718 | 0);
              $810 = $769 + 20 | 0;
              $$sink326 = $809 ? $807 : $810;
              SAFE_HEAP_STORE($$sink326 | 0, $$3$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
              $811 = ($$3$i$i | 0) == (0 | 0);
              if ($811) {
               break L325;
              } else {
               break;
              }
             }
            }
           } while (0);
           $812 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $813 = $812 >>> 0 > $$3$i$i >>> 0;
           if ($813) {
            _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           }
           $814 = $$3$i$i + 24 | 0;
           SAFE_HEAP_STORE($814 | 0, $769 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $815 = $718 + 16 | 0;
           $816 = (tempInt = SAFE_HEAP_LOAD($815 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $817 = ($816 | 0) == (0 | 0);
           do {
            if (!$817) {
             $818 = $812 >>> 0 > $816 >>> 0;
             if ($818) {
              _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
             } else {
              $819 = $$3$i$i + 16 | 0;
              SAFE_HEAP_STORE($819 | 0, $816 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
              $820 = $816 + 24 | 0;
              SAFE_HEAP_STORE($820 | 0, $$3$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
              break;
             }
            }
           } while (0);
           $821 = $815 + 4 | 0;
           $822 = (tempInt = SAFE_HEAP_LOAD($821 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $823 = ($822 | 0) == (0 | 0);
           if ($823) {
            break;
           }
           $824 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $825 = $824 >>> 0 > $822 >>> 0;
           if ($825) {
            _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           } else {
            $826 = $$3$i$i + 20 | 0;
            SAFE_HEAP_STORE($826 | 0, $822 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            $827 = $822 + 24 | 0;
            SAFE_HEAP_STORE($827 | 0, $$3$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
            break;
           }
          }
         } while (0);
         $828 = $718 + $742 | 0;
         $829 = $742 + $723 | 0;
         $$0$i16$i = $828;
         $$0286$i$i = $829;
        } else {
         $$0$i16$i = $718;
         $$0286$i$i = $723;
        }
        $830 = $$0$i16$i + 4 | 0;
        $831 = (tempInt = SAFE_HEAP_LOAD($830 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $832 = $831 & -2;
        SAFE_HEAP_STORE($830 | 0, $832 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $833 = $$0286$i$i | 1;
        $834 = $722 + 4 | 0;
        SAFE_HEAP_STORE($834 | 0, $833 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $835 = $722 + $$0286$i$i | 0;
        SAFE_HEAP_STORE($835 | 0, $$0286$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $836 = $$0286$i$i >>> 3;
        $837 = $$0286$i$i >>> 0 < 256;
        if ($837) {
         $838 = $836 << 1;
         $839 = 75308 + ($838 << 2) | 0;
         $840 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
         $841 = 1 << $836;
         $842 = $840 & $841;
         $843 = ($842 | 0) == 0;
         do {
          if ($843) {
           $844 = $840 | $841;
           SAFE_HEAP_STORE(18817 * 4 | 0, $844 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $$pre$i17$i = $839 + 8 | 0;
           $$0294$i$i = $839;
           $$pre$phi$i18$iZ2D = $$pre$i17$i;
          } else {
           $845 = $839 + 8 | 0;
           $846 = (tempInt = SAFE_HEAP_LOAD($845 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $847 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $848 = $847 >>> 0 > $846 >>> 0;
           if (!$848) {
            $$0294$i$i = $846;
            $$pre$phi$i18$iZ2D = $845;
            break;
           }
           _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          }
         } while (0);
         SAFE_HEAP_STORE($$pre$phi$i18$iZ2D | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $849 = $$0294$i$i + 12 | 0;
         SAFE_HEAP_STORE($849 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $850 = $722 + 8 | 0;
         SAFE_HEAP_STORE($850 | 0, $$0294$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $851 = $722 + 12 | 0;
         SAFE_HEAP_STORE($851 | 0, $839 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         break;
        }
        $852 = $$0286$i$i >>> 8;
        $853 = ($852 | 0) == 0;
        do {
         if ($853) {
          $$0295$i$i = 0;
         } else {
          $854 = $$0286$i$i >>> 0 > 16777215;
          if ($854) {
           $$0295$i$i = 31;
           break;
          }
          $855 = $852 + 1048320 | 0;
          $856 = $855 >>> 16;
          $857 = $856 & 8;
          $858 = $852 << $857;
          $859 = $858 + 520192 | 0;
          $860 = $859 >>> 16;
          $861 = $860 & 4;
          $862 = $861 | $857;
          $863 = $858 << $861;
          $864 = $863 + 245760 | 0;
          $865 = $864 >>> 16;
          $866 = $865 & 2;
          $867 = $862 | $866;
          $868 = 14 - $867 | 0;
          $869 = $863 << $866;
          $870 = $869 >>> 15;
          $871 = $868 + $870 | 0;
          $872 = $871 << 1;
          $873 = $871 + 7 | 0;
          $874 = $$0286$i$i >>> $873;
          $875 = $874 & 1;
          $876 = $875 | $872;
          $$0295$i$i = $876;
         }
        } while (0);
        $877 = 75572 + ($$0295$i$i << 2) | 0;
        $878 = $722 + 28 | 0;
        SAFE_HEAP_STORE($878 | 0, $$0295$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $879 = $722 + 16 | 0;
        $880 = $879 + 4 | 0;
        SAFE_HEAP_STORE($880 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        SAFE_HEAP_STORE($879 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $881 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $882 = 1 << $$0295$i$i;
        $883 = $881 & $882;
        $884 = ($883 | 0) == 0;
        if ($884) {
         $885 = $881 | $882;
         SAFE_HEAP_STORE(75272 | 0, $885 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         SAFE_HEAP_STORE($877 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $886 = $722 + 24 | 0;
         SAFE_HEAP_STORE($886 | 0, $877 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $887 = $722 + 12 | 0;
         SAFE_HEAP_STORE($887 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $888 = $722 + 8 | 0;
         SAFE_HEAP_STORE($888 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         break;
        }
        $889 = (tempInt = SAFE_HEAP_LOAD($877 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $890 = $889 + 4 | 0;
        $891 = (tempInt = SAFE_HEAP_LOAD($890 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $892 = $891 & -8;
        $893 = ($892 | 0) == ($$0286$i$i | 0);
        L410 : do {
         if ($893) {
          $$0288$lcssa$i$i = $889;
         } else {
          $894 = ($$0295$i$i | 0) == 31;
          $895 = $$0295$i$i >>> 1;
          $896 = 25 - $895 | 0;
          $897 = $894 ? 0 : $896;
          $898 = $$0286$i$i << $897;
          $$028711$i$i = $898;
          $$028810$i$i = $889;
          while (1) {
           $905 = $$028711$i$i >>> 31;
           $906 = ($$028810$i$i + 16 | 0) + ($905 << 2) | 0;
           $901 = (tempInt = SAFE_HEAP_LOAD($906 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $907 = ($901 | 0) == (0 | 0);
           if ($907) {
            break;
           }
           $899 = $$028711$i$i << 1;
           $900 = $901 + 4 | 0;
           $902 = (tempInt = SAFE_HEAP_LOAD($900 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
           $903 = $902 & -8;
           $904 = ($903 | 0) == ($$0286$i$i | 0);
           if ($904) {
            $$0288$lcssa$i$i = $901;
            break L410;
           } else {
            $$028711$i$i = $899;
            $$028810$i$i = $901;
           }
          }
          $908 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
          $909 = $908 >>> 0 > $906 >>> 0;
          if ($909) {
           _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
          } else {
           SAFE_HEAP_STORE($906 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $910 = $722 + 24 | 0;
           SAFE_HEAP_STORE($910 | 0, $$028810$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $911 = $722 + 12 | 0;
           SAFE_HEAP_STORE($911 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           $912 = $722 + 8 | 0;
           SAFE_HEAP_STORE($912 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
           break L317;
          }
         }
        } while (0);
        $913 = $$0288$lcssa$i$i + 8 | 0;
        $914 = (tempInt = SAFE_HEAP_LOAD($913 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $915 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $916 = $915 >>> 0 <= $$0288$lcssa$i$i >>> 0;
        $917 = $915 >>> 0 <= $914 >>> 0;
        $918 = $917 & $916;
        if ($918) {
         $919 = $914 + 12 | 0;
         SAFE_HEAP_STORE($919 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         SAFE_HEAP_STORE($913 | 0, $722 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $920 = $722 + 8 | 0;
         SAFE_HEAP_STORE($920 | 0, $914 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $921 = $722 + 12 | 0;
         SAFE_HEAP_STORE($921 | 0, $$0288$lcssa$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         $922 = $722 + 24 | 0;
         SAFE_HEAP_STORE($922 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
         break;
        } else {
         _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        }
       }
      } while (0);
      $1059 = $710 + 8 | 0;
      $$0 = $1059;
      STACKTOP = sp;
      return $$0 | 0;
     }
    }
    $$0$i$i$i = 75716;
    while (1) {
     $923 = (tempInt = SAFE_HEAP_LOAD($$0$i$i$i | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $924 = $923 >>> 0 > $635 >>> 0;
     if (!$924) {
      $925 = $$0$i$i$i + 4 | 0;
      $926 = (tempInt = SAFE_HEAP_LOAD($925 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $927 = $923 + $926 | 0;
      $928 = $927 >>> 0 > $635 >>> 0;
      if ($928) {
       break;
      }
     }
     $929 = $$0$i$i$i + 8 | 0;
     $930 = (tempInt = SAFE_HEAP_LOAD($929 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $$0$i$i$i = $930;
    }
    $931 = $927 + -47 | 0;
    $932 = $931 + 8 | 0;
    $933 = $932;
    $934 = $933 & 7;
    $935 = ($934 | 0) == 0;
    $936 = 0 - $933 | 0;
    $937 = $936 & 7;
    $938 = $935 ? 0 : $937;
    $939 = $931 + $938 | 0;
    $940 = $635 + 16 | 0;
    $941 = $939 >>> 0 < $940 >>> 0;
    $942 = $941 ? $635 : $939;
    $943 = $942 + 8 | 0;
    $944 = $942 + 24 | 0;
    $945 = $$723947$i + -40 | 0;
    $946 = $$748$i + 8 | 0;
    $947 = $946;
    $948 = $947 & 7;
    $949 = ($948 | 0) == 0;
    $950 = 0 - $947 | 0;
    $951 = $950 & 7;
    $952 = $949 ? 0 : $951;
    $953 = $$748$i + $952 | 0;
    $954 = $945 - $952 | 0;
    SAFE_HEAP_STORE(75292 | 0, $953 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75280 | 0, $954 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $955 = $954 | 1;
    $956 = $953 + 4 | 0;
    SAFE_HEAP_STORE($956 | 0, $955 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $957 = $$748$i + $945 | 0;
    $958 = $957 + 4 | 0;
    SAFE_HEAP_STORE($958 | 0, 40 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $959 = (tempInt = SAFE_HEAP_LOAD(75756 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    SAFE_HEAP_STORE(75296 | 0, $959 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $960 = $942 + 4 | 0;
    SAFE_HEAP_STORE($960 | 0, 27 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($943 | 0, (tempInt = SAFE_HEAP_LOAD(75716 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($943 + 4 | 0, (tempInt = SAFE_HEAP_LOAD(75716 + 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($943 + 8 | 0, (tempInt = SAFE_HEAP_LOAD(75716 + 8 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($943 + 12 | 0, (tempInt = SAFE_HEAP_LOAD(75716 + 12 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75716 | 0, $$748$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75720 | 0, $$723947$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75728 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE(75724 | 0, $943 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $962 = $944;
    while (1) {
     $961 = $962 + 4 | 0;
     SAFE_HEAP_STORE($961 | 0, 7 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $963 = $962 + 8 | 0;
     $964 = $963 >>> 0 < $927 >>> 0;
     if ($964) {
      $962 = $961;
     } else {
      break;
     }
    }
    $965 = ($942 | 0) == ($635 | 0);
    if (!$965) {
     $966 = $942;
     $967 = $635;
     $968 = $966 - $967 | 0;
     $969 = (tempInt = SAFE_HEAP_LOAD($960 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $970 = $969 & -2;
     SAFE_HEAP_STORE($960 | 0, $970 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $971 = $968 | 1;
     $972 = $635 + 4 | 0;
     SAFE_HEAP_STORE($972 | 0, $971 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     SAFE_HEAP_STORE($942 | 0, $968 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $973 = $968 >>> 3;
     $974 = $968 >>> 0 < 256;
     if ($974) {
      $975 = $973 << 1;
      $976 = 75308 + ($975 << 2) | 0;
      $977 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $978 = 1 << $973;
      $979 = $977 & $978;
      $980 = ($979 | 0) == 0;
      if ($980) {
       $981 = $977 | $978;
       SAFE_HEAP_STORE(18817 * 4 | 0, $981 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $$pre$i$i = $976 + 8 | 0;
       $$0211$i$i = $976;
       $$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $982 = $976 + 8 | 0;
       $983 = (tempInt = SAFE_HEAP_LOAD($982 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $984 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $985 = $984 >>> 0 > $983 >>> 0;
       if ($985) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        $$0211$i$i = $983;
        $$pre$phi$i$iZ2D = $982;
       }
      }
      SAFE_HEAP_STORE($$pre$phi$i$iZ2D | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $986 = $$0211$i$i + 12 | 0;
      SAFE_HEAP_STORE($986 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $987 = $635 + 8 | 0;
      SAFE_HEAP_STORE($987 | 0, $$0211$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $988 = $635 + 12 | 0;
      SAFE_HEAP_STORE($988 | 0, $976 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      break;
     }
     $989 = $968 >>> 8;
     $990 = ($989 | 0) == 0;
     if ($990) {
      $$0212$i$i = 0;
     } else {
      $991 = $968 >>> 0 > 16777215;
      if ($991) {
       $$0212$i$i = 31;
      } else {
       $992 = $989 + 1048320 | 0;
       $993 = $992 >>> 16;
       $994 = $993 & 8;
       $995 = $989 << $994;
       $996 = $995 + 520192 | 0;
       $997 = $996 >>> 16;
       $998 = $997 & 4;
       $999 = $998 | $994;
       $1000 = $995 << $998;
       $1001 = $1000 + 245760 | 0;
       $1002 = $1001 >>> 16;
       $1003 = $1002 & 2;
       $1004 = $999 | $1003;
       $1005 = 14 - $1004 | 0;
       $1006 = $1000 << $1003;
       $1007 = $1006 >>> 15;
       $1008 = $1005 + $1007 | 0;
       $1009 = $1008 << 1;
       $1010 = $1008 + 7 | 0;
       $1011 = $968 >>> $1010;
       $1012 = $1011 & 1;
       $1013 = $1012 | $1009;
       $$0212$i$i = $1013;
      }
     }
     $1014 = 75572 + ($$0212$i$i << 2) | 0;
     $1015 = $635 + 28 | 0;
     SAFE_HEAP_STORE($1015 | 0, $$0212$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $1016 = $635 + 20 | 0;
     SAFE_HEAP_STORE($1016 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     SAFE_HEAP_STORE($940 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $1017 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $1018 = 1 << $$0212$i$i;
     $1019 = $1017 & $1018;
     $1020 = ($1019 | 0) == 0;
     if ($1020) {
      $1021 = $1017 | $1018;
      SAFE_HEAP_STORE(75272 | 0, $1021 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      SAFE_HEAP_STORE($1014 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $1022 = $635 + 24 | 0;
      SAFE_HEAP_STORE($1022 | 0, $1014 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $1023 = $635 + 12 | 0;
      SAFE_HEAP_STORE($1023 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $1024 = $635 + 8 | 0;
      SAFE_HEAP_STORE($1024 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      break;
     }
     $1025 = (tempInt = SAFE_HEAP_LOAD($1014 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $1026 = $1025 + 4 | 0;
     $1027 = (tempInt = SAFE_HEAP_LOAD($1026 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $1028 = $1027 & -8;
     $1029 = ($1028 | 0) == ($968 | 0);
     L451 : do {
      if ($1029) {
       $$0207$lcssa$i$i = $1025;
      } else {
       $1030 = ($$0212$i$i | 0) == 31;
       $1031 = $$0212$i$i >>> 1;
       $1032 = 25 - $1031 | 0;
       $1033 = $1030 ? 0 : $1032;
       $1034 = $968 << $1033;
       $$02065$i$i = $1034;
       $$02074$i$i = $1025;
       while (1) {
        $1041 = $$02065$i$i >>> 31;
        $1042 = ($$02074$i$i + 16 | 0) + ($1041 << 2) | 0;
        $1037 = (tempInt = SAFE_HEAP_LOAD($1042 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $1043 = ($1037 | 0) == (0 | 0);
        if ($1043) {
         break;
        }
        $1035 = $$02065$i$i << 1;
        $1036 = $1037 + 4 | 0;
        $1038 = (tempInt = SAFE_HEAP_LOAD($1036 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $1039 = $1038 & -8;
        $1040 = ($1039 | 0) == ($968 | 0);
        if ($1040) {
         $$0207$lcssa$i$i = $1037;
         break L451;
        } else {
         $$02065$i$i = $1035;
         $$02074$i$i = $1037;
        }
       }
       $1044 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $1045 = $1044 >>> 0 > $1042 >>> 0;
       if ($1045) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        SAFE_HEAP_STORE($1042 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $1046 = $635 + 24 | 0;
        SAFE_HEAP_STORE($1046 | 0, $$02074$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $1047 = $635 + 12 | 0;
        SAFE_HEAP_STORE($1047 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $1048 = $635 + 8 | 0;
        SAFE_HEAP_STORE($1048 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        break L294;
       }
      }
     } while (0);
     $1049 = $$0207$lcssa$i$i + 8 | 0;
     $1050 = (tempInt = SAFE_HEAP_LOAD($1049 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $1051 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $1052 = $1051 >>> 0 <= $$0207$lcssa$i$i >>> 0;
     $1053 = $1051 >>> 0 <= $1050 >>> 0;
     $1054 = $1053 & $1052;
     if ($1054) {
      $1055 = $1050 + 12 | 0;
      SAFE_HEAP_STORE($1055 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      SAFE_HEAP_STORE($1049 | 0, $635 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $1056 = $635 + 8 | 0;
      SAFE_HEAP_STORE($1056 | 0, $1050 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $1057 = $635 + 12 | 0;
      SAFE_HEAP_STORE($1057 | 0, $$0207$lcssa$i$i | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $1058 = $635 + 24 | 0;
      SAFE_HEAP_STORE($1058 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      break;
     } else {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
    }
   }
  } while (0);
  $1060 = (tempInt = SAFE_HEAP_LOAD(75280 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $1061 = $1060 >>> 0 > $$0197 >>> 0;
  if ($1061) {
   $1062 = $1060 - $$0197 | 0;
   SAFE_HEAP_STORE(75280 | 0, $1062 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $1063 = (tempInt = SAFE_HEAP_LOAD(75292 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $1064 = $1063 + $$0197 | 0;
   SAFE_HEAP_STORE(75292 | 0, $1064 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $1065 = $1062 | 1;
   $1066 = $1064 + 4 | 0;
   SAFE_HEAP_STORE($1066 | 0, $1065 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $1067 = $$0197 | 3;
   $1068 = $1063 + 4 | 0;
   SAFE_HEAP_STORE($1068 | 0, $1067 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $1069 = $1063 + 8 | 0;
   $$0 = $1069;
   STACKTOP = sp;
   return $$0 | 0;
  }
 }
 $1070 = (tempInt = ___errno_location() | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 SAFE_HEAP_STORE($1070 | 0, 12 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 $$0 = 0;
 STACKTOP = sp;
 return $$0 | 0;
}
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
  case 126:
   pc = pc + 4 | 0;
   HEAPF64[sp + (lx << 3) >> 3] = HEAP32[sp + (ly << 3) >> 2] | 0 ? +HEAPF64[sp + (lz << 3) >> 3] : +HEAPF64[sp + ((HEAPU8[pc >> 0] | 0) << 3) >> 3];
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
     lz = SAFE_HEAP_LOAD(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0) | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     pc = pc + 4 | 0;
     continue;
    }
   case 2:
    {
     HEAP32[sp - 4 >> 2] = pc;
     SAFE_HEAP_STORE(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 3:
    {
     HEAP32[sp - 4 >> 2] = pc;
     SAFE_HEAP_STORE_D(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, +HEAPF64[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 3], HEAP32[sp + (HEAPU8[pc + 6 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     pc = pc + 4 | 0;
     continue;
    }
   case 4:
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
   case 5:
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
   case 6:
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
   case 7:
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
   case 8:
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
   case 9:
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
   case 10:
    {
     HEAP32[sp - 4 >> 2] = pc;
     ld = +SAFE_HEAP_LOAD_D(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0, HEAP32[sp + (HEAPU8[pc + 5 >> 0] << 3) >> 2] | 0);
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAPF64[sp + (lx << 3) >> 3] = ld;
     pc = pc + 4 | 0;
     continue;
    }
   case 11:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _abort();
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     continue;
    }
   case 12:
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
   case 13:
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
   case 14:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = Math_abs(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
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
     lz = _SDL_Init(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
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
     lz = _atexit(HEAP32[sp + (HEAPU8[pc + 4 >> 0] << 3) >> 2] | 0) | 0;
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
     lz = _SDL_GetError() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 18:
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
   case 19:
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
   case 20:
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
   case 21:
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
   case 22:
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
   case 23:
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
   case 24:
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
   case 25:
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
   case 26:
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
   case 27:
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
   case 28:
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
   case 29:
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
   case 30:
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
   case 31:
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
   case 32:
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
   case 33:
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
   case 34:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_GetModState() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 35:
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
   case 36:
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
   case 37:
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
   case 38:
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
   case 39:
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
   case 40:
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
   case 41:
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
   case 42:
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
   case 43:
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
   case 44:
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
   case 45:
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
   case 46:
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
   case 47:
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
   case 48:
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
   case 49:
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
   case 50:
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
   case 51:
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
   case 52:
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
   case 53:
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
   case 54:
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
   case 55:
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
   case 56:
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
   case 57:
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
   case 58:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = _SDL_GetTicks() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 59:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = abortOnCannotGrowMemory() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 60:
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
   case 61:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = getTotalMemory() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 62:
    {
     HEAP32[sp - 4 >> 2] = pc;
     lz = enlargeMemory() | 0;
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     } else HEAP32[sp + (lx << 3) >> 2] = lz;
     continue;
    }
   case 63:
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
   case 64:
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
   case 65:
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
   case 66:
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
   case 67:
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
   case 68:
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
   case 69:
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
   case 70:
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
   case 71:
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
   case 72:
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
   case 73:
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
   case 74:
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
   case 75:
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
   case 76:
    {
     HEAP32[sp - 4 >> 2] = pc;
     _SDL_Quit();
     if ((asyncState | 0) == 1) {
      EMTSTACKTOP = sp - 8 | 0;
      return;
     };
     continue;
    }
   case 77:
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
  case 141:
   HEAP32[sp + (lx << 3) >> 2] = HEAP32[sp + (inst >>> 16 << 3) >> 2] | 0;
   break;
  case 142:
   HEAPF64[sp + (lx << 3) >> 3] = +HEAPF64[sp + (inst >>> 16 << 3) >> 3];
   break;
  case 143:
   HEAP32[sp + (inst >>> 16 << 3) >> 2] = HEAP32[sp + (lx << 3) >> 2] | 0;
   break;
  case 144:
   HEAPF64[sp + (inst >>> 16 << 3) >> 3] = +HEAPF64[sp + (lx << 3) >> 3];
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

function _free($0) {
 $0 = $0 | 0;
 var $$0211$i = 0, $$0211$in$i = 0, $$0381438 = 0, $$0382$lcssa = 0, $$0382437 = 0, $$0394 = 0, $$0401 = 0, $$1 = 0, $$1380 = 0, $$1385 = 0, $$1385$be = 0, $$1385$ph = 0, $$1388 = 0, $$1388$be = 0, $$1388$ph = 0, $$1396 = 0, $$1396$be = 0, $$1396$ph = 0, $$1400 = 0, $$1400$be = 0, $$1400$ph = 0, $$2 = 0, $$3 = 0, $$3398 = 0, $$pre = 0, $$pre$phi444Z2D = 0, $$pre$phi446Z2D = 0, $$pre$phiZ2D = 0, $$pre443 = 0, $$pre445 = 0, $$sink = 0, $$sink456 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $cond419 = 0, $cond420 = 0, label = 0, sp = 0;
 label = 0;
 sp = STACKTOP;
 $1 = ($0 | 0) == (0 | 0);
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ($1) {
  return;
 }
 $2 = $0 + -8 | 0;
 $3 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $4 = $2 >>> 0 < $3 >>> 0;
 if ($4) {
  _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 }
 $5 = $0 + -4 | 0;
 $6 = (tempInt = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $7 = $6 & 3;
 $8 = ($7 | 0) == 1;
 if ($8) {
  _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 }
 $9 = $6 & -8;
 $10 = $2 + $9 | 0;
 $11 = $6 & 1;
 $12 = ($11 | 0) == 0;
 L10 : do {
  if ($12) {
   $13 = (tempInt = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $14 = ($7 | 0) == 0;
   if ($14) {
    return;
   }
   $15 = 0 - $13 | 0;
   $16 = $2 + $15 | 0;
   $17 = $13 + $9 | 0;
   $18 = $16 >>> 0 < $3 >>> 0;
   if ($18) {
    _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   }
   $19 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $20 = ($19 | 0) == ($16 | 0);
   if ($20) {
    $105 = $10 + 4 | 0;
    $106 = (tempInt = SAFE_HEAP_LOAD($105 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $107 = $106 & 3;
    $108 = ($107 | 0) == 3;
    if (!$108) {
     $$1 = $16;
     $$1380 = $17;
     $114 = $16;
     break;
    }
    $109 = $16 + $17 | 0;
    $110 = $16 + 4 | 0;
    $111 = $17 | 1;
    $112 = $106 & -2;
    SAFE_HEAP_STORE(75276 | 0, $17 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($105 | 0, $112 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($110 | 0, $111 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($109 | 0, $17 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    return;
   }
   $21 = $13 >>> 3;
   $22 = $13 >>> 0 < 256;
   if ($22) {
    $23 = $16 + 8 | 0;
    $24 = (tempInt = SAFE_HEAP_LOAD($23 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $25 = $16 + 12 | 0;
    $26 = (tempInt = SAFE_HEAP_LOAD($25 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $27 = $21 << 1;
    $28 = 75308 + ($27 << 2) | 0;
    $29 = ($24 | 0) == ($28 | 0);
    if (!$29) {
     $30 = $3 >>> 0 > $24 >>> 0;
     if ($30) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $31 = $24 + 12 | 0;
     $32 = (tempInt = SAFE_HEAP_LOAD($31 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $33 = ($32 | 0) == ($16 | 0);
     if (!$33) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
    }
    $34 = ($26 | 0) == ($24 | 0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $38 = $37 & $36;
     SAFE_HEAP_STORE(18817 * 4 | 0, $38 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $$1 = $16;
     $$1380 = $17;
     $114 = $16;
     break;
    }
    $39 = ($26 | 0) == ($28 | 0);
    if ($39) {
     $$pre445 = $26 + 8 | 0;
     $$pre$phi446Z2D = $$pre445;
    } else {
     $40 = $3 >>> 0 > $26 >>> 0;
     if ($40) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $41 = $26 + 8 | 0;
     $42 = (tempInt = SAFE_HEAP_LOAD($41 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $43 = ($42 | 0) == ($16 | 0);
     if ($43) {
      $$pre$phi446Z2D = $41;
     } else {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
    }
    $44 = $24 + 12 | 0;
    SAFE_HEAP_STORE($44 | 0, $26 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($$pre$phi446Z2D | 0, $24 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $$1 = $16;
    $$1380 = $17;
    $114 = $16;
    break;
   }
   $45 = $16 + 24 | 0;
   $46 = (tempInt = SAFE_HEAP_LOAD($45 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $47 = $16 + 12 | 0;
   $48 = (tempInt = SAFE_HEAP_LOAD($47 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $49 = ($48 | 0) == ($16 | 0);
   do {
    if ($49) {
     $59 = $16 + 16 | 0;
     $60 = $59 + 4 | 0;
     $61 = (tempInt = SAFE_HEAP_LOAD($60 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $62 = ($61 | 0) == (0 | 0);
     if ($62) {
      $63 = (tempInt = SAFE_HEAP_LOAD($59 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $64 = ($63 | 0) == (0 | 0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1385$ph = $63;
       $$1388$ph = $59;
      }
     } else {
      $$1385$ph = $61;
      $$1388$ph = $60;
     }
     $$1385 = $$1385$ph;
     $$1388 = $$1388$ph;
     while (1) {
      $65 = $$1385 + 20 | 0;
      $66 = (tempInt = SAFE_HEAP_LOAD($65 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $67 = ($66 | 0) == (0 | 0);
      if ($67) {
       $68 = $$1385 + 16 | 0;
       $69 = (tempInt = SAFE_HEAP_LOAD($68 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $70 = ($69 | 0) == (0 | 0);
       if ($70) {
        break;
       } else {
        $$1385$be = $69;
        $$1388$be = $68;
       }
      } else {
       $$1385$be = $66;
       $$1388$be = $65;
      }
      $$1385 = $$1385$be;
      $$1388 = $$1388$be;
     }
     $71 = $3 >>> 0 > $$1388 >>> 0;
     if ($71) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     } else {
      SAFE_HEAP_STORE($$1388 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $$3 = $$1385;
      break;
     }
    } else {
     $50 = $16 + 8 | 0;
     $51 = (tempInt = SAFE_HEAP_LOAD($50 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $52 = $3 >>> 0 > $51 >>> 0;
     if ($52) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $53 = $51 + 12 | 0;
     $54 = (tempInt = SAFE_HEAP_LOAD($53 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $55 = ($54 | 0) == ($16 | 0);
     if (!$55) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $56 = $48 + 8 | 0;
     $57 = (tempInt = SAFE_HEAP_LOAD($56 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $58 = ($57 | 0) == ($16 | 0);
     if ($58) {
      SAFE_HEAP_STORE($53 | 0, $48 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      SAFE_HEAP_STORE($56 | 0, $51 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $$3 = $48;
      break;
     } else {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
    }
   } while (0);
   $72 = ($46 | 0) == (0 | 0);
   if ($72) {
    $$1 = $16;
    $$1380 = $17;
    $114 = $16;
   } else {
    $73 = $16 + 28 | 0;
    $74 = (tempInt = SAFE_HEAP_LOAD($73 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $75 = 75572 + ($74 << 2) | 0;
    $76 = (tempInt = SAFE_HEAP_LOAD($75 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $77 = ($76 | 0) == ($16 | 0);
    do {
     if ($77) {
      SAFE_HEAP_STORE($75 | 0, $$3 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $cond419 = ($$3 | 0) == (0 | 0);
      if ($cond419) {
       $78 = 1 << $74;
       $79 = $78 ^ -1;
       $80 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $81 = $80 & $79;
       SAFE_HEAP_STORE(75272 | 0, $81 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $$1 = $16;
       $$1380 = $17;
       $114 = $16;
       break L10;
      }
     } else {
      $82 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $83 = $82 >>> 0 > $46 >>> 0;
      if ($83) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      } else {
       $84 = $46 + 16 | 0;
       $85 = (tempInt = SAFE_HEAP_LOAD($84 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $86 = ($85 | 0) == ($16 | 0);
       $87 = $46 + 20 | 0;
       $$sink = $86 ? $84 : $87;
       SAFE_HEAP_STORE($$sink | 0, $$3 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $88 = ($$3 | 0) == (0 | 0);
       if ($88) {
        $$1 = $16;
        $$1380 = $17;
        $114 = $16;
        break L10;
       } else {
        break;
       }
      }
     }
    } while (0);
    $89 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $90 = $89 >>> 0 > $$3 >>> 0;
    if ($90) {
     _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    }
    $91 = $$3 + 24 | 0;
    SAFE_HEAP_STORE($91 | 0, $46 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $92 = $16 + 16 | 0;
    $93 = (tempInt = SAFE_HEAP_LOAD($92 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $94 = ($93 | 0) == (0 | 0);
    do {
     if (!$94) {
      $95 = $89 >>> 0 > $93 >>> 0;
      if ($95) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      } else {
       $96 = $$3 + 16 | 0;
       SAFE_HEAP_STORE($96 | 0, $93 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $97 = $93 + 24 | 0;
       SAFE_HEAP_STORE($97 | 0, $$3 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       break;
      }
     }
    } while (0);
    $98 = $92 + 4 | 0;
    $99 = (tempInt = SAFE_HEAP_LOAD($98 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $100 = ($99 | 0) == (0 | 0);
    if ($100) {
     $$1 = $16;
     $$1380 = $17;
     $114 = $16;
    } else {
     $101 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $102 = $101 >>> 0 > $99 >>> 0;
     if ($102) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     } else {
      $103 = $$3 + 20 | 0;
      SAFE_HEAP_STORE($103 | 0, $99 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $104 = $99 + 24 | 0;
      SAFE_HEAP_STORE($104 | 0, $$3 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $$1 = $16;
      $$1380 = $17;
      $114 = $16;
      break;
     }
    }
   }
  } else {
   $$1 = $2;
   $$1380 = $9;
   $114 = $2;
  }
 } while (0);
 $113 = $114 >>> 0 < $10 >>> 0;
 if (!$113) {
  _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 }
 $115 = $10 + 4 | 0;
 $116 = (tempInt = SAFE_HEAP_LOAD($115 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $117 = $116 & 1;
 $118 = ($117 | 0) == 0;
 if ($118) {
  _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 }
 $119 = $116 & 2;
 $120 = ($119 | 0) == 0;
 if ($120) {
  $121 = (tempInt = SAFE_HEAP_LOAD(75292 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $122 = ($121 | 0) == ($10 | 0);
  if ($122) {
   $123 = (tempInt = SAFE_HEAP_LOAD(75280 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $124 = $123 + $$1380 | 0;
   SAFE_HEAP_STORE(75280 | 0, $124 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(75292 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $125 = $124 | 1;
   $126 = $$1 + 4 | 0;
   SAFE_HEAP_STORE($126 | 0, $125 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $127 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $128 = ($$1 | 0) == ($127 | 0);
   if (!$128) {
    return;
   }
   SAFE_HEAP_STORE(75288 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(75276 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   return;
  }
  $129 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $130 = ($129 | 0) == ($10 | 0);
  if ($130) {
   $131 = (tempInt = SAFE_HEAP_LOAD(75276 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $132 = $131 + $$1380 | 0;
   SAFE_HEAP_STORE(75276 | 0, $132 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(75288 | 0, $114 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $133 = $132 | 1;
   $134 = $$1 + 4 | 0;
   SAFE_HEAP_STORE($134 | 0, $133 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $135 = $114 + $132 | 0;
   SAFE_HEAP_STORE($135 | 0, $132 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   return;
  }
  $136 = $116 & -8;
  $137 = $136 + $$1380 | 0;
  $138 = $116 >>> 3;
  $139 = $116 >>> 0 < 256;
  L111 : do {
   if ($139) {
    $140 = $10 + 8 | 0;
    $141 = (tempInt = SAFE_HEAP_LOAD($140 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $142 = $10 + 12 | 0;
    $143 = (tempInt = SAFE_HEAP_LOAD($142 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $144 = $138 << 1;
    $145 = 75308 + ($144 << 2) | 0;
    $146 = ($141 | 0) == ($145 | 0);
    if (!$146) {
     $147 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $148 = $147 >>> 0 > $141 >>> 0;
     if ($148) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $149 = $141 + 12 | 0;
     $150 = (tempInt = SAFE_HEAP_LOAD($149 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $151 = ($150 | 0) == ($10 | 0);
     if (!$151) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
    }
    $152 = ($143 | 0) == ($141 | 0);
    if ($152) {
     $153 = 1 << $138;
     $154 = $153 ^ -1;
     $155 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $156 = $155 & $154;
     SAFE_HEAP_STORE(18817 * 4 | 0, $156 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     break;
    }
    $157 = ($143 | 0) == ($145 | 0);
    if ($157) {
     $$pre443 = $143 + 8 | 0;
     $$pre$phi444Z2D = $$pre443;
    } else {
     $158 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $159 = $158 >>> 0 > $143 >>> 0;
     if ($159) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $160 = $143 + 8 | 0;
     $161 = (tempInt = SAFE_HEAP_LOAD($160 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $162 = ($161 | 0) == ($10 | 0);
     if ($162) {
      $$pre$phi444Z2D = $160;
     } else {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
    }
    $163 = $141 + 12 | 0;
    SAFE_HEAP_STORE($163 | 0, $143 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($$pre$phi444Z2D | 0, $141 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   } else {
    $164 = $10 + 24 | 0;
    $165 = (tempInt = SAFE_HEAP_LOAD($164 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $166 = $10 + 12 | 0;
    $167 = (tempInt = SAFE_HEAP_LOAD($166 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $168 = ($167 | 0) == ($10 | 0);
    do {
     if ($168) {
      $179 = $10 + 16 | 0;
      $180 = $179 + 4 | 0;
      $181 = (tempInt = SAFE_HEAP_LOAD($180 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $182 = ($181 | 0) == (0 | 0);
      if ($182) {
       $183 = (tempInt = SAFE_HEAP_LOAD($179 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $184 = ($183 | 0) == (0 | 0);
       if ($184) {
        $$3398 = 0;
        break;
       } else {
        $$1396$ph = $183;
        $$1400$ph = $179;
       }
      } else {
       $$1396$ph = $181;
       $$1400$ph = $180;
      }
      $$1396 = $$1396$ph;
      $$1400 = $$1400$ph;
      while (1) {
       $185 = $$1396 + 20 | 0;
       $186 = (tempInt = SAFE_HEAP_LOAD($185 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $187 = ($186 | 0) == (0 | 0);
       if ($187) {
        $188 = $$1396 + 16 | 0;
        $189 = (tempInt = SAFE_HEAP_LOAD($188 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $190 = ($189 | 0) == (0 | 0);
        if ($190) {
         break;
        } else {
         $$1396$be = $189;
         $$1400$be = $188;
        }
       } else {
        $$1396$be = $186;
        $$1400$be = $185;
       }
       $$1396 = $$1396$be;
       $$1400 = $$1400$be;
      }
      $191 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $192 = $191 >>> 0 > $$1400 >>> 0;
      if ($192) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      } else {
       SAFE_HEAP_STORE($$1400 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $$3398 = $$1396;
       break;
      }
     } else {
      $169 = $10 + 8 | 0;
      $170 = (tempInt = SAFE_HEAP_LOAD($169 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $171 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $172 = $171 >>> 0 > $170 >>> 0;
      if ($172) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      }
      $173 = $170 + 12 | 0;
      $174 = (tempInt = SAFE_HEAP_LOAD($173 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $175 = ($174 | 0) == ($10 | 0);
      if (!$175) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      }
      $176 = $167 + 8 | 0;
      $177 = (tempInt = SAFE_HEAP_LOAD($176 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $178 = ($177 | 0) == ($10 | 0);
      if ($178) {
       SAFE_HEAP_STORE($173 | 0, $167 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       SAFE_HEAP_STORE($176 | 0, $170 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $$3398 = $167;
       break;
      } else {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      }
     }
    } while (0);
    $193 = ($165 | 0) == (0 | 0);
    if (!$193) {
     $194 = $10 + 28 | 0;
     $195 = (tempInt = SAFE_HEAP_LOAD($194 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $196 = 75572 + ($195 << 2) | 0;
     $197 = (tempInt = SAFE_HEAP_LOAD($196 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $198 = ($197 | 0) == ($10 | 0);
     do {
      if ($198) {
       SAFE_HEAP_STORE($196 | 0, $$3398 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $cond420 = ($$3398 | 0) == (0 | 0);
       if ($cond420) {
        $199 = 1 << $195;
        $200 = $199 ^ -1;
        $201 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $202 = $201 & $200;
        SAFE_HEAP_STORE(75272 | 0, $202 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        break L111;
       }
      } else {
       $203 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
       $204 = $203 >>> 0 > $165 >>> 0;
       if ($204) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        $205 = $165 + 16 | 0;
        $206 = (tempInt = SAFE_HEAP_LOAD($205 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
        $207 = ($206 | 0) == ($10 | 0);
        $208 = $165 + 20 | 0;
        $$sink456 = $207 ? $205 : $208;
        SAFE_HEAP_STORE($$sink456 | 0, $$3398 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $209 = ($$3398 | 0) == (0 | 0);
        if ($209) {
         break L111;
        } else {
         break;
        }
       }
      }
     } while (0);
     $210 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $211 = $210 >>> 0 > $$3398 >>> 0;
     if ($211) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     }
     $212 = $$3398 + 24 | 0;
     SAFE_HEAP_STORE($212 | 0, $165 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     $213 = $10 + 16 | 0;
     $214 = (tempInt = SAFE_HEAP_LOAD($213 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $215 = ($214 | 0) == (0 | 0);
     do {
      if (!$215) {
       $216 = $210 >>> 0 > $214 >>> 0;
       if ($216) {
        _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       } else {
        $217 = $$3398 + 16 | 0;
        SAFE_HEAP_STORE($217 | 0, $214 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        $218 = $214 + 24 | 0;
        SAFE_HEAP_STORE($218 | 0, $$3398 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
        break;
       }
      }
     } while (0);
     $219 = $213 + 4 | 0;
     $220 = (tempInt = SAFE_HEAP_LOAD($219 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $221 = ($220 | 0) == (0 | 0);
     if (!$221) {
      $222 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $223 = $222 >>> 0 > $220 >>> 0;
      if ($223) {
       _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      } else {
       $224 = $$3398 + 20 | 0;
       SAFE_HEAP_STORE($224 | 0, $220 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       $225 = $220 + 24 | 0;
       SAFE_HEAP_STORE($225 | 0, $$3398 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
       break;
      }
     }
    }
   }
  } while (0);
  $226 = $137 | 1;
  $227 = $$1 + 4 | 0;
  SAFE_HEAP_STORE($227 | 0, $226 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $228 = $114 + $137 | 0;
  SAFE_HEAP_STORE($228 | 0, $137 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $229 = (tempInt = SAFE_HEAP_LOAD(75288 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $230 = ($$1 | 0) == ($229 | 0);
  if ($230) {
   SAFE_HEAP_STORE(75276 | 0, $137 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   return;
  } else {
   $$2 = $137;
  }
 } else {
  $231 = $116 & -2;
  SAFE_HEAP_STORE($115 | 0, $231 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $232 = $$1380 | 1;
  $233 = $$1 + 4 | 0;
  SAFE_HEAP_STORE($233 | 0, $232 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $234 = $114 + $$1380 | 0;
  SAFE_HEAP_STORE($234 | 0, $$1380 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $$2 = $$1380;
 }
 $235 = $$2 >>> 3;
 $236 = $$2 >>> 0 < 256;
 if ($236) {
  $237 = $235 << 1;
  $238 = 75308 + ($237 << 2) | 0;
  $239 = (tempInt = SAFE_HEAP_LOAD(18817 * 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $240 = 1 << $235;
  $241 = $239 & $240;
  $242 = ($241 | 0) == 0;
  if ($242) {
   $243 = $239 | $240;
   SAFE_HEAP_STORE(18817 * 4 | 0, $243 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $$pre = $238 + 8 | 0;
   $$0401 = $238;
   $$pre$phiZ2D = $$pre;
  } else {
   $244 = $238 + 8 | 0;
   $245 = (tempInt = SAFE_HEAP_LOAD($244 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $246 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $247 = $246 >>> 0 > $245 >>> 0;
   if ($247) {
    _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   } else {
    $$0401 = $245;
    $$pre$phiZ2D = $244;
   }
  }
  SAFE_HEAP_STORE($$pre$phiZ2D | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $248 = $$0401 + 12 | 0;
  SAFE_HEAP_STORE($248 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $249 = $$1 + 8 | 0;
  SAFE_HEAP_STORE($249 | 0, $$0401 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  $250 = $$1 + 12 | 0;
  SAFE_HEAP_STORE($250 | 0, $238 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  return;
 }
 $251 = $$2 >>> 8;
 $252 = ($251 | 0) == 0;
 if ($252) {
  $$0394 = 0;
 } else {
  $253 = $$2 >>> 0 > 16777215;
  if ($253) {
   $$0394 = 31;
  } else {
   $254 = $251 + 1048320 | 0;
   $255 = $254 >>> 16;
   $256 = $255 & 8;
   $257 = $251 << $256;
   $258 = $257 + 520192 | 0;
   $259 = $258 >>> 16;
   $260 = $259 & 4;
   $261 = $260 | $256;
   $262 = $257 << $260;
   $263 = $262 + 245760 | 0;
   $264 = $263 >>> 16;
   $265 = $264 & 2;
   $266 = $261 | $265;
   $267 = 14 - $266 | 0;
   $268 = $262 << $265;
   $269 = $268 >>> 15;
   $270 = $267 + $269 | 0;
   $271 = $270 << 1;
   $272 = $270 + 7 | 0;
   $273 = $$2 >>> $272;
   $274 = $273 & 1;
   $275 = $274 | $271;
   $$0394 = $275;
  }
 }
 $276 = 75572 + ($$0394 << 2) | 0;
 $277 = $$1 + 28 | 0;
 SAFE_HEAP_STORE($277 | 0, $$0394 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 $278 = $$1 + 16 | 0;
 $279 = $$1 + 20 | 0;
 SAFE_HEAP_STORE($279 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 SAFE_HEAP_STORE($278 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 $280 = (tempInt = SAFE_HEAP_LOAD(75272 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $281 = 1 << $$0394;
 $282 = $280 & $281;
 $283 = ($282 | 0) == 0;
 L197 : do {
  if ($283) {
   $284 = $280 | $281;
   SAFE_HEAP_STORE(75272 | 0, $284 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE($276 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $285 = $$1 + 24 | 0;
   SAFE_HEAP_STORE($285 | 0, $276 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $286 = $$1 + 12 | 0;
   SAFE_HEAP_STORE($286 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   $287 = $$1 + 8 | 0;
   SAFE_HEAP_STORE($287 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  } else {
   $288 = (tempInt = SAFE_HEAP_LOAD($276 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $289 = $288 + 4 | 0;
   $290 = (tempInt = SAFE_HEAP_LOAD($289 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $291 = $290 & -8;
   $292 = ($291 | 0) == ($$2 | 0);
   L200 : do {
    if ($292) {
     $$0382$lcssa = $288;
    } else {
     $293 = ($$0394 | 0) == 31;
     $294 = $$0394 >>> 1;
     $295 = 25 - $294 | 0;
     $296 = $293 ? 0 : $295;
     $297 = $$2 << $296;
     $$0381438 = $297;
     $$0382437 = $288;
     while (1) {
      $304 = $$0381438 >>> 31;
      $305 = ($$0382437 + 16 | 0) + ($304 << 2) | 0;
      $300 = (tempInt = SAFE_HEAP_LOAD($305 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $306 = ($300 | 0) == (0 | 0);
      if ($306) {
       break;
      }
      $298 = $$0381438 << 1;
      $299 = $300 + 4 | 0;
      $301 = (tempInt = SAFE_HEAP_LOAD($299 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
      $302 = $301 & -8;
      $303 = ($302 | 0) == ($$2 | 0);
      if ($303) {
       $$0382$lcssa = $300;
       break L200;
      } else {
       $$0381438 = $298;
       $$0382437 = $300;
      }
     }
     $307 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
     $308 = $307 >>> 0 > $305 >>> 0;
     if ($308) {
      _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
     } else {
      SAFE_HEAP_STORE($305 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $309 = $$1 + 24 | 0;
      SAFE_HEAP_STORE($309 | 0, $$0382437 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $310 = $$1 + 12 | 0;
      SAFE_HEAP_STORE($310 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      $311 = $$1 + 8 | 0;
      SAFE_HEAP_STORE($311 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
      break L197;
     }
    }
   } while (0);
   $312 = $$0382$lcssa + 8 | 0;
   $313 = (tempInt = SAFE_HEAP_LOAD($312 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $314 = (tempInt = SAFE_HEAP_LOAD(75284 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $315 = $314 >>> 0 <= $$0382$lcssa >>> 0;
   $316 = $314 >>> 0 <= $313 >>> 0;
   $317 = $316 & $315;
   if ($317) {
    $318 = $313 + 12 | 0;
    SAFE_HEAP_STORE($318 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    SAFE_HEAP_STORE($312 | 0, $$1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $319 = $$1 + 8 | 0;
    SAFE_HEAP_STORE($319 | 0, $313 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $320 = $$1 + 12 | 0;
    SAFE_HEAP_STORE($320 | 0, $$0382$lcssa | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    $321 = $$1 + 24 | 0;
    SAFE_HEAP_STORE($321 | 0, 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
    break;
   } else {
    _abort(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   }
  }
 } while (0);
 $322 = (tempInt = SAFE_HEAP_LOAD(75300 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
 $323 = $322 + -1 | 0;
 SAFE_HEAP_STORE(75300 | 0, $323 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 $324 = ($323 | 0) == 0;
 if (!$324) {
  return;
 }
 $$0211$in$i = 75724;
 while (1) {
  $$0211$i = (tempInt = SAFE_HEAP_LOAD($$0211$in$i | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
  $325 = ($$0211$i | 0) == (0 | 0);
  $326 = $$0211$i + 8 | 0;
  if ($325) {
   break;
  } else {
   $$0211$in$i = $326;
  }
 }
 SAFE_HEAP_STORE(75300 | 0, -1 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 return;
}

function _memcpy(dest, src, num) {
 dest = dest | 0;
 src = src | 0;
 num = num | 0;
 var ret = 0, aligned_dest_end = 0, block_aligned_dest_end = 0, dest_end = 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((num | 0) >= 8192) {
  return (tempInt = _emscripten_memcpy_big(dest | 0, src | 0, num | 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 }
 ret = dest | 0;
 dest_end = dest + num | 0;
 if ((dest & 3) == (src & 3)) {
  while (dest & 3) {
   if ((num | 0) == 0) return ret | 0;
   SAFE_HEAP_STORE(dest | 0, (tempInt = SAFE_HEAP_LOAD(src | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   dest = dest + 1 | 0;
   src = src + 1 | 0;
   num = num - 1 | 0;
  }
  aligned_dest_end = dest_end & -4 | 0;
  block_aligned_dest_end = aligned_dest_end - 64 | 0;
  while ((dest | 0) <= (block_aligned_dest_end | 0)) {
   SAFE_HEAP_STORE(dest | 0, (tempInt = SAFE_HEAP_LOAD(src | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 4 | 0, (tempInt = SAFE_HEAP_LOAD(src + 4 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 8 | 0, (tempInt = SAFE_HEAP_LOAD(src + 8 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 12 | 0, (tempInt = SAFE_HEAP_LOAD(src + 12 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 16 | 0, (tempInt = SAFE_HEAP_LOAD(src + 16 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 20 | 0, (tempInt = SAFE_HEAP_LOAD(src + 20 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 24 | 0, (tempInt = SAFE_HEAP_LOAD(src + 24 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 28 | 0, (tempInt = SAFE_HEAP_LOAD(src + 28 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 32 | 0, (tempInt = SAFE_HEAP_LOAD(src + 32 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 36 | 0, (tempInt = SAFE_HEAP_LOAD(src + 36 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 40 | 0, (tempInt = SAFE_HEAP_LOAD(src + 40 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 44 | 0, (tempInt = SAFE_HEAP_LOAD(src + 44 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 48 | 0, (tempInt = SAFE_HEAP_LOAD(src + 48 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 52 | 0, (tempInt = SAFE_HEAP_LOAD(src + 52 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 56 | 0, (tempInt = SAFE_HEAP_LOAD(src + 56 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 60 | 0, (tempInt = SAFE_HEAP_LOAD(src + 60 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   dest = dest + 64 | 0;
   src = src + 64 | 0;
  }
  while ((dest | 0) < (aligned_dest_end | 0)) {
   SAFE_HEAP_STORE(dest | 0, (tempInt = SAFE_HEAP_LOAD(src | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  }
 } else {
  aligned_dest_end = dest_end - 4 | 0;
  while ((dest | 0) < (aligned_dest_end | 0)) {
   SAFE_HEAP_STORE(dest | 0, (tempInt = SAFE_HEAP_LOAD(src | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 1 | 0, (tempInt = SAFE_HEAP_LOAD(src + 1 | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 2 | 0, (tempInt = SAFE_HEAP_LOAD(src + 2 | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(dest + 3 | 0, (tempInt = SAFE_HEAP_LOAD(src + 3 | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  }
 }
 while ((dest | 0) < (dest_end | 0)) {
  SAFE_HEAP_STORE(dest | 0, (tempInt = SAFE_HEAP_LOAD(src | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  dest = dest + 1 | 0;
  src = src + 1 | 0;
 }
 return ret | 0;
}

function _memset(ptr, value, num) {
 ptr = ptr | 0;
 value = value | 0;
 num = num | 0;
 var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
 end = ptr + num | 0;
 value = value & 255;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((num | 0) >= 67) {
  while ((ptr & 3) != 0) {
   SAFE_HEAP_STORE(ptr | 0, value | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   ptr = ptr + 1 | 0;
  }
  aligned_end = end & -4 | 0;
  block_aligned_end = aligned_end - 64 | 0;
  value4 = value | value << 8 | value << 16 | value << 24;
  while ((ptr | 0) <= (block_aligned_end | 0)) {
   SAFE_HEAP_STORE(ptr | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 4 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 8 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 12 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 16 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 20 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 24 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 28 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 32 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 36 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 40 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 44 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 48 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 52 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 56 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   SAFE_HEAP_STORE(ptr + 60 | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   ptr = ptr + 64 | 0;
  }
  while ((ptr | 0) < (aligned_end | 0)) {
   SAFE_HEAP_STORE(ptr | 0, value4 | 0, 4), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
   ptr = ptr + 4 | 0;
  }
 }
 while ((ptr | 0) < (end | 0)) {
  SAFE_HEAP_STORE(ptr | 0, value | 0, 1), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  ptr = ptr + 1 | 0;
 }
 return end - num | 0;
}

function _strlen($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$014 = 0, $$015$lcssa = 0, $$01518 = 0, $$1$lcssa = 0, $$pn = 0, $$pn29 = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 label = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2 | 0) == 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 L1 : do {
  if ($3) {
   $$015$lcssa = $0;
   label = 5;
  } else {
   $$01518 = $0;
   $22 = $1;
   while (1) {
    $4 = (tempInt = SAFE_HEAP_LOAD($$01518 >> 0 | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $5 = $4 << 24 >> 24 == 0;
    if ($5) {
     $$pn = $22;
     break L1;
    }
    $6 = $$01518 + 1 | 0;
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8 | 0) == 0;
    if ($9) {
     $$015$lcssa = $6;
     label = 5;
     break;
    } else {
     $$01518 = $6;
     $22 = $7;
    }
   }
  }
 } while (0);
 if ((label | 0) == 5) {
  $$0 = $$015$lcssa;
  while (1) {
   $10 = (tempInt = SAFE_HEAP_LOAD($$0 | 0, 4, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
   $11 = $10 + -16843009 | 0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14 | 0) == 0;
   $16 = $$0 + 4 | 0;
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10 & 255;
  $18 = $17 << 24 >> 24 == 0;
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn29 = $$0;
   while (1) {
    $19 = $$pn29 + 1 | 0;
    $$pre = (tempInt = SAFE_HEAP_LOAD($19 >> 0 | 0, 1, 0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0 | 0;
    $20 = $$pre << 24 >> 24 == 0;
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn29 = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$pn = $21;
 }
 $$014 = $$pn - $1 | 0;
 return $$014 | 0;
}

function SAFE_HEAP_STORE_D(dest, value, bytes) {
 dest = dest | 0;
 value = +value;
 bytes = bytes | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((dest | 0) <= 0) segfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 if ((bytes | 0) == 8) {
  if (dest & 7) alignfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  HEAPF64[dest >> 3] = value;
 } else {
  if (dest & 3) alignfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  HEAPF32[dest >> 2] = value;
 }
}

function SAFE_HEAP_LOAD_D(dest, bytes) {
 dest = dest | 0;
 bytes = bytes | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((dest | 0) <= 0) segfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 if ((bytes | 0) == 8) {
  if (dest & 7) alignfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
  return +HEAPF64[dest >> 3];
 }
 if (dest & 3) alignfault(), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 return +HEAPF32[dest >> 2];
}

function SAFE_HEAP_LOAD(dest, bytes, unsigned) {
 dest = dest | 0;
 bytes = bytes | 0;
 unsigned = unsigned | 0;
 if ((dest | 0) <= 0) segfault();
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault();
 if ((bytes | 0) == 4) {
  if (dest & 3) alignfault();
  return HEAP32[dest >> 2] | 0;
 } else if ((bytes | 0) == 1) {
  if (unsigned) {
   return HEAPU8[dest >> 0] | 0;
  } else {
   return HEAP8[dest >> 0] | 0;
  }
 }
 if (dest & 1) alignfault();
 if (unsigned) return HEAPU16[dest >> 1] | 0;
 return HEAP16[dest >> 1] | 0;
}

function SAFE_HEAP_STORE(dest, value, bytes) {
 dest = dest | 0;
 value = value | 0;
 bytes = bytes | 0;
 if ((dest | 0) <= 0) segfault();
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault();
 if ((bytes | 0) == 4) {
  if (dest & 3) alignfault();
  HEAP32[dest >> 2] = value;
 } else if ((bytes | 0) == 1) {
  HEAP8[dest >> 0] = value;
 } else {
  if (dest & 1) alignfault();
  HEAP16[dest >> 1] = value;
 }
}

function _strcat($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $2 = 0, $3 = 0, label = 0, sp = 0;
 label = 0;
 sp = STACKTOP;
 $2 = (tempInt = _strlen($0) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 $3 = $0 + $2 | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 (tempInt = _strcpy($3, $1) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 return $0 | 0;
}

function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
 $a$0 = $a$0 | 0;
 $a$1 = $a$1 | 0;
 $b$0 = $b$0 | 0;
 $b$1 = $b$1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $a$0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $a$1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $b$0;
  HEAP32[EMTSTACKTOP + 32 >> 2] = $b$1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 384628 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___muldi3($a$0, $a$1, $b$0, $b$1) {
 $a$0 = $a$0 | 0;
 $a$1 = $a$1 | 0;
 $b$0 = $b$0 | 0;
 $b$1 = $b$1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $a$0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $a$1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $b$0;
  HEAP32[EMTSTACKTOP + 32 >> 2] = $b$1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 371784 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _bitshift64Shl(low, high, bits) {
 low = low | 0;
 high = high | 0;
 bits = bits | 0;
 var ander = 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((bits | 0) < 32) {
  ander = (1 << bits) - 1 | 0;
  tempRet0 = high << bits | (low & ander << 32 - bits) >>> 32 - bits;
  return low << bits;
 }
 tempRet0 = low << bits - 32;
 return 0;
}

function _bitshift64Lshr(low, high, bits) {
 low = low | 0;
 high = high | 0;
 bits = bits | 0;
 var ander = 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((bits | 0) < 32) {
  ander = (1 << bits) - 1 | 0;
  tempRet0 = high >>> bits;
  return low >>> bits | (high & ander) << 32 - bits;
 }
 tempRet0 = 0;
 return high >>> bits - 32 | 0;
}

function _i64Subtract(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = a;
  HEAP32[EMTSTACKTOP + 16 >> 2] = b;
  HEAP32[EMTSTACKTOP + 24 >> 2] = c;
  HEAP32[EMTSTACKTOP + 32 >> 2] = d;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 384260 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _i64Add(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = a;
  HEAP32[EMTSTACKTOP + 16 >> 2] = b;
  HEAP32[EMTSTACKTOP + 24 >> 2] = c;
  HEAP32[EMTSTACKTOP + 32 >> 2] = d;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 384816 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function stackAlloc(size) {
 size = size | 0;
 var ret = 0;
 ret = STACKTOP;
 STACKTOP = STACKTOP + size | 0;
 STACKTOP = STACKTOP + 15 & -16;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(size | 0), (asyncState | 0) == 1 ? abort(-12) | 0 : 0;
 return ret | 0;
}

function ___stdout_write($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 344620 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stdio_write($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 218708 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stdio_seek($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 341628 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stdio_read($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 270932 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stpncpy($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 214872 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _sn_write($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 369996 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _do_read($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 384916 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _main($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  HEAP32[EMTSTACKTOP + 24 >> 2] = $2;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 195928 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _strncpy($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var label = 0, sp = 0;
 label = 0;
 sp = STACKTOP;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 (tempInt = ___stpncpy($0, $1, $2) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 return $0 | 0;
}

function _strcpy($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var label = 0, sp = 0;
 label = 0;
 sp = STACKTOP;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 (tempInt = ___stpcpy($0, $1) | 0, (asyncState | 0) == 1 ? abort(-12) | 0 : tempInt) | 0;
 return $0 | 0;
}

function establishStackSpace(stackBase, stackMax) {
 stackBase = stackBase | 0;
 stackMax = stackMax | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = stackBase;
  HEAP32[EMTSTACKTOP + 16 >> 2] = stackMax;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 385452 | 0);
}

function _get_inv_t($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 269876 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _get_bool($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 277868 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function ___stpcpy($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 250756 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _get_str($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 183256 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _get_sf($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  HEAP32[EMTSTACKTOP + 16 >> 2] = $1;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 340256 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _sbrk(increment) {
 increment = increment | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = increment;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 364260 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function setThrew(threw, value) {
 threw = threw | 0;
 value = value | 0;
 if ((asyncState | 0) == 1) asyncState = 3;
 (asyncState | 0) == 2 ? abort(-12) | 0 : 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = threw;
  threwValue = value;
 }
}

function ___stdio_close($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 373376 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _llvm_bswap_i32(x) {
 x = x | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = x;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 385976 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _charge_str($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 349556 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _turn_see($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 266528 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _ring_num($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 346092 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _nullstr($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 382460 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function _fflush($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 275388 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function setDynamicTop(value) {
 value = value | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = value;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 386356 | 0);
}

function _put_inv_t($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 376248 | 0);
}

function _put_bool($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 376084 | 0);
}

function _put_str($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 380712 | 0);
}

function _leave($0) {
 $0 = $0 | 0;
 if ((asyncState | 0) != 2) {
  HEAP32[EMTSTACKTOP + 8 >> 2] = $0;
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 363156 | 0);
}

function ___errno_location() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 386468 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_timezone() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 386556 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_daylight() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 386588 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_environ() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 386648 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function __get_tzname() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 386680 | 0);
 return HEAP32[EMTSTACKTOP >> 2] | 0;
}

function SAFE_FT_MASK(value, mask) {
 value = value | 0;
 mask = mask | 0;
 var ret = 0;
 ret = value & mask;
 if ((ret | 0) != (value | 0)) ftfault();
 return ret | 0;
}

function b32() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387300 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b31() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387328 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b30() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387356 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b29() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387384 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b28() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387412 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b27() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387440 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b26() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387468 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b25() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387496 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b24() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387524 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b23() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387552 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b22() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387580 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b21() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387608 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b20() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387636 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b19() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387664 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b18() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387692 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b17() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387720 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b16() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387748 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b15() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387776 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b14() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387804 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b13() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387832 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b12() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387860 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b11() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387888 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b10() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387916 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b9() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387944 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b8() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 387972 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b6() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388028 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b5() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388056 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b4() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388084 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b3() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388112 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b2() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388140 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b1() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388168 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function b7() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 388e3 | 0);
 return +HEAPF64[EMTSTACKTOP >> 3];
}

function ___emscripten_environ_constructor() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 385716 | 0);
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
 emterpret(eb + 371860 | 0);
}

function _come_down() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 190932 | 0);
}

function _rollwand() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 374280 | 0);
}

function _visuals() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 217572 | 0);
}

function _swander() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 385756 | 0);
}

function _stomach() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 227196 | 0);
}

function _runners() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 221572 | 0);
}

function _nohaste() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 376812 | 0);
}

function _doctor() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 260228 | 0);
}

function _unsee() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 311276 | 0);
}

function _sight() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 350160 | 0);
}

function _land() {
 if ((asyncState | 0) != 2) {
  if ((asyncState | 0) == 1) asyncState = 3;
 }
 emterpret(eb + 375336 | 0);
}

function runPostSets() {}
function setTempRet0(value) {
 value = value | 0;
 tempRet0 = value;
}

function stackRestore(top) {
 top = top | 0;
 STACKTOP = top;
}

function setEmtStackMax(x) {
 x = x | 0;
 EMT_STACK_MAX = x;
}

function emtStackRestore(x) {
 x = x | 0;
 EMTSTACKTOP = x;
}

function setAsyncState(x) {
 x = x | 0;
 asyncState = x;
}

function stackSave() {
 return STACKTOP | 0;
}

// EMSCRIPTEN_END_FUNCS

var FUNCTION_TABLE_X = [b1,_put_bool,_get_bool,_get_sf,_put_inv_t,_get_inv_t,_put_str,_get_str,_unconfuse,_come_down,_unsee,_sight,_land,___stdio_close,___stdio_write,___stdio_seek,___stdout_write,_sn_write,_nohaste,_runners,_doctor,_swander,_stomach,_leave,_nullstr,_ring_num,_charge_str,_rollwand,_turn_see
,_visuals,_SDL_Quit,___stdio_read,_do_read,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27
,b28,b29,b30,b31,b32];






  return { ___emscripten_environ_constructor: ___emscripten_environ_constructor, ___errno_location: ___errno_location, ___muldi3: ___muldi3, ___stdio_close: ___stdio_close, ___stdio_read: ___stdio_read, ___stdio_seek: ___stdio_seek, ___stdio_write: ___stdio_write, ___stdout_write: ___stdout_write, ___udivdi3: ___udivdi3, __get_daylight: __get_daylight, __get_environ: __get_environ, __get_timezone: __get_timezone, __get_tzname: __get_tzname, _bitshift64Lshr: _bitshift64Lshr, _bitshift64Shl: _bitshift64Shl, _charge_str: _charge_str, _come_down: _come_down, _do_read: _do_read, _doctor: _doctor, _fflush: _fflush, _free: _free, _get_bool: _get_bool, _get_inv_t: _get_inv_t, _get_sf: _get_sf, _get_str: _get_str, _i64Add: _i64Add, _i64Subtract: _i64Subtract, _land: _land, _leave: _leave, _llvm_bswap_i32: _llvm_bswap_i32, _main: _main, _malloc: _malloc, _memcpy: _memcpy, _memset: _memset, _nohaste: _nohaste, _nullstr: _nullstr, _put_bool: _put_bool, _put_inv_t: _put_inv_t, _put_str: _put_str, _ring_num: _ring_num, _rollwand: _rollwand, _runners: _runners, _sbrk: _sbrk, _sight: _sight, _sn_write: _sn_write, _stomach: _stomach, _swander: _swander, _turn_see: _turn_see, _unconfuse: _unconfuse, _unsee: _unsee, _visuals: _visuals, emtStackRestore: emtStackRestore, emtStackSave: emtStackSave, emterpret: emterpret, establishStackSpace: establishStackSpace, getEmtStackMax: getEmtStackMax, getTempRet0: getTempRet0, runPostSets: runPostSets, setAsyncState: setAsyncState, setDynamicTop: setDynamicTop, setEmtStackMax: setEmtStackMax, setTempRet0: setTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
})
;