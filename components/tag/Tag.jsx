const Tag = () => {
 const tagList = [
  'React',
  'JavaScript',
  'TypeScript',
  'CSS',
  'SASS',
  'NodeJS',
  '.NET Core',
  'C#',
  'Golang',
  'Unit Testing',
  'Microservices',
  'NoSQL',
  'SQL',
  'Docker',
 ];
 return (
  <>
   {tagList.map((tag, i) => (
    <button className="resume-btn text-[15px]" key={i}>
     {tag}
    </button>
   ))}
  </>
 );
};

export default Tag;
