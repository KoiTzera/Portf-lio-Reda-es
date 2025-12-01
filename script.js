
const redacoes = [
    {
        titulo: "Quem sou eu no Mundo",
        texto: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
A reflexão sobre identidade, escolhas e autodescoberta nos guia a compreender nosso papel no mundo.
Esta redação explora a importância do autoconhecimento e do desenvolvimento pessoal.`
    },

    {
        titulo: "2",
        texto: `222222222222222222222222222222.`
    },



];

function abrirRedacao(index) {
    document.getElementById("modalRedacaoLabel").textContent = redacoes[index].titulo;
    document.getElementById("modalRedacaoTexto").textContent = redacoes[index].texto;

    const modal = new bootstrap.Modal(document.getElementById("modalRedacao"));
    modal.show();
}


const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const secao = document.querySelector(link.getAttribute("href"));

        window.scrollTo({
            top: secao.offsetTop - 70,
            behavior: "smooth",
        });

        ativaLink(link);
    });
});


function ativaLink(linkAtivo) {
    menuLinks.forEach(l => l.classList.remove("active"));
    linkAtivo.classList.add("active");
}


const secoes = document.querySelectorAll("section");
let timeoutTrocaClasse;

window.addEventListener("scroll", () => {
    let posicaoAtual = window.scrollY + 120;

    secoes.forEach(sec => {
        if (posicaoAtual >= sec.offsetTop && posicaoAtual < sec.offsetTop + sec.offsetHeight) {
            const id = sec.getAttribute("id");
            const linkCorrespondente = document.querySelector(`.menu a[href="#${id}"]`);

            clearTimeout(timeoutTrocaClasse);
            timeoutTrocaClasse = setTimeout(() => {
                ativaLink(linkCorrespondente);
            }, 120);
        }
    });
});
