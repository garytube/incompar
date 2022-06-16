<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import H1 from '$lib/components/H1.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import { locale, t } from '$lib/translations';

	const reasonsEn = [
		{
			title: 'THE ORIGINAL',
			text: 'SunSquare® is the inventor of fully automated, remote controlled, wind monitored rollable awning systems with worldwide patent protection. The patented drive system guarantees reduced, soft load introductions to the entire technology. Since 1993, more than 7,000 systems have been supplied worldwide and SunSquare® allowed to manage call leader.'
		},
		{
			title: 'RESEARCH ,& DEVELOPMENT',
			text: 'SunSquare® researches and develops continuously. The design of all mechanical components comes from the hand of Gerald WURZ and were taken in collaboration with Norbert KAUTZKY for series production. The design language runs through all components like a red thread and has won a REDDOT DESIGN AWARD.'
		},
		{
			title: 'FUNCTIONALITY',
			text: 'SunSquare® does not use non-industry components such as Yacht Accessories. All components match their function and are developed and produced for their usage.'
		},
		{
			title: 'COOPERATION',
			text: 'SunSquare® cooperates with renowned and internationally recognized and successful companies such as Somfy, Sattler, Dickson, Serge Ferrari and Teufelberger.'
		},
		{
			title: 'DRIVE ,& CONTROL',
			text: 'SunSquare® relies on motors and controls the brand Somfy. Technical know-how-edge, quality and durability features of these products.'
		},
		{
			title: 'TRACTION',
			text: 'SunSquare® trusts Dyneema® ropes branded TEUFELBERGER - the market leader in the field of modern and contemporary rope production. The 32-plait sheathing protects the Dyneema® core against UV radiation and abrasion - thus our ropes are always stained black - a design feature.'
		},
		{
			title: 'QUALITY',
			text: 'SunSquare® relies on canvases of brands SATTLER, DICKSON and SERGE FERRARI. These canvases are the high-end products on the market and are characterized by the high quality of workmanship and the high quality cloth body - dope dyed and UV-resistant.'
		},
		{
			title: 'NIROSTA',
			text: 'SunSquare® trusts in V4A-stainless steel grade 1.4404 and 1.4571 - the increased resistance to corrosion and pitting predestined these steels for use outdoors. With tube wall thicknesses of 3.6mm and partly internal steel cores with 12mm wall thickness, the necessary dimension for our the supports is even exceeded for our use.'
		},
		{
			title: 'STABILITY',
			text: 'SunSquare® has NIROLINE® - the largest and most complex fastening system at the awning market. Loved by our customers - admired by architects and engineers.'
		},
		{
			title: 'STANDARD',
			text: 'SunSquare® trusts in the EN-1090 certification and the company‘s internal factory testing of all components. All internal welding production steps as well as all the welding technicians themselves are certified according to EN-1090.'
		},
		{
			title: 'DESIGN',
			text: 'SunSquare® plans every awning with maximum accuracy. The SunSquare® Designers use 2D- and 3D-CAD-programs or the measuring tool developed by SunSquare® for the 1:1-simulation on site. When planning very complex projects, the partners are supported by the SunSquare headquarters.'
		},
		{
			title: 'PARTNERSHIP',
			text: 'SunSquare® relies on its certified retailers. All partners undergo a three day training course and are informed about continuous improvement - so, a knowledge on the state of the sunsail-technology and best advice to ,the customer can be guaranteed'
		}
	];

	const reasonsDE = [
		{
			title: 'Das Original',
			text: 'SunSquare® ist der Erfinder von vollautomatischen, funkferngesteuerten und windüberwachten, rollbaren Sonnensegel-Anlagen mit weltweitem Patentschutz. Das patentierte Antriebssystem garantiert reduzierte, weiche  Lasteinbringungen auf die gesamte Technik. Seit 1993 wurden weltweit über 15.000 Anlagen realisiert und SunSquare® darf sich zurecht Marktführer nennen.'
		},
		{
			title: 'Forschung & Entwicklung',
			text: 'SunSquare® forscht und entwickelt kontinuierlich. Das Design aller mechanischen Bauteile stammt aus der Hand von Gerald WURZ und wurden in Zusammenarbeit mit Norbert KAUTZKY zur Serienreife gebracht. Die Designsprache zieht sich durch alle Komponenten wie ein roter Faden und wurde mit einem REDDOT DESIGN AWARD prämiert.'
		},
		{
			title: 'Funktionalität',
			text: 'SunSquare® verwendet keine branchenfremden Komponenten wie z.B. Yachtzubehör. Alle Bauteile entsprechen ihrer Funktion und werden speziell für ihren Einsatz entwickelt und produziert.'
		},
		{
			title: 'KOOPERATIONEN',
			text: 'SunSquare® kooperiert mit renommierten und international anerkannten und erfolgreichen Firmen wie Hilti, Somfy, Sattler, Dickson, Serge Ferrari und Teufelberger.'
		},
		{
			title: 'ANTRIEB & STEUERUNG',
			text: 'SunSquare® vertraut auf Motoren und Steuerungen der Marke Somfy. Technischer KnowHow-Vorsprung, Qualität und Langlebigkeit zeichnen diese Produkte aus.'
		},
		{
			title: 'Zugkraft',
			text: 'SunSquare® vertraut auf Dyneema®-Zugseile der Marke TEUFELBERGER - dem Marktführer im Bereich der modernen und zeitgemäßen Seilproduktion. Der 32-fach geflochtene Mantel schützt den Dyneema®-Kern vor UV-Strahlung und Abrieb - wegen dem UV-Schutz sind unsere Seile immer schwarz gefärbt - ein Designmerkmal.'
		},
		{
			title: 'Qualität',
			text: 'SunSquare® vertraut auf Segeltücher der Marken SATTLER, DICKSON und SERGE FERRARI. Diese Segeltücher sind die HighEnd-Produkte am Markt und zeichnen sich durch die hohe Qualität in der Verarbeitung und den hochwertigen Tuchkörper aus - spinndüsengefärbt und UV-beständig.'
		},
		{
			title: 'Nirosta',
			text: 'SunSquare® vertraut auf V4A-Edelstahl der Güte 1.4404 und 1.4571 - die erhöhte Beständigkeit gegen Korrosion und Lochfraß prädestiniert diese Stähle für den Einsatz im Freien. Mit Rohrwandstärken von 3,6mm und teilweise innenliegenden Stahldornen mit 12mm Wandstärke ist die notwendige Dimensionierung der Stützen für unseren Einsatz sehr solide dimensioniert.'
		},
		{
			title: 'Stabilität',
			text: 'SunSquare® verfügt mit NIROLINE® über das umfangreichste und komplexeste Befestigungssystem am Sonnensegelmarkt. Geliebt von unseren Kunden - bewundert von Architekten und Ingenieuren.'
		},
		{
			title: 'Standard',
			text: 'SunSquare® vertraut auf die EN-1090 Zertifizierung und die firmeninterne Werksprüfung aller Bauteile. Alle internen schweißtechnischen Produktionsschritte sowie alle Schweißtechniker selbst, sind zertifiziert nach EN-1090.'
		},
		{
			title: 'Design',
			text: 'SunSquare® - Partner planen alle Sonnensegel mit höchster Genauigkeit. Dafür benützen die SunSquare-Planer 2D- und 3D-CAD-Programme sowie das von SunSquare® entwickelte Ausmesswerkzeug für die 1:1-Simulation vor Ort. Bei der Planung von sehr komplexen Projekten werden die Partner durch die SunSquare-Zentrale unterstützt.'
		},
		{
			title: 'Partnerschaft',
			text: 'SunSquare® vertraut auf seine zertifizierten Vertrtiebspartner. Alle Vertriebspartner durchlaufen eine dreitägige Schulung und werden über laufende Verbesserungen informiert - so kann beste Beratung der Endkunden und optimale Planung am Stand der Sonnensegel-Technik garantiert werden.'
		}
	];

	const reasons = {
		de: reasonsDE,
		en: reasonsEn
	};
</script>

<Container>
	<H1>{$t('reasons.title')}</H1>
	<div class="block mt-8 lg:mt-12 md:grid md:grid-cols-2 gap-6">
		{#each reasons[$locale] as r}
			<ListItem title={r.title}>
				{r.text}
			</ListItem>
		{/each}
	</div>
</Container>
