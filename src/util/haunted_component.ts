import haunted from 'haunted';
import { render } from 'lit';

type TemporaryRenderFunction =
    (result: unknown, container: DocumentFragment | Element)=> void;

export const {component} = haunted({render: render as TemporaryRenderFunction});
