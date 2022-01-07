@ ECHO  off
GOTO  mulai
: temukan_dp0
SET  dp0 = %~dp0
KELUAR /b
: mulai
SETLOKAL
HUBUNGI : temukan_dp0

JIKA  ADA  " %dp0% \node.exe " (
  SET  " _prog = %dp0% \node.exe "
) LAINNYA (
  SET  " _prog = simpul "
  SET  PATHEXT = %PATHEXT: ;.JS; = ; %
)

endLocal  &  goto #_undefined_# 2 > NUL  ||  judul  %COMSPEC%  &  " %_prog% "   " %dp0% \..\touch\bin\nodetouch.js "  %*