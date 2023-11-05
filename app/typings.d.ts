// the path of the post should be /posts/:catalog/:title

interface PostItem {
  date: string;
  title: string;
  catalog: string;
  desc: string;
  tags: string[];
  slug?: string;
}
