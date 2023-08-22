import './index.css'

function Corpo() {

  window.addEventListener('load',function(){

    const valores=fetch('https://opentdb.com/api.php?amount=30&category=18').then(res=>{
    
    res.json().then(dados=>{
        mostraDados(dados);
    });
    }).catch(erro=>{
    
        console.log(erro+" erro na requisição")
    
    });
    
    });
    
    function mostraDados(dados){
        const api=document.querySelector('#api');
    
        dados.forEach(acesso =>{
            api.innerHTML += `<tr>  <td> ${acesso.question} </td> 
                                    <td> ${acesso.difficulty} </td> 
                                
            `                                          
        })        
    }

  return (
    <>
      <table id='api'>

        <tr>
            <td> </td>    
            <td> Questao: </td>
            <td> Dificuldade: </td>
        </tr>
    </table>
    </>
  )
}

export default Corpo