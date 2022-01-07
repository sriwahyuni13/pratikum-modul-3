const  express  =  membutuhkan ( "ekspres" ) ;
    const   ekspres   ;
aplikasi . penggunaan ( express . json ( ) ) ;

const  express  =  membutuhkan ( "ekspres" ) ;
   const   ekspres   ;
membutuhkan ( "dotenv" ) . konfigurasi ( ) ;
 
aplikasi . penggunaan ( express . json ( ) ) ;
 
const  PORT  =  proses . env . PELABUHAN  ||  5000 ;
 
aplikasi . gunakan ( ( req ,  res ,  selanjutnya )  =>  {
  res . setHeader ( "Access-Control-Allow-Origin" ,  "*" ) ;
  res . setHeader (
    "Access-Control-Allow-Methods" ,
    "DAPATKAN, POSTING, OPSI, PUT, PATCH, DELETE"
  ) ;
  res . setHeader (
    "Access-Control-Allow-Header" ,
    "X-Diminta-Dengan, tipe konten"
  ) ;
  res . setHeader ( "Access-Control-Allow-Credentials" ,  benar ) ;
  berikutnya ( ) ;
} ) ;

aplikasi . gunakan ( "/testing" ,  membutuhkan ( "./routes/testing.routes.js" ) ) ;
 
aplikasi . gunakan ( "/students" ,  membutuhkan ( "./routes/students.routes.js" ) ) ;
 
aplikasi . mendengarkan ( proses . env . PORT ,  ( )  =>  {
  konsol . log ( `Aplikasi sedang berjalan di http://localhost: ${ PORT } ` ) ;
 
} ) ;