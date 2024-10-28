<template>
    <div>
        <div class="panel mt-6 pb-0">
            <h5 class="mb-5 text-lg font-semibold dark:text-white-light">Daftar Buku</h5>
            <div class="datatable">
                <vue3-datatable
                    :rows="rows"
                    :columns="cols"
                    :totalRows="rows?.length"
                    skin="whitespace-nowrap bh-table-hover"
                    firstArrow='<svg width="24" height="24" ...></svg>'
                    lastArrow='<svg width="24" height="24" ...></svg>'
                    previousArrow='<svg width="24" height="24" ...></svg>'
                    nextArrow='<svg width="24" height="24" ...></svg>'
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    useHead({ title: 'Daftar Buku' });

    definePageMeta({
        middleware: 'auth', // Menyertakan middleware 'auth'
    });

    // Columns configuration for the table
    const cols = ref([
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'title', title: 'Judul Buku' },
        { field: 'author', title: 'Penulis' },
        { field: 'status', title: 'Status' },
        { field: 'year', title: 'Tahun' },
    ]);

    // State for books data
    const rows = ref([]);

    // Fetch books data from the API
    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/books');
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const data = await response.json();
            rows.value = data.books.map((book: { id: any; title: any; author: any; available: any; year: any }) => ({
                id: book.id,
                title: book.title,
                author: book.author,
                status: book.available ? 'Available' : 'Not Available',
                year: book.year,
            }));
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    // Call fetchBooks when component is mounted
    onMounted(fetchBooks);
</script>
