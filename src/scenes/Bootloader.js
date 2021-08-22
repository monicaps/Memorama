class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Escena Bootloader");
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        this.load.image("constelacion","constelacion.png");
        this.load.image("kid","telescopio.png");
        this.load.image("planeta","tierra.jpg");
        this.load.image("telescopecard","telescope.jpg"); //tarjetas 
        this.load.image("marcianocard","marciano.jpg");
        this.load.image("estrellacard","estrella1.jpg");
        this.load.image("cangrejocard","cancer.jpg");
        this.load.image("leoncard","leon.jpg");
        this.load.image("torocard","torito.jpg");
        this.load.image("venuscard","venus.jpg");
        this.load.image("libracard","libra.jpg");
        this.load.image("lunacard","moon.jpg");
        this.load.image("escorpioncard","scorpion.jpg");
        this.load.image("gana","fondoGana.jpg");
        this.load.image("pro","nebulosa.jpg");
        this.load.audio("fondo","soundtrack.mp3");
        this.load.audio("cardTheme","grillo.mp3");
    }
    create() {
        this.constelacion = this.add.image(350,150,"constelacion");
        this.kid=this.add.image(100,100,"kid");
        this.planeta=this.add.image(1500,500,"planeta");
        const eventos=Phaser.Input.Events;
        //musica de tarjetas y fondo
        let MusicFondo=this.sound.add("fondo");
        MusicFondo.play();
        MusicFondo.setLoop(true);
        console.log("Musica de fondo reproduciendo");
        let flip=this.sound.add("cardTheme");
        //configuracion del escenario del fondo
        this.planeta.setDepth(0);
        this.planeta.setPosition(850,630);
        this.planeta.setAlpha(1,0.3);
        this.planeta.setDisplaySize(1550,400);
        this.constelacion.setDepth(0);
        this.constelacion.y=200;
        this.kid.setDepth(1);
        this.kid.setPosition(50,610);
        this.apoyo = 1;
        //fondo de pantalla ganador
        this.Ganar = this.add.image(640, 300, "gana").setAlpha(0);
        this.Ganar.setDepth(2);
        //configuracion de cartas con sus duplicados
        this.telescopio= this.add.image(50,50,"telescopecard");
        this.marciano= this.add.image(50,50,"marcianocard");
        this.estrella= this.add.image(50,50,"estrellacard");
        this.cangrejo= this.add.image(50,50,"cangrejocard");
        this.leon= this.add.image(50,50,"leoncard");
        this.toro= this.add.image(50,50,"torocard");
        this.venus= this.add.image(50,50,"venuscard");
        this.libra= this.add.image(50,50,"libracard");
        this.luna= this.add.image(50,50,"lunacard");
        this.escorpion= this.add.image(50,50,"escorpioncard");
        this.telescopio2= this.add.image(50,50,"telescopecard");
        this.marciano2= this.add.image(50,50,"marcianocard");
        this.estrella2= this.add.image(50,50,"estrellacard");
        this.cangrejo2= this.add.image(50,50,"cangrejocard");
        this.leon2= this.add.image(50,50,"leoncard");
        this.toro2= this.add.image(50,50,"torocard");
        this.venus2= this.add.image(50,50,"venuscard");
        this.libra2= this.add.image(50,50,"libracard");
        this.luna2= this.add.image(50,50,"lunacard");
        this.escorpion2= this.add.image(50,50,"escorpioncard");

        //protectores de las cartas
        this.card1=this.add.image(50,50,"pro").setInteractive(); //telescopio1
        this.card2=this.add.image(50,50,"pro").setInteractive(); //marciano1
        this.card3=this.add.image(50,50,"pro").setInteractive(); //estrella1
        this.card4=this.add.image(50,50,"pro").setInteractive(); //cangrejo1
        this.card5=this.add.image(50,50,"pro").setInteractive(); //leon1
        this.card6=this.add.image(50,50,"pro").setInteractive(); //torito1
        this.card7=this.add.image(50,50,"pro").setInteractive(); //venus1
        this.card8=this.add.image(50,50,"pro").setInteractive(); //libra1
        this.card9=this.add.image(50,50,"pro").setInteractive(); //luna
        this.card10=this.add.image(50,50,"pro").setInteractive(); //escorpion
        this.card11=this.add.image(50,50,"pro").setInteractive(); //
        this.card12=this.add.image(50,50,"pro").setInteractive(); //
        this.card13=this.add.image(50,50,"pro").setInteractive(); //
        this.card14=this.add.image(50,50,"pro").setInteractive(); //
        this.card15=this.add.image(50,50,"pro").setInteractive(); //
        this.card16=this.add.image(50,50,"pro").setInteractive(); //
        this.card17=this.add.image(50,50,"pro").setInteractive(); //
        this.card18=this.add.image(50,50,"pro").setInteractive(); //
        this.card19=this.add.image(50,50,"pro").setInteractive(); //
        this.card20=this.add.image(50,50,"pro").setInteractive(); //
        //telescopio
        this.telescopio.setDepth(1);
        this.telescopio.setPosition(490,80);
        this.telescopio.setScale(0.25,0.25);
        this.card1.setScale(0.15,0.19);
        this.card1.setPosition(490,80);
        this.card1.setDepth(1);
        //this.card1.setVisible(false);
        //marciano
        this.marciano.setDepth(1);
        this.marciano.setPosition(490,250);
        this.marciano.setScale(0.18,0.18);
        this.card2.setScale(0.15,0.19);
        this.card2.setPosition(490,250);
        this.card2.setDepth(1);
        //this.card2.setVisible(false);
        //estrella
        this.estrella.setDepth(1);
        this.estrella.setPosition(490,420);
        this.estrella.setScale(0.35,0.35);
        this.card3.setScale(0.15,0.19);
        this.card3.setPosition(490,420);
        this.card3.setDepth(1);
        //this.card3.setVisible(false);
        //cangrejo
        this.cangrejo.setDepth(1);
        this.cangrejo.setPosition(670,80);
        this.cangrejo.setScale(0.22,0.26);
        this.card4.setScale(0.15,0.19);
        this.card4.setPosition(670,80);
        this.card4.setDepth(1);
        //this.card4.setVisible(false);
        //leon
        this.leon.setDepth(1);
        this.leon.setPosition(670,250);
        this.leon.setScale(0.15,0.18);
        this.card5.setScale(0.15,0.19);
        this.card5.setPosition(670,250);
        this.card5.setDepth(1);
        //this.card5.setVisible(false);
        //torito
        this.toro.setDepth(1);
        this.toro.setPosition(850,80);
        this.toro.setScale(0.4,0.32);
        this.card6.setScale(0.15,0.19);
        this.card6.setPosition(850,80);
        this.card6.setDepth(1);
        //this.card6.setVisible(false);
        //venus
        this.venus.setDepth(1);
        this.venus.setPosition(850,250);
        this.venus.setScale(0.27,0.3);
        this.card7.setScale(0.15,0.19);
        this.card7.setPosition(850,250);
        this.card7.setDepth(1);
        //this.card7.setVisible(false);
        //libra
        this.libra.setDepth(1);
        this.libra.setPosition(850,420);
        this.libra.setScale(0.3,0.25);
        this.card8.setScale(0.15,0.19);
        this.card8.setPosition(850,420);
        this.card8.setDepth(1);
        //this.card8.setVisible(false);
        //luna
        this.luna.setDepth(1);
        this.luna.setPosition(1020,80);
        this.luna.setScale(0.39,0.39);
        this.card9.setScale(0.15,0.19);
        this.card9.setPosition(1020,80);
        this.card9.setDepth(1);
        //this.card9.setVisible(false);
        //escorpion
        this.escorpion.setDepth(1);
        this.escorpion.setPosition(1020,250);
        this.escorpion.setScale(0.11,0.18);
        this.card10.setScale(0.15,0.19);
        this.card10.setPosition(1020,250);
        this.card10.setDepth(1);
        //this.card10.setVisible(false);
        // segundo telescopio
        this.telescopio2.setDepth(1);
        this.telescopio2.setPosition(1020,420);
        this.telescopio2.setScale(0.25,0.25);
        this.card11.setScale(0.15,0.19);
        this.card11.setPosition(1020,420);
        this.card11.setDepth(1);
        //this.card11.setVisible(false);
        //segundo marciano
        this.marciano2.setDepth(1);
        this.marciano2.setPosition(670,420);
        this.marciano2.setScale(0.18,0.18);
        this.card12.setScale(0.15,0.19);
        this.card12.setPosition(670,420);
        this.card12.setDepth(1);
        //this.card12.setVisible(false);
        //segunda estrella
        this.estrella2.setDepth(1);
        this.estrella2.setPosition(1200,250);
        this.estrella2.setScale(0.35,0.35);
        this.card13.setScale(0.15,0.19);
        this.card13.setPosition(1200,250);
        this.card13.setDepth(1);
        //this.card13.setVisible(false);
        //segunda cancer
        this.cangrejo2.setDepth(1);
        this.cangrejo2.setPosition(1200,420);
        this.cangrejo2.setScale(0.22,0.26);
        this.card14.setScale(0.15,0.19);
        this.card14.setPosition(1200,420);
        this.card14.setDepth(1);
        //this.card14.setVisible(false);
        //segunda leon
        this.leon2.setDepth(1);
        this.leon2.setPosition(1200,80);
        this.leon2.setScale(0.15,0.18);
        this.card15.setScale(0.15,0.19);
        this.card15.setPosition(1200,80);
        this.card15.setDepth(1);
        //this.card15.setVisible(false);
        //segunda torito
        this.toro2.setDepth(1);
        this.toro2.setPosition(1020,570);
        this.toro2.setScale(0.4,0.32);
        this.card16.setScale(0.15,0.19);
        this.card16.setPosition(1020,570);
        this.card16.setDepth(1);
        //this.card16.setVisible(false);
        //segunda venus
        this.venus2.setDepth(1);
        this.venus2.setPosition(490,570);
        this.venus2.setScale(0.27,0.3);
        this.card17.setScale(0.15,0.19);
        this.card17.setPosition(490,570);
        this.card17.setDepth(1);
        //this.card17.setVisible(false);
        //segunda libra
        this.libra2.setDepth(1);
        this.libra2.setPosition(670,570);
        this.libra2.setScale(0.3,0.25);
        this.card18.setScale(0.15,0.19);
        this.card18.setPosition(670,570);
        this.card18.setDepth(1);
        //this.card18.setVisible(false);
        // segunda luna
        this.luna2.setDepth(1);
        this.luna2.setPosition(850,570);
        this.luna2.setScale(0.39,0.39);
        this.card19.setScale(0.15,0.19);
        this.card19.setPosition(850,570);
        this.card19.setDepth(1);
        //this.card19.setVisible(false);
        //segunda escorpion
        this.escorpion2.setDepth(1);
        this.escorpion2.setPosition(1200,570);
        this.escorpion2.setScale(0.11,0.18);
        this.card20.setScale(0.15,0.19);
        this.card20.setPosition(1200,570);
        this.card20.setDepth(1);
        //this.card20.setVisible(false);
        //parejas de cartas
        this.card1.setName('card1');
        this.card11.setName('card1');
        this.card2.setName('card2');
        this.card12.setName('card2');
        this.card3.setName('card3');
        this.card13.setName('card3');
        this.card4.setName('card4');
        this.card14.setName('card4');
        this.card5.setName('card5');
        this.card15.setName('card5');
        this.card6.setName('card6');
        this.card16.setName('card6');
        this.card7.setName('card7');
        this.card17.setName('card7');
        this.card8.setName('card8');
        this.card18.setName('card8');
        this.card9.setName('card9');
        this.card19.setName('card9');
        this.card10.setName('card10');
        this.card20.setName('card10');

        this.nombres = {};
        this.nombres[0] = this.card1;
        this.nombres[1] = this.card2;
        this.nombres[2] = this.card3;
        this.nombres[3] = this.card4;
        this.nombres[4] = this.card5;
        this.nombres[5] = this.card6;
        this.nombres[6] = this.card7;
        this.nombres[7] = this.card8;
        this.nombres[8] = this.card9;
        this.nombres[9] = this.card10;
        this.nombres[10] = this.card11;
        this.nombres[11] = this.card12;
        this.nombres[12] = this.card13;
        this.nombres[13] = this.card14;
        this.nombres[14] = this.card15;
        this.nombres[15] = this.card16;
        this.nombres[16] = this.card17;
        this.nombres[17] = this.card18;
        this.nombres[18] = this.card19;
        this.nombres[19] = this.card20;

        this.nom1 = '';
        this.nom2 = '';

        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
            gameObject.setTint('0x00ff00');
        });
        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
            gameObject.clearTint();
        });

        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
            gameObject.setVisible(false);
            if (this.nom1 == '') {
                this.nom1 = gameObject.name;
                flip.play();
                console.log("Clip de carta 1 reproduciendo");
            } else if (this.nom2 == '') {
                this.nom2 = gameObject.name;
                flip.play();
                console.log("Clip de carta 2 reproduciendo");
            } else {
                console.log('Aguarda un momento, escoge tu carta sabiamente');
                //alert("Aguarda.! Escoge tu carta sabiamente");
            }
        });

    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        //configuracion de los movimientos del escenario
        var lateralIzq=500;
        var lateralDer=250;
        this.constelacion.x+= this.apoyo;
        if(this.constelacion.x >= lateralIzq){
            this.apoyo = -1;
            this.constelacion.flipX = 1;
            this.constelacion.setTint("0x00FF00");
        }
        if(this.constelacion.x <= lateralDer){
            this.apoyo = 1;
            this.constelacion.flipX = 0;
            this.constelacion.clearTint();
        }

        //configuracion del emparejamiento de las cartas (coincidencias)
        if (this.card1.visible == false && this.card2.visible == false && this.card3.visible == false &&
            this.card4.visible == false && this.card5.visible == false && this.card6.visible == false &&
            this.card7.visible == false && this.card8.visible == false && this.card9.visible == false &&
            this.card10.visible == false && this.card11.visible == false && this.card12.visible == false &&
            this.card13.visible == false && this.card14.visible == false && this.card15.visible == false &&
            this.card16.visible == false && this.card17.visible == false && this.card18.visible == false &&
            this.card19.visible == false && this.card20.visible == false) {
                console.log('ENCONTRASTE TODOS LOS PARES..');
                this.tweens.add({
                    targets: this.Ganar,
                    alpha: { value: 1, duration: 3000, ease: 'Power1' },
                    yoyo: false
                });
        }

        if (this.nom1 != '' && this.nom2 != '')
        {
            if (this.nom1 == this.nom2)
            {
                console.log('ENCONTRASTE UN PAR');
                this.nom1 = '';
                this.nom2 = '';
            } else{
                var timedEvent = this.time.delayedCall(1100, onEvent, [], this);
                this.card1.input.enabled = false;
                this.card2.input.enabled = false;
                this.card3.input.enabled = false;
                this.card4.input.enabled = false;
                this.card5.input.enabled = false;
                this.card6.input.enabled = false;
                this.card7.input.enabled = false;
                this.card8.input.enabled = false;
                this.card9.input.enabled = false;
                this.card10.input.enabled = false;
                this.card11.input.enabled = false;
                this.card12.input.enabled = false;
                this.card13.input.enabled = false;
                this.card14.input.enabled = false;
                this.card15.input.enabled = false;
                this.card16.input.enabled = false;
                this.card17.input.enabled = false;
                this.card18.input.enabled = false;
                this.card19.input.enabled = false;
                this.card20.input.enabled = false;
            }
        }
    }
}

function onEvent() {
    for (var i = 0; i < 20; i++) {
        if (this.nombres[i].name == this.nom1 || this.nombres[i].name == this.nom2) {
            this.nombres[i].setVisible(true);
        }
    }
    this.nom1 = '';
    this.nom2 = '';
    this.card1.input.enabled = true;
    this.card2.input.enabled = true;
    this.card3.input.enabled = true;
    this.card4.input.enabled = true;
    this.card5.input.enabled = true;
    this.card6.input.enabled = true;
    this.card7.input.enabled = true;
    this.card8.input.enabled = true;
    this.card9.input.enabled = true;
    this.card10.input.enabled = true;
    this.card11.input.enabled = true;
    this.card12.input.enabled = true;
    this.card13.input.enabled = true;
    this.card14.input.enabled = true;
    this.card15.input.enabled = true;
    this.card16.input.enabled = true;
    this.card17.input.enabled = true;
    this.card18.input.enabled = true;
    this.card19.input.enabled = true;
    this.card20.input.enabled=true;
}

export default Bootloader;