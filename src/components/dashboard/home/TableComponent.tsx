"use client"

import * as React from "react"
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CattleType, healthType } from "@/types"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data: Payment[] = [
    {
        _id: '2929',
        food: 'comida',
        genero: 'Macho',
        health: {
            _id: '2992',
            status: 'Saludable',
            cattle: '232',
            lastDate: '2024-01-02',
            observes: 'Lesión en pata trasera izquierda',
            treatment: ''
        },
        race: 'Angus',
        weight: 500,
        date: '2024-01-02'
    },
    {
        _id: '2929',
        food: 'comida',
        genero: 'Macho',
        health: {
            _id: '2992',
            status: 'Saludable',
            cattle: '232',
            lastDate: '2024-01-02',
            observes: 'Pérdida de apetito',
            treatment: ''
        },
        race: 'Holstein',
        weight: 100,
        date: '2024-01-02'
    },
    {
        _id: '2929',
        food: 'comida',
        genero: 'Hembra',
        health: {
            _id: '2992',
            status: 'Saludable',
            cattle: '232',
            lastDate: '2024-01-02',
            observes: 'En espera de parto, inseminación en febrero',
            treatment: ''
        },
        race: 'Hereford',
        weight: 200,
        date: '2024-01-02'
    },
    {
        _id: '2929',
        food: 'comida',
        genero: 'Hembra',
        health: {
            _id: '2992',
            status: 'Saludable',
            cattle: '232',
            lastDate: '2024-01-02',
            observes: 'En espera de parto, inseminación en febrero',
            treatment: ''
        },
        race: 'Hereford',
        weight: 200,
        date: '2024-01-02'
    },

]

export type Payment = CattleType
export const columns: ColumnDef<Payment>[] = [
    {
        header: "Raza",
        accessorKey: "race",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="capitalize">{row.getValue("race")}</div>
        ),
    },

    {
        header: "Fecha de Nacimiento",
        accessorKey: "date",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="">{formatDate(row.getValue("date"))}</div>
        ),
    },
    {
        header: "Genero",
        accessorKey: "genero",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 text-gray-500 font-medium">
                    <AvatarFallback>{row.original.genero.split('')[0]}</AvatarFallback>
                </Avatar>

                <p className="font-medium">{row.getValue("genero")}</p>
            </div>
        ),
    },
    {
        accessorKey: "weight",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Peso en Kg
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="">{row.getValue('weight')}Kg</div>
        ),
    },
    {
        header: "Estado",
        accessorKey: "health",
        cell: ({ row }) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const health = row.original.health as healthType
            return (
                <div className="capitalize">
                    <Badge variant={'success'}>{health.status}</Badge>
                </div>
            )
        },
    },
    {
        header: "Observaciones",
        accessorKey: "health",
        cell: ({ row }) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const health = row.original.health as healthType
            return <div className="capitalize max-w-56">{health.observes}</div>
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Eliminar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export function TableComponent() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })


    return (
        <div className="w-full">

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No hay resultados.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">

                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Siguiente
                    </Button>
                </div>
            </div>
        </div>
    )
}
