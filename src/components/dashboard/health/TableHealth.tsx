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
import { CattleType, healthTypeWithCattle } from "@/types"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const data: Payment[] = [
    {
        _id:'2929',
        cattle:{
            _id:'2902',
            date:'2023-10-11',
            food:'comida',
            genero:'Macho',
            health:'222',
            race:'Angus',
            weight:500,
        },
        lastDate:'2024-10-20',
        observes:'Lesión en pata trasera izquierda',
        status:{
            _id:'2290',
            status:'saludable',
            value:'1'
        },
        treatment:'Colocar su medicamento cada 8 horas '
    },
    {
        _id:'2929',
        cattle:{
            _id:'2902',
            date:'2023-10-11',
            food:'comida',
            genero:'Macho',
            health:'222',
            race:'Angus',
            weight:500,
        },
        lastDate:'2024-10-20',
        observes:'Lesión en pata trasera izquierda',
        status:{
            _id:'2290',
            status:'saludable',
            value:'1'
        },
        treatment:'Colocar su medicamento cada 8 horas '
    },
    {
        _id:'2929',
        cattle:{
            _id:'2902',
            date:'2023-10-11',
            food:'comida',
            genero:'Macho',
            health:'222',
            race:'Angus',
            weight:500,
        },
        lastDate:'2024-10-20',
        observes:'Lesión en pata trasera izquierda',
        status:{
            _id:'2290',
            status:'saludable',
            value:'1'
        },
        treatment:'Colocar su medicamento cada 8 horas '
    },
  

]

export type Payment =  healthTypeWithCattle
export const columns: ColumnDef<Payment>[] = [
    {
        header: "Raza",
        accessorKey: "race",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="capitalize"> {row?.original?.cattle?.race as string}</div>
        ),
    },
    {

        accessorKey: "weight",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="px-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Peso en Kg
                    <CaretSortIcon className="h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="">{row.original.cattle.weight }Kg</div>
        ),
    },

    {
        header: "Estado",
        accessorKey: "status",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <Badge variant={'success'}>{ row.original.status.status }</Badge>
        ),
    },

    {
        header: "Observaciones",
        accessorKey: "observes",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="flex items-center gap-3">  { row.getValue("observes") }</div>
        ),
    },

    {
        header: "Tratamiento",
        accessorKey: "treatment",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="capitalize max-w-56">{row.getValue("treatment")}</div>
        ),
    },
    {
        header: "Ultima Fecha de Observación",
        accessorKey: "lastDate",
        cell: ({ row }) => (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <div className="">{ formatDate(row.getValue("lastDate")) }</div>
        ),
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

export function TableHealth() {
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
