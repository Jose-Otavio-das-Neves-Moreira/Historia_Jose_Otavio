
function investigar1(){
    var html = '<div class="container">';
    html += '<p> Você vai até a floresta e percebe que aquele som está começando a se afastar, então você prossegue mata a dentro e começa a ver uma luz. </p>'
    html += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDDP9tvNH4z_tP4BJPdXQ_rveOWIsP7hQxESG4x-geTiBEE6skjS_dVSJffm2uiXkPF4&usqp=CAU">';
    html += '<button onclick="Ir3()">Ir até a luz</button>';
    html += '<button onclick="Esperar4()">Esperar</button>';
    html += '</div>'
    
    $( "body" ).append( html );
    }
    
    
    function ignorar2(){
    var html = '<div class="container">';
    html += '<p> Você decide ignorar os sons e volta a festejar com sua famila.</p>'
    html += '<p> Exatamente as 1:33 você ouve o mesmo barulho porem dessa vez ele está se aproximando, você sente medo e um vento frio passa em seu rosto, então em um piscar de olhos você se vê sozinho. </p>'
    html += '<img src="https://latinexclusive.com/sites/default/files/styles/property_images_slider/public/api_file_downloads/5d547d9c8f76520010d0dd2f_1.jpg?itok=YGuqiFDP">';
    html += '<button onclick="Deserta5()"> Chorar </button>';
    html += '<button onclick="Casa6()">Voltar para casa.</button>';
    html += '</div>'
    
    $( "body" ).append( html );
    }
    
    
    function Ir3(){
    var html = '<div class="container">';
    html += '<p> Você se aproxima da luz e se sente atraido pela luz como se ela fosse um imã, sua mão começa a se aproximar da luz, ao encostar na luz você está preso e é obrigado a reviver seu maiores traumas e erros até sua mente colapsar. </p>'
    html += '<p>Fim <p>'
    html += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEzv5nmRUALqgj6GFbHbKT_IBpFGgFNJSZ3D3MKoIo0hzNRvnM_2nJJPiT539Zx1_TPE&usqp=CAU">';
    html += '</div>'
    
    $( "body" ).append( html );
    }
    
    
    function Esperar4(){
    var html = '<div class="container">';
    html += '<p> Você vê um pequeno vagalume encostando na luz e convulsionando, então resolve ignorar a luz.</p>'
    html += '<p> Enquanto você está virando para voltar a procurar o som, você se depara com um fauno, perante a tal visão você cai no chão e ouve ele falando seu nome e te falar essas palavras:</p>'
    html += '<p> "Siga Para o norte e não volte para o sitio, não a mais ninguem lá"</p>'
    html += '<img src="https://vitralizado.com/wp-content/uploads/2015/10/Screen-Shot-2015-10-13-at-23.20.57.png">';
    html += '<button onclick=" Perguntar7()">Perguntar mais a ele.</button>';
    html += '<button onclick="Norte8()">Ir para o norte.</button>';
    html += '</div>'
    
    $( "body" ).append( html );
    }
    
    function Deserta5(){
    var html = '<div class="container">';
    html += '<p> Você começa a chorar até o amanhecer do dia quando o dono do sitio aparece, e te questiona sobre sua familia. Você conta oque ocorreu mas ele não acredita e te leva para uma delegacia onde você vai preso pelo suposto assasinato de sua familia.</p>'
    html += '<p> Fim <p>'
    html += '<img src="https://advocaciareis.adv.br/wp-content/uploads/2023/06/prisaopreventiva-1000x563.webp">';
    html += '</div>'
    
    $( "body" ).append( html );
    }
    
    function Casa6(){
    var html = '<div class="container">';
    html += '<p> Ao voltar pra casa você se depara com o Ronald McDonald, aliviado você começa a perguntar pra ele sobre o que aconteceu ali.</p>'
    html += '<p> Ele diz para você se aproximar porque ele está com a voz rouca. Na parede ao seu Lado está o facão de seu avo</p>'
    html += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwO5Nh9VWjW6-CkaL71RhBBp1TdnWyOSgZbw&s">';    
    html += '<button onclick=" Aproximar9()">Se aproximar do Ronald.</button>';
    html += '<button onclick=" Faca10()">Pegar o Facão</button>';

    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Perguntar7(){
    var html = '<div class="container">';
    html += '<p> Você Pergunta para o Fauno sobre aonde fica o norte e o porque de não poder voltar para casa.</p>'
    html += '<p> Ele te responde: "Não há mais ninguem no sitio, a brisa fresca os levou" e apontou para o suposto norte.</p>'
    html += '<img src="https://ovicio.com.br/wp-content/uploads/2019/07/20190710-o-labirinto-do-fauno-2006-2.jpg">';
    html += '<button onclick=" Desacreditar11()"> Você não confia no Fauno e volta pra casa</button>';
    html += '<button onclick=" Acreditar12()"> Você confia no Fauno </button>';

    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Norte8(){
    var html = '<div class="container">';
    html += '<p> Você Tentar ir para o Norte mas percebe que não faz a menor ideia de onde fica o norte e se vê perdido na floresta. Você nunca mais conseguiu voltar de lá.</p>'
    html += '<p> Fim </p>'
    html += '<img src="https://elements-resized.envatousercontent.com/elements-video-cover-images/files/d3e5a87a-d7cd-42cd-90bf-fc5380a9a53c/inline_image_preview.jpg?w=500&cf_fit=cover&q=85&format=auto&s=8d30abf219053cbfccc746945313f6ddf12becaa4e63a072c67efe884cee49c9">';
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Aproximar9(){
    var html = '<div class="container">';
    html += '<p> Você se aproxima  do Ronald MC donald e quando está proximo o suficiente ele te devora.</p>'
    html += '<p> Fim </p>'
    html += '<img src="wmremove-transformed.jpeg">';
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Faca10(){
    var html = '<div class="container">';
    html += '<p> Você pega o facão do seu avô e percebe que tem algo estranho com os olhos do Ronald Mcdonald, eles parecem inquietos.</p>'
    html += '<img src="https://images-americanas.b2w.io/produtos/6305022876/imagens/facao-para-bater-mato-14-cabo-madeira-fulltang-48cm-trilha/6305022876_1_xlarge.jpg">';
    html += '<button onclick=" Aproximar9()"> Você se aproxima do Ronald Mcdonald </button>';
    html += '<button onclick=" Mata13()"> Você mata o suposto "Ronald Mcdonald" </button>';
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Desacreditar11(){
    var html = '<div class="container">';
    html += '<p> Você não acredita no fauno e volta pra casa ao chegar lá você não vê ninguem e as estruturas estão todas velhas e sujas, como se tivessem se passados anos e ninguem tivesse voltado para lá, derrepente da calma, fez-se o vento e da casa no sitio saiu o homer_simpson.exe.  </p>'
  html += '<img src="https://www.cnet.com/a/img/resize/1eef97a624ed32e5a75a50298f2cefc3c4bb323a/hub/2018/08/17/84d48fbd-b6ae-481d-9f70-5cc1dc0634af/homervasquez.jpg?auto=webp&fit=crop&height=1200&precrop=886,1024,x0,y62&width=1200">';
    html += '<button onclick=" Questionar14()"> Você pergunta "Oque???????????" </button>';
    html += '<button onclick=" GokuMondongo15()"> Você reza para o Goku mondongo </button>';
  
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Acreditar12(){
    var html = '<div class="container">';
    html += '<p> Você acredita no Fauno e segue para onde ele apontou, depois de horas de caminhada você acha o fim da mata e consegue ver uma estrada. Ao olhar para trás você percebe que não havia floresta nenhuma e se questiona se estava alucinando.</p>'
    html += '<p> Fim <p>'
    html += '<img src="https://st.depositphotos.com/1897095/1635/i/450/depositphotos_16353321-stock-photo-starry-night-road.jpg">';
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Mata13(){
    var html = '<div class="container">';
    html += '<p> Você pega o facão de seu avô e parte pra cima do Ronald Mcdonald, ele começa a implorar por sua vida mas você esta determinado a matá-lo, então atravessa o peito dele com o facão e percebe que ele se dissolve com o vento e você sente a brisa fresca denovo.</p>'
    html += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvtWHB0FfUkE8LiBYAY-EQ50XCFahloUgXAte2nnUuyN56b4b3qCbJ2eTZojjUangks0&usqp=CAU>';
    html += '<button onclick=" Balanca16()"> </button>';
    html += '<button onclick=" Balanca16()"> Você balança o facão aleatoriamente</button>';
    html += '<button onclick=" Explorar17()"> Você tenta explorar a casa </button>';
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function Questionar14(){
    var html = '<div class="container">';
    html += '<p> Você grita "Oque???" e o homer_simpson.exe te fala que agora você é obrigado a se casar com o Davy Jones: O mago dos Games. Você rejeita a proposta mas ele te da um soco e te leva para o altar e te amordaça, frente a frente com o Davy Jones: O mago dos Games, você se debate mas o casamento prossegue e no fim você se torna o brinquedinho do Davy Jones: O mago dos games tendo que viver o resto da sua vida amordaçado ao lado daquele monstro.  </p>'
    html += '<p> Fim<p>'
    html += '<img src="https://images.uncyc.org/pt/8/82/Adavajones.jpg">';
    html += '</div>'
    $( "body" ).append( html );
    }
    
    function GokuMondongo15(){
    var html = '<div class="container">';
    html += '<p> Você clama pelo Goku Mondogo com todas as suas forças, e então ele aparece e espanca o homer_simpson.exe com uma careca reluzente, quando ele termina de bater no homer_simpson.exe você corre para agradece-lô, porém a sua visão parece turva e você acorda com seu primo Cleber te chamando pra assistir Shrek para Sempre. </p>'
    html += '<p> Fim<p>'
    html += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44yD9yQt8MqFoi5A5nQH9NYKKGv2z-1BQg&s">';
    html += '</div>'
    $( "body" ).append( html );
    }

    function Balanca16(){
        var html = '<div class="container">';
        html += '<p> Você balança seu facão igual um imbecil por estar com medo e acaba cravando ele na sua propria cabeça e logicamente morrendo.</p>'
        html += '<p> Fim<p>'
        html += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_5PeXUL6A_FD2RkT59SmnxRWcv3aaLBWaXLGahzK1ShqaFmDFc5IPPQX1OIZA_avkWk&usqp=CAU">';
        html += '</div>'
        $( "body" ).append( html );
        }

    function Explorar17(){
            var html = '<div class="container">';
            html += '<p> Você começa a explorar a casa e vai até o porão, lá você encontra um circulo de ritual com uma mulher no centro. </p>'
            html += '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifRvBeN8coBVAFC-F_FsV-Q9RH0oYgocvdNqmCTvEDStK0R_uSmI5ri0QqkwxwziRQafQu5c9wNjjd_RNt1PKn9kY66bLsiikkQjHGgQgMZkpwb6a9fAMeymEhUo4313GI_AgdLRcVDehyphenhyphen/s1600/Witchcraft_by_PrettyVampire+-+Fot%C3%B3grafo+Flex.jpg">';
            html += '<button onclick=" Mulher18()"> Você ataca a mulher </button>';
            html += '<button onclick=" Conversa19()"> Você tenta conversar com a mulher </button>';
            html += '</div>'
            $( "body" ).append( html );
            }
        
    function Mulher18(){
                var html = '<div class="container">';
                html += '<img src="https://osegredo.com.br/wp-content/uploads/2014/06/contradicoes-humanas-6.webp">';
                html += '<p> Você ataca ela porem não consegue alcança-la, porem ao mover um dedo em direção a ela você congela. Em um piscar de olhos você está em outro plano cheio de lapides e com uma cova aberta, e sente seu corpo se movendo em direção daquela cova na sua frente contra sua vontade, você so pode assistir o seu corpo se colocando na cova e a terra caindo.</p>'
                html += '<p> Fim<p>'
                html += '</div>'
                $( "body" ).append( html );
                }
    function Conversa19(){
                    var html = '<div class="container">';
                    html += '<img src="https://osegredo.com.br/wp-content/uploads/2014/06/contradicoes-humanas-6.webp">';
                    html += '<p> Você tenta conversar com a mulher, porem ao mover um dedo em direção a ela você congela. Em um piscar de olhos você está em outro plano cheio de lapides e com uma cova aberta, e sente seu corpo se movendo em direção daquela cova na sua frente contra sua vontade, você so pode assistir o seu corpo se colocando na cova e a terra caindo. </p>'
                    html += '<p> Fim<p>'
                    html += '</div>'
                    $( "body" ).append( html );
                    }
    