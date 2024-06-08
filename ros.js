//https://coolors.co/ffffea-722f37-4b5267

const misterios = Object.freeze({
    goz: "goz",
    lum: "lum",
    dol: "dol",
	glo: "glo"
});

const textos = Object.freeze({
	inicio :{
		title: "Padre Hijo Espíritu Santo",
		content: `En el nombre del Padre y del Hijo y del Espíritu Santo.
		Dios mío, ven en mi auxilio.
		Señor, date prisa en socorrerme.
		Gloria al Padre y al Hijo y al Espíritu Santo.
		Como era en el principio, ahora y siempre,
		por los siglos de los siglos. Amén.`
	},
	padreNuestro : {
		title: "Padre Nuestro",
		content: "Padre nuestro, que estás en el cielo, santificado sea tu nombre, venga a nosotros tu reino, hágase tu voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos del mal. Amén",
	},
	aveMaria : {
		title: "Avemaría",
		content:"Dios te Salve, María, llena eres de gracia, el Señor está contigo. Bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros pecadores, ahora y en la hora de nuestra muerte. Amén"
	},
	gloria : {
		title: "Gloria",
		content: "Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio ahora y siempre, por los siglos de los siglos. Amén."
	},
	madreGracia: {
		title : "María es Madre de gracia",
		content: "María es Madre de gracia y Madre de misericordia. En la vida y en la muerte, ampáranos Madre Nuestra.",
	},
	santisimo: {
		title:"Santísimo Sacramento",
		content: "Sea amado y adorado en todo momento Jesús en el Santísimo Sacramento."
	},
	ohJes: {
		title: "Oh Jesús mío",
		content :"¡Oh Jesús mío perdona nuestros pecados, líbranos del fuego del Infierno, lleva al Cielo a todas las almas, especialmente a las más necesitadas de tu infinita misericordia! Amén."
	},
	rosarioMaria: {
		title: "Rosario de María",
		content: "El Rosario de María nos libre de todo mal, alabemos noche y día a la Reina Celestial."
	},
	salve : {
		title : "Salve",
		content :"Dios te Salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra, Dios te salve.\nA ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!"
	}
});

const goz = [];
goz.push(
	{
		title: "Primer Misterio Gozoso: La Encarnación del Hijo de Dios", 
		content: "«Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David; el nombre de la virgen era María» (Lc 1,26-27)."
	},
	{
		title: "Segundo Misterio Gozoso: La Visitación de Nuestra Señora a su prima Santa Isabel", 
		content: "«En aquellos días María se puso en camino y fue aprisa a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel.\n Y sucedió que, en cuanto Isabel oyó el saludo de María, saltó de gozo el niño en su seno, e Isabel quedó llena de Espíritu Santo; y exclamando a voz en grito, dijo: \"Bendita tú entre las mujeres y bendito el fruto de tu seno\"» (Lc 1, 39-42)."
	},
	{
		title: "Tercer Misterio Gozoso: El Nacimiento del Hijo de Dios en el portal de Belén", 
		content: "«Sucedió que por aquellos días salió un edicto de César Augusto ordenando que se empadronase todo el mundo. Este primer empadronamiento tuvo lugar siendo Cirino gobernador de Siria. Iban todos a empadronarse, cada uno a su ciudad.\n Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz a su hijo primogénito, le envolvió en pañales y le acostó en un pesebre, porque no tenían sitio en el alojamiento» (Lc 2,1-7)."
	},
	{
		title: "Cuarto Misterio Gozoso: La presentación de Jesús en el Templo", 
		content: "«Cuando se cumplieron los ocho días para circuncidarle, se le dio el nombre de Jesús, como lo había llamado el ángel antes de ser concebido en el seno. Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, llevaron a Jesús a Jerusalén para presentarle al Señor, como está escrito en la Ley del Señor: Todo varón primogénito será consagrado al Señor y para ofrecer en sacrificio un par de tórtolas o dos pichones, conforme a lo que se dice en la Ley del Señor» (Lc 2, 21-24)."
	},
	{
		title: "Quinto Misterio Gozoso: El Niño Jesús perdido y hallado en el Templo", 
		content: "«Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. Cuando tuvo doce años, subieron ellos como de costumbre a la fiesta y, al volverse, pasados los días, el niño Jesús se quedó en Jerusalén, sin saberlo sus padres... \n Y sucedió que al cabo de tres días, le encontraron en el Templo sentado en medio de los maestros, escuchándoles y preguntándoles; todos los que le oían, estaban estupefactos por su inteligencia y sus respuestas» (Lc 2, 41-47)."
	},
);

const lum = [];
lum.push(
	{
		title: "Primer Misterio Luminoso: El Bautismo en el Jordán", 
		content: "«Bautizado Jesús, salió luego del agua; y en esto se abrieron los cielos y vio al Espíritu de Dios que bajaba en forma de paloma y venía sobre él. Y una voz que salía de los cielos decía: \"Este es mi Hijo amado, en quien me complazco\"». (Mt 3,16-17)."
	},
	{
		title: "Segundo Misterio Luminoso: Las bodas de Caná", 
		content: "«Tres días después se celebraba una boda en Caná de Galilea y estaba allí la madre de Jesús. Fue invitado también a la boda Jesús con sus discípulos. Y, como faltara vino, porque se había acabado el vino de la boda, le dice a Jesús su madre: \"No tienen vino\". Jesús le responde: \"¿Qué tengo yo contigo, mujer? Todavía no ha llegado mi hora\". Dice su madre a los sirvientes: \"Haced lo que él os diga\"». (Jn 2, 1-5)."
	},
	{
		title: "Tercer Misterio Luminoso: El anuncio del Reino de Dios", 
		content: "\"El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio\". (Mc 1, 15)."
	},
	{
		title: "Cuarto Misterio Luminoso: La Transfiguración", 
		content: "«Seis días después, Jesús tomó consigo a Pedro, a Santiago y a su hermano Juan, y los llevó aparte, a un monte alto. Y se transfiguró delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz» (Mt 17, 1-2)."
	},
	{
		title: "Quinto Misterio Luminoso: La institución de la Eucaristía", 
		content: "«Mientras estaban comiendo, tomó Jesús pan y lo bendijo, lo partió y, dándoselo a sus discípulos, dijo: \"Tomad, comed, éste es mi cuerpo\"» (Mt 26, 26)."
	},
);

const dol = [];
dol.push(
	{
		title: "Primer Misterio Doloroso: La oración en el Huerto", 
		content: "«Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus discípulos: \"Sentaos aquí mientras voy a orar\". Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia. Entonces les dijo: \"Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo\". Y adelantándose un poco, cayó rostro en tierra, y suplicaba así: \"Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú\"» (Mt 26, 36-39)."
	},
	{
		title: "Segundo Misterio Doloroso: La flagelación de Jesús atado a la columna", 
		content: "«Pilato puso en libertad a Barrabás; y a Jesús, después de haberlo hecho azotar, lo entregó para que fuera crucificado» (Mt 27, 26)."
	},
	{
		title: "Tercer Misterio Doloroso: La coronación de espinas", 
		content: "«Entonces los soldados del procurador llevaron consigo a Jesús al pretorio y reunieron alrededor de él a toda la cohorte. Lo desnudaron y le echaron encima un manto de púrpura y, trenzando una corona de espinas, se la pusieron sobre la cabeza, y en su mano derecha una caña, y doblando la rodilla delante de él, le hacían burla diciendo: \"Salve, Rey de los judíos\"». (Mt 27, 27-29)."
	},
	{
		title: "Cuarto Misterio Doloroso: Jesús con la Cruz a cuestas camino del Calvario", 
		content: "«Y obligaron a uno que pasaba, a Simón de Cirene, que volvía del campo, el padre de Alejandro y de Rufo, a que llevara su cruz. Lo condujeron al lugar del Gólgota, que quiere decir de la \"Calavera\"» (Mc 15, 21-22)."
	},
	{
		title: "Quinto Misterio Doloroso: La crucifixión y muerte de Jesús", 
		content: "«Llegados al lugar llamado \"La Calavera\", le crucificaron allí a él y a los dos malhechores, uno a la derecha y otro a la izquierda. Jesús decía: \"Padre, perdónales, porque no saben lo que hacen\"... Era ya eso de mediodía cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la media tarde. El velo del Santuario se rasgó por medio y Jesús, dando un fuerte grito dijo: \"Padre, en tus manos pongo mi espíritu\" y, dicho esto, expiró» (Lc  23, 33-46)."
	},
);

const glo = [];
glo.push(
	{
		title: "Primer Misterio Glorioso: La resurrección del Hijo de Dios", 
		content: "«El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. Pero encontraron que la piedra había sido retirada del sepulcro, y entraron, pero no hallaron el cuerpo del Señor Jesús. No sabían qué pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos resplandecientes. Ellas, despavoridas, miraban al suelo, y ellos les dijeron: \"¿Por qué buscáis entre los muertos al que está vivo? No está aquí, ha resucitado\"» (Lc 24, 1-6)."
	},
	{
		title: "Segundo Misterio Glorioso: La Ascensión del Señor al cielo", 
		content: "«El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios» (Mc 16, 19)."
	},
	{
		title: "Tercer Misterio Glorioso: La venida del Espíritu Santo", 
		content: "«Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso, que llenó toda la casa en la que se encontraban. Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu les concedía expresarse» (Hch 2, 1-4). "
	},
	{
		title: "Cuarto Misterio Glorioso: La Asunción de María al cielo", 
		content: "«Todas las generaciones me llamarán bienaventurada porque el Señor ha hecho obras grandes en mí» (Lc 1, 48-49). "
	},
	{
		title: "Quinto Misterio Glorioso: La coronación de María como Reina y Señora de todo lo creado", 
		content: "«Una gran señal apareció en el cielo: una mujer, vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza» (Ap 12, 1). "
	},
);

const bloque = [
	{
		title: textos.padreNuestro.title,
		content: textos.padreNuestro.content,
		totalCount: 1
	},
	{
		title: textos.aveMaria.title,
		content: textos.aveMaria.content,
		totalCount: 10
	},
	{
		title: textos.gloria.title,
		content: textos.gloria.content,
		totalCount: 1
	},
	{
		title: textos.madreGracia.title,
		content: textos.madreGracia.content,
		totalCount: 1
	},
	{
		title: textos.santisimo.title,
		content: textos.santisimo.content,
		totalCount: 1
	},
	{
		title: textos.ohJes.title,
		content: textos.ohJes.content,
		totalCount: 1
	},
	{
		title: textos.rosarioMaria.title,
		content: textos.rosarioMaria.content,
		totalCount: 1
	},
];

var Rosario =  [];

const status = {
	idx: 0,
	count: 1,
};

const current = {
	title: "",
	content: "",
	count: 1,
	totalCount : 1
};

function init(misterio){
	Rosario.push({
		title: textos.inicio.title,
		content: textos.inicio.content,
		totalCount: 1
	});
	for(let i = 0; i < 5; i++){
		switch(misterio){
		case misterios.goz:
			Rosario.push(
				{
					title: goz[i].title,
					content: goz[i].content,
					totalCount: 1
				}
			);
			Rosario.push(...bloque);
		break;
		case misterios.lum:
			Rosario.push(
				{
					title: lum[i].title,
					content: lum[i].content,
					totalCount: 1
				}
			);
			Rosario.push(...bloque);
		break;
		case misterios.dol:
			Rosario.push(
				{
					title: dol[i].title,
					content: dol[i].content,
					totalCount: 1
				}
			);
			Rosario.push(...bloque);
		break;
		case misterios.glo:
			Rosario.push(
				{
					title: glo[i].title,
					content: glo[i].content,
					totalCount: 1
				}
			);
			Rosario.push(...bloque);
		}
	}
	Rosario.push({
		title: textos.salve.title,
		content: textos.salve.content,
		totalCount: 1
	});
	
	
	current.title = Rosario[status.idx].title;
	current.content = Rosario[status.idx].content;
	current.count = 1;
}

function next(){
	if(Rosario[status.idx + 1] !== undefined) {
		
		if(Rosario[status.idx].totalCount > 1 && current.count !== current.totalCount) {
			current.totalCount = Rosario[status.idx].totalCount;
			current.count++;
		}
		else{
			current.totalCount = 1;
			current.count = 1;
			status.idx++;
		}
		current.title = Rosario[status.idx].title;
		current.content = Rosario[status.idx].content;
		current.totalCount = Rosario[status.idx].totalCount;
		
		r.refresh();
	}
	else{
		window.location.href = "../";
	}
	
	return false;
}

function prev(){
	if(Rosario[status.idx - 1] !== undefined) {
		
		if(Rosario[status.idx].totalCount > 1 && current.count !== 1) {
			current.totalCount = Rosario[status.idx].totalCount;
			current.count--;
		}
		else{
			if(Rosario[status.idx - 1].totalCount !== 1){
				current.count = Rosario[status.idx - 1].totalCount;
				current.totalCount = Rosario[status.idx - 1].totalCount;
			}
			status.idx--;		
		}
		
		current.title = Rosario[status.idx].title;
		current.content = Rosario[status.idx].content;
		current.totalCount = Rosario[status.idx].totalCount;
		
		r.refresh();
	}
	else{
		window.location.href = "../";
	}
		
	r.refresh();

	return false;
}

document.getElementsByTagName("body")[0].onkeyup = logKey;

function logKey(e) {
	if(e.code === "ArrowRight") document.querySelector(".flechaDer a").click();
	if(e.code === "ArrowLeft") document.querySelector(".flechaIzq a").click();
	if(e.code === "KeyQ" ) document.getElementsByTagName("h1")[0].click();
}

function addToday() {
	const n = document.createElement("strong");
	n.innerHTML = " (Hoy)";
	
	switch(new Date().getDay()){
		case 0:
		case 3:
		document.getElementsByClassName("dias")[3].appendChild(n);
		break;
		case 1:
		case 6:
		document.getElementsByClassName("dias")[0].appendChild(n);
		break;
		case 2:
		case 5:
		document.getElementsByClassName("dias")[2].appendChild(n);
		break;
		case 4:
		document.getElementsByClassName("dias")[1].appendChild(n);
		break;
	}
}