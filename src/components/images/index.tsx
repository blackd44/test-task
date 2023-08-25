import css from './style.module.scss'

type props = {
  src: string;
  alt?: string;
  loading?: "lazy" | "eager" | undefined;
};

const Image = ({ src, alt = "image alt", loading = "lazy" }: props) => {
  return (
    <div className={css.image}>
      <img src={src} alt={alt} loading={loading} />
    </div>
  );
};

export default Image;
