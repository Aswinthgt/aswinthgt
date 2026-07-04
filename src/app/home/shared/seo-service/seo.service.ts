import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { MetaContent } from '../../../models/models';
import { MetaTagLinkedIn, MetaTagName, MetaTagProperty } from '../meta-enums'

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  meta = inject(Meta)

  updateSEO(content?: Partial<MetaContent>) {

    const metaContent: MetaContent = {
      title: 'Aswinth - Professional Portfolio',
      description: 'Innovative AI & MEAN stack Developer specializing in Machine Learning, MongoDB, Express.js, Angular, and Node.js. Proven track record in optimizing project performance, fine-tuning AI models, and contributing to dynamic web applications.',
      image: 'https://aswinthgt.vercel.app/images/profile-light.png',
      url: 'https://aswinthgt.vercel.app',
      keyWords: "Aswinth, Portfolio, Software Developer, SoftWare Engineer, Aswinth GT, Angular, MEAN, Full Stack Developer, Node.js, Express.js, AI Developer, Machine Learning, Hugging Face, Transformers, Python",
      author: 'Aswinth',
      ...content
    }

    this.updateStandardTags(metaContent)
    this.updateGraphTags(metaContent)
    this.updateLinkedInTag(metaContent)
  }

  private updateStandardTags(metaContent: MetaContent) {
    this.meta.updateTag({ name: MetaTagName.DESCRIPTION, content: metaContent.description })
    this.meta.updateTag({ name: MetaTagName.TITLE, content: metaContent.title })
    this.meta.updateTag({ name: MetaTagName.IMAGE, content: metaContent.image })
    this.meta.updateTag({ name: MetaTagName.URL, content: metaContent.url })
    this.meta.updateTag({ name: MetaTagName.KEYWORDS, content: metaContent.keyWords })
    this.meta.updateTag({ name: MetaTagName.AUTHOR, content: metaContent.author })
  }

  private updateGraphTags(metaContent: MetaContent) {
    this.meta.updateTag({ property: MetaTagProperty.DESCRIPTION, content: metaContent.description })
    this.meta.updateTag({ property: MetaTagProperty.TITLE, content: metaContent.title })
    this.meta.updateTag({ property: MetaTagProperty.IMAGE, content: metaContent.image })
    this.meta.updateTag({ property: MetaTagProperty.URL, content: metaContent.url })
    this.meta.updateTag({ property: MetaTagProperty.SITE_NAME, content: 'Aswinth portfolio' })
    this.meta.updateTag({ property: MetaTagProperty.TYPE, content: "WebPage" })
    this.meta.updateTag({ property: MetaTagProperty.KEYWORDS, content: metaContent.keyWords })
  }

  private updateLinkedInTag(metaContent: MetaContent) {
    this.meta.updateTag({ property: MetaTagLinkedIn.DESCRIPTION, content: metaContent.description })
    this.meta.updateTag({ property: MetaTagLinkedIn.TITLE, content: metaContent.title })
    this.meta.updateTag({ property: MetaTagLinkedIn.IMAGE, content: metaContent.image })
  }
}
