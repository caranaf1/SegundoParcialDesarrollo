
import mysql from 'mysql'
var conectar = mysql.createConnection({ 
    host: 'localhost',
    user: 'miparcial',
    password: 'parcial@1234',
    database: 'parcial2',
    typeCast: function castField(field, useDefaultTypeCasting) {
        if (field.type === "BIT" && field.length === 1) {
            let bytes = field.buffer();
            return bytes[0] === 1;
        }
        return useDefaultTypeCasting();
    }
});
conectar.connect(function(err){
    if(err){
        console.error('Error de conexion: ' + err.stack)
        return; 
     }
        console.log('Conexion exitosa ID: ' + conectar.threadId);
        
    });
export{conectar}