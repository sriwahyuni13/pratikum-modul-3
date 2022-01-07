# !/usr/bin/env pwsh
$basedir = Jalur  Terpisah $MyInvocation .MyCommand.Definition  - Induk

$exe = " "
if ( $PSVersionTable .PSVersion  -lt  " 6.0 "  -atau  $IsWindows ) {
  # Perbaiki kasus ketika Windows dan Linux membangun Node
  # diinstal di direktori yang sama
  $exe = " .exe "
}
$ret = 0
if ( Jalur-Tes  " $basedir /node $exe " ) {
  # Dukungan masukan pipa
  if ( $MyInvocation .ExpectingInput ) {
    $masukan  |  &  " $basedir /node $exe "   " $basedir /../mime/cli.js "  $args
  } lain {
    &  " $basedir /node $exe "   " $basedir /../mime/cli.js "  $args
  }
  $ret = $LASTEXITCODE
} lain {
  # Dukungan masukan pipa
  if ( $MyInvocation .ExpectingInput ) {
    $masukan  |  &  " simpul $exe "   " $basedir /../mime/cli.js "  $args
  } lain {
    &  " simpul $exe "   " $basedir /../mime/cli.js "  $args
  }
  $ret = $LASTEXITCODE
}
keluar  $ret