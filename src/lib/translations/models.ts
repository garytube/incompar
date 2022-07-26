import type { Model } from 'src/global';

const models: Model[] = [
	{
		image: 'https://www.sunsquare.com/sites/default/files/sqs-85_0.jpg?fid=835',
		type: 'triangular',
		title: 'SQS',
		text: {
			de: 'Das klassische SunSquare® Sonnensegel mit Federzug an der F-Stütze. Für Lattensegel bis max. 50 m² und Strahlensegel bis max. 70 m² Tuchfläche.',
			en: 'The classic SunSquare® awning with spring on the F-suppot. For sails with battens up to max. 50 m² and sails with radial design up to max. 70 m² canvas area.',
			es: 'El clásico toldo SunSquare® con muelle en el soporte F. Para velas con listones hasta un máximo de 50 m² y velas con diseño radial hasta un máximo de 70 m² de superficie de lona.'
		}
	},

	{
		image: 'https://www.sunsquare.com/sites/default/files/sqk-40_neu.jpg?fid=834',
		type: 'triangular',
		title: 'SQK-I',
		text: {
			de: 'Das SunSquare® Sonnensegel mit einem Kompensator. Für Lattensegel bis max. 50 m² und Strahlensegel bis max. 70 m² Tuchfläche.',
			en: 'The SunSquare® sunsail with one compensator. For sails with battens up to max. 50 m² and sails with radial design up to max. 70 m² canvas area.',
			es: 'La vela solar SunSquare® con un compensador. Para velas con listones hasta un máximo de 50 m² y velas con diseño radial hasta un máximo de 70 m² de superficie de lona. 70 m² de superficie de lona.'
		}
	},
	{
		image: 'https://www.sunsquare.com/sites/default/files/sqk-ii_horizontalstutze.jpg?fid=836',
		type: 'triangular',
		title: 'SQK-II',
		text: {
			de: 'Das stärkste SunSquare® Sonnensegel. Mit zwei Kompensatoren. Für Strahlensegel größer als 50m² bis max. 76 m² Tuchfläche.',
			en: 'The strongest SunSquare® sunsail. With two compensators. For sails with radial design from 50m² up to max. 76 m² canvas area.',
			es: 'El más fuerte de los sunsails SunSquare®. Con dos compensadores. Para velas con diseño radial de 50 m² hasta un máximo de 76 m² de superficie de lona.'
		}
	},
	{
		image: 'https://www.sunsquare.com/sites/default/files/sqk-cant.jpg?fid=659',
		type: 'triangular',
		title: 'SQK-CANT',
		text: {
			de: 'Das SunSquare® Cantilever Sonnensegel mit freikragender Welle - dadurch sind nur drei Befestigungspunkte (Wand- oder Bodenstützen) notwendig. Mit einem Kompensator. Für Latten- und Strahlensegel bis max. 35 m² Tuchfläche.',
			en: 'The SunSquare® Cantilever sunsail with free-standing shaft - this requires only three attachment points (wall or floor supports). With one compensator. For sails with battens and sails with radial design up to max. 35 m² canvas area.',
			es: 'La vela solar SunSquare® Cantilever con eje independiente - sólo requiere tres puntos de fijación (soportes de pared o de suelo). Con un compensador. Para velas con listones y velas con diseño radial hasta un máximo de 35 m² de superficie de lona.'
		}
	},
	{
		image: 'https://www.sunsquare.com/sites/default/files/ax-e.jpg?fid=837',
		type: 'rectangular',
		title: 'AX-I',
		text: {
			de: 'Das einseitige SunSquare® Sonnensegel mit rechteckigem Segelzuschnitt. Für Segelflächen bis max. 38 m² Tuchfläche.',
			en: 'The one-sided SunSquare® sunsail with a rectangular sail design. For sails up to max. 38 m² canvas area.',
			es: 'La vela solar SunSquare® de una cara con un diseño rectangular. Para velas de hasta un máximo de 38 m² de superficie de lona.',
		}
	},
	{
		image: 'https://www.sunsquare.com/sites/default/files/ax-z.jpg?fid=838',
		type: 'rectangular',
		title: 'AX-II',
		text: {
			de: 'Das zweiseitige SunSquare® Sonnensegel mit rechteckigem Segelzuschnitt. Für Segelflächen bis max. 76 m² Tuchfläche.',
			en: 'The two-sided SunSquare® sunsail with a rectangular sail design. For sails up to max. 76 m² canvas area.',
			es: 'La vela solar SunSquare® de dos caras con un diseño rectangular. Para velas de hasta un máximo de 76 m² de superficie de lona. 76 m² de superficie de lona.',
		}
	},
	{
		image: 'https://www.sunsquare.com/sites/default/files/ax-cant_0.jpg?fid=839',
		type: 'rectangular',
		title: 'AX-CANT',
		text: {
			de: 'Das zweiseitige SunSquare® Sonnensegel mit rechteckigem Segelzuschnitt und freikragender Welle - dadurch sind nur fünf Befestigungspunkte (Wand- oder Bodenstützen) notwendig. Für Segelflächen bis max. 40 m² Tuchfläche.'
			,
			en: 'The two-sided SunSquare® sunsail with a rectangular design and free-standing shaft - this requires only five attachment points (wall or floor supports). For sails up to max. 40 m² canvas area.',
			es: 'La vela solar SunSquare® de dos caras con diseño rectangular y eje independiente - sólo requiere cinco puntos de fijación (soportes de pared o de suelo). Para velas de hasta un máximo de 40 m² de superficie de lona. 40 m² de superficie de lona.',
		}
	},
	{
		image: 'https://www.sunsquare.com/sites/default/files/fr_open.jpg?fid=663',
		type: 'triangular',
		title: 'FOLD & ROLL',
		text: {
			de: 'Die 270 Grad Verdrehbarkeit zaubert aus dem 30 m² Segelschirm einen 75 m² großen Sonnenschutz. Noch dazu ist das Sonnensegel intelligent. Wenn der Wind zu stark wird, klappt das Armsystem automatisch ein, und das Segel rollt sich zusammen. <a class="block max-w-max font-normal items-center justify-center px-4 py-1 my-4 text-sm  borderborder-transparent text-primary bg-gray-200" href="/dl/foldroll_technische_plaene_0.pdf">Download FOLD & ROLL Info (PDF)</a> <img width="350px" alt="FOLD & ROLL" src=\'/fr_twister.webp\'/>',
			en: 'The 270 degree twistability conjure from the 30 m² sail screen a 75 m² sunshade. In addition, the awning is intelligent. When the wind gets too strong, the arm system automatically folds in and the sail curls up. <a class="block max-w-max font-normal items-center justify-center px-4 py-1 my-4 text-sm  border border-transparent text-primarybg-gray-200" href="/dl/foldroll_technische_plaene_0.pdf">Download FOLD & ROLL Info (PDF)</a> <img width="350px" src=\'https://www.sunsquare.com/sites/default/files/fr_twister.jpg?fid=664\'/>',
			es: 'La posibilidad de girar 270 grados hace aparecer de la pantalla de la vela 30 m² una sombrilla de 75 m². Además, el toldo es inteligente. Cuando el viento es demasiado fuerte, el sistema de brazos se pliega automáticamente y la vela se enrolla. <a class="block max-w-max font-normal items-center justify-center px-4 py-1 my-4 text-sm  border border-transparent text-primarybg-gray-200" href="/dl/foldroll_technische_plaene_0.pdf">Descargar FOLD & ROLL Info (PDF)</a> <img width="350px" src=\'https://www.sunsquare.com/sites/default/files/fr_twister.jpg?fid=664\'/>'
		}
	}
];



export default models;
