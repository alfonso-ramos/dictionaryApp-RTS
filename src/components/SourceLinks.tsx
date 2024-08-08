type SourceLinksProps = {
    sourceUrls: string[];
  };
  
  const SourceLinks = ({ sourceUrls }: SourceLinksProps) => {
    console.log(sourceUrls)
    return (
      <>
        <hr />
        <p className="mt-6 mb-16 text-white dark:text-black">
          {sourceUrls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="underline flex flex-col">
              Source <span>{url}</span> 
            </a>
          ))}
        </p>
      </>
    );
  };
  
  export default SourceLinks;
  