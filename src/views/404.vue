<template>
    <v-container fluid grid-list-lg>
        <v-layout wrap>
            <v-flex xs12>
                <v-row justify="center">
                    <v-col md="6">
                        <v-card color="orange">
                            <v-card-title justify="center">
                                404: Page could not be found
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-flex>
            <v-flex xs6>
				<v-card v-on:click="navigate('/')">
					<v-card-title>
						<p>Go to Home</p>
					</v-card-title>
				</v-card>
			</v-flex>
            <v-flex xs6>
				<v-card v-on:click="navigate('about')">
					<v-card-title>
						<p>About this app</p>
					</v-card-title>
				</v-card>
			</v-flex>
            <v-flex xs6>
                <v-card ripple v-on:click="navigate('gents')">
                    <v-card-title center>
                        <p>Soundboard Torius Gents</p>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card ripple v-on:click="navigate('ladies')">
                    <v-card-title>
                        <p>Soundboard Torius Ladies</p>
                    </v-card-title>
                </v-card>
            </v-flex>
			<!-- <v-flex xs4>
				<v-card v-on:click="navigate('support')">
					<v-card-title>
						<p>Support</p>
					</v-card-title>
				</v-card>
			</v-flex> -->
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        components: {},
        methods: {
            navigate: function(route) {
                this.$router.push(route);
            },
        },
    };
</script>

<style scoped>
    h1 {
        justify-content: center;
        align-content: center;
    }
</style>
