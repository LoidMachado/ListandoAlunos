const modal = document.querySelector(".modalContainer")
const tbody = document.querySelector(".tbody")
const nome = document.querySelector("#m-nome")
const numero = document.querySelector("#m-numero")
const turma = document.querySelector("#m-turma")
const btnSalvar = document.querySelector("#btnSalvar")

let itens
let id

function OpenModal() {
    modal.classList.add('active')

    modal.onClick = e =>{       
        if (e.target.className.indexOf('modalContainer') !== -1 ) {
            modal.classList.remove('active')
            
        }
    }
    
}

const alunos = JSON.parse(localStorage.getItem("NovosAlunos")) || Array()
const {novoNome,novoNumero,novaTurma}=alunos
let alunosExistentes = [
    {
        novoNome:"Aline",
        novoNumero:"1234",
        novaTurma:"A"
    },
    {
        novoNome:"Jorgina",
        novoNumero:"1234",
        novaTurma:"A"
    },
    {
        novoNome:"Machado",
        novoNumero:"1234",
        novaTurma:"A"
    }
]
function RenderAlunosNovos() {
    tbody.innerHTML=""
    alunos.map(aluno=>{
        
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        tr.className="tr"
        td1.className="td1"
        td2.className="td2"
        td3.className="td3"

        td1.innerHTML = `${aluno.novoNome}`
        td2.innerHTML = `${aluno.novoNumero}`
        td3.innerHTML = `${aluno.novaTurma}`


        tbody.appendChild(tr)  
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        
    })
}
RenderAlunosNovos()
function AddNovosAlunos(e) {
    if (nome.value=="" || numero.value=="" || turma.value=="") {
        return""
    }
    e.preventDefault()
    if (id !== undefined) {
        itens[id].nome= nome.value
        itens[id].numero= numero.value
        itens[id].turma= turma.value
    }
    else{
        var novoNome = nome.value
        var novoNumero = numero.value
        var novaTurma = turma.value
        nome.value = ""
        numero.value = ""
        turma.value = ""
    alunos.push({novoNome,novoNumero,novaTurma})
    alunosExistentes.push(...alunos)
}
save()
modal.classList.remove('active')
id=undefined
    RenderAlunosNovos()
}
function save() {
    localStorage.setItem("NovosAlunos", JSON.stringify(alunos))
    localStorage.setItem("AlunosExistentes", JSON.stringify(alunosExistentes))
}

btnSalvar.addEventListener("click", AddNovosAlunos)