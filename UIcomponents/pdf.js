import React, { useState, useRef } from 'react';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';

import styled from 'styled-components'

const PdfCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	background-color: #ddd;
	border-radius: 20px;
`
const PageSel = styled.div`
	display: flex;
	padding: 10px 5px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  font-weight: bold;

  button {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 10px;
    background-color: #1920EF;
    color: white;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
  }
  button:hover {
    transform: scale(1.03);
  }
`

const Pdf = ({src}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const ref = useRef(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  function previousPage() {
    changePage(-1);
  }
  function nextPage() {
    changePage(1);
  }

  const width = ref.current?.clientWidth - 30
  console.log(width)
  return (
    <PdfCont ref={ref}>
      <PageSel>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Anterior
        </button>
        <span>
          {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}
        </span>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Siguiente
        </button>
      </PageSel>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page 
          pageNumber={pageNumber} 
          width={width}
        />
      </Document>
    </PdfCont>
  );
}

export default Pdf;
