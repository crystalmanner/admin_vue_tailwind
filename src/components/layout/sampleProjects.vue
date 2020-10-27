<template>
  <v-container fluid>
    <!-- first row start-->
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg12 xl12 pl-4>
            <v-layout row wrap>
              <div style="width: 100%">
                <h3 class="headline mb-0" style="color: #ffffff;"><strong>sample project</strong></h3>
              </div>
            </v-layout>
          </v-flex>
          <!-- general-->
              <!-- project general card-->
              <v-flex xs12 sm12 md12 lg12 xl8 mt-3 px-2>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">DE_2019121</h3>
                      <div>zinc die cast + 2 layer powder coating</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap mt-2>
                        <v-flex lg2 xl2>
                          <v-select dense :items="general.category" label="category"></v-select>
                        </v-flex>
                        <v-flex lg2 xl2 pl-5>
                          <v-select dense :items="general.projectnumber" label="#"></v-select>
                        </v-flex>
                        <v-flex lg2 xl2 pl-5>
                          <v-select dense :items="general.projectsubnumber" label="# sub"></v-select>
                        </v-flex>
                        <v-layout justify-end>
                            <v-flex lg6 xl6 pl-5>
                                <v-select  dense :items="general.datetime" label="date"></v-select>
                            </v-flex>
                        </v-layout>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg12 xl12 px-12 mt-2>
                      <v-layout row wrap>
                        <v-flex lg12 xl12>
                          <v-select :items="general.company" label="company"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg12 xl12 px-12 mt-2>
                      <v-layout row wrap>
                        <v-flex lg3 xl3>
                          <v-text-field label="street" required v-model="general.contact"></v-text-field>
                        </v-flex>
                        <v-flex lg3 xl3 pl-4>
                          <v-text-field label="zip" required v-model="general.zip"></v-text-field>
                        </v-flex>
                        <v-flex lg4 xl4 pl-4>
                          <v-text-field label="town" required v-model="general.town"></v-text-field>
                        </v-flex>
                        <v-flex lg2 xl2 pl-4>
                          <v-select :items="general.country" label="country"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg12 xl12 px-12 mt-2>
                      <v-layout row wrap>
                        <v-flex lg4 xl4>
                          <v-text-field label="Contact" required v-model="projectDetails.contact"></v-text-field>
                        </v-flex>
                        <v-flex lg4 xl4 pl-4>
                          <v-text-field label="Email" required v-model="projectDetails.email"></v-text-field>
                        </v-flex>
                        <v-flex lg4 xl4 pl-4>
                          <v-text-field label="Mobile" required v-model="projectDetails.phone"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-title>
                  <v-card-actions>
                    <v-flex md12 lg12 xl12>
                      <v-layout>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn
                            fill
                            block
                            style="color:#fff; font-size:12px;"
                            color="grey"
                            v-bind:class="{ activeProject: sampleProjectType=='DECORATIVE'}"
                          >DECORATIVE</v-btn>
                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn
                            fill
                            block
                            color="grey"
                            style="color:#fff; font-size:12px;"
                            v-bind:class="{ activeProject: (sampleProjectType=='FUNCTIONAL')}"
                          >FUNCTIONAL</v-btn>
                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn
                            fill
                            block
                            color="grey"
                            style="color:#fff; font-size:12px;"
                            v-bind:class="{ activeProject: (sampleProjectType=='MOBILITY')}"
                          >MOBILITY</v-btn>
                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn
                            fill
                            block
                            color="grey"
                            style="color:#fff; font-size:12px;"
                            v-bind:class="{ activeProject: (sampleProjectType=='ARCHITECTURE')}"
                          >ARCHITECTURE</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!-- project details card END-->
          <!-- general END-->

          <!-- situation-->
              <!-- situation card DECORATIVE -->
              <v-flex xs12 sm12 md12 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'DECORATIVE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">situation</h3>
                      <div>general features</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout mt-2>
                        <v-flex lg6 xl6>
                          <v-select dense :items="decorative.substrate" label="substrate"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-layout row wrap style="position:absolute; bottom:60px; width:100%;">
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3 mt-4>
                            <div>shortened link:</div>
                          </v-flex>
                          <v-flex lg9 xl9 mt-4>
                            <a  href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hd2jhjk </a>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3>
                            <div>source link:</div>
                          </v-flex>
                          <v-flex lg9 xl9>
                            <a href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hero/section1/section2/secion3/section4/section5</a>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                  </v-card-title>
                  <v-card-actions style="position:absolute; bottom:-3px; width:100%;">
                    <v-flex md12 lg12 xl12>
                      <v-divider></v-divider>
                      <v-layout mt-1 row wrap>
                        <v-flex md6 lg2 xl2 px-2 pt-1>
                          <span style="font-size:18px; margin-left:10px;">
                            <b>status</b>
                          </span>
                        </v-flex>
                        <v-flex md6 lg2 xl2 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="green" style="color:#fff; margin-top: 1px;">NFC</v-btn>
                          </div>
                        </v-flex>
                        <v-flex md6 lg3 xl3 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="red" style="color:#fff; margin-top: 1px;">ON HOLD</v-btn>
                          </div>

                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn fill color="blue" style="color:#fff; float:right;">submit</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!-- situation card  DECORATIVE END-->

              <!-- situation card FUNCTIONAL -->
              <v-flex xs12 sm12 md12 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'FUNCTIONAL'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">situation</h3>
                      <div>general features</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12  mt-2>
                      <v-divider></v-divider>
                      <v-layout mt-2>
                        <v-flex lg6 xl6>
                          <v-select dense :items="functional.substrate" label="substrate"></v-select>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap>
                        <v-flex xs4>
                          <v-checkbox value label="heat treatment"></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-flex>


                    <v-layout row wrap style="position:absolute; bottom:60px; width:100%;">
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3 mt-4>
                            <div>shortened link:</div>
                          </v-flex>
                          <v-flex lg9 xl9 mt-4>
                            <a  href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hd2jhjk </a>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3>
                            <div>source link:</div>
                          </v-flex>
                          <v-flex lg9 xl9>
                            <a href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hero/section1/section2/secion3/section4/section5</a>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                  </v-card-title>
                  <v-card-actions style="position:absolute; bottom:-3px; width:100%;">
                    <v-flex md12 lg12 xl12>
                      <v-divider></v-divider>
                      <v-layout mt-1 row wrap>
                        <v-flex md6 lg2 xl2 px-2 pt-1>
                          <span style="font-size:18px; margin-left:10px;">
                            <b>status</b>
                          </span>
                        </v-flex>
                        <v-flex md6 lg2 xl2 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="green" style="color:#fff; margin-top: 1px;">NFC</v-btn>
                          </div>
                        </v-flex>
                        <v-flex md6 lg3 xl3 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="red" style="color:#fff; margin-top: 1px;">ON HOLD</v-btn>
                          </div>

                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn fill color="blue" style="color:#fff; float:right;">submit</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!-- situation card  FUNCTIONAL END-->

              <!-- situation card MOBILITY -->
              <v-flex xs12 sm12 md12 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'MOBILITY'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">situation</h3>
                      <div>general features</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout mt-2>
                        <v-flex lg6 xl6>
                          <v-select dense :items="mobility.substrate" label="substrate"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-layout row wrap style="position:absolute; bottom:60px; width:100%;">
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3 mt-4>
                            <div>shortened link:</div>
                          </v-flex>
                          <v-flex lg9 xl9 mt-4>
                            <a  href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hd2jhjk </a>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3>
                            <div>source link:</div>
                          </v-flex>
                          <v-flex lg9 xl9>
                            <a href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hero/section1/section2/secion3/section4/section5</a>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                  </v-card-title>
                  <v-card-actions style="position:absolute; bottom:-3px; width:100%;">
                    <v-flex md12 lg12 xl12>
                      <v-divider></v-divider>
                      <v-layout mt-1 row wrap>
                        <v-flex md6 lg2 xl2 px-2 pt-1>
                          <span style="font-size:18px; margin-left:10px;">
                            <b>status</b>
                          </span>
                        </v-flex>
                        <v-flex md6 lg2 xl2 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="green" style="color:#fff; margin-top: 1px;">NFC</v-btn>
                          </div>
                        </v-flex>
                        <v-flex md6 lg3 xl3 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="red" style="color:#fff; margin-top: 1px;">ON HOLD</v-btn>
                          </div>

                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn fill color="blue" style="color:#fff; float:right;">submit</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!-- situation card  MOBILITY END-->

              <!-- situation card ARCHITECTURE -->
              <v-flex xs12 sm12 md12 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'ARCHITECTURE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">situation</h3>
                      <div>general features</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout mt-2>
                        <v-flex lg6 xl6>
                          <v-select dense :items="architecture.substrate" label="substrate"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-layout row wrap style="position:absolute; bottom:60px; width:100%;">
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3 mt-4>
                            <div>shortened link:</div>
                          </v-flex>
                          <v-flex lg9 xl9 mt-4>
                            <a  href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hd2jhjk </a>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap align-left>
                          <v-flex lg3 xl3>
                            <div>source link:</div>
                          </v-flex>
                          <v-flex lg9 xl9>
                            <a href="#" style="font-size: 11px;">https://www.hillebrand-coating.com/hero/section1/section2/secion3/section4/section5</a>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                  </v-card-title>
                  <v-card-actions style="position:absolute; bottom:-3px; width:100%;">
                    <v-flex md12 lg12 xl12>
                      <v-divider></v-divider>
                      <v-layout mt-1 row wrap>
                        <v-flex md6 lg2 xl2 px-2 pt-1>
                          <span style="font-size:18px; margin-left:10px;">
                            <b>status</b>
                          </span>
                        </v-flex>
                        <v-flex md6 lg2 xl2 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="green" style="color:#fff; margin-top: 1px;">NFC</v-btn>
                          </div>
                        </v-flex>
                        <v-flex md6 lg3 xl3 offset-lg1 offset-xl1>
                          <div>
                            <v-btn fill color="red" style="color:#fff; margin-top: 1px;">ON HOLD</v-btn>
                          </div>

                        </v-flex>
                        <v-flex md6 lg3 xl3 px-2>
                          <v-btn fill color="blue" style="color:#fff; float:right;">submit</v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!-- situation card  ARCHITECTURE END-->
          <!-- situation END-->

          <!-- coating system-->
              <!-- coating system card  DECORATIVE-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='DECORATIVE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">coating system</h3>
                      <div>powder coating specification</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg8 xl6 mt-3>
                          <v-select dense :items="decorative.cproduct" label="powder product"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg3 xl3>
                          <v-select dense :items="decorative.color" label="color"></v-select>
                        </v-flex>
                        <v-flex lg2 xl2 pl-2 pt-3>
                          <svg width="40" height="30">
                            <rect
                                    width="40"
                                    height="30"
                                    style="fill:#F44336;stroke-width:0;stroke:rgb(0,0,0)"
                            ></rect>
                          </svg>
                        </v-flex>
                        <v-flex lg4 xl4 pt-3 pl-0>
                          <v-checkbox
                                  v-model="checkbox1"
                                  label="metallic"
                                  style="margin-top:3px; height:24px; padding-top: 0px;"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex lg4 xl4>
                          <v-select dense :items="decorative.structure" label="structure"></v-select>
                        </v-flex>
                        <v-flex lg4 xl4 pl-5>
                          <v-select dense :items="decorative.glossiness" label="glossiness"></v-select>
                        </v-flex>
                        <v-flex lg3 xl3 pl-5>
                          <v-text-field label="gloss level" required v-model="projectDetails.decorativeglossgrade"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- coating system card  DECORATIVE END-->

              <!-- coating system card  FUNCTIONAL-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='FUNCTIONAL'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">coating system</h3>
                      <div>lubricant specification</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg8 xl6 mt-3>
                          <v-select dense :items="functional.cproduct" label="lubricant"></v-select>
                        </v-flex>
                        <v-flex lg8 xl6 mt-3 pl-5>
                          <v-select dense :items="functional.cproductcategory" label="lubicant category"></v-select>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap align-left>
                        <v-flex lg8 xl6>
                          <v-select dense :items="functional.cproductsolid" label="solid lubricant"></v-select>
                        </v-flex>
                        <v-flex lg8 xl6 pl-5>
                          <v-select dense :items="functional.cproductorigin" label="lubicant origin"></v-select>
                        </v-flex>

                      </v-layout>
                    </v-flex>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg4 xl4 mt-3>
                          <div>additional fields ...</div>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- coating system card  FUNCTIONAL END-->

              <!-- coating system card  MOBILITY-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='MOBILITY'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">coating system</h3>
                      <div>lubricant specification</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg8 xl6 mt-3>
                          <v-select dense :items="mobility.cprocess" label="HEO coating process"></v-select>
                        </v-flex>
                        <v-flex lg8 xl6 mt-3 pl-5>
                          <v-select dense :items="mobility.cproduct" label="coating product"></v-select>
                        </v-flex>
                      </v-layout>

                    </v-flex>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg4 xl4 mt-3>
                          <div>additional fields ...</div>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- coating system card  MOBILITY END-->

              <!-- coating system card  ARCHITECTURE-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='ARCHITECTURE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">coating system</h3>
                      <div>powder coating specification</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg8 xl6 mt-3>
                          <v-select dense :items="architecture.cproduct" label="powder product"></v-select>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap align-left>
                        <v-flex lg3 xl3>
                          <v-select dense :items="architecture.color" label="color"></v-select>
                        </v-flex>
                        <v-flex lg2 xl2 pl-2 pt-3>
                          <svg width="40" height="30">
                            <rect
                                    width="40"
                                    height="30"
                                    style="fill:#F0ff36;stroke-width:0;stroke:rgb(0,0,0)"
                            ></rect>
                          </svg>
                        </v-flex>
                        <v-flex lg4 xl4 pt-3 pl-0>
                          <v-checkbox
                                  v-model="checkbox1"
                                  label="metallic"
                                  style="margin-top:3px; height:24px; padding-top: 0px;"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex lg4 xl4>
                          <v-select dense :items="architecture.structure" label="structure"></v-select>
                        </v-flex>
                        <v-flex lg4 xl4 pl-5>
                          <v-select dense :items="architecture.glossiness" label="glossiness"></v-select>
                        </v-flex>
                        <v-flex lg3 xl3 pl-5>
                          <v-text-field label="gloss level" required v-model="projectDetails.architectureglossgrade"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- coating system card  ARCHITECTURE END-->
          <!-- coating system END-->

          <!-- corrosion protection -->
              <!-- corrosion protection card  DECORATIVE-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='DECORATIVE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">corrosion protection</h3>
                      <div>protective layer</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg10 xl10 mt-3>
                            <v-select dense :items="decorative.pretreatment" label="pretreatment"></v-select>
                          </v-flex>
                          <v-flex lg10 xl10>
                            <v-select dense :items="decorative.cprimer" label="primer"></v-select>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- corrosion protection card  DECORATIVE END-->

              <!-- corrosion protection card  FUNCTIONAL-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='FUNCTIONAL'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">corrosion protection</h3>
                      <div>protective layer</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg10 xl10 mt-3>
                            <v-select dense :items="functional.pretreatment" label="pretreatment"></v-select>
                          </v-flex>
                          <v-flex lg10 xl10>
                            <v-select dense :items="functional.corrosionprotection" label="corrosion correction system"></v-select>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- corrosion protection card  DECORATIVE END-->

              <!-- corrosion protection card  MOBILITY-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='MOBILITY'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">corrosion protection</h3>
                      <div>protective layer</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg10 xl10 mt-3>
                            <v-select dense :items="mobility.pretreatment" label="pretreatment"></v-select>
                          </v-flex>
                          <v-flex lg10 xl10>
                            <v-select dense :items="mobility.corrosionprotection" label="corrosion protection"></v-select>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- corrosion protection card  MOBILITY END-->

              <!-- corrosion protection card  ARCHITECTURE-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType=='ARCHITECTURE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">corrosion protection</h3>
                      <div>protective layer</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap align-left>
                          <v-flex lg10 xl10 mt-3>
                            <v-select dense :items="architecture.pretreatment" label="pretreatment"></v-select>
                          </v-flex>
                          <v-flex lg10 xl10>
                            <v-select dense :items="architecture.cprimer" label="primer"></v-select>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- corrosion protection card  ARCHITECTURE END-->
          <!-- corrosion protection END-->

          <!-- application -->
              <!-- application card DECORATIVE-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'DECORATIVE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">application</h3>
                      <div>application + services</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap mt-3>
                          <v-flex lg8 xl8 mt-3>
                            <v-select dense :items="decorative.application" label="application"></v-select>
                          </v-flex>
                          <v-flex md12 lg12 xl12 mt-3>
                            <b>services</b>
                            <br>
                            <v-layout row wrap>
                              <v-flex xs4>
                                <v-checkbox value label="assembly"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="packing"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="sea packing"></v-checkbox>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                          <v-flex md12 lg12 xl12 mt-3 v-if="sampleProjectType=='FUNCTIONAL'">
                            <b>services</b>
                            <br>
                            <v-layout row wrap>
                              <v-flex xs5>
                                <v-checkbox value label="zero-error sorting"></v-checkbox>
                              </v-flex>
                              <v-flex xs3>
                                <v-checkbox value label="packing"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="labeling"></v-checkbox>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- application card DECORATIVE END-->

              <!-- application card FUNCTIONAL-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'FUNCTIONAL'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">application</h3>
                      <div>application + services</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap mt-3>
                          <v-flex lg8 xl8 mt-3>
                            <v-select dense :items="functional.application" label="application"></v-select>
                          </v-flex>
                          <v-flex md12 lg12 xl12 mt-3>
                            <b>services</b>
                            <br>
                            <v-layout row wrap>
                              <v-flex xs4>
                                <v-checkbox value label="assembly"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="packing"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="zero error check"></v-checkbox>
                              </v-flex>
                            </v-layout>
                          </v-flex>

                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- application card FUNCTIONAL END-->

              <!-- application card MOBILITY-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'MOBILITY'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">application</h3>
                      <div>application + services</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap mt-3>
                          <v-flex lg8 xl8 mt-3>
                            <v-select dense :items="mobility.application" label="application"></v-select>
                          </v-flex>
                          <v-flex md12 lg12 xl12 mt-3>
                            <b>services</b>
                            <br>
                            <v-layout row wrap>
                              <v-flex xs4>
                                <v-checkbox value label="optical check"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="zero error sorting"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="packing"></v-checkbox>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- application card MOBILITY END-->

              <!-- application card ARCHITECTURE-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2 v-if="sampleProjectType == 'ARCHITECTURE'">
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">application</h3>
                      <div>application + services</div>
                    </div>
                    <v-layout row wrap>
                      <v-flex md12 lg12 xl12 px-12 mt-2>
                        <v-divider></v-divider>
                        <v-layout row wrap mt-3>
                          <v-flex lg8 xl8 mt-3>
                            <v-select dense :items="architecture.application" label="application"></v-select>
                          </v-flex>
                          <v-flex md12 lg12 xl12 mt-3>
                            <b>services</b>
                            <br>
                            <v-layout row wrap>
                              <v-flex xs4>
                                <v-checkbox value label="packing"></v-checkbox>
                              </v-flex>
                              <v-flex xs4>
                                <v-checkbox value label="foiling"></v-checkbox>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- application card ARCHITECTURE END-->
          <!-- application END-->

          <!-- QMA -->
              <!-- QMA card GENERAL-->
              <v-flex xs3 sm3 md3 lg6 xl4 mt-3 px-2>
                <v-card height="100%">
                  <v-card-title primary-title>
                    <div style="width: 100%">
                      <h3 class="headline mb-0">qma</h3>
                      <div>quality assurance measures</div>
                    </div>
                    <v-flex md12 lg12 xl12 px-12 mt-2>
                      <v-divider></v-divider>
                      <v-layout row wrap mt-3>
                        <v-flex lg4 xl4>
                          <v-text-field label="layer thickness 1" required v-model="projectDetails.layerthickness1"></v-text-field>
                        </v-flex>
                        <v-flex lg1 xl1 mt-4>µm</v-flex>
                        <v-flex lg7 xl7 pl-5>
                          <v-text-field label="measure location 1" required v-model="projectDetails.layermlocation1"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap mt-3>
                        <v-flex lg4 xl4>
                          <v-text-field label="layer thickness 2" required v-model="projectDetails.layerthickness2"></v-text-field>
                        </v-flex>
                        <v-flex lg1 xl1 mt-4>µm</v-flex>
                        <v-flex lg7 xl7 pl-5>
                          <v-text-field label="measure location 2" required v-model="projectDetails.layermlocation2"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row wrap mt-3>
                        <v-flex lg4 xl4>
                          <v-text-field label="layer thickness 3" required v-model="projectDetails.layerthickness3"></v-text-field>
                        </v-flex>
                        <v-flex lg1 xl1 mt-4>µm</v-flex>
                        <v-flex lg7 xl7 pl-5>
                          <v-text-field label="measure location 3" required v-model="projectDetails.layermlocation3"></v-text-field>
                        </v-flex>
                      </v-layout>
                      </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
              <!-- QMA card GENERAL END-->
          <!-- QMA END -->

        </v-layout>
      </v-flex>
      <!-- third row end -->
    </v-layout>
  </v-container>
</template>



<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sampleProject"]),
    ...mapGetters(["sampleProjectType"])
  },
  methods: {},
  mounted() {},
  data: () => ({
    projectDetails: {
      email: "+dom@utom.de",
      phone: "+4915114966080"
    },
    general: {
      category: ["DE", "TC", "MO", "AR"],
      projectnumber: [120, 121, 122, 123],
      projectsubnumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      datetime: ["21.04.2019 10:15", "21.04.2019 18:23", "22.04.2019 13:33"],

      company: ["HDO Paderborn", "HUECK Benelux"],
      country: [
        "Deutschland",
        "Italien",
        "Slowakei",
        "Frankreich",
        "Niederlande",
        "Belgien",
        "England",
        "Irland"
      ],

      substrate: [
        "steal",
        "aluminium",
        "zinc die cast",
        "aluminium die cast",
        "magnesium die cast",
        "plastic"
      ]
    },
    decorative: {
      substrate: [
        "steal",
        "aluminium",
        "zinc die cast",
        "aluminium die cast",
        "magnesium die cast",
        "plastic"
      ],
      cproduct: [
        "Interpon 700",
        "Tiger C4000",
        "IGP Durafit 3009"
      ],
      structure: [
        "fine structure",
        "semifine structure",
        "raw structure"
      ],
      glossiness: [
        "matte",
        "semiglossy",
        "glossy"
      ],
      pretreatment: [
        "aluminium pretreatment",
        "steal pretreatment",
        "ENDURON"
      ],
      cprimer: [
        "INTERPON BPP 600 - PRIMER GREY 7035 AGI",
        "IGP BPP 600 - PRIMER GREY 7035 AGI",
        "TIGER BPP 600 - PRIMER GREY 7035 AGI"
      ],
      color: [
        "RAL 2637",
        "RAL 1277",
        "RAL 7888",
        "RAL 9021",
        "RAL 3444",
      ],

      application: [
        "equipment 1 metallic",
        "equipment 1 plastic"
      ]


    },
    functional: {
      substrate: [
        "steal",
        "steal 8.8",
        "steal 10.9",
        "steal 12.9",
        "stainless steal",
        "aluminium",
        "zinc die cast",
        "aluminium die cast",
        "magnesium die cast",
        "edm"
      ],
      cproduct: [
        "D 1000",
        "TCA1000",
        "TCA2000",
        "TCA3000",
        "TCA4000",
        "TCA5000",
        "TCA6000",
        "TCA7000"
      ],
      cproductsolid: [
        "MOS2",
        "graphite",
        "ptfe"
      ],
      cproductcategory: [
        "lubricant",
        "nano coating"
      ],
      cproductorigin: [
        "brand A",
        "brand B",
        "brand C",
        "brand D"
      ],
      pretreatment: [
        "ENDURION",
        "Strahlen",
        "Sandstrahlen"
      ],
      corrosionprotection: [
        "zinc nickel w topcoat",
        "zinc nickel wo topcoat",
        "zinc iron w topcoat",
        "zinc iron wo topcoat",
        "Delat KL120"
      ],
      application: [
        "tribocoater 1 vertical",
        "tribocoater 2 horizontal",
        "tribopainter 1",
        "tribocoater 3 test equipment"
      ]
    },
    mobility: {
      substrate: [
        "steal",
        "aluminium",
        "die cast"
      ],
      cprocess: [
        "ecoatHEO®",
        "mattHEO®",
        "ceramHEO®",
        "flatHEO®"
      ],
      cproduct: [
        "Tiger HGF",
        "mattHEO®",
        "ceramHEO®",
        "flatHEO®"
      ],
      pretreatment: [
        "degreasing",
        "deburring"
      ],
      corrosionprotection: [
        "ecoat",
        "powder primer"
      ],
      application: [
        "ecoat line",
        "ecoat - powder line",
        "ecoat - high gloss line"
      ]
    },
    architecture: {
      substrate: [
        "aluminium"
      ],
      cproduct: [
        "Interpon 700",
        "Tiger C4000",
        "IGP Durafit 3009"
      ],
      structure: [
        "fine structure",
        "semifine structure",
        "raw structure"
      ],
      glossiness: [
        "matte",
        "semiglossy",
        "glossy"
      ],
      pretreatment: [
        "aluminium pretreatment"
      ],
      cprimer: [
        "INTERPON BPP 600 - PRIMER GREY 7035 AGI",
        "IGP BPP 600 - PRIMER GREY 7035 AGI",
        "TIGER BPP 600 - PRIMER GREY 7035 AGI"
      ],
      color: [
        "RAL 2637",
        "RAL 1277",
        "RAL 7888",
        "RAL 9021",
        "RAL 3444",
      ],

      application: [
        "equipment 4"

      ]
    }
  })
};
</script>

<style>
.change-font {
  font-size: 10px;
}
</style>
