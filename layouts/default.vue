<template>
    <div class="bg-gray-100 min-h">
        <Title>{{ title }}</Title>
        <nav class="py-14">
            <div class="text-sm uppercase font-extralight font-sans">
                <div class=" mx-8 flex items-center justify-between">
                    <div class="flex space-x-8">
                        <div class="">
                            <NuxtLink to="/">Home</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/problem">The Problems</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/solution">Solutions</NuxtLink>
                        </div>
                    </div>
                    <div>
                        <div>
                            Logo
                        </div>
                    </div>
                    <div class="flex space-x-8">
                        <div>
                            <NuxtLink to="/people">Key People</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/demo">Demo</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/contact">Contact</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <slot />
    </div>
</template>
<script setup>
    const title = useState('title', () => 'Automation Solutions');
</script>
<style>
    .router-link-active {
        border-color: black;
        border-bottom-width: 2px;
        padding-bottom: .5em;
    }
</style>
