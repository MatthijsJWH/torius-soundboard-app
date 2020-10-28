<template>
	<nav>
		<v-app-bar app dark color="#0053b9">
			<v-app-bar-nav-icon v-on:click="isDrawerOpen = !isDrawerOpen">
				<v-icon>menu</v-icon>
			</v-app-bar-nav-icon>
			<span class="font-weight-black">TORIUS</span>
			<span class="font-weight-light">SOUNDBOARD</span>
		</v-app-bar>

		<v-navigation-drawer dark app color="#0053b9" v-model="isDrawerOpen">
			<v-list>

				<v-list-item v-on:click="navigate('/'); isDrawerOpen = !isDrawerOpen">
					<v-list-item-action>
						<v-icon>home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item v-on:click="navigate('gents'); isDrawerOpen = !isDrawerOpen">
					<v-list-item-action>
						<v-icon>record_voice_over</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Gents</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item v-on:click="navigate('ladies'); isDrawerOpen = !isDrawerOpen">
					<v-list-item-action>
						<v-icon>record_voice_over</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Ladies</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

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

