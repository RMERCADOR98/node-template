import db from "../Config/db.config";
import Posts from "../Models/posts";

db.sync();

const Create = async (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);

  const post = await Posts.create({
    title: title,
    content: content,
  });

  res.json(post);
};

const AllPosts = async (req, res) => {
  const posts = await Posts.findAll();

  res.json(posts);
};

const Update = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  await Posts.update(
    { title: title, content: content },
    {
      where: {
        id: id,
      },
    }
  );
  console.log(title, content, id);
  res.sendStatus(200);
};

const Delete = async (req, res) => {
  const { id } = req.params;

  await Posts.destroy({
    where: {
      id: id,
    },
  });

  res.json(id);
};

export { AllPosts, Create, Delete, Update };
