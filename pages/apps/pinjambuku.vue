<template>
    <div>
        <div class="flex flex-col gap-2.5 xl:flex-row">
            <div class="panel flex-1 px-0 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <div class="mt-8 px-4">
                    <div class="flex flex-col justify-between lg:flex-row">
                        <div class="mb-6 w-full">
                            <div class="text-lg">Form Peminjaman</div>
                            <!-- Input field for user name -->
                            <div class="mt-4 flex items-center">
                                <label for="user-name" class="mb-0 w-1/3 ltr:mr-2 rtl:ml-2">Nama</label>
                                <input
                                    id="user-name"
                                    type="text"
                                    class="form-input flex-1"
                                    v-model="loanForm.user_name"
                                    placeholder="Masukkan Nama Pengguna"
                                    required
                                />
                            </div>
                            <!-- Dropdown for selecting book -->
                            <div class="mt-4 flex items-center">
                                <label for="book-title" class="mb-0 w-1/3 ltr:mr-2 rtl:ml-2">Judul Buku</label>
                                <select id="book-title" class="form-input flex-1" v-model="loanForm.book_id" required>
                                    <option v-for="book in books" :key="book.id" :value="book.id">
                                        {{ book.title }}
                                    </option>
                                </select>
                            </div>
                            <div class="mt-4 flex items-center">
                                <label for="loanDate" class="mb-0 flex-1 ltr:mr-2 rtl:ml-2">Tanggal Peminjaman</label>
                                <input id="loanDate" type="date" name="loan-date" class="form-input w-2/3 lg:w-[250px]" v-model="loanForm.loan_date" />
                            </div>
                            <div class="mt-4 flex items-center">
                                <label for="dueDate" class="mb-0 flex-1 ltr:mr-2 rtl:ml-2">Tanggal Pengembalian</label>
                                <input id="dueDate" type="date" name="due-date" class="form-input w-2/3 lg:w-[250px]" v-model="loanForm.due_date" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 px-4">
                    <button type="button" class="btn btn-success w-full" @click="submitLoan">Submit</button>
                </div>
                <div v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    definePageMeta({
        middleware: 'auth',
    });

    useHead({ title: 'Form Peminjaman Buku' });

    interface Book {
        id: number;
        title: string;
    }
    interface LoanForm {
        user_name: string;
        book_id: number | null;
        loan_date: string;
        due_date: string;
    }

    const loanForm = ref<LoanForm>({ user_name: '', book_id: null, loan_date: new Date().toISOString().split('T')[0], due_date: '' });
    const books = ref<Book[]>([]);
    const error = ref<string | null>(null);

    onMounted(async () => {
        await loadBooksData();
    });

    async function loadBooksData() {
        try {
            const response = await fetch('http://localhost:5000/api/books');
            if (!response.ok) throw new Error('Failed to fetch books');
            const data = await response.json();
            books.value = data.books;
        } catch (err) {
            console.error('Error fetching books:', err);
            error.value = 'Failed to load book information: ' + (err instanceof Error ? err.message : 'Unknown error');
        }
    }

    async function submitLoan() {
        try {
            // Make the POST request without an authorization header
            const response = await fetch('http://localhost:5000/api/loans', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_name: loanForm.value.user_name,
                    book_id: loanForm.value.book_id,
                    loan_date: loanForm.value.loan_date,
                    due_date: loanForm.value.due_date,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create loan');
            }

            alert('Loan created successfully!');
            // Reset the form fields
            loanForm.value.user_name = '';
            loanForm.value.book_id = null;
            loanForm.value.loan_date = new Date().toISOString().split('T')[0];
            loanForm.value.due_date = '';
            error.value = null;
        } catch (err) {
            console.error('Error creating loan:', err);
            error.value = 'Failed to create loan: ' + (err instanceof Error ? err.message : 'Unknown error');
        }
    }
</script>
