import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BlogPost } from '../models/BlogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostServiceService {

  posts: Array<BlogPost>;
  postsSubject: Subject<BlogPost[]>;

  constructor() {
    this.posts = [];
    this.postsSubject = new Subject<BlogPost[]>();
    this.getPosts();
  }

  getPosts(): void {
    let newPost = new BlogPost();
    newPost.title = "Mon premier post";
    newPost.content = "Itaque tum Scaevola cum in eam ipsam mentionem incidisset, exposuit nobis sermonem Laeli de amicitia habitum ab illo secum et cum altero genero, C. Fannio Marci filio, paucis diebus post mortem Africani. Eius disputationis sententias memoriae mandavi, quas hoc libro exposui arbitratu meo; quasi enim ipsos induxi loquentes, ne 'inquam' et 'inquit' saepius interponeretur, atque ut tamquam a praesentibus coram haberi sermo videretur.";
    this.posts.push(newPost);
    newPost = new BlogPost();
    newPost.title = "Mon second post";
    newPost.content = "Itaque tum Scaevola cum in eam ipsam mentionem incidisset, exposuit nobis sermonem Laeli de amicitia habitum ab illo secum et cum altero genero, C. Fannio Marci filio, paucis diebus post mortem Africani. Eius disputationis sententias memoriae mandavi, quas hoc libro exposui arbitratu meo; quasi enim ipsos induxi loquentes, ne 'inquam' et 'inquit' saepius interponeretur, atque ut tamquam a praesentibus coram haberi sermo videretur.";
    this.posts.push(newPost);
    newPost = new BlogPost();
    newPost.title = "Et encore un post";
    newPost.content = `Ut enim benefici liberalesque sumus, non ut exigamus gratiam (neque enim beneficium faeneramur sed natura propensi ad liberalitatem sumus), sic amicitiam non spe mercedis adducti sed quod omnis eius fructus in ipso amore inest, expetendam putamus.
    Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.
    Et quoniam apud eos ut in capite mundi morborum acerbitates celsius dominantur, ad quos vel sedandos omnis professio medendi torpescit, excogitatum est adminiculum sospitale nequi amicum perferentem similia videat, additumque est cautionibus paucis remedium aliud satis validum, ut famulos percontatum missos quem ad modum valeant noti hac aegritudine colligati, non ante recipiant domum quam lavacro purgaverint corpus. ita etiam alienis oculis visa metuitur labes.`;
    this.posts.push(newPost);
    newPost = new BlogPost();
    newPost.title = "Petit post";
    newPost.content = "Pouet.";
    this.posts.push(newPost);
    this.emitPosts();
  }

  emitPosts(): void {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(newPost: BlogPost): void {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(indexPost: number): void {
    if (indexPost >= 0 && indexPost < this.posts.length) {
      this.posts.splice(indexPost, 1);
      this.emitPosts();
    }
  }

}
