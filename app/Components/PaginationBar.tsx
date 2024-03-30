"use client";
import React, { useState, useEffect } from 'react';

interface PaginationBarProps {
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

export default function PaginationBar({ totalPages, onPageChange }: PaginationBarProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(Math.min(totalPages, 7));

    useEffect(() => {
        setEndPage(Math.min(totalPages, startPage + 6));
    }, [totalPages, startPage]);

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            if (currentPage === startPage) {
                setStartPage(Math.max(1, startPage - 1));
                setEndPage(Math.min(totalPages, endPage - 1));
            }
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            if (currentPage === endPage) {
                setStartPage(Math.min(totalPages - 6, startPage + 1));
                setEndPage(Math.min(totalPages, endPage + 1));
            }
        }
    };

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div>
            <nav aria-label="Pagination">
                <ul className="inline-flex -space-x-px text-base h-10">
                    {startPage > 1 && (
                        <li>
                            <button
                                onClick={goToPreviousPage}
                                className="flex items-center rounded-l-lg justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                {"Prev"}
                            </button>
                        </li>
                    )}
                    {pageNumbers.map((pageNumber) => (
                        <li key={pageNumber}>
                            <button
                                onClick={() => goToPage(pageNumber)}
                                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                                    currentPage === pageNumber
                                        ? 'text-blue-600 border-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                                        : ''
                                }
                                ${
                                    pageNumber === 1
                                        ? 'rounded-l-lg'
                                        : ''
                                }
                                ${
                                    pageNumber === totalPages
                                        ? 'rounded-r-lg'
                                        : ''
                                }
                                `
                                }
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                    {endPage < totalPages && (
                        <li>
                            <button
                                onClick={goToNextPage}
                                className="flex items-center rounded-r-lg justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                {"Next"}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}
