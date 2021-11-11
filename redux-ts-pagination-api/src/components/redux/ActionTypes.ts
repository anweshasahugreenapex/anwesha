export type User = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  export type hit = {
    author: string;
    comment_text: null;
    created_at: string;
    created_at_i: number;
    num_comments: number;
    objectID: string;
    parent_id: null;
    points: number;
    story_id: null;
    story_text: null;
    story_title: null;
    story_url: null;
    title: string;
    url: string;
    _highlightResult: any;
    _tags: any;
  };
  
  export type fetchedObjectType = {
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    hits: any;
    hitsPerPage: number;
    nbHits: number;
    nbPages: number;
    page: number;
    params: string;
    processingTimeMS: number;
    query: string;
    renderingContent: any;
  };
  export interface State {
    loading: boolean;
    data: hit[];
    error: string;
  }