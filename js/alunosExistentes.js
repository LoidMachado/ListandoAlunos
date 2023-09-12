const tbody = document.querySelector(".tbody")

const alunosExistentes = JSON.parse(localStorage.getItem("AlunosExistentes")) || Array()
const {novoNome,novoNumero,novaTurma}=alunosExistentes

function RenderAlunosExistentes() {
    tbody.innerHTML=""
    alunosExistentes.map(aluno=>{
        
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var btnApagar = document.createElement("button")
        var iconApagar = document.createElement("i")
        var posicaoDoElemento = alunosExistentes.indexOf(aluno)
        iconApagar.setAttribute("onClick", `RemoverAluno(${posicaoDoElemento})`)
        tr.className="tr"
        td1.className="td1"
        td2.className="td2"
        td3.className="td3"
        td4.className="td4"
        iconApagar.className = "fa fa-edit";
    
        
        td1.innerHTML = `${aluno.novoNome}`
        td2.innerHTML = `${aluno.novoNumero}`
        td3.innerHTML = `${aluno.novaTurma}`


        tbody.appendChild(tr)  
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        btnApagar.appendChild(iconApagar)
        tr.appendChild(td4)

        td4.appendChild(btnApagar)
        
    })
}
RenderAlunosExistentes()

function RemoverAluno(index) {
    alunosExistentes.splice(index,1)
    RenderAlunosExistentes()
    save()
}
function save() {
    localStorage.setItem("AlunosExistentes", JSON.stringify(alunosExistentes))
}
