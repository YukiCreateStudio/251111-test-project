

export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: { name: string };
  publishedAt: string;
  createdAt: string;
};

export type MembersType = {
  id:string;
  image:any;
  name:string;
  position:string;
  profile:string;
}

// const client = createClient({
//   serviceDomain:process.env.MICROCMS_SERVICE_DOMAIN,
//   apikey:process.env.MICROCMS_API_KEY,
// });
