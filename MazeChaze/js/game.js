class Game
{
    constructor(){
     
    }
   getState()
   {
     var gameStateRef=database.ref('GameState').on("value",(data)=>
     {
         gameState=data.val();
     });
   } 
   update(state)
   {
      database.ref('/').update({
          GameState:state
      })
   }
    
   async start(){
       if(gameState==0){
           player=new Player();
           
           var playerCountRef=await database.ref('PlayerCount').once("value");
           if(playerCountRef.exists()){
               playerCount=playerCountRef.val();
               player.getCount();
           }
      
       form=new FORM();
       form.display();
       }
       t=createSprite(300,275,500,500);
       t.addImage("i",tI)
       t.scale=0.45;
     
       //borders
       b1=createSprite(57, 270, 3,500);
       b2=createSprite(288,518,462,3);
       b3=createSprite(543,275, 3,490);
       b4=createSprite(313,32,460,3);
     
     
    // for(var i=329;i<500;i=i+30){
       b5=createSprite(528,330,30,3);
       b101=createSprite(528,360,30,3);
       b102=createSprite(528,390,30,3);
       b103=createSprite(528,420,30,3);
       b104=createSprite(528,450,30,3);
       b105=createSprite(528,480,30,3);
  //   }
     
     
     b6=createSprite(490,505,3,30);
     b7=createSprite(475,491,30,3);
     b8=createSprite(85,490,60,3);
     b9=createSprite(85,60,60,3);
     b10=createSprite(85,90,3,55);
     b11=createSprite(98,115,30,3);
     b12=createSprite(110,100,3,30);
     b13=createSprite(125,86,30,3);
     b14=createSprite(70,140,30,3);
     b15=createSprite(85,155,3,30);
     
     b16=createSprite(85,221,60,3);
     b17=createSprite(84,206,3,28);
     b18=createSprite(99,194,28,3);
     b19=createSprite(85,248,60,3);
     
     b20=createSprite(70,302,30,3);
     b21=createSprite(84,288,3,30);
     b22=createSprite(100,275,30,3);
     b23=createSprite(70,329,30,3);
     b24=createSprite(84,343,3,30);
     
     b25=createSprite(98,410,80,3);
     b26=createSprite(125,383,83,3);
     b27=createSprite(111,397,3,30);
     b28=createSprite(165,397,3,30);
     
     b29=createSprite(70,464,30,3);
     b30=createSprite(98,437,30,3);
     b31=createSprite(84,450,3,30);
     b32=createSprite(111,450,3,30);
     
     b33=createSprite(138,503,3,30);
     b34=createSprite(165,503,3,30);
     b35=createSprite(219,503,3,30);
     b36=createSprite(180,491,30,3);
     
     b37=createSprite(515,167,60,3);
     b38=createSprite(516,154,3,30);
     b39=createSprite(485,180,3,30);
     b40=createSprite(500,140,30,3);
     
     b41=createSprite(516,278,3,60);
     b42=createSprite(530,248,30,3);
     b43=createSprite(530,221,30,3);
     b44=createSprite(530,194,30,3);
     b45=createSprite(516,278,3,60);
     b46=createSprite(530,248,30,3);
     b47=createSprite(530,221,30,3);
     b48=createSprite(530,194,30,3);
     b49=createSprite(516,278,3,60);
     b50=createSprite(530,248,30,3);
     
     b51=createSprite(516,46,3,30);
     b52=createSprite(516,100,3,30);
     b53=createSprite(502,59,30,3);
     b54=createSprite(448,86,30,3);
     b55=createSprite(489,86,3,60);
     b56=createSprite(462,114,3,60);
     b57=createSprite(490,113,60,3)
     
     b58=createSprite(448,59,30,3);
     b59=createSprite(462,46,3,30);
     b60=createSprite(327,60,3,60);
     
     b61=createSprite(140,464,60,3);
     b62=createSprite(138,450,3,30);
     b63=createSprite(165,437,60,3);
     b64=createSprite(192,425,3,85);
     b65=createSprite(243,410,100,3);
     b66=createSprite(219,440,3,60);
     b67=createSprite(233,437,30,3);
     b68=createSprite(246,465,3,60);
     b69=createSprite(273,450,3,80);
     b70=createSprite(300,437,60,3);
     b71=createSprite(328,491,60,3);
     b72=createSprite(357,478,3,30);
     b73=createSprite(327,440,3,60);
     b74=createSprite(300,467,3,60);
     
     b75=createSprite(165,60,3,60);
     b76=createSprite(165,195,3,55);
     b77=createSprite(165,275,3,55);
     b78=createSprite(150,140,80,3);
     b79=createSprite(165,167,50,3);
     b80=createSprite(165,248,50,3);
     b81=createSprite(165,329,50,3);
     b82=createSprite(192,290,3,140)
     b83=createSprite(179,113,30,3);
     b84=createSprite(179,221,30,3);
     b85=createSprite(179,356,30,3);
     b86=createSprite(125,356,30,3);
     b87=createSprite(111,155,3,30);
     b88=createSprite(111,341,3,30);
     b89=createSprite(138,341,3,30);
     b90=createSprite(138,289,3,30);
     b91=createSprite(138,209,3,30);
     b92=createSprite(138,139,3,60);
     b93=createSprite(150,194,30,3);
     b94=createSprite(136,302,55,3);
     b95=createSprite(192,86,55,3);
     b97=createSprite(206,59,30,3);
     b98=createSprite(192,115,3,55);
     b99=createSprite(192,180,3,30);
     b100=createSprite(219,88,3,55);
     
     
     b106=createSprite(489,424,3,83);
     b107=createSprite(489,290,3,30);
     b108=createSprite(475,275,30,3);
     b109=createSprite(475,329,30,3);
     b110=createSprite(449,410,30,3);
     b111=createSprite(475,383,30,3);
     b112=createSprite(462,356,55,3);
     b113=createSprite(449,464,30,3)
     b114=createSprite(423,491,30,3);
     b115=createSprite(394,437,30,3);
     b116=createSprite(381,451,3,80);
     b117=createSprite(435,410,3,108);
     b118=createSprite(462,414,3,60);
     b119=createSprite(462,315,3,80);
     b120=createSprite(408,383,55,3);
     b121=createSprite(408,425,3,135);
     b122=createSprite(381,344,3,30);
     b123=createSprite(435,314,3,30);
     b124=createSprite(408,329,60,3);
     b125=createSprite(420,302,80,3);
     b126=createSprite(367,86,80,3);
     b127=createSprite(408,126,3,30);
     b128=createSprite(408,180,3,30);
     b129=createSprite(408,273,3,54);
     b130=createSprite(421,113,30,3);
     b131=createSprite(421,221,30,3);
     b132=createSprite(421,248,30,3);
     b133=createSprite(435,194,55,3);
     b134=createSprite(435,235,3,80);
     b135=createSprite(435,140,3,55);
     b136=createSprite(408,72,3,30);
     b137=createSprite(448,167,30,3);
     b138=createSprite(462,208,3,30);
     b139=createSprite(475,221,30,3);
     b140=createSprite(475,248,30,3);
     b141=createSprite(489,235,3,30);
     b142=createSprite(395,140,30,3);
     b143=createSprite(395,167,30,3);
     b144=createSprite(380,275,55,3);
     b145=createSprite(354,290,3,30);
     b144=createSprite(381,168,3,160);
     b145=createSprite(354,383,3,110);
     b146=createSprite(368,113,30,3);
     b147=createSprite(354,155,3,80);
     b148=createSprite(340,194,30,3);
     b149=createSprite(354,233,3,30);
     b150=createSprite(325,221,55,3);
     b151=createSprite(325,248,55,3);
     b152=createSprite(327,261,3,30);
     b153=createSprite(327,315,3,30);
     b154=createSprite(341,329,30,3);
     b155=createSprite(341,356,30,3);
     b156=createSprite(326,383,55,3);
     b157=createSprite(300,367,3,30);
     b158=createSprite(300,302,3,57);
     b159=createSprite(314,302,30,3);
     b160=createSprite(314,275,30,3);
     b161=createSprite(314,167,30,3);
     b162=createSprite(327,195,3,55);
     b163=createSprite(300,182,3,30);
     b164=createSprite(340,59,81,3);
     b165=createSprite(314,167,30,3);
     b166=createSprite(313,140,30,3);
     b167=createSprite(313,113,30,3);
     b168=createSprite(327,127,3,30);
     b169=createSprite(300,85,3,55);

     Home=createSprite(80,-10,50,50);
     Home.shapeColor="yellow";

       p1 = createSprite(520,530,15,20);
       p1.shapeColor="black";

       p2 = createSprite(365,100,15,20);
       p2.shapeColor="black";

       players=[p1,p2];

//        walls=[ b1,b2,b3,b4,
//  b5,b6,b7,b8,b9,b10,b11,
//  b12,b13,b14,b15,
//  b16,b17,b18,b19,b20,b21,b22,b23,b24,
//  b25,b26,b27,b28,
//  b29,b30,b31,b32,b33,b34,b35,
//  b36,b37,b38,b39,
//  b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50,
//  b51,b52,b53,b54,b55,b56,b57,b58,b59,b60,
//  b61,b62,b63,b64,b65,b66,b67,b68,b69,b70,b71,b72,b73,b74,
//  b75,b76,b77,b78,b79,b80,b81,b82,b83,b84,b85,
//  b86,b87,b88,b89,b90,b91,b92,b93,b93,b94,b95,b96,b97,b98,b99,b100,b101,b102,b103,b104,b105]

   }
   play()
   {
       background("red");
     form.hide();
     
     var playerInfoRef=database.ref('players');
     playerInfoRef.on("value",(data)=>
     {
         allPlayers=data.val();
     })

     if(allPlayers!==undefined){
         var index=0;
          for (var plr in allPlayers){
              index++;
              if(index-1<2){
                  if(index==player.index){
                    players[index - 1].shapeColor = "green";

      if(keyDown(UP_ARROW)){
      //  player.distance -=10;
        players[index-1].y= players[index-1].y-10;
        //players[index-1].y=
      //  player.update();
   
     }
     if(keyDown(DOWN_ARROW)){
       // player.distance +=10;
        players[index-1].y= players[index-1].y+10;
        //player.update();
    
      }
      if(keyDown(LEFT_ARROW)){
       // player.distance2 -=10;
        players[index-1].x= players[index-1].x-10;
      //  player.update();
    
      }
      if(keyDown(RIGHT_ARROW)){
       player.distance2 +=10;
        //players[index-1].x= players[index-1].x+10;
        players[index-1].x= database.ref("players/player"+player.index).set({ 
            distance2:player.distance2
        })
 
      //  player.update();
      }
       console.log("x:"+player.distance);
       console.log("y:"+player.distance2);
                  
                  }
              }
          }

     }
    // p2.collide(p1);
     p1.collide(p2);
     if(p1.isTouching(p2))
     {
      game.update(3);
      gameState=3;
     }
     if(p1.isTouching(Home))
     {
      game.update(2);
      gameState=2;
     }
     console.log(walls.length);
    /* for(var i =0;i<walls.length;i++){
        p1.collide(walls[i]);
        p2.collide(walls[i]);
        console.log(i);
        console.log(walls.length);
     }*/
     
     drawSprites();
   }
   end()
   {
    text("YOU WIN",300,300);
   }
   end2()
   {
     text("YOU LOSE",300,300);
   }
}