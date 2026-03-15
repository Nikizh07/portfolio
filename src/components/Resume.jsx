import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Heading from "./Heading";
import DarkModeButton from "./DarkModeButton";
import NavContainer from "./NavContainer";
import MobileMenu from "./MobileMenu";
import resumePdf from "../assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(320);
  const [loadError, setLoadError] = useState("");
  const viewerRef = useRef(null);

  useEffect(() => {
    const updatePageWidth = () => {
      if (!viewerRef.current) {
        return;
      }

      const nextWidth = Math.min(viewerRef.current.clientWidth - 24, 720);
      setPageWidth(nextWidth > 0 ? nextWidth : 320);
    };

    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);

    return () => window.removeEventListener("resize", updatePageWidth);
  }, []);

  const handleDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setLoadError("");
    setNumPages(nextNumPages);
  };

  const handleDocumentLoadError = (error) => {
    setLoadError(error?.message || "Unable to load the resume PDF.");
  };

  return (
    <div>
      <div className="container page-shell lg:mx-[150px] lg:px-0">
        <div className="page-header my-[15px]">
          <div className="lg:mr-[200px]">
            <Heading />
          </div>
          <div className="corner-toggle pt-1">
            <DarkModeButton />
          </div>

          <div className="fuck my-[8px] hidden lg:flex">
            <NavContainer />
          </div>
        </div>
        <div className="mt-4 lg:hidden">
          <MobileMenu />
        </div>
        <div className="hhding">
          <p className="lnk-title mt-8">Resume</p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <div className="muted-copy flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="lnks"
            >
              Open PDF
            </a>
            <a href={resumePdf} download className="lnks">
              Download PDF
            </a>
          </div>

          <div
            ref={viewerRef}
            className="resume-panel mx-auto w-full max-w-3xl rounded-2xl border p-2 sm:p-5"
          >
            {loadError ? (
              <div className="flex flex-col gap-4">
                <p className="skname danger-copy text-sm">{loadError}</p>
                <object
                  data={resumePdf}
                  type="application/pdf"
                  className="resume-frame min-h-[70vh] w-full rounded-xl border"
                >
                  <p className="skname muted-copy p-4 text-sm">
                    Your browser could not render the embedded PDF. Use the Open PDF link above.
                  </p>
                </object>
              </div>
            ) : (
              <Document
                file={{ url: resumePdf }}
                onLoadSuccess={handleDocumentLoadSuccess}
                onLoadError={handleDocumentLoadError}
                loading={<p className="skname muted-copy text-sm">Loading resume...</p>}
                error={<p className="skname danger-copy text-sm">Unable to load the resume PDF.</p>}
                className="flex flex-col items-center gap-4"
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`resume-page-${index + 1}`}
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderAnnotationLayer
                    renderTextLayer
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  />
                ))}
              </Document>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
