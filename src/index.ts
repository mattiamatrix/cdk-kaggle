import { Construct } from 'constructs';

export interface KaggleProps {
  url: string;
}

export class Kaggle extends Construct {
  public constructor(scope: Construct, id: string, private readonly props: KaggleProps) {
    super(scope, id);

    console.log(this.props.url);
  }
}
