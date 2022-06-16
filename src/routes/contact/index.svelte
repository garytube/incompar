<script>
	import Container from '$lib/components/Container.svelte';
	import hero from '$assets/contactus.jpg';
	import H1 from '$lib/components/H1.svelte';
	import ButtonBlack from '$lib/components/ButtonBlack.svelte';
	import { t } from '$lib/translations';
</script>

<Container>
	<div class="text-center md:text-left">
		<H1 class="mb-8">Incompar Balear S.L.</H1>
		<div class="block md:grid  md:grid-cols-12 gap-4">
			<div
				id="adresse"
				itemscope
				itemtype="https://schema.org/Organization"
				class="col-start-1 col-span-3"
			>
				<address itemprop="address" class="font-serif not-italic mb-4 block">
					<span itemprop="name" class="hidden">Incompar Balear S.L. </span>
					<span class="lg:text-lg block" itemprop="streetAddress">Cami Vell de Ciutat, 25 A</span>
					<span class="lg:text-lg block" itemprop="postalCode">07630 Campos</span>
					<span class="lg:text-lg block" itemprop="addressLocality">MALLORCA – IB</span>
					<span class="lg:text-lg block mt-1 "
						>CIF: <span class=" tracking-widest">B07965734</span></span
					>
					<ButtonBlack reverse href="https://goo.gl/maps/iKgkQzfJFggHassP7"
						>{$t('contact.show_map')}</ButtonBlack
					>
				</address>

				<div class="block text-lg mb-4 text-secondary-600">
					<span class=" font-normal block ">{$t('contact.general')} </span>
					<a href="mailto:info@incompar.com" itemprop="email">info@incompar.com</a> <br />
					<a href="tel:+34971642204" itemprop="telephone">+34 971 64 22 04 </a> <br />
					<span class=" mt-8 block font-normal ">{$t('contact.costumer_service')}</span>
					<a href="mailto:maria@incompar.com" itemprop="email">maria@incompar.com</a>

					<span class=" mt-8 block font-normal ">{$t('contact.for_professionals')}</span>
					<a href="mailto:office@incompar.com" itemprop="email">office@incompar.com</a>
					<span class=" mt-8 block font-normal ">{$t('contact.office_hours')}</span>
					<span> {$t('contact.days')} 08:00 - 15:00</span>
				</div>
				<span class="block font-medium text-lg text-secondary-600">Follow Us</span>
				<div class="flex justify-center md:justify-start space-x-2">
					<a
						href="https://www.instagram.com/incompar_sunsquare/"
						target="_blank"
						class=" flex p-2  bg-secondary-200 text-secondary-800 items-center justify-end "
					>
						<img src="/insta.svg" class="opacity-60" alt="insta" />
					</a>
					<a
						href="https://www.pinterest.de/incompar/"
						target="_blank"
						class=" flex p-2  bg-secondary-200 text-secondary-800 items-center justify-end"
					>
						<img src="/pint.svg" class="opacity-60" alt="pint" />
					</a>
				</div>
			</div>

			<!-- IMG -->
			<img src={hero} alt="office" class="w-auto mt-12 md:mt-0 rounded-lg col-span-9 " />
		</div>
	</div>
</Container>
