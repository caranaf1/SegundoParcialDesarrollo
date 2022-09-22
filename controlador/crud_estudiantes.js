import espress from "express";
import { conectar} from "../modelo/db_conectar.js"
var crud_estudiantes=({})
crud_estudiantes.leer =(req,res)=>{

    conectar.query('SELECT id_estudiante, Carne, nombres, apellidos, direccion, telefono, genero, email, date_format (fecha_nacimiento, "%Y-%m-%d") as fecha_nacimiento FROM estudiantes;',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('estudiantes/index',{resultado:results})
        }

           
    })
};

    crud_estudiantes.cud = (req,res)=>{
        const btn_crear = req.body.btn_crear;
        const btn_actualizar = req.body.btn_actualizar;
        const btn_eliminar = req.body.btn_eliminar;
        const id_estudiante = req.body.txt_id;
        const carne = req.body.txt_carne;
        const nombres = req.body.txt_nombres;
        const apellidos = req.body.txt_apellidos;
        const direccion = req.body.txt_direccion;
        const telefono = req.body.txt_telefono;
        var genero = req.body.txt_genero;
        if(genero==0){
            genero=false;
          }else{
            genero=true;
          }
        const email = req.body.txt_email;
        const fecha_nacimiento = req.body.txt_fecha_nacimiento;
        if(btn_crear){
            conectar.query('INSERT INTO estudiantes set ?', {carne:carne, nombres:nombres, apellidos:apellidos, direccion:direccion,
                telefono:telefono, genero:genero, email:email, fecha_nacimiento:fecha_nacimiento},(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.redirect('/')
                    }
                


         })
        
    }
        if(btn_actualizar){
        
            conectar.query('update estudiantes set ? where id_estudiante = ?', [{carne:carne, nombres:nombres, apellidos:apellidos, direccion:direccion,
                telefono:telefono, genero:genero, email:email, fecha_nacimiento:fecha_nacimiento}, id_estudiante ],(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.redirect('/')
                    }
                


         })
        
        
        }
        if(btn_eliminar){
            conectar.query('delete from estudiantes where id_estudiante = ?', [ id_estudiante ],(error,results)=>{
                    if(error){
                        console.log(error)
                    }else{
                        res.redirect('/')
                    }
                


         })
        }
    
    
    }



export{crud_estudiantes}