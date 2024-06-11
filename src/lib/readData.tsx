// import Header from "@/components/header";
// import { GetStaticProps, NextPage } from "next";
// import { promises as fs } from "node:fs";
// import path from "path";


// export interface Data {
//     image: string;
//     title: string;
//     paragraph: string;
//   }
  
//   interface Props {
//     data: Data[];
//   }
  
//   const Home: NextPage<Props> = ({ data }) => {
//     return (
//       <div>
//         <Header data={data} />
//       </div>
//     );
//   };
  
//   export const getStaticProps: GetStaticProps = async () => {
//     const filePath = path.join(process.cwd(), "data", "home.json");
//     const jsonData = await fs.readFile(filePath, 'utf8');
//     const data = JSON.parse(jsonData);
  
//     return {
//       props: {
//         data: data.data,
//       },
//     };
//   };
  
//   export default Home;