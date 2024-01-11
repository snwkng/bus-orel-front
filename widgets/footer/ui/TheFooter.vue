<script setup lang="ts">
const fullYear: Date = new Date().getFullYear();
</script>
<template>
	<div class="flex min-h-screen w-full items-end bg-white">
		<footer class="body-font w-full bg-gray-100 text-gray-700">
			<div
				class="md:flex-no-wrap container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:items-center lg:items-start"
			>
				<div
					class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left"
				>
					<a
						class="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
						target="_blank"
					>
						<span class="h-5 w-auto fill-current text-gray-900"> ГалаТур </span>
					</a>
					<p class="mt-2 text-sm text-gray-500">
						Туристическое агентство в Орле!
					</p>
					<div class="mt-4">
						<span
							class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"
						>
							<a
								class="cursor-pointer text-gray-500 hover:text-gray-700"
								target="_blank"
							>
								вкком
							</a>
							<a
								class="ml-3 cursor-pointer text-gray-500 hover:text-gray-700"
								target="_blank"
							>
								окру
							</a>
						</span>
					</div>
				</div>
				<div
					class="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left"
				>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							About
						</h2>
						<nav class="mb-10 list-none">
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Company</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Careers</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Blog</a>
							</li>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Support
						</h2>
						<nav class="mb-10 list-none">
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Contact Support</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Help Resources</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Release Updates</a>
							</li>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Platform
						</h2>
						<nav class="mb-10 list-none">
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Terms &amp; Privacy</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Pricing</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>FAQ</a>
							</li>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Contact
						</h2>
						<nav class="mb-10 list-none">
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Send a Message</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>Request a Quote</a>
							</li>
							<li class="mt-3">
								<a
									class="cursor-pointer text-gray-500 hover:text-gray-900"
									target="_blank"
								>+123-456-7890</a>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div class="bg-gray-300">
				<div class="container mx-auto px-5 py-4">
					<p class="text-sm capitalize text-gray-700 xl:text-center">
						© {{ fullYear }} Информация на сайте носит ознакомительный характер
						и не является публичной офертой.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>
