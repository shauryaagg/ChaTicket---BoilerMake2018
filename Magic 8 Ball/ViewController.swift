//
//  ViewController.swift
//  Magic 8 Ball
//
//  Created by Dhanushikka Ravichandiran on 5/24/18.
//  Copyright © 2018 Dhanushikka Ravichandiran. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var ImageView: UIImageView!
    var randomValue : Int = 0
    let ballArray = ["ball1", "ball2", "ball3", "ball4","ball5"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        newBallImage()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func askButtonPressed(_ sender: UIButton) {
        newBallImage()
    }
    
    func newBallImage(){
        randomValue = Int(arc4random_uniform(5))
        ImageView.image = UIImage(named: ballArray[randomValue])
    }
    
    override func motionEnded(_ motion: UIEventSubtype, with event: UIEvent?) {
        newBallImage()
    }
    
}

