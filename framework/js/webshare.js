// VERSION 23.12.16

// WEBSHARE START

const shareData = {
    title: "💧 doutrina.org",
    text: "❤️ Amai-vos e 🎓 instruí-vos!",
    url: "https://doutrina.org",
};

const btn = document.querySelector("#webshare");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);
        resultPara.textContent = "Compartilhado com sucesso!";
    } catch (err) {
        resultPara.textContent = `Erro ao compartilhar`;
    }
});

// WEBSHARE END