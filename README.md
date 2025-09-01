# Landind Page Aparecida do Norte - Pagina de Turismo.

  Este repositório contém o código de uma landing page desenvolvido como um guia de design responsivo para criação de sites, templates e landing page.

## Tecnologias Utilizadas

  **ESTRUTURA HTML:**
  
    ```
      <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="style.css">
        <title> Santuário Nacional de Aparecida </title>
    </head>
      
    <body>
        <!--Modal Structure-->
        <div>
            <div >
              <span </span>
                <img id="" src="" alt="">
                <div id=""></div>
            </div>
        </div>
            <div class="">
                <h1></h1>
                    <div class="">
                    <img src="" 
                    alt=""/>                  
                        <p></p>
                    </div>
                    <div >            
                    <img src="" 
                    alt="/>    
                    <h2></h2>
                        <p></p>
                    </div>
                    <div class="">
                        <img  src=""
                    alt="/>
                        <div class="">
                        <h3></h3>
                            <ul><h3></h3>
                                <p></p>
                                <h3></h3>
                                <p></p>
                                <h3></h3>
                                <p> </p></ul>
                        <h3><i></i></h3>
                    </div>
            </div>
            <main class="">
                <div id=""></div>
                    <div class="">
                        <a href="" target="_blank" name="">
                            <img loading="lazy" src=""
                            alt="">
                        </a>
                        <span></span>
                    </div>
                    <div class="">
                        <a href=""  target="_blank" name="">
                            <img loading="lazy" src="" alt="">
                        </a>
                        <span> </span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="" alt="">
                        </a>
                        <span> </span>
                    </div>
                    <div class="r">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="" alt="" >
                        </a>
                        <span> </span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="" alt="">
                        </a>
                        <span> </span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="" 
                        alt="">
                        </a>
                        <span> </span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="" alt="">
                        </a>
                        <span> </span>
                    </div>
                    <div class="">
                        <a href="">
                        <img loading="lazy" src="" 
                        alt="">
                        </a>
                        <span> </span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src=""
                        alt="">
                        </a>
                        <span></span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="">
                        </a>
                        <span>0</span>
                    </div>
                    <div class="">
                        <a href="" target="_blank" name="">
                        <img loading="lazy" src="" alt="">
                        </a>
                        <span> </span>
                    </div>
                </div>
                <footer>
                    <span><a href=""> </a> </span>
                </footer>
            </main>   
    </body>
    </html>
    ```

---

  ## **CSS: Estilização e responsividade do layout.**

  
  __Tipografia (fonte) utilizada:__
  
     font-family: "Playfair", serif;
---  
  __Ajusta a proporção da imagem para caber no container disponível pra ela sem distorcer.__
  
    object-fit: cover;
---   
   __grid-template-columns ==> faz parte da especificação CSS Grid Layout.__
   __A função auto-fit ==> usa o espaço disponível e aceita um valor percentil como o tamanho máximo permitido para uma trilha de grade , garantindo que a trilha nunca ultrapasse e nunca diminua além de um mínimo.__
   
      grid-template-columns: repeat(auto-fit, minmax(600px, 2fr)); 
     
 __==>Define que as colunas de um contêiner de grade possua o tamanho de 2 frames, especificando o tamanho das trilhas da grade e seus nomes de linha.__

---   
   __@media ==> especifica uma consulta de mídia e um bloco de CSS a ser aplicado ao documento se, e somente se, a consulta de mídia corresponder ao dispositivo no qual o conteúdo está sendo usado.__
   __max-width ==> A propriedade max-width em CSS é usada para definir a largura máxima de um elemento especificado.__
     
## **Responsive design**
   
    @media (max-width: 768px) {
      .cabecalho h1 {
        font-size: 2rem;
      }

---
  __A declaração CSS transform: translateY(-5px); ==> aplica uma transformação 2D a um elemento HTML, especificamente movendo-o verticalmente.__

      .container:hover {
        transform: translateY(-5px);

---
  __==> Z-INDEX ==> é uma propriedade CSS que define a ordem de empilhamento de um elemento posicionado, como um "nível de pilha" ou profundidade no eixo Z.__

     .modal {
     z-index: 1000; 

---
## **Pseudoclasses Utilizadas:**
  
  __.close:hover ==> A pseudoclasse :hover em CSS seleciona elementos quando o cursor do mouse está sobre eles.__
  
  __.close:focus {#} ===> A pseudoclasse :focus em CSS é usada para estilizar um elemento que está atualmente sendo alvo do mause ou ...__

     .close:hover, .close:focus {
          color: rgb(255, 255, 255); }

---          

# ESTRUTURA JAVA SCRIPT
      
      ```
        //* Modal functionality for image grid
        document.addEventListener("DOMContentLoaded", function () {
          const modal = document.getElementById("imageModal")
          const modalImg = document.getElementById("modalImg")
          const modalCaption = document.getElementById("modalCaption")
          const closeBtn = document.querySelector(".modal .close")
        
          // Attach click event to each container
          document.querySelectorAll(".container").forEach((container) => {
            container.addEventListener("click", function () {
              const img = this.querySelector("img")
              const caption = this.querySelector("span")
              modal.style.display = "block"
              modalImg.src = img.src
              modalImg.alt = img.alt
              modalCaption.textContent = caption.textContent
            })
          })
          // Close modal on X click
          closeBtn.onclick = function () {
            modal.style.display = "none"
          }
        
          // Close modal on outside click
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none"
            }
          }
        })
    ```

## **JavaScript configura a funcionalidade modal para uma grade de imagens, onde clicar em uma imagem dentro de um `.container` exibe uma versão maior em um pop-up modal com uma legenda.**

  1. Aguarda o carregamento do DOM antes de executar.
  2. Obtém os elementos modal necessários.
  3. Abre o modal e atualiza a imagem e a legenda ao clicar na imagem.
  4. Fecha o modal ao clicar no botão de fechar (`.close`) ou fora do modal.
   
---

## **Adiciona uma verificação da existência de elementos (opcional, mas mais seguro)**
  **Se a estrutura da página mudar, isso evita erros:**

      ```js
            if (!modal || !modalImg || !modalCaption || !closeBtn) return;```

---

 ## **Adiciona acessibilidade ao teclado ( exemplo: fechar com a tecla `Esc`:**

    ```js
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      }
    });
    ```
---
## **Correspondendo a estrutura do HTML:**

    ```html
    <div class="container">
    <img src="img1.jpg" alt="Image 1 description">
    <span>Esta é a imagem 1</span>
    </div>
    
    <!-- Modal -->
    <div id="imageModal" class="modal">
    <span class="close">&times;</span>
    <img id="modalImg" class="modal-content">
    <div id="modalCaption"></div>
    </div>
    ```

---

## **✅Lembrete**
    
  **CSS (para funcionalidade modal)**

**Verificar se as classes modal e `.close` estão estilizadas corretamente:**

    ```css
    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      padding-top: 60px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.8);
      }
    
    .modal-content {
      margin: auto;
      display: block;
      max-width: 80%;
      }
    
    .close {
      position: absolute;
      top: 15px;
      right: 35px;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      cursor: pointer;
      }
    ```

---
# **Aprimora o carregamento de imagens (aprimoramento opcional de UX):**

## **Como adicionar um spinner de carregamento e um efeito de fade-in ao exibir uma imagem modal.**

      Exibe um spinner enquanto a imagem está carregando.
      A imagem aparece gradualmente após o carregamento completo.
    
    🔧 1. Estrutura HTML
    
    Adicione um elemento de spinner de carregamento dentro do modal:
    
    <!-- Modal -->
    <div id="imageModal" class="modal">
    <span class="close">&times;</span>
    
    <!-- Spinner -->
    <div class="spinner" id="spinner"></div>
    
    <!-- Image -->
    <img id="modalImg" class="modal-content fade-in">
    <div id="modalCaption"></div>
    </div>

## **🎨 2. Estilo CSS**

      ````/* Estilo do spinner */
      .spinner {
        border: 6px solid #f3f3f3;
        border-top: 6px solid #555;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        z-index: 1001;
      }
      
      @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      
      /* Efeito de fade-in para imagem */
        .fade-in {
          opacity: 0;
          transition: opacity 0.5s ease-in;
        }
      
      .fade-in.show {
        opacidade: 1;
        }
      ````

## **🧠 3. JavaScript atualizado**

    ````
        document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImg");
        const modalCaption = document.getElementById("modalCaption");
        const closeBtn = document.querySelector(".modal .close");
        const spinner = document.getElementById("spinner");
        
        document.querySelectorAll(".container").forEach((container) => {
        container.addEventListener("click", function () {
        const img = this.querySelector("img");
        const caption = this.querySelector("span");
        
        // Mostrar modal e spinner
        modal.style.display = "block";
        spinner.style.display = "block";
        modalImg.classList.remove("show"); // redefine o fade-in
        
        // Começa a carregar a nova imagem
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.textContent = caption.textContent;
        });
        });
        
        // Aguarde até que a imagem esteja totalmente carregada antes de exibi-la
        modalImg.onload = function () {
        spinner.style.display = "none";
        modalImg.classList.add("show"); // fade-in
        };
        
        closeBtn.onclick = function () {
        modal.style.display = "none";
        spinner.style.display = "none";
        };
        
        window.onclick = function (event) {
        if (event.target === modal) {
        modal.style.display = "none";
        spinner.style.display = "none";
        }
        };
        
        // Opcional: Fechar com a tecla ESC
        document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        spinner.style.display = "none";
        }
        });
        });
    ````

## **Etapas:**

  ### =>  O spinner é exibido durante o carregamento da imagem. 
  ### =>  modalImg.onload aguarda o carregamento da imagem, oculta o spinner e aciona um fade-in. 
  ### => .fade-in com .show usa transição de opacidade.

