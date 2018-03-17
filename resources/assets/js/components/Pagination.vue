<template>

    <nav aria-label="Page navigation">

        <ul class="pagination justify-content-end">

            <li class="page-item" :class="{disabled: current == 1}">
                <a class="page-link" alt="First" :href="first ? first : '#'" :tabindex="first ? '' : '-1'"
                   @click.prevent="getNextPage(first)">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">First</span>
                </a>
            </li>

            <li class="page-item" :class="{disabled: prev == ''}">
                <a class="page-link" alt="Previous" :href="prev ? prev : '#'" :tabindex="prev ? '' : '-1'"
                   @click.prevent="getNextPage(prev)">
                    <span aria-hidden="true">&lt;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>

            <li class="page-item active">
                <a class="page-link" alt="current" :href="url + current" @click.prevent="">
                    {{ current }}
                    <span class="sr-only">(current)</span>
                </a>
            </li>

            <li class="page-item" :class="{disabled: next == ''}">
                <a class="page-link" alt="Next" :href="next ? next : '#'" :tabindex="next ? '' : '-1'"
                   @click.prevent="getNextPage(next)">
                    <span aria-hidden="true">&gt;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>

            <li class="page-item" :class="{disabled: current == total_pages}">
                <a class="page-link" alt="Last" :href="last ? last : '#'" :tabindex="last ? '' : '-1'"
                   @click.prevent="getNextPage(last)">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Last</span>
                </a>
            </li>

        </ul>

    </nav>

</template>

<script>

    export default {
        props: [
            'url', 'current', 'total_pages', 'first', 'last', 'prev', 'next'
        ],
        methods: {
            getNextPage(url) {
                console.log(this.last);
                this.$emit('nextPage', url)
            }
        }
    }
</script>

<style scoped>

    nav {
        padding-top: inherit;
    }

</style>
