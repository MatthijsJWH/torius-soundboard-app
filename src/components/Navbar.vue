<template>
	<nav>
		<v-toolbar app dark color="#0053b9">
			<v-toolbar-side-icon v-on:click="isDrawerOpen = !isDrawerOpen" />
			<v-toolbar-title>
				<span class="font-weight-black">TORIUS</span>
				<span class="font-weight-light">SOUNDBOARD</span>
			</v-toolbar-title>
		</v-toolbar>

		<v-navigation-drawer dark app v-model="isDrawerOpen">
			<v-list>

				<v-list-tile v-on:click="navigate('/'); isDrawerOpen = !isDrawerOpen">
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile v-on:click="navigate('gents'); isDrawerOpen = !isDrawerOpen">
					<v-list-tile-action>
						<v-icon>record_voice_over</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Gents</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile v-on:click="navigate('ladies'); isDrawerOpen = !isDrawerOpen">
					<v-list-tile-action>
						<v-icon>record_voice_over</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Ladies</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<!-- <v-list-tile v-on:click="navigate('about'); isDrawerOpen = !isDrawerOpen">
					<v-list-tile-action>
						<v-icon>info</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>About</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile v-on:click="navigate('support'); isDrawerOpen = !isDrawerOpen">
					<v-list-tile-action>
						<v-icon>live_help</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Support</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile> -->

			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data () {
		return {
			isDrawerOpen: false
		}
	},
	methods: {
		navigate: function (route) {
			this.$router.push(route);
		}
	}
}
</script>

