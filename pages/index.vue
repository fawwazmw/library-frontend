<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">Dashboard</a>
            </li>
            <!-- <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Finance</span>
            </li> -->
        </ul>
        <div class="pt-5">
            <div class="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-2">
                <!-- Users Visit -->
                <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                    <div class="flex justify-between">
                        <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">Jumlah Buku Dipinjam</div>
                        <!-- <div class="dropdown">
                            <client-only>
                                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                    <button type="button">
                                        <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                                    </button>
                                    <template #content="{ close }">
                                        <ul @click="close()" class="text-black dark:text-white-dark">
                                            <li>
                                                <a href="javascript:;">View Report</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Edit Report</a>
                                            </li>
                                        </ul>
                                    </template>
                                </Popper>
                            </client-only>
                        </div> -->
                    </div>
                    <div class="mt-5 flex items-center">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">10</div>
                        <div class="badge bg-white/30">Buku</div>
                    </div>
                    <!-- <div class="mt-5 flex items-center font-semibold">
                        <icon-eye class="shrink-0 ltr:mr-2 rtl:ml-2" />
                        Last Week 44,700
                    </div> -->
                </div>

                <!-- Sessions -->
                <div class="panel bg-gradient-to-r from-violet-500 to-violet-400">
                    <div class="flex justify-between">
                        <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">Riwayat Buku Dipinjam</div>
                        <!-- <div class="dropdown">
                            <client-only>
                                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                    <button type="button">
                                        <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                                    </button>
                                    <template #content="{ close }">
                                        <ul @click="close()" class="text-black dark:text-white-dark">
                                            <li>
                                                <a href="javascript:;">View Report</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Edit Report</a>
                                            </li>
                                        </ul>
                                    </template>
                                </Popper>
                            </client-only>
                        </div> -->
                    </div>
                    <div class="mt-5 flex items-center">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">12</div>
                        <div class="badge bg-white/30">Buku</div>
                    </div>
                    <!-- <div class="mt-5 flex items-center font-semibold">
                        <icon-eye class="shrink-0 ltr:mr-2 rtl:ml-2" />
                        Last Week 84,709
                    </div> -->
                </div>

                <!-- <div class="panel bg-gradient-to-r from-blue-500 to-blue-400">
                    <div class="flex justify-between">
                        <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">Time On-Site</div>
                        <div class="dropdown">
                            <client-only>
                                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                    <button type="button">
                                        <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                                    </button>
                                    <template #content="{ close }">
                                        <ul @click="close()" class="text-black dark:text-white-dark">
                                            <li>
                                                <a href="javascript:;">View Report</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Edit Report</a>
                                            </li>
                                        </ul>
                                    </template>
                                </Popper>
                            </client-only>
                        </div>
                    </div>
                    <div class="mt-5 flex items-center">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">38,085</div>
                        <div class="badge bg-white/30">+ 1.35%</div>
                    </div>
                    <div class="mt-5 flex items-center font-semibold">
                        <icon-eye class="shrink-0 ltr:mr-2 rtl:ml-2" />
                        Last Week 37,894
                    </div>
                </div>


                <div class="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                    <div class="flex justify-between">
                        <div class="text-md font-semibold ltr:mr-1 rtl:ml-1">Bounce Rate</div>
                        <div class="dropdown">
                            <client-only>
                                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                    <button type="button">
                                        <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                                    </button>
                                    <template #content="{ close }">
                                        <ul @click="close()" class="text-black dark:text-white-dark">
                                            <li>
                                                <a href="javascript:;">View Report</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Edit Report</a>
                                            </li>
                                        </ul>
                                    </template>
                                </Popper>
                            </client-only>
                        </div>
                    </div>
                    <div class="mt-5 flex items-center">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">49.10%</div>
                        <div class="badge bg-white/30">- 0.35%</div>
                    </div>
                    <div class="mt-5 flex items-center font-semibold">
                        <icon-eye class="shrink-0 ltr:mr-2 rtl:ml-2" />
                        Last Week 50.01%
                    </div>
                </div> -->
            </div>

            <!-- <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div class="grid gap-6 xl:grid-flow-row">
                    <div class="panel overflow-hidden">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-lg font-bold">Previous Statement</div>
                                <div class="text-success">Paid on June 27, 2022</div>
                            </div>
                            <div class="dropdown">
                                <client-only>
                                    <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                        <button type="button">
                                            <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                                        </button>
                                        <template #content="{ close }">
                                            <ul @click="close()">
                                                <li>
                                                    <a href="javascript:;">View Report</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">Edit Report</a>
                                                </li>
                                            </ul>
                                        </template>
                                    </Popper>
                                </client-only>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <div class="absolute -bottom-12 h-24 w-24 ltr:-right-12 rtl:-left-12">
                                <icon-circle-check class="h-full w-full text-success opacity-20" />
                            </div>
                            <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
                                <div>
                                    <div class="text-primary">Card Limit</div>
                                    <div class="mt-2 text-2xl font-semibold">$50,000.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Spent</div>
                                    <div class="mt-2 text-2xl font-semibold">$15,000.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Minimum</div>
                                    <div class="mt-2 text-2xl font-semibold">$2,500.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="panel overflow-hidden">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-lg font-bold">Current Statement</div>
                                <div class="text-danger">Must be paid before July 27, 2022</div>
                            </div>
                            <div class="dropdown">
                                <client-only>
                                    <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                        <button type="button">
                                            <icon-horizontal-dots class="opacity-70 hover:opacity-80" />
                                        </button>
                                        <template #content="{ close }">
                                            <ul @click="close()">
                                                <li>
                                                    <a href="javascript:;">View Report</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">Edit Report</a>
                                                </li>
                                            </ul>
                                        </template>
                                    </Popper>
                                </client-only>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <div class="absolute -bottom-12 h-24 w-24 ltr:-right-12 rtl:-left-12">
                                <icon-info-circle class="h-full w-24 text-danger opacity-20" />
                            </div>

                            <div class="grid grid-cols-2 gap-6 md:grid-cols-3">
                                <div>
                                    <div class="text-primary">Card Limit</div>
                                    <div class="mt-2 text-2xl font-semibold">$50,000.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Spent</div>
                                    <div class="mt-2 text-2xl font-semibold">$30,500.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Minimum</div>
                                    <div class="mt-2 text-2xl font-semibold">$8,000.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="panel">
                    <div class="mb-5 text-lg font-bold">Recent Transactions</div>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th class="ltr:rounded-l-md rtl:rounded-r-md">ID</th>
                                    <th>DATE</th>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th class="text-center ltr:rounded-r-md rtl:rounded-l-md">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-semibold">#01</td>
                                    <td class="whitespace-nowrap">Oct 08, 2021</td>
                                    <td class="whitespace-nowrap">Eric Page</td>
                                    <td>$1,358.75</td>
                                    <td class="text-center">
                                        <span class="badge rounded-full bg-success/20 text-success hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#02</td>
                                    <td class="whitespace-nowrap">Dec 18, 2021</td>
                                    <td class="whitespace-nowrap">Nita Parr</td>
                                    <td>-$1,042.82</td>
                                    <td class="text-center">
                                        <span class="badge rounded-full bg-info/20 text-info hover:top-0">In Process</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#03</td>
                                    <td class="whitespace-nowrap">Dec 25, 2021</td>
                                    <td class="whitespace-nowrap">Carl Bell</td>
                                    <td>$1,828.16</td>
                                    <td class="text-center">
                                        <span class="badge rounded-full bg-danger/20 text-danger hover:top-0">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#04</td>
                                    <td class="whitespace-nowrap">Nov 29, 2021</td>
                                    <td class="whitespace-nowrap">Dan Hart</td>
                                    <td>$1,647.55</td>
                                    <td class="text-center">
                                        <span class="badge rounded-full bg-success/20 text-success hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#05</td>
                                    <td class="whitespace-nowrap">Nov 24, 2021</td>
                                    <td class="whitespace-nowrap">Jake Ross</td>
                                    <td>$927.43</td>
                                    <td class="text-center">
                                        <span class="badge rounded-full bg-success/20 text-success hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#06</td>
                                    <td class="whitespace-nowrap">Jan 26, 2022</td>
                                    <td class="whitespace-nowrap">Anna Bell</td>
                                    <td>$250.00</td>
                                    <td class="text-center">
                                        <span class="badge rounded-full bg-info/20 text-info hover:top-0">In Process</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref, computed, onMounted } from 'vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    useHead({ title: 'Dashboard' });

    definePageMeta({
        middleware: 'auth', // Menyertakan middleware 'auth'
    });

    onMounted(() => {
        nextTick(() => {
            window.dispatchEvent(new Event('resize'));
        });
    });

    // bitcoin
    const bitcoin = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const bitcoinSeries = ref([
        {
            data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
        },
    ]);

    // ethereum
    const ethereum = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const ethereumSeries = ref([
        {
            data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
        },
    ]);

    // litecoin
    const litecoin = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const litecoinSeries = ref([
        {
            data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
        },
    ]);

    // binance
    const binance = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const binanceSeries = ref([
        {
            data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
        },
    ]);

    // tether
    const tether = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const tetherSeries = ref([
        {
            data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
        },
    ]);

    // solana
    const solana = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const solanaSeries = ref([
        {
            data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
        },
    ]);
</script>
