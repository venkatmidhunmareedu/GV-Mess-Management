import React from 'react'
import { Table } from 'flowbite-react'

const TableComp = () => {
    return (
        <>
            <div className="overflow-x-auto border-[0.5px] border-slate-700 rounded-lg bg-slate-950 bg-opacity-10">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Session</Table.HeadCell>
                        <Table.HeadCell>Item</Table.HeadCell> 
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Morning
                            </Table.Cell>
                            <Table.Cell>Dosa + two chutneys</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Afternoon
                            </Table.Cell>
                            <Table.Cell>Veg-Biryani + chicken curry {"(Non-Veg)"} + Punner curry {"(Veg)"} + Raita </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Evening</Table.Cell>
                            <Table.Cell>White rice + alu curry + sambar + curd</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default TableComp